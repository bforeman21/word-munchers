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
    }
  ];
  
  export default rules;