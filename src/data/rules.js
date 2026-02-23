/**
 * Game Rules and Content
 * 
 * Each rule contains:
 * - rule: The instruction displayed to the player
 * - category: The subject area (spelling, grammar, spanish)
 * - correctAnswers: Array of correct answers
 * - incorrectAnswers: Array of incorrect answers (distractors)
 */

export const rules = [
    // SPANISH RULES
    {
      rule: "Types of Fruits in Spanish",
      category: "spanish",
      correctAnswers: [
        "manzana",
        "naranja",
        "plátano",
        "uva",
        "fresa",
        "sandía",
        "melón",
        "pera",
        "durazno",
        "limón",
        "piña",
        "cereza"
      ],
      incorrectAnswers: [
        "gato",
        "perro",
        "casa",
        "árbol",
        "mesa",
        "silla",
        "libro",
        "agua",
        "coche",
        "sol",
        "luna",
        "estrella"
      ]
    },
    {
      rule: "Animals in Spanish",
      category: "spanish",
      correctAnswers: [
        "perro",
        "gato",
        "caballo",
        "vaca",
        "cerdo",
        "pollo",
        "pez",
        "pájaro",
        "ratón",
        "elefante",
        "león",
        "tigre"
      ],
      incorrectAnswers: [
        "manzana",
        "casa",
        "mesa",
        "libro",
        "agua",
        "sol",
        "coche",
        "árbol",
        "flor",
        "ventana",
        "puerta",
        "camino"
      ]
    },
    {
      rule: "Colors in Spanish",
      category: "spanish",
      correctAnswers: [
        "rojo",
        "azul",
        "verde",
        "amarillo",
        "negro",
        "blanco",
        "naranja",
        "morado",
        "rosa",
        "gris",
        "marrón",
        "café"
      ],
      incorrectAnswers: [
        "grande",
        "pequeño",
        "rápido",
        "lento",
        "feliz",
        "triste",
        "alto",
        "bajo",
        "nuevo",
        "viejo",
        "caliente",
        "frío"
      ]
    },
    {
      rule: "Regular Verbs – They/They (ellos/ellas)",
      category: "spanish",
      correctAnswers: [
        "hablan",
        "comen",
        "viven",
        "escriben",
        "leen",
        "corren",
        "bailan",
        "cantan",
        "trabajan",
        "estudian",
        "juegan",
        "cocinan"
      ],
      incorrectAnswers: [
        "hablo",
        "como",
        "vivo",
        "hablas",
        "comes",
        "hablamos",
        "comemos",
        "habláis",
        "comen",
        "gato",
        "casa",
        "libro"
      ]
    },
    {
      rule: "Regular Verbs – I (yo)",
      category: "spanish",
      correctAnswers: [
        "hablo",
        "como",
        "vivo",
        "escribo",
        "leo",
        "corro",
        "bailo",
        "canto",
        "trabajo",
        "estudio",
        "juego",
        "cocino"
      ],
      incorrectAnswers: [
        "hablan",
        "comen",
        "hablas",
        "comes",
        "hablamos",
        "comemos",
        "habláis",
        "perro",
        "mesa",
        "sol",
        "agua",
        "flor"
      ]
    },
    {
      rule: "Regular Verbs – You Informal (tú)",
      category: "spanish",
      correctAnswers: [
        "hablas",
        "comes",
        "vives",
        "escribes",
        "lees",
        "corres",
        "bailas",
        "cantas",
        "trabajas",
        "estudias",
        "juegas",
        "cocinas"
      ],
      incorrectAnswers: [
        "hablo",
        "como",
        "hablan",
        "comen",
        "hablamos",
        "comemos",
        "habláis",
        "comen",
        "árbol",
        "puerta",
        "luna",
        "coche"
      ]
    },
    {
      rule: "Regular Verbs – We (nosotros)",
      category: "spanish",
      correctAnswers: [
        "hablamos",
        "comemos",
        "vivimos",
        "escribimos",
        "leemos",
        "corremos",
        "bailamos",
        "cantamos",
        "trabajamos",
        "estudiamos",
        "jugamos",
        "cocinamos"
      ],
      incorrectAnswers: [
        "hablan",
        "comen",
        "hablo",
        "como",
        "hablas",
        "comes",
        "habláis",
        "comen",
        "ventana",
        "camino",
        "estrella",
        "silla"
      ]
    },
    {
      rule: "Types of Sports in Spanish",
      category: "spanish",
      correctAnswers: [
        "fútbol",
        "béisbol",
        "baloncesto",
        "tenis",
        "natación",
        "ciclismo",
        "atletismo",
        "voleibol",
        "hockey",
        "golf",
        "boxeo",
        "esquí"
      ],
      incorrectAnswers: [
        "manzana",
        "perro",
        "casa",
        "libro",
        "agua",
        "mesa",
        "sol",
        "flor",
        "gato",
        "pan",
        "coche",
        "puerta"
      ]
    },
    {
      rule: "Basic Foods in Spanish",
      category: "spanish",
      correctAnswers: [
        "pan",
        "hamburguesa",
        "ensalada",
        "arroz",
        "pollo",
        "pescado",
        "queso",
        "leche",
        "huevos",
        "fruta",
        "verduras",
        "sopa"
      ],
      incorrectAnswers: [
        "fútbol",
        "gato",
        "casa",
        "libro",
        "sol",
        "mesa",
        "coche",
        "perro",
        "flor",
        "agua",
        "árbol",
        "puerta"
      ]
    },
  
    // GRAMMAR RULES
    {
      rule: "Nouns (People, Places, Things)",
      category: "grammar",
      correctAnswers: [
        "teacher",
        "dog",
        "house",
        "car",
        "book",
        "school",
        "pizza",
        "computer",
        "mountain",
        "friend",
        "city",
        "phone"
      ],
      incorrectAnswers: [
        "quickly",
        "run",
        "happy",
        "jump",
        "beautiful",
        "sleep",
        "slowly",
        "eat",
        "bright",
        "laugh",
        "sad",
        "dance"
      ]
    },
    {
      rule: "Verbs (Action Words)",
      category: "grammar",
      correctAnswers: [
        "run",
        "jump",
        "sleep",
        "eat",
        "write",
        "read",
        "swim",
        "dance",
        "sing",
        "laugh",
        "cry",
        "think"
      ],
      incorrectAnswers: [
        "table",
        "happy",
        "dog",
        "blue",
        "house",
        "big",
        "car",
        "pretty",
        "school",
        "fast",
        "book",
        "tall"
      ]
    },
    {
      rule: "Adjectives (Describing Words)",
      category: "grammar",
      correctAnswers: [
        "happy",
        "sad",
        "big",
        "small",
        "fast",
        "slow",
        "bright",
        "dark",
        "hot",
        "cold",
        "tall",
        "short"
      ],
      incorrectAnswers: [
        "run",
        "jump",
        "table",
        "dog",
        "eat",
        "car",
        "sleep",
        "house",
        "write",
        "school",
        "swim",
        "book"
      ]
    },
    {
      rule: "Adverbs (How, When, Where)",
      category: "grammar",
      correctAnswers: [
        "quickly",
        "slowly",
        "happily",
        "sadly",
        "here",
        "there",
        "today",
        "yesterday",
        "always",
        "never",
        "often",
        "sometimes"
      ],
      incorrectAnswers: [
        "quick",
        "happy",
        "run",
        "dog",
        "table",
        "jump",
        "beautiful",
        "house",
        "slow",
        "book",
        "school",
        "fast"
      ]
    },
    {
      rule: "Proper Nouns (Names & Places)",
      category: "grammar",
      correctAnswers: [
        "Monday",
        "January",
        "California",
        "Sarah",
        "Christmas",
        "McDonald's",
        "Texas",
        "Friday",
        "December",
        "America",
        "Michael",
        "Disney"
      ],
      incorrectAnswers: [
        "dog",
        "run",
        "happy",
        "city",
        "girl",
        "month",
        "state",
        "day",
        "store",
        "country",
        "boy",
        "park"
      ]
    },
    {
      rule: "Past Tense Verbs (-ed)",
      category: "grammar",
      correctAnswers: [
        "walked",
        "jumped",
        "played",
        "finished",
        "called",
        "looked",
        "worked",
        "helped",
        "wanted",
        "started",
        "lived",
        "moved"
      ],
      incorrectAnswers: [
        "walk",
        "jump",
        "play",
        "finish",
        "table",
        "dog",
        "house",
        "run",
        "eat",
        "book",
        "happy",
        "blue"
      ]
    },
  
    // SPELLING RULES
    {
      rule: "Words with Silent E",
      category: "spelling",
      correctAnswers: [
        "cake",
        "make",
        "hope",
        "home",
        "like",
        "bike",
        "cute",
        "tube",
        "note",
        "bone",
        "kite",
        "hide"
      ],
      incorrectAnswers: [
        "cat",
        "dog",
        "run",
        "hop",
        "sit",
        "hot",
        "cut",
        "tub",
        "not",
        "got",
        "kit",
        "hid"
      ]
    },
    {
      rule: "Plural Nouns (Ending in S)",
      category: "spelling",
      correctAnswers: [
        "dogs",
        "cats",
        "cars",
        "books",
        "trees",
        "houses",
        "apples",
        "chairs",
        "tables",
        "flowers",
        "birds",
        "friends"
      ],
      incorrectAnswers: [
        "dog",
        "cat",
        "car",
        "book",
        "tree",
        "house",
        "apple",
        "chair",
        "table",
        "flower",
        "bird",
        "friend"
      ]
    },
    {
      rule: "Words with Double Letters",
      category: "spelling",
      correctAnswers: [
        "letter",
        "better",
        "rabbit",
        "happy",
        "balloon",
        "grass",
        "cell",
        "bell",
        "tall",
        "egg",
        "book",
        "moon"
      ],
      incorrectAnswers: [
        "later",
        "beter",
        "rabit",
        "hapy",
        "balon",
        "gras",
        "cel",
        "bel",
        "tal",
        "eg",
        "bok",
        "mon"
      ]
    },
    {
      rule: "Contractions (Shortened Words)",
      category: "spelling",
      correctAnswers: [
        "can't",
        "don't",
        "won't",
        "I'm",
        "you're",
        "they're",
        "it's",
        "we're",
        "isn't",
        "aren't",
        "hasn't",
        "haven't"
      ],
      incorrectAnswers: [
        "cannot",
        "do not",
        "will not",
        "I am",
        "you are",
        "they are",
        "it is",
        "we are",
        "is not",
        "are not",
        "has not",
        "have not"
      ]
    },
    {
      rule: "Words Ending in -ing",
      category: "spelling",
      correctAnswers: [
        "running",
        "jumping",
        "playing",
        "eating",
        "reading",
        "writing",
        "swimming",
        "dancing",
        "singing",
        "walking",
        "talking",
        "working"
      ],
      incorrectAnswers: [
        "runing",
        "jumpping",
        "playng",
        "eeting",
        "readng",
        "writting",
        "swiming",
        "danceing",
        "singging",
        "walkking",
        "talkking",
        "workking"
      ]
    },
    {
      rule: "Long A Sound (ai, ay)",
      category: "spelling",
      correctAnswers: [
        "rain",
        "train",
        "mail",
        "day",
        "play",
        "say",
        "stay",
        "way",
        "pay",
        "may",
        "gray",
        "away"
      ],
      incorrectAnswers: [
        "ran",
        "tan",
        "mat",
        "cat",
        "sat",
        "hat",
        "pet",
        "met",
        "get",
        "red",
        "bed",
        "led"
      ]
    },
    {
      rule: "Words with -tion Ending",
      category: "spelling",
      correctAnswers: [
        "action",
        "nation",
        "station",
        "question",
        "direction",
        "collection",
        "election",
        "section",
        "vacation",
        "celebration",
        "education",
        "invention"
      ],
      incorrectAnswers: [
        "act",
        "stat",
        "quest",
        "direct",
        "collect",
        "elect",
        "sect",
        "vacat",
        "celebrat",
        "educat",
        "invent",
        "operat"
      ]
    },
    {
      rule: "Compound Words",
      category: "spelling",
      correctAnswers: [
        "sunshine",
        "football",
        "bedroom",
        "birthday",
        "something",
        "everyone",
        "outside",
        "inside",
        "cupcake",
        "butterfly",
        "sandbox",
        "rainbow"
      ],
      incorrectAnswers: [
        "sun",
        "foot",
        "bed",
        "birth",
        "some",
        "every",
        "out",
        "in",
        "cup",
        "butter",
        "sand",
        "rain"
      ]
    }
  ];
  
  export default rules;