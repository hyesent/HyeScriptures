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
// ENHANCED: 20 THEMES with 10 words each
// ================================================================

type WordData = {
  word: string;
  clue: string;
  reference: string;
};

const themeWords: Record<string, WordData[]> = {
  // === EXISTING THEMES ===
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

  // === NEW ENHANCED THEMES ===
  angels: [
    { word: 'GABRIEL', clue: 'The angel who appeared to Mary', reference: 'Luke 1:26-38' },
    { word: 'MICHAEL', clue: 'The archangel who fights against evil', reference: 'Jude 1:9' },
    { word: 'RAPHAEL', clue: 'The angel in the book of Tobit', reference: 'Tobit 12:15' },
    { word: 'CHERUBIM', clue: 'Angels who guard the Garden of Eden', reference: 'Genesis 3:24' },
    { word: 'SERAPHIM', clue: 'Angels with six wings who praise God', reference: 'Isaiah 6:2' },
    { word: 'LUCIFER', clue: 'The fallen angel who was cast out of heaven', reference: 'Isaiah 14:12' },
    { word: 'URIEL', clue: 'The angel who warned Noah of the flood', reference: '1 Enoch 10:1' },
    { word: 'RAGUEL', clue: 'The angel who watches over the earth', reference: '1 Enoch 20:4' },
    { word: 'SARIEL', clue: 'The angel who leads souls to judgment', reference: '1 Enoch 20:6' },
    { word: 'REMOVED', clue: 'The angel who speaks to Ezra', reference: '2 Esdras 10:28' },
  ],
  miracles: [
    { word: 'MANNA', clue: 'Bread from heaven given to Israel', reference: 'Exodus 16:14-15' },
    { word: 'QUAIL', clue: 'Birds that fed Israel in the wilderness', reference: 'Numbers 11:31' },
    { word: 'WATER', clue: 'Moses struck a rock and this came out', reference: 'Exodus 17:1-7' },
    { word: 'JERICHO', clue: 'The city whose walls fell down', reference: 'Joshua 6:1-20' },
    { word: 'SUN', clue: 'Stood still for Joshua at Gibeon', reference: 'Joshua 10:12-14' },
    { word: 'SHADRAK', clue: 'Survived the fiery furnace', reference: 'Daniel 3:1-30' },
    { word: 'MESHACH', clue: 'Survived the fiery furnace', reference: 'Daniel 3:1-30' },
    { word: 'ABEDNEGO', clue: 'Survived the fiery furnace', reference: 'Daniel 3:1-30' },
    { word: 'LEVIATHAN', clue: 'The sea monster God created', reference: 'Job 41:1-34' },
    { word: 'BEHEMOTH', clue: 'The land monster God created', reference: 'Job 40:15-24' },
  ],
  parables: [
    { word: 'SOWER', clue: 'A farmer who scattered seeds', reference: 'Matthew 13:1-9' },
    { word: 'MUSTARD', clue: 'The smallest seed that grows into a large tree', reference: 'Matthew 13:31-32' },
    { word: 'PEARL', clue: 'A valuable treasure found in a field', reference: 'Matthew 13:45-46' },
    { word: 'NET', clue: 'A fishermen\'s net that caught all kinds of fish', reference: 'Matthew 13:47-50' },
    { word: 'PRODIGAL', clue: 'A son who wasted his inheritance', reference: 'Luke 15:11-32' },
    { word: 'PHARISEE', clue: 'A proud man who prayed in the temple', reference: 'Luke 18:9-14' },
    { word: 'TAX', clue: 'A humble collector who asked for mercy', reference: 'Luke 18:9-14' },
    { word: 'GOOD', clue: 'A Samaritan who helped a wounded man', reference: 'Luke 10:25-37' },
    { word: 'WATCHMAN', clue: 'A servant who waited for his master\'s return', reference: 'Mark 13:34-37' },
    { word: 'BRIDESMAIDS', clue: 'Ten virgins who waited for the bridegroom', reference: 'Matthew 25:1-13' },
  ],
  commands: [
    { word: 'LOVE', clue: 'Love the Lord your God with all your heart', reference: 'Deuteronomy 6:5' },
    { word: 'HONOR', clue: 'Honor your father and your mother', reference: 'Exodus 20:12' },
    { word: 'REMEMBER', clue: 'Remember the Sabbath day, to keep it holy', reference: 'Exodus 20:8' },
    { word: 'WORSHIP', clue: 'You shall have no other gods before Me', reference: 'Exodus 20:3' },
    { word: 'REJOICE', clue: 'Rejoice in the Lord always', reference: 'Philippians 4:4' },
    { word: 'PRAY', clue: 'Pray without ceasing', reference: '1 Thessalonians 5:17' },
    { word: 'GIVE', clue: 'Give thanks to the Lord, for He is good', reference: 'Psalm 107:1' },
    { word: 'FEAR', clue: 'Fear the Lord your God, serve Him only', reference: 'Deuteronomy 6:13' },
    { word: 'OBEY', clue: 'Obey your leaders and submit to their authority', reference: 'Hebrews 13:17' },
    { word: 'FORGIVE', clue: 'Forgive as the Lord forgave you', reference: 'Colossians 3:13' },
  ],
};

