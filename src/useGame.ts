import { useState, useCallback } from "react";
import type { GameState, GameStatus, WordData } from "./types";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function useGame(wordData: WordData) {
  const [state, setState] = useState<GameState>({
    wordData,
    guesses: [],
    currentGuess: "",
    revealedHints: 1, // first hint is always shown
    status: "playing",
  });

  const maxGuesses = wordData.hints.length; // 5

  const setCurrentGuess = useCallback((value: string) => {
    setState((prev) => {
      if (prev.status !== "playing") return prev;
      return { ...prev, currentGuess: value };
    });
  }, []);

  const submitGuess = useCallback((fullGuessOverride?: string) => {
    setState((prev) => {
      if (prev.status !== "playing") return prev;
      const guess = (fullGuessOverride ?? prev.currentGuess).trim();

      const isCorrect = guess.length > 0 && normalize(guess) === normalize(prev.wordData.answer);
      const newGuesses = [...prev.guesses, guess.length > 0 ? guess : ""];

      let newStatus: GameStatus = "playing";
      let newRevealed = prev.revealedHints;

      if (isCorrect) {
        newStatus = "won";
        newRevealed = maxGuesses; // reveal all hints on win
      } else if (newGuesses.length >= maxGuesses) {
        newStatus = "lost";
      } else {
        // Reveal next hint
        newRevealed = Math.min(prev.revealedHints + 1, maxGuesses);
      }

      return {
        ...prev,
        guesses: newGuesses,
        currentGuess: "",
        revealedHints: newRevealed,
        status: newStatus,
      };
    });
  }, [maxGuesses]);

  return {
    state,
    setCurrentGuess,
    submitGuess,
    maxGuesses,
  };
}
