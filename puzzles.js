/* ============================================================
   PUZZLE DIRECTORY DATA
   ------------------------------------------------------------
   This file defines every quest that shows up in directory.html.

   A "quest" is one card in the directory. It can hold:
    - ONE puzzle  → a single poster / book cover. Clicking its
                     card in the directory jumps straight into
                     that puzzle.
    - MANY puzzles → a collection. Clicking its card expands the
                     card to show each puzzle's tag; clicking a
                     puzzle jumps straight into just that one.

   Add, remove, or reorder quests and puzzles freely — the
   directory page and the puzzle engine both adapt automatically.

   Drop your image files into this same folder and point
   `imageUrl` at the filename (or a full https:// URL).
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

  ]
};