// ================================================================
// ENHANCED: SMART CROSSWORD GENERATOR
// ================================================================

// Helper to create an empty grid
const createEmptyGrid = (rows: number, cols: number): string[][] =>
  Array.from({ length: rows }, () => Array(cols).fill(''));

// Check if a word can be placed at a position
const canPlaceWord = (
  grid: string[][],
  word: string,
  row: number,
  col: number,
  direction: 'across' | 'down'
): boolean => {
  const wordLength = word.length;
  const gridRows = grid.length;
  const gridCols = grid[0]?.length || 15;

  // Check bounds
  if (direction === 'across' && col + wordLength > gridCols) return false;
  if (direction === 'down' && row + wordLength > gridRows) return false;

  // Check each cell
  for (let i = 0; i < wordLength; i++) {
    const r = direction === 'down' ? row + i : row;
    const c = direction === 'across' ? col + i : col;
    const cell = grid[r][c];
    // Cell must be empty OR match the letter we're placing
    if (cell !== '' && cell !== word[i]) return false;
  }

  return true;
};

// Place a word on the grid
const placeWordOnGrid = (
  grid: string[][],
  word: string,
  row: number,
  col: number,
  direction: 'across' | 'down'
): void => {
  for (let i = 0; i < word.length; i++) {
    const r = direction === 'down' ? row + i : row;
    const c = direction === 'across' ? col + i : col;
    grid[r][c] = word[i];
  }
};

// Generate black cells in empty areas (not blocking words)
const generateBlackCells = (grid: string[][], density: number = 0.15): void => {
  const rows = grid.length;
  const cols = grid[0]?.length || 15;
  const totalCells = rows * cols;
  const targetBlack = Math.floor(totalCells * density);

  let blackCount = 0;
  let attempts = 0;
  const maxAttempts = totalCells * 2;

  while (blackCount < targetBlack && attempts < maxAttempts) {
    attempts++;
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);

    if (grid[row][col] === '') {
      grid[row][col] = '■';
      blackCount++;
    }
  }

  // Fill any remaining empty cells with black
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = '■';
      }
    }
  }
};

// ================================================================
// BUILD A CROSSWORD PUZZLE
// ================================================================

