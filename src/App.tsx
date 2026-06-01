import { Fragment, useRef, useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import { getLocalDateString, getWordByDate, GAME_START_DATE } from "./data";
import { useGame } from "./useGame";
import type { Difficulty, EtymologyStep, WordData } from "./types";
import { isRevealGuess, getRevealedLetter } from "./types";
import "./App.css";

// ── Date utilities ─────────────────────────────────────────────────────────

const SPANISH_MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

function formatSpanishDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return `${d} de ${SPANISH_MONTHS[m - 1]} de ${y}`;
}

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  1: "muy fácil (1 pista)",
  2: "fácil (2 pistas)",
  3: "media (3 pistas)",
  4: "difícil (4 pistas)",
  5: "muy difícil (5 pistas)",
};

function formatShortDate(date: string) {
  const [, m, d] = date.split("-").map(Number);
  return `${d} de ${SPANISH_MONTHS[m - 1]}`;
}

function addDays(date: string, n: number): string {
  const d = new Date(date + "T00:00:00");
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function diffDays(a: string, b: string): number {
  return (new Date(a + "T00:00:00").getTime() - new Date(b + "T00:00:00").getTime()) / 86_400_000;
}

function ordinalPista(n: number): string {
  const ordinals = ["primera", "segunda", "tercera", "cuarta", "quinta", "sexta", "séptima", "octava"];
  return ordinals[n - 1] ?? `${n}ª`;
}

function isValidGameDate(date: string, today: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  if (date > today) return false;
  if (date < GAME_START_DATE) return false;
  return diffDays(today, date) < 7;
}

function getCalendarDays(today: string): string[] {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = addDays(today, -i);
    if (d >= GAME_START_DATE) days.push(d);
  }
  return days;
}

function getStoredGameResult(date: string, wordData: WordData): "won" | "lost" | "in_progress" | "not_played" {
  try {
    const raw = localStorage.getItem(`etimol-${date}`);
    if (!raw) return "not_played";
    const data = JSON.parse(raw);
    const guesses: string[] = Array.isArray(data.guesses) ? data.guesses : [];
    if (guesses.length === 0) return "not_played";
    const norm = (s: string) =>
      s.toLowerCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").normalize("NFC").trim();
    if (guesses.some((g) => g.length > 0 && !g.startsWith("!") && norm(g) === norm(wordData.answer))) return "won";
    if (guesses.length >= wordData.hints.length) return "lost";
    return "in_progress";
  } catch { /* ignore */ }
  return "not_played";
}

function dateFromHash(today: string): string {
  const hash = window.location.hash.replace(/^#/, "");
  return isValidGameDate(hash, today) ? hash : today;
}

// ── Calendar history icon ──────────────────────────────────────────────────

function CalendarHistoryIcon() {
  return (
    <svg
      width="18" height="18" viewBox="0 0 20 20"
      fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="16" height="14" rx="2" />
      <line x1="2" y1="8.5" x2="18" y2="8.5" />
      <line x1="6.5" y1="2" x2="6.5" y2="6" />
      <line x1="13.5" y1="2" x2="13.5" y2="6" />
      <circle cx="5.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="13" r="1.1" fill="currentColor" stroke="none" opacity="0.35" />
    </svg>
  );
}

// ── Calendar modal ─────────────────────────────────────────────────────────

function CalendarModal({
  today,
  currentDate,
  onSelect,
  onClose,
}: {
  today: string;
  currentDate: string;
  onSelect: (date: string) => void;
  onClose: () => void;
}) {
  const days = getCalendarDays(today);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="calendar-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Palabras anteriores">
      <div className="calendar-modal" onClick={(e) => e.stopPropagation()}>
        <div className="calendar-header">
          <span className="calendar-title">Palabras anteriores</span>
          <button className="calendar-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>
        <div className="calendar-days">
          {days.map((date) => {
            const wordData = getWordByDate(date);
            const isToday = date === today;
            const isSelected = date === currentDate;
            const result = wordData ? getStoredGameResult(date, wordData) : "not_played";
            const emoji = result === "won" ? "✅" : result === "lost" ? "❌" : result === "in_progress" ? "⋯" : "➖";
            const dayNum = parseInt(date.split("-")[2], 10);
            const showWord = (result === "won" || result === "lost") && wordData;

            return (
              <button
                key={date}
                className={`calendar-day${isSelected ? " selected" : ""}${isToday ? " today" : ""}`}
                onClick={() => onSelect(date)}
              >
                <span className="cal-day-num">{isToday ? "hoy" : dayNum}</span>
                <span className="cal-emoji">{emoji}</span>
                <span className="cal-word">{showWord ? wordData!.answer : "?"}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function EtymologyChain({
  etymology,
  answer,
}: {
  etymology: EtymologyStep[];
  answer: string;
}) {
  return (
    <div className="etymology-chain">
      {etymology.map((step, i) => (
        <span key={i}>
          {i > 0 && <span className="arrow"> → </span>}
          <em>{step.word}</em>
          <span className="lang"> ({step.language})</span>
        </span>
      ))}
      <span className="arrow"> → </span>
      <strong>{answer}</strong>
    </div>
  );
}

function EtymologyPath({
  etymology,
  answer,
  revealedWords,
  showAnswer,
}: {
  etymology: EtymologyStep[];
  answer: string;
  revealedWords: Set<string>;
  showAnswer: boolean;
}) {
  return (
    <div className="etymology-path">
      {etymology.map((step, i) => {
        if (step.parts) {
          // Compound etymology: render each part separately with "+"
          return (
            <span key={i}>
              {i > 0 && <span className="arrow"> → </span>}
              {step.parts.map((part, j) => {
                const isRevealed = showAnswer || revealedWords.has(part);
                return (
                  <span key={j}>
                    {j > 0 && <span className="compound-join"> {step.joiner ?? "+"} </span>}
                    <span className={`spoiler ${isRevealed ? "open" : ""}`}>
                      {isRevealed ? part : part.replace(/./g, "•")}
                    </span>
                  </span>
                );
              })}
              <span className="lang"> ({step.language})</span>
            </span>
          );
        }
        const isRevealed = showAnswer || revealedWords.has(step.word);
        return (
          <span key={i}>
            {i > 0 && <span className="arrow"> → </span>}
            <span className={`spoiler ${isRevealed ? "open" : ""}`}>
              {isRevealed ? step.word : step.word.replace(/./g, "•")}
            </span>
            <span className="lang"> ({step.language})</span>
          </span>
        );
      })}
      <span className="arrow"> → </span>
      {showAnswer ? (
        <strong>{answer}</strong>
      ) : (
        <span className="spoiler">{answer.replace(/./g, "•")}</span>
      )}
    </div>
  );
}

/**
 * Extract the longest revealed prefix and suffix from the revealed hints.
 */
function extractRevealedPrefixSuffix(
  hints: WordData["hints"],
  revealedHints: number
): { prefix: string; suffix: string } {
  let prefix = "";
  let suffix = "";
  for (let i = 0; i < revealedHints; i++) {
    const hint = hints[i];
    const types = Array.isArray(hint.type) ? hint.type : [hint.type];
    const spoilers = Array.isArray(hint.spoilerText) ? hint.spoilerText : [hint.spoilerText];
    types.forEach((t, idx) => {
      if (t === "starts_with" && idx < spoilers.length && spoilers[idx].length > prefix.length) {
        prefix = spoilers[idx];
      }
      if (t === "ends_with" && idx < spoilers.length && spoilers[idx].length > suffix.length) {
        suffix = spoilers[idx];
      }
    });
  }
  return { prefix: prefix.toLowerCase(), suffix: suffix.toLowerCase() };
}

/**
 * Strip diacritics for matching purposes, but preserve ñ as distinct from n.
 */
function stripAccents(ch: string): string {
  if (ch === "ñ") return "ñ";
  return ch.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC");
}

/**
 * Check if a base letter (from alphabet) appears in the answer,
 * treating accented variants as the same letter (except ñ ≠ n).
 */
function letterInAnswer(letter: string, answer: string): boolean {
  return Array.from(answer.toLowerCase()).some((ch) => stripAccents(ch) === letter.toLowerCase());
}

/**
 * Build a per-character "template" for the word.
 * Each position is either a fixed letter (from hints or revealed letters) or null (editable).
 */
function buildTemplate(
  answer: string,
  prefix: string,
  suffix: string,
  revealedLetters: string[]
): (string | null)[] {
  const len = answer.length;
  const normalizedAnswer = answer.toLowerCase();
  const revealedSet = new Set(revealedLetters.map((l) => l.toLowerCase()));
  return Array.from(normalizedAnswer).map((ch, i) => {
    if (i < prefix.length) return ch;
    if (i >= len - suffix.length) return ch;
    if (revealedSet.has(stripAccents(ch))) return ch;
    return null;
  });
}

/**
 * Merge the user's typed characters into the editable slots of the template.
 * Returns the full displayed word (fixed + typed), and the editable-only string.
 */
function mergeGuessIntoTemplate(
  template: (string | null)[],
  typed: string
): string[] {
  let ti = 0;
  return template.map((fixed) => {
    if (fixed !== null) return fixed;
    return ti < typed.length ? typed[ti++] : "";
  });
}

function fullGuessFromTemplate(
  template: (string | null)[],
  typed: string
): string {
  let ti = 0;
  return template
    .map((fixed) => {
      if (fixed !== null) return fixed;
      return ti < typed.length ? typed[ti++] : "";
    })
    .join("");
}

// ── Spanish alphabet for letter reveal ─────────────────────────────────────
const SPANISH_ALPHABET = "abcdefghijklmnñopqrstuvwxyz".split("");

// ── GameView ───────────────────────────────────────────────────────────────
// Mounted with key={date} so state always resets when date changes.

function GameView({
  wordData,
  date,
  isToday,
}: {
  wordData: WordData;
  date: string;
  isToday: boolean;
}) {
  const { state, setCurrentGuess, submitGuess, revealLetter, maxGuesses } = useGame(wordData, date);
  const { guesses, currentGuess, revealedHints, status } = state;
  const attemptsLeft = maxGuesses - guesses.length;
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = useState(true);

  const [copied, setCopied] = useState(false);
  // Only show the modal automatically if the game just ended (not if already finished on load).
  // Note: an in-progress game must still return true, so finishing it mid-session pops the modal.
  const [showResultModal, setShowResultModal] = useState(() => {
    const result = getStoredGameResult(date, wordData);
    return result !== "won" && result !== "lost";
  });

  const answer = wordData.answer;
  const revealedTypes = new Set(
    wordData.hints.slice(0, revealedHints).flatMap((h) =>
      Array.isArray(h.type) ? h.type : [h.type]
    )
  );

  const revealedEtymWords = new Set<string>();
  wordData.hints.slice(0, revealedHints).forEach((hint) => {
    const types = Array.isArray(hint.type) ? hint.type : [hint.type];
    if (types.includes("etymology")) {
      const spoilers = Array.isArray(hint.spoilerText)
        ? hint.spoilerText
        : [hint.spoilerText];
      spoilers.forEach((s) => revealedEtymWords.add(s));
    }
  });

  const knowLength = revealedTypes.has("letter_count");

  // Compute revealed letters from guesses
  const revealedLetters = guesses
    .filter(isRevealGuess)
    .map(getRevealedLetter);

  // Determine if the "Revelar una letra" button should exist and its state
  const hasLetterCountHint = wordData.hints.some((h) => {
    const types = Array.isArray(h.type) ? h.type : [h.type];
    return types.includes("letter_count");
  });
  const letterCountHintIndex = wordData.hints.findIndex((h) => {
    const types = Array.isArray(h.type) ? h.type : [h.type];
    return types.includes("letter_count");
  });
  const isLastAttempt = attemptsLeft <= 1;
  const revealButtonDisabledReason = !knowLength
    ? `Disponible después de la ${ordinalPista(letterCountHintIndex + 1)} pista`
    : isLastAttempt
    ? "No disponible en el último intento"
    : null;

  const [showAlphabet, setShowAlphabet] = useState(false);

  // Extract multi-character prefix/suffix from revealed hints
  const { prefix: revealedPrefix, suffix: revealedSuffix } = extractRevealedPrefixSuffix(
    wordData.hints, revealedHints
  );

  // Template: array of fixed-letter | null per position
  const template = knowLength ? buildTemplate(answer, revealedPrefix, revealedSuffix, revealedLetters) : null;
  const editableSlots = template
    ? template.filter((x) => x === null).length
    : Infinity;

  // Known letters for free-form mode (before letter_count is revealed)
  const freePrefix = !knowLength && revealedPrefix ? revealedPrefix : "";
  const freeSuffix = !knowLength && revealedSuffix ? revealedSuffix : "";

  // The current guess stored in state is the "editable" portion only
  const displayCells = template
    ? mergeGuessIntoTemplate(template, currentGuess)
    : null;

  // Find the caret position: first empty editable cell
  const caretIndex = displayCells
    ? displayCells.findIndex((ch, i) => template![i] === null && ch === "")
    : -1;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (template) {
      if (currentGuess.trim().length === 0) return; // nothing typed → do nothing
      const full = fullGuessFromTemplate(template, currentGuess);
      submitGuess(full);
    } else {
      if (currentGuess.trim().length === 0) return; // nothing typed → do nothing
      submitGuess(freePrefix + currentGuess + freeSuffix);
    }
  }

  function handleSkip() {
    submitGuess("");
  }

  function handleRevealLetter(letter: string) {
    setShowAlphabet(false);
    // If revealing this letter fills every remaining slot, the whole word is
    // known — there's nothing left to type, so the player wins outright.
    if (template) {
      const nextTemplate = buildTemplate(
        answer,
        revealedPrefix,
        revealedSuffix,
        [...revealedLetters, letter]
      );
      if (nextTemplate.every((cell) => cell !== null)) {
        submitGuess(answer);
        return;
      }
    }
    revealLetter(letter);
  }

  function handleTyping(value: string) {
    const lettersOnly = value.replace(/[^a-záéíóúüñ˜~´`']/gi, "");
    const clamped = lettersOnly.toLowerCase().slice(0, editableSlots);
    setCurrentGuess(clamped);
  }

  function focusInput() {
    hiddenInputRef.current?.focus();
  }

  useEffect(() => {
    if (status === "won" && showResultModal) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [status]);

  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (status === "playing") return;
    function tick() {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = tomorrow.getTime() - now.getTime();
      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
      setCountdown(`${h}:${m}:${s}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [status]);

  const shareButtonRef = useRef<HTMLButtonElement>(null);

  const shareResult = useCallback(() => {
    const emojiLine = guesses
      .map((g) => {
        if (g === "") return "➖";
        if (isRevealGuess(g)) {
          return "💬";
        }
        const isWin =
          g.toLowerCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").normalize("NFC") ===
          answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").normalize("NFC");
        return isWin ? "✅" : "❌";
      })
      .join("");
    const url = isToday
      ? `${window.location.origin}${window.location.pathname}`
      : `${window.location.origin}${window.location.pathname}#${date}`;
    const title = isToday ? "Etimol del día" : `Etimol del ${formatShortDate(date)}`;
    const score = status === "lost" ? "x" : guesses.length;
    const text = `${title}: ${score}/${maxGuesses}\n${emojiLine}\n${url}`;
    shareButtonRef.current?.blur();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [guesses, answer, maxGuesses, status]);

  return (
    <>
      <div className="game-layout">
        <section className="etymology-path-section">
          <EtymologyPath
            etymology={wordData.etymology}
            answer={answer}
            revealedWords={revealedEtymWords}
            showAnswer={status !== "playing"}
          />
        </section>

        <div className="game-col-left">
          <section className="hints-section">
            <h2>Pistas</h2>
            <ol className="hints-list">
              {wordData.hints.map((hint, i) => {
                const isRevealed = i < revealedHints;
                const spoilers = Array.isArray(hint.spoilerText)
                  ? hint.spoilerText
                  : [hint.spoilerText];
                const parts = hint.template.split("{spoiler}");
                return (
                  <li key={i} className={`hint ${isRevealed ? "revealed" : "locked"}`}>
                    <span className="hint-number">{i + 1}.</span>
                    <span className="hint-text">
                      {parts.map((part, j) => (
                        <Fragment key={j}>
                          {part}
                          {j < spoilers.length && (
                            <span className={`spoiler ${isRevealed ? "open" : ""}`}>
                              {isRevealed
                                ? spoilers[j]
                                : spoilers[j].replace(/\S/g, "•")}
                            </span>
                          )}
                        </Fragment>
                      ))}
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>
        </div>

        <div className="game-col-right">
          {status === "playing" ? (
            <section className="word-input-section">
              <form onSubmit={handleSubmit} className="word-input-form">
                {template ? (
                  /* Cell-based input: fixed + editable in one row */
                  <div className="word-cells" onClick={focusInput}>
                    {displayCells!.map((ch, i) => {
                      const isFixed = template[i] !== null;
                      const isRevealedCell = isFixed && i >= revealedPrefix.length && i < answer.length - (revealedSuffix.length || 0) && revealedLetters.includes(ch);
                      const isEmpty = ch === "";
                      const isCaret = inputFocused && i === caretIndex;
                      return (
                        <span
                          key={i}
                          className={`cell${isFixed ? " fixed" : ""}${isRevealedCell ? " revealed-cell" : ""}${isEmpty ? " empty" : ""}${isCaret ? " caret" : ""}`}
                        >
                          {isEmpty ? "_" : ch}
                        </span>
                      );
                    })}
                    <input
                      ref={hiddenInputRef}
                      type="text"
                      className="hidden-input"
                      value={currentGuess}
                      onChange={(e) => handleTyping(e.target.value)}
                      onFocus={() => setInputFocused(true)}
                      onBlur={() => setInputFocused(false)}
                      autoFocus
                      autoComplete="off"
                      autoCapitalize="off"
                    />
                  </div>
                ) : (
                  /* Free-form input before letter count is known */
                  <div className="free-input-row">
                    {freePrefix && <span className="free-fixed">{freePrefix}</span>}
                    <input
                      type="text"
                      className="word-input free-middle"
                      value={currentGuess}
                      onChange={(e) => setCurrentGuess(e.target.value.replace(/[^a-záéíóúüñ˜~´`']/gi, "").toLowerCase().slice(0, 12))}
                      placeholder="..."
                      size={Math.max(3, currentGuess.length + 1)}
                      autoFocus
                      autoComplete="off"
                      autoCapitalize="off"
                    />
                    {freeSuffix && <span className="free-fixed">{freeSuffix}</span>}
                  </div>
                )}
                <div className="action-buttons">
                  <button type="submit" className="guess-button">
                    Adivinar
                  </button>
                  {hasLetterCountHint && (
                    <span className="reveal-button-wrapper" data-tooltip={revealButtonDisabledReason ?? ""}>
                      <button
                        type="button"
                        className={`reveal-button${revealButtonDisabledReason ? " disabled" : ""}${showAlphabet ? " open" : ""}`}
                        aria-expanded={showAlphabet}
                        onClick={() => !revealButtonDisabledReason && setShowAlphabet(!showAlphabet)}
                      >
                        Revelar letra
                      </button>
                    </span>
                  )}
                </div>
                {showAlphabet && !revealButtonDisabledReason && (
                  <div className="alphabet-picker">
                    {SPANISH_ALPHABET.map((letter) => {
                      const alreadyRevealed = revealedLetters.includes(letter);
                      return (
                        <button
                          key={letter}
                          type="button"
                          className={`alphabet-letter${alreadyRevealed ? " used" : ""}`}
                          disabled={alreadyRevealed}
                          onClick={() => handleRevealLetter(letter)}
                        >
                          {letter}
                        </button>
                      );
                    })}
                  </div>
                )}
              </form>
              <p className="attempts-left">
                {attemptsLeft === 1
                  ? "¡Último intento!"
                  : `${attemptsLeft} intentos restantes`}
              </p>
              <button type="button" className="skip-button" onClick={handleSkip}>
                {attemptsLeft <= 1 ? "Rendirse" : "Saltar"}
              </button>
              {guesses.length > 0 && (
                <div className="guess-chips">
                  {guesses.map((g, i) => {
                    if (isRevealGuess(g)) {
                      const letter = getRevealedLetter(g);
                      const isInAnswer = letterInAnswer(letter, answer);
                      return (
                        <span key={i} className={`chip ${isInAnswer ? "reveal-hit" : "reveal-miss"}`}>
                          {letter}
                        </span>
                      );
                    }
                    return (
                      <span key={i} className={`chip ${g === "" ? "skipped" : "wrong"}`}>
                        {g === "" ? "—" : g}
                      </span>
                    );
                  })}
                </div>
              )}
            </section>
          ) : !showResultModal ? (
            /* Result content lands here after modal is dismissed */
            <section className="word-input-section result-card-inline">
              <div className={`result-banner ${status}`}>
                {status === "won" ? (
                  <>
                    <h2>¡Correcto! 🎉</h2>
                    <p>
                      Adivinaste en {guesses.length}{" "}
                      {guesses.length === 1 ? "intento" : "intentos"}.
                    </p>
                  </>
                ) : (
                  <>
                    <h2>¡Se acabaron los intentos!</h2>
                    <p>
                      La palabra era: <strong>{wordData.answer}</strong>
                    </p>
                  </>
                )}
              </div>
              <div className="guess-chips result-chips">
                {guesses.map((g, i) => {
                  if (isRevealGuess(g)) {
                    const letter = getRevealedLetter(g);
                    const isInAnswer = letterInAnswer(letter, answer);
                    return (
                      <span key={i} className={`chip ${isInAnswer ? "reveal-hit" : "reveal-miss"}`}>
                        {letter}
                      </span>
                    );
                  }
                  const isCorrect =
                    g.length > 0 &&
                    g.toLowerCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").normalize("NFC") ===
                      answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").normalize("NFC");
                  return (
                    <span
                      key={i}
                      className={`chip ${g === "" ? "skipped" : isCorrect ? "correct" : "wrong"}`}
                    >
                      {g === "" ? "—" : g}
                    </span>
                  );
                })}
              </div>
              <button ref={shareButtonRef} className="share-button" onClick={shareResult}>
                {copied ? "✅ Copiado al portapapeles" : "🔗 Compartir mi resultado"}
              </button>
              <div className="word-detail">
                <h3>{wordData.answer}</h3>
                <p className="definition">{wordData.definition}</p>
              </div>
              {isToday && (
                <div className="next-word-timer">
                  <p>Próxima palabra en:</p>
                  <p className="countdown">{countdown}</p>
                </div>
              )}
            </section>
          ) : null}
        </div>
      </div>

      {/* Result modal (shown when game ends, until dismissed) */}
      {status !== "playing" && showResultModal && (
        <div className="result-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowResultModal(false); }}>
          <div className="result-modal">
            <button className="result-modal-close" onClick={() => setShowResultModal(false)} aria-label="Cerrar">✕</button>
            <div className={`result-banner ${status}`}>
              {status === "won" ? (
                <>
                  <h2>¡Correcto! 🎉</h2>
                  <p>
                    Adivinaste en {guesses.length}{" "}
                    {guesses.length === 1 ? "intento" : "intentos"}.
                  </p>
                </>
              ) : (
                <>
                  <h2>¡Se acabaron los intentos!</h2>
                  <p>
                    La palabra era: <strong>{wordData.answer}</strong>
                  </p>
                </>
              )}
            </div>
            <div className="guess-chips result-chips">
              {guesses.map((g, i) => {
                if (isRevealGuess(g)) {
                  const letter = getRevealedLetter(g);
                  const isInAnswer = letterInAnswer(letter, answer);
                  return (
                    <span key={i} className={`chip ${isInAnswer ? "reveal-hit" : "reveal-miss"}`}>
                      {letter}
                    </span>
                  );
                }
                const isCorrect =
                  g.length > 0 &&
                  g.toLowerCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").normalize("NFC") ===
                    answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").normalize("NFC");
                return (
                  <span
                    key={i}
                    className={`chip ${g === "" ? "skipped" : isCorrect ? "correct" : "wrong"}`}
                  >
                    {g === "" ? "—" : g}
                  </span>
                );
              })}
            </div>
            <button ref={shareButtonRef} className="share-button" onClick={shareResult}>
              {copied ? "✅ Copiado al portapapeles" : "🔗 Compartir mi resultado"}
            </button>
            <div className="word-detail">
              <h3>{wordData.answer}</h3>
              <p className="definition">{wordData.definition}</p>
              <EtymologyChain
                etymology={wordData.etymology}
                answer={wordData.answer}
              />
            </div>
            <div className="next-word-timer">
              {isToday ? (
                <>
                  <p className="past-day-note">
                    <span className={`difficulty-label difficulty-${wordData.difficulty}`}>
                      {DIFFICULTY_LABELS[wordData.difficulty]}
                    </span>
                  </p>
                  <hr className="modal-divider" />
                  <p>Próxima palabra en:</p>
                  <p className="countdown">{countdown}</p>
                </>
              ) : (
                <p className="past-day-note">
                  {formatSpanishDate(date)}
                  <span className="header-sep" aria-hidden="true"> | </span>
                  <span className={`difficulty-label difficulty-${wordData.difficulty}`}>
                    {DIFFICULTY_LABELS[wordData.difficulty]}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── App shell (routing) ────────────────────────────────────────────────────

export default function App() {
  const today = getLocalDateString();

  const [currentDate, setCurrentDate] = useState<string>(() => dateFromHash(today));
  const [showCalendar, setShowCalendar] = useState(false);

  // Keep in sync with browser hash (back/forward navigation)
  useEffect(() => {
    function onHashChange() {
      setCurrentDate(dateFromHash(today));
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [today]);

  function navigateToDate(date: string) {
    const hash = date === today ? "" : date;
    window.location.hash = hash;
    setCurrentDate(date);
    setShowCalendar(false);
  }

  const wordData = getWordByDate(currentDate);
  const isToday = currentDate === today;

  return (
    <div className="container">
      <header>
        <h1 className="title">etimol</h1>
        <p className="subtitle">Adivina la palabra del día por su etimología</p>
        <div className="header-date-row">
          <span className="header-date">{formatSpanishDate(currentDate)}</span>
          {wordData && (
            <>
              <span className="header-sep" aria-hidden="true">|</span>
              <span className="header-difficulty">
                Dificultad:{" "}
                <span className={`difficulty-label difficulty-${wordData.difficulty}`}>
                  {DIFFICULTY_LABELS[wordData.difficulty]}
                </span>
              </span>
            </>
          )}
        </div>
        <div className="header-actions-row">
          <button
            className="calendar-open-btn"
            onClick={() => setShowCalendar(true)}
            aria-label="Ver palabras anteriores"
            title="Ver palabras anteriores"
          >
            <CalendarHistoryIcon />
            <span className="calendar-open-btn-label">Ver palabras anteriores</span>
          </button>
        </div>
      </header>

      {wordData ? (
        <GameView
          key={currentDate}
          wordData={wordData}
          date={currentDate}
          isToday={isToday}
        />
      ) : (
        <p className="no-word-msg">No hay palabra para este día.</p>
      )}

      {showCalendar && (
        <CalendarModal
          today={today}
          currentDate={currentDate}
          onSelect={navigateToDate}
          onClose={() => setShowCalendar(false)}
        />
      )}
    </div>
  );
}
