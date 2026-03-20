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
  {
    date: "2026-03-22",
    word: {
      answer: "leche",
      definition:
        "f. Líquido blanco que segregan las mamas de las hembras de los mamíferos para alimento de sus crías.",
      etymology: [{ word: "lac, lactis", language: "latín" }],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "lac, lactis",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "L",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "E",
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "líquido blanco",
        },
      ],
    },
  },
  {
    date: "2026-03-23",
    word: {
      answer: "cerrar",
      definition:
        "tr. Asegurar con cerradura, pasador, pestillo, tranca u otro instrumento, una puerta, ventana, tapa, etc., para impedir que se abra.",
      etymology: [
        { word: "sera", language: "latín" },
        { word: "serāre", language: "latín tardío" },
        { word: "serrare", language: "latín vulgar" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "sera",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "C",
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "verbo",
        },
        {
          type: "etymology",
          template:
            "Del latín vulgar «{spoiler}», var. del latín tardío «{spoiler}»",
          spoilerText: ["serrare", "serāre"],
        },
      ],
    },
  },
  {
    date: "2026-03-24",
    word: {
      answer: "hermano",
      definition:
        "m. y f. Persona o animal que tiene en común con otra u otro el mismo padre y la misma madre, o solo uno de ellos.",
      etymology: [
        { word: "germen", language: "latín" },
        { word: "germānus", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Derivada del latín «{spoiler}»",
          spoilerText: "germen",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "H",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "O",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "germānus",
        },
      ],
    },
  },
  {
    date: "2026-03-25",
    word: {
      answer: "chocolate",
      definition:
        "m. Pasta hecha con cacao y azúcar molidos, a la que generalmente se añade canela o vainilla.",
      etymology: [
        {
          word: "xocoatl",
          language: "náhuatl",
          parts: ["xoco", "atl"],
        },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del náhuatl «{spoiler}» + …",
          spoilerText: "xoco",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "C",
        },
        {
          type: "etymology",
          template: "… + del náhuatl «{spoiler}»",
          spoilerText: "atl",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "9",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "E",
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
