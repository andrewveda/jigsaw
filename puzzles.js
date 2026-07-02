/* ============================================================
   PUZZLE DIRECTORY DATA
   This file defines every quest that shows up in directory.html.

   A "quest" is one card in the directory. It can hold:
   - ONE puzzle    → a single poster / book cover. Clicking its card
                      in the directory jumps straight into that puzzle.
   - MANY puzzles  → a collection. Clicking its card expands the card
                      to show each puzzle's tag; clicking a puzzle
                      jumps straight into just that one.

   Add, remove, or reorder quests and puzzles freely — the directory
   page and the puzzle engine both adapt automatically.

   Drop your image files into this same folder and point `imageUrl`
   at the filename (or a full https:// URL).
   ============================================================ */

window.PUZZLE_DIRECTORY = {
  directoryTitle: "Puzzle Directory",
  directoryTagline: "Pick a poster or a full puzzle quest to solve.",

  quests: [

    /* ---- Example: a COLLECTION (multiple puzzles, played as a set) ---- */
    {
      id: "motivation-quest",
      tag: "Motivation & Grit",
      description: "Piece together the mindset that keeps you moving forward.",
      coverImage: "1.png",
      finaleQuote: {
        text: "Progress isn't loud. It's the quiet decision to keep going, one small piece at a time.",
        ref: "— Puzzle Quest"
      },
      puzzles: [
        { id: "pq1", num: 1, title: "Puzzle 1", sub: "Ever tried.",         imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg", cols: 4, rows: 4 },
        { id: "pq2", num: 2, title: "Puzzle 2", sub: "Embrace The Grind",           imageUrl: "2.png", cols: 4, rows: 4 },
        { id: "pq3", num: 3, title: "Puzzle 3", sub: "Fall Seven, Rise Eight",      imageUrl: "3.png", cols: 4, rows: 4 },
        { id: "pq4", num: 4, title: "Puzzle 4", sub: "Progress Over Perfect",       imageUrl: "4.png", cols: 4, rows: 4 },
        { id: "pq5", num: 5, title: "Puzzle 5", sub: "Discipline Beats Motivation", imageUrl: "5.png", cols: 4, rows: 4 },
        { id: "pq6", num: 6, title: "Puzzle 6", sub: "Never Stop Learning",         imageUrl: "6.png", cols: 4, rows: 4 },
      ]
    },

    /* ---- Example: a SINGLE puzzle (one poster, one card, no sub-list) ---- */
    {
      id: "grit-poster",
      tag: "Grit Poster",
      description: "A single motivational poster.",
      coverImage: "grit-poster.png",
      finaleQuote: { text: "Grit is sticking with your future, day in and day out.", ref: "— Puzzle Quest" },
      puzzles: [
        { id: "grit-poster-1", num: 1, title: "Grit Poster", sub: "Stay The Course", imageUrl: "grit-poster.png", cols: 4, rows: 4 }
      ]
    },

    {
      id: "learning-poster",
      tag: "Always Learning",
      description: "A single motivational poster.",
      coverImage: "learning-poster.png",
      finaleQuote: { text: "The moment you stop learning is the moment you stop growing.", ref: "— Puzzle Quest" },
      puzzles: [
        { id: "learning-poster-1", num: 1, title: "Always Learning", sub: "Stay Curious", imageUrl: "learning-poster.png", cols: 4, rows: 4 }
      ]
    },

    /* ---- New: Aathichudi (Avvaiyar) ---- */
    {
      id: "aathichudi-1",
      tag: "Aathichudi",
      description: "One-line moral verses from Avvaiyar's Aathichudi, letters அ to ஊ.",
      coverImage: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/9dd20b407e68511bd83996f17878402e334beeb3/assets/file_00000000f018720ba2eb655a0e74bc69.png",
      finaleQuote: { text: "Do not give up hope. Do not stop doing good.", ref: "— Aathichudi, Avvaiyar" },
      puzzles: [
        { id: "aathichudi-1-1", num: 1, title: "Aathichudi", sub: "அ – ஊ",
          imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/9dd20b407e68511bd83996f17878402e334beeb3/assets/file_00000000f018720ba2eb655a0e74bc69.png",
          cols: 4, rows: 4 }
      ]
    },

    /* ---- New: Obelix and Co. (Asterix book cover) ---- */
    {
      id: "obelix-and-co",
      tag: "Obelix and Co.",
      description: "Cover art from the Asterix book, Obelix and Co.",
      coverImage: "https://raw.githubusercontent.com/andrewveda/asterix/main/RCO001_1663947548.jpg",
      finaleQuote: { text: "Every little Gaul has his own idea of business.", ref: "— Obelix and Co." },
      puzzles: [
        { id: "obelix-and-co-1", num: 1, title: "Obelix and Co.", sub: "Cover",
          imageUrl: "https://raw.githubusercontent.com/andrewveda/asterix/main/RCO001_1663947548.jpg",
          cols: 4, rows: 4 }
      ]
    },

    /* ---- New: Thirukural 12 (⚠ verse number unverified — confirm before final use) ---- */
    {
      id: "thirukural-12",
      tag: "Thirukural 12",
      description: "An illustrated poster of Thirukural 12.",
      coverImage: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/9972f629516fc35b4ec8305d50ad3a849d2a89a7/assets/file_000000001724720baf487991251f477a.png",
      finaleQuote: { text: "TBD — please confirm the exact couplet text/translation.", ref: "— Thirukural 12" },
      puzzles: [
        { id: "thirukural-12-1", num: 1, title: "Thirukural", sub: "12",
          imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/9972f629516fc35b4ec8305d50ad3a849d2a89a7/assets/file_000000001724720baf487991251f477a.png",
          cols: 4, rows: 4 }
      ]
    },

  ]
};