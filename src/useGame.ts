import { useState, useCallback } from "react";
import { getLocalDateString } from "./data";
import type { GameState, GameStatus, WordData } from "./types";

const STORAGE_KEY = "etimol-guesses";

function loadGuesses(date: string): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (data.date === date && Array.isArray(data.guesses)) return data.guesses;
  } catch { /* ignore */ }
  return [];
}

function saveGuesses(date: string, guesses: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ date, guesses }));
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function useGame(wordData: WordData) {
  const date = getLocalDateString();
  const saved = loadGuesses(date);

  // Replay saved guesses to compute initial state
  const initialState = (() => {
    let guesses: string[] = [];
    let revealedHints = 1;
    let status: GameStatus = "playing";
    const max = wordData.hints.length;

    for (const guess of saved) {
      guesses = [...guesses, guess];
      const isCorrect = guess.length > 0 && normalize(guess) === normalize(wordData.answer);
      if (isCorrect) {
        status = "won";
        revealedHints = max;
        break;
      } else if (guesses.length >= max) {
        status = "lost";
      } else {
        revealedHints = Math.min(revealedHints + 1, max);
      }
    }

    return {
      wordData,
      guesses,
      currentGuess: "",
      revealedHints,
      status,
    } satisfies GameState;
  })();

  const [state, setState] = useState<GameState>(initialState);

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

      const nextState = {
        ...prev,
        guesses: newGuesses,
        currentGuess: "",
        revealedHints: newRevealed,
        status: newStatus,
      };

      saveGuesses(date, nextState.guesses);

      return nextState;
    });
  }, [maxGuesses]);

  return {
    state,
    setCurrentGuess,
    submitGuess,
    maxGuesses,
  };
}
