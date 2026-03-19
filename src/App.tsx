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

export default function App() {
  const wordData = getTodayWord();
  const { state, setCurrentGuess, submitGuess, maxGuesses } = useGame(wordData);
  const { guesses, currentGuess, revealedHints, status } = state;
  const attemptsLeft = maxGuesses - guesses.length;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submitGuess();
  }

  return (
    <div className="container">
      <header>
        <h1 className="title">Etimol</h1>
        <p className="subtitle">Adivina la palabra por su etimología</p>
      </header>

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

      {status === "playing" && (
        <section className="guess-section">
          <p className="attempts-left">
            {attemptsLeft === 1
              ? "¡Último intento!"
              : `${attemptsLeft} intentos restantes`}
          </p>
          <form onSubmit={handleSubmit} className="guess-form">
            <input
              type="text"
              className="guess-input"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
              placeholder="Escribe tu respuesta..."
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
            />
            <button type="submit" className="guess-button">
              Adivinar
            </button>
          </form>
        </section>
      )}

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
