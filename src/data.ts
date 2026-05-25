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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
            "En latín originalmente significaba «{spoiler}» o «{spoiler}»",
          spoilerText: ["broma", "chanza"],
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
      etymology: [
        { word: "alăcer", language: "latín" },
        { word: "alĭcer, alĕcris", language: "latín vulgar" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del latín vulgar «{spoiler}», y este del latín «{spoiler}»",
          spoilerText: ["alĭcer, alĕcris", "alăcer"],
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
      etymology: [
        { word: "muharriǧ", language: "árabe" },
        { word: "muharráǧ", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del árabe hispánico «{spoiler}», y este del árabe «{spoiler}» {spoiler}",
          spoilerText: ["muharráǧ", "muharriǧ", "(bufón)"],
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
            "En latín originalmente significaba «{spoiler}» o «{spoiler}»",
          spoilerText: ["decreto", "sentencia"],
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
      difficulty: 3,
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
      difficulty: 3,
      etymology: [
        { word: "πλατεῖα (plateîa)", language: "griego" },
        { word: "platĕa", language: "latín" },
        { word: "plattĕa", language: "latín vulgar" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del latín vulgar «{spoiler}», este del latín «{spoiler}», y este del griego «{spoiler}»",
          spoilerText: ["plattĕa", "platĕa", "πλατεῖα (plateîa)"],
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
      etymology: [
        { word: "πάπυρος (pápyros)", language: "griego" },
        { word: "papȳrus", language: "latín" },
        { word: "paper", language: "catalán" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del latín «{spoiler}», y este del griego «{spoiler}»",
          spoilerText: ["papȳrus", "πάπυρος (pápyros)"],
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
      difficulty: 3,
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
      difficulty: 3,
      etymology: [
        { word: "silvatĭcus", language: "latín" },
        { word: "salvatge", language: "catalán" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del latín «{spoiler}» {spoiler}",
          spoilerText: ["silvatĭcus", "(propio del bosque)"],
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
      difficulty: 3,
      etymology: [
        { word: "ǧarrah", language: "árabe clásico" },
        { word: "ǧárra", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template:
            "Del árabe hispánico «{spoiler}», y este del árabe clásico «{spoiler}»",
          spoilerText: ["ǧárra", "ǧarrah"],
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      answer: "niño",
      definition: "m. y f. Persona que se halla en la niñez.",
      difficulty: 3,
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
    date: "2026-05-06",
    word: {
      answer: "cuchillo",
      definition:
        "m. Instrumento para cortar formado por una hoja de metal de un corte solo y con mango.",
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
      etymology: [
        { word: "chaos", language: "latín" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Alteración del latín «{spoiler}» {spoiler}",
          spoilerText: ["chaos", "(caos)"],
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
      answer: "góndola",
      definition:
        "f. Embarcación pequeña de recreo, sin palos ni cubierta, que se usa principalmente en Venecia.",
      difficulty: 3,
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
    date: "2026-05-10",
    word: {
      answer: "roncar",
      definition:
        "intr. Hacer ruido bronco con el resuello cuando se duerme.",
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 3,
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
      difficulty: 5,
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
  {
    date: "2026-05-16",
    word: {
      answer: "zapato",
      definition:
        "m. Calzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel, fieltro, paño u otro tejido, más o menos escotado por el empeine.",
      difficulty: 1,
      etymology: [
        { word: "zabata", language: "turco" },
      ],
      hints: [
        { type: "etymology", template: "Del turco «{spoiler}»", spoilerText: "zabata" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "6" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "z" },
        { type: "definition", template: "Es un {spoiler}", spoilerText: "calzado que no pasa del tobillo" },
        { type: "ends_with", template: "Termina con {spoiler}", spoilerText: "o" },
      ],
    },
  },
  {
    date: "2026-05-17",
    word: {
      answer: "meñique",
      definition:
        "m. El quinto y más pequeño de los dedos de la mano.",
      difficulty: 4,
      etymology: [
        { word: "margariz", language: "francés antiguo" },
        { word: "menino ✕ mermellique", language: "dialectal", parts: ["menino", "mermellique"], joiner: "✕" },
      ],
      hints: [
        { type: "etymology", template: "Del francés antiguo «{spoiler}»", spoilerText: "margariz" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "7" },
        { type: "etymology", template: "Cruce de «{spoiler}» y el dialectal «{spoiler}»", spoilerText: ["menino", "mermellique"] },
        { type: "definition", template: "Contiene la letra {spoiler}", spoilerText: "ñ" },
        { type: ["starts_with", "ends_with"], template: "Empieza con {spoiler} y termina con {spoiler}", spoilerText: ["m", "e"] },
      ],
    },
  },
  {
    date: "2026-05-18",
    word: {
      answer: "flecha",
      definition:
        "f. Arma arrojadiza compuesta de un asta delgada con una punta afilada en uno de sus extremos y en el opuesto algunas plumas cortas que sirven para que mantenga la dirección al ser disparada.",
      difficulty: 4,
      etymology: [
        { word: "fleukka", language: "fráncico" },
        { word: "flèche", language: "francés" },
      ],
      hints: [
        { type: "etymology", template: "Del fráncico «{spoiler}»", spoilerText: "fleukka" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "f" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "6" },
        { type: "etymology", template: "Del francés «{spoiler}»", spoilerText: "flèche" },
        { type: "definition", template: "Es {spoiler}", spoilerText: "un arma arrojadiza con punta afilada" },
      ],
    },
  },
  {
    date: "2026-05-19",
    word: {
      answer: "ángulo",
      definition:
        "m. Figura geométrica formada bien por dos líneas planas que concurren en un punto, bien por dos semiplanos en el espacio que parten de una misma recta, o bien por tres o más planos en el espacio que se cortan en un punto.",
      difficulty: 4,
      etymology: [
        { word: "ἀγκύλος (ankýlos)", language: "griego" },
        { word: "angŭlus", language: "latín" },
      ],
      hints: [
        { type: "etymology", template: "Del griego «{spoiler}»", spoilerText: "ἀγκύλος (ankýlos)" },
        { type: "definition", template: "En griego originalmente significaba «{spoiler}»", spoilerText: "encorvado" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "6" },
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "angŭlus" },
        { type: "starts_with", template: "Empieza con la letra {spoiler}", spoilerText: "á" },
      ],
    },
  },
  {
    date: "2026-05-20",
    word: {
      answer: "cocina",
      definition:
        "f. Pieza o sitio de la casa en el cual se guisa la comida.",
      difficulty: 3,
      etymology: [
        { word: "coquĕre", language: "latín" },
        { word: "coquīna", language: "latín tardío" },
        { word: "cocīna", language: "latín vulgar" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "coquĕre" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "6" },
        { type: "etymology", template: "Del latín tardío «{spoiler}»", spoilerText: "coquīna" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "c" },
        { type: "etymology", template: "Del latín vulgar «{spoiler}»", spoilerText: "cocīna" },
      ],
    },
  },
  {
    date: "2026-05-21",
    word: {
      answer: "feo",
      definition:
        "adj. Desprovisto de belleza y hermosura.",
      difficulty: 2,
      etymology: [
        { word: "foedus", language: "latín" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "foedus" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "3" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "f" },
        { type: "definition", template: "Significa «{spoiler}»", spoilerText: "desprovisto de belleza" },
        { type: "ends_with", template: "Termina con {spoiler}", spoilerText: "o" },
      ],
    },
  },
  {
    date: "2026-05-22",
    word: {
      answer: "cigarro",
      definition:
        "m. Rollo de hojas de tabaco, que se enciende por un extremo y se chupa o fuma por el opuesto.",
      difficulty: 4,
      etymology: [
        { word: "siyar", language: "maya" },
      ],
      hints: [
        { type: "etymology", template: "Del maya «{spoiler}»", spoilerText: "siyar" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "7" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "c" },
        { type: "definition", template: "Es {spoiler}", spoilerText: "un rollo de hojas de tabaco para fumar" },
        { type: "ends_with", template: "Termina con {spoiler}", spoilerText: "o" },
      ],
    },
  },
  {
    date: "2026-05-25",
    word: {
      answer: "ajedrez",
      definition:
        "m. Juego de mesa entre dos personas que se practica sobre un damero en el que se disponen las 16 piezas de cada jugador, desiguales en importancia y valor, que se desplazan y comen las del contrario según ciertas reglas.",
      difficulty: 5,
      etymology: [
        { word: "chaturaṅga", language: "sánscrito" },
        { word: "čatrang", language: "pelvi" },
        { word: "šiṭranǧ", language: "árabe clásico" },
        { word: "aššaṭranǧ", language: "árabe hispánico" },
      ],
      hints: [
        {
          type: "etymology",
          template: "Del sánscrito «{spoiler}», y del pelvi «{spoiler}»",
          spoilerText: ["chaturaṅga", "čatrang"],
        },
        {
          type: "etymology",
          template: "Del árabe clásico «{spoiler}», y del árabe hispánico «{spoiler}»",
          spoilerText: ["šiṭranǧ", "aššaṭranǧ"],
        },
        {
          type: "letter_count",
          template: "Tiene {spoiler} letras",
          spoilerText: "7",
        },
        {
          type: "definition",
          template: "Es {spoiler}",
          spoilerText: "un juego de mesa",
        },
        {
          type: ["starts_with", "ends_with"],
          template: "Empieza con {spoiler} y termina con {spoiler}",
          spoilerText: ["a", "z"],
        },
      ],
    },
  },
  {
    date: "2026-05-26",
    word: {
      answer: "imán",
      definition:
        "m. Mineral de hierro de color negruzco, opaco, casi tan duro como el vidrio, cinco veces más pesado que el agua, y que tiene la propiedad de atraer el hierro, el acero y en grado menor algunos otros cuerpos.",
      difficulty: 3,
      etymology: [
        { word: "aimant", language: "francés" },
      ],
      hints: [
        { type: "etymology", template: "Del francés «{spoiler}»", spoilerText: "aimant" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "4" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "i" },
        { type: "definition", template: "Es {spoiler}", spoilerText: "un mineral que atrae el hierro" },
        { type: "ends_with", template: "Termina con {spoiler}", spoilerText: "n" },
      ],
    },
  },
  {
    date: "2026-05-27",
    word: {
      answer: "zanahoria",
      definition:
        "f. Planta herbácea umbelífera, con flores blancas y purpúrea la central de la umbela, con fruto seco y comprimido y raíz fusiforme, de unos 20 cm de largo, amarilla o rojiza, jugosa y comestible.",
      difficulty: 4,
      etymology: [
        { word: "σταφυλίνη ἀγρία (staphylínē agría)", language: "griego" },
        { word: "safunnárya", language: "árabe hispánico" },
      ],
      hints: [
        { type: "etymology", template: "Del griego «{spoiler}»", spoilerText: "σταφυλίνη ἀγρία (staphylínē agría)" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "9" },
        { type: "etymology", template: "Del árabe hispánico «{spoiler}»", spoilerText: "safunnárya" },
        { type: ["starts_with", "ends_with"], template: "Empieza con {spoiler} y termina con {spoiler}", spoilerText: ["z", "a"] },
        { type: "definition", template: "Es {spoiler}", spoilerText: "una planta de raíz comestible naranja" },
      ],
    },
  },
  {
    date: "2026-05-28",
    word: {
      answer: "cerda",
      definition:
        "f. Pelo grueso, duro y largo que tienen las caballerías en la cola y en la crin.",
      difficulty: 5,
      etymology: [
        { word: "cirrus", language: "latín" },
        { word: "cirra", language: "latín vulgar" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}», y de su variante vulgar «{spoiler}»", spoilerText: ["cirrus", "cirra"] },
        { type: "definition", template: "En latín originalmente significaba «{spoiler}» o «{spoiler}»", spoilerText: ["rizo", "mechón de crin"] },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "5" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "c" },
        { type: "definition", template: "Es un {spoiler}", spoilerText: "pelo grueso de caballerías" },
      ],
    },
  },
  {
    date: "2026-05-29",
    word: {
      answer: "tsunami",
      definition:
        "m. Ola gigantesca producida por un maremoto o una erupción volcánica en el fondo del mar.",
      difficulty: 2,
      etymology: [
        { word: "tsunami", language: "japonés", parts: ["tsu", "nami"] },
        { word: "tsunami", language: "inglés" },
      ],
      hints: [
        { type: "definition", template: "En japonés es una composición de «{spoiler}» + «{spoiler}»", spoilerText: ["puerto", "ola"] },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "7" },
        { type: "etymology", template: "Del japonés «{spoiler}» + …", spoilerText: "tsu" },
        { type: "definition", template: "Es {spoiler}", spoilerText: "una ola gigantesca por maremoto" },
        { type: "etymology", template: "… + del japonés «{spoiler}»", spoilerText: "nami" },
      ],
    },
  },
  {
    date: "2026-05-30",
    word: {
      answer: "bota",
      definition:
        "f. Calzado, generalmente de cuero, que resguarda el pie, el tobillo y, a veces, una parte de la pierna.",
      difficulty: 1,
      etymology: [
        { word: "botte", language: "francés" },
      ],
      hints: [
        { type: "etymology", template: "Del francés «{spoiler}»", spoilerText: "botte" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "4" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "b" },
        { type: "ends_with", template: "Termina con {spoiler}", spoilerText: "a" },
        { type: "definition", template: "Es un {spoiler}", spoilerText: "calzado de cuero que cubre el tobillo" },
      ],
    },
  },
  {
    date: "2026-05-31",
    word: {
      answer: "buzo",
      definition:
        "m. y f. Persona que hace inmersiones bajo el agua con un equipo adecuado para respirar.",
      difficulty: 2,
      etymology: [
        { word: "bucĭna", language: "latín" },
        { word: "búzio", language: "portugués" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "bucĭna" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "4" },
        { type: "etymology", template: "Del portugués «{spoiler}»", spoilerText: "búzio" },
        { type: ["starts_with", "ends_with"], template: "Empieza con {spoiler} y termina con {spoiler}", spoilerText: ["b", "o"] },
        { type: "definition", template: "Es {spoiler}", spoilerText: "una persona que hace inmersiones bajo el agua" },
      ],
    },
  },
  {
    date: "2026-06-01",
    word: {
      answer: "peine",
      definition:
        "m. Utensilio de madera, marfil, concha u otra materia, provisto de dientes muy juntos, con el cual se desenreda y compone el pelo.",
      difficulty: 5,
      etymology: [
        { word: "pecten, -ĭnis", language: "latín" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "pecten, -ĭnis" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "5" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "p" },
        { type: "ends_with", template: "Termina con {spoiler}", spoilerText: "e" },
        { type: "definition", template: "Es un {spoiler}", spoilerText: "utensilio para desenredar el pelo" },
      ],
    },
  },
  {
    date: "2026-06-02",
    word: {
      answer: "jinete",
      definition:
        "m. y f. Persona diestra en la equitación.",
      difficulty: 5,
      etymology: [
        { word: "zanáti", language: "árabe hispánico" },
      ],
      hints: [
        { type: "etymology", template: "Del árabe hispánico «{spoiler}»", spoilerText: "zanáti" },
        { type: "definition", template: "«{spoiler}»", spoilerText: "...el cual es gentilicio de Zanāta, una confederación de tribus bereberes" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "6" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "j" },
        { type: "definition", template: "Es una {spoiler}", spoilerText: "persona diestra en la equitación" },
      ],
    },
  },
  {
    date: "2026-06-03",
    word: {
      answer: "sandía",
      definition:
        "f. Planta herbácea anual, de la familia de las cucurbitáceas, con tallo velloso, flexible, rastrero, de tres a cuatro metros de largo, hojas partidas en segmentos redondeados y de color verde oscuro.",
      difficulty: 4,
      etymology: [
        { word: "sindiyyah", language: "árabe clásico" },
        { word: "sandíyya", language: "árabe hispánico" },
      ],
      hints: [
        { type: "etymology", template: "Del árabe clásico «{spoiler}»", spoilerText: "sindiyyah" },
        { type: "definition", template: "En árabe clásico originalmente significaba «{spoiler}»", spoilerText: "de Sind, región de Pakistán" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "6" },
        { type: "etymology", template: "Del árabe hispánico «{spoiler}»", spoilerText: "sandíyya" },
        { type: "definition", template: "Es {spoiler}", spoilerText: "una planta cucurbitácea de fruto rojo" },
      ],
    },
  },
  {
    date: "2026-06-04",
    word: {
      answer: "costumbre",
      definition:
        "f. Manera habitual de actuar o comportarse.",
      difficulty: 5,
      etymology: [
        { word: "consuetūdo, -ĭnis", language: "latín" },
        { word: "cosuetumen", language: "latín vulgar" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "consuetūdo, -ĭnis" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "9" },
        { type: "etymology", template: "Del latín vulgar «{spoiler}»", spoilerText: "cosuetumen" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "c" },
        { type: "definition", template: "Significa «{spoiler}»", spoilerText: "manera habitual de actuar" },
      ],
    },
  },
  {
    date: "2026-06-05",
    word: {
      answer: "cetro",
      definition:
        "m. Vara de oro u otra materia preciosa, labrada con primor, que usaban solamente emperadores y reyes por insignia de su dignidad.",
      difficulty: 4,
      etymology: [
        { word: "σκῆπτρον (skêptron)", language: "griego" },
        { word: "sceptrum", language: "latín" },
      ],
      hints: [
        { type: "etymology", template: "Del griego «{spoiler}»", spoilerText: "σκῆπτρον (skêptron)" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "5" },
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "sceptrum" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "c" },
        { type: "definition", template: "Es {spoiler}", spoilerText: "una vara de oro, insignia de reyes" },
      ],
    },
  },
  {
    date: "2026-06-06",
    word: {
      answer: "rascar",
      definition:
        "tr. Refregar o frotar fuertemente la piel con algo agudo o áspero, y por lo regular con las uñas.",
      difficulty: 4,
      etymology: [
        { word: "radĕre", language: "latín" },
        { word: "rasicāre", language: "latín vulgar" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "radĕre" },
        { type: "definition", template: "En latín originalmente significaba «{spoiler}» o «{spoiler}»", spoilerText: ["raer", "afeitar"] },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "6" },
        { type: "etymology", template: "Del latín vulgar «{spoiler}»", spoilerText: "rasicāre" },
        { type: "definition", template: "Significa «{spoiler}»", spoilerText: "frotar la piel con las uñas" },
      ],
    },
  },
  {
    date: "2026-06-07",
    word: {
      answer: "llave",
      definition:
        "f. Instrumento, comúnmente metálico, que, introducido en una cerradura, permite activar el mecanismo que la abre y la cierra.",
      difficulty: 3,
      etymology: [
        { word: "clavis", language: "latín" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "clavis" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "5" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "l" },
        { type: "definition", template: "Es {spoiler}", spoilerText: "un instrumento que abre cerraduras" },
        { type: "ends_with", template: "Termina con {spoiler}", spoilerText: "e" },
      ],
    },
  },
  {
    date: "2026-06-08",
    word: {
      answer: "buche",
      definition:
        "m. Bolsa membranosa que comunica con el esófago de las aves, en la cual se reblandece el alimento.",
      difficulty: 5,
      etymology: [
        { word: "bucca", language: "latín" },
        { word: "buccŭla", language: "latín vulgar" },
        { word: "bucŭla", language: "latín tardío" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "bucca" },
        { type: "definition", template: "En latín originalmente significaba «{spoiler}» o «{spoiler}»", spoilerText: ["boca", "carrillo"] },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "5" },
        { type: "etymology", template: "Del latín vulgar «{spoiler}», y del latín tardío «{spoiler}»", spoilerText: ["buccŭla", "bucŭla"] },
        { type: "definition", template: "Es {spoiler}", spoilerText: "una bolsa en el esófago de las aves, o coloquialmente, el estómago de las personas" },
      ],
    },
  },
  {
    date: "2026-06-09",
    word: {
      answer: "sembrar",
      definition:
        "tr. Arrojar y esparcir las semillas en la tierra preparada para este fin.",
      difficulty: 4,
      etymology: [
        { word: "semināre", language: "latín" },
      ],
      hints: [
        { type: "etymology", template: "Del latín «{spoiler}»", spoilerText: "semināre" },
        { type: "letter_count", template: "Tiene {spoiler} letras", spoilerText: "7" },
        { type: "starts_with", template: "Empieza con {spoiler}", spoilerText: "s" },
        { type: "ends_with", template: "Termina con {spoiler}", spoilerText: "r" },
        { type: "definition", template: "Significa «{spoiler}»", spoilerText: "esparcir semillas en la tierra" },
      ],
    },
  },
];

export const GAME_START_DATE = "2026-03-19";

export function getLocalDateString(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getWordByDate(date: string): WordData | undefined {
  return words.find((w) => w.date === date)?.word;
}

export function getTodayWord(): WordData {
  const today = getLocalDateString();
  const found = words.find((w) => w.date === today);
  return found ? found.word : words[0].word;
}
