// src/data/games/book-order.ts

export interface BookOrderGame {
  testament: 'old' | 'new';
  books: string[];
  shuffled: string[];
  categories?: Record<string, string[]>;
}

export interface BookCategory {
  name: string;
  books: string[];
  description?: string;
}

// ================================================================
// OLD TESTAMENT BOOKS
// ================================================================

export const oldTestamentBooks = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
  'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms',
  'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah',
  'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea',
  'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum',
  'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'
];

// ================================================================
// NEW TESTAMENT BOOKS
// ================================================================

export const newTestamentBooks = [
  'Matthew', 'Mark', 'Luke', 'John', 'Acts',
  'Romans', '1 Corinthians', '2 Corinthians', 'Galatians',
  'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians',
  '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus',
  'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter',
  '1 John', '2 John', '3 John', 'Jude', 'Revelation'
];

// ================================================================
// BOOK CATEGORIES
// ================================================================

export const oldTestamentCategories: BookCategory[] = [
  {
    name: 'Law',
    description: 'The first five books, also known as the Torah or Pentateuch',
    books: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy']
  },
  {
    name: 'History',
    description: 'The historical books of Israel',
    books: ['Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', 
            '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther']
  },
  {
    name: 'Wisdom & Poetry',
    description: 'Books of wisdom literature and poetry',
    books: ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon']
  },
  {
    name: 'Major Prophets',
    description: 'The longer prophetic books',
    books: ['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel']
  },
  {
    name: 'Minor Prophets',
    description: 'The shorter prophetic books',
    books: ['Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum',
            'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi']
  }
];

export const newTestamentCategories: BookCategory[] = [
  {
    name: 'Gospels',
    description: 'The four accounts of Jesus\' life and ministry',
    books: ['Matthew', 'Mark', 'Luke', 'John']
  },
  {
    name: 'History',
    description: 'The early history of the church',
    books: ['Acts']
  },
  {
    name: 'Pauline Epistles',
    description: 'Letters written by the Apostle Paul',
    books: ['Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 
            'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', 
            '1 Timothy', '2 Timothy', 'Titus', 'Philemon']
  },
  {
    name: 'General Epistles',
    description: 'Letters written by various apostles',
    books: ['Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude']
  },
  {
    name: 'Prophecy',
    description: 'The apocalyptic book of Revelation',
    books: ['Revelation']
  }
];

// ================================================================
// BOOK FACTS & TRIVIA
// ================================================================

export interface BookFact {
  book: string;
  author?: string;
  yearWritten?: string;
  keyVerse?: string;
  theme?: string;
  chapters?: number;
  verses?: number;
}

