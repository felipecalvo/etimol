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

export type HintType = "etymology_ancient" | "letter_count" | "starts_with" | "etymology_recent" | "ends_with";

export interface HintDefinition {
  type: HintType;
  /** Label shown before the hint is revealed */
  previewLabel: string;
  /** Full hint content shown after a wrong guess */
  revealedContent: string;
}

export type GameStatus = "playing" | "won" | "lost";

export interface GameState {
  wordData: WordData;
  guesses: string[];
  currentGuess: string;
  revealedHints: number; // how many hints are revealed (0 = first hint shown by default)
  status: GameStatus;
}
