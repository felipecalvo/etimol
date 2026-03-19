import type { WordData } from "./types";

interface DailyWord {
  date: string; // "YYYY-MM-DD"
  word: WordData;
}

const words: DailyWord[] = [
  {
    date: "2026-03-19",
    word: {
      answer: "botella",
      definition:
        "f. Recipiente de cristal, vidrio, plástico u otro material, con el cuello estrecho, que sirve para contener líquidos.",
      etymology: [
        { word: "butticŭla", language: "latín" },
        { word: "bouteille", language: "francés" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "butticŭla",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "b",
        },
        {
          type: "etymology",
          template: "Del francés «{spoiler}»",
          spoilerText: "bouteille",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "a",
        },
      ],
    },
  },
];

function getLocalDateString(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getTodayWord(): WordData {
  const today = getLocalDateString();
  const found = words.find((w) => w.date === today);
  return found ? found.word : words[0].word;
}