export const bookFacts: Record<string, BookFact> = {
  // Old Testament
  'Genesis': {
    author: 'Moses',
    yearWritten: '1445-1405 BC',
    keyVerse: 'Genesis 1:1',
    theme: 'Beginnings',
    chapters: 50,
    verses: 1533
  },
  'Exodus': {
    author: 'Moses',
    yearWritten: '1445-1405 BC',
    keyVerse: 'Exodus 20:2-3',
    theme: 'Redemption',
    chapters: 40,
    verses: 1213
  },
  'Leviticus': {
    author: 'Moses',
    yearWritten: '1445-1405 BC',
    keyVerse: 'Leviticus 19:2',
    theme: 'Holiness',
    chapters: 27,
    verses: 859
  },
  'Numbers': {
    author: 'Moses',
    yearWritten: '1445-1405 BC',
    keyVerse: 'Numbers 6:24-26',
    theme: 'Wandering',
    chapters: 36,
    verses: 1288
  },
  'Deuteronomy': {
    author: 'Moses',
    yearWritten: '1405 BC',
    keyVerse: 'Deuteronomy 6:4-5',
    theme: 'Renewal of the Covenant',
    chapters: 34,
    verses: 959
  },
  'Joshua': {
    author: 'Joshua',
    yearWritten: '1400-1370 BC',
    keyVerse: 'Joshua 1:9',
    theme: 'Conquest of Canaan',
    chapters: 24,
    verses: 658
  },
  'Judges': {
    author: 'Unknown',
    yearWritten: '1050-1000 BC',
    keyVerse: 'Judges 21:25',
    theme: 'Cycle of Sin and Deliverance',
    chapters: 21,
    verses: 618
  },
  'Ruth': {
    author: 'Unknown',
    yearWritten: '1100-1000 BC',
    keyVerse: 'Ruth 1:16-17',
    theme: 'Loyalty and Redemption',
    chapters: 4,
    verses: 85
  },
  '1 Samuel': {
    author: 'Unknown',
    yearWritten: '930-720 BC',
    keyVerse: '1 Samuel 16:7',
    theme: 'Rise of the Monarchy',
    chapters: 31,
    verses: 810
  },
  '2 Samuel': {
    author: 'Unknown',
    yearWritten: '930-720 BC',
    keyVerse: '2 Samuel 7:16',
    theme: 'David\'s Reign',
    chapters: 24,
    verses: 695
  },
  '1 Kings': {
    author: 'Unknown',
    yearWritten: '560-540 BC',
    keyVerse: '1 Kings 8:61',
    theme: 'Divided Kingdom',
    chapters: 22,
    verses: 816
  },
  '2 Kings': {
    author: 'Unknown',
    yearWritten: '560-540 BC',
    keyVerse: '2 Kings 17:23',
    theme: 'Fall of Israel and Judah',
    chapters: 25,
    verses: 719
  },
  '1 Chronicles': {
    author: 'Ezra',
    yearWritten: '450-425 BC',
    keyVerse: '1 Chronicles 16:31',
    theme: 'David\'s Lineage',
    chapters: 29,
    verses: 942
  },
  '2 Chronicles': {
    author: 'Ezra',
    yearWritten: '450-425 BC',
    keyVerse: '2 Chronicles 7:14',
    theme: 'Temple Worship',
    chapters: 36,
    verses: 822
  },
  'Ezra': {
    author: 'Ezra',
    yearWritten: '450-425 BC',
    keyVerse: 'Ezra 7:10',
    theme: 'Return from Exile',
    chapters: 10,
    verses: 280
  },
  'Nehemiah': {
    author: 'Nehemiah',
    yearWritten: '445-425 BC',
    keyVerse: 'Nehemiah 8:10',
    theme: 'Rebuilding Jerusalem',
    chapters: 13,
    verses: 406
  },
  'Esther': {
    author: 'Unknown',
    yearWritten: '470-450 BC',
    keyVerse: 'Esther 4:14',
    theme: 'Divine Providence',
    chapters: 10,
    verses: 167
  },
  'Job': {
    author: 'Unknown',
    yearWritten: '2000-1800 BC',
    keyVerse: 'Job 19:25',
    theme: 'Suffering and Faith',
    chapters: 42,
    verses: 1070
  },
  'Psalms': {
    author: 'Various (mainly David)',
    yearWritten: '1440-586 BC',
    keyVerse: 'Psalm 23:1',
    theme: 'Worship and Praise',
    chapters: 150,
    verses: 2461
  },
  'Proverbs': {
    author: 'Solomon',
    yearWritten: '950-700 BC',
    keyVerse: 'Proverbs 1:7',
    theme: 'Wisdom',
    chapters: 31,
    verses: 915
  },
  'Ecclesiastes': {
    author: 'Solomon',
    yearWritten: '935 BC',
    keyVerse: 'Ecclesiastes 12:13',
    theme: 'Meaning of Life',
    chapters: 12,
    verses: 222
  },
  'Song of Solomon': {
    author: 'Solomon',
    yearWritten: '960-931 BC',
    keyVerse: 'Song 8:7',
    theme: 'Love and Marriage',
    chapters: 8,
    verses: 117
  },
  'Isaiah': {
    author: 'Isaiah',
    yearWritten: '740-681 BC',
    keyVerse: 'Isaiah 53:5-6',
    theme: 'Salvation',
    chapters: 66,
    verses: 1292
  },
  'Jeremiah': {
    author: 'Jeremiah',
    yearWritten: '627-586 BC',
    keyVerse: 'Jeremiah 29:11',
    theme: 'Judgment and Hope',
    chapters: 52,
    verses: 1364
  },
  'Lamentations': {
    author: 'Jeremiah',
    yearWritten: '586 BC',
    keyVerse: 'Lamentations 3:22-23',
    theme: 'Sorrow and Hope',
    chapters: 5,
    verses: 154
  },
  'Ezekiel': {
    author: 'Ezekiel',
    yearWritten: '593-571 BC',
    keyVerse: 'Ezekiel 36:26',
    theme: 'Restoration',
    chapters: 48,
    verses: 1273
  },
  'Daniel': {
    author: 'Daniel',
    yearWritten: '605-536 BC',
    keyVerse: 'Daniel 2:21',
    theme: 'God\'s Sovereignty',
    chapters: 12,
    verses: 357
  },
  'Hosea': {
    author: 'Hosea',
    yearWritten: '760-720 BC',
    keyVerse: 'Hosea 6:6',
    theme: 'Unfaithfulness and Love',
    chapters: 14,
    verses: 197
  },
  'Joel': {
    author: 'Joel',
    yearWritten: '835-795 BC',
    keyVerse: 'Joel 2:28-29',
    theme: 'Day of the Lord',
    chapters: 3,
    verses: 73
  },
  'Amos': {
    author: 'Amos',
    yearWritten: '760-750 BC',
    keyVerse: 'Amos 5:24',
    theme: 'Social Justice',
    chapters: 9,
    verses: 146
  },
  'Obadiah': {
    author: 'Obadiah',
    yearWritten: '848-841 BC',
    keyVerse: 'Obadiah 1:15',
    theme: 'Judgment on Edom',
    chapters: 1,
    verses: 21
  },
  'Jonah': {
    author: 'Jonah',
    yearWritten: '793-753 BC',
    keyVerse: 'Jonah 2:9',
    theme: 'God\'s Mercy',
    chapters: 4,
    verses: 48
  },
  'Micah': {
    author: 'Micah',
    yearWritten: '740-700 BC',
    keyVerse: 'Micah 6:8',
    theme: 'Justice and Mercy',
    chapters: 7,
    verses: 105
  },
  'Nahum': {
    author: 'Nahum',
    yearWritten: '663-654 BC',
    keyVerse: 'Nahum 1:7',
    theme: 'Judgment on Nineveh',
    chapters: 3,
    verses: 47
  },
  'Habakkuk': {
    author: 'Habakkuk',
    yearWritten: '605-597 BC',
    keyVerse: 'Habakkuk 2:4',
    theme: 'Living by Faith',
    chapters: 3,
    verses: 56
  },
  'Zephaniah': {
    author: 'Zephaniah',
    yearWritten: '640-621 BC',
    keyVerse: 'Zephaniah 3:17',
    theme: 'Day of Judgment',
    chapters: 3,
    verses: 53
  },
  'Haggai': {
    author: 'Haggai',
    yearWritten: '520 BC',
    keyVerse: 'Haggai 2:9',
    theme: 'Rebuilding the Temple',
    chapters: 2,
    verses: 38
  },
  'Zechariah': {
    author: 'Zechariah',
    yearWritten: '520-518 BC',
    keyVerse: 'Zechariah 4:6',
    theme: 'Messianic Prophecy',
    chapters: 14,
    verses: 211
  },
  'Malachi': {
    author: 'Malachi',
    yearWritten: '435-425 BC',
    keyVerse: 'Malachi 3:10',
    theme: 'Covenant Faithfulness',
    chapters: 4,
    verses: 55
  },

  // New Testament
  'Matthew': {
    author: 'Matthew',
    yearWritten: '60-65 AD',
    keyVerse: 'Matthew 28:19-20',
    theme: 'Jesus as King',
    chapters: 28,
    verses: 1071
  },
  'Mark': {
    author: 'John Mark',
    yearWritten: '55-65 AD',
    keyVerse: 'Mark 10:45',
    theme: 'Jesus as Servant',
    chapters: 16,
    verses: 678
  },
  'Luke': {
    author: 'Luke',
    yearWritten: '60-62 AD',
    keyVerse: 'Luke 19:10',
    theme: 'Jesus as Man',
    chapters: 24,
    verses: 1151
  },
  'John': {
    author: 'John',
    yearWritten: '85-95 AD',
    keyVerse: 'John 3:16',
    theme: 'Jesus as God',
    chapters: 21,
    verses: 879
  },
  'Acts': {
    author: 'Luke',
    yearWritten: '62-64 AD',
    keyVerse: 'Acts 1:8',
    theme: 'Birth of the Church',
    chapters: 28,
    verses: 1007
  },
  'Romans': {
    author: 'Paul',
    yearWritten: '56 AD',
    keyVerse: 'Romans 3:23-24',
    theme: 'Justification by Faith',
    chapters: 16,
    verses: 433
  },
  '1 Corinthians': {
    author: 'Paul',
    yearWritten: '55 AD',
    keyVerse: '1 Corinthians 13:13',
    theme: 'Church Problems and Solutions',
    chapters: 16,
    verses: 437
  },
  '2 Corinthians': {
    author: 'Paul',
    yearWritten: '55-56 AD',
    keyVerse: '2 Corinthians 5:17',
    theme: 'Apostolic Ministry',
    chapters: 13,
    verses: 256
  },
  'Galatians': {
    author: 'Paul',
    yearWritten: '49 AD',
    keyVerse: 'Galatians 2:20',
    theme: 'Freedom in Christ',
    chapters: 6,
    verses: 149
  },
  'Ephesians': {
    author: 'Paul',
    yearWritten: '60-62 AD',
    keyVerse: 'Ephesians 2:8-9',
    theme: 'The Church',
    chapters: 6,
    verses: 155
  },
  'Philippians': {
    author: 'Paul',
    yearWritten: '60-62 AD',
    keyVerse: 'Philippians 4:13',
    theme: 'Joy in Christ',
    chapters: 4,
    verses: 104
  },
  'Colossians': {
    author: 'Paul',
    yearWritten: '60-62 AD',
    keyVerse: 'Colossians 3:2',
    theme: 'Supremacy of Christ',
    chapters: 4,
    verses: 95
  },
  '1 Thessalonians': {
    author: 'Paul',
    yearWritten: '51 AD',
    keyVerse: '1 Thessalonians 4:16-17',
    theme: 'Second Coming',
    chapters: 5,
    verses: 89
  },
  '2 Thessalonians': {
    author: 'Paul',
    yearWritten: '51-52 AD',
    keyVerse: '2 Thessalonians 3:13',
    theme: 'Perseverance',
    chapters: 3,
    verses: 47
  },
  '1 Timothy': {
    author: 'Paul',
    yearWritten: '63-66 AD',
    keyVerse: '1 Timothy 4:12',
    theme: 'Church Leadership',
    chapters: 6,
    verses: 113
  },
  '2 Timothy': {
    author: 'Paul',
    yearWritten: '66-67 AD',
    keyVerse: '2 Timothy 4:7-8',
    theme: 'Faithfulness',
    chapters: 4,
    verses: 83
  },
  'Titus': {
    author: 'Paul',
    yearWritten: '63-66 AD',
    keyVerse: 'Titus 2:11-12',
    theme: 'Good Works',
    chapters: 3,
    verses: 46
  },
  'Philemon': {
    author: 'Paul',
    yearWritten: '60-62 AD',
    keyVerse: 'Philemon 1:6',
    theme: 'Forgiveness',
    chapters: 1,
    verses: 25
  },
  'Hebrews': {
    author: 'Unknown',
    yearWritten: '64-68 AD',
    keyVerse: 'Hebrews 11:1',
    theme: 'Superiority of Christ',
    chapters: 13,
    verses: 303
  },
  'James': {
    author: 'James',
    yearWritten: '44-49 AD',
    keyVerse: 'James 2:26',
    theme: 'Faith in Action',
    chapters: 5,
    verses: 108
  },
  '1 Peter': {
    author: 'Peter',
    yearWritten: '63-64 AD',
    keyVerse: '1 Peter 5:7',
    theme: 'Suffering and Hope',
    chapters: 5,
    verses: 105
  },
  '2 Peter': {
    author: 'Peter',
    yearWritten: '65-68 AD',
    keyVerse: '2 Peter 3:9',
    theme: 'Spiritual Growth',
    chapters: 3,
    verses: 61
  },
  '1 John': {
    author: 'John',
    yearWritten: '90 AD',
    keyVerse: '1 John 4:8',
    theme: 'Love and Fellowship',
    chapters: 5,
    verses: 105
  },
  '2 John': {
    author: 'John',
    yearWritten: '90 AD',
    keyVerse: '2 John 1:6',
    theme: 'Truth and Love',
    chapters: 1,
    verses: 13
  },
  '3 John': {
    author: 'John',
    yearWritten: '90 AD',
    keyVerse: '3 John 1:4',
    theme: 'Hospitality',
    chapters: 1,
    verses: 14
  },
  'Jude': {
    author: 'Jude',
    yearWritten: '65-80 AD',
    keyVerse: 'Jude 1:24-25',
    theme: 'Contending for the Faith',
    chapters: 1,
    verses: 25
  },
  'Revelation': {
    author: 'John',
    yearWritten: '95 AD',
    keyVerse: 'Revelation 1:8',
    theme: 'The End Times',
    chapters: 22,
    verses: 404
  }
};

