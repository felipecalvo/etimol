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
      type: "etymology_ancient",
      previewLabel: "Origen más antiguo",
      revealedContent: "Proviene del latín «butticŭla»",
    },
    {
      type: "letter_count",
      previewLabel: "Número de letras: ?",
      revealedContent: "Tiene 7 letras",
    },
    {
      type: "starts_with",
      previewLabel: "Empieza por: ?",
      revealedContent: "Empieza por B",
    },
    {
      type: "etymology_recent",
      previewLabel: "Origen intermedio: ? (francés)",
      revealedContent: "Viene del francés «bouteille»",
    },
    {
      type: "ends_with",
      previewLabel: "Termina en: ?",
      revealedContent: "Termina en A",
    },
  ],
};

export function getTodayWord(): WordData {
  return todayWord;
}
