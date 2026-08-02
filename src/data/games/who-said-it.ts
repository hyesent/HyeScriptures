// src/data/games/who-said-it.ts

export interface QuoteQuestion {
  id: string;
  text: string;
  speaker: string;
  options: string[];
  reference: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category?: 'old-testament' | 'new-testament' | 'psalms-proverbs' | 'prophets' | 'gospels' | 'epistles' | 'historical';
  book?: string;
}

export const whoSaidItQuestions: QuoteQuestion[] = [
  // ================================================================
  // SECTION 1: EASY QUESTIONS (60+)
  // ================================================================

  // ---------- Genesis ----------
  {
    id: 'q1',
    text: 'Am I my brother\'s keeper?',
    speaker: 'Cain',
    options: ['Cain', 'Abel', 'Moses', 'David'],
    reference: 'Genesis 4:9',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Genesis'
  },
  {
    id: 'q2',
    text: 'The Lord is my shepherd; I shall not want.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 23:1',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q3',
    text: 'For God so loved the world that he gave his one and only Son.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 3:16',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q4',
    text: 'I can do all things through Christ who strengthens me.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Philippians 4:13',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Philippians'
  },
  {
    id: 'q5',
    text: 'It is finished.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 19:30',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q6',
    text: 'The fear of the Lord is the beginning of wisdom.',
    speaker: 'Solomon',
    options: ['Solomon', 'David', 'Moses', 'Abraham'],
    reference: 'Proverbs 9:10',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Proverbs'
  },
  {
    id: 'q7',
    text: 'Trust in the Lord with all your heart.',
    speaker: 'Solomon',
    options: ['Solomon', 'David', 'Moses', 'Job'],
    reference: 'Proverbs 3:5',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Proverbs'
  },
  {
    id: 'q8',
    text: 'Let there be light.',
    speaker: 'God',
    options: ['God', 'Moses', 'David', 'Solomon'],
    reference: 'Genesis 1:3',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Genesis'
  },
  {
    id: 'q9',
    text: 'Be fruitful and multiply.',
    speaker: 'God',
    options: ['God', 'Adam', 'Noah', 'Abraham'],
    reference: 'Genesis 1:28',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Genesis'
  },
  {
    id: 'q10',
    text: 'I am the bread of life.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 6:35',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q11',
    text: 'I am the light of the world.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 8:12',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q12',
    text: 'I am the way and the truth and the life.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 14:6',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q13',
    text: 'For all have sinned and fall short of the glory of God.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 3:23',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q14',
    text: 'For the wages of sin is death, but the gift of God is eternal life.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 6:23',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q15',
    text: 'God is love.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 4:8',
    difficulty: 'easy',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q16',
    text: 'The earth is the Lord\'s and all its fullness.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 24:1',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q17',
    text: 'Create in me a clean heart, O God.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 51:10',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q18',
    text: 'The Lord is my light and my salvation.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 27:1',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q19',
    text: 'Rejoice in the Lord always.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Philippians 4:4',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Philippians'
  },
  {
    id: 'q20',
    text: 'Be anxious for nothing.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Philippians 4:6',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Philippians'
  },
  {
    id: 'q21',
    text: 'Let us make man in our image.',
    speaker: 'God',
    options: ['God', 'Moses', 'David', 'Solomon'],
    reference: 'Genesis 1:26',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Genesis'
  },
  {
    id: 'q22',
    text: 'Go into all the world and preach the gospel to every creature.',
    speaker: 'Jesus',
    options: ['Jesus', 'Peter', 'Paul', 'John'],
    reference: 'Mark 16:15',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Mark'
  },
  {
    id: 'q23',
    text: 'Love your neighbor as yourself.',
    speaker: 'Jesus',
    options: ['Jesus', 'Moses', 'David', 'Paul'],
    reference: 'Matthew 22:39',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q24',
    text: 'Pray without ceasing.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: '1 Thessalonians 5:17',
    difficulty: 'easy',
    category: 'epistles',
    book: '1 Thessalonians'
  },
  {
    id: 'q25',
    text: 'Give thanks to the Lord, for he is good.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 118:1',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q26',
    text: 'The Lord is my rock and my fortress.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 18:2',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q27',
    text: 'I will never leave you nor forsake you.',
    speaker: 'God',
    options: ['God', 'Moses', 'David', 'Solomon'],
    reference: 'Joshua 1:5',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Joshua'
  },
  {
    id: 'q28',
    text: 'We love because he first loved us.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 4:19',
    difficulty: 'easy',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q29',
    text: 'This is the day the Lord has made.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 118:24',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q30',
    text: 'He who believes in the Son has everlasting life.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'Jesus'],
    reference: 'John 3:36',
    difficulty: 'easy',
    category: 'epistles',
    book: 'John'
  },
  {
    id: 'q31',
    text: 'Let the redeemed of the Lord say so.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 107:2',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q32',
    text: 'Your word is a lamp to my feet.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 119:105',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q33',
    text: 'The peace of God, which surpasses all understanding.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Philippians 4:7',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Philippians'
  },
  {
    id: 'q34',
    text: 'He who has ears to hear, let him hear.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Mark 4:9',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Mark'
  },
  {
    id: 'q35',
    text: 'To God be the glory forever and ever.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 11:36',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q36',
    text: 'The Lord gives wisdom.',
    speaker: 'Solomon',
    options: ['Solomon', 'David', 'Moses', 'Abraham'],
    reference: 'Proverbs 2:6',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Proverbs'
  },
  {
    id: 'q37',
    text: 'All Scripture is inspired by God.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: '2 Timothy 3:16',
    difficulty: 'easy',
    category: 'epistles',
    book: '2 Timothy'
  },
  {
    id: 'q38',
    text: 'In the beginning was the Word.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'Jesus'],
    reference: 'John 1:1',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q39',
    text: 'The Word became flesh.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'Jesus'],
    reference: 'John 1:14',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q40',
    text: 'I am Alpha and Omega.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Revelation 1:8',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Revelation'
  },
  {
    id: 'q41',
    text: 'The Lord is near to all who call upon him.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 145:18',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q42',
    text: 'Let everything that has breath praise the Lord.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 150:6',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q43',
    text: 'I will praise you, O Lord, with my whole heart.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 9:1',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q44',
    text: 'Come to me, all you who labor and are heavy laden.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 11:28',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q45',
    text: 'My soul magnifies the Lord.',
    speaker: 'Mary',
    options: ['Mary', 'Elizabeth', 'Anna', 'Martha'],
    reference: 'Luke 1:46',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Luke'
  },
  {
    id: 'q46',
    text: 'He must increase, but I must decrease.',
    speaker: 'John the Baptist',
    options: ['John the Baptist', 'Jesus', 'Peter', 'Paul'],
    reference: 'John 3:30',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q47',
    text: 'Death is swallowed up in victory.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: '1 Corinthians 15:54',
    difficulty: 'easy',
    category: 'epistles',
    book: '1 Corinthians'
  },
  {
    id: 'q48',
    text: 'Thanks be to God, who gives us the victory.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: '1 Corinthians 15:57',
    difficulty: 'easy',
    category: 'epistles',
    book: '1 Corinthians'
  },
  {
    id: 'q49',
    text: 'Blessed is the man who trusts in the Lord.',
    speaker: 'Jeremiah',
    options: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Daniel'],
    reference: 'Jeremiah 17:7',
    difficulty: 'easy',
    category: 'prophets',
    book: 'Jeremiah'
  },
  {
    id: 'q50',
    text: 'Great is your faithfulness.',
    speaker: 'Jeremiah',
    options: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Daniel'],
    reference: 'Lamentations 3:23',
    difficulty: 'easy',
    category: 'prophets',
    book: 'Lamentations'
  },
  {
    id: 'q51',
    text: 'The good shepherd lays down his life for the sheep.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 10:11',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q52',
    text: 'We walk by faith, not by sight.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: '2 Corinthians 5:7',
    difficulty: 'easy',
    category: 'epistles',
    book: '2 Corinthians'
  },
  {
    id: 'q53',
    text: 'If God is for us, who can be against us?',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 8:31',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q54',
    text: 'Nothing can separate us from the love of God.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 8:39',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q55',
    text: 'A soft answer turns away wrath.',
    speaker: 'Solomon',
    options: ['Solomon', 'David', 'Moses', 'Abraham'],
    reference: 'Proverbs 15:1',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Proverbs'
  },
  {
    id: 'q56',
    text: 'Pride goes before destruction.',
    speaker: 'Solomon',
    options: ['Solomon', 'David', 'Moses', 'Abraham'],
    reference: 'Proverbs 16:18',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Proverbs'
  },
  {
    id: 'q57',
    text: 'A friend loves at all times.',
    speaker: 'Solomon',
    options: ['Solomon', 'David', 'Moses', 'Abraham'],
    reference: 'Proverbs 17:17',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Proverbs'
  },
  {
    id: 'q58',
    text: 'The tongue has the power of life and death.',
    speaker: 'Solomon',
    options: ['Solomon', 'David', 'Moses', 'Abraham'],
    reference: 'Proverbs 18:21',
    difficulty: 'easy',
    category: 'psalms-proverbs',
    book: 'Proverbs'
  },
  {
    id: 'q59',
    text: 'As for me and my house, we will serve the Lord.',
    speaker: 'Joshua',
    options: ['Joshua', 'Moses', 'David', 'Solomon'],
    reference: 'Joshua 24:15',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Joshua'
  },
  {
    id: 'q60',
    text: 'The Lord is good to those who wait for him.',
    speaker: 'Jeremiah',
    options: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Daniel'],
    reference: 'Lamentations 3:25',
    difficulty: 'easy',
    category: 'prophets',
    book: 'Lamentations'
  },

  // ================================================================
  // SECTION 2: MEDIUM QUESTIONS (70+)
  // ================================================================

  {
    id: 'q61',
    text: 'Is anything too hard for the Lord?',
    speaker: 'God',
    options: ['God', 'Moses', 'Abraham', 'David'],
    reference: 'Genesis 18:14',
    difficulty: 'medium',
    category: 'old-testament',
    book: 'Genesis'
  },
  {
    id: 'q62',
    text: 'My grace is sufficient for you, for my power is made perfect in weakness.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: '2 Corinthians 12:9',
    difficulty: 'medium',
    category: 'epistles',
    book: '2 Corinthians'
  },
  {
    id: 'q63',
    text: 'I have set before you life and death, blessing and curse. Therefore choose life.',
    speaker: 'Moses',
    options: ['Moses', 'Joshua', 'David', 'Solomon'],
    reference: 'Deuteronomy 30:19',
    difficulty: 'medium',
    category: 'old-testament',
    book: 'Deuteronomy'
  },
  {
    id: 'q64',
    text: 'The fool says in his heart, "There is no God."',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 14:1',
    difficulty: 'medium',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q65',
    text: 'I am not ashamed of the gospel, for it is the power of God for salvation.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 1:16',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q66',
    text: 'Be still, and know that I am God.',
    speaker: 'God',
    options: ['God', 'David', 'Solomon', 'Moses'],
    reference: 'Psalm 46:10',
    difficulty: 'medium',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q67',
    text: 'Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Philippians 4:6',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Philippians'
  },
  {
    id: 'q68',
    text: 'Is not my word like fire?',
    speaker: 'Jeremiah',
    options: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Daniel'],
    reference: 'Jeremiah 23:29',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Jeremiah'
  },
  {
    id: 'q69',
    text: 'The righteous shall live by faith.',
    speaker: 'Habakkuk',
    options: ['Habakkuk', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    reference: 'Habakkuk 2:4',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Habakkuk'
  },
  {
    id: 'q70',
    text: 'I will pour out my Spirit on all flesh.',
    speaker: 'Joel',
    options: ['Joel', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    reference: 'Joel 2:28',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Joel'
  },
  {
    id: 'q71',
    text: 'The Lord is my portion, says my soul.',
    speaker: 'Jeremiah',
    options: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Daniel'],
    reference: 'Lamentations 3:24',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Lamentations'
  },
  {
    id: 'q72',
    text: 'I know the plans I have for you, declares the Lord.',
    speaker: 'Jeremiah',
    options: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Daniel'],
    reference: 'Jeremiah 29:11',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Jeremiah'
  },
  {
    id: 'q73',
    text: 'For I am convinced that neither death nor life... will be able to separate us from the love of God.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 8:38-39',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q74',
    text: 'The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Galatians 5:22-23',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Galatians'
  },
  {
    id: 'q75',
    text: 'To me, to live is Christ and to die is gain.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Philippians 1:21',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Philippians'
  },
  {
    id: 'q76',
    text: 'Let the word of Christ dwell in you richly.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Colossians 3:16',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Colossians'
  },
  {
    id: 'q77',
    text: 'Set your minds on things that are above, not on things that are on earth.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Colossians 3:2',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Colossians'
  },
  {
    id: 'q78',
    text: 'Do not be conformed to this world, but be transformed by the renewing of your mind.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 12:2',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q79',
    text: 'Humble yourselves before the Lord, and he will exalt you.',
    speaker: 'James',
    options: ['James', 'Peter', 'John', 'Paul'],
    reference: 'James 4:10',
    difficulty: 'medium',
    category: 'epistles',
    book: 'James'
  },
  {
    id: 'q80',
    text: 'Faith without works is dead.',
    speaker: 'James',
    options: ['James', 'Peter', 'John', 'Paul'],
    reference: 'James 2:26',
    difficulty: 'medium',
    category: 'epistles',
    book: 'James'
  },
  {
    id: 'q81',
    text: 'Submit to God. Resist the devil and he will flee from you.',
    speaker: 'James',
    options: ['James', 'Peter', 'John', 'Paul'],
    reference: 'James 4:7',
    difficulty: 'medium',
    category: 'epistles',
    book: 'James'
  },
  {
    id: 'q82',
    text: 'Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion.',
    speaker: 'Peter',
    options: ['Peter', 'James', 'John', 'Paul'],
    reference: '1 Peter 5:8',
    difficulty: 'medium',
    category: 'epistles',
    book: '1 Peter'
  },
  {
    id: 'q83',
    text: 'Cast all your anxieties on him, because he cares for you.',
    speaker: 'Peter',
    options: ['Peter', 'James', 'John', 'Paul'],
    reference: '1 Peter 5:7',
    difficulty: 'medium',
    category: 'epistles',
    book: '1 Peter'
  },
  {
    id: 'q84',
    text: 'We are witnesses of these things, and so is the Holy Spirit.',
    speaker: 'Peter',
    options: ['Peter', 'James', 'John', 'Paul'],
    reference: 'Acts 5:32',
    difficulty: 'medium',
    category: 'historical',
    book: 'Acts'
  },
  {
    id: 'q85',
    text: 'Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins.',
    speaker: 'Peter',
    options: ['Peter', 'James', 'John', 'Paul'],
    reference: 'Acts 2:38',
    difficulty: 'medium',
    category: 'historical',
    book: 'Acts'
  },
  {
    id: 'q86',
    text: 'We must obey God rather than men.',
    speaker: 'Peter',
    options: ['Peter', 'James', 'John', 'Paul'],
    reference: 'Acts 5:29',
    difficulty: 'medium',
    category: 'historical',
    book: 'Acts'
  },
  {
    id: 'q87',
    text: 'I have not come to call the righteous, but sinners to repentance.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Luke 5:32',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Luke'
  },
  {
    id: 'q88',
    text: 'If you have faith as small as a mustard seed, you can say to this mulberry tree, "Be uprooted and planted in the sea," and it will obey you.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Luke 17:6',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Luke'
  },
  {
    id: 'q89',
    text: 'I tell you, there is rejoicing in the presence of the angels of God over one sinner who repents.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Luke 15:10',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Luke'
  },
  {
    id: 'q90',
    text: 'The stone the builders rejected has become the cornerstone.',
    speaker: 'Peter',
    options: ['Peter', 'John', 'Paul', 'James'],
    reference: 'Acts 4:11',
    difficulty: 'medium',
    category: 'historical',
    book: 'Acts'
  },
  {
    id: 'q91',
    text: 'There is no other name under heaven given to mankind by which we must be saved.',
    speaker: 'Peter',
    options: ['Peter', 'John', 'Paul', 'James'],
    reference: 'Acts 4:12',
    difficulty: 'medium',
    category: 'historical',
    book: 'Acts'
  },
  {
    id: 'q92',
    text: 'Lord, show us the Father and that will be enough for us.',
    speaker: 'Philip',
    options: ['Philip', 'Thomas', 'Peter', 'James'],
    reference: 'John 14:8',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q93',
    text: 'Unless I see the nail marks in his hands and put my finger where the nails were, I will not believe.',
    speaker: 'Thomas',
    options: ['Thomas', 'Philip', 'Peter', 'James'],
    reference: 'John 20:25',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q94',
    text: 'My Lord and my God!',
    speaker: 'Thomas',
    options: ['Thomas', 'Philip', 'Peter', 'James'],
    reference: 'John 20:28',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q95',
    text: 'You are the Christ, the Son of the living God.',
    speaker: 'Peter',
    options: ['Peter', 'James', 'John', 'Andrew'],
    reference: 'Matthew 16:16',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q96',
    text: 'On this rock I will build my church, and the gates of Hades will not overcome it.',
    speaker: 'Jesus',
    options: ['Jesus', 'Peter', 'John', 'Paul'],
    reference: 'Matthew 16:18',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q97',
    text: 'If you forgive others their trespasses, your heavenly Father will also forgive you.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 6:14',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q98',
    text: 'Lay up for yourselves treasures in heaven.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 6:20',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q99',
    text: 'Seek first the kingdom of God and his righteousness.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 6:33',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q100',
    text: 'Judge not, that you be not judged.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 7:1',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q101',
    text: 'The Lord your God is with you wherever you go.',
    speaker: 'Moses',
    options: ['Moses', 'Joshua', 'David', 'Solomon'],
    reference: 'Deuteronomy 31:6',
    difficulty: 'medium',
    category: 'old-testament',
    book: 'Deuteronomy'
  },
  {
    id: 'q102',
    text: 'As the deer pants for streams of water, so my soul pants for you, my God.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 42:1',
    difficulty: 'medium',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q103',
    text: 'I will lift up my eyes to the hills. From where does my help come?',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 121:1',
    difficulty: 'medium',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q104',
    text: 'The Lord is my keeper; the Lord is the shade on your right hand.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 121:5',
    difficulty: 'medium',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q105',
    text: 'I will both lie down and sleep in peace, for you alone, O Lord, make me dwell in safety.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 4:8',
    difficulty: 'medium',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q106',
    text: 'Commit your way to the Lord; trust in him and he will act.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 37:5',
    difficulty: 'medium',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q107',
    text: 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 11:25',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q108',
    text: 'A new command I give you: Love one another. As I have loved you, so you must love one another.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 13:34',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q109',
    text: 'Greater love has no one than this: to lay down one\'s life for one\'s friends.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 15:13',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q110',
    text: 'You are my friends if you do what I command you.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 15:14',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q111',
    text: 'The Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 14:26',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q112',
    text: 'I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'John 16:33',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John'
  },
  {
    id: 'q113',
    text: 'The harvest is plentiful, but the laborers are few.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 9:37',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q114',
    text: 'Whoever wants to become great among you must be your servant.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 20:26',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q115',
    text: 'The last will be first, and the first last.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 20:16',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q116',
    text: 'Render to Caesar the things that are Caesar\'s, and to God the things that are God\'s.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Mark 12:17',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Mark'
  },
  {
    id: 'q117',
    text: 'Love the Lord your God with all your heart and with all your soul and with all your mind.',
    speaker: 'Jesus',
    options: ['Jesus', 'Moses', 'David', 'Paul'],
    reference: 'Matthew 22:37',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q118',
    text: 'The Spirit is willing, but the flesh is weak.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 26:41',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q119',
    text: 'Not everyone who says to me, "Lord, Lord," will enter the kingdom of heaven.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Matthew 7:21',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew'
  },
  {
    id: 'q120',
    text: 'Fear not, for I have redeemed you; I have called you by name, you are mine.',
    speaker: 'God',
    options: ['God', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    reference: 'Isaiah 43:1',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q121',
    text: 'Behold, I am doing a new thing; now it springs forth, do you not perceive it?',
    speaker: 'God',
    options: ['God', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    reference: 'Isaiah 43:19',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q122',
    text: 'Comfort, comfort my people, says your God.',
    speaker: 'God',
    options: ['God', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    reference: 'Isaiah 40:1',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q123',
    text: 'Ho, everyone who thirsts, come to the waters.',
    speaker: 'Isaiah',
    options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    reference: 'Isaiah 55:1',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q124',
    text: 'Seek the Lord while he may be found; call upon him while he is near.',
    speaker: 'Isaiah',
    options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    reference: 'Isaiah 55:6',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q125',
    text: 'My thoughts are not your thoughts, neither are your ways my ways, declares the Lord.',
    speaker: 'God',
    options: ['God', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    reference: 'Isaiah 55:8',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q126',
    text: 'But they who wait for the Lord shall renew their strength.',
    speaker: 'Isaiah',
    options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    reference: 'Isaiah 40:31',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q127',
    text: 'I am the Lord, and there is no other.',
    speaker: 'God',
    options: ['God', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    reference: 'Isaiah 45:5',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q128',
    text: 'I have put my words in your mouth and covered you in the shadow of my hand.',
    speaker: 'God',
    options: ['God', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    reference: 'Isaiah 51:16',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah'
  },

  // ================================================================
  // SECTION 3: HARD QUESTIONS (70+)
  // ================================================================

  {
    id: 'q129',
    text: 'I have fought the good fight, I have finished the race, I have kept the faith.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'Timothy'],
    reference: '2 Timothy 4:7',
    difficulty: 'hard',
    category: 'epistles',
    book: '2 Timothy'
  },
  {
    id: 'q130',
    text: 'If I take the wings of the morning and dwell in the uttermost parts of the sea, even there your hand shall lead me.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 139:9-10',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q131',
    text: 'Shall not the Judge of all the earth do right?',
    speaker: 'Abraham',
    options: ['Abraham', 'Moses', 'Job', 'David'],
    reference: 'Genesis 18:25',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Genesis'
  },
  {
    id: 'q132',
    text: 'Woe is me! For I am lost; for I am a man of unclean lips.',
    speaker: 'Isaiah',
    options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    reference: 'Isaiah 6:5',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Isaiah'
  },
  {
    id: 'q133',
    text: 'Vanity of vanities, says the Preacher, vanity of vanities! All is vanity.',
    speaker: 'Solomon',
    options: ['Solomon', 'David', 'Job', 'Moses'],
    reference: 'Ecclesiastes 1:2',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Ecclesiastes'
  },
  {
    id: 'q134',
    text: 'Though he slay me, yet will I trust him.',
    speaker: 'Job',
    options: ['Job', 'David', 'Solomon', 'Moses'],
    reference: 'Job 13:15',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Job'
  },
  {
    id: 'q135',
    text: 'As for me, I know that my Redeemer lives, and at the last he will stand upon the earth.',
    speaker: 'Job',
    options: ['Job', 'David', 'Solomon', 'Moses'],
    reference: 'Job 19:25',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Job'
  },
  {
    id: 'q136',
    text: 'The Lord gave, and the Lord has taken away; blessed be the name of the Lord.',
    speaker: 'Job',
    options: ['Job', 'David', 'Solomon', 'Moses'],
    reference: 'Job 1:21',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Job'
  },
  {
    id: 'q137',
    text: 'Naked I came from my mother\'s womb, and naked I shall return there.',
    speaker: 'Job',
    options: ['Job', 'David', 'Solomon', 'Moses'],
    reference: 'Job 1:21',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Job'
  },
  {
    id: 'q138',
    text: 'Where were you when I laid the foundation of the earth?',
    speaker: 'God',
    options: ['God', 'Job', 'Moses', 'David'],
    reference: 'Job 38:4',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Job'
  },
  {
    id: 'q139',
    text: 'I had heard of you by the hearing of the ear, but now my eye sees you.',
    speaker: 'Job',
    options: ['Job', 'David', 'Solomon', 'Moses'],
    reference: 'Job 42:5',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Job'
  },
  {
    id: 'q140',
    text: 'To the one who conquers I will grant to eat of the tree of life.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Revelation 2:7',
    difficulty: 'hard',
    category: 'gospels',
    book: 'Revelation'
  },
  {
    id: 'q141',
    text: 'Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Revelation 3:20',
    difficulty: 'hard',
    category: 'gospels',
    book: 'Revelation'
  },
  {
    id: 'q142',
    text: 'Blessed are the dead who die in the Lord from now on.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Revelation 14:13',
    difficulty: 'hard',
    category: 'gospels',
    book: 'Revelation'
  },
  {
    id: 'q143',
    text: 'He who testifies to these things says, "Surely I am coming soon."',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Revelation 22:20',
    difficulty: 'hard',
    category: 'gospels',
    book: 'Revelation'
  },
  {
    id: 'q144',
    text: 'I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 8:18',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q145',
    text: 'For those who are led by the Spirit of God are the children of God.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 8:14',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q146',
    text: 'The Spirit himself testifies with our spirit that we are God\'s children.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 8:16',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q147',
    text: 'We are children of God, and if children, then heirs—heirs of God and fellow heirs with Christ.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 8:17',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q148',
    text: 'Who shall bring any charge against God\'s elect? It is God who justifies.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Romans 8:33',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans'
  },
  {
    id: 'q149',
    text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Galatians 2:20',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Galatians'
  },
  {
    id: 'q150',
    text: 'There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Galatians 3:28',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Galatians'
  },
  {
    id: 'q151',
    text: 'O death, where is your victory? O death, where is your sting?',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: '1 Corinthians 15:55',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Corinthians'
  },
  {
    id: 'q152',
    text: 'For now we see in a mirror dimly, but then face to face.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: '1 Corinthians 13:12',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Corinthians'
  },
  {
    id: 'q153',
    text: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Hebrews 11:1',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Hebrews'
  },
  {
    id: 'q154',
    text: 'Without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Hebrews 11:6',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Hebrews'
  },
  {
    id: 'q155',
    text: 'Let us hold fast the confession of our hope without wavering, for he who promised is faithful.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Hebrews 10:23',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Hebrews'
  },
  {
    id: 'q156',
    text: 'Let us consider how to stir up one another to love and good works.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Hebrews 10:24',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Hebrews'
  },
  {
    id: 'q157',
    text: 'The Lord is my helper; I will not fear; what can man do to me?',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Hebrews 13:6',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Hebrews'
  },
  {
    id: 'q158',
    text: 'Let brotherly love continue. Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.',
    speaker: 'Paul',
    options: ['Paul', 'Peter', 'John', 'James'],
    reference: 'Hebrews 13:1-2',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Hebrews'
  },
  {
    id: 'q159',
    text: 'You are a chosen race, a royal priesthood, a holy nation, a people for his own possession.',
    speaker: 'Peter',
    options: ['Peter', 'Paul', 'John', 'James'],
    reference: '1 Peter 2:9',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Peter'
  },
  {
    id: 'q160',
    text: 'The end of all things is at hand; therefore be self-controlled and sober-minded for the sake of your prayers.',
    speaker: 'Peter',
    options: ['Peter', 'Paul', 'John', 'James'],
    reference: '1 Peter 4:7',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Peter'
  },
  {
    id: 'q161',
    text: 'Above all, keep loving one another earnestly, since love covers a multitude of sins.',
    speaker: 'Peter',
    options: ['Peter', 'Paul', 'John', 'James'],
    reference: '1 Peter 4:8',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Peter'
  },
  {
    id: 'q162',
    text: 'God opposes the proud but gives grace to the humble.',
    speaker: 'Peter',
    options: ['Peter', 'Paul', 'John', 'James'],
    reference: '1 Peter 5:5',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Peter'
  },
  {
    id: 'q163',
    text: 'But do not overlook this one fact, beloved, that with the Lord one day is as a thousand years, and a thousand years as one day.',
    speaker: 'Peter',
    options: ['Peter', 'Paul', 'John', 'James'],
    reference: '2 Peter 3:8',
    difficulty: 'hard',
    category: 'epistles',
    book: '2 Peter'
  },
  {
    id: 'q164',
    text: 'The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you.',
    speaker: 'Peter',
    options: ['Peter', 'Paul', 'John', 'James'],
    reference: '2 Peter 3:9',
    difficulty: 'hard',
    category: 'epistles',
    book: '2 Peter'
  },
  {
    id: 'q165',
    text: 'If we say we have no sin, we deceive ourselves, and the truth is not in us.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 1:8',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q166',
    text: 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 1:9',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q167',
    text: 'Whoever says "I know him" but does not keep his commandments is a liar, and the truth is not in him.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 2:4',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q168',
    text: 'Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 2:15',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q169',
    text: 'The world is passing away along with its desires, but whoever does the will of God abides forever.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 2:17',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q170',
    text: 'No one born of God makes a practice of sinning, for God\'s seed abides in him.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 3:9',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q171',
    text: 'By this we know love, that he laid down his life for us, and we ought to lay down our lives for the brothers.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 3:16',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q172',
    text: 'Little children, let us not love in word or talk but in deed and in truth.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 3:18',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q173',
    text: 'Perfect love casts out fear.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 4:18',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q174',
    text: 'Everyone who believes that Jesus is the Christ has been born of God.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 5:1',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q175',
    text: 'This is the victory that has overcome the world—our faith.',
    speaker: 'John',
    options: ['John', 'Paul', 'Peter', 'James'],
    reference: '1 John 5:4',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John'
  },
  {
    id: 'q176',
    text: 'I will raise up for them a prophet like you from among their brothers.',
    speaker: 'Moses',
    options: ['Moses', 'God', 'David', 'Solomon'],
    reference: 'Deuteronomy 18:18',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Deuteronomy'
  },
  {
    id: 'q177',
    text: 'The Lord your God will raise up for you a prophet like me from among you, from your brothers—it is to him you shall listen.',
    speaker: 'Moses',
    options: ['Moses', 'God', 'David', 'Solomon'],
    reference: 'Deuteronomy 18:15',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Deuteronomy'
  },
  {
    id: 'q178',
    text: 'For he is not a God of the dead, but of the living, for all live to him.',
    speaker: 'Jesus',
    options: ['Jesus', 'John', 'Paul', 'Peter'],
    reference: 'Luke 20:38',
    difficulty: 'hard',
    category: 'gospels',
    book: 'Luke'
  },
  {
    id: 'q179',
    text: 'I am the God of Abraham, and the God of Isaac, and the God of Jacob.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 3:6',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q180',
    text: 'Thus you shall say to the people of Israel: "I AM has sent me to you."',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 3:14',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q181',
    text: 'You shall have no other gods before me.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 20:3',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q182',
    text: 'Remember the Sabbath day, to keep it holy.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 20:8',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q183',
    text: 'Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 20:12',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q184',
    text: 'You shall not murder.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 20:13',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q185',
    text: 'You shall not commit adultery.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 20:14',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q186',
    text: 'You shall not steal.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 20:15',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q187',
    text: 'You shall not bear false witness against your neighbor.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 20:16',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q188',
    text: 'You shall not covet your neighbor\'s house.',
    speaker: 'God',
    options: ['God', 'Moses', 'Jesus', 'David'],
    reference: 'Exodus 20:17',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus'
  },
  {
    id: 'q189',
    text: 'The Lord is King forever and ever.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 10:16',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q190',
    text: 'The Lord is my strength and my shield.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 28:7',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q191',
    text: 'Blessed is the nation whose God is the Lord.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 33:12',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q192',
    text: 'Our God is in the heavens; he does all that he pleases.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 115:3',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q193',
    text: 'The Lord remembers us and will bless us.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 115:12',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q194',
    text: 'The Lord is my portion; I promise to keep your words.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 119:57',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q195',
    text: 'Your word is a lamp to my feet and a light to my path.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 119:105',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q196',
    text: 'The entrance of your words gives light; it gives understanding to the simple.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 119:130',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q197',
    text: 'I praise you, for I am fearfully and wonderfully made.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 139:14',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q198',
    text: 'Search me, O God, and know my heart! Try me and know my thoughts!',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 139:23',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q199',
    text: 'Let the words of my mouth and the meditation of my heart be acceptable in your sight, O Lord, my rock and my redeemer.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 19:14',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  },
  {
    id: 'q200',
    text: 'The heavens declare the glory of God, and the sky above proclaims his handiwork.',
    speaker: 'David',
    options: ['David', 'Solomon', 'Moses', 'Abraham'],
    reference: 'Psalm 19:1',
    difficulty: 'hard',
    category: 'psalms-proverbs',
    book: 'Psalms'
  }
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

/**
 * Get questions by difficulty
 */
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): QuoteQuestion[] => {
  return whoSaidItQuestions.filter(q => q.difficulty === difficulty);
};

/**
 * Get questions by category
 */
export const getQuestionsByCategory = (category: string): QuoteQuestion[] => {
  return whoSaidItQuestions.filter(q => q.category === category);
};

/**
 * Get questions by book
 */
export const getQuestionsByBook = (book: string): QuoteQuestion[] => {
  return whoSaidItQuestions.filter(q => q.book === book);
};

/**
 * Get random questions
 */
export const getRandomQuestions = (count: number = 10, difficulty?: 'easy' | 'medium' | 'hard'): QuoteQuestion[] => {
  let pool = whoSaidItQuestions;
  if (difficulty) {
    pool = getQuestionsByDifficulty(difficulty);
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

/**
 * Get all unique categories
 */
export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  whoSaidItQuestions.forEach(q => {
    if (q.category) categories.add(q.category);
  });
  return Array.from(categories);
};

/**
 * Get all unique books
 */
export const getAllBooks = (): string[] => {
  const books = new Set<string>();
  whoSaidItQuestions.forEach(q => {
    if (q.book) books.add(q.book);
  });
  return Array.from(books);
};

/**
 * Get difficulty options
 */
export const getDifficultyOptions = (): { value: QuoteQuestion['difficulty']; label: string; count: number }[] => {
  const difficulties: QuoteQuestion['difficulty'][] = ['easy', 'medium', 'hard'];
  return difficulties.map(d => ({
    value: d,
    label: d.charAt(0).toUpperCase() + d.slice(1),
    count: getQuestionsByDifficulty(d).length
  }));
};

/**
 * Get statistics about the database
 */
export const getWhoSaidItStats = () => ({
  totalQuestions: whoSaidItQuestions.length,
  easy: getQuestionsByDifficulty('easy').length,
  medium: getQuestionsByDifficulty('medium').length,
  hard: getQuestionsByDifficulty('hard').length,
  categories: getAllCategories().reduce((acc, cat) => {
    acc[cat] = getQuestionsByCategory(cat).length;
    return acc;
  }, {} as Record<string, number>),
  books: getAllBooks().reduce((acc, book) => {
    acc[book] = getQuestionsByBook(book).length;
    return acc;
  }, {} as Record<string, number>)
});

// Original functions for backward compatibility
export const getWhoSaidItQuestions = (count: number = 10): QuoteQuestion[] => {
  return getRandomQuestions(count);
};

export const getDifficulty = (): { value: QuoteQuestion['difficulty']; label: string }[] => {
  return [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ];
};