// ================================================================
// BOOK PAIRS FOR MEMORY GAME
// ================================================================

export interface BookPair {
  pairId: string;
  book1: string;
  book2: string;
  category?: string;
}

export const getBookPairs = (testament: 'old' | 'new'): BookPair[] => {
  const books = testament === 'old' ? oldTestamentBooks : newTestamentBooks;
  const pairs: BookPair[] = [];
  
  // Create pairs of books with similar themes or categories
  for (let i = 0; i < books.length - 1; i += 2) {
    pairs.push({
      pairId: `pair-${i}`,
      book1: books[i],
      book2: books[i + 1],
      category: 'mixed'
    });
  }
  
  return pairs;
};

// ================================================================
// CORE GAME FUNCTIONS
// ================================================================

export interface BookOrderGame {
  testament: 'old' | 'new';
  books: string[];
  shuffled: string[];
}

export const getBookOrderGame = (testament: 'old' | 'new'): BookOrderGame => {
  const books = testament === 'old' ? oldTestamentBooks : newTestamentBooks;
  const shuffled = [...books].sort(() => Math.random() - 0.5);
  return { testament, books, shuffled };
};

export const getTestaments = () => [
  { value: 'old' as const, label: 'Old Testament', count: oldTestamentBooks.length },
  { value: 'new' as const, label: 'New Testament', count: newTestamentBooks.length }
];

