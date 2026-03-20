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
  {
    date: "2026-03-26",
    word: {
      answer: "máquina",
      definition:
        "f. Artificio para aprovechar, dirigir o regular la acción de una fuerza.",
      etymology: [
        { word: "μαχανά (machaná)", language: "griego dórico" },
        { word: "machĭna", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego dórico «{spoiler}»",
          spoilerText: "μαχανά (machaná)",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "M",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "machĭna",
        },
      ],
    },
  },
  {
    date: "2026-03-27",
    word: {
      answer: "arte",
      definition: "m. o f. Capacidad, habilidad para hacer algo.",
      etymology: [
        { word: "τέχνη (téchnē)", language: "griego" },
        { word: "ars, artis", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "τέχνη (téchnē)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "4",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "E",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "ars, artis",
        },
      ],
    },
  },
  {
    date: "2026-03-28",
    word: {
      answer: "alcohol",
      definition:
        "m. Bebida que contiene alcohol, en oposición implícita a las que no lo contienen.",
      etymology: [
        { word: "kuḥl", language: "árabe clásico" },
        { word: "al-kuḥúl", language: "árabe hispánico" },
        { word: "alcohol", language: "latín medieval" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del árabe clásico «{spoiler}»",
          spoilerText: "kuḥl",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "etymology",
          template: "Del árabe hispánico «{spoiler}»",
          spoilerText: "al-kuḥúl",
        },
        {
          type: "etymology",
          template: "Del latín medieval «{spoiler}»",
          spoilerText: "alcohol",
        },
      ],
    },
  },
  {
    date: "2026-03-29",
    word: {
      answer: "pasión",
      definition: "f. Apetito de algo o afición vehemente a ello.",
      etymology: [
        { word: "πάθος (páthos)", language: "griego" },
        { word: "passio", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "πάθος (páthos)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "P",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "N",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "passio",
        },
      ],
    },
  },
  {
    date: "2026-03-30",
    word: {
      answer: "amanecer",
      definition: "intr. impers. Empezar a aparecer la luz del día.",
      etymology: [
        { word: "mane", language: "latín" },
        { word: "admanescĕre", language: "latín hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "mane",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "8",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "verbo",
        },
        {
          type: "etymology",
          template: "Del latín hispánico «{spoiler}»",
          spoilerText: "admanescĕre",
        },
      ],
    },
  },
  {
    date: "2026-03-31",
    word: {
      answer: "azúcar",
      definition:
        "m. o f. Sustancia cristalina perteneciente al grupo químico de los hidratos de carbono, de sabor dulce y de color blanco en estado puro, soluble en el agua, que se obtiene de la caña dulce, de la remolacha y de otros vegetales.",
      etymology: [
        { word: "śarkarā", language: "sánscrito" },
        { word: "šakar", language: "pelvi" },
        { word: "σάκχαρι (sákchari)", language: "griego" },
        { word: "sukkar", language: "árabe clásico" },
        { word: "assúkkar", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del sánscrito «{spoiler}»",
          spoilerText: "śarkarā",
        },
        {
          type: "etymology",
          template: "Del pelvi «{spoiler}»",
          spoilerText: "šakar",
        },
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "σάκχαρι (sákchari)",
        },
        {
          type: "etymology",
          template: "Del árabe clásico «{spoiler}»",
          spoilerText: "sukkar",
        },
        {
          type: "etymology",
          template: "Del árabe hispánico «{spoiler}»",
          spoilerText: "assúkkar",
        },
      ],
    },
  },
  {
    date: "2026-04-01",
    word: {
      answer: "teatro",
      definition:
        "m. Edificio o sitio destinado a la representación de obras dramáticas o a otros espectáculos públicos propios de la escena.",
      etymology: [
        { word: "θεᾶσθαι (theâsthai)", language: "griego" },
        { word: "θέατρον (théatron)", language: "griego" },
        { word: "theātrum", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "θεᾶσθαι (theâsthai)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "O",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "T",
        },
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "θέατρον (théatron)",
        },
      ],
    },
  },
  {
    date: "2026-04-02",
    word: {
      answer: "juego",
      definition: "m. Acción y efecto de jugar por entretenimiento.",
      etymology: [{ word: "iocus", language: "latín" }],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "iocus",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "J",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "O",
        },
        {
          type: "definition",
          template:
            "En latín originalmente significaba «{spoiler}»",
          spoilerText: "broma o chanza",
        },
      ],
    },
  },
  {
    date: "2026-04-03",
    word: {
      answer: "pijama",
      definition:
        "m. Prenda para dormir, generalmente compuesta de pantalón y chaqueta de tela ligera.",
      etymology: [
        { word: "pāyǧāme", language: "persa" },
        { word: "pāeǧāma", language: "hindi" },
        { word: "pyjamas", language: "inglés" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del persa «{spoiler}»",
          spoilerText: "pāyǧāme",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "etymology",
          template: "Del hindi «{spoiler}»",
          spoilerText: "pāeǧāma",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["P", "A"],
        },
        {
          type: "etymology",
          template: "Del inglés «{spoiler}»",
          spoilerText: "pyjamas",
        },
      ],
    },
  },
  {
    date: "2026-04-04",
    word: {
      answer: "yeso",
      definition:
        "m. Sulfato de calcio hidratado, de color blanco, usado en construcción y en escultura por su propiedad de endurecerse rápidamente al mezclarse con agua.",
      etymology: [
        { word: "γύψος (gýpsos)", language: "griego" },
        { word: "gypsum", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "γύψος (gýpsos)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "4",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["Y", "O"],
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "gypsum",
        },
        {
          type: "definition",
          template: "{spoiler}",
          spoilerText: "Sulfato de calcio hidratado",
        },
      ],
    },
  },
  {
    date: "2026-04-05",
    word: {
      answer: "cráneo",
      definition: "m. Caja ósea en que está contenido el encéfalo.",
      etymology: [
        { word: "κράνος (krános)", language: "griego" },
        { word: "κρανίον (kraníon)", language: "griego" },
        { word: "cranium", language: "bajo latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "κράνος (krános)",
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
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "O",
        },
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "κρανίον (kraníon)",
        },
      ],
    },
  },
  {
    date: "2026-04-06",
    word: {
      answer: "alquiler",
      definition: "m. Acción y efecto de alquilar.",
      etymology: [
        { word: "kirā'", language: "árabe clásico" },
        { word: "alkirá", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del árabe clásico «{spoiler}»",
          spoilerText: "kirā'",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["A", "R"],
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "8",
        },
        {
          type: "etymology",
          template: "Del árabe hispánico «{spoiler}»",
          spoilerText: "alkirá",
        },
        {
          type: "definition",
          template: "Contiene una letra {spoiler}",
          spoilerText: "Q",
        },
      ],
    },
  },
  {
    date: "2026-04-07",
    word: {
      answer: "alfombra",
      definition:
        "f. Tejido de lana o de otras materias, y de varios dibujos y colores, con que se cubre el piso de las habitaciones y escaleras para abrigo y adorno.",
      etymology: [
        { word: "ḥanbal", language: "árabe clásico" },
        { word: "alḥánbal", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del árabe clásico «{spoiler}»",
          spoilerText: "ḥanbal",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "8",
        },
        {
          type: "etymology",
          template: "Del árabe hispánico «{spoiler}»",
          spoilerText: "alḥánbal",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["A", "A"],
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "tejido de lana o de otras materias",
        },
      ],
    },
  },
  {
    date: "2026-04-08",
    word: {
      answer: "pomelo",
      definition: "m. Toronja.",
      etymology: [
        { word: "pompelmous", language: "neerlandés" },
        { word: "pommelo", language: "inglés" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del neerlandés «{spoiler}»",
          spoilerText: "pompelmous",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["P", "O"],
        },
        {
          type: "definition",
          template: "Es sinónimo de {spoiler}",
          spoilerText: "toronja",
        },
        {
          type: "etymology",
          template: "Del inglés «{spoiler}»",
          spoilerText: "pommelo",
        },
      ],
    },
  },
  {
    date: "2026-04-09",
    word: {
      answer: "espalda",
      definition:
        "f. Parte posterior del cuerpo humano, desde los hombros hasta la cintura.",
      etymology: [
        { word: "spatha", language: "latín" },
        { word: "spathŭla", language: "latín tardío" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "spatha",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "etymology",
          template: "Del latín tardío «{spoiler}»",
          spoilerText: "spathŭla",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["E", "A"],
        },
        {
          type: "definition",
          template: "Es una {spoiler}",
          spoilerText: "parte del cuerpo humano",
        },
      ],
    },
  },
  {
    date: "2026-04-10",
    word: {
      answer: "tamaño",
      definition: "m. Mayor o menor volumen o dimensión de algo.",
      etymology: [
        {
          word: "tam magnus",
          language: "latín",
          parts: ["tam", "magnus"],
        },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}» + …",
          spoilerText: "tam",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "etymology",
          template: "… + del latín «{spoiler}»",
          spoilerText: "magnus",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["T", "O"],
        },
        {
          type: "definition",
          template: "Contiene una letra {spoiler}",
          spoilerText: "Ñ",
        },
      ],
    },
  },
  {
    date: "2026-04-11",
    word: {
      answer: "correo",
      definition:
        "m. Servicio público que tiene por objeto el transporte de la correspondencia oficial y privada.",
      etymology: [
        { word: "corlieu", language: "francés antiguo" },
        { word: "correu", language: "catalán" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del francés antiguo «{spoiler}»",
          spoilerText: "corlieu",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["C", "O"],
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "servicio público",
        },
        {
          type: "etymology",
          template: "Del catalán «{spoiler}»",
          spoilerText: "correu",
        },
      ],
    },
  },
  {
    date: "2026-04-12",
    word: {
      answer: "palanca",
      definition:
        "f. Máquina simple que consiste esencialmente en una barra rígida que se apoya y puede girar sobre un punto, y que sirve para transmitir una fuerza.",
      etymology: [
        { word: "φάλαγξ (phálanx)", language: "griego" },
        { word: "palanga", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "φάλαγξ (phálanx)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "P",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "palanga",
        },
      ],
    },
  },
  {
    date: "2026-04-13",
    word: {
      answer: "alegre",
      definition: "adj. Poseído o lleno de alegría.",
      etymology: [
        { word: "alăcer", language: "latín" },
        { word: "alĭcer, alĕcris", language: "latín vulgar" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del latín vulgar «{spoiler}», y este del latín «{spoiler}»",
          spoilerText: ["alĭcer», «alĕcris", "alăcer"],
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "definition",
          template:
            "Es {spoiler}",
          spoilerText:
            "alguien poseído o lleno de un sentimiento grato y vivo que suele manifestarse con signos exteriores",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "E",
        },
      ],
    },
  },
  {
    date: "2026-04-14",
    word: {
      answer: "oreja",
      definition:
        "f. Cartílago que en el ser humano y en muchos animales forma la parte exterior del órgano del oído.",
      etymology: [{ word: "auricŭla", language: "latín" }],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "auricŭla",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "O",
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "cartílago del ser humano",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
      ],
    },
  },
  {
    date: "2026-04-15",
    word: {
      answer: "palabra",
      definition:
        "f. Unidad lingüística, dotada generalmente de significado, que se separa de las demás mediante pausas potenciales en la pronunciación y blancos en la escritura.",
      etymology: [
        { word: "παραβολή (parabolḗ)", language: "griego" },
        { word: "parabŏla", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "παραβολή (parabolḗ)",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "P",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "parabŏla",
        },
      ],
    },
  },
  {
    date: "2026-04-16",
    word: {
      answer: "manzana",
      definition:
        "f. Fruto del manzano, de forma globosa algo hundida por los extremos del eje, de epicarpio delgado, liso y de color verde claro, amarillo pálido o encarnado.",
      etymology: [
        { word: "Mattiāna", language: "latín" },
        { word: "mazana", language: "español desusado" },
      ],
      hints: [
        {
          type: "definition",
          template:
            "Del nombre de {spoiler}",
          spoilerText: "C. Matius, tratadista romano de agricultura",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "Mattiāna",
        },
        {
          type: "definition",
          template: "Es el {spoiler}",
          spoilerText: "fruto de un árbol",
        },
        {
          type: "etymology",
          template: "Del español desusado «{spoiler}»",
          spoilerText: "mazana",
        },
      ],
    },
  },
  {
    date: "2026-04-17",
    word: {
      answer: "mamarracho",
      definition: "m. y f. coloq. Persona estrafalaria o ridícula.",
      etymology: [
        { word: "muharriǧ", language: "árabe" },
        { word: "muharráǧ", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del árabe hispánico «{spoiler}», y este del árabe {spoiler}",
          spoilerText: ["muharráǧ", "«muharriǧ» (bufón)"],
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "10",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["M", "O"],
        },
        {
          type: "definition",
          template: "Es una {spoiler}",
          spoilerText: "persona estrafalaria o ridícula",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "CHO",
        },
      ],
    },
  },
  {
    date: "2026-04-18",
    word: {
      answer: "pena",
      definition: "f. Sentimiento grande de tristeza.",
      etymology: [
        { word: "ποινή (poinḗ)", language: "griego" },
        { word: "poena", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "ποινή (poinḗ)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "4",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "P",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "poena",
        },
      ],
    },
  },
  {
    date: "2026-04-19",
    word: {
      answer: "arroz",
      definition:
        "m. Planta anual propia de terrenos muy húmedos, cuyo fruto es un grano oval rico en almidón.",
      etymology: [
        { word: "arici", language: "tamil" },
        { word: "ὄρυζα (óryza)", language: "griego" },
        { word: "arráwz", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del tamil «{spoiler}»",
          spoilerText: "arici",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "ὄρυζα (óryza)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: "etymology",
          template: "Del árabe hispánico «{spoiler}»",
          spoilerText: "arráwz",
        },
      ],
    },
  },
  {
    date: "2026-04-20",
    word: {
      answer: "pleito",
      definition:
        "m. Contienda, diferencia, disputa, litigio judicial entre partes.",
      etymology: [{ word: "placĭtum", language: "latín" }],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "placĭtum",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "P",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "O",
        },
        {
          type: "definition",
          template:
            "En latín originalmente significaba «{spoiler}»",
          spoilerText: "decreto o sentencia",
        },
      ],
    },
  },
  {
    date: "2026-04-21",
    word: {
      answer: "guitarra",
      definition:
        "f. Instrumento musical de cuerda compuesto por una caja de resonancia en forma de ocho, un mástil largo con trastes, y cuerdas, generalmente seis, que se hacen sonar con los dedos.",
      etymology: [
        { word: "κιθάρα (kithára)", language: "griego" },
        { word: "qiṯārā", language: "arameo" },
        { word: "qīṯārah", language: "árabe" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "κιθάρα (kithára)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "8",
        },
        {
          type: "etymology",
          template:
            "Del árabe «{spoiler}», y este del arameo «{spoiler}»",
          spoilerText: ["qīṯārah", "qiṯārā"],
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "G",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
      ],
    },
  },
  {
    date: "2026-04-22",
    word: {
      answer: "plaza",
      definition:
        "f. Lugar ancho y espacioso dentro de un poblado, al que suelen afluir varias calles.",
      etymology: [
        { word: "πλατεῖα (plateîa)", language: "griego" },
        { word: "platĕa", language: "latín" },
        { word: "plattĕa", language: "latín vulgar" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del latín vulgar «{spoiler}», este del latín «platĕa», y este del griego «πλατεῖα» (plateîa)",
          spoilerText: "plattĕa",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["P", "A"],
        },
        {
          type: "definition",
          template:
            "En griego originalmente significaba «{spoiler}»",
          spoilerText: "calle ancha",
        },
        {
          type: "definition",
          template: "Contiene una letra {spoiler}",
          spoilerText: "Z",
        },
      ],
    },
  },
  {
    date: "2026-04-23",
    word: {
      answer: "ojalá",
      definition: "interj. Denota vivo deseo de que suceda algo.",
      etymology: [{ word: "wa šá lláh", language: "árabe hispánico" }],
      hints: [
        {
          type: "etymology",
          template: "Del árabe hispánico «{spoiler}»",
          spoilerText: "wa šá lláh",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "O",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "definition",
          template:
            "En árabe hispánico originalmente significaba «{spoiler}»",
          spoilerText: "y Dios ha querido",
        },
      ],
    },
  },
  {
    date: "2026-04-24",
    word: {
      answer: "limón",
      definition:
        "m. Fruto del limonero, de corteza lisa y frecuentemente de color amarillo, pulpa amarillenta dividida en gajos, comestible, jugosa y de sabor ácido.",
      etymology: [
        { word: "nimbū", language: "sánscrito" },
        { word: "limu", language: "persa" },
        { word: "laymūn", language: "árabe" },
        { word: "la[y]mún", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del persa «{spoiler}», y este del sánscrito «{spoiler}»",
          spoilerText: ["limu", "nimbū"],
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: "etymology",
          template:
            "Del árabe hispánico «{spoiler}», y este del árabe «{spoiler}»",
          spoilerText: ["la[y]mún", "laymūn"],
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["L", "N"],
        },
        {
          type: "definition",
          template: "Es frecuentemente {spoiler}",
          spoilerText: "de color amarillo",
        },
      ],
    },
  },
  {
    date: "2026-04-25",
    word: {
      answer: "carácter",
      definition:
        "m. Conjunto de cualidades o circunstancias propias de una cosa, de una persona o de una colectividad, que las distingue de las demás.",
      etymology: [
        { word: "χαράττειν (charáttein)", language: "griego" },
        { word: "χαρακτήρ (charaktḗr)", language: "griego" },
        { word: "character", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Derivado del griego «{spoiler}»",
          spoilerText: "χαράττειν (charáttein)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "8",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["C", "R"],
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "conjunto de cualidades o circunstancias",
        },
        {
          type: "etymology",
          template:
            "Del latín «{spoiler}», y este del griego «{spoiler}»",
          spoilerText: ["character", "χαρακτήρ (charaktḗr)"],
        },
      ],
    },
  },
  {
    date: "2026-04-26",
    word: {
      answer: "química",
      definition:
        "f. Ciencia que estudia la estructura, propiedades y transformaciones de los cuerpos a partir de su composición.",
      etymology: [
        { word: "χυμεία (chymeía)", language: "griego" },
        { word: "kīmiyā'", language: "árabe clásico" },
        { word: "quimia", language: "español antiguo" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "χυμεία (chymeía)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "Q",
        },
        {
          type: "etymology",
          template: "Del árabe clásico «{spoiler}»",
          spoilerText: "kīmiyā'",
        },
        {
          type: "etymology",
          template: "Del español antiguo «{spoiler}»",
          spoilerText: "quimia",
        },
      ],
    },
  },
  {
    date: "2026-04-27",
    word: {
      answer: "papel",
      definition:
        "m. Hoja delgada hecha con pasta de fibras vegetales obtenidas de trapos, madera, paja, etc., molidas, blanqueadas y desleídas en agua, que se hace secar y endurecer por procedimientos especiales.",
      etymology: [
        { word: "πάπυρος (pápyros)", language: "griego" },
        { word: "papȳrus", language: "latín" },
        { word: "paper", language: "catalán" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del latín «{spoiler}», y este del griego «πάπυρος» (pápyros)",
          spoilerText: "papȳrus",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "P",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "L",
        },
        {
          type: "etymology",
          template: "Del catalán «{spoiler}»",
          spoilerText: "paper",
        },
      ],
    },
  },
  {
    date: "2026-04-28",
    word: {
      answer: "azul",
      definition:
        "adj. Dicho de un color: Semejante al del cielo sin nubes y el mar en un día soleado.",
      etymology: [
        { word: "rājāvarta", language: "sánscrito" },
        { word: "laǧvard", language: "persa" },
        { word: "lāzaward", language: "árabe" },
        { word: "lazawárd", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del árabe hispánico «{spoiler}», este del árabe «{spoiler}», este del persa «{spoiler}», y este del sánscrito «{spoiler}»",
          spoilerText: ["lazawárd", "lāzaward", "laǧvard", "rājāvarta"],
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "4",
        },
        {
          type: "definition",
          template: "Contiene una letra {spoiler}",
          spoilerText: "Z",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "L",
        },
      ],
    },
  },
  {
    date: "2026-04-29",
    word: {
      answer: "salvaje",
      definition:
        "adj. Dicho de una planta: Que ha crecido sin ser cultivada, o dicho de un animal: Que no es doméstico.",
      etymology: [
        { word: "silvatĭcus", language: "latín" },
        { word: "salvatge", language: "catalán" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}» (propio del bosque)",
          spoilerText: "silvatĭcus",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "S",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "E",
        },
        {
          type: "etymology",
          template: "Del catalán «{spoiler}»",
          spoilerText: "salvatge",
        },
      ],
    },
  },
  {
    date: "2026-04-30",
    word: {
      answer: "jarra",
      definition:
        "f. Vasija de barro, porcelana, loza, cristal, etc., con cuello y boca anchos y una o dos asas.",
      etymology: [
        { word: "ǧarrah", language: "árabe clásico" },
        { word: "ǧárra", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del árabe hispánico «{spoiler}», y este del árabe clásico «ǧarrah»",
          spoilerText: "ǧárra",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "5",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "J",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "definition",
          template: "Tiene {spoiler}",
          spoilerText: "una o dos asas",
        },
      ],
    },
  },
  {
    date: "2026-05-01",
    word: {
      answer: "lágrima",
      definition:
        "f. Cada una de las gotas que segrega la glándula lagrimal.",
      etymology: [
        { word: "δάκρυμα (dákryma)", language: "griego" },
        { word: "lacrĭma", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "δάκρυμα (dákryma)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "L",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "lacrĭma",
        },
      ],
    },
  },
  {
    date: "2026-05-02",
    word: {
      answer: "bailar",
      definition:
        "intr. Ejecutar movimientos acompasados con el cuerpo, brazos y pies.",
      etymology: [
        { word: "πάλλειν (pállein)", language: "griego" },
        { word: "ballāre", language: "latín tardío" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "πάλλειν (pállein)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["B", "R"],
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "verbo",
        },
        {
          type: "etymology",
          template: "Del latín tardío «{spoiler}»",
          spoilerText: "ballāre",
        },
      ],
    },
  },
  {
    date: "2026-05-03",
    word: {
      answer: "aceite",
      definition:
        "m. Líquido graso que se obtiene de frutos o semillas.",
      etymology: [
        { word: "zaytā", language: "arameo" },
        { word: "azzayt", language: "árabe clásico" },
        { word: "azzáyt", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del arameo «{spoiler}»",
          spoilerText: "zaytā",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["A", "E"],
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "líquido graso",
        },
        {
          type: "etymology",
          template:
            "Del árabe hispánico «{spoiler}», y este del ár. clás. «{spoiler}»",
          spoilerText: ["azzáyt", "azzayt"],
        },
      ],
    },
  },
  {
    date: "2026-05-04",
    word: {
      answer: "espada",
      definition:
        "f. Arma blanca, larga, recta, aguda y cortante, con guarnición y empuñadura.",
      etymology: [
        { word: "σπάθη (spáthē)", language: "griego" },
        { word: "spatha", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "σπάθη (spáthē)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["E", "A"],
        },
        {
          type: "definition",
          template:
            "En griego originalmente significaba «{spoiler}»",
          spoilerText: "hoja ancha",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "spatha",
        },
      ],
    },
  },
  {
    date: "2026-05-05",
    word: {
      answer: "góndola",
      definition:
        "f. Embarcación pequeña de recreo, sin palos ni cubierta, que se usa principalmente en Venecia.",
      etymology: [
        { word: "κοντούρα (kontoúra)", language: "griego bizantino" },
        { word: "gondola", language: "italiano" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego bizantino «{spoiler}»",
          spoilerText: "κοντούρα (kontoúra)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["G", "A"],
        },
        {
          type: "definition",
          template:
            "En griego originalmente significaba «{spoiler}»",
          spoilerText: "barca de cola corta",
        },
        {
          type: "etymology",
          template: "Del italiano «{spoiler}»",
          spoilerText: "gondola",
        },
      ],
    },
  },
  {
    date: "2026-05-06",
    word: {
      answer: "cuchillo",
      definition:
        "m. Instrumento para cortar formado por una hoja de metal de un corte solo y con mango.",
      etymology: [
        { word: "culter", language: "latín" },
        { word: "cultellus", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "culter",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "8",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["C", "O"],
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "cultellus",
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "instrumento para cortar",
        },
      ],
    },
  },
  {
    date: "2026-05-07",
    word: {
      answer: "cansar",
      definition: "tr. Causar cansancio a alguien.",
      etymology: [
        { word: "κάμψαι (kámpsai)", language: "griego" },
        { word: "campsāre", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "κάμψαι (kámpsai)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["C", "R"],
        },
        {
          type: "definition",
          template: "Es un {spoiler}",
          spoilerText: "verbo",
        },
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "campsāre",
        },
      ],
    },
  },
  {
    date: "2026-05-08",
    word: {
      answer: "gas",
      definition:
        "m. Fluido que tiende a expandirse y que se caracteriza por su baja densidad.",
      etymology: [
        { word: "chaos", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Alteración del latín «{spoiler}» (caos)",
          spoilerText: "chaos",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "3",
        },
        {
          type: "definition",
          template:
            "Término {spoiler}",
          spoilerText: "acuñado por J. B. van Helmont en el siglo XVII",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "G",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "S",
        },
      ],
    },
  },
  {
    date: "2026-05-09",
    word: {
      answer: "niño",
      definition: "m. y f. Persona que se halla en la niñez.",
      etymology: [
        { word: "nin", language: "catalán y occitano" },
        { word: "ninnu", language: "napolitano" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Voz expresiva del romance; comparar con el catalán y occitano «{spoiler}»",
          spoilerText: "nin",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "4",
        },
        {
          type: "etymology",
          template: "Comparar con el napolitano «{spoiler}»",
          spoilerText: "ninnu",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["N", "O"],
        },
        {
          type: "definition",
          template: "Contiene una letra {spoiler}",
          spoilerText: "Ñ",
        },
      ],
    },
  },
  {
    date: "2026-05-10",
    word: {
      answer: "roncar",
      definition:
        "intr. Hacer ruido bronco con el resuello cuando se duerme.",
      etymology: [
        { word: "ῥόγχος (rónchos)", language: "griego" },
        { word: "rhonchāre", language: "latín tardío" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego «{spoiler}»",
          spoilerText: "ῥόγχος (rónchos)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "R",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "R",
        },
        {
          type: "etymology",
          template: "Del latín tardío «{spoiler}»",
          spoilerText: "rhonchāre",
        },
      ],
    },
  },
  {
    date: "2026-05-11",
    word: {
      answer: "toalla",
      definition:
        "f. Pieza de felpa, algodón u otro material, por lo general rectangular, para secarse el cuerpo.",
      etymology: [
        { word: "thwahljô", language: "germánico" },
        { word: "tobaja", language: "español antiguo" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del germánico «{spoiler}»",
          spoilerText: "thwahljô",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "etymology",
          template: "Del español antiguo «{spoiler}»",
          spoilerText: "tobaja",
        },
        {
          type: "definition",
          template: "Es una {spoiler}",
          spoilerText: "pieza de felpa, algodón u otro material",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["T", "A"],
        },
      ],
    },
  },
  {
    date: "2026-05-12",
    word: {
      answer: "jirafa",
      definition:
        "f. Mamífero artiodáctilo rumiante, originario de África, de hasta cinco metros de altura.",
      etymology: [
        { word: "zurāfah", language: "árabe clásico" },
        { word: "giraffa", language: "italiano" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del árabe clásico «{spoiler}»",
          spoilerText: "zurāfah",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "6",
        },
        {
          type: "starts_with",
          template: "Empieza con {spoiler}",
          spoilerText: "J",
        },
        {
          type: "ends_with",
          template: "Termina con {spoiler}",
          spoilerText: "A",
        },
        {
          type: "etymology",
          template: "Del italiano «{spoiler}»",
          spoilerText: "giraffa",
        },
      ],
    },
  },
  {
    date: "2026-05-13",
    word: {
      answer: "pistola",
      definition:
        "f. Arma de fuego corta que se puede disparar con una sola mano.",
      etymology: [
        { word: "pišt'al", language: "checo" },
        { word: "Pistole", language: "alemán" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del checo «{spoiler}»",
          spoilerText: "pišt'al",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["P", "A"],
        },
        {
          type: "definition",
          template:
            "En checo originalmente significaba «{spoiler}»",
          spoilerText: "flauta pequeña",
        },
        {
          type: "etymology",
          template: "Del alemán «{spoiler}»",
          spoilerText: "Pistole",
        },
      ],
    },
  },
  {
    date: "2026-05-14",
    word: {
      answer: "macarrón",
      definition:
        "m. Pasta alimenticia de harina que tiene forma de canuto más o menos alargado.",
      etymology: [
        { word: "μακαρώνεια (makarṓneia)", language: "griego bizantino" },
        { word: "maccarone", language: "italiano dialectal" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del griego bizantino «{spoiler}»",
          spoilerText: "μακαρώνεια (makarṓneia)",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "8",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["M", "N"],
        },
        {
          type: "definition",
          template: "Es una {spoiler}",
          spoilerText: "pasta alimenticia de harina",
        },
        {
          type: "etymology",
          template: "Del italiano dialectal «{spoiler}»",
          spoilerText: "maccarone",
        },
      ],
    },
  },
  {
    date: "2026-05-15",
    word: {
      answer: "hebilla",
      definition:
        "f. Pieza de metal o de otra materia, generalmente con uno o varios clavos articulados en una varilla, que sujeta la correa o cinta que pasa por ella.",
      etymology: [
        { word: "fibŭla", language: "latín" },
        { word: "fibella", language: "latín vulgar" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}»",
          spoilerText: "fibŭla",
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "etymology",
          template: "Del latín vulgar «{spoiler}»",
          spoilerText: "fibella",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["H", "A"],
        },
        {
          type: "definition",
          template:
            "Es una {spoiler}",
          spoilerText: "pieza de metal o de otra materia para sujetar",
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
