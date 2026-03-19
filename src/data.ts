import type { WordData } from "./types";

const todayWord: WordData = {
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
};

export function getTodayWord(): WordData {
  return todayWord;
}