// ================================================================
// CATEGORY FUNCTIONS
// ================================================================

export const getCategories = (testament: 'old' | 'new'): BookCategory[] => {
  return testament === 'old' ? oldTestamentCategories : newTestamentCategories;
};

export const getCategoryForBook = (book: string, testament: 'old' | 'new'): string | undefined => {
  const categories = getCategories(testament);
  for (const category of categories) {
    if (category.books.includes(book)) {
      return category.name;
    }
  }
  return undefined;
};

export const getBooksInCategory = (categoryName: string, testament: 'old' | 'new'): string[] => {
  const categories = getCategories(testament);
  const category = categories.find(c => c.name === categoryName);
  return category ? category.books : [];
};

// ================================================================
// BOOK FACT FUNCTIONS
// ================================================================

export const getBookFact = (book: string): BookFact | undefined => {
  return bookFacts[book];
};

export const getBookKeyVerse = (book: string): string | undefined => {
  return bookFacts[book]?.keyVerse;
};

export const getBookTheme = (book: string): string | undefined => {
  return bookFacts[book]?.theme;
};

export const getBookAuthor = (book: string): string | undefined => {
  return bookFacts[book]?.author;
};

// ================================================================
// STATISTICS FUNCTIONS
// ================================================================

export const getBookOrderStats = () => ({
  totalOldTestament: oldTestamentBooks.length,
  totalNewTestament: newTestamentBooks.length,
  totalBooks: oldTestamentBooks.length + newTestamentBooks.length,
  oldTestamentCategories: oldTestamentCategories.length,
  newTestamentCategories: newTestamentCategories.length,
  totalCategories: oldTestamentCategories.length + newTestamentCategories.length
});

// ================================================================
// SEARCH & UTILITY FUNCTIONS
// ================================================================

export const searchBooks = (query: string, testament?: 'old' | 'new'): string[] => {
  const books = testament === 'old' ? oldTestamentBooks : 
                testament === 'new' ? newTestamentBooks : 
                [...oldTestamentBooks, ...newTestamentBooks];
  
  const lowerQuery = query.toLowerCase();
  return books.filter(book => book.toLowerCase().includes(lowerQuery));
};

export const getBookIndex = (book: string, testament: 'old' | 'new'): number => {
  const books = testament === 'old' ? oldTestamentBooks : newTestamentBooks;
  return books.indexOf(book);
};

export const isBookInTestament = (book: string, testament: 'old' | 'new'): boolean => {
  const books = testament === 'old' ? oldTestamentBooks : newTestamentBooks;
  return books.includes(book);
};

export const getRandomBooks = (count: number = 5, testament?: 'old' | 'new'): string[] => {
  const books = testament === 'old' ? oldTestamentBooks : 
                testament === 'new' ? newTestamentBooks : 
                [...oldTestamentBooks, ...newTestamentBooks];
  
  const shuffled = [...books].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};