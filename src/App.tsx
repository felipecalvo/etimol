import { useRef } from "react";
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
    if (i === 0 && revealedTypes.has("starts_with")) return ch;
    if (i === len - 1 && revealedTypes.has("ends_with")) return ch;
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

  const answer = wordData.answer;
  const revealedTypes = new Set(
    wordData.hints.slice(0, revealedHints).map((h) => h.type)
  );
  const knowLength = revealedTypes.has("letter_count");

  // Template: array of fixed-letter | null per position
  const template = knowLength ? buildTemplate(answer, revealedTypes) : null;
  const editableSlots = template
    ? template.filter((x) => x === null).length
    : Infinity;

  // The current guess stored in state is the "editable" portion only
  const displayCells = template
    ? mergeGuessIntoTemplate(template, currentGuess)
    : null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (template) {
      const full = fullGuessFromTemplate(template, currentGuess);
      submitGuess(full);
    } else {
      submitGuess();
    }
  }

  function handleTyping(value: string) {
    // Limit length to editable slots
    const clamped = value.slice(0, editableSlots);
    setCurrentGuess(clamped);
  }

  function focusInput() {
    hiddenInputRef.current?.focus();
  }

  return (
    <div className="container">
      <header>
        <h1 className="title">Etimol</h1>
        <p className="subtitle">Adivina la palabra por su etimología</p>
      </header>

      {status === "playing" && (
        <section className="word-input-section">
          <form onSubmit={handleSubmit} className="word-input-form">
            {template ? (
              /* Cell-based input: fixed + editable in one row */
              <div className="word-cells" onClick={focusInput}>
                {displayCells!.map((ch, i) => {
                  const isFixed = template[i] !== null;
                  const isEmpty = ch === "";
                  return (
                    <span
                      key={i}
                      className={`cell${isFixed ? " fixed" : ""}${isEmpty ? " empty" : ""}`}
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
                  autoFocus
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </div>
            ) : (
              /* Free-form input before letter count is known */
              <input
                type="text"
                className="word-input"
                value={currentGuess}
                onChange={(e) => setCurrentGuess(e.target.value)}
                placeholder="..."
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
              />
            )}
            <button type="submit" className="guess-button">
              Adivinar
            </button>
          </form>
          <p className="attempts-left">
            {attemptsLeft === 1
              ? "¡Último intento!"
              : `${attemptsLeft} intentos restantes`}
          </p>
        </section>
      )}

      <section className="hints-section">
        <h2>Pistas</h2>
        <ol className="hints-list">
          {wordData.hints.map((hint, i) => {
            const isRevealed = i < revealedHints;
            return (
              <li key={i} className={`hint ${isRevealed ? "revealed" : "locked"}`}>
                <span className="hint-number">{i + 1}.</span>
                <span className="hint-text">
                  {isRevealed ? hint.revealedContent : hint.previewLabel}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      {guesses.length > 0 && (
        <section className="guesses-section">
          <h2>Intentos</h2>
          <ul className="guesses-list">
            {guesses.map((g, i) => (
              <li
                key={i}
                className={`guess-item ${
                  i === guesses.length - 1 && status === "won" ? "correct" : "wrong"
                }`}
              >
                {g}
              </li>
            ))}
          </ul>
        </section>
      )}

      {status !== "playing" && (
        <section className="result-section">
          {status === "won" ? (
            <div className="result won">
              <h2>¡Correcto! 🎉</h2>
              <p>
                Adivinaste en {guesses.length}{" "}
                {guesses.length === 1 ? "intento" : "intentos"}.
              </p>
            </div>
          ) : (
            <div className="result lost">
              <h2>¡Se acabaron los intentos!</h2>
              <p>
                La palabra era: <strong>{wordData.answer}</strong>
              </p>
            </div>
          )}

          <div className="word-detail">
            <h3>{wordData.answer}</h3>
            <p className="definition">{wordData.definition}</p>
            <EtymologyChain
              etymology={wordData.etymology}
              answer={wordData.answer}
            />
          </div>
        </section>
      )}
    </div>
  );
}
