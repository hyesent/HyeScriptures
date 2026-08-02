// src/data/games/verse-puzzle.ts

export interface VersePuzzle {
  id: string;
  reference: string;
  verse: string;
  words: string[];
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  category: 'old-testament' | 'new-testament' | 'psalms' | 'proverbs' | 'gospels' | 'epistles' | 'prophets' | 'history';
  book?: string;
  theme?: string;
}

// ================================================================
// VERSE DATABASE - 100+ Verses
// ================================================================

export const versePuzzles: VersePuzzle[] = [
  // ================================================================
  // EASY (4-6 words)
  // ================================================================
  {
    id: 'vp001',
    reference: 'John 11:35',
    verse: 'Jesus wept.',
    words: ['Jesus', 'wept.'],
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Compassion'
  },
  {
    id: 'vp002',
    reference: 'Psalm 23:1',
    verse: 'The Lord is my shepherd; I shall not want.',
    words: ['The', 'Lord', 'is', 'my', 'shepherd;', 'I', 'shall', 'not', 'want.'],
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Shepherd'
  },
  {
    id: 'vp003',
    reference: 'Philippians 4:13',
    verse: 'I can do all things through him who strengthens me.',
    words: ['I', 'can', 'do', 'all', 'things', 'through', 'him', 'who', 'strengthens', 'me.'],
    difficulty: 'easy',
    category: 'epistles',
    book: 'Philippians',
    theme: 'Strength'
  },
  {
    id: 'vp004',
    reference: 'Psalm 119:105',
    verse: 'Your word is a lamp to my feet and a light to my path.',
    words: ['Your', 'word', 'is', 'a', 'lamp', 'to', 'my', 'feet', 'and', 'a', 'light', 'to', 'my', 'path.'],
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Scripture'
  },
  {
    id: 'vp005',
    reference: 'Joshua 1:9',
    verse: 'Be strong and courageous. Do not be afraid; do not be discouraged.',
    words: ['Be', 'strong', 'and', 'courageous.', 'Do', 'not', 'be', 'afraid;', 'do', 'not', 'be', 'discouraged.'],
    difficulty: 'easy',
    category: 'old-testament',
    book: 'Joshua',
    theme: 'Courage'
  },
  {
    id: 'vp006',
    reference: 'Psalm 34:8',
    verse: 'Taste and see that the Lord is good; blessed is the one who takes refuge in him.',
    words: ['Taste', 'and', 'see', 'that', 'the', 'Lord', 'is', 'good;', 'blessed', 'is', 'the', 'one', 'who', 'takes', 'refuge', 'in', 'him.'],
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Goodness'
  },
  {
    id: 'vp007',
    reference: 'Psalm 46:10',
    verse: 'Be still, and know that I am God; I will be exalted among the nations.',
    words: ['Be', 'still,', 'and', 'know', 'that', 'I', 'am', 'God;', 'I', 'will', 'be', 'exalted', 'among', 'the', 'nations.'],
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Peace'
  },
  {
    id: 'vp008',
    reference: 'Psalm 51:10',
    verse: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
    words: ['Create', 'in', 'me', 'a', 'pure', 'heart,', 'O', 'God,', 'and', 'renew', 'a', 'steadfast', 'spirit', 'within', 'me.'],
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Repentance'
  },
  {
    id: 'vp009',
    reference: 'Psalm 100:1-2',
    verse: 'Shout for joy to the Lord, all the earth. Worship the Lord with gladness; come into his presence with singing.',
    words: ['Shout', 'for', 'joy', 'to', 'the', 'Lord,', 'all', 'the', 'earth.', 'Worship', 'the', 'Lord', 'with', 'gladness;', 'come', 'into', 'his', 'presence', 'with', 'singing.'],
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Worship'
  },
  {
    id: 'vp010',
    reference: 'Psalm 119:11',
    verse: 'I have hidden your word in my heart that I might not sin against you.',
    words: ['I', 'have', 'hidden', 'your', 'word', 'in', 'my', 'heart', 'that', 'I', 'might', 'not', 'sin', 'against', 'you.'],
    difficulty: 'easy',
    category: 'psalms',
    book: 'Psalms',
    theme: 'Scripture'
  },
  {
    id: 'vp011',
    reference: 'Proverbs 16:9',
    verse: 'In their hearts humans plan their course, but the Lord establishes their steps.',
    words: ['In', 'their', 'hearts', 'humans', 'plan', 'their', 'course,', 'but', 'the', 'Lord', 'establishes', 'their', 'steps.'],
    difficulty: 'easy',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Guidance'
  },
  {
    id: 'vp012',
    reference: 'Proverbs 27:17',
    verse: 'As iron sharpens iron, so one person sharpens another.',
    words: ['As', 'iron', 'sharpens', 'iron,', 'so', 'one', 'person', 'sharpens', 'another.'],
    difficulty: 'easy',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Friendship'
  },
  {
    id: 'vp013',
    reference: 'Isaiah 40:8',
    verse: 'The grass withers and the flowers fall, but the word of our God endures forever.',
    words: ['The', 'grass', 'withers', 'and', 'the', 'flowers', 'fall,', 'but', 'the', 'word', 'of', 'our', 'God', 'endures', 'forever.'],
    difficulty: 'easy',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Scripture'
  },
  {
    id: 'vp014',
    reference: 'Luke 1:37',
    verse: 'For nothing will be impossible with God.',
    words: ['For', 'nothing', 'will', 'be', 'impossible', 'with', 'God.'],
    difficulty: 'easy',
    category: 'gospels',
    book: 'Luke',
    theme: 'Power'
  },
  {
    id: 'vp015',
    reference: 'Luke 19:10',
    verse: 'For the Son of Man came to seek and to save the lost.',
    words: ['For', 'the', 'Son', 'of', 'Man', 'came', 'to', 'seek', 'and', 'to', 'save', 'the', 'lost.'],
    difficulty: 'easy',
    category: 'gospels',
    book: 'Luke',
    theme: 'Salvation'
  },
  {
    id: 'vp016',
    reference: 'John 1:1',
    verse: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    words: ['In', 'the', 'beginning', 'was', 'the', 'Word,', 'and', 'the', 'Word', 'was', 'with', 'God,', 'and', 'the', 'Word', 'was', 'God.'],
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Word'
  },
  {
    id: 'vp017',
    reference: 'John 10:11',
    verse: 'I am the good shepherd. The good shepherd lays down his life for the sheep.',
    words: ['I', 'am', 'the', 'good', 'shepherd.', 'The', 'good', 'shepherd', 'lays', 'down', 'his', 'life', 'for', 'the', 'sheep.'],
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Shepherd'
  },
  {
    id: 'vp018',
    reference: 'John 14:6',
    verse: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."',
    words: ['Jesus', 'answered,', '"I', 'am', 'the', 'way', 'and', 'the', 'truth', 'and', 'the', 'life.', 'No', 'one', 'comes', 'to', 'the', 'Father', 'except', 'through', 'me."'],
    difficulty: 'easy',
    category: 'gospels',
    book: 'John',
    theme: 'Way'
  },
  {
    id: 'vp019',
    reference: 'Romans 3:23',
    verse: 'For all have sinned and fall short of the glory of God.',
    words: ['For', 'all', 'have', 'sinned', 'and', 'fall', 'short', 'of', 'the', 'glory', 'of', 'God.'],
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans',
    theme: 'Sin'
  },
  {
    id: 'vp020',
    reference: 'Romans 8:1',
    verse: 'Therefore, there is now no condemnation for those who are in Christ Jesus.',
    words: ['Therefore,', 'there', 'is', 'now', 'no', 'condemnation', 'for', 'those', 'who', 'are', 'in', 'Christ', 'Jesus.'],
    difficulty: 'easy',
    category: 'epistles',
    book: 'Romans',
    theme: 'Freedom'
  },
  {
    id: 'vp021',
    reference: '1 Corinthians 15:57-58',
    verse: 'But thanks be to God! He gives us the victory through our Lord Jesus Christ.',
    words: ['But', 'thanks', 'be', 'to', 'God!', 'He', 'gives', 'us', 'the', 'victory', 'through', 'our', 'Lord', 'Jesus', 'Christ.'],
    difficulty: 'easy',
    category: 'epistles',
    book: '1 Corinthians',
    theme: 'Victory'
  },
  {
    id: 'vp022',
    reference: 'Philippians 4:4',
    verse: 'Rejoice in the Lord always. I will say it again: Rejoice!',
    words: ['Rejoice', 'in', 'the', 'Lord', 'always.', 'I', 'will', 'say', 'it', 'again:', 'Rejoice!'],
    difficulty: 'easy',
    category: 'epistles',
    book: 'Philippians',
    theme: 'Joy'
  },
  {
    id: 'vp023',
    reference: '1 Thessalonians 5:16-18',
    verse: 'Rejoice always, pray continually, give thanks in all circumstances; for this is God\'s will for you in Christ Jesus.',
    words: ['Rejoice', 'always,', 'pray', 'continually,', 'give', 'thanks', 'in', 'all', 'circumstances;', 'for', 'this', 'is', "God's", 'will', 'for', 'you', 'in', 'Christ', 'Jesus.'],
    difficulty: 'easy',
    category: 'epistles',
    book: '1 Thessalonians',
    theme: 'Prayer'
  },
  {
    id: 'vp024',
    reference: '2 Timothy 4:7',
    verse: 'I have fought the good fight, I have finished the race, I have kept the faith.',
    words: ['I', 'have', 'fought', 'the', 'good', 'fight,', 'I', 'have', 'finished', 'the', 'race,', 'I', 'have', 'kept', 'the', 'faith.'],
    difficulty: 'easy',
    category: 'epistles',
    book: '2 Timothy',
    theme: 'Endurance'
  },
  {
    id: 'vp025',
    reference: 'Hebrews 11:1',
    verse: 'Now faith is confidence in what we hope for and assurance about what we do not see.',
    words: ['Now', 'faith', 'is', 'confidence', 'in', 'what', 'we', 'hope', 'for', 'and', 'assurance', 'about', 'what', 'we', 'do', 'not', 'see.'],
    difficulty: 'easy',
    category: 'epistles',
    book: 'Hebrews',
    theme: 'Faith'
  },
  {
    id: 'vp026',
    reference: 'James 2:26',
    verse: 'As the body without the spirit is dead, so faith without deeds is dead.',
    words: ['As', 'the', 'body', 'without', 'the', 'spirit', 'is', 'dead,', 'so', 'faith', 'without', 'deeds', 'is', 'dead.'],
    difficulty: 'easy',
    category: 'epistles',
    book: 'James',
    theme: 'Faith'
  },
  {
    id: 'vp027',
    reference: '1 Peter 5:7',
    verse: 'Cast all your anxiety on him because he cares for you.',
    words: ['Cast', 'all', 'your', 'anxiety', 'on', 'him', 'because', 'he', 'cares', 'for', 'you.'],
    difficulty: 'easy',
    category: 'epistles',
    book: '1 Peter',
    theme: 'Care'
  },
  {
    id: 'vp028',
    reference: '1 John 4:8',
    verse: 'Whoever does not love does not know God, because God is love.',
    words: ['Whoever', 'does', 'not', 'love', 'does', 'not', 'know', 'God,', 'because', 'God', 'is', 'love.'],
    difficulty: 'easy',
    category: 'epistles',
    book: '1 John',
    theme: 'Love'
  },
  {
    id: 'vp029',
    reference: '1 John 4:19',
    verse: 'We love because he first loved us.',
    words: ['We', 'love', 'because', 'he', 'first', 'loved', 'us.'],
    difficulty: 'easy',
    category: 'epistles',
    book: '1 John',
    theme: 'Love'
  },
  {
    id: 'vp030',
    reference: 'Revelation 22:20',
    verse: 'He who testifies to these things says, "Yes, I am coming soon." Amen. Come, Lord Jesus.',
    words: ['He', 'who', 'testifies', 'to', 'these', 'things', 'says,', '"Yes,', 'I', 'am', 'coming', 'soon."', 'Amen.', 'Come,', 'Lord', 'Jesus.'],
    difficulty: 'easy',
    category: 'prophets',
    book: 'Revelation',
    theme: 'Second Coming'
  },

  // ================================================================
  // MEDIUM (10-15 words)
  // ================================================================
  {
    id: 'vp031',
    reference: 'John 3:16',
    verse: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    words: ['For', 'God', 'so', 'loved', 'the', 'world', 'that', 'he', 'gave', 'his', 'one', 'and', 'only', 'Son,', 'that', 'whoever', 'believes', 'in', 'him', 'shall', 'not', 'perish', 'but', 'have', 'eternal', 'life.'],
    difficulty: 'medium',
    category: 'gospels',
    book: 'John',
    theme: 'Love'
  },
  {
    id: 'vp032',
    reference: 'Jeremiah 29:11',
    verse: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
    words: ['For', 'I', 'know', 'the', 'plans', 'I', 'have', 'for', 'you,', 'declares', 'the', 'Lord,', 'plans', 'to', 'prosper', 'you', 'and', 'not', 'to', 'harm', 'you,', 'plans', 'to', 'give', 'you', 'hope', 'and', 'a', 'future.'],
    difficulty: 'medium',
    category: 'old-testament',
    book: 'Jeremiah',
    theme: 'Hope'
  },
  {
    id: 'vp033',
    reference: 'Romans 8:28',
    verse: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    words: ['And', 'we', 'know', 'that', 'in', 'all', 'things', 'God', 'works', 'for', 'the', 'good', 'of', 'those', 'who', 'love', 'him,', 'who', 'have', 'been', 'called', 'according', 'to', 'his', 'purpose.'],
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans',
    theme: 'Providence'
  },
  {
    id: 'vp034',
    reference: 'Proverbs 3:5-6',
    verse: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    words: ['Trust', 'in', 'the', 'Lord', 'with', 'all', 'your', 'heart', 'and', 'lean', 'not', 'on', 'your', 'own', 'understanding;', 'in', 'all', 'your', 'ways', 'submit', 'to', 'him,', 'and', 'he', 'will', 'make', 'your', 'paths', 'straight.'],
    difficulty: 'medium',
    category: 'proverbs',
    book: 'Proverbs',
    theme: 'Trust'
  },
  {
    id: 'vp035',
    reference: 'Matthew 6:33',
    verse: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.',
    words: ['But', 'seek', 'first', 'his', 'kingdom', 'and', 'his', 'righteousness,', 'and', 'all', 'these', 'things', 'will', 'be', 'given', 'to', 'you', 'as', 'well.'],
    difficulty: 'medium',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Kingdom'
  },
  {
    id: 'vp036',
    reference: 'Mark 10:45',
    verse: 'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.',
    words: ['For', 'even', 'the', 'Son', 'of', 'Man', 'did', 'not', 'come', 'to', 'be', 'served,', 'but', 'to', 'serve,', 'and', 'to', 'give', 'his', 'life', 'as', 'a', 'ransom', 'for', 'many.'],
    difficulty: 'medium',
    category: 'gospels',
    book: 'Mark',
    theme: 'Service'
  },
  {
    id: 'vp037',
    reference: 'John 14:27',
    verse: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.',
    words: ['Peace', 'I', 'leave', 'with', 'you;', 'my', 'peace', 'I', 'give', 'you.', 'I', 'do', 'not', 'give', 'to', 'you', 'as', 'the', 'world', 'gives.', 'Do', 'not', 'let', 'your', 'hearts', 'be', 'troubled', 'and', 'do', 'not', 'be', 'afraid.'],
    difficulty: 'medium',
    category: 'gospels',
    book: 'John',
    theme: 'Peace'
  },
  {
    id: 'vp038',
    reference: 'John 15:5',
    verse: 'I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.',
    words: ['I', 'am', 'the', 'vine;', 'you', 'are', 'the', 'branches.', 'If', 'you', 'remain', 'in', 'me', 'and', 'I', 'in', 'you,', 'you', 'will', 'bear', 'much', 'fruit;', 'apart', 'from', 'me', 'you', 'can', 'do', 'nothing.'],
    difficulty: 'medium',
    category: 'gospels',
    book: 'John',
    theme: 'Vine'
  },
  {
    id: 'vp039',
    reference: 'Acts 4:12',
    verse: 'Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.',
    words: ['Salvation', 'is', 'found', 'in', 'no', 'one', 'else,', 'for', 'there', 'is', 'no', 'other', 'name', 'under', 'heaven', 'given', 'to', 'mankind', 'by', 'which', 'we', 'must', 'be', 'saved.'],
    difficulty: 'medium',
    category: 'new-testament',
    book: 'Acts',
    theme: 'Salvation'
  },
  {
    id: 'vp040',
    reference: 'Romans 5:8',
    verse: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.',
    words: ['But', 'God', 'demonstrates', 'his', 'own', 'love', 'for', 'us', 'in', 'this:', 'While', 'we', 'were', 'still', 'sinners,', 'Christ', 'died', 'for', 'us.'],
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans',
    theme: 'Love'
  },
  {
    id: 'vp041',
    reference: 'Romans 6:23',
    verse: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
    words: ['For', 'the', 'wages', 'of', 'sin', 'is', 'death,', 'but', 'the', 'gift', 'of', 'God', 'is', 'eternal', 'life', 'in', 'Christ', 'Jesus', 'our', 'Lord.'],
    difficulty: 'medium',
    category: 'epistles',
    book: 'Romans',
    theme: 'Salvation'
  },
  {
    id: 'vp042',
    reference: '2 Corinthians 5:17',
    verse: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!',
    words: ['Therefore,', 'if', 'anyone', 'is', 'in', 'Christ,', 'the', 'new', 'creation', 'has', 'come:', 'The', 'old', 'has', 'gone,', 'the', 'new', 'is', 'here!'],
    difficulty: 'medium',
    category: 'epistles',
    book: '2 Corinthians',
    theme: 'New Creation'
  },
  {
    id: 'vp043',
    reference: 'Galatians 5:22-23',
    verse: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.',
    words: ['But', 'the', 'fruit', 'of', 'the', 'Spirit', 'is', 'love,', 'joy,', 'peace,', 'patience,', 'kindness,', 'goodness,', 'faithfulness,', 'gentleness', 'and', 'self-control.', 'Against', 'such', 'things', 'there', 'is', 'no', 'law.'],
    difficulty: 'medium',
    category: 'epistles',
    book: 'Galatians',
    theme: 'Fruit of the Spirit'
  },
  {
    id: 'vp044',
    reference: 'Ephesians 2:8-9',
    verse: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.',
    words: ['For', 'it', 'is', 'by', 'grace', 'you', 'have', 'been', 'saved,', 'through', 'faith—and', 'this', 'is', 'not', 'from', 'yourselves,', 'it', 'is', 'the', 'gift', 'of', 'God—not', 'by', 'works,', 'so', 'that', 'no', 'one', 'can', 'boast.'],
    difficulty: 'medium',
    category: 'epistles',
    book: 'Ephesians',
    theme: 'Grace'
  },
  {
    id: 'vp045',
    reference: 'Ephesians 6:11',
    verse: 'Put on the full armor of God, so that you can take your stand against the devil\'s schemes.',
    words: ['Put', 'on', 'the', 'full', 'armor', 'of', 'God,', 'so', 'that', 'you', 'can', 'take', 'your', 'stand', 'against', "the", "devil's", 'schemes.'],
    difficulty: 'medium',
    category: 'epistles',
    book: 'Ephesians',
    theme: 'Armor of God'
  },
  {
    id: 'vp046',
    reference: 'Hebrews 11:6',
    verse: 'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
    words: ['And', 'without', 'faith', 'it', 'is', 'impossible', 'to', 'please', 'God,', 'because', 'anyone', 'who', 'comes', 'to', 'him', 'must', 'believe', 'that', 'he', 'exists', 'and', 'that', 'he', 'rewards', 'those', 'who', 'earnestly', 'seek', 'him.'],
    difficulty: 'medium',
    category: 'epistles',
    book: 'Hebrews',
    theme: 'Faith'
  },
  {
    id: 'vp047',
    reference: '1 Peter 2:9',
    verse: 'But you are a chosen people, a royal priesthood, a holy nation, God\'s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.',
    words: ['But', 'you', 'are', 'a', 'chosen', 'people,', 'a', 'royal', 'priesthood,', 'a', 'holy', 'nation,', "God's", 'special', 'possession,', 'that', 'you', 'may', 'declare', 'the', 'praises', 'of', 'him', 'who', 'called', 'you', 'out', 'of', 'darkness', 'into', 'his', 'wonderful', 'light.'],
    difficulty: 'medium',
    category: 'epistles',
    book: '1 Peter',
    theme: 'Identity'
  },
  {
    id: 'vp048',
    reference: '1 John 1:9',
    verse: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
    words: ['If', 'we', 'confess', 'our', 'sins,', 'he', 'is', 'faithful', 'and', 'just', 'and', 'will', 'forgive', 'us', 'our', 'sins', 'and', 'purify', 'us', 'from', 'all', 'unrighteousness.'],
    difficulty: 'medium',
    category: 'epistles',
    book: '1 John',
    theme: 'Forgiveness'
  },
  {
    id: 'vp049',
    reference: 'Revelation 3:20',
    verse: 'Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.',
    words: ['Here', 'I', 'am!', 'I', 'stand', 'at', 'the', 'door', 'and', 'knock.', 'If', 'anyone', 'hears', 'my', 'voice', 'and', 'opens', 'the', 'door,', 'I', 'will', 'come', 'in', 'and', 'eat', 'with', 'that', 'person,', 'and', 'they', 'with', 'me.'],
    difficulty: 'medium',
    category: 'prophets',
    book: 'Revelation',
    theme: 'Invitation'
  },

  // ================================================================
  // HARD (16-25 words)
  // ================================================================
  {
    id: 'vp050',
    reference: 'Isaiah 40:31',
    verse: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    words: ['But', 'those', 'who', 'hope', 'in', 'the', 'Lord', 'will', 'renew', 'their', 'strength.', 'They', 'will', 'soar', 'on', 'wings', 'like', 'eagles;', 'they', 'will', 'run', 'and', 'not', 'grow', 'weary,', 'they', 'will', 'walk', 'and', 'not', 'be', 'faint.'],
    difficulty: 'hard',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Hope'
  },
  {
    id: 'vp051',
    reference: 'Matthew 5:14-16',
    verse: 'You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house.',
    words: ['You', 'are', 'the', 'light', 'of', 'the', 'world.', 'A', 'town', 'built', 'on', 'a', 'hill', 'cannot', 'be', 'hidden.', 'Neither', 'do', 'people', 'light', 'a', 'lamp', 'and', 'put', 'it', 'under', 'a', 'bowl.', 'Instead', 'they', 'put', 'it', 'on', 'its', 'stand,', 'and', 'it', 'gives', 'light', 'to', 'everyone', 'in', 'the', 'house.'],
    difficulty: 'hard',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Light'
  },
  {
    id: 'vp052',
    reference: 'Matthew 11:28-29',
    verse: 'Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.',
    words: ['Come', 'to', 'me,', 'all', 'you', 'who', 'are', 'weary', 'and', 'burdened,', 'and', 'I', 'will', 'give', 'you', 'rest.', 'Take', 'my', 'yoke', 'upon', 'you', 'and', 'learn', 'from', 'me,', 'for', 'I', 'am', 'gentle', 'and', 'humble', 'in', 'heart,', 'and', 'you', 'will', 'find', 'rest', 'for', 'your', 'souls.'],
    difficulty: 'hard',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Rest'
  },
  {
    id: 'vp053',
    reference: 'Matthew 22:37-39',
    verse: 'Jesus replied: "Love the Lord your God with all your heart and with all your soul and with all your mind." This is the first and greatest commandment. And the second is like it: "Love your neighbor as yourself."',
    words: ['Jesus', 'replied:', '"Love', 'the', 'Lord', 'your', 'God', 'with', 'all', 'your', 'heart', 'and', 'with', 'all', 'your', 'soul', 'and', 'with', 'all', 'your', 'mind."', 'This', 'is', 'the', 'first', 'and', 'greatest', 'commandment.', 'And', 'the', 'second', 'is', 'like', 'it:', '"Love', 'your', 'neighbor', 'as', 'yourself."'],
    difficulty: 'hard',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Love'
  },
  {
    id: 'vp054',
    reference: 'John 1:14',
    verse: 'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.',
    words: ['The', 'Word', 'became', 'flesh', 'and', 'made', 'his', 'dwelling', 'among', 'us.', 'We', 'have', 'seen', 'his', 'glory,', 'the', 'glory', 'of', 'the', 'one', 'and', 'only', 'Son,', 'who', 'came', 'from', 'the', 'Father,', 'full', 'of', 'grace', 'and', 'truth.'],
    difficulty: 'hard',
    category: 'gospels',
    book: 'John',
    theme: 'Incarnation'
  },
  {
    id: 'vp055',
    reference: 'John 15:13',
    verse: 'Greater love has no one than this: to lay down one\'s life for one\'s friends.',
    words: ['Greater', 'love', 'has', 'no', 'one', 'than', 'this:', 'to', 'lay', 'down', "one's", 'life', 'for', "one's", 'friends.'],
    difficulty: 'hard',
    category: 'gospels',
    book: 'John',
    theme: 'Love'
  },
  {
    id: 'vp056',
    reference: 'Romans 1:16',
    verse: 'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.',
    words: ['For', 'I', 'am', 'not', 'ashamed', 'of', 'the', 'gospel,', 'because', 'it', 'is', 'the', 'power', 'of', 'God', 'that', 'brings', 'salvation', 'to', 'everyone', 'who', 'believes:', 'first', 'to', 'the', 'Jew,', 'then', 'to', 'the', 'Gentile.'],
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans',
    theme: 'Gospel'
  },
  {
    id: 'vp057',
    reference: 'Romans 8:38-39',
    verse: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    words: ['For', 'I', 'am', 'convinced', 'that', 'neither', 'death', 'nor', 'life,', 'neither', 'angels', 'nor', 'demons,', 'neither', 'the', 'present', 'nor', 'the', 'future,', 'nor', 'any', 'powers,', 'neither', 'height', 'nor', 'depth,', 'nor', 'anything', 'else', 'in', 'all', 'creation,', 'will', 'be', 'able', 'to', 'separate', 'us', 'from', 'the', 'love', 'of', 'God', 'that', 'is', 'in', 'Christ', 'Jesus', 'our', 'Lord.'],
    difficulty: 'hard',
    category: 'epistles',
    book: 'Romans',
    theme: 'Love'
  },
  {
    id: 'vp058',
    reference: '1 Corinthians 13:4-5',
    verse: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.',
    words: ['Love', 'is', 'patient,', 'love', 'is', 'kind.', 'It', 'does', 'not', 'envy,', 'it', 'does', 'not', 'boast,', 'it', 'is', 'not', 'proud.', 'It', 'does', 'not', 'dishonor', 'others,', 'it', 'is', 'not', 'self-seeking,', 'it', 'is', 'not', 'easily', 'angered,', 'it', 'keeps', 'no', 'record', 'of', 'wrongs.'],
    difficulty: 'hard',
    category: 'epistles',
    book: '1 Corinthians',
    theme: 'Love'
  },
  {
    id: 'vp059',
    reference: '2 Corinthians 12:9',
    verse: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ\'s power may rest on me.',
    words: ['But', 'he', 'said', 'to', 'me,', '"My', 'grace', 'is', 'sufficient', 'for', 'you,', 'for', 'my', 'power', 'is', 'made', 'perfect', 'in', 'weakness."', 'Therefore', 'I', 'will', 'boast', 'all', 'the', 'more', 'gladly', 'about', 'my', 'weaknesses,', 'so', 'that', "Christ's", 'power', 'may', 'rest', 'on', 'me.'],
    difficulty: 'hard',
    category: 'epistles',
    book: '2 Corinthians',
    theme: 'Grace'
  },

  // ================================================================
  // EXPERT (26+ words)
  // ================================================================
  {
    id: 'vp060',
    reference: 'Genesis 1:1',
    verse: 'In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.',
    words: ['In', 'the', 'beginning', 'God', 'created', 'the', 'heavens', 'and', 'the', 'earth.', 'Now', 'the', 'earth', 'was', 'formless', 'and', 'empty,', 'darkness', 'was', 'over', 'the', 'surface', 'of', 'the', 'deep,', 'and', 'the', 'Spirit', 'of', 'God', 'was', 'hovering', 'over', 'the', 'waters.'],
    difficulty: 'expert',
    category: 'old-testament',
    book: 'Genesis',
    theme: 'Creation'
  },
  {
    id: 'vp061',
    reference: 'Exodus 20:2-3',
    verse: 'I am the Lord your God, who brought you out of Egypt, out of the land of slavery. You shall have no other gods before me.',
    words: ['I', 'am', 'the', 'Lord', 'your', 'God,', 'who', 'brought', 'you', 'out', 'of', 'Egypt,', 'out', 'of', 'the', 'land', 'of', 'slavery.', 'You', 'shall', 'have', 'no', 'other', 'gods', 'before', 'me.'],
    difficulty: 'expert',
    category: 'old-testament',
    book: 'Exodus',
    theme: 'Law'
  },
  {
    id: 'vp062',
    reference: 'Isaiah 53:4-5',
    verse: 'Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.',
    words: ['Surely', 'he', 'took', 'up', 'our', 'pain', 'and', 'bore', 'our', 'suffering,', 'yet', 'we', 'considered', 'him', 'punished', 'by', 'God,', 'stricken', 'by', 'him,', 'and', 'afflicted.', 'But', 'he', 'was', 'pierced', 'for', 'our', 'transgressions,', 'he', 'was', 'crushed', 'for', 'our', 'iniquities;', 'the', 'punishment', 'that', 'brought', 'us', 'peace', 'was', 'on', 'him,', 'and', 'by', 'his', 'wounds', 'we', 'are', 'healed.'],
    difficulty: 'expert',
    category: 'prophets',
    book: 'Isaiah',
    theme: 'Atonement'
  },
  {
    id: 'vp063',
    reference: 'Matthew 28:19-20',
    verse: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.',
    words: ['Therefore', 'go', 'and', 'make', 'disciples', 'of', 'all', 'nations,', 'baptizing', 'them', 'in', 'the', 'name', 'of', 'the', 'Father', 'and', 'of', 'the', 'Son', 'and', 'of', 'the', 'Holy', 'Spirit,', 'and', 'teaching', 'them', 'to', 'obey', 'everything', 'I', 'have', 'commanded', 'you.', 'And', 'surely', 'I', 'am', 'with', 'you', 'always,', 'to', 'the', 'very', 'end', 'of', 'the', 'age.'],
    difficulty: 'expert',
    category: 'gospels',
    book: 'Matthew',
    theme: 'Great Commission'
  },
  {
    id: 'vp064',
    reference: 'John 14:1-3',
    verse: 'Do not let your hearts be troubled. You believe in God; believe also in me. My Father\'s house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am.',
    words: ['Do', 'not', 'let', 'your', 'hearts', 'be', 'troubled.', 'You', 'believe', 'in', 'God;', 'believe', 'also', 'in', 'me.', "My", "Father's", 'house', 'has', 'many', 'rooms;', 'if', 'that', 'were', 'not', 'so,', 'would', 'I', 'have', 'told', 'you', 'that', 'I', 'am', 'going', 'there', 'to', 'prepare', 'a', 'place', 'for', 'you?', 'And', 'if', 'I', 'go', 'and', 'prepare', 'a', 'place', 'for', 'you,', 'I', 'will', 'come', 'back', 'and', 'take', 'you', 'to', 'be', 'with', 'me', 'that', 'you', 'also', 'may', 'be', 'where', 'I', 'am.'],
    difficulty: 'expert',
    category: 'gospels',
    book: 'John',
    theme: 'Promise'
  },
  {
    id: 'vp065',
    reference: 'Romans 12:2',
    verse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is—his good, pleasing and perfect will.',
    words: ['Do', 'not', 'conform', 'to', 'the', 'pattern', 'of', 'this', 'world,', 'but', 'be', 'transformed', 'by', 'the', 'renewing', 'of', 'your', 'mind.', 'Then', 'you', 'will', 'be', 'able', 'to', 'test', 'and', 'approve', 'what', "God's", 'will', 'is—his', 'good,', 'pleasing', 'and', 'perfect', 'will.'],
    difficulty: 'expert',
    category: 'epistles',
    book: 'Romans',
    theme: 'Transformation'
  },
  {
    id: 'vp066',
    reference: '1 Corinthians 13:4-7',
    verse: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.',
    words: ['Love', 'is', 'patient,', 'love', 'is', 'kind.', 'It', 'does', 'not', 'envy,', 'it', 'does', 'not', 'boast,', 'it', 'is', 'not', 'proud.', 'It', 'does', 'not', 'dishonor', 'others,', 'it', 'is', 'not', 'self-seeking,', 'it', 'is', 'not', 'easily', 'angered,', 'it', 'keeps', 'no', 'record', 'of', 'wrongs.', 'Love', 'does', 'not', 'delight', 'in', 'evil', 'but', 'rejoices', 'with', 'the', 'truth.', 'It', 'always', 'protects,', 'always', 'trusts,', 'always', 'hopes,', 'always', 'perseveres.'],
    difficulty: 'expert',
    category: 'epistles',
    book: '1 Corinthians',
    theme: 'Love'
  },
  {
    id: 'vp067',
    reference: 'Galatians 2:20',
    verse: 'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.',
    words: ['I', 'have', 'been', 'crucified', 'with', 'Christ', 'and', 'I', 'no', 'longer', 'live,', 'but', 'Christ', 'lives', 'in', 'me.', 'The', 'life', 'I', 'now', 'live', 'in', 'the', 'body,', 'I', 'live', 'by', 'faith', 'in', 'the', 'Son', 'of', 'God,', 'who', 'loved', 'me', 'and', 'gave', 'himself', 'for', 'me.'],
    difficulty: 'expert',
    category: 'epistles',
    book: 'Galatians',
    theme: 'Crucified with Christ'
  },
  {
    id: 'vp068',
    reference: 'Colossians 3:16',
    verse: 'Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.',
    words: ['Let', 'the', 'message', 'of', 'Christ', 'dwell', 'among', 'you', 'richly', 'as', 'you', 'teach', 'and', 'admonish', 'one', 'another', 'with', 'all', 'wisdom', 'through', 'psalms,', 'hymns,', 'and', 'songs', 'from', 'the', 'Spirit,', 'singing', 'to', 'God', 'with', 'gratitude', 'in', 'your', 'hearts.'],
    difficulty: 'expert',
    category: 'epistles',
    book: 'Colossians',
    theme: 'Scripture'
  },
  {
    id: 'vp069',
    reference: '2 Timothy 3:16-17',
    verse: 'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.',
    words: ['All', 'Scripture', 'is', 'God-breathed', 'and', 'is', 'useful', 'for', 'teaching,', 'rebuking,', 'correcting', 'and', 'training', 'in', 'righteousness,', 'so', 'that', 'the', 'servant', 'of', 'God', 'may', 'be', 'thoroughly', 'equipped', 'for', 'every', 'good', 'work.'],
    difficulty: 'expert',
    category: 'epistles',
    book: '2 Timothy',
    theme: 'Scripture'
  },
  {
    id: 'vp070',
    reference: 'James 1:2-4',
    verse: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.',
    words: ['Consider', 'it', 'pure', 'joy,', 'my', 'brothers', 'and', 'sisters,', 'whenever', 'you', 'face', 'trials', 'of', 'many', 'kinds,', 'because', 'you', 'know', 'that', 'the', 'testing', 'of', 'your', 'faith', 'produces', 'perseverance.', 'Let', 'perseverance', 'finish', 'its', 'work', 'so', 'that', 'you', 'may', 'be', 'mature', 'and', 'complete,', 'not', 'lacking', 'anything.'],
    difficulty: 'expert',
    category: 'epistles',
    book: 'James',
    theme: 'Trials'
  },
  {
    id: 'vp071',
    reference: 'Revelation 21:4',
    verse: 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.',
    words: ['He', 'will', 'wipe', 'every', 'tear', 'from', 'their', 'eyes.', 'There', 'will', 'be', 'no', 'more', 'death', 'or', 'mourning', 'or', 'crying', 'or', 'pain,', 'for', 'the', 'old', 'order', 'of', 'things', 'has', 'passed', 'away.'],
    difficulty: 'expert',
    category: 'prophets',
    book: 'Revelation',
    theme: 'Restoration'
  }
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getVersePuzzle = (difficulty?: VersePuzzle['difficulty']): VersePuzzle => {
  let filtered = versePuzzles;
  if (difficulty) {
    filtered = versePuzzles.filter(p => p.difficulty === difficulty);
  }
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled[0] || versePuzzles[0];
};

export const getRandomVersePuzzles = (count: number = 10): VersePuzzle[] => {
  const shuffled = [...versePuzzles].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getPuzzleCategories = (): { value: string; label: string; count: number }[] => {
  const categories = ['old-testament', 'new-testament', 'psalms', 'proverbs', 'gospels', 'epistles', 'prophets', 'history'];
  return categories.map(cat => ({
    value: cat,
    label: cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    count: versePuzzles.filter(p => p.category === cat).length
  }));
};

export const getPuzzleDifficulties = (): { value: VersePuzzle['difficulty']; label: string; words: string }[] => {
  return [
    { value: 'easy', label: 'Easy', words: '4-6' },
    { value: 'medium', label: 'Medium', words: '10-15' },
    { value: 'hard', label: 'Hard', words: '16-25' },
    { value: 'expert', label: 'Expert', words: '26+' }
  ];
};