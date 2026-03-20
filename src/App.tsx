import { Fragment, useRef, useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import { getTodayWord } from "./data";
import { useGame } from "./useGame";
import type { EtymologyStep } from "./types";
import "./App.css";

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
                const isRevealed = revealedWords.has(part);
                return (
                  <span key={j}>
                    {j > 0 && <span className="compound-join"> + </span>}
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
        const isRevealed = revealedWords.has(step.word);
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
 * Build a per-character "template" for the word.
 * Each position is either a fixed letter (from hints) or null (editable).
 */
function buildTemplate(
  answer: string,
  revealedTypes: Set<string>
): (string | null)[] {
  const len = answer.length;
  return Array.from(answer).map((ch, i) => {
    if (i === 0 && revealedTypes.has("starts_with")) return ch.toLowerCase();
    if (i === len - 1 && revealedTypes.has("ends_with")) return ch.toLowerCase();
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

export default function App() {
  const wordData = getTodayWord();
  const { state, setCurrentGuess, submitGuess, maxGuesses } = useGame(wordData);
  const { guesses, currentGuess, revealedHints, status } = state;
  const attemptsLeft = maxGuesses - guesses.length;
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = useState(true);

  const [copied, setCopied] = useState(false);

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
  const knowStart = revealedTypes.has("starts_with");
  const knowEnd = revealedTypes.has("ends_with");

  // Template: array of fixed-letter | null per position
  const template = knowLength ? buildTemplate(answer, revealedTypes) : null;
  const editableSlots = template
    ? template.filter((x) => x === null).length
    : Infinity;

  // Known letters for free-form mode (before letter_count is revealed)
  const freePrefix = !knowLength && knowStart ? answer[0].toLowerCase() : "";
  const freeSuffix = !knowLength && knowEnd ? answer[answer.length - 1].toLowerCase() : "";

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

  function handleTyping(value: string) {
    const lettersOnly = value.replace(/[^a-záéíóúüñ]/gi, "");
    const clamped = lettersOnly.toLowerCase().slice(0, editableSlots);
    setCurrentGuess(clamped);
  }

  function focusInput() {
    hiddenInputRef.current?.focus();
  }

  useEffect(() => {
    if (status === "won") {
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
        const isWin =
          g.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ===
          answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return isWin ? "✅" : "❌";
      })
      .join("");
    const url = `${window.location.origin}${window.location.pathname}`;
    const text = `Etimol del día: ${guesses.length}/${maxGuesses}\n${emojiLine}\n${url}`;
    shareButtonRef.current?.blur();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [guesses, answer, maxGuesses, status]);

  return (
    <div className="container">
      <header>
        <h1 className="title">etimol</h1>
        <p className="subtitle">Adivina la palabra del día por su etimología</p>
      </header>

      {status === "playing" ? (
        <section className="word-input-section">
          <form onSubmit={handleSubmit} className="word-input-form">
            {template ? (
              /* Cell-based input: fixed + editable in one row */
              <div className="word-cells" onClick={focusInput}>
                {displayCells!.map((ch, i) => {
                  const isFixed = template[i] !== null;
                  const isEmpty = ch === "";
                  const isCaret = inputFocused && i === caretIndex;
                  return (
                    <span
                      key={i}
                      className={`cell${isFixed ? " fixed" : ""}${isEmpty ? " empty" : ""}${isCaret ? " caret" : ""}`}
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
                  onChange={(e) => setCurrentGuess(e.target.value.replace(/[^a-záéíóúüñ]/gi, "").toLowerCase())}
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
              <button type="button" className="skip-button" onClick={handleSkip}>
                Saltar
              </button>
            </div>
          </form>
          <p className="attempts-left">
            {attemptsLeft === 1
              ? "¡Último intento!"
              : `${attemptsLeft} intentos restantes`}
          </p>
          {guesses.length > 0 && (
            <div className="guess-chips">
              {guesses.map((g, i) => (
                <span key={i} className={`chip ${g === "" ? "skipped" : "wrong"}`}>
                  {g === "" ? "—" : g}
                </span>
              ))}
            </div>
          )}
        </section>
      ) : (
        <section className="result-card">
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
              const isCorrect =
                g.length > 0 &&
                g.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ===
                  answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
            <p>Próxima palabra en:</p>
            <p className="countdown">{countdown}</p>
          </div>
        </section>
      )}

      {status === "playing" && (
        <section className="etymology-path-section">
          <EtymologyPath
            etymology={wordData.etymology}
            answer={answer}
            revealedWords={revealedEtymWords}
            showAnswer={false}
          />
        </section>
      )}

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
                            : spoilers[j].replace(/./g, "•")}
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
  );
}
