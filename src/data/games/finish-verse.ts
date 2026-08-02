// src/data/games/finish-verse.ts

export interface FinishVerse {
  id: string;
  reference: string;
  fullVerse: string;
  missingWord: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  category: 'old-testament' | 'new-testament' | 'psalms' | 'proverbs' | 'gospels' | 'epistles' | 'prophets' | 'history';
  book?: string;
  theme?: string;
  hints?: string[];
}

export const finishVerseQuestions: FinishVerse[] = [
  // ================================================================
  // SECTION 1: EASY - 1 word missing (50 questions)
  // ================================================================
  
  // Gospels
  {
    id: 'fv1',
    reference: 'John 3:16',
    fullVerse: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    missingWord: 'loved',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Love',
    hints: ['This word is a verb', 'It describes God\'s feeling for the world', 'It starts with L']
  },
  {
    id: 'fv2',
    reference: 'John 11:35',
    fullVerse: 'Jesus wept.',
    missingWord: 'wept',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Compassion',
    hints: ['This word is a verb', 'It describes what Jesus did', 'It has 4 letters']
  },
  {
    id: 'fv3',
    reference: 'Matthew 28:6',
    fullVerse: 'He is not here; he has risen, just as he said! Come and see the place where he lay.',
    missingWord: 'risen',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Resurrection',
    hints: ['This word is a verb', 'It describes what Jesus did', 'It has 5 letters']
  },
  {
    id: 'fv4',
    reference: 'Luke 1:37',
    fullVerse: 'For nothing will be impossible with God.',
    missingWord: 'impossible',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Luke',
    theme: 'Power',
    hints: ['This word is an adjective', 'It means "not possible"', 'It has 10 letters']
  },
  {
    id: 'fv5',
    reference: 'John 14:6',
    fullVerse: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."',
    missingWord: 'truth',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Way',
    hints: ['This word is a noun', 'It\'s one of three things Jesus said he is', 'It starts with T']
  },
  {
    id: 'fv6',
    reference: 'Mark 10:45',
    fullVerse: 'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.',
    missingWord: 'serve',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Mark',
    theme: 'Service',
    hints: ['This word is a verb', 'It\'s what Jesus came to do', 'It has 5 letters']
  },
  {
    id: 'fv7',
    reference: 'John 10:11',
    fullVerse: 'I am the good shepherd. The good shepherd lays down his life for the sheep.',
    missingWord: 'shepherd',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Shepherd',
    hints: ['This word is a noun', 'It\'s what Jesus called himself', 'It has 8 letters']
  },
  {
    id: 'fv8',
    reference: 'Matthew 5:14',
    fullVerse: 'You are the light of the world. A town built on a hill cannot be hidden.',
    missingWord: 'light',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Light',
    hints: ['This word is a noun', 'Jesus said his followers are this', 'It has 5 letters']
  },
  {
    id: 'fv9',
    reference: 'Luke 19:10',
    fullVerse: 'For the Son of Man came to seek and to save the lost.',
    missingWord: 'seek',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Luke',
    theme: 'Salvation',
    hints: ['This word is a verb', 'It means to look for', 'It has 4 letters']
  },
  {
    id: 'fv10',
    reference: 'John 6:35',
    fullVerse: 'Then Jesus declared, "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty."',
    missingWord: 'bread',
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Bread of Life',
    hints: ['This word is a noun', 'Jesus said he is this', 'It has 5 letters']
  },

  // Psalms
  {
    id: 'fv11',
    reference: 'Psalm 23:1',
    fullVerse: 'The Lord is my shepherd; I shall not want.',
    missingWord: 'shepherd',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Shepherd',
    hints: ['This word is a noun', 'It describes what the Lord is', 'It has 8 letters']
  },
  {
    id: 'fv12',
    reference: 'Psalm 23:4',
    fullVerse: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
    missingWord: 'comfort',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Comfort',
    hints: ['This word is a verb', 'It means to console', 'It has 7 letters']
  },
  {
    id: 'fv13',
    reference: 'Psalm 27:1',
    fullVerse: 'The Lord is my light and my salvation— whom shall I fear?',
    missingWord: 'light',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Light',
    hints: ['This word is a noun', 'It\'s the opposite of darkness', 'It has 5 letters']
  },
  {
    id: 'fv14',
    reference: 'Psalm 46:10',
    fullVerse: 'Be still, and know that I am God; I will be exalted among the nations.',
    missingWord: 'still',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Peace',
    hints: ['This word is an adjective', 'It means calm', 'It has 5 letters']
  },
  {
    id: 'fv15',
    reference: 'Psalm 100:1',
    fullVerse: 'Shout for joy to the Lord, all the earth.',
    missingWord: 'Shout',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Worship',
    hints: ['This word is a verb', 'It means to call out loudly', 'It has 5 letters']
  },
  {
    id: 'fv16',
    reference: 'Psalm 119:11',
    fullVerse: 'I have hidden your word in my heart that I might not sin against you.',
    missingWord: 'hidden',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Scripture',
    hints: ['This word is a verb', 'It means to store secretly', 'It has 6 letters']
  },
  {
    id: 'fv17',
    reference: 'Psalm 34:8',
    fullVerse: 'Taste and see that the Lord is good; blessed is the one who takes refuge in him.',
    missingWord: 'good',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Goodness',
    hints: ['This word is an adjective', 'It means morally excellent', 'It has 4 letters']
  },
  {
    id: 'fv18',
    reference: 'Psalm 51:10',
    fullVerse: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
    missingWord: 'pure',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Repentance',
    hints: ['This word is an adjective', 'It means clean', 'It has 4 letters']
  },
  {
    id: 'fv19',
    reference: 'Psalm 121:1',
    fullVerse: 'I lift up my eyes to the mountains— where does my help come from?',
    missingWord: 'help',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Help',
    hints: ['This word is a noun', 'It means assistance', 'It has 4 letters']
  },
  {
    id: 'fv20',
    reference: 'Psalm 150:6',
    fullVerse: 'Let everything that has breath praise the Lord.',
    missingWord: 'praise',
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Worship',
    hints: ['This word is a verb', 'It means to worship', 'It has 6 letters']
  },

  // Epistles
  {
    id: 'fv21',
    reference: 'Philippians 4:13',
    fullVerse: 'I can do all things through him who strengthens me.',
    missingWord: 'strengthens',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Philippians',
    theme: 'Strength',
    hints: ['This word is a verb', 'It means to give power', 'It has 11 letters']
  },
  {
    id: 'fv22',
    reference: 'Romans 3:23',
    fullVerse: 'For all have sinned and fall short of the glory of God.',
    missingWord: 'sinned',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans',
    theme: 'Sin',
    hints: ['This word is a verb', 'It means to transgress', 'It has 6 letters']
  },
  {
    id: 'fv23',
    reference: 'Romans 6:23',
    fullVerse: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
    missingWord: 'gift',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans',
    theme: 'Salvation',
    hints: ['This word is a noun', 'It means something given freely', 'It has 4 letters']
  },
  {
    id: 'fv24',
    reference: 'Romans 8:1',
    fullVerse: 'Therefore, there is now no condemnation for those who are in Christ Jesus.',
    missingWord: 'condemnation',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans',
    theme: 'Freedom',
    hints: ['This word is a noun', 'It means judgment against', 'It has 12 letters']
  },
  {
    id: 'fv25',
    reference: '1 Corinthians 13:13',
    fullVerse: 'And now these three remain: faith, hope and love. But the greatest of these is love.',
    missingWord: 'faith',
    difficulty: 'easy',
    category: 'epistles',
    book: '1 Corinthians',
    theme: 'Love',
    hints: ['This word is a noun', 'It\'s one of the three that remain', 'It has 5 letters']
  },
  {
    id: 'fv26',
    reference: '2 Corinthians 5:17',
    fullVerse: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!',
    missingWord: 'creation',
    difficulty: 'easy',
    category: 'epistles',
    book: '2 Corinthians',
    theme: 'New Creation',
    hints: ['This word is a noun', 'It means something made new', 'It has 8 letters']
  },
  {
    id: 'fv27',
    reference: 'Galatians 5:22',
    fullVerse: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness.',
    missingWord: 'joy',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Galatians',
    theme: 'Fruit of the Spirit',
    hints: ['This word is a noun', 'It\'s one of the fruits of the Spirit', 'It has 3 letters']
  },
  {
    id: 'fv28',
    reference: 'Ephesians 2:8',
    fullVerse: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.',
    missingWord: 'grace',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Ephesians',
    theme: 'Grace',
    hints: ['This word is a noun', 'It means unmerited favor', 'It has 5 letters']
  },
  {
    id: 'fv29',
    reference: 'Philippians 4:4',
    fullVerse: 'Rejoice in the Lord always. I will say it again: Rejoice!',
    missingWord: 'Rejoice',
    difficulty: 'easy',
    category: 'epistles',
    book: 'Philippians',
    theme: 'Joy',
    hints: ['This word is a verb', 'It means to be glad', 'It has 7 letters']
  },
  {
    id: 'fv30',
    reference: '1 Thessalonians 5:17',
    fullVerse: 'pray continually,',
    missingWord: 'continually',
    difficulty: 'easy',
    category: 'epistles',
    book: '1 Thessalonians',
    theme: 'Prayer',
    hints: ['This word is an adverb', 'It means without stopping', 'It has 11 letters']
  },

  // Proverbs
  {
    id: 'fv31',
    reference: 'Proverbs 1:7',
    fullVerse: 'The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction.',
    missingWord: 'knowledge',
    difficulty: 'easy',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Wisdom',
    hints: ['This word is a noun', 'It means understanding', 'It has 9 letters']
  },
  {
    id: 'fv32',
    reference: 'Proverbs 3:5',
    fullVerse: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    missingWord: 'Trust',
    difficulty: 'easy',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Trust',
    hints: ['This word is a verb', 'It means to rely on', 'It has 5 letters']
  },
  {
    id: 'fv33',
    reference: 'Proverbs 9:10',
    fullVerse: 'The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.',
    missingWord: 'wisdom',
    difficulty: 'easy',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Wisdom',
    hints: ['This word is a noun', 'It means wise understanding', 'It has 6 letters']
  },
  {
    id: 'fv34',
    reference: 'Proverbs 16:9',
    fullVerse: 'In their hearts humans plan their course, but the Lord establishes their steps.',
    missingWord: 'establishes',
    difficulty: 'easy',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Guidance',
    hints: ['This word is a verb', 'It means to make firm', 'It has 12 letters']
  },
  {
    id: 'fv35',
    reference: 'Proverbs 27:17',
    fullVerse: 'As iron sharpens iron, so one person sharpens another.',
    missingWord: 'sharpens',
    difficulty: 'easy',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Friendship',
    hints: ['This word is a verb', 'It means to make sharp', 'It has 8 letters']
  },

  // Old Testament
  {
    id: 'fv36',
    reference: 'Genesis 1:1',
    fullVerse: 'In the beginning God created the heavens and the earth.',
    missingWord: 'created',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Genesis',
    theme: 'Creation',
    hints: ['This word is a verb', 'It means to make', 'It has 7 letters']
  },
  {
    id: 'fv37',
    reference: 'Exodus 20:3',
    fullVerse: 'You shall have no other gods before me.',
    missingWord: 'other',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Exodus',
    theme: 'Law',
    hints: ['This word is an adjective', 'It means different', 'It has 5 letters']
  },
  {
    id: 'fv38',
    reference: 'Joshua 1:9',
    fullVerse: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',
    missingWord: 'courageous',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Joshua',
    theme: 'Courage',
    hints: ['This word is an adjective', 'It means brave', 'It has 11 letters']
  },
  {
    id: 'fv39',
    reference: 'Ruth 1:16',
    fullVerse: 'But Ruth replied, "Don\'t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay."',
    missingWord: 'stay',
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Ruth',
    theme: 'Loyalty',
    hints: ['This word is a verb', 'It means to remain', 'It has 4 letters']
  },
  {
    id: 'fv40',
    reference: '1 Samuel 16:7',
    fullVerse: 'The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.',
    missingWord: 'heart',
    difficulty: 'easy',
    category: 'old-testament',
    book: '1 Samuel',
    theme: 'Character',
    hints: ['This word is a noun', 'It\'s what God looks at', 'It has 5 letters']
  },

  // Prophets
  {
    id: 'fv41',
    reference: 'Isaiah 40:8',
    fullVerse: 'The grass withers and the flowers fall, but the word of our God endures forever.',
    missingWord: 'endures',
    difficulty: 'easy',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Scripture',
    hints: ['This word is a verb', 'It means to last forever', 'It has 7 letters']
  },
  {
    id: 'fv42',
    reference: 'Jeremiah 29:11',
    fullVerse: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
    missingWord: 'plans',
    difficulty: 'easy',
    category: 'prophets',
    book: 'Jeremiah',
    theme: 'Hope',
    hints: ['This word is a noun', 'It means intentions', 'It has 5 letters']
  },
  {
    id: 'fv43',
    reference: 'Ezekiel 37:3',
    fullVerse: 'He asked me, "Son of man, can these bones live?" I said, "Sovereign Lord, you alone know."',
    missingWord: 'live',
    difficulty: 'easy',
    category: 'prophets',
    book: 'Ezekiel',
    theme: 'Restoration',
    hints: ['This word is a verb', 'It means to have life', 'It has 4 letters']
  },
  {
    id: 'fv44',
    reference: 'Daniel 6:22',
    fullVerse: 'My God sent his angel, and he shut the mouths of the lions. They have not hurt me, because I was found innocent in his sight.',
    missingWord: 'innocent',
    difficulty: 'easy',
    category: 'prophets',
    book: 'Daniel',
    theme: 'Deliverance',
    hints: ['This word is an adjective', 'It means not guilty', 'It has 8 letters']
  },
  {
    id: 'fv45',
    reference: 'Jonah 1:17',
    fullVerse: 'Now the Lord provided a huge fish to swallow Jonah, and Jonah was in the belly of the fish three days and three nights.',
    missingWord: 'swallow',
    difficulty: 'easy',
    category: 'prophets',
    book: 'Jonah',
    theme: 'Mercy',
    hints: ['This word is a verb', 'It means to take in', 'It has 7 letters']
  },

  // New Testament (continued)
  {
    id: 'fv46',
    reference: 'Matthew 4:4',
    fullVerse: 'Jesus answered, "It is written: \'Man shall not live on bread alone, but on every word that comes from the mouth of God.\'"',
    missingWord: 'bread',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Scripture',
    hints: ['This word is a noun', 'It represents physical food', 'It has 5 letters']
  },
  {
    id: 'fv47',
    reference: 'Matthew 6:33',
    fullVerse: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.',
    missingWord: 'seek',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Kingdom',
    hints: ['This word is a verb', 'It means to look for', 'It has 4 letters']
  },
  {
    id: 'fv48',
    reference: 'Mark 1:15',
    fullVerse: 'The time has come," he said. "The kingdom of God has come near. Repent and believe the good news!"',
    missingWord: 'Repent',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Mark',
    theme: 'Repentance',
    hints: ['This word is a verb', 'It means to turn from sin', 'It has 6 letters']
  },
  {
    id: 'fv49',
    reference: 'Luke 2:10',
    fullVerse: 'But the angel said to them, "Do not be afraid. I bring you good news that will cause great joy for all the people."',
    missingWord: 'afraid',
    difficulty: 'easy',
    category: 'gospels',
    book: 'Luke',
    theme: 'Peace',
    hints: ['This word is an adjective', 'It means scared', 'It has 6 letters']
  },
  {
    id: 'fv50',
    reference: 'Acts 1:8',
    fullVerse: 'But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.',
    missingWord: 'witnesses',
    difficulty: 'easy',
    category: 'new-testament',
    book: 'Acts',
    theme: 'Witness',
    hints: ['This word is a noun', 'It means those who testify', 'It has 9 letters']
  },

  // ================================================================
  // SECTION 2: MEDIUM - 2 words missing (50 questions)
  // ================================================================
  {
    id: 'fv51',
    reference: 'Jeremiah 29:11',
    fullVerse: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
    missingWord: 'plans',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Jeremiah',
    theme: 'Hope',
    hints: ['This word is a noun', 'God has these for you', 'It starts with P']
  },
  {
    id: 'fv52',
    reference: 'Romans 8:28',
    fullVerse: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    missingWord: 'works',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans',
    theme: 'Providence',
    hints: ['This word is a verb', 'God does this for our good', 'It starts with W']
  },
  {
    id: 'fv53',
    reference: 'Psalm 119:105',
    fullVerse: 'Your word is a lamp to my feet and a light to my path.',
    missingWord: 'lamp',
    difficulty: 'medium',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Scripture',
    hints: ['This word is a noun', 'It\'s a source of light', 'It starts with L']
  },
  {
    id: 'fv54',
    reference: '1 Corinthians 13:4',
    fullVerse: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud.',
    missingWord: 'kind',
    difficulty: 'medium',
    category: 'epistles',
    book: '1 Corinthians',
    theme: 'Love',
    hints: ['This word is an adjective', 'Love is this', 'It starts with K']
  },
  {
    id: 'fv55',
    reference: 'Matthew 5:16',
    fullVerse: 'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.',
    missingWord: 'shine',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Light',
    hints: ['This word is a verb', 'It means to give light', 'It starts with S']
  },
  {
    id: 'fv56',
    reference: 'Proverbs 3:5-6',
    fullVerse: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    missingWord: 'understanding',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Trust',
    hints: ['This word is a noun', 'It means comprehension', 'It starts with U']
  },
  {
    id: 'fv57',
    reference: 'Philippians 4:6',
    fullVerse: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
    missingWord: 'anxious',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Philippians',
    theme: 'Peace',
    hints: ['This word is an adjective', 'It means worried', 'It starts with A']
  },
  {
    id: 'fv58',
    reference: 'Matthew 22:37',
    fullVerse: 'Jesus replied: "Love the Lord your God with all your heart and with all your soul and with all your mind."',
    missingWord: 'soul',
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Love',
    hints: ['This word is a noun', 'It\'s part of the greatest commandment', 'It starts with S']
  },
  {
    id: 'fv59',
    reference: 'Psalm 23:6',
    fullVerse: 'Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the Lord forever.',
    missingWord: 'follow',
    difficulty: 'medium',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Goodness',
    hints: ['This word is a verb', 'It means to come after', 'It starts with F']
  },
  {
    id: 'fv60',
    reference: 'Romans 12:1',
    fullVerse: 'Therefore, I urge you, brothers and sisters, in view of God\'s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.',
    missingWord: 'mercy',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans',
    theme: 'Worship',
    hints: ['This word is a noun', 'It means compassion', 'It starts with M']
  },
  {
    id: 'fv61',
    reference: 'Galatians 5:22-23',
    fullVerse: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.',
    missingWord: 'patience',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Galatians',
    theme: 'Fruit of the Spirit',
    hints: ['This word is a noun', 'It\'s one of the fruits of the Spirit', 'It starts with P']
  },
  {
    id: 'fv62',
    reference: 'Ephesians 6:11',
    fullVerse: 'Put on the full armor of God, so that you can take your stand against the devil\'s schemes.',
    missingWord: 'armor',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Ephesians',
    theme: 'Armor of God',
    hints: ['This word is a noun', 'It\'s what protects you', 'It starts with A']
  },
  {
    id: 'fv63',
    reference: 'Isaiah 40:31',
    fullVerse: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    missingWord: 'renew',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Hope',
    hints: ['This word is a verb', 'It means to make new again', 'It starts with R']
  },
  {
    id: 'fv64',
    reference: '2 Corinthians 12:9',
    fullVerse: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ\'s power may rest on me.',
    missingWord: 'weakness',
    difficulty: 'medium',
    category: 'epistles',
    book: '2 Corinthians',
    theme: 'Grace',
    hints: ['This word is a noun', 'It\'s the opposite of strength', 'It starts with W']
  },
  {
    id: 'fv65',
    reference: 'Hebrews 11:1',
    fullVerse: 'Now faith is confidence in what we hope for and assurance about what we do not see.',
    missingWord: 'confidence',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Hebrews',
    theme: 'Faith',
    hints: ['This word is a noun', 'It means trust', 'It starts with C']
  },
  {
    id: 'fv66',
    reference: 'James 1:2',
    fullVerse: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds,',
    missingWord: 'trials',
    difficulty: 'medium',
    category: 'epistles',
    book: 'James',
    theme: 'Trials',
    hints: ['This word is a noun', 'It means difficulties', 'It starts with T']
  },
  {
    id: 'fv67',
    reference: '1 Peter 5:7',
    fullVerse: 'Cast all your anxiety on him because he cares for you.',
    missingWord: 'cares',
    difficulty: 'medium',
    category: 'epistles',
    book: '1 Peter',
    theme: 'Care',
    hints: ['This word is a verb', 'It means to look after', 'It starts with C']
  },
  {
    id: 'fv68',
    reference: '1 John 4:8',
    fullVerse: 'Whoever does not love does not know God, because God is love.',
    missingWord: 'love',
    difficulty: 'medium',
    category: 'epistles',
    book: '1 John',
    theme: 'Love',
    hints: ['This word is a noun', 'It\'s what God is', 'It starts with L']
  },
  {
    id: 'fv69',
    reference: 'Revelation 3:20',
    fullVerse: 'Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.',
    missingWord: 'knock',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Revelation',
    theme: 'Invitation',
    hints: ['This word is a verb', 'It means to tap on a door', 'It starts with K']
  },
  {
    id: 'fv70',
    reference: 'John 3:17',
    fullVerse: 'For God did not send his Son into the world to condemn the world, but to save the world through him.',
    missingWord: 'condemn',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John',
    theme: 'Salvation',
    hints: ['This word is a verb', 'It means to judge guilty', 'It starts with C']
  },
  {
    id: 'fv71',
    reference: 'John 8:12',
    fullVerse: 'When Jesus spoke again to the people, he said, "I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life."',
    missingWord: 'light',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John',
    theme: 'Light',
    hints: ['This word is a noun', 'Jesus said he is this', 'It starts with L']
  },
  {
    id: 'fv72',
    reference: 'John 15:5',
    fullVerse: 'I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.',
    missingWord: 'vine',
    difficulty: 'medium',
    category: 'gospels',
    book: 'John',
    theme: 'Vine',
    hints: ['This word is a noun', 'It\'s what Jesus called himself', 'It starts with V']
  },
  {
    id: 'fv73',
    reference: 'Acts 2:38',
    fullVerse: 'Peter replied, "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit."',
    missingWord: 'forgiveness',
    difficulty: 'medium',
    category: 'new-testament',
    book: 'Acts',
    theme: 'Repentance',
    hints: ['This word is a noun', 'It means pardon', 'It starts with F']
  },
  {
    id: 'fv74',
    reference: 'Romans 1:16',
    fullVerse: 'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes.',
    missingWord: 'ashamed',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans',
    theme: 'Gospel',
    hints: ['This word is an adjective', 'It means embarrassed', 'It starts with A']
  },
  {
    id: 'fv75',
    reference: '1 Corinthians 15:57',
    fullVerse: 'But thanks be to God! He gives us the victory through our Lord Jesus Christ.',
    missingWord: 'victory',
    difficulty: 'medium',
    category: 'epistles',
    book: '1 Corinthians',
    theme: 'Victory',
    hints: ['This word is a noun', 'It means triumph', 'It starts with V']
  },
  {
    id: 'fv76',
    reference: '2 Corinthians 5:21',
    fullVerse: 'God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.',
    missingWord: 'righteousness',
    difficulty: 'medium',
    category: 'epistles',
    book: '2 Corinthians',
    theme: 'Righteousness',
    hints: ['This word is a noun', 'It means being right with God', 'It starts with R']
  },
  {
    id: 'fv77',
    reference: 'Colossians 3:16',
    fullVerse: 'Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.',
    missingWord: 'dwell',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Colossians',
    theme: 'Scripture',
    hints: ['This word is a verb', 'It means to live in', 'It starts with D']
  },
  {
    id: 'fv78',
    reference: '2 Timothy 3:16',
    fullVerse: 'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness,',
    missingWord: 'teaching',
    difficulty: 'medium',
    category: 'epistles',
    book: '2 Timothy',
    theme: 'Scripture',
    hints: ['This word is a noun', 'It means instruction', 'It starts with T']
  },
  {
    id: 'fv79',
    reference: 'James 1:5',
    fullVerse: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.',
    missingWord: 'wisdom',
    difficulty: 'medium',
    category: 'epistles',
    book: 'James',
    theme: 'Wisdom',
    hints: ['This word is a noun', 'It means wise understanding', 'It starts with W']
  },
  {
    id: 'fv80',
    reference: '1 John 1:9',
    fullVerse: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
    missingWord: 'confess',
    difficulty: 'medium',
    category: 'epistles',
    book: '1 John',
    theme: 'Forgiveness',
    hints: ['This word is a verb', 'It means to admit', 'It starts with C']
  },
  {
    id: 'fv81',
    reference: 'Psalm 51:10',
    fullVerse: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
    missingWord: 'steadfast',
    difficulty: 'medium',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Repentance',
    hints: ['This word is an adjective', 'It means firm', 'It starts with S']
  },
  {
    id: 'fv82',
    reference: 'Psalm 34:18',
    fullVerse: 'The Lord is near to the brokenhearted and saves the crushed in spirit.',
    missingWord: 'brokenhearted',
    difficulty: 'medium',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Comfort',
    hints: ['This word is an adjective', 'It means sad', 'It starts with B']
  },
  {
    id: 'fv83',
    reference: 'Proverbs 18:10',
    fullVerse: 'The name of the Lord is a fortified tower; the righteous run to it and are safe.',
    missingWord: 'fortified',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Protection',
    hints: ['This word is an adjective', 'It means protected', 'It starts with F']
  },
  {
    id: 'fv84',
    reference: 'Isaiah 43:2',
    fullVerse: 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.',
    missingWord: 'waters',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Protection',
    hints: ['This word is a noun', 'It\'s what you pass through', 'It starts with W']
  },
  {
    id: 'fv85',
    reference: 'Jeremiah 31:3',
    fullVerse: 'The Lord appeared to us in the past, saying: "I have loved you with an everlasting love; I have drawn you with unfailing kindness."',
    missingWord: 'everlasting',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Jeremiah',
    theme: 'Love',
    hints: ['This word is an adjective', 'It means eternal', 'It starts with E']
  },
  {
    id: 'fv86',
    reference: 'Daniel 3:17',
    fullVerse: 'If we are thrown into the blazing furnace, the God we serve is able to deliver us from it, and he will rescue us from your hand, O king.',
    missingWord: 'furnace',
    difficulty: 'medium',
    category: 'prophets',
    book: 'Daniel',
    theme: 'Deliverance',
    hints: ['This word is a noun', 'It means a fiery oven', 'It starts with F']
  },
  {
    id: 'fv87',
    reference: 'Deuteronomy 31:6',
    fullVerse: 'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.',
    missingWord: 'forsake',
    difficulty: 'medium',
    category: 'old-testament',
    book: 'Deuteronomy',
    theme: 'Courage',
    hints: ['This word is a verb', 'It means to abandon', 'It starts with F']
  },
  {
    id: 'fv88',
    reference: 'Joshua 1:9',
    fullVerse: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',
    missingWord: 'commanded',
    difficulty: 'medium',
    category: 'old-testament',
    book: 'Joshua',
    theme: 'Courage',
    hints: ['This word is a verb', 'It means to order', 'It starts with C']
  },
  {
    id: 'fv89',
    reference: 'Esther 4:14',
    fullVerse: 'For if you remain silent at this time, relief and deliverance for the Jews will arise from another place, but you and your father\'s family will perish. And who knows but that you have come to your royal position for such a time as this?',
    missingWord: 'deliverance',
    difficulty: 'medium',
    category: 'old-testament',
    book: 'Esther',
    theme: 'Providence',
    hints: ['This word is a noun', 'It means rescue', 'It starts with D']
  },
  {
    id: 'fv90',
    reference: 'Psalm 27:14',
    fullVerse: 'Wait for the Lord; be strong and take heart and wait for the Lord.',
    missingWord: 'wait',
    difficulty: 'medium',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Patience',
    hints: ['This word is a verb', 'It means to be patient', 'It starts with W']
  },
  {
    id: 'fv91',
    reference: 'Psalm 37:4',
    fullVerse: 'Take delight in the Lord, and he will give you the desires of your heart.',
    missingWord: 'delight',
    difficulty: 'medium',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Joy',
    hints: ['This word is a verb', 'It means to enjoy greatly', 'It starts with D']
  },
  {
    id: 'fv92',
    reference: 'Proverbs 3:6',
    fullVerse: 'In all your ways submit to him, and he will make your paths straight.',
    missingWord: 'straight',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Guidance',
    hints: ['This word is an adjective', 'It means not crooked', 'It starts with S']
  },
  {
    id: 'fv93',
    reference: 'Proverbs 4:23',
    fullVerse: 'Above all else, guard your heart, for everything you do flows from it.',
    missingWord: 'guard',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Heart',
    hints: ['This word is a verb', 'It means to protect', 'It starts with G']
  },
  {
    id: 'fv94',
    reference: 'Proverbs 15:1',
    fullVerse: 'A gentle answer turns away wrath, but a harsh word stirs up anger.',
    missingWord: 'gentle',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Wisdom',
    hints: ['This word is an adjective', 'It means kind', 'It starts with G']
  },
  {
    id: 'fv95',
    reference: 'Proverbs 16:18',
    fullVerse: 'Pride goes before destruction, a haughty spirit before a fall.',
    missingWord: 'destruction',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Humility',
    hints: ['This word is a noun', 'It means ruin', 'It starts with D']
  },
  {
    id: 'fv96',
    reference: 'Proverbs 17:17',
    fullVerse: 'A friend loves at all times, and a brother is born for a time of adversity.',
    missingWord: 'adversity',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Friendship',
    hints: ['This word is a noun', 'It means difficulty', 'It starts with A']
  },
  {
    id: 'fv97',
    reference: 'Proverbs 18:24',
    fullVerse: 'One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.',
    missingWord: 'sticks',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Friendship',
    hints: ['This word is a verb', 'It means to stay close', 'It starts with S']
  },
  {
    id: 'fv98',
    reference: 'Proverbs 22:6',
    fullVerse: 'Start children off on the way they should go, and even when they are old they will not turn from it.',
    missingWord: 'Start',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Parenting',
    hints: ['This word is a verb', 'It means to begin', 'It starts with S']
  },
  {
    id: 'fv99',
    reference: 'Proverbs 31:30',
    fullVerse: 'Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised.',
    missingWord: 'fears',
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Wisdom',
    hints: ['This word is a verb', 'It means to revere', 'It starts with F']
  },
  {
    id: 'fv100',
    reference: 'Romans 12:12',
    fullVerse: 'Be joyful in hope, patient in affliction, faithful in prayer.',
    missingWord: 'affliction',
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans',
    theme: 'Perseverance',
    hints: ['This word is a noun', 'It means suffering', 'It starts with A']
  },

  // ================================================================
  // SECTION 3: HARD - 3 words missing (50 questions)
  // ================================================================
  {
    id: 'fv101',
    reference: 'Isaiah 40:31',
    fullVerse: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    missingWord: 'renew',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Hope',
    hints: ['This word is a verb', 'It means to make new', 'It starts with R']
  },
  {
    id: 'fv102',
    reference: 'Romans 12:2',
    fullVerse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is—his good, pleasing and perfect will.',
    missingWord: 'conform',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans',
    theme: 'Transformation',
    hints: ['This word is a verb', 'It means to fit in', 'It starts with C']
  },
  {
    id: 'fv103',
    reference: 'Psalm 27:1',
    fullVerse: 'The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?',
    missingWord: 'salvation',
    difficulty: 'hard',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Trust',
    hints: ['This word is a noun', 'It means deliverance', 'It starts with S']
  },
  {
    id: 'fv104',
    reference: 'Philippians 4:6',
    fullVerse: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
    missingWord: 'anxious',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Philippians',
    theme: 'Peace',
    hints: ['This word is an adjective', 'It means worried', 'It starts with A']
  },
  {
    id: 'fv105',
    reference: 'Proverbs 3:6',
    fullVerse: 'In all your ways submit to him, and he will make your paths straight.',
    missingWord: 'submit',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Trust',
    hints: ['This word is a verb', 'It means to yield', 'It starts with S']
  },
  {
    id: 'fv106',
    reference: 'Matthew 11:28',
    fullVerse: 'Come to me, all you who are weary and burdened, and I will give you rest.',
    missingWord: 'weary',
    difficulty: 'hard',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Rest',
    hints: ['This word is an adjective', 'It means tired', 'It starts with W']
  },
  {
    id: 'fv107',
    reference: 'John 1:1',
    fullVerse: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    missingWord: 'beginning',
    difficulty: 'hard',
    category: 'gospels',
    book: 'John',
    theme: 'Word',
    hints: ['This word is a noun', 'It means the start', 'It starts with B']
  },
  {
    id: 'fv108',
    reference: 'Acts 4:12',
    fullVerse: 'Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.',
    missingWord: 'Salvation',
    difficulty: 'hard',
    category: 'new-testament',
    book: 'Acts',
    theme: 'Salvation',
    hints: ['This word is a noun', 'It means deliverance', 'It starts with S']
  },
  {
    id: 'fv109',
    reference: 'Romans 5:8',
    fullVerse: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.',
    missingWord: 'sinners',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans',
    theme: 'Love',
    hints: ['This word is a noun', 'It means those who sin', 'It starts with S']
  },
  {
    id: 'fv110',
    reference: '1 Corinthians 13:4-5',
    fullVerse: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.',
    missingWord: 'patient',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Corinthians',
    theme: 'Love',
    hints: ['This word is an adjective', 'It means long-suffering', 'It starts with P']
  },
  {
    id: 'fv111',
    reference: 'Ephesians 2:8-9',
    fullVerse: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.',
    missingWord: 'boast',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Ephesians',
    theme: 'Grace',
    hints: ['This word is a verb', 'It means to brag', 'It starts with B']
  },
  {
    id: 'fv112',
    reference: 'Philippians 2:5-8',
    fullVerse: 'In your relationships with one another, have the same mindset as Christ Jesus: Who, being in very nature God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing by taking the very nature of a servant, being made in human likeness.',
    missingWord: 'servant',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Philippians',
    theme: 'Humility',
    hints: ['This word is a noun', 'It means one who serves', 'It starts with S']
  },
  {
    id: 'fv113',
    reference: 'Colossians 3:2',
    fullVerse: 'Set your minds on things above, not on earthly things.',
    missingWord: 'above',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Colossians',
    theme: 'Heavenly',
    hints: ['This word is a preposition', 'It means higher', 'It starts with A']
  },
  {
    id: 'fv114',
    reference: 'Hebrews 11:6',
    fullVerse: 'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
    missingWord: 'rewards',
    difficulty: 'hard',
    category: 'epistles',
    book: 'Hebrews',
    theme: 'Faith',
    hints: ['This word is a verb', 'It means to give a prize', 'It starts with R']
  },
  {
    id: 'fv115',
    reference: 'James 4:7',
    fullVerse: 'Submit yourselves, then, to God. Resist the devil, and he will flee from you.',
    missingWord: 'Resist',
    difficulty: 'hard',
    category: 'epistles',
    book: 'James',
    theme: 'Spiritual Warfare',
    hints: ['This word is a verb', 'It means to fight against', 'It starts with R']
  },
  {
    id: 'fv116',
    reference: '1 Peter 5:8',
    fullVerse: 'Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour.',
    missingWord: 'prowls',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Peter',
    theme: 'Spiritual Warfare',
    hints: ['This word is a verb', 'It means to move stealthily', 'It starts with P']
  },
  {
    id: 'fv117',
    reference: '2 Peter 3:9',
    fullVerse: 'The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.',
    missingWord: 'repentance',
    difficulty: 'hard',
    category: 'epistles',
    book: '2 Peter',
    theme: 'Patience',
    hints: ['This word is a noun', 'It means turning from sin', 'It starts with R']
  },
  {
    id: 'fv118',
    reference: '1 John 4:19',
    fullVerse: 'We love because he first loved us.',
    missingWord: 'love',
    difficulty: 'hard',
    category: 'epistles',
    book: '1 John',
    theme: 'Love',
    hints: ['This word is a verb', 'It means to have affection', 'It starts with L']
  },
  {
    id: 'fv119',
    reference: 'Revelation 21:4',
    fullVerse: 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.',
    missingWord: 'mourning',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Revelation',
    theme: 'Restoration',
    hints: ['This word is a noun', 'It means grieving', 'It starts with M']
  },
  {
    id: 'fv120',
    reference: 'Genesis 1:27',
    fullVerse: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.',
    missingWord: 'image',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Genesis',
    theme: 'Creation',
    hints: ['This word is a noun', 'It means likeness', 'It starts with I']
  },
  {
    id: 'fv121',
    reference: 'Exodus 20:12',
    fullVerse: 'Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.',
    missingWord: 'Honor',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Exodus',
    theme: 'Law',
    hints: ['This word is a verb', 'It means to respect', 'It starts with H']
  },
  {
    id: 'fv122',
    reference: 'Deuteronomy 6:5',
    fullVerse: 'Love the Lord your God with all your heart and with all your soul and with all your strength.',
    missingWord: 'strength',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Deuteronomy',
    theme: 'Love',
    hints: ['This word is a noun', 'It means power', 'It starts with S']
  },
  {
    id: 'fv123',
    reference: 'Ruth 2:12',
    fullVerse: 'May the Lord repay you for what you have done. May you be richly rewarded by the Lord, the God of Israel, under whose wings you have come to take refuge.',
    missingWord: 'refuge',
    difficulty: 'hard',
    category: 'old-testament',
    book: 'Ruth',
    theme: 'Protection',
    hints: ['This word is a noun', 'It means shelter', 'It starts with R']
  },
  {
    id: 'fv124',
    reference: '1 Samuel 16:7',
    fullVerse: 'The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.',
    missingWord: 'outward',
    difficulty: 'hard',
    category: 'old-testament',
    book: '1 Samuel',
    theme: 'Character',
    hints: ['This word is an adjective', 'It means external', 'It starts with O']
  },
  {
    id: 'fv125',
    reference: '1 Kings 3:9',
    fullVerse: 'Give your servant a discerning heart to govern your people and to distinguish between right and wrong. For who is able to govern this great people of yours?',
    missingWord: 'discerning',
    difficulty: 'hard',
    category: 'old-testament',
    book: '1 Kings',
    theme: 'Wisdom',
    hints: ['This word is an adjective', 'It means wise', 'It starts with D']
  },
  {
    id: 'fv126',
    reference: 'Psalm 34:8',
    fullVerse: 'Taste and see that the Lord is good; blessed is the one who takes refuge in him.',
    missingWord: 'refuge',
    difficulty: 'hard',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Goodness',
    hints: ['This word is a noun', 'It means shelter', 'It starts with R']
  },
  {
    id: 'fv127',
    reference: 'Psalm 51:10',
    fullVerse: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
    missingWord: 'steadfast',
    difficulty: 'hard',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Repentance',
    hints: ['This word is an adjective', 'It means firm', 'It starts with S']
  },
  {
    id: 'fv128',
    reference: 'Psalm 119:11',
    fullVerse: 'I have hidden your word in my heart that I might not sin against you.',
    missingWord: 'hidden',
    difficulty: 'hard',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Scripture',
    hints: ['This word is a verb', 'It means to store secretly', 'It starts with H']
  },
  {
    id: 'fv129',
    reference: 'Psalm 121:1',
    fullVerse: 'I lift up my eyes to the mountains— where does my help come from?',
    missingWord: 'mountains',
    difficulty: 'hard',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Help',
    hints: ['This word is a noun', 'It means high hills', 'It starts with M']
  },
  {
    id: 'fv130',
    reference: 'Psalm 139:14',
    fullVerse: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.',
    missingWord: 'wonderfully',
    difficulty: 'hard',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Creation',
    hints: ['This word is an adverb', 'It means amazingly', 'It starts with W']
  },
  {
    id: 'fv131',
    reference: 'Proverbs 1:7',
    fullVerse: 'The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction.',
    missingWord: 'despise',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Wisdom',
    hints: ['This word is a verb', 'It means to hate', 'It starts with D']
  },
  {
    id: 'fv132',
    reference: 'Proverbs 3:5',
    fullVerse: 'Trust in the Lord with all your heart and lean not on your own understanding;',
    missingWord: 'understanding',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Trust',
    hints: ['This word is a noun', 'It means comprehension', 'It starts with U']
  },
  {
    id: 'fv133',
    reference: 'Proverbs 3:6',
    fullVerse: 'In all your ways submit to him, and he will make your paths straight.',
    missingWord: 'straight',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Guidance',
    hints: ['This word is an adjective', 'It means not crooked', 'It starts with S']
  },
  {
    id: 'fv134',
    reference: 'Proverbs 9:10',
    fullVerse: 'The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.',
    missingWord: 'understanding',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Wisdom',
    hints: ['This word is a noun', 'It means comprehension', 'It starts with U']
  },
  {
    id: 'fv135',
    reference: 'Proverbs 11:2',
    fullVerse: 'When pride comes, then comes disgrace, but with humility comes wisdom.',
    missingWord: 'humility',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Humility',
    hints: ['This word is a noun', 'It means being humble', 'It starts with H']
  },
  {
    id: 'fv136',
    reference: 'Proverbs 15:1',
    fullVerse: 'A gentle answer turns away wrath, but a harsh word stirs up anger.',
    missingWord: 'gentle',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Wisdom',
    hints: ['This word is an adjective', 'It means kind', 'It starts with G']
  },
  {
    id: 'fv137',
    reference: 'Proverbs 16:18',
    fullVerse: 'Pride goes before destruction, a haughty spirit before a fall.',
    missingWord: 'haughty',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Humility',
    hints: ['This word is an adjective', 'It means arrogant', 'It starts with H']
  },
  {
    id: 'fv138',
    reference: 'Proverbs 17:17',
    fullVerse: 'A friend loves at all times, and a brother is born for a time of adversity.',
    missingWord: 'adversity',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Friendship',
    hints: ['This word is a noun', 'It means difficulty', 'It starts with A']
  },
  {
    id: 'fv139',
    reference: 'Proverbs 18:10',
    fullVerse: 'The name of the Lord is a fortified tower; the righteous run to it and are safe.',
    missingWord: 'fortified',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Protection',
    hints: ['This word is an adjective', 'It means protected', 'It starts with F']
  },
  {
    id: 'fv140',
    reference: 'Proverbs 18:24',
    fullVerse: 'One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.',
    missingWord: 'unreliable',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Friendship',
    hints: ['This word is an adjective', 'It means not trustworthy', 'It starts with U']
  },
  {
    id: 'fv141',
    reference: 'Proverbs 22:6',
    fullVerse: 'Start children off on the way they should go, and even when they are old they will not turn from it.',
    missingWord: 'Start',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Parenting',
    hints: ['This word is a verb', 'It means to begin', 'It starts with S']
  },
  {
    id: 'fv142',
    reference: 'Proverbs 27:17',
    fullVerse: 'As iron sharpens iron, so one person sharpens another.',
    missingWord: 'sharpens',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Friendship',
    hints: ['This word is a verb', 'It means to make sharp', 'It starts with S']
  },
  {
    id: 'fv143',
    reference: 'Proverbs 31:30',
    fullVerse: 'Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised.',
    missingWord: 'fleeting',
    difficulty: 'hard',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Wisdom',
    hints: ['This word is an adjective', 'It means temporary', 'It starts with F']
  },
  {
    id: 'fv144',
    reference: 'Isaiah 6:8',
    fullVerse: 'Then I heard the voice of the Lord saying, "Whom shall I send? And who will go for us?" And I said, "Here am I. Send me!"',
    missingWord: 'send',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Calling',
    hints: ['This word is a verb', 'It means to dispatch', 'It starts with S']
  },
  {
    id: 'fv145',
    reference: 'Isaiah 40:31',
    fullVerse: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    missingWord: 'soar',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Hope',
    hints: ['This word is a verb', 'It means to fly high', 'It starts with S']
  },
  {
    id: 'fv146',
    reference: 'Jeremiah 1:5',
    fullVerse: 'Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.',
    missingWord: 'appointed',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Jeremiah',
    theme: 'Calling',
    hints: ['This word is a verb', 'It means to assign', 'It starts with A']
  },
  {
    id: 'fv147',
    reference: 'Ezekiel 36:26',
    fullVerse: 'I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.',
    missingWord: 'remove',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Ezekiel',
    theme: 'Restoration',
    hints: ['This word is a verb', 'It means to take away', 'It starts with R']
  },
  {
    id: 'fv148',
    reference: 'Daniel 3:17-18',
    fullVerse: 'If we are thrown into the blazing furnace, the God we serve is able to deliver us from it, and he will rescue us from your hand, O king. But even if he does not, we want you to know, O king, that we will not serve your gods or worship the image of gold you have set up.',
    missingWord: 'deliver',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Daniel',
    theme: 'Faith',
    hints: ['This word is a verb', 'It means to rescue', 'It starts with D']
  },
  {
    id: 'fv149',
    reference: 'Jonah 2:9',
    fullVerse: 'But I, with shouts of grateful praise, will sacrifice to you. What I have vowed I will make good. Salvation comes from the Lord.',
    missingWord: 'Salvation',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Jonah',
    theme: 'Salvation',
    hints: ['This word is a noun', 'It means deliverance', 'It starts with S']
  },
  {
    id: 'fv150',
    reference: 'Micah 6:8',
    fullVerse: 'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.',
    missingWord: 'humbly',
    difficulty: 'hard',
    category: 'prophets',
    book: 'Micah',
    theme: 'Justice',
    hints: ['This word is an adverb', 'It means with humility', 'It starts with H']
  },

  // ================================================================
  // SECTION 4: EXPERT - 4+ words missing (50 questions)
  // ================================================================
  {
    id: 'fv151',
    reference: 'John 3:16',
    fullVerse: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    missingWord: 'believe',
    difficulty: 'expert',
    category: 'gospels',
    book: 'John',
    theme: 'Love',
    hints: ['This word is a verb', 'It means to trust in', 'It starts with B']
  },
  {
    id: 'fv152',
    reference: 'Romans 12:2',
    fullVerse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is—his good, pleasing and perfect will.',
    missingWord: 'transformed',
    difficulty: 'expert',
    category: 'epistles',
    book: 'Romans',
    theme: 'Transformation',
    hints: ['This word is a verb', 'It means changed', 'It starts with T']
  },
  {
    id: 'fv153',
    reference: 'Philippians 4:6-7',
    fullVerse: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
    missingWord: 'transcends',
    difficulty: 'expert',
    category: 'epistles',
    book: 'Philippians',
    theme: 'Peace',
    hints: ['This word is a verb', 'It means surpasses', 'It starts with T']
  },
  {
    id: 'fv154',
    reference: '1 Corinthians 13:4-7',
    fullVerse: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.',
    missingWord: 'perseveres',
    difficulty: 'expert',
    category: 'epistles',
    book: '1 Corinthians',
    theme: 'Love',
    hints: ['This word is a verb', 'It means endures', 'It starts with P']
  },
  {
    id: 'fv155',
    reference: 'Hebrews 11:1',
    fullVerse: 'Now faith is confidence in what we hope for and assurance about what we do not see.',
    missingWord: 'confidence',
    difficulty: 'expert',
    category: 'epistles',
    book: 'Hebrews',
    theme: 'Faith',
    hints: ['This word is a noun', 'It means trust', 'It starts with C']
  },
  {
    id: 'fv156',
    reference: 'James 1:2-4',
    fullVerse: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.',
    missingWord: 'perseverance',
    difficulty: 'expert',
    category: 'epistles',
    book: 'James',
    theme: 'Trials',
    hints: ['This word is a noun', 'It means endurance', 'It starts with P']
  },
  {
    id: 'fv157',
    reference: '1 Peter 5:7',
    fullVerse: 'Cast all your anxiety on him because he cares for you.',
    missingWord: 'anxiety',
    difficulty: 'expert',
    category: 'epistles',
    book: '1 Peter',
    theme: 'Care',
    hints: ['This word is a noun', 'It means worry', 'It starts with A']
  },
  {
    id: 'fv158',
    reference: 'Revelation 21:4',
    fullVerse: 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.',
    missingWord: 'mourning',
    difficulty: 'expert',
    category: 'prophets',
    book: 'Revelation',
    theme: 'Restoration',
    hints: ['This word is a noun', 'It means grieving', 'It starts with M']
  },
  {
    id: 'fv159',
    reference: 'Genesis 1:27',
    fullVerse: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.',
    missingWord: 'image',
    difficulty: 'expert',
    category: 'old-testament',
    book: 'Genesis',
    theme: 'Creation',
    hints: ['This word is a noun', 'It means likeness', 'It starts with I']
  },
  {
    id: 'fv160',
    reference: 'Exodus 20:12',
    fullVerse: 'Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.',
    missingWord: 'Honor',
    difficulty: 'expert',
    category: 'old-testament',
    book: 'Exodus',
    theme: 'Law',
    hints: ['This word is a verb', 'It means to respect', 'It starts with H']
  },
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getFinishVerse = (difficulty: FinishVerse['difficulty'] = 'medium'): FinishVerse[] => {
  const filtered = finishVerseQuestions.filter(q => q.difficulty === difficulty);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
};

export const getVerseByCategory = (category: string): FinishVerse[] => {
  return finishVerseQuestions.filter(q => q.category === category);
};

export const getVerseByBook = (book: string): FinishVerse[] => {
  return finishVerseQuestions.filter(q => q.book === book);
};

export const getVerseDifficulties = (): { value: string; label: string; words: string; count: number }[] => {
  return [
    { value: 'easy', label: 'Easy', words: '1 word missing', count: finishVerseQuestions.filter(q => q.difficulty === 'easy').length },
    { value: 'medium', label: 'Medium', words: '2 words missing', count: finishVerseQuestions.filter(q => q.difficulty === 'medium').length },
    { value: 'hard', label: 'Hard', words: '3 words missing', count: finishVerseQuestions.filter(q => q.difficulty === 'hard').length },
    { value: 'expert', label: 'Expert', words: '4+ words missing', count: finishVerseQuestions.filter(q => q.difficulty === 'expert').length }
  ];
};

export const getCategories = (): { value: string; label: string; count: number }[] => {
  const categories = ['old-testament', 'new-testament', 'psalms', 'proverbs', 'gospels', 'epistles', 'prophets', 'history'];
  return categories.map(cat => ({
    value: cat,
    label: cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    count: getVerseByCategory(cat).length
  }));
};

export const getAllBooks = (): string[] => {
  return [...new Set(finishVerseQuestions.map(q => q.book).filter(Boolean))];
};

export const getVerseStats = () => ({
  totalQuestions: finishVerseQuestions.length,
  difficulties: getVerseDifficulties().reduce((acc, d) => {
    acc[d.value] = d.count;
    return acc;
  }, {} as Record<string, number>),
  categories: getCategories().reduce((acc, cat) => {
    acc[cat.value] = cat.count;
    return acc;
  }, {} as Record<string, number>),
  books: getAllBooks().length
});