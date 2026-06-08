export interface EtymologyStep {
  word: string;
  /**
   * A single language, or one language per part (parallel to `parts`, same
   * length/order). Use an array for a cruce between words of different
   * languages — each part then shows its own label. An empty string in the
   * array omits the label for that part.
   */
  language: string | string[];
  /** For compound etymologies (e.g. xoco + atl = xocoatl). Each part is revealed independently in the path. */
  parts?: string[];
  /** Separator rendered between parts. Defaults to "+". Use "✕" for a cruce (crossing of words). */
  joiner?: string;
}

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export interface WordData {
  answer: string;
  definition: string;
  /** Expected number of guesses needed (1 = muy fácil … 5 = muy difícil). */
  difficulty: Difficulty;
  etymology: EtymologyStep[]; // ordered from most ancient to most recent (before the answer)
  hints: HintDefinition[];
}

export type HintType = "etymology" | "letter_count" | "starts_with" | "ends_with" | "definition";

export interface HintDefinition {
  type: HintType | HintType[];
  /** Text with {spoiler} placeholder(s) for the hidden part(s) */
  template: string;
  /** The text that replaces {spoiler} when revealed. Array for multiple spoilers. */
  spoilerText: string | string[];
}

export type GameStatus = "playing" | "won" | "lost";

/**
 * A guess entry starting with "!" indicates a letter reveal.
 * E.g. "!a" means the player revealed the letter "a".
 */
export function isRevealGuess(guess: string): boolean {
  return guess.startsWith("!");
}

export function getRevealedLetter(guess: string): string {
  return guess.slice(1);
}

export interface GameState {
  wordData: WordData;
  guesses: string[];
  currentGuess: string;
  revealedHints: number; // how many hints are revealed (0 = first hint shown by default)
  status: GameStatus;
}