function buildCrosswordPuzzle(
  theme: string,
  wordData: WordData[],
  puzzleId: string,
  puzzleIndex: number
): CrosswordPuzzle {
  const GRID_SIZE = 15;
  const grid = createEmptyGrid(GRID_SIZE, GRID_SIZE);
  const clues: CrosswordClue[] = [];
  const answers: string[] = [];

  // Take 8 words from the theme (4 across, 4 down)
  const shuffled = [...wordData];
  const selectedWords = shuffled.slice(0, 8);
  const acrossWords = selectedWords.slice(0, 4);
  const downWords = selectedWords.slice(4, 8);

  let clueNumber = 1;

  // --- Place Across Words ---
  acrossWords.forEach((wd, index) => {
    const row = Math.min(index * 2 + 1, GRID_SIZE - 1);
    const col = 1;
    const word = wd.word;

    // Try to find a valid position
    let placed = false;
    for (let tryRow = row; tryRow < GRID_SIZE && !placed; tryRow++) {
      for (let tryCol = 0; tryCol < GRID_SIZE - word.length + 1 && !placed; tryCol++) {
        if (canPlaceWord(grid, word, tryRow, tryCol, 'across')) {
          placeWordOnGrid(grid, word, tryRow, tryCol, 'across');

          clues.push({
            id: `a${clueNumber}`,
            number: clueNumber,
            clue: wd.clue,
            answer: word,
            row: tryRow,
            col: tryCol,
            direction: 'across',
            length: word.length,
            category: theme,
            reference: wd.reference,
          });
          answers.push(word);
          clueNumber++;
          placed = true;
          break;
        }
      }
    }

    // If couldn't place, try a different approach
    if (!placed) {
      // Place at the top with some offset
      const fallbackRow = index * 2;
      const fallbackCol = index * 2 + 1;
      if (canPlaceWord(grid, word, fallbackRow, fallbackCol, 'across')) {
        placeWordOnGrid(grid, word, fallbackRow, fallbackCol, 'across');
        clues.push({
          id: `a${clueNumber}`,
          number: clueNumber,
          clue: wd.clue,
          answer: word,
          row: fallbackRow,
          col: fallbackCol,
          direction: 'across',
          length: word.length,
          category: theme,
          reference: wd.reference,
        });
        answers.push(word);
        clueNumber++;
      }
    }
  });

  // --- Place Down Words ---
  downWords.forEach((wd, index) => {
    const word = wd.word;
    let placed = false;

    // Try to place at a position that intersects with an across word
    for (let attempt = 0; attempt < 20 && !placed; attempt++) {
      const tryRow = Math.floor(Math.random() * (GRID_SIZE - word.length + 1));
      const tryCol = Math.floor(Math.random() * GRID_SIZE);

      if (canPlaceWord(grid, word, tryRow, tryCol, 'down')) {
        // Check if it intersects with at least one letter (good crossword design)
        let hasIntersection = false;
        for (let i = 0; i < word.length; i++) {
          const r = tryRow + i;
          const c = tryCol;
          if (grid[r]?.[c] && grid[r][c] !== '■') {
            hasIntersection = true;
            break;
          }
        }

        // If it has an intersection or it's the first word, place it
        if (hasIntersection || clues.length < 4) {
          placeWordOnGrid(grid, word, tryRow, tryCol, 'down');
          clues.push({
            id: `d${clueNumber}`,
            number: clueNumber,
            clue: wd.clue,
            answer: word,
            row: tryRow,
            col: tryCol,
            direction: 'down',
            length: word.length,
            category: theme,
            reference: wd.reference,
          });
          answers.push(word);
          clueNumber++;
          placed = true;
        }
      }
    }

    // Fallback: place without intersection requirement
    if (!placed) {
      for (let tryRow = 0; tryRow < GRID_SIZE - word.length + 1 && !placed; tryRow++) {
        for (let tryCol = 0; tryCol < GRID_SIZE && !placed; tryCol++) {
          if (canPlaceWord(grid, word, tryRow, tryCol, 'down')) {
            placeWordOnGrid(grid, word, tryRow, tryCol, 'down');
            clues.push({
              id: `d${clueNumber}`,
              number: clueNumber,
              clue: wd.clue,
              answer: word,
              row: tryRow,
              col: tryCol,
              direction: 'down',
              length: word.length,
              category: theme,
              reference: wd.reference,
            });
            answers.push(word);
            clueNumber++;
            placed = true;
          }
        }
      }
    }
  });

  // Generate black cells in empty spaces
  generateBlackCells(grid, 0.12);

  // Sort clues by number
  clues.sort((a, b) => a.number - b.number);

  return {
    id: puzzleId,
    title: `${theme.charAt(0).toUpperCase() + theme.slice(1)} Crossword`,
    description: `Test your knowledge of ${theme} in the Bible`,
    grid,
    clues,
    answers,
    mode: 'classic',
    theme,
    estimatedTime: `${Math.ceil(clues.length / 2)}-${Math.ceil(clues.length / 2) + 3} minutes`,
  };
}

// ================================================================
// GENERATE ALL PUZZLES
// ================================================================

const allThemes = Object.keys(themeWords);
const crosswordPuzzles: CrosswordPuzzle[] = [];

allThemes.forEach((theme, themeIndex) => {
  const words = themeWords[theme];

  // Generate 2 puzzles per theme with different word selections
  for (let p = 0; p < 2; p++) {
    // Rotate the word list for variety
    const rotated = [...words];
    const shift = p * 3 + themeIndex * 2;
    const rotatedWords = [
      ...rotated.slice(shift % rotated.length),
      ...rotated.slice(0, shift % rotated.length),
    ];

    const puzzleId = `p${String(themeIndex * 2 + p + 1).padStart(3, '0')}`;
    const puzzle = buildCrosswordPuzzle(theme, rotatedWords, puzzleId, p);
    crosswordPuzzles.push(puzzle);
  }
});

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

// ================================================================
// DEBUG LOGGING - Shows all clues are properly created
// ================================================================

console.log(`✅ Loaded ${crosswordPuzzles.length} crossword puzzles`);
console.log(`📊 Themes: ${getAllThemes().join(', ')}`);

// Log sample puzzle to verify clues
if (crosswordPuzzles.length > 0) {
  const sample = crosswordPuzzles[0];
  console.log(`\n📝 SAMPLE PUZZLE: ${sample.title}`);
  console.log(`   Total clues: ${sample.clues.length}`);
  console.log(`\n   ACROSS CLUES:`);
  sample.clues
    .filter(c => c.direction === 'across')
    .forEach(c => {
      console.log(`     ${c.number}. ${c.clue} (${c.answer})`);
    });
  console.log(`\n   DOWN CLUES:`);
  sample.clues
    .filter(c => c.direction === 'down')
    .forEach(c => {
      console.log(`     ${c.number}. ${c.clue} (${c.answer})`);
    });
  console.log(`\n   Grid size: ${sample.grid.length}x${sample.grid[0]?.length || 0}`);
}
