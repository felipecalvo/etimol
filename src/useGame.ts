import { useState, useCallback } from "react";
import type { GameState, GameStatus, WordData } from "./types";

const OLD_STORAGE_KEY = "etimol-guesses";

function storageKey(date: string) {
  return `etimol-${date}`;
}

// One-time migration from the old single-entry format to per-date keys
let _migrated = false;
function migrateIfNeeded() {
  if (_migrated) return;
  _migrated = true;
  try {
    const raw = localStorage.getItem(OLD_STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.date && Array.isArray(data.guesses)) {
      const key = storageKey(data.date);
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify({ guesses: data.guesses }));
      }
    }
    localStorage.removeItem(OLD_STORAGE_KEY);
  } catch { /* ignore */ }
}

function loadGuesses(date: string): string[] {
  migrateIfNeeded();
  try {
    const raw = localStorage.getItem(storageKey(date));
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (Array.isArray(data.guesses)) return data.guesses;
  } catch { /* ignore */ }
  return [];
}

function saveGuesses(date: string, guesses: string[]) {
  localStorage.setItem(storageKey(date), JSON.stringify({ guesses }));
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u0302\u0304-\u036f]/g, "")
    .normalize("NFC")
    .trim();
}

export function useGame(wordData: WordData, date: string) {
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
