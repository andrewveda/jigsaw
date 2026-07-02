/* ============================================================
   PUZZLE DATA
   ------------------------------------------------------------
   Add, remove, or reorder entries in `puzzles` below and the
   whole app adapts automatically — nav dots, progress counter,
   gallery, and finale screen all read from this array's length.

   Drop your poster images into this same folder and point
   `imageUrl` at the filename (or use a full https:// URL if
   you'd rather host them elsewhere).
   ============================================================ */
window.PUZZLE_SET = {

  // Shown on the entry screen and in the browser tab title
  questTitle: "Puzzle Quest",
  questSubtitle: "Motivation & Grit",
  entryTagline: "Piece together the mindset that keeps you moving forward.",

  // Shown on the final "all puzzles complete" screen
  finaleQuote: {
    text: "Progress isn't loud. It's the quiet decision to keep going, one small piece at a time.",
    ref: "— Puzzle Quest"
  },

  // One entry per puzzle. `imageUrl` is the poster image for that puzzle.
  puzzles: [
    { id: "pq1", num: 1, title: "Puzzle 1", sub: "Start Where You Are",          imageUrl: "https://raw.githubusercontent.com/andrewveda/SRM-VEC-English-PWA/db8b23b2c55fe5c176a928628ac078611c614441/assets/51LMkrllR3S._AC_UF1000%2C1000_QL80_.jpg", cols: 4, rows: 4 },
    { id: "pq2", num: 2, title: "Puzzle 2", sub: "Embrace The Grind",            imageUrl: "2.png", cols: 4, rows: 4 },
    { id: "pq3", num: 3, title: "Puzzle 3", sub: "Fall Seven, Rise Eight",       imageUrl: "3.png", cols: 4, rows: 4 },
    { id: "pq4", num: 4, title: "Puzzle 4", sub: "Progress Over Perfect",        imageUrl: "4.png", cols: 4, rows: 4 },
    { id: "pq5", num: 5, title: "Puzzle 5", sub: "Discipline Beats Motivation",  imageUrl: "5.png", cols: 4, rows: 4 },
    { id: "pq6", num: 6, title: "Puzzle 6", sub: "Never Stop Learning",          imageUrl: "6.png", cols: 4, rows: 4 },
  ]
};
  

  