// src/data/games/crossword.ts

export interface CrosswordClue {
  id: string;
  number: number;
  clue: string;
  answer: string;
  row: number;
  col: number;
  direction: 'across' | 'down';
  length: number;
  category?: string;
  reference?: string;
}

export interface CrosswordPuzzle {
  id: string;
  title: string;
  description: string;
  grid: string[][];
  clues: CrosswordClue[];
  answers: string[];
  mode: 'classic' | 'verse' | 'names' | 'places' | 'books' | 'themes' | 'mixed';
  theme: string;
  estimatedTime?: string;
}

// ================================================================
// HELPER FUNCTIONS - FIXED with proper bounds checking
// ================================================================

const createGrid = (rows: number, cols: number): string[][] =>
  Array.from({ length: rows }, () => Array(cols).fill(''));

// SAFE placeWord - ensures grid is large enough
const placeWord = (grid: string[][], word: string, row: number, col: number, dir: 'across' | 'down'): void => {
  // Ensure grid has enough rows
  if (dir === 'down') {
    while (grid.length < row + word.length) {
      const cols = grid[0]?.length || 15;
      grid.push(Array(cols).fill(''));
    }
  }
  
  // Ensure each row has enough columns
  for (let i = 0; i < word.length; i++) {
    const r = dir === 'down' ? row + i : row;
    const c = dir === 'across' ? col + i : col;
    
    while (grid.length <= r) {
      const cols = grid[0]?.length || 15;
      grid.push(Array(cols).fill(''));
    }
    
    while (grid[r].length <= c) {
      grid[r].push('');
    }
  }
  
  // Place the word
  for (let i = 0; i < word.length; i++) {
    if (dir === 'across') {
      grid[row][col + i] = word[i];
    } else {
      grid[row + i][col] = word[i];
    }
  }
};

const addBlackCells = (grid: string[][], positions: { row: number; col: number }[]): void => {
  positions.forEach(({ row, col }) => { 
    if (row < grid.length && col < grid[row]?.length) {
      grid[row][col] = '■'; 
    }
  });
};

// ================================================================
// GRID PATTERNS WITH PROPER SIZING (minimum 15 columns)
// ================================================================

type GridPattern = {
  rows: number;
  cols: number;
  blackCells: { row: number; col: number }[];
};

const gridPatterns: GridPattern[] = [
  // Pattern 1: 8x15 with cross
  {
    rows: 8, cols: 15,
    blackCells: [
      [0,5],[0,6],[0,7],[0,8],[0,9],[0,10],
      [1,0],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],
      [2,0],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],
      [3,0],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],
      [4,5],[4,6],[4,7],[4,8],[4,9],[4,10],
      [5,5],[5,6],[5,7],[5,8],[5,9],[5,10],
      [6,5],[6,6],[6,7],[6,8],[6,9],[6,10],
      [7,5],[7,6],[7,7],[7,8],[7,9],[7,10]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 2: 8x15 with corners
  {
    rows: 8, cols: 15,
    blackCells: [
      [0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],
      [1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],
      [4,0],[4,1],[5,0],[5,1],[6,0],[6,1],[7,0],[7,1],
      [4,11],[4,12],[5,11],[5,12],[6,11],[6,12],[7,11],[7,12],
      [4,6],[4,7],[5,6],[5,7],[6,6],[6,7],[7,6],[7,7]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 3: 7x15 with diamond
  {
    rows: 7, cols: 15,
    blackCells: [
      [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,10],[1,11],[1,12],[1,13],[1,14],
      [2,0],[2,1],[2,2],[2,3],[2,10],[2,11],[2,12],[2,13],
      [3,0],[3,1],[3,2],[3,10],[3,11],[3,12],
      [4,0],[4,1],[4,2],[4,3],[4,10],[4,11],[4,12],[4,13],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,10],[5,11],[5,12],[5,13],[5,14],
      [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 4: 9x15 with center block
  {
    rows: 9, cols: 15,
    blackCells: [
      [0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],
      [1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],
      [2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,10],[3,11],[3,12],[3,13],[3,14],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,10],[4,11],[4,12],[4,13],[4,14],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,10],[5,11],[5,12],[5,13],[5,14],
      [6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],
      [7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],
      [8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 5: 7x15 with L-shape
  {
    rows: 7, cols: 15,
    blackCells: [
      [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],
      [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],
      [1,13],[2,13],[3,13],[4,13],[5,13]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 6: 8x15 with diagonal blocks
  {
    rows: 8, cols: 15,
    blackCells: [
      [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],
      [3,0],[3,1],[3,2],[3,3],[3,4],
      [4,0],[4,1],[4,2],[4,3],[4,4],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],
      [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],
      [7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],
      [0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
      [1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
      [2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
      [3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
      [4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
      [5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
      [6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
      [7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 7: 6x15 with cross
  {
    rows: 6, cols: 15,
    blackCells: [
      [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,10],[2,11],[2,12],[2,13],[2,14],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,10],[3,11],[3,12],[3,13],[3,14],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
      [5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 8: 9x15 with spiral blocks
  {
    rows: 9, cols: 15,
    blackCells: [
      [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],
      [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],
      [7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],
      [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],
      [0,14],[1,14],[2,14],[3,14],[4,14],[5,14],[6,14],[7,14],[8,14]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 9: 7x15 with central square
  {
    rows: 7, cols: 15,
    blackCells: [
      [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],
      [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],
      [0,14],[1,14],[2,14],[3,14],[4,14],[5,14],[6,14]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 10: 8x15 with scattered blocks
  {
    rows: 8, cols: 15,
    blackCells: [
      [0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],
      [1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],
      [6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],
      [7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 11: 7x15 with checkerboard
  {
    rows: 7, cols: 15,
    blackCells: [
      [0,0],[0,2],[0,4],[0,6],[0,8],[0,10],[0,12],
      [1,1],[1,3],[1,5],[1,7],[1,9],[1,11],[1,13],
      [2,0],[2,2],[2,4],[2,6],[2,8],[2,10],[2,12],
      [3,1],[3,3],[3,5],[3,7],[3,9],[3,11],[3,13],
      [4,0],[4,2],[4,4],[4,6],[4,8],[4,10],[4,12],
      [5,1],[5,3],[5,5],[5,7],[5,9],[5,11],[5,13],
      [6,0],[6,2],[6,4],[6,6],[6,8],[6,10],[6,12]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 12: 8x15 with zigzag
  {
    rows: 8, cols: 15,
    blackCells: [
      [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],
      [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],
      [7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 13: 6x15 with T-shape
  {
    rows: 6, cols: 15,
    blackCells: [
      [0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],
      [1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],
      [2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
      [4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],
      [5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 14: 9x15 with corner squares
  {
    rows: 9, cols: 15,
    blackCells: [
      [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
      [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
      [7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
      [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
      [0,4],[1,4],[2,4],[3,4],[5,4],[6,4],[7,4],[8,4]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
  // Pattern 15: 10x15 with large cross
  {
    rows: 10, cols: 15,
    blackCells: [
      [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
      [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
      [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],
      [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],
      [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],
      [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],
      [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
      [7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],
      [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
      [9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],[9,14]
    ].map(([r,c]) => ({ row: r, col: c }))
  },
];

// ================================================================
// REAL BIBLE CLUES - 15 themes × 10 words
// ================================================================

type WordData = {
  word: string;
  clue: string;
  reference: string;
};

const themeWords: Record<string, WordData[]> = {
  kings: [
    { word: 'DAVID', clue: 'The shepherd who became king of Israel', reference: '1 Samuel 16:1-13' },
    { word: 'SOLOMON', clue: 'The wisest king who built the Temple', reference: '1 Kings 4:29-34' },
    { word: 'SAUL', clue: 'The first king of Israel', reference: '1 Samuel 10:1' },
    { word: 'HEZEKIAH', clue: 'The king who trusted God and was healed', reference: '2 Kings 18:1-8' },
    { word: 'JOSIAH', clue: 'The king who found the Book of the Law', reference: '2 Kings 22:1-13' },
    { word: 'JEHOSHAPHAT', clue: 'The king who sought the Lord', reference: '2 Chronicles 17:1-6' },
    { word: 'ASA', clue: 'The king who removed idols', reference: '2 Chronicles 14:1-5' },
    { word: 'UZZIAH', clue: 'The king who was proud and became leprous', reference: '2 Chronicles 26:16-21' },
    { word: 'MANASSEH', clue: 'The wicked king who repented', reference: '2 Chronicles 33:1-13' },
    { word: 'AHAB', clue: 'The king married to Jezebel', reference: '1 Kings 16:29-33' },
  ],
  prophets: [
    { word: 'ISAIAH', clue: 'The prophet who saw the Lord on His throne', reference: 'Isaiah 6:1-8' },
    { word: 'JEREMIAH', clue: 'The weeping prophet', reference: 'Jeremiah 1:4-10' },
    { word: 'EZEKIEL', clue: 'The prophet who saw dry bones live again', reference: 'Ezekiel 37:1-14' },
    { word: 'DANIEL', clue: 'The prophet who survived the lion\'s den', reference: 'Daniel 6:16-23' },
    { word: 'HOSEA', clue: 'The prophet whose marriage was a symbol', reference: 'Hosea 1:2-3' },
    { word: 'JOEL', clue: 'The prophet of the Day of the Lord', reference: 'Joel 2:28-32' },
    { word: 'AMOS', clue: 'The shepherd who became a prophet', reference: 'Amos 7:14-15' },
    { word: 'OBADIAH', clue: 'The prophet of Edom\'s judgment', reference: 'Obadiah 1:1' },
    { word: 'JONAH', clue: 'The prophet swallowed by a great fish', reference: 'Jonah 1:17' },
    { word: 'MICAH', clue: 'The prophet who said "What does the Lord require?"', reference: 'Micah 6:8' },
  ],
  women: [
    { word: 'MARY', clue: 'The mother of Jesus', reference: 'Luke 1:26-38' },
    { word: 'ESTHER', clue: 'The queen who saved her people', reference: 'Esther 4:14' },
    { word: 'RUTH', clue: 'The Moabite who followed Naomi', reference: 'Ruth 1:16-17' },
    { word: 'DEBORAH', clue: 'The judge and prophetess who led Israel', reference: 'Judges 4:4-5' },
    { word: 'ELIZABETH', clue: 'The mother of John the Baptist', reference: 'Luke 1:5-25' },
    { word: 'MARTHA', clue: 'The sister who served Jesus', reference: 'Luke 10:38-42' },
    { word: 'LEAH', clue: 'The less favored wife of Jacob', reference: 'Genesis 29:16-35' },
    { word: 'RACHEL', clue: 'Jacob\'s beloved wife', reference: 'Genesis 29:28-30' },
    { word: 'HANNAH', clue: 'The mother of Samuel', reference: '1 Samuel 1:9-20' },
    { word: 'MIRIAM', clue: 'The prophetess and sister of Moses', reference: 'Exodus 15:20-21' },
  ],
  places: [
    { word: 'BETHLEHEM', clue: 'The birthplace of Jesus', reference: 'Matthew 2:1' },
    { word: 'JERUSALEM', clue: 'The city of the great King', reference: 'Psalm 122:6' },
    { word: 'NAZARETH', clue: 'The hometown of Jesus', reference: 'Luke 1:26' },
    { word: 'GALILEE', clue: 'The sea where Jesus walked on water', reference: 'Matthew 14:22-33' },
    { word: 'JUDEA', clue: 'The region where Jerusalem is located', reference: 'Matthew 2:1' },
    { word: 'SAMARIA', clue: 'The region of the half-Jewish people', reference: 'John 4:4-6' },
    { word: 'BETHANY', clue: 'The home of Mary, Martha, and Lazarus', reference: 'John 11:1' },
    { word: 'CAPERNAUM', clue: 'The town where Jesus healed the paralyzed man', reference: 'Mark 2:1-12' },
    { word: 'EMMAUS', clue: 'The village where Jesus appeared to two disciples', reference: 'Luke 24:13-35' },
    { word: 'JORDAN', clue: 'The river where Jesus was baptized', reference: 'Matthew 3:13' },
  ],
  books: [
    { word: 'GENESIS', clue: 'The book of beginnings', reference: 'Genesis 1:1' },
    { word: 'EXODUS', clue: 'The book of the Exodus from Egypt', reference: 'Exodus 20:2' },
    { word: 'LEVITICUS', clue: 'The book of priestly laws', reference: 'Leviticus 19:2' },
    { word: 'NUMBERS', clue: 'The book of the census in the wilderness', reference: 'Numbers 1:1' },
    { word: 'DEUTERONOMY', clue: 'The book of the repeated law', reference: 'Deuteronomy 6:4' },
    { word: 'JOSHUA', clue: 'The book of the conquest of Canaan', reference: 'Joshua 1:9' },
    { word: 'JUDGES', clue: 'The book of Israel\'s cycles of sin', reference: 'Judges 2:16-19' },
    { word: 'RUTH', clue: 'The book of loyalty and redemption', reference: 'Ruth 1:16' },
    { word: 'SAMUEL', clue: 'The book of Israel\'s first kings', reference: '1 Samuel 16:1' },
    { word: 'KINGS', clue: 'The book of Israel\'s kings', reference: '1 Kings 3:5' },
  ],
  apostles: [
    { word: 'PETER', clue: 'The disciple who denied Jesus three times', reference: 'Matthew 26:69-75' },
    { word: 'JAMES', clue: 'The brother of John, son of Zebedee', reference: 'Matthew 4:21' },
    { word: 'JOHN', clue: 'The beloved disciple', reference: 'John 13:23' },
    { word: 'ANDREW', clue: 'The disciple who brought his brother to Jesus', reference: 'John 1:40-42' },
    { word: 'PHILIP', clue: 'The disciple who brought Nathanael to Jesus', reference: 'John 1:43-46' },
    { word: 'BARTHOLOMEW', clue: 'The disciple from Cana in Galilee', reference: 'John 21:2' },
    { word: 'MATTHEW', clue: 'The tax collector who became a disciple', reference: 'Matthew 9:9' },
    { word: 'THOMAS', clue: 'The disciple who doubted the resurrection', reference: 'John 20:24-29' },
    { word: 'THADDAEUS', clue: 'One of the lesser-known disciples', reference: 'Matthew 10:3' },
    { word: 'SIMON', clue: 'The disciple called the Zealot', reference: 'Luke 6:15' },
  ],
  judges: [
    { word: 'OTHNIEL', clue: 'The first judge of Israel', reference: 'Judges 3:7-11' },
    { word: 'EHUD', clue: 'The left-handed judge who killed the king of Moab', reference: 'Judges 3:12-30' },
    { word: 'SHAMGAR', clue: 'The judge who killed 600 Philistines', reference: 'Judges 3:31' },
    { word: 'DEBORAH', clue: 'The judge who led Israel with Barak', reference: 'Judges 4:4-5' },
    { word: 'GIDEON', clue: 'The judge who defeated Midian with 300 men', reference: 'Judges 7:1-23' },
    { word: 'JEPHTHAH', clue: 'The judge who made a foolish vow', reference: 'Judges 11:29-40' },
    { word: 'SAMSON', clue: 'The judge with supernatural strength', reference: 'Judges 13-16' },
    { word: 'BARAK', clue: 'The commander who fought with Deborah', reference: 'Judges 4:6-16' },
    { word: 'TOLA', clue: 'The judge from Issachar', reference: 'Judges 10:1-2' },
    { word: 'JAIR', clue: 'The judge from Gilead', reference: 'Judges 10:3-5' },
  ],
  patriarchs: [
    { word: 'ABRAHAM', clue: 'The father of many nations', reference: 'Genesis 17:5' },
    { word: 'ISAAC', clue: 'The son of promise, almost sacrificed', reference: 'Genesis 22:1-19' },
    { word: 'JACOB', clue: 'The man who wrestled with God', reference: 'Genesis 32:22-32' },
    { word: 'JOSEPH', clue: 'The man with a coat of many colors', reference: 'Genesis 37:3' },
    { word: 'MOSES', clue: 'The lawgiver who saw the burning bush', reference: 'Exodus 3:1-6' },
    { word: 'AARON', clue: 'The brother of Moses and first high priest', reference: 'Exodus 4:14' },
    { word: 'JOSHUA', clue: 'The leader who conquered Jericho', reference: 'Joshua 6:1-20' },
    { word: 'CALEB', clue: 'The spy who trusted God', reference: 'Numbers 13:30' },
    { word: 'ELIJAH', clue: 'The prophet taken to heaven in a whirlwind', reference: '2 Kings 2:11' },
    { word: 'ELISHA', clue: 'The prophet who performed many miracles', reference: '2 Kings 4:1-37' },
  ],
  verses: [
    { word: 'LOVE', clue: '"God is ____" (1 John 4:8)', reference: '1 John 4:8' },
    { word: 'GRACE', clue: '"For by ____ you have been saved through faith"', reference: 'Ephesians 2:8' },
    { word: 'FAITH', clue: '"____ is the substance of things hoped for"', reference: 'Hebrews 11:1' },
    { word: 'HOPE', clue: '"We have this ____ as an anchor for the soul"', reference: 'Hebrews 6:19' },
    { word: 'PEACE', clue: '"The ____ of God, which surpasses all understanding"', reference: 'Philippians 4:7' },
    { word: 'JOY', clue: '"The ____ of the Lord is your strength"', reference: 'Nehemiah 8:10' },
    { word: 'MERCY', clue: '"His ____ endures forever"', reference: 'Psalm 136:1' },
    { word: 'TRUTH', clue: '"I am the way, the ____, and the life"', reference: 'John 14:6' },
    { word: 'LIGHT', clue: '"I am the ____ of the world"', reference: 'John 8:12' },
    { word: 'LIFE', clue: '"I have come that they may have ____"', reference: 'John 10:10' },
  ],
  mixed: [
    { word: 'SALVATION', clue: '"Today ____ has come to this house"', reference: 'Luke 19:9' },
    { word: 'REDEMPTION', clue: '"In him we have ____ through his blood"', reference: 'Ephesians 1:7' },
    { word: 'WORSHIP', clue: '"You shall ____ the Lord your God"', reference: 'Matthew 4:10' },
    { word: 'PRAYER', clue: '"Devote yourselves to ____"', reference: 'Colossians 4:2' },
    { word: 'PRAISE', clue: '"Let everything that has breath ____ the Lord"', reference: 'Psalm 150:6' },
    { word: 'GLORY', clue: '"The ____ of the Lord shall be revealed"', reference: 'Isaiah 40:5' },
    { word: 'KINGDOM', clue: '"Seek first the ____ of God"', reference: 'Matthew 6:33' },
    { word: 'COVENANT', clue: '"I will make a new ____ with the house of Israel"', reference: 'Jeremiah 31:31' },
    { word: 'PROPHECY', clue: '"Your sons and daughters shall ____"', reference: 'Acts 2:17' },
    { word: 'APOSTLE', clue: '"Paul, an ____ of Jesus Christ by the will of God"', reference: '2 Corinthians 1:1' },
  ],
  gospels: [
    { word: 'MATTHEW', clue: 'The Gospel written by a tax collector', reference: 'Matthew 9:9' },
    { word: 'MARK', clue: 'The shortest Gospel', reference: 'Mark 1:1' },
    { word: 'LUKE', clue: 'The Gospel written by a doctor', reference: 'Luke 1:1-4' },
    { word: 'JOHN', clue: 'The Gospel of the Word made flesh', reference: 'John 1:1' },
    { word: 'PARABLE', clue: 'A story Jesus told to teach a lesson', reference: 'Matthew 13:3' },
    { word: 'MIRACLE', clue: 'A supernatural act of Jesus', reference: 'John 2:11' },
    { word: 'CRUCIFIXION', clue: 'The way Jesus died', reference: 'Matthew 27:33-50' },
    { word: 'RESURRECTION', clue: 'The event where Jesus rose from the dead', reference: 'Matthew 28:5-7' },
    { word: 'ASCENSION', clue: 'Jesus being taken up to heaven', reference: 'Acts 1:9-11' },
    { word: 'PENTECOST', clue: 'The day the Holy Spirit descended', reference: 'Acts 2:1-4' },
  ],
  epistles: [
    { word: 'ROMANS', clue: 'The epistle about justification by faith', reference: 'Romans 3:23-24' },
    { word: 'CORINTHIANS', clue: 'The epistle about spiritual gifts', reference: '1 Corinthians 12:4-11' },
    { word: 'GALATIANS', clue: 'The epistle about freedom in Christ', reference: 'Galatians 5:1' },
    { word: 'EPHESIANS', clue: 'The epistle about the armor of God', reference: 'Ephesians 6:11' },
    { word: 'PHILIPPIANS', clue: 'The epistle of joy', reference: 'Philippians 4:4' },
    { word: 'COLOSSIANS', clue: 'The epistle about the supremacy of Christ', reference: 'Colossians 3:2' },
    { word: 'THESSALONIANS', clue: 'The epistle about the second coming', reference: '1 Thessalonians 4:16-17' },
    { word: 'TIMOTHY', clue: 'The pastoral epistle to a young leader', reference: '1 Timothy 4:12' },
    { word: 'TITUS', clue: 'The epistle about good works', reference: 'Titus 2:11-12' },
    { word: 'PHILEMON', clue: 'The epistle about forgiveness', reference: 'Philemon 1:15' },
  ],
};

// ================================================================
// GENERATE 150 PUZZLES (15 patterns × 10 themes)
// ================================================================

const themes = Object.keys(themeWords);
const puzzleConfigs: any[] = [];

let idCounter = 0;
for (let g = 0; g < gridPatterns.length; g++) {
  for (let t = 0; t < themes.length; t++) {
    const theme = themes[t];
    const pattern = gridPatterns[g];
    const words = themeWords[theme];
    const offset = (g * 3 + t * 2) % words.length;

    // Pick 4 across words (rows 0,2,4,6)
    const acrossWords = words.slice(offset, offset + 4);
    // Pick 4 down words (columns 2,4,6,8)
    const downWords = words.slice(offset + 4, offset + 8);

    const wordEntries: any[] = [];
    let num = 1;

    acrossWords.forEach((wd, i) => {
      wordEntries.push({
        number: num++,
        clue: wd.clue,
        answer: wd.word,
        row: i * 2,
        col: 0,
        direction: 'across',
        category: theme,
        reference: wd.reference,
      });
    });

    downWords.forEach((wd, i) => {
      wordEntries.push({
        number: num++,
        clue: wd.clue,
        answer: wd.word,
        row: 0,
        col: 2 + i * 2,
        direction: 'down',
        category: theme,
        reference: wd.reference,
      });
    });

    idCounter++;
    puzzleConfigs.push({
      id: `p${String(idCounter).padStart(3, '0')}`,
      title: `${theme.charAt(0).toUpperCase() + theme.slice(1)} Crossword ${idCounter}`,
      description: `Test your knowledge of ${theme}`,
      mode: 'classic',
      theme: theme,
      rows: pattern.rows,
      cols: pattern.cols,
      blackCells: pattern.blackCells,
      words: wordEntries,
    });
  }
}

// ================================================================
// BUILD ALL PUZZLES
// ================================================================

function buildPuzzle(config: any): CrosswordPuzzle {
  const grid = createGrid(config.rows, config.cols);
  const clues: CrosswordClue[] = [];
  const answers: string[] = [];

  config.words.forEach((w: any) => {
    placeWord(grid, w.answer, w.row, w.col, w.direction);
    answers.push(w.answer);
    clues.push({
      id: `${w.direction[0]}${w.number}`,
      number: w.number,
      clue: w.clue,
      answer: w.answer,
      row: w.row,
      col: w.col,
      direction: w.direction,
      length: w.answer.length,
      category: w.category,
      reference: w.reference,
    });
  });

  addBlackCells(grid, config.blackCells);

  return {
    id: config.id,
    title: config.title,
    description: config.description,
    grid,
    clues,
    answers,
    mode: 'classic',
    theme: config.theme,
    estimatedTime: `${Math.ceil(config.words.length / 2)}-${Math.ceil(config.words.length / 2) + 5} minutes`,
  };
}

export const crosswordPuzzles: CrosswordPuzzle[] = puzzleConfigs.map(cfg => buildPuzzle(cfg));

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getRandomCrossword = (): CrosswordPuzzle =>
  crosswordPuzzles[Math.floor(Math.random() * crosswordPuzzles.length)];

export const getCrosswordById = (id: string): CrosswordPuzzle | undefined =>
  crosswordPuzzles.find(p => p.id === id);

export const getCrosswordsByMode = (mode: CrosswordPuzzle['mode']): CrosswordPuzzle[] =>
  crosswordPuzzles.filter(p => p.mode === mode);

export const getCrosswordsByTheme = (theme: string): CrosswordPuzzle[] =>
  crosswordPuzzles.filter(p => p.theme === theme);

export const getCrosswordsByCategory = (category: string): CrosswordPuzzle[] =>
  crosswordPuzzles.filter(p => p.clues.some(c => c.category === category));

export const getAllModes = (): string[] => ['classic', 'verse', 'names', 'places', 'books', 'themes', 'mixed'];

export const getAllThemes = (): string[] => [...new Set(crosswordPuzzles.map(p => p.theme))];

export const getTotalPuzzles = (): number => crosswordPuzzles.length;

export const getPuzzleByIndex = (index: number): CrosswordPuzzle | undefined =>
  crosswordPuzzles[index];

export const getCrosswordStats = () => ({
  totalPuzzles: crosswordPuzzles.length,
  themes: getAllThemes(),
  totalClues: crosswordPuzzles.reduce((sum, p) => sum + p.clues.length, 0),
  avgCluesPerPuzzle: Math.round(crosswordPuzzles.reduce((sum, p) => sum + p.clues.length, 0) / crosswordPuzzles.length),
  modes: getAllModes().reduce((acc, mode) => {
    acc[mode] = crosswordPuzzles.filter(p => p.mode === mode).length;
    return acc;
  }, {} as Record<string, number>),
});

console.log(`✅ Loaded ${crosswordPuzzles.length} crossword puzzles`);
console.log(`📊 Themes: ${getAllThemes().join(', ')}`);
