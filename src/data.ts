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
  {
    date: "2026-03-20",
    word: {
      answer: "café",
      definition:
        "m. Bebida que se hace por infusión con la semilla tostada y molida del cafeto.",
      etymology: [
        { word: "qahwah", language: "árabe clásico" },
        { word: "kahve", language: "turco" },
        { word: "caffe", language: "italiano" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del árabe clásico «{spoiler}»",
          spoilerText: "qahwah",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "c",
        },
        {
          type: "etymology",
          template: "Del turco «{spoiler}»",
          spoilerText: "kahve",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "4",
        },
        {
          type: "etymology",
          template: "Del italiano «{spoiler}»",
          spoilerText: "caffe",
        },
      ],
    },
  },
  {
    date: "2026-03-21",
    word: {
      answer: "persona",
      definition:
        "f. Individuo de la especie humana.",
      etymology: [
        { word: "πρόσωπον (prósōpon)", language: "griego" },
        { word: "φersu", language: "etrusco" },
        { word: "persōna", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "πρόσωπον (prósōpon)",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["P", "A"],
        },
        {
          type: "etymology",
          template: "Del etrusco «{spoiler}»",
          spoilerText: "φersu",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "persōna",
        },
      ],
    },
  },
];

export function getLocalDateString(): string {
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
