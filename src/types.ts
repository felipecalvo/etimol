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
  type: HintType;
  /** Text with a {spoiler} placeholder for the hidden part, e.g. "Tiene {spoiler} letras" */
  template: string;
  /** The actual text that replaces {spoiler} when revealed */
  spoilerText: string;
}

export type GameStatus = "playing" | "won" | "lost";

export interface GameState {
  wordData: WordData;
  guesses: string[];
  currentGuess: string;
  revealedHints: number; // how many hints are revealed (0 = first hint shown by default)
  status: GameStatus;
}
