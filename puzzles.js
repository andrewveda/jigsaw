const PUZZLES = [
  // ── QUOTES ──────────────────────────────────────────────────────
  {
    id: "q01",
    category: "quotes",
    title: "Einstein on curiosity",
    author: "Albert Einstein",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "easy"
  },
  {
    id: "q02",
    category: "quotes",
    title: "Maya Angelou — rise",
    author: "Maya Angelou",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "medium"
  },
  {
    id: "q03",
    category: "quotes",
    title: "Oscar Wilde wit",
    author: "Oscar Wilde",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 5, rows: 4,
    difficulty: "medium"
  },
  {
    id: "q04",
    category: "quotes",
    title: "APJ Abdul Kalam — dreams",
    author: "APJ Abdul Kalam",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "easy"
  },
  {
    id: "q05",
    category: "quotes",
    title: "Rumi on love",
    author: "Rumi",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 5, rows: 5,
    difficulty: "hard"
  },

  // ── JOKES ───────────────────────────────────────────────────────
  {
    id: "j01",
    category: "jokes",
    title: "Why did the cat…",
    author: "Animal jokes",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 3, rows: 3,
    difficulty: "easy"
  },
  {
    id: "j02",
    category: "jokes",
    title: "The punny baker",
    author: "Pun collection",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 3,
    difficulty: "easy"
  },
  {
    id: "j03",
    category: "jokes",
    title: "Knock knock classic",
    author: "Classic jokes",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 3, rows: 3,
    difficulty: "easy"
  },
  {
    id: "j04",
    category: "jokes",
    title: "Science lab mishap",
    author: "Nerdy jokes",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "medium"
  },

  // ── COMICS ──────────────────────────────────────────────────────
  {
    id: "c01",
    category: "comics",
    title: "Monday morning strip",
    author: "Daily comics",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "medium"
  },
  {
    id: "c02",
    category: "comics",
    title: "The space explorer",
    author: "Adventure series",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 5, rows: 4,
    difficulty: "hard"
  },
  {
    id: "c03",
    category: "comics",
    title: "Office life",
    author: "Workplace humour",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "medium"
  },
  {
    id: "c04",
    category: "comics",
    title: "Superhero day off",
    author: "Hero comics",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 5, rows: 5,
    difficulty: "hard"
  },

  // ── THIRUKKURAL ─────────────────────────────────────────────────
  {
    id: "tk01",
    category: "thirukural",
    title: "கடவுள் வாழ்த்து",
    author: "Kural 1 · Paayiram",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "medium"
  },
  {
    id: "tk02",
    category: "thirukural",
    title: "அறனே உறுதி",
    author: "Kural 31 · Araththuppal",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "medium"
  },
  {
    id: "tk03",
    category: "thirukural",
    title: "இடுக்கண் அழியாமை",
    author: "Kural 621 · Porutpal",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 5, rows: 4,
    difficulty: "hard"
  },
  {
    id: "tk04",
    category: "thirukural",
    title: "காமத்துப்பால்",
    author: "Kural 1081 · Inbaththuppal",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 5, rows: 5,
    difficulty: "hard"
  },
  {
    id: "tk05",
    category: "thirukural",
    title: "வாய்மை நெறி",
    author: "Kural 291 · Araththuppal",
    imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg",
    cols: 4, rows: 4,
    difficulty: "medium"
  }
];
