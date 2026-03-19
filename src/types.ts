export interface EtymologyStep {
  word: string;
  language: string;
}

export interface WordData {
  answer: string;
  definition: string;
  etymology: EtymologyStep[]; // ordered from most ancient to most recent (before the answer)
  hints: HintDefinition[];
}

export type HintType = "etymology" | "letter_count" | "starts_with" | "ends_with";

export interface HintDefinition {
  type: HintType | HintType[];
  /** Text with {spoiler} placeholder(s) for the hidden part(s) */
  template: string;
  /** The text that replaces {spoiler} when revealed. Array for multiple spoilers. */
  spoilerText: string | string[];
}

export type GameStatus = "playing" | "won" | "lost";

export interface GameState {
  wordData: WordData;
  guesses: string[];
  currentGuess: string;
  revealedHints: number; // how many hints are revealed (0 = first hint shown by default)
  status: GameStatus;
}
