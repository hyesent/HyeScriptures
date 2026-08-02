// src/data/games/hangman.ts

export interface HangmanWord {
  word: string;
  category: string;
  hint: string;
  difficulty: 'easy' | 'medium' | 'hard';
  subCategory?: string;
  reference?: string;
  letterCount?: number;
}

export const hangmanWords: HangmanWord[] = [
  // ================================================================
  // SECTION 1: BIBLE CHARACTERS (60+ words)
  // ================================================================

  // ---------- Easy Characters ----------
  {
    word: 'NOAH',
    category: 'Bible Characters',
    hint: 'Built an ark to save his family',
    difficulty: 'easy',
    subCategory: 'Patriarchs',
    reference: 'Genesis 6-9'
  },
  {
    word: 'MOSES',
    category: 'Bible Characters',
    hint: 'Led the Israelites out of Egypt',
    difficulty: 'easy',
    subCategory: 'Patriarchs',
    reference: 'Exodus 2-34'
  },
  {
    word: 'DAVID',
    category: 'Bible Characters',
    hint: 'Defeated Goliath with a sling',
    difficulty: 'easy',
    subCategory: 'Kings',
    reference: '1 Samuel 16-31'
  },
  {
    word: 'JESUS',
    category: 'Bible Characters',
    hint: 'The Son of God and Savior of the world',
    difficulty: 'easy',
    subCategory: 'New Testament',
    reference: 'The Gospels'
  },
  {
    word: 'PAUL',
    category: 'Bible Characters',
    hint: 'Wrote many epistles to the churches',
    difficulty: 'easy',
    subCategory: 'Apostles',
    reference: 'Acts 9-28'
  },
  {
    word: 'PETER',
    category: 'Bible Characters',
    hint: 'Denied Jesus three times, later became a leader',
    difficulty: 'easy',
    subCategory: 'Apostles',
    reference: 'Matthew 26:69-75'
  },
  {
    word: 'MARY',
    category: 'Bible Characters',
    hint: 'The mother of Jesus',
    difficulty: 'easy',
    subCategory: 'New Testament',
    reference: 'Luke 1:26-38'
  },
  {
    word: 'JOHN',
    category: 'Bible Characters',
    hint: 'The beloved disciple who wrote Revelation',
    difficulty: 'easy',
    subCategory: 'Apostles',
    reference: 'John 13:23'
  },
  {
    word: 'ADAM',
    category: 'Bible Characters',
    hint: 'The first man created by God',
    difficulty: 'easy',
    subCategory: 'Patriarchs',
    reference: 'Genesis 2:7'
  },
  {
    word: 'EVE',
    category: 'Bible Characters',
    hint: 'The first woman, mother of all living',
    difficulty: 'easy',
    subCategory: 'Patriarchs',
    reference: 'Genesis 3:20'
  },
  {
    word: 'ABEL',
    category: 'Bible Characters',
    hint: 'Offered a better sacrifice than his brother',
    difficulty: 'easy',
    subCategory: 'Patriarchs',
    reference: 'Genesis 4:4'
  },
  {
    word: 'CAIN',
    category: 'Bible Characters',
    hint: 'Killed his brother and became a wanderer',
    difficulty: 'easy',
    subCategory: 'Patriarchs',
    reference: 'Genesis 4:8'
  },
  {
    word: 'JOB',
    category: 'Bible Characters',
    hint: 'A wealthy man who lost everything yet remained faithful',
    difficulty: 'easy',
    subCategory: 'Patriarchs',
    reference: 'Book of Job'
  },
  {
    word: 'JOSHUA',
    category: 'Bible Characters',
    hint: 'Led Israel into the Promised Land',
    difficulty: 'medium',
    subCategory: 'Leaders',
    reference: 'Joshua 1-24'
  },
  {
    word: 'ESTHER',
    category: 'Bible Characters',
    hint: 'A queen who saved her people from destruction',
    difficulty: 'easy',
    subCategory: 'Queens',
    reference: 'Book of Esther'
  },
  {
    word: 'RUTH',
    category: 'Bible Characters',
    hint: 'A Moabite woman who became the great-grandmother of David',
    difficulty: 'easy',
    subCategory: 'Women',
    reference: 'Book of Ruth'
  },
  {
    word: 'NAOMI',
    category: 'Bible Characters',
    hint: 'Ruth\'s mother-in-law',
    difficulty: 'easy',
    subCategory: 'Women',
    reference: 'Ruth 1:2'
  },
  {
    word: 'BOAZ',
    category: 'Bible Characters',
    hint: 'A wealthy landowner who married Ruth',
    difficulty: 'easy',
    subCategory: 'Leaders',
    reference: 'Ruth 2:1'
  },

  // ---------- Medium Characters ----------
  {
    word: 'ABRAHAM',
    category: 'Bible Characters',
    hint: 'Father of many nations, called by God',
    difficulty: 'medium',
    subCategory: 'Patriarchs',
    reference: 'Genesis 12-25'
  },
  {
    word: 'ISAAC',
    category: 'Bible Characters',
    hint: 'The son of Abraham, nearly sacrificed',
    difficulty: 'medium',
    subCategory: 'Patriarchs',
    reference: 'Genesis 22:1-19'
  },
  {
    word: 'JACOB',
    category: 'Bible Characters',
    hint: 'Wrestled with God and was renamed Israel',
    difficulty: 'medium',
    subCategory: 'Patriarchs',
    reference: 'Genesis 32:22-32'
  },
  {
    word: 'JEREMIAH',
    category: 'Bible Characters',
    hint: 'The weeping prophet who wrote Lamentations',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: 'Book of Jeremiah'
  },
  {
    word: 'ELIJAH',
    category: 'Bible Characters',
    hint: 'Taken to heaven in a whirlwind',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: '2 Kings 2:11'
  },
  {
    word: 'ELISHA',
    category: 'Bible Characters',
    hint: 'Successor of Elijah who performed many miracles',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: '2 Kings 2-13'
  },
  {
    word: 'SAMUEL',
    category: 'Bible Characters',
    hint: 'The last judge who anointed Saul and David',
    difficulty: 'medium',
    subCategory: 'Judges',
    reference: '1 Samuel 1-15'
  },
  {
    word: 'SOLOMON',
    category: 'Bible Characters',
    hint: 'The wisest man who ever lived, built the temple',
    difficulty: 'medium',
    subCategory: 'Kings',
    reference: '1 Kings 3-11'
  },
  {
    word: 'SAUL',
    category: 'Bible Characters',
    hint: 'The first king of Israel, later rejected by God',
    difficulty: 'medium',
    subCategory: 'Kings',
    reference: '1 Samuel 9-31'
  },
  {
    word: 'DANIEL',
    category: 'Bible Characters',
    hint: 'Survived the lion\'s den through faith',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: 'Book of Daniel'
  },
  {
    word: 'EZEKIEL',
    category: 'Bible Characters',
    hint: 'Saw visions of dry bones and a wheel within a wheel',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: 'Book of Ezekiel'
  },
  {
    word: 'ISAIAH',
    category: 'Bible Characters',
    hint: 'Prophesied the coming of the Messiah',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: 'Book of Isaiah'
  },
  {
    word: 'JONAH',
    category: 'Bible Characters',
    hint: 'Swallowed by a great fish',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: 'Book of Jonah'
  },
  {
    word: 'HOSEA',
    category: 'Bible Characters',
    hint: 'Prophesied God\'s love for unfaithful Israel',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: 'Book of Hosea'
  },
  {
    word: 'AMOS',
    category: 'Bible Characters',
    hint: 'A shepherd who prophesied against injustice',
    difficulty: 'medium',
    subCategory: 'Prophets',
    reference: 'Book of Amos'
  },
  {
    word: 'JAMES',
    category: 'Bible Characters',
    hint: 'The brother of Jesus who led the Jerusalem church',
    difficulty: 'medium',
    subCategory: 'Apostles',
    reference: 'Acts 15:13-21'
  },
  {
    word: 'TIMOTHY',
    category: 'Bible Characters',
    hint: 'Paul\'s young disciple and co-worker',
    difficulty: 'medium',
    subCategory: 'Disciples',
    reference: '1 Timothy 1:2'
  },
  {
    word: 'TITUS',
    category: 'Bible Characters',
    hint: 'A disciple of Paul who was left in Crete',
    difficulty: 'medium',
    subCategory: 'Disciples',
    reference: 'Titus 1:4'
  },
  {
    word: 'LUKE',
    category: 'Bible Characters',
    hint: 'The physician who wrote the third Gospel and Acts',
    difficulty: 'medium',
    subCategory: 'New Testament',
    reference: 'Luke 1:1-4'
  },
  {
    word: 'MARK',
    category: 'Bible Characters',
    hint: 'Wrote the shortest Gospel',
    difficulty: 'medium',
    subCategory: 'New Testament',
    reference: 'Mark 1:1'
  },
  {
    word: 'MATTHEW',
    category: 'Bible Characters',
    hint: 'A tax collector who wrote a Gospel',
    difficulty: 'medium',
    subCategory: 'Apostles',
    reference: 'Matthew 9:9'
  },

  // ---------- Hard Characters ----------
  {
    word: 'JOSEPH',
    category: 'Bible Characters',
    hint: 'Had a coat of many colors and became a ruler in Egypt',
    difficulty: 'hard',
    subCategory: 'Patriarchs',
    reference: 'Genesis 37-50'
  },
  {
    word: 'NEBUCHADNEZZAR',
    category: 'Bible Characters',
    hint: 'The Babylonian king who had dreams interpreted by Daniel',
    difficulty: 'hard',
    subCategory: 'Kings',
    reference: 'Daniel 2-4'
  },
  {
    word: 'MORDECAI',
    category: 'Bible Characters',
    hint: 'Esther\'s cousin who saved the king\'s life',
    difficulty: 'hard',
    subCategory: 'Leaders',
    reference: 'Esther 2-10'
  },
  {
    word: 'ZECHARIAH',
    category: 'Bible Characters',
    hint: 'A prophet who saw visions of golden lampstands',
    difficulty: 'hard',
    subCategory: 'Prophets',
    reference: 'Book of Zechariah'
  },
  {
    word: 'MALACHI',
    category: 'Bible Characters',
    hint: 'The last prophet of the Old Testament',
    difficulty: 'hard',
    subCategory: 'Prophets',
    reference: 'Book of Malachi'
  },
  {
    word: 'HEROD',
    category: 'Bible Characters',
    hint: 'The king who tried to kill baby Jesus',
    difficulty: 'hard',
    subCategory: 'Kings',
    reference: 'Matthew 2:1-18'
  },
  {
    word: 'PILATE',
    category: 'Bible Characters',
    hint: 'The Roman governor who sentenced Jesus to death',
    difficulty: 'hard',
    subCategory: 'Leaders',
    reference: 'John 18:28-19:16'
  },
  {
    word: 'CAIAPHAS',
    category: 'Bible Characters',
    hint: 'The high priest who plotted to kill Jesus',
    difficulty: 'hard',
    subCategory: 'Religious Leaders',
    reference: 'Matthew 26:3-4'
  },
  {
    word: 'GAMALIEL',
    category: 'Bible Characters',
    hint: 'A respected Pharisee who advised the Sanhedrin',
    difficulty: 'hard',
    subCategory: 'Religious Leaders',
    reference: 'Acts 5:34-40'
  },
  {
    word: 'APOLLOS',
    category: 'Bible Characters',
    hint: 'An eloquent Jewish man from Alexandria',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Acts 18:24-28'
  },

  // ================================================================
  // SECTION 2: BOOKS OF THE BIBLE (40+ words)
  // ================================================================

  // ---------- Easy Books ----------
  {
    word: 'BIBLE',
    category: 'Books',
    hint: 'The holy book containing 66 books',
    difficulty: 'easy',
    subCategory: 'General',
    reference: '2 Timothy 3:16'
  },
  {
    word: 'GENESIS',
    category: 'Books',
    hint: 'The first book of the Bible',
    difficulty: 'easy',
    subCategory: 'Old Testament',
    reference: 'Genesis 1:1'
  },
  {
    word: 'PSALMS',
    category: 'Books',
    hint: 'A book of songs and poetry',
    difficulty: 'easy',
    subCategory: 'Old Testament',
    reference: 'Psalm 150:6'
  },
  {
    word: 'PROVERBS',
    category: 'Books',
    hint: 'A book of wisdom and wise sayings',
    difficulty: 'easy',
    subCategory: 'Old Testament',
    reference: 'Proverbs 1:7'
  },
  {
    word: 'MARK',
    category: 'Books',
    hint: 'The shortest Gospel',
    difficulty: 'easy',
    subCategory: 'New Testament',
    reference: 'Mark 1:1'
  },
  {
    word: 'LUKE',
    category: 'Books',
    hint: 'The longest Gospel, written by a doctor',
    difficulty: 'easy',
    subCategory: 'New Testament',
    reference: 'Luke 1:1-4'
  },
  {
    word: 'JOHN',
    category: 'Books',
    hint: 'The Gospel about the Word made flesh',
    difficulty: 'easy',
    subCategory: 'New Testament',
    reference: 'John 1:1'
  },
  {
    word: 'ACTS',
    category: 'Books',
    hint: 'The history of the early church',
    difficulty: 'easy',
    subCategory: 'New Testament',
    reference: 'Acts 1:8'
  },

  // ---------- Medium Books ----------
  {
    word: 'EXODUS',
    category: 'Books',
    hint: 'The second book, about the escape from Egypt',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Exodus 20:2'
  },
  {
    word: 'LEVITICUS',
    category: 'Books',
    hint: 'The book about the priesthood and sacrifices',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Leviticus 19:2'
  },
  {
    word: 'NUMBERS',
    category: 'Books',
    hint: 'The book of census and wilderness wanderings',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Numbers 1:1'
  },
  {
    word: 'DEUTERONOMY',
    category: 'Books',
    hint: 'The repeated law before entering the Promised Land',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Deuteronomy 6:4'
  },
  {
    word: 'JOSHUA',
    category: 'Books',
    hint: 'The conquest of Canaan',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Joshua 1:9'
  },
  {
    word: 'JUDGES',
    category: 'Books',
    hint: 'The cycle of sin and deliverance',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Judges 21:25'
  },
  {
    word: 'RUTH',
    category: 'Books',
    hint: 'A story of loyalty and redemption',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Ruth 1:16'
  },
  {
    word: 'SAMUEL',
    category: 'Books',
    hint: 'The book about Israel\'s first kings',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: '1 Samuel 1:1'
  },
  {
    word: 'KINGS',
    category: 'Books',
    hint: 'The history of Israel and Judah\'s kings',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: '1 Kings 1:1'
  },
  {
    word: 'CHRONICLES',
    category: 'Books',
    hint: 'The genealogies and history of Israel',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: '1 Chronicles 1:1'
  },
  {
    word: 'EZRA',
    category: 'Books',
    hint: 'The return from Babylon and rebuilding',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Ezra 7:10'
  },
  {
    word: 'NEHEMIAH',
    category: 'Books',
    hint: 'Rebuilding the walls of Jerusalem',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Nehemiah 8:10'
  },
  {
    word: 'ESTHER',
    category: 'Books',
    hint: 'A queen saves her people',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Esther 4:14'
  },
  {
    word: 'JOB',
    category: 'Books',
    hint: 'A man suffers and questions God',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Job 1:21'
  },
  {
    word: 'ECCLESIASTES',
    category: 'Books',
    hint: 'All is vanity under the sun',
    difficulty: 'medium',
    subCategory: 'Old Testament',
    reference: 'Ecclesiastes 1:2'
  },

  // ---------- Hard Books ----------
  {
    word: 'ISAIAH',
    category: 'Books',
    hint: 'The book of the suffering servant',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Isaiah 53:5'
  },
  {
    word: 'JEREMIAH',
    category: 'Books',
    hint: 'The weeping prophet\'s writings',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Jeremiah 29:11'
  },
  {
    word: 'LAMENTATIONS',
    category: 'Books',
    hint: 'A book of mourning over Jerusalem',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Lamentations 3:22'
  },
  {
    word: 'EZEKIEL',
    category: 'Books',
    hint: 'The book of visions and dry bones',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Ezekiel 37:1-14'
  },
  {
    word: 'DANIEL',
    category: 'Books',
    hint: 'The book of the lion\'s den and prophecies',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Daniel 6:22'
  },
  {
    word: 'HOSEA',
    category: 'Books',
    hint: 'A prophet\'s marriage as a symbol of God\'s love',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Hosea 1:2'
  },
  {
    word: 'JOEL',
    category: 'Books',
    hint: 'The day of the Lord prophecy',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Joel 2:28'
  },
  {
    word: 'AMOS',
    category: 'Books',
    hint: 'A shepherd\'s call for justice',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Amos 5:24'
  },
  {
    word: 'OBADIAH',
    category: 'Books',
    hint: 'The shortest book of the Old Testament',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Obadiah 1:1'
  },
  {
    word: 'JONAH',
    category: 'Books',
    hint: 'A reluctant prophet and a great fish',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Jonah 1:17'
  },
  {
    word: 'MICAH',
    category: 'Books',
    hint: 'He has shown you what is good',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Micah 6:8'
  },
  {
    word: 'NAHUM',
    category: 'Books',
    hint: 'The prophet against Nineveh',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Nahum 1:7'
  },
  {
    word: 'HABAKKUK',
    category: 'Books',
    hint: 'The righteous shall live by faith',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Habakkuk 2:4'
  },
  {
    word: 'ZEPHANIAH',
    category: 'Books',
    hint: 'The day of the Lord is near',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Zephaniah 3:17'
  },
  {
    word: 'HAGGAI',
    category: 'Books',
    hint: 'Encouragement to rebuild the temple',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Haggai 2:9'
  },
  {
    word: 'ZECHARIAH',
    category: 'Books',
    hint: 'Messianic prophecies and visions',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Zechariah 4:6'
  },
  {
    word: 'MALACHI',
    category: 'Books',
    hint: 'The final Old Testament book',
    difficulty: 'hard',
    subCategory: 'Old Testament',
    reference: 'Malachi 3:10'
  },
  {
    word: 'ROMANS',
    category: 'Books',
    hint: 'The book of justification by faith',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Romans 3:23-24'
  },
  {
    word: 'GALATIANS',
    category: 'Books',
    hint: 'Freedom in Christ from the law',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Galatians 5:1'
  },
  {
    word: 'EPHESIANS',
    category: 'Books',
    hint: 'The armor of God and the church',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Ephesians 6:11'
  },
  {
    word: 'PHILIPPIANS',
    category: 'Books',
    hint: 'The book of joy in Christ',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Philippians 4:4'
  },
  {
    word: 'COLOSSIANS',
    category: 'Books',
    hint: 'The supremacy of Christ',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Colossians 3:2'
  },
  {
    word: 'THESSALONIANS',
    category: 'Books',
    hint: 'The second coming of Christ',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: '1 Thessalonians 4:16'
  },
  {
    word: 'TIMOTHY',
    category: 'Books',
    hint: 'Pastoral letters to a young leader',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: '1 Timothy 4:12'
  },
  {
    word: 'TITUS',
    category: 'Books',
    hint: 'A letter about good works and leadership',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Titus 2:11-12'
  },
  {
    word: 'PHILEMON',
    category: 'Books',
    hint: 'A personal letter about forgiveness',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Philemon 1:15'
  },
  {
    word: 'HEBREWS',
    category: 'Books',
    hint: 'The superiority of Christ',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Hebrews 11:1'
  },
  {
    word: 'JAMES',
    category: 'Books',
    hint: 'Faith without works is dead',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'James 2:26'
  },
  {
    word: 'PETER',
    category: 'Books',
    hint: 'Letters about suffering and hope',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: '1 Peter 5:7'
  },
  {
    word: 'JUDE',
    category: 'Books',
    hint: 'Contending for the faith',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Jude 1:3'
  },
  {
    word: 'REVELATION',
    category: 'Books',
    hint: 'The last book, full of prophecy and visions',
    difficulty: 'hard',
    subCategory: 'New Testament',
    reference: 'Revelation 1:1'
  },

  // ================================================================
  // SECTION 3: BIBLE THEMES & CONCEPTS (40+ words)
  // ================================================================

  // ---------- Easy Themes ----------
  {
    word: 'GRACE',
    category: 'Bible Themes',
    hint: 'Unmerited favor from God',
    difficulty: 'easy',
    subCategory: 'Theology',
    reference: 'Ephesians 2:8'
  },
  {
    word: 'FAITH',
    category: 'Bible Themes',
    hint: 'Belief and trust in God',
    difficulty: 'easy',
    subCategory: 'Theology',
    reference: 'Hebrews 11:1'
  },
  {
    word: 'LOVE',
    category: 'Bible Themes',
    hint: 'The greatest commandment',
    difficulty: 'easy',
    subCategory: 'Christian Living',
    reference: '1 Corinthians 13:13'
  },
  {
    word: 'HOPE',
    category: 'Bible Themes',
    hint: 'Confident expectation of future good',
    difficulty: 'easy',
    subCategory: 'Christian Living',
    reference: 'Romans 15:13'
  },
  {
    word: 'JOY',
    category: 'Bible Themes',
    hint: 'Deep gladness in the Lord',
    difficulty: 'easy',
    subCategory: 'Christian Living',
    reference: 'Philippians 4:4'
  },
  {
    word: 'PEACE',
    category: 'Bible Themes',
    hint: 'Tranquility and harmony with God',
    difficulty: 'easy',
    subCategory: 'Christian Living',
    reference: 'John 14:27'
  },
  {
    word: 'PRAYER',
    category: 'Bible Themes',
    hint: 'Communication with God',
    difficulty: 'easy',
    subCategory: 'Christian Living',
    reference: 'Philippians 4:6'
  },
  {
    word: 'WORSHIP',
    category: 'Bible Themes',
    hint: 'Giving honor and praise to God',
    difficulty: 'easy',
    subCategory: 'Christian Living',
    reference: 'Psalm 95:6'
  },

  // ---------- Medium Themes ----------
  {
    word: 'SALVATION',
    category: 'Bible Themes',
    hint: 'Deliverance from sin through Christ',
    difficulty: 'medium',
    subCategory: 'Theology',
    reference: 'Acts 4:12'
  },
  {
    word: 'FORGIVENESS',
    category: 'Bible Themes',
    hint: 'Pardon for sins through God\'s mercy',
    difficulty: 'medium',
    subCategory: 'Theology',
    reference: '1 John 1:9'
  },
  {
    word: 'REDEMPTION',
    category: 'Bible Themes',
    hint: 'Being bought back from sin',
    difficulty: 'medium',
    subCategory: 'Theology',
    reference: 'Ephesians 1:7'
  },
  {
    word: 'JUSTIFICATION',
    category: 'Bible Themes',
    hint: 'Declared righteous before God',
    difficulty: 'medium',
    subCategory: 'Theology',
    reference: 'Romans 5:1'
  },
  {
    word: 'SANCTIFICATION',
    category: 'Bible Themes',
    hint: 'Being set apart for God\'s purposes',
    difficulty: 'medium',
    subCategory: 'Theology',
    reference: '1 Thessalonians 4:3'
  },
  {
    word: 'HOLINESS',
    category: 'Bible Themes',
    hint: 'Being pure and set apart for God',
    difficulty: 'medium',
    subCategory: 'Theology',
    reference: '1 Peter 1:15'
  },
  {
    word: 'RIGHTEOUSNESS',
    category: 'Bible Themes',
    hint: 'Moral uprightness according to God\'s standards',
    difficulty: 'medium',
    subCategory: 'Theology',
    reference: 'Romans 3:21-22'
  },
  {
    word: 'OBEDIENCE',
    category: 'Bible Themes',
    hint: 'Following God\'s commands',
    difficulty: 'medium',
    subCategory: 'Christian Living',
    reference: 'John 14:15'
  },
  {
    word: 'HUMILITY',
    category: 'Bible Themes',
    hint: 'Being humble before God and others',
    difficulty: 'medium',
    subCategory: 'Christian Living',
    reference: 'James 4:6'
  },
  {
    word: 'PATIENCE',
    category: 'Bible Themes',
    hint: 'Waiting on God with perseverance',
    difficulty: 'medium',
    subCategory: 'Christian Living',
    reference: 'James 1:3-4'
  },
  {
    word: 'GENTLENESS',
    category: 'Bible Themes',
    hint: 'Being mild and kind in spirit',
    difficulty: 'medium',
    subCategory: 'Christian Living',
    reference: 'Galatians 5:22-23'
  },
  {
    word: 'SELFCONTROL',
    category: 'Bible Themes',
    hint: 'Mastery over one\'s desires',
    difficulty: 'medium',
    subCategory: 'Christian Living',
    reference: 'Galatians 5:22-23'
  },

  // ---------- Hard Themes ----------
  {
    word: 'RESURRECTION',
    category: 'Bible Themes',
    hint: 'Rising from the dead to new life',
    difficulty: 'hard',
    subCategory: 'Theology',
    reference: '1 Corinthians 15:20-22'
  },
  {
    word: 'RECONCILIATION',
    category: 'Bible Themes',
    hint: 'Restoration of relationship with God',
    difficulty: 'hard',
    subCategory: 'Theology',
    reference: '2 Corinthians 5:18-19'
  },
  {
    word: 'PROPITIATION',
    category: 'Bible Themes',
    hint: 'The sacrifice that satisfies God\'s wrath',
    difficulty: 'hard',
    subCategory: 'Theology',
    reference: '1 John 2:2'
  },
  {
    word: 'SANCTIFICATION',
    category: 'Bible Themes',
    hint: 'Being made holy through the Spirit',
    difficulty: 'hard',
    subCategory: 'Theology',
    reference: '1 Corinthians 6:11'
  },
  {
    word: 'GLORIFICATION',
    category: 'Bible Themes',
    hint: 'Being transformed into Christ\'s likeness',
    difficulty: 'hard',
    subCategory: 'Theology',
    reference: 'Romans 8:30'
  },
  {
    word: 'PERSEVERANCE',
    category: 'Bible Themes',
    hint: 'Enduring trials with faith',
    difficulty: 'hard',
    subCategory: 'Christian Living',
    reference: 'Hebrews 12:1'
  },
  {
    word: 'CONTENTMENT',
    category: 'Bible Themes',
    hint: 'Being satisfied in any circumstance',
    difficulty: 'hard',
    subCategory: 'Christian Living',
    reference: 'Philippians 4:11-13'
  },
  {
    word: 'STEWARDSHIP',
    category: 'Bible Themes',
    hint: 'Managing God\'s resources wisely',
    difficulty: 'hard',
    subCategory: 'Christian Living',
    reference: '1 Peter 4:10'
  },

  // ================================================================
  // SECTION 4: BIBLE PLACES (30+ words)
  // ================================================================

  // ---------- Easy Places ----------
  {
    word: 'BETHLEHEM',
    category: 'Places',
    hint: 'The birthplace of Jesus',
    difficulty: 'medium',
    subCategory: 'Israel',
    reference: 'Matthew 2:1'
  },
  {
    word: 'JERUSALEM',
    category: 'Places',
    hint: 'The city of David, the Holy City',
    difficulty: 'medium',
    subCategory: 'Israel',
    reference: 'Psalm 122:6'
  },
  {
    word: 'GALILEE',
    category: 'Places',
    hint: 'The region where Jesus walked on water',
    difficulty: 'medium',
    subCategory: 'Israel',
    reference: 'Matthew 14:22-33'
  },
  {
    word: 'NAZARETH',
    category: 'Places',
    hint: 'The hometown of Jesus',
    difficulty: 'easy',
    subCategory: 'Israel',
    reference: 'Luke 1:26'
  },
  {
    word: 'JORDAN',
    category: 'Places',
    hint: 'The river where Jesus was baptized',
    difficulty: 'easy',
    subCategory: 'Rivers',
    reference: 'Matthew 3:13'
  },

  // ---------- Medium Places ----------
  {
    word: 'EGYPT',
    category: 'Places',
    hint: 'The land of slavery and refuge',
    difficulty: 'medium',
    subCategory: 'Countries',
    reference: 'Exodus 14:13-14'
  },
  {
    word: 'BABYLON',
    category: 'Places',
    hint: 'The empire that conquered Judah',
    difficulty: 'medium',
    subCategory: 'Countries',
    reference: 'Daniel 1:1-2'
  },
  {
    word: 'ASSYRIA',
    category: 'Places',
    hint: 'The empire that conquered Israel',
    difficulty: 'medium',
    subCategory: 'Countries',
    reference: '2 Kings 17:6'
  },
  {
    word: 'PERSIA',
    category: 'Places',
    hint: 'The empire that allowed the return from exile',
    difficulty: 'medium',
    subCategory: 'Countries',
    reference: 'Ezra 1:1-4'
  },
  {
    word: 'SAMARIA',
    category: 'Places',
    hint: 'The region of the half-Jewish people',
    difficulty: 'medium',
    subCategory: 'Israel',
    reference: 'John 4:4-6'
  },
  {
    word: 'JUDEA',
    category: 'Places',
    hint: 'The region where Jerusalem is located',
    difficulty: 'medium',
    subCategory: 'Israel',
    reference: 'Matthew 2:1'
  },
  {
    word: 'SINAI',
    category: 'Places',
    hint: 'The mountain where the Law was given',
    difficulty: 'medium',
    subCategory: 'Mountains',
    reference: 'Exodus 19:20'
  },
  {
    word: 'ZION',
    category: 'Places',
    hint: 'The hill of Jerusalem, symbol of God\'s presence',
    difficulty: 'medium',
    subCategory: 'Israel',
    reference: 'Psalm 2:6'
  },

  // ---------- Hard Places ----------
  {
    word: 'DAMASCUS',
    category: 'Places',
    hint: 'Where Paul was converted on the road',
    difficulty: 'hard',
    subCategory: 'Countries',
    reference: 'Acts 9:1-19'
  },
  {
    word: 'CAESAREA',
    category: 'Places',
    hint: 'The city where Paul was imprisoned',
    difficulty: 'hard',
    subCategory: 'Israel',
    reference: 'Acts 23:23-35'
  },
  {
    word: 'TARSUS',
    category: 'Places',
    hint: 'The hometown of the Apostle Paul',
    difficulty: 'hard',
    subCategory: 'Countries',
    reference: 'Acts 22:3'
  },
  {
    word: 'ANTIOCH',
    category: 'Places',
    hint: 'The city where believers were first called Christians',
    difficulty: 'hard',
    subCategory: 'Countries',
    reference: 'Acts 11:26'
  },
  {
    word: 'CORINTH',
    category: 'Places',
    hint: 'A city with a very problematic church',
    difficulty: 'hard',
    subCategory: 'Countries',
    reference: '1 Corinthians 1:2'
  },
  {
    word: 'EMMAUS',
    category: 'Places',
    hint: 'The village where Jesus appeared to two disciples',
    difficulty: 'hard',
    subCategory: 'Israel',
    reference: 'Luke 24:13-35'
  },
  {
    word: 'GOLGOTHA',
    category: 'Places',
    hint: 'The place of the skull where Jesus was crucified',
    difficulty: 'hard',
    subCategory: 'Israel',
    reference: 'Matthew 27:33'
  },
  {
    word: 'GETHSEMANE',
    category: 'Places',
    hint: 'The garden where Jesus prayed before his arrest',
    difficulty: 'hard',
    subCategory: 'Israel',
    reference: 'Matthew 26:36'
  },
  {
    word: 'BETHANY',
    category: 'Places',
    hint: 'The home of Mary, Martha, and Lazarus',
    difficulty: 'hard',
    subCategory: 'Israel',
    reference: 'John 11:1'
  },
  {
    word: 'TIBERIAS',
    category: 'Places',
    hint: 'The town on the Sea of Galilee',
    difficulty: 'hard',
    subCategory: 'Israel',
    reference: 'John 6:23'
  },
  {
    word: 'PHILIPPI',
    category: 'Places',
    hint: 'The first church in Europe',
    difficulty: 'hard',
    subCategory: 'Countries',
    reference: 'Acts 16:11-40'
  },
  {
    word: 'MALTA',
    category: 'Places',
    hint: 'The island where Paul was shipwrecked',
    difficulty: 'hard',
    subCategory: 'Countries',
    reference: 'Acts 28:1-10'
  },

  // ================================================================
  // SECTION 5: KEY BIBLE EVENTS (20+ words)
  // ================================================================

  {
    word: 'CREATION',
    category: 'Bible Events',
    hint: 'God made the heavens and the earth',
    difficulty: 'easy',
    subCategory: 'Events',
    reference: 'Genesis 1:1'
  },
  {
    word: 'FLOOD',
    category: 'Bible Events',
    hint: 'God judged the world with water',
    difficulty: 'easy',
    subCategory: 'Events',
    reference: 'Genesis 6-9'
  },
  {
    word: 'EXODUS',
    category: 'Bible Events',
    hint: 'The escape from Egypt',
    difficulty: 'medium',
    subCategory: 'Events',
    reference: 'Exodus 12-14'
  },
  {
    word: 'PASSOVER',
    category: 'Bible Events',
    hint: 'The angel passed over the marked houses',
    difficulty: 'medium',
    subCategory: 'Events',
    reference: 'Exodus 12:12-13'
  },
  {
    word: 'PENTECOST',
    category: 'Bible Events',
    hint: 'The Holy Spirit descended like tongues of fire',
    difficulty: 'hard',
    subCategory: 'Events',
    reference: 'Acts 2:1-4'
  },
  {
    word: 'TRANSFIGURATION',
    category: 'Bible Events',
    hint: 'Jesus appeared in glory on a mountain',
    difficulty: 'hard',
    subCategory: 'Events',
    reference: 'Matthew 17:1-8'
  },
  {
    word: 'RESURRECTION',
    category: 'Bible Events',
    hint: 'Jesus rose from the dead',
    difficulty: 'hard',
    subCategory: 'Events',
    reference: 'Matthew 28:5-7'
  },
  {
    word: 'ASCENSION',
    category: 'Bible Events',
    hint: 'Jesus was taken up to heaven',
    difficulty: 'hard',
    subCategory: 'Events',
    reference: 'Acts 1:9-11'
  }
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

/**
 * Get a random Hangman word by difficulty
 */
export const getHangmanWord = (difficulty: 'easy' | 'medium' | 'hard'): HangmanWord => {
  const filtered = hangmanWords.filter(w => w.difficulty === difficulty);
  return filtered[Math.floor(Math.random() * filtered.length)];
};

/**
 * Get a random word by category
 */
export const getHangmanWordByCategory = (category: string): HangmanWord => {
  const filtered = hangmanWords.filter(w => w.category === category);
  return filtered[Math.floor(Math.random() * filtered.length)];
};

/**
 * Get words by difficulty and category
 */
export const getHangmanWords = (
  difficulty?: 'easy' | 'medium' | 'hard',
  category?: string
): HangmanWord[] => {
  let filtered = [...hangmanWords];
  
  if (difficulty) {
    filtered = filtered.filter(w => w.difficulty === difficulty);
  }
  
  if (category && category !== 'all') {
    filtered = filtered.filter(w => w.category === category);
  }
  
  return filtered;
};

/**
 * Get all unique categories with counts
 */
export const getCategories = () => {
  const categoryMap = new Map<string, number>();
  
  hangmanWords.forEach(w => {
    categoryMap.set(w.category, (categoryMap.get(w.category) || 0) + 1);
  });
  
  const categories = Array.from(categoryMap.entries()).map(([value, count]) => ({
    value,
    label: value,
    count
  }));
  
  return [
    { value: 'all', label: 'All Categories', count: hangmanWords.length },
    ...categories
  ];
};

/**
 * Get all unique sub-categories
 */
export const getSubCategories = (): string[] => {
  const subCategories = new Set<string>();
  hangmanWords.forEach(w => {
    if (w.subCategory) subCategories.add(w.subCategory);
  });
  return Array.from(subCategories).sort();
};

/**
 * Get statistics about the word database
 */
export const getHangmanStats = () => ({
  totalWords: hangmanWords.length,
  byDifficulty: {
    easy: hangmanWords.filter(w => w.difficulty === 'easy').length,
    medium: hangmanWords.filter(w => w.difficulty === 'medium').length,
    hard: hangmanWords.filter(w => w.difficulty === 'hard').length
  },
  byCategory: getCategories().reduce((acc, cat) => {
    if (cat.value !== 'all') {
      acc[cat.value] = cat.count;
    }
    return acc;
  }, {} as Record<string, number>),
  bySubCategory: hangmanWords.reduce((acc, w) => {
    if (w.subCategory) {
      acc[w.subCategory] = (acc[w.subCategory] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>)
});

/**
 * Get a hint for a word
 */
export const getHint = (word: string): string | undefined => {
  const found = hangmanWords.find(w => w.word === word.toUpperCase());
  return found?.hint;
};

/**
 * Get word details by exact match
 */
export const getWordDetails = (word: string): HangmanWord | undefined => {
  return hangmanWords.find(w => w.word === word.toUpperCase());
};

/**
 * Search words by hint or category
 */
export const searchHangmanWords = (query: string): HangmanWord[] => {
  const lowerQuery = query.toLowerCase();
  return hangmanWords.filter(w =>
    w.word.toLowerCase().includes(lowerQuery) ||
    w.hint.toLowerCase().includes(lowerQuery) ||
    w.category.toLowerCase().includes(lowerQuery) ||
    (w.subCategory && w.subCategory.toLowerCase().includes(lowerQuery))
  );
};

/**
 * Get words by letter count
 */
export const getWordsByLetterCount = (count: number): HangmanWord[] => {
  return hangmanWords.filter(w => w.word.length === count);
};

/**
 * Get random words (for variety in games)
 */
export const getRandomWords = (count: number = 5, difficulty?: 'easy' | 'medium' | 'hard'): HangmanWord[] => {
  let pool = hangmanWords;
  if (difficulty) {
    pool = pool.filter(w => w.difficulty === difficulty);
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};