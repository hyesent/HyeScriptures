// src/data/games/first-mentions.ts

// ================================================================
// TYPE DEFINITIONS (MUST BE AT THE TOP)
// ================================================================

export type FirstMentionCategory = 
  | 'theology'
  | 'creation'
  | 'covenant'
  | 'sin'
  | 'salvation'
  | 'worship'
  | 'relationships'
  | 'prophecy'
  | 'law'
  | 'promise'
  | 'judgment'
  | 'grace'
  | 'names'
  | 'places'
  | 'events'
  | 'objects'
  | 'animals'
  | 'food'
  | 'clothing'
  | 'numbers'
  | 'colors'
  | 'months'
  | 'instruments'
  | 'titles'
  | 'symbols'

export interface FirstMention {
  id: string
  word: string
  reference: string
  description: string
  category: FirstMentionCategory
  context: string
  significance: string
  relatedReferences: string[]
  icon: string
}

// ================================================================
// FIRST MENTIONS DATA - 150+ Entries
// ================================================================

export const firstMentions: FirstMention[] = [
  // ================================================================
  // SECTION 1: THEOLOGY (15 entries)
  // ================================================================
  {
    id: 'fm-001',
    word: 'God (Elohim)',
    reference: 'Genesis 1:1',
    description: 'The first mention of God in Scripture, establishing Him as the Creator',
    category: 'theology',
    context: 'The very first verse of the Bible introduces God as the Creator of the heavens and the earth.',
    significance: 'Establishes God as the primary subject of Scripture and the source of all existence.',
    relatedReferences: ['John 1:1-3', 'Colossians 1:16-17', 'Hebrews 11:3'],
    icon: '✝️'
  },
  {
    id: 'fm-002',
    word: 'Holy',
    reference: 'Exodus 3:5',
    description: 'The first mention of holiness, connected to God\'s presence',
    category: 'theology',
    context: 'God tells Moses to remove his sandals because he is standing on holy ground.',
    significance: 'Establishes holiness as separation from the ordinary and connection to God\'s presence.',
    relatedReferences: ['Isaiah 6:3', '1 Peter 1:15-16', 'Leviticus 19:2'],
    icon: '🔥'
  },
  {
    id: 'fm-003',
    word: 'Righteousness',
    reference: 'Genesis 15:6',
    description: 'First mention of righteousness, connected to faith',
    category: 'theology',
    context: 'Abraham believed God and it was counted to him as righteousness.',
    significance: 'Establishes that righteousness comes through faith, not works.',
    relatedReferences: ['Romans 4:3-5', 'Galatians 3:6', 'James 2:23'],
    icon: '⚖️'
  },
  {
    id: 'fm-004',
    word: 'Glory',
    reference: 'Exodus 16:7',
    description: 'First mention of God\'s glory, connected to His presence',
    category: 'theology',
    context: 'God promises to show His glory to Israel in the wilderness.',
    significance: 'Glory represents God\'s manifest presence and weighty importance.',
    relatedReferences: ['Exodus 33:18-23', 'John 1:14', '2 Corinthians 3:18'],
    icon: '✨'
  },
  {
    id: 'fm-005',
    word: 'Grace',
    reference: 'Genesis 6:8',
    description: 'First mention of grace, connected to Noah',
    category: 'theology',
    context: 'Noah found grace in the eyes of the Lord.',
    significance: 'Grace is God\'s undeserved favor, shown to Noah before the flood.',
    relatedReferences: ['Ephesians 2:8-9', 'Romans 3:24', 'Titus 2:11'],
    icon: '💝'
  },
  {
    id: 'fm-006',
    word: 'Faith',
    reference: 'Deuteronomy 32:20',
    description: 'First mention of faith, connected to Israel\'s unfaithfulness',
    category: 'theology',
    context: 'God says He will hide His face from Israel because they are a faithless generation.',
    significance: 'Faith is trust and reliance on God, contrasted with unfaithfulness.',
    relatedReferences: ['Habakkuk 2:4', 'Romans 1:17', 'Hebrews 11:1'],
    icon: '🛡️'
  },
  {
    id: 'fm-007',
    word: 'Love (God\'s)',
    reference: 'Deuteronomy 4:37',
    description: 'First mention of God\'s love for His people',
    category: 'theology',
    context: 'God loved the patriarchs and chose their descendants after them.',
    significance: 'God\'s love is the foundation of His covenant relationship with Israel.',
    relatedReferences: ['Jeremiah 31:3', 'John 3:16', 'Romans 5:8'],
    icon: '💖'
  },
  {
    id: 'fm-008',
    word: 'Mercy',
    reference: 'Genesis 19:16',
    description: 'First mention of mercy, with Lot',
    category: 'theology',
    context: 'The angels showed mercy to Lot and pulled him back into the house.',
    significance: 'Mercy is God\'s compassion and withholding of deserved judgment.',
    relatedReferences: ['Psalm 103:8-13', 'Ephesians 2:4-5', 'Titus 3:4-5'],
    icon: '🤲'
  },
  {
    id: 'fm-009',
    word: 'Eternal',
    reference: 'Genesis 21:33',
    description: 'First mention of eternal, connected to God',
    category: 'theology',
    context: 'Abraham calls on the name of the Lord, the Eternal God.',
    significance: 'Establishes that God is eternal, without beginning or end.',
    relatedReferences: ['Psalm 90:2', 'Isaiah 40:28', '1 Timothy 1:17'],
    icon: '♾️'
  },
  {
    id: 'fm-010',
    word: 'Spirit',
    reference: 'Genesis 1:2',
    description: 'First mention of the Spirit of God',
    category: 'theology',
    context: 'The Spirit of God was hovering over the waters at creation.',
    significance: 'The Spirit is active in creation and God\'s work in the world.',
    relatedReferences: ['Psalm 51:11', 'Isaiah 63:10', 'Ezekiel 36:26-27'],
    icon: '🕊️'
  },
  {
    id: 'fm-011',
    word: 'Word',
    reference: 'Genesis 15:1',
    description: 'First mention of the word of the Lord',
    category: 'theology',
    context: 'The word of the Lord came to Abraham in a vision.',
    significance: 'God\'s word is a means of divine revelation and communication.',
    relatedReferences: ['Psalm 33:6', 'Isaiah 55:11', 'John 1:1'],
    icon: '📖'
  },
  {
    id: 'fm-012',
    word: 'Angel',
    reference: 'Genesis 16:7',
    description: 'First mention of an angel of the Lord',
    category: 'theology',
    context: 'The angel of the Lord finds Hagar in the wilderness.',
    significance: 'Angels are messengers of God who deliver His word and protection.',
    relatedReferences: ['Genesis 19:1', 'Luke 1:11-20', 'Hebrews 1:14'],
    icon: '👼'
  },
  {
    id: 'fm-013',
    word: 'Sovereign',
    reference: 'Genesis 15:2',
    description: 'First mention of God as Sovereign Lord',
    category: 'theology',
    context: 'Abraham calls God "Sovereign Lord" in his prayer.',
    significance: 'Establishes God\'s sovereignty and authority over all things.',
    relatedReferences: ['Isaiah 6:1', 'Daniel 4:34-35', 'Revelation 4:11'],
    icon: '👑'
  },
  {
    id: 'fm-014',
    word: 'Jealous',
    reference: 'Exodus 20:5',
    description: 'First mention of God\'s jealousy',
    category: 'theology',
    context: 'God says He is a jealous God, punishing idolatry.',
    significance: 'God\'s jealousy is His passionate commitment to His own honor and His people.',
    relatedReferences: ['Exodus 34:14', 'Deuteronomy 4:24', 'Nahum 1:2'],
    icon: '🔥'
  },
  {
    id: 'fm-015',
    word: 'Compassion',
    reference: 'Deuteronomy 32:36',
    description: 'First mention of God\'s compassion',
    category: 'theology',
    context: 'God will judge His people but also have compassion on them.',
    significance: 'Compassion is God\'s tender mercy and care for His people.',
    relatedReferences: ['Psalm 103:13', 'Isaiah 49:13', 'Lamentations 3:22-23'],
    icon: '💗'
  },

  // ================================================================
  // SECTION 2: CREATION (15 entries)
  // ================================================================
  {
    id: 'fm-016',
    word: 'Create',
    reference: 'Genesis 1:1',
    description: 'First mention of creation, establishing God as Creator',
    category: 'creation',
    context: 'In the beginning God created the heavens and the earth.',
    significance: 'Establishes that all things have a beginning and come from God.',
    relatedReferences: ['Psalm 33:6', 'Isaiah 40:26', 'John 1:3'],
    icon: '🌍'
  },
  {
    id: 'fm-017',
    word: 'Light',
    reference: 'Genesis 1:3',
    description: 'First mention of light, God\'s first creative act',
    category: 'creation',
    context: 'God said, "Let there be light" and there was light.',
    significance: 'Light symbolizes life, truth, and God\'s creative power.',
    relatedReferences: ['John 8:12', '2 Corinthians 4:6', '1 John 1:5'],
    icon: '💡'
  },
  {
    id: 'fm-018',
    word: 'Darkness',
    reference: 'Genesis 1:2',
    description: 'First mention of darkness, before light was created',
    category: 'creation',
    context: 'Darkness was over the surface of the deep before God said "Let there be light."',
    significance: 'Darkness represents chaos and the absence of God\'s light.',
    relatedReferences: ['Exodus 10:21-23', 'Psalm 139:11-12', 'Matthew 27:45'],
    icon: '🌑'
  },
  {
    id: 'fm-019',
    word: 'Day',
    reference: 'Genesis 1:5',
    description: 'First mention of day, the first day of creation',
    category: 'creation',
    context: 'God called the light day and the darkness night.',
    significance: 'The day is the period of light, established at creation.',
    relatedReferences: ['Psalm 118:24', 'Matthew 6:34', 'John 11:9-10'],
    icon: '☀️'
  },
  {
    id: 'fm-020',
    word: 'Night',
    reference: 'Genesis 1:5',
    description: 'First mention of night, the period of darkness',
    category: 'creation',
    context: 'God called the darkness night.',
    significance: 'Night is the period of rest and darkness, established at creation.',
    relatedReferences: ['Psalm 16:7', 'Psalm 139:11-12', 'John 9:4'],
    icon: '🌙'
  },
  {
    id: 'fm-021',
    word: 'Sky (Firmament)',
    reference: 'Genesis 1:6-8',
    description: 'First mention of the sky, separating waters above and below',
    category: 'creation',
    context: 'God made the firmament to separate the waters above from the waters below.',
    significance: 'The sky is God\'s creation, establishing order in the cosmos.',
    relatedReferences: ['Psalm 19:1', 'Isaiah 40:22', 'Revelation 19:11'],
    icon: '🌤️'
  },
  {
    id: 'fm-022',
    word: 'Land (Earth)',
    reference: 'Genesis 1:9',
    description: 'First mention of land, separated from the waters',
    category: 'creation',
    context: 'God gathered the waters and let dry land appear.',
    significance: 'Land is the foundation of all life on earth.',
    relatedReferences: ['Psalm 24:1', 'Isaiah 6:3', 'Matthew 5:5'],
    icon: '🌎'
  },
  {
    id: 'fm-023',
    word: 'Sea',
    reference: 'Genesis 1:10',
    description: 'First mention of the sea, gathered waters',
    category: 'creation',
    context: 'God called the gathered waters "seas."',
    significance: 'The sea is a place of mystery and God\'s power.',
    relatedReferences: ['Psalm 104:25-26', 'Jonah 1:4-17', 'Revelation 21:1'],
    icon: '🌊'
  },
  {
    id: 'fm-024',
    word: 'Plant',
    reference: 'Genesis 1:11-12',
    description: 'First mention of plants, vegetation',
    category: 'creation',
    context: 'God commanded the earth to produce vegetation.',
    significance: 'Plants are God\'s provision for food and life on earth.',
    relatedReferences: ['Psalm 104:14-16', 'Isaiah 55:12-13', 'Matthew 6:30'],
    icon: '🌿'
  },
  {
    id: 'fm-025',
    word: 'Tree',
    reference: 'Genesis 1:11-12',
    description: 'First mention of trees, yielding fruit',
    category: 'creation',
    context: 'God created trees that bear fruit with seed in them.',
    significance: 'Trees are a symbol of life, provision, and blessing.',
    relatedReferences: ['Genesis 2:9', 'Psalm 1:3', 'Revelation 22:2'],
    icon: '🌳'
  },
  {
    id: 'fm-026',
    word: 'Fruit',
    reference: 'Genesis 1:11-12',
    description: 'First mention of fruit, the product of trees',
    category: 'creation',
    context: 'Trees bearing fruit with seed in them were created.',
    significance: 'Fruit represents the abundance and provision of God.',
    relatedReferences: ['Psalm 1:3', 'John 15:2', 'Galatians 5:22-23'],
    icon: '🍎'
  },
  {
    id: 'fm-027',
    word: 'Seed',
    reference: 'Genesis 1:11-12',
    description: 'First mention of seed, for reproduction',
    category: 'creation',
    context: 'Plants and trees were created with seeds for reproduction.',
    significance: 'Seed represents potential and the continuation of life.',
    relatedReferences: ['Genesis 22:18', 'Galatians 3:16', '1 Peter 1:23'],
    icon: '🌱'
  },
  {
    id: 'fm-028',
    word: 'Sun',
    reference: 'Genesis 1:14-18',
    description: 'First mention of the sun, the greater light',
    category: 'creation',
    context: 'God made the greater light to rule the day.',
    significance: 'The sun is a source of light and life, created by God.',
    relatedReferences: ['Psalm 84:11', 'Joshua 10:12-14', 'Malachi 4:2'],
    icon: '☀️'
  },
  {
    id: 'fm-029',
    word: 'Moon',
    reference: 'Genesis 1:14-18',
    description: 'First mention of the moon, the lesser light',
    category: 'creation',
    context: 'God made the lesser light to rule the night.',
    significance: 'The moon reflects the sun\'s light and governs the night.',
    relatedReferences: ['Psalm 8:3', 'Psalm 121:6', 'Revelation 21:23'],
    icon: '🌙'
  },
  {
    id: 'fm-030',
    word: 'Stars',
    reference: 'Genesis 1:14-18',
    description: 'First mention of stars, created by God',
    category: 'creation',
    context: 'God made the stars also, to give light on the earth.',
    significance: 'Stars display God\'s creative power and majesty.',
    relatedReferences: ['Psalm 147:4', 'Job 38:31-33', 'Daniel 12:3'],
    icon: '⭐'
  },

  // ================================================================
  // SECTION 3: NAMES (15 entries)
  // ================================================================
  {
    id: 'fm-031',
    word: 'Adam',
    reference: 'Genesis 2:19',
    description: 'First mention of Adam as a personal name',
    category: 'names',
    context: 'Adam named all the animals as God brought them to him.',
    significance: 'Adam is the first man and the representative of humanity.',
    relatedReferences: ['Romans 5:12-21', '1 Corinthians 15:22-45', 'Genesis 5:1-5'],
    icon: '👤'
  },
  {
    id: 'fm-032',
    word: 'Eve',
    reference: 'Genesis 3:20',
    description: 'First mention of Eve, the mother of all living',
    category: 'names',
    context: 'Adam called his wife Eve because she would become the mother of all the living.',
    significance: 'Eve is the first woman and the mother of all humanity.',
    relatedReferences: ['Genesis 4:1-2', '2 Corinthians 11:3', '1 Timothy 2:13-14'],
    icon: '👩'
  },
  {
    id: 'fm-033',
    word: 'Cain',
    reference: 'Genesis 4:1',
    description: 'First mention of Cain, the firstborn son',
    category: 'names',
    context: 'Eve gave birth to Cain and said, "With the help of the Lord I have brought forth a man."',
    significance: 'Cain is the firstborn, who later kills his brother Abel.',
    relatedReferences: ['Genesis 4:8-16', 'Hebrews 11:4', '1 John 3:12'],
    icon: '👦'
  },
  {
    id: 'fm-034',
    word: 'Abel',
    reference: 'Genesis 4:2',
    description: 'First mention of Abel, the second son',
    category: 'names',
    context: 'Eve gave birth to Abel, who became a shepherd.',
    significance: 'Abel is the first martyr, killed by his brother Cain.',
    relatedReferences: ['Matthew 23:35', 'Hebrews 11:4', 'Genesis 4:8-10'],
    icon: '🐑'
  },
  {
    id: 'fm-035',
    word: 'Noah',
    reference: 'Genesis 5:29',
    description: 'First mention of Noah, the builder of the ark',
    category: 'names',
    context: 'Lamech named his son Noah, saying he would comfort them in their work.',
    significance: 'Noah found favor with God and built the ark to save his family.',
    relatedReferences: ['Genesis 6-9', 'Hebrews 11:7', '1 Peter 3:20-21'],
    icon: '⛵'
  },
  {
    id: 'fm-036',
    word: 'Abraham',
    reference: 'Genesis 17:5',
    description: 'First mention of Abraham, the father of nations',
    category: 'names',
    context: 'God changed Abram\'s name to Abraham, meaning "father of many nations."',
    significance: 'Abraham is the father of the Jewish nation and the model of faith.',
    relatedReferences: ['Genesis 12:1-3', 'Romans 4:1-25', 'Galatians 3:6-9'],
    icon: '👴'
  },
  {
    id: 'fm-037',
    word: 'Sarah',
    reference: 'Genesis 17:15',
    description: 'First mention of Sarah, the mother of nations',
    category: 'names',
    context: 'God changed Sarai\'s name to Sarah, promising she would be the mother of nations.',
    significance: 'Sarah is the wife of Abraham and the mother of Isaac.',
    relatedReferences: ['Genesis 18:9-15', 'Romans 4:19-21', 'Hebrews 11:11'],
    icon: '👩'
  },
  {
    id: 'fm-038',
    word: 'Isaac',
    reference: 'Genesis 17:19',
    description: 'First mention of Isaac, the son of promise',
    category: 'names',
    context: 'God promised Abraham that Sarah would bear a son named Isaac.',
    significance: 'Isaac is the child of promise and a type of Christ.',
    relatedReferences: ['Genesis 22:1-14', 'Romans 9:6-9', 'Galatians 4:28'],
    icon: '🙏'
  },
  {
    id: 'fm-039',
    word: 'Jacob',
    reference: 'Genesis 25:26',
    description: 'First mention of Jacob, the supplanter',
    category: 'names',
    context: 'Jacob was born holding the heel of Esau.',
    significance: 'Jacob becomes Israel, the father of the twelve tribes.',
    relatedReferences: ['Genesis 32:22-32', 'Romans 9:10-13', 'Hosea 12:2-4'],
    icon: '🤼'
  },
  {
    id: 'fm-040',
    word: 'Israel',
    reference: 'Genesis 32:28',
    description: 'First mention of Israel, Jacob\'s new name',
    category: 'names',
    context: 'Jacob was renamed Israel after wrestling with God.',
    significance: 'Israel becomes the name of God\'s chosen people.',
    relatedReferences: ['Genesis 35:10-12', 'Romans 11:1-36', 'Philippians 3:3'],
    icon: '🇮🇱'
  },
  {
    id: 'fm-041',
    word: 'Joseph',
    reference: 'Genesis 30:24',
    description: 'First mention of Joseph, the favored son',
    category: 'names',
    context: 'Rachel named her son Joseph, saying, "May the Lord add to me another son."',
    significance: 'Joseph is the favored son who becomes a ruler in Egypt.',
    relatedReferences: ['Genesis 37-50', 'Psalm 105:17-22', 'Acts 7:9-16'],
    icon: '👘'
  },
  {
    id: 'fm-042',
    word: 'Moses',
    reference: 'Exodus 2:10',
    description: 'First mention of Moses, the deliverer',
    category: 'names',
    context: 'Pharaoh\'s daughter named him Moses, meaning "I drew him out of the water."',
    significance: 'Moses is the great lawgiver and deliverer of Israel from Egypt.',
    relatedReferences: ['Exodus 3-20', 'Deuteronomy 34:10-12', 'Acts 7:20-44'],
    icon: '📜'
  },
  {
    id: 'fm-043',
    word: 'Aaron',
    reference: 'Exodus 4:14',
    description: 'First mention of Aaron, Moses\' brother',
    category: 'names',
    context: 'God tells Moses that Aaron, the Levite, can speak for him.',
    significance: 'Aaron becomes the first high priest of Israel.',
    relatedReferences: ['Exodus 28:1-43', 'Numbers 20:22-29', 'Hebrews 7:11-28'],
    icon: '👨‍🦳'
  },
  {
    id: 'fm-044',
    word: 'Joshua',
    reference: 'Exodus 17:9',
    description: 'First mention of Joshua, the military leader',
    category: 'names',
    context: 'Moses told Joshua to choose men to fight against Amalek.',
    significance: 'Joshua leads Israel into the Promised Land after Moses.',
    relatedReferences: ['Joshua 1-24', 'Hebrews 4:8', 'Acts 7:45'],
    icon: '⚔️'
  },
  {
    id: 'fm-045',
    word: 'David',
    reference: '1 Samuel 16:13',
    description: 'First mention of David, the king after God\'s heart',
    category: 'names',
    context: 'Samuel anointed David as king over Israel.',
    significance: 'David is the greatest king of Israel and a type of Christ.',
    relatedReferences: ['1 Samuel 17', '2 Samuel 7', 'Psalm 23'],
    icon: '👑'
  },

  // ================================================================
  // SECTION 4: PLACES (15 entries)
  // ================================================================
  {
    id: 'fm-046',
    word: 'Eden',
    reference: 'Genesis 2:8',
    description: 'First mention of Eden, the garden of God',
    category: 'places',
    context: 'The Lord God planted a garden in Eden and placed Adam there.',
    significance: 'Eden represents paradise and fellowship with God.',
    relatedReferences: ['Genesis 3:23-24', 'Isaiah 51:3', 'Ezekiel 28:13'],
    icon: '🌴'
  },
  {
    id: 'fm-047',
    word: 'Babylon',
    reference: 'Genesis 10:10',
    description: 'First mention of Babylon, the city of rebellion',
    category: 'places',
    context: 'Nimrod\'s kingdom included Babylon, Erech, Akkad, and Calneh.',
    significance: 'Babylon represents human pride and rebellion against God.',
    relatedReferences: ['Genesis 11:1-9', 'Daniel 4', 'Revelation 17-18'],
    icon: '🏛️'
  },
  {
    id: 'fm-048',
    word: 'Canaan',
    reference: 'Genesis 11:31',
    description: 'First mention of Canaan, the promised land',
    category: 'places',
    context: 'Terah took Abraham and Lot from Ur to Canaan.',
    significance: 'Canaan is the land promised to Abraham and his descendants.',
    relatedReferences: ['Genesis 12:5-7', 'Joshua 1:1-9', 'Hebrews 11:8-10'],
    icon: '🌾'
  },
  {
    id: 'fm-049',
    word: 'Egypt',
    reference: 'Genesis 12:10',
    description: 'First mention of Egypt, the land of slavery',
    category: 'places',
    context: 'Abraham went down to Egypt because of a famine.',
    significance: 'Egypt represents the world, slavery, and opposition to God.',
    relatedReferences: ['Exodus 1:8-14', 'Isaiah 19:1-25', 'Matthew 2:13-15'],
    icon: '🇪🇬'
  },
  {
    id: 'fm-050',
    word: 'Jerusalem',
    reference: 'Joshua 10:1',
    description: 'First mention of Jerusalem, the city of peace',
    category: 'places',
    context: 'Adoni-Zedek, king of Jerusalem, heard about Joshua\'s conquests.',
    significance: 'Jerusalem becomes the spiritual capital of Israel.',
    relatedReferences: ['2 Samuel 5:6-10', 'Psalm 122', 'Revelation 21:2'],
    icon: '🏙️'
  },
  {
    id: 'fm-051',
    word: 'Bethel',
    reference: 'Genesis 12:8',
    description: 'First mention of Bethel, the house of God',
    category: 'places',
    context: 'Abraham built an altar at Bethel and called on the name of the Lord.',
    significance: 'Bethel becomes a significant place of worship.',
    relatedReferences: ['Genesis 28:10-22', '1 Kings 12:25-33', 'Amos 5:4-6'],
    icon: '⛪'
  },
  {
    id: 'fm-052',
    word: 'Shechem',
    reference: 'Genesis 12:6',
    description: 'First mention of Shechem, the first stop in Canaan',
    category: 'places',
    context: 'Abraham traveled through Shechem and built an altar there.',
    significance: 'Shechem is a significant city in the history of Israel.',
    relatedReferences: ['Genesis 33:18-20', 'Joshua 24:1-28', 'John 4:5-6'],
    icon: '🏗️'
  },
  {
    id: 'fm-053',
    word: 'Hebron',
    reference: 'Genesis 13:18',
    description: 'First mention of Hebron, where Abraham settled',
    category: 'places',
    context: 'Abraham moved his tents and settled near Hebron.',
    significance: 'Hebron is the burial place of the patriarchs.',
    relatedReferences: ['Genesis 23:19', 'Joshua 14:13-15', '2 Samuel 2:1-4'],
    icon: '⛺'
  },
  {
    id: 'fm-054',
    word: 'Sinai',
    reference: 'Exodus 16:1',
    description: 'First mention of Sinai, the mountain of God',
    category: 'places',
    context: 'The Israelites came to the Desert of Sinai after leaving Egypt.',
    significance: 'Sinai is where the Law was given to Moses.',
    relatedReferences: ['Exodus 19-20', 'Galatians 4:24-25', 'Hebrews 12:18-21'],
    icon: '🗻'
  },
  {
    id: 'fm-055',
    word: 'Jordan',
    reference: 'Genesis 13:10',
    description: 'First mention of the Jordan River',
    category: 'places',
    context: 'Lot saw the plain of the Jordan was well-watered.',
    significance: 'The Jordan is the boundary of the Promised Land.',
    relatedReferences: ['Joshua 3:14-17', '2 Kings 5:10-14', 'Matthew 3:13-17'],
    icon: '🌊'
  },
  {
    id: 'fm-056',
    word: 'Nazareth',
    reference: 'Matthew 2:23',
    description: 'First mention of Nazareth, Jesus\' hometown',
    category: 'places',
    context: 'Joseph settled in Nazareth to fulfill the prophecy.',
    significance: 'Nazareth is Jesus\' hometown and a place of humble beginnings.',
    relatedReferences: ['Luke 1:26', 'John 1:46', 'Luke 4:16-30'],
    icon: '🏠'
  },
  {
    id: 'fm-057',
    word: 'Bethlehem',
    reference: 'Genesis 35:19',
    description: 'First mention of Bethlehem, the city of David',
    category: 'places',
    context: 'Rachel died and was buried on the way to Bethlehem.',
    significance: 'Bethlehem is the birthplace of Jesus and David.',
    relatedReferences: ['Ruth 1:19', 'Micah 5:2', 'Matthew 2:1'],
    icon: '⭐'
  },
  {
    id: 'fm-058',
    word: 'Galilee',
    reference: 'Joshua 20:7',
    description: 'First mention of Galilee, a region in Israel',
    category: 'places',
    context: 'Galilee was designated as one of the cities of refuge.',
    significance: 'Galilee is where Jesus conducted much of His ministry.',
    relatedReferences: ['Isaiah 9:1-2', 'Matthew 4:12-17', 'John 2:1-11'],
    icon: '🌅'
  },
  {
    id: 'fm-059',
    word: 'Rome',
    reference: 'Acts 18:2',
    description: 'First mention of Rome, the capital of the empire',
    category: 'places',
    context: 'Claudius had ordered all Jews to leave Rome.',
    significance: 'Rome is the center of the Roman Empire and Paul\'s destination.',
    relatedReferences: ['Acts 28:14-31', 'Romans 1:7', 'Philippians 4:22'],
    icon: '🏛️'
  },
  {
    id: 'fm-060',
    word: 'Damascus',
    reference: 'Genesis 15:2',
    description: 'First mention of Damascus, the oldest city',
    category: 'places',
    context: 'Abraham mentions Damascus as the home of his servant Eliezer.',
    significance: 'Damascus is one of the oldest cities and significant in biblical history.',
    relatedReferences: ['2 Kings 16:9', 'Acts 9:1-19', 'Galatians 1:17'],
    icon: '🕌'
  },

  // ================================================================
  // SECTION 5: OBJECTS (15 entries)
  // ================================================================
  {
    id: 'fm-061',
    word: 'Altar',
    reference: 'Genesis 8:20',
    description: 'First mention of an altar, built by Noah',
    category: 'objects',
    context: 'Noah built an altar to the Lord and offered sacrifices after the flood.',
    significance: 'The altar is a place of sacrifice and communion with God.',
    relatedReferences: ['Exodus 20:24-26', '1 Kings 18:30-39', 'Hebrews 13:10'],
    icon: '🔥'
  },
  {
    id: 'fm-062',
    word: 'Ark (Noah\'s)',
    reference: 'Genesis 6:14',
    description: 'First mention of the ark, a vessel for salvation',
    category: 'objects',
    context: 'God told Noah to build an ark of gopher wood.',
    significance: 'The ark is a symbol of salvation and deliverance.',
    relatedReferences: ['Genesis 7:1-9', '1 Peter 3:20-21', 'Hebrews 11:7'],
    icon: '⛵'
  },
  {
    id: 'fm-063',
    word: 'Ark of the Covenant',
    reference: 'Exodus 25:10-22',
    description: 'First mention of the Ark of the Covenant',
    category: 'objects',
    context: 'God commanded Moses to build the Ark of the Covenant.',
    significance: 'The Ark is the symbol of God\'s presence among His people.',
    relatedReferences: ['Exodus 40:34-38', 'Joshua 3:14-17', 'Revelation 11:19'],
    icon: '📦'
  },
  {
    id: 'fm-064',
    word: 'Tabernacle',
    reference: 'Exodus 25:8-9',
    description: 'First mention of the Tabernacle',
    category: 'objects',
    context: 'God instructed Moses to build a sanctuary so that He could dwell among them.',
    significance: 'The Tabernacle is the earthly dwelling place of God.',
    relatedReferences: ['Exodus 40:34-38', 'Hebrews 9:1-10', 'Revelation 21:3'],
    icon: '⛺'
  },
  {
    id: 'fm-065',
    word: 'Temple',
    reference: '1 Samuel 1:9',
    description: 'First mention of the Temple, the house of God',
    category: 'objects',
    context: 'Hannah went to the temple of the Lord at Shiloh to pray.',
    significance: 'The Temple is the permanent dwelling place of God.',
    relatedReferences: ['1 Kings 6:1-38', '2 Chronicles 3:1-17', 'John 2:19-21'],
    icon: '🕍'
  },
  {
    id: 'fm-066',
    word: 'Sword',
    reference: 'Genesis 3:24',
    description: 'First mention of a sword, to guard Eden',
    category: 'objects',
    context: 'God placed cherubim with a flaming sword to guard the way to the tree of life.',
    significance: 'The sword represents judgment and separation from God.',
    relatedReferences: ['Judges 7:20-22', 'Ephesians 6:17', 'Hebrews 4:12'],
    icon: '🗡️'
  },
  {
    id: 'fm-067',
    word: 'Bow (Rainbow)',
    reference: 'Genesis 9:13',
    description: 'First mention of a rainbow, the sign of the covenant',
    category: 'objects',
    context: 'God set the rainbow as a sign of His covenant with the earth.',
    significance: 'The rainbow represents God\'s promise and faithfulness.',
    relatedReferences: ['Ezekiel 1:28', 'Revelation 4:3', 'Revelation 10:1'],
    icon: '🌈'
  },
  {
    id: 'fm-068',
    word: 'Crown',
    reference: 'Exodus 39:30',
    description: 'First mention of a crown, the holy crown',
    category: 'objects',
    context: 'The crown of the high priest was made of pure gold.',
    significance: 'The crown represents authority and holiness.',
    relatedReferences: ['Psalm 8:5', 'Zechariah 9:16', 'Revelation 4:10-11'],
    icon: '👑'
  },
  {
    id: 'fm-069',
    word: 'Staff',
    reference: 'Genesis 32:10',
    description: 'First mention of a staff, Jacob\'s walking stick',
    category: 'objects',
    context: 'Jacob crossed the Jordan with only his staff.',
    significance: 'The staff represents guidance and dependence on God.',
    relatedReferences: ['Exodus 4:2-5', 'Psalm 23:4', 'Mark 6:8'],
    icon: '🪄'
  },
  {
    id: 'fm-070',
    word: 'Book',
    reference: 'Exodus 24:7',
    description: 'First mention of a book, the Book of the Covenant',
    category: 'objects',
    context: 'Moses read the Book of the Covenant to the people.',
    significance: 'The book is a record of God\'s covenant and law.',
    relatedReferences: ['Deuteronomy 31:24-26', 'Psalm 40:7', 'Revelation 20:12'],
    icon: '📕'
  },
  {
    id: 'fm-071',
    word: 'Flute',
    reference: 'Genesis 4:21',
    description: 'First mention of a musical instrument',
    category: 'objects',
    context: 'Jubal was the father of all who play the harp and flute.',
    significance: 'Music is a gift from God for worship and expression.',
    relatedReferences: ['Psalm 150:4', 'Daniel 3:5-10', '1 Corinthians 14:7'],
    icon: '🎵'
  },
  {
    id: 'fm-072',
    word: 'Tent',
    reference: 'Genesis 4:20',
    description: 'First mention of a tent, the dwelling of nomads',
    category: 'objects',
    context: 'Jabal was the father of those who live in tents and raise livestock.',
    significance: 'Tents represent temporary dwellings and pilgrimage.',
    relatedReferences: ['Genesis 12:8', 'Hebrews 11:9', '2 Corinthians 5:1-4'],
    icon: '⛺'
  },
  {
    id: 'fm-073',
    word: 'Chariot',
    reference: 'Genesis 46:29',
    description: 'First mention of a chariot, Joseph\'s chariot',
    category: 'objects',
    context: 'Joseph prepared his chariot to go to Goshen to meet his father.',
    significance: 'Chariots represent power, status, and military might.',
    relatedReferences: ['Exodus 14:6-7', '1 Kings 18:44', '2 Kings 2:11'],
    icon: '🛞'
  },
  {
    id: 'fm-074',
    word: 'Ram\'s Horn (Shofar)',
    reference: 'Exodus 19:13',
    description: 'First mention of a ram\'s horn, used to signal God\'s presence',
    category: 'objects',
    context: 'The people were to come to the mountain when they heard the ram\'s horn.',
    significance: 'The ram\'s horn is a call to worship and battle.',
    relatedReferences: ['Joshua 6:4-20', '1 Corinthians 15:52', 'Revelation 8:2'],
    icon: '🎺'
  },
  {
    id: 'fm-075',
    word: 'Veil',
    reference: 'Exodus 26:31-33',
    description: 'First mention of the veil in the Tabernacle',
    category: 'objects',
    context: 'The veil separated the Holy Place from the Most Holy Place.',
    significance: 'The veil represents separation between God and man, torn at Christ\'s death.',
    relatedReferences: ['Leviticus 16:2', 'Matthew 27:51', 'Hebrews 6:19-20'],
    icon: '🧵'
  },

  // ================================================================
  // SECTION 6: ANIMALS (10 entries)
  // ================================================================
  {
    id: 'fm-076',
    word: 'Serpent',
    reference: 'Genesis 3:1',
    description: 'First mention of a serpent, the tempter',
    category: 'animals',
    context: 'The serpent was more crafty than any other beast of the field.',
    significance: 'The serpent represents Satan and the power of temptation.',
    relatedReferences: ['Numbers 21:6-9', 'John 3:14', 'Revelation 12:9'],
    icon: '🐍'
  },
  {
    id: 'fm-077',
    word: 'Sheep',
    reference: 'Genesis 4:2',
    description: 'First mention of sheep, Abel\'s flock',
    category: 'animals',
    context: 'Abel kept flocks, and Cain worked the soil.',
    significance: 'Sheep represent God\'s people and the Lamb of God.',
    relatedReferences: ['Psalm 23:1', 'John 10:11-16', 'Isaiah 53:6'],
    icon: '🐑'
  },
  {
    id: 'fm-078',
    word: 'Lion',
    reference: 'Genesis 49:9',
    description: 'First mention of a lion, Judah\'s symbol',
    category: 'animals',
    context: 'Judah is a lion\'s whelp.',
    significance: 'The lion represents strength, royalty, and Jesus as the Lion of Judah.',
    relatedReferences: ['Revelation 5:5', '1 Peter 5:8', 'Daniel 6:1-28'],
    icon: '🦁'
  },
  {
    id: 'fm-079',
    word: 'Eagle',
    reference: 'Exodus 19:4',
    description: 'First mention of an eagle, God\'s deliverance',
    category: 'animals',
    context: 'God carried Israel on eagles\' wings out of Egypt.',
    significance: 'The eagle represents divine protection and care.',
    relatedReferences: ['Deuteronomy 32:11', 'Isaiah 40:31', 'Revelation 4:7'],
    icon: '🦅'
  },
  {
    id: 'fm-080',
    word: 'Fish',
    reference: 'Genesis 1:26',
    description: 'First mention of fish, created on the fifth day',
    category: 'animals',
    context: 'God gave humans dominion over the fish of the sea.',
    significance: 'Fish are part of God\'s creation and His provision.',
    relatedReferences: ['Jonah 1:17', 'Matthew 14:17-21', 'Matthew 17:27'],
    icon: '🐟'
  },
  {
    id: 'fm-081',
    word: 'Birds',
    reference: 'Genesis 1:26',
    description: 'First mention of birds, created on the fifth day',
    category: 'animals',
    context: 'God gave humans dominion over the birds of the air.',
    significance: 'Birds represent freedom and God\'s provision.',
    relatedReferences: ['Psalm 104:12', 'Matthew 6:26', 'Luke 12:24'],
    icon: '🐦'
  },
  {
    id: 'fm-082',
    word: 'Cattle',
    reference: 'Genesis 1:26',
    description: 'First mention of cattle, created on the sixth day',
    category: 'animals',
    context: 'God gave humans dominion over the livestock.',
    significance: 'Cattle represent wealth and provision.',
    relatedReferences: ['Genesis 12:16', 'Job 42:12', 'Luke 2:7'],
    icon: '🐄'
  },
  {
    id: 'fm-083',
    word: 'Camels',
    reference: 'Genesis 12:16',
    description: 'First mention of camels, given to Abraham',
    category: 'animals',
    context: 'Pharaoh gave Abraham camels as part of Sarah\'s dowry.',
    significance: 'Camels represent wealth and transportation in the ancient world.',
    relatedReferences: ['Genesis 24:10-11', 'Job 1:3', 'Matthew 19:24'],
    icon: '🐫'
  },
  {
    id: 'fm-084',
    word: 'Horse',
    reference: 'Exodus 14:9',
    description: 'First mention of horses, used in Pharaoh\'s army',
    category: 'animals',
    context: 'Pharaoh\'s horsemen and chariots pursued the Israelites.',
    significance: 'Horses represent military power and warfare.',
    relatedReferences: ['Psalm 20:7', 'Zechariah 1:8', 'Revelation 6:2'],
    icon: '🐴'
  },
  {
    id: 'fm-085',
    word: 'Wolves',
    reference: 'Genesis 49:27',
    description: 'First mention of wolves, Benjamin\'s symbol',
    category: 'animals',
    context: 'Benjamin is a ravenous wolf.',
    significance: 'Wolves represent fierceness and danger.',
    relatedReferences: ['Matthew 7:15', 'Acts 20:29', 'Ezekiel 22:27'],
    icon: '🐺'
  },

  // ================================================================
  // SECTION 7: FOOD (10 entries)
  // ================================================================
  {
    id: 'fm-086',
    word: 'Bread',
    reference: 'Genesis 3:19',
    description: 'First mention of bread, from the curse',
    category: 'food',
    context: 'Adam was told he would eat bread by the sweat of his brow.',
    significance: 'Bread represents sustenance, work, and Jesus as the Bread of Life.',
    relatedReferences: ['Exodus 16:4-15', 'Deuteronomy 8:3', 'John 6:35'],
    icon: '🍞'
  },
  {
    id: 'fm-087',
    word: 'Wine',
    reference: 'Genesis 9:20-21',
    description: 'First mention of wine, Noah\'s vineyard',
    category: 'food',
    context: 'Noah planted a vineyard and made wine.',
    significance: 'Wine represents celebration and judgment.',
    relatedReferences: ['Psalm 104:14-15', 'John 2:1-11', '1 Corinthians 11:25-26'],
    icon: '🍷'
  },
  {
    id: 'fm-088',
    word: 'Meat',
    reference: 'Genesis 9:3',
    description: 'First mention of eating meat, after the flood',
    category: 'food',
    context: 'God gave Noah permission to eat all moving things that live.',
    significance: 'Meat is part of God\'s provision for humanity.',
    relatedReferences: ['Leviticus 11:1-47', '1 Corinthians 10:25-26', '1 Timothy 4:3-5'],
    icon: '🥩'
  },
  {
    id: 'fm-089',
    word: 'Manna',
    reference: 'Exodus 16:15',
    description: 'First mention of manna, bread from heaven',
    category: 'food',
    context: 'The Israelites said, "What is it?" (manna) when they saw the bread from heaven.',
    significance: 'Manna represents God\'s daily provision and Jesus as the Bread of Life.',
    relatedReferences: ['Deuteronomy 8:16', 'John 6:31-35', 'Revelation 2:17'],
    icon: '🍯'
  },
  {
    id: 'fm-090',
    word: 'Milk',
    reference: 'Genesis 18:8',
    description: 'First mention of milk, offered to guests',
    category: 'food',
    context: 'Abraham brought curds and milk to his three visitors.',
    significance: 'Milk represents sustenance and the word of God.',
    relatedReferences: ['Exodus 3:8', '1 Peter 2:2', 'Hebrews 5:12-14'],
    icon: '🥛'
  },
  {
    id: 'fm-091',
    word: 'Honey',
    reference: 'Genesis 43:11',
    description: 'First mention of honey, as a gift for Joseph',
    category: 'food',
    context: 'Jacob told his sons to take honey as a gift to the Egyptian ruler.',
    significance: 'Honey represents sweetness and the Promised Land\'s abundance.',
    relatedReferences: ['Exodus 3:8', 'Psalm 19:10', 'Revelation 10:9-10'],
    icon: '🍯'
  },
  {
    id: 'fm-092',
    word: 'Grapes',
    reference: 'Genesis 40:10',
    description: 'First mention of grapes, in Pharaoh\'s cupbearer\'s dream',
    category: 'food',
    context: 'The cupbearer saw a vine with three branches that budded and produced grapes.',
    significance: 'Grapes represent fruitfulness and the blood of Christ.',
    relatedReferences: ['Numbers 13:23', 'Isaiah 5:1-7', 'Matthew 26:29'],
    icon: '🍇'
  },
  {
    id: 'fm-093',
    word: 'Oil (Olive)',
    reference: 'Genesis 28:18',
    description: 'First mention of oil, used for anointing',
    category: 'food',
    context: 'Jacob poured oil on the stone he had used as a pillow.',
    significance: 'Oil represents the Holy Spirit and anointing.',
    relatedReferences: ['Exodus 30:22-33', 'Psalm 23:5', 'Mark 6:13'],
    icon: '🫒'
  },
  {
    id: 'fm-094',
    word: 'Salt',
    reference: 'Genesis 19:26',
    description: 'First mention of salt, Lot\'s wife turned into a pillar of salt',
    category: 'food',
    context: 'Lot\'s wife looked back and became a pillar of salt.',
    significance: 'Salt represents judgment, preservation, and covenant.',
    relatedReferences: ['Leviticus 2:13', 'Matthew 5:13', 'Colossians 4:6'],
    icon: '🧂'
  },
  {
    id: 'fm-095',
    word: 'Fig',
    reference: 'Genesis 3:7',
    description: 'First mention of figs, used for covering',
    category: 'food',
    context: 'Adam and Eve sewed fig leaves together to cover themselves.',
    significance: 'Figs represent shame, and later, Jesus curses a fig tree.',
    relatedReferences: ['1 Kings 4:25', 'Micah 4:4', 'Matthew 21:18-22'],
    icon: '🍈'
  },

  // ================================================================
  // SECTION 8: CLOTHING (8 entries)
  // ================================================================
  {
    id: 'fm-096',
    word: 'Garment',
    reference: 'Genesis 3:21',
    description: 'First mention of garments, provided by God',
    category: 'clothing',
    context: 'God made garments of skin for Adam and Eve to wear.',
    significance: 'Garments represent covering for sin and God\'s provision.',
    relatedReferences: ['Genesis 37:3', 'Exodus 28:2-4', 'Revelation 3:5'],
    icon: '👕'
  },
  {
    id: 'fm-097',
    word: 'Veil (Head covering)',
    reference: 'Genesis 24:65',
    description: 'First mention of a veil, Rebekah\'s modesty',
    category: 'clothing',
    context: 'Rebekah covered herself with a veil when she saw Isaac.',
    significance: 'The veil represents modesty and respect.',
    relatedReferences: ['1 Corinthians 11:5-6', '2 Corinthians 3:13-16', 'Song of Solomon 4:1'],
    icon: '🧕'
  },
  {
    id: 'fm-098',
    word: 'Sackcloth',
    reference: 'Genesis 37:34',
    description: 'First mention of sackcloth, sign of mourning',
    category: 'clothing',
    context: 'Jacob tore his clothes and put on sackcloth when he mourned for Joseph.',
    significance: 'Sackcloth represents mourning, repentance, and humility.',
    relatedReferences: ['2 Kings 6:30', 'Jonah 3:5-8', 'Matthew 11:21'],
    icon: '🧥'
  },
  {
    id: 'fm-099',
    word: 'Shoes',
    reference: 'Genesis 14:23',
    description: 'First mention of shoes, used in an oath',
    category: 'clothing',
    context: 'Abraham refused to take anything from the king of Sodom, not even a shoelace.',
    significance: 'Shoes represent readiness and possession.',
    relatedReferences: ['Exodus 3:5', 'Joshua 5:15', 'Ephesians 6:15'],
    icon: '👟'
  },
  {
    id: 'fm-100',
    word: 'Sandals',
    reference: 'Exodus 3:5',
    description: 'First mention of sandals, removed on holy ground',
    category: 'clothing',
    context: 'God told Moses to remove his sandals because the ground was holy.',
    significance: 'Sandals represent pilgrimage and holy ground.',
    relatedReferences: ['Joshua 5:15', 'Mark 6:9', 'Acts 12:8'],
    icon: '🩴'
  },
  {
    id: 'fm-101',
    word: 'Cloak',
    reference: 'Exodus 22:26-27',
    description: 'First mention of a cloak, used as a pledge',
    category: 'clothing',
    context: 'A cloak was the only covering a poor person had and could be taken as a pledge.',
    significance: 'The cloak represents mercy and protection.',
    relatedReferences: ['2 Kings 2:13-14', 'Matthew 5:40', '2 Timothy 4:13'],
    icon: '🧣'
  },
  {
    id: 'fm-102',
    word: 'Ephod',
    reference: 'Exodus 28:6-12',
    description: 'First mention of the ephod, the priestly garment',
    category: 'clothing',
    context: 'The ephod was made of gold, blue, purple, and scarlet yarn.',
    significance: 'The ephod represents the high priest\'s role as mediator.',
    relatedReferences: ['1 Samuel 2:18', '1 Samuel 30:7', 'Hosea 3:4'],
    icon: '👘'
  },
  {
    id: 'fm-103',
    word: 'Tunic',
    reference: 'Genesis 3:21',
    description: 'First mention of a tunic, God\'s provision',
    category: 'clothing',
    context: 'God made tunics of skin for Adam and Eve.',
    significance: 'The tunic represents God\'s care and covering.',
    relatedReferences: ['Genesis 37:3', 'Leviticus 8:7', 'John 19:23'],
    icon: '👚'
  },

  // ================================================================
  // SECTION 9: NUMBERS (10 entries)
  // ================================================================
  {
    id: 'fm-104',
    word: 'One',
    reference: 'Genesis 1:5',
    description: 'First mention of one, the first day',
    category: 'numbers',
    context: 'There was evening and morning, the first day.',
    significance: 'One represents unity and primacy.',
    relatedReferences: ['Deuteronomy 6:4', 'Mark 12:29', 'Ephesians 4:4-6'],
    icon: '1️⃣'
  },
  {
    id: 'fm-105',
    word: 'Seven',
    reference: 'Genesis 2:2',
    description: 'First mention of seven, the day of rest',
    category: 'numbers',
    context: 'God rested on the seventh day from all His work.',
    significance: 'Seven represents completion and perfection.',
    relatedReferences: ['Genesis 7:2-4', 'Exodus 20:8-11', 'Revelation 1:4'],
    icon: '7️⃣'
  },
  {
    id: 'fm-106',
    word: 'Ten',
    reference: 'Genesis 24:10',
    description: 'First mention of ten, Abraham\'s servant\'s camels',
    category: 'numbers',
    context: 'The servant took ten of his master\'s camels.',
    significance: 'Ten represents completeness and order.',
    relatedReferences: ['Exodus 20:1-17', 'Daniel 1:12-16', 'Luke 15:8-10'],
    icon: '🔟'
  },
  {
    id: 'fm-107',
    word: 'Twelve',
    reference: 'Genesis 17:20',
    description: 'First mention of twelve, Ishmael\'s sons',
    category: 'numbers',
    context: 'God promised Ishmael would become the father of twelve rulers.',
    significance: 'Twelve represents God\'s people and divine government.',
    relatedReferences: ['Genesis 49:28', 'Revelation 21:12-14', 'Matthew 10:1-5'],
    icon: '1️⃣2️⃣'
  },
  {
    id: 'fm-108',
    word: 'Forty',
    reference: 'Genesis 7:4',
    description: 'First mention of forty, the days of rain',
    category: 'numbers',
    context: 'God said it would rain for forty days and forty nights.',
    significance: 'Forty represents testing, trial, and preparation.',
    relatedReferences: ['Exodus 16:35', 'Numbers 14:33-34', 'Matthew 4:2'],
    icon: '4️⃣0️⃣'
  },
  {
    id: 'fm-109',
    word: 'Hundred',
    reference: 'Genesis 17:17',
    description: 'First mention of a hundred, Abraham\'s age',
    category: 'numbers',
    context: 'Abraham was a hundred years old when Isaac was born.',
    significance: 'A hundred represents a large number and completeness.',
    relatedReferences: ['Genesis 26:12', 'Matthew 13:8', 'Luke 15:4'],
    icon: '1️⃣0️⃣0️⃣'
  },
  {
    id: 'fm-110',
    word: 'Three',
    reference: 'Genesis 6:10',
    description: 'First mention of three, Noah\'s sons',
    category: 'numbers',
    context: 'Noah had three sons: Shem, Ham, and Japheth.',
    significance: 'Three represents divine completeness and the Trinity.',
    relatedReferences: ['Genesis 18:2', 'Matthew 28:19', '2 Corinthians 13:14'],
    icon: '3️⃣'
  },
  {
    id: 'fm-111',
    word: 'Twenty',
    reference: 'Genesis 31:38',
    description: 'First mention of twenty, Jacob\'s years with Laban',
    category: 'numbers',
    context: 'Jacob worked for Laban for twenty years.',
    significance: 'Twenty represents a period of servitude and waiting.',
    relatedReferences: ['Genesis 37:28', 'Exodus 30:14', 'Ezra 8:1'],
    icon: '2️⃣0️⃣'
  },
  {
    id: 'fm-112',
    word: 'Fifty',
    reference: 'Genesis 18:24-26',
    description: 'First mention of fifty, Abraham\'s plea for Sodom',
    category: 'numbers',
    context: 'Abraham asked if God would spare Sodom for fifty righteous people.',
    significance: 'Fifty represents deliverance and mercy.',
    relatedReferences: ['Leviticus 25:10-12', 'Acts 2:1-4', 'Leviticus 27:16'],
    icon: '5️⃣0️⃣'
  },
  {
    id: 'fm-113',
    word: 'Thousand',
    reference: 'Exodus 12:37',
    description: 'First mention of a thousand, the number of Israelites',
    category: 'numbers',
    context: 'About 600,000 men left Egypt, not counting women and children.',
    significance: 'A thousand represents a great multitude and completeness.',
    relatedReferences: ['Psalm 90:4', 'Revelation 20:2-7', '2 Peter 3:8'],
    icon: '1️⃣0️⃣0️⃣0️⃣'
  },

  // ================================================================
  // SECTION 10: COLORS (8 entries)
  // ================================================================
  {
    id: 'fm-114',
    word: 'Blue',
    reference: 'Exodus 25:4',
    description: 'First mention of blue, used in the Tabernacle',
    category: 'colors',
    context: 'Blue, purple, and scarlet yarn were used in the Tabernacle.',
    significance: 'Blue represents heaven and the divine.',
    relatedReferences: ['Exodus 28:31', 'Numbers 15:38-40', 'Ezekiel 1:26'],
    icon: '🔵'
  },
  {
    id: 'fm-115',
    word: 'Purple',
    reference: 'Exodus 25:4',
    description: 'First mention of purple, used in the Tabernacle',
    category: 'colors',
    context: 'Blue, purple, and scarlet yarn were used in the Tabernacle.',
    significance: 'Purple represents royalty and riches.',
    relatedReferences: ['Exodus 28:5', 'Mark 15:17-20', 'Revelation 17:4'],
    icon: '🟣'
  },
  {
    id: 'fm-116',
    word: 'Scarlet',
    reference: 'Exodus 25:4',
    description: 'First mention of scarlet, used in the Tabernacle',
    category: 'colors',
    context: 'Blue, purple, and scarlet yarn were used in the Tabernacle.',
    significance: 'Scarlet represents sin, sacrifice, and redemption.',
    relatedReferences: ['Isaiah 1:18', 'Joshua 2:18-21', 'Hebrews 9:19-22'],
    icon: '🔴'
  },
  {
    id: 'fm-117',
    word: 'White',
    reference: 'Genesis 30:35',
    description: 'First mention of white, in Jacob\'s flock',
    category: 'colors',
    context: 'Laban removed all the white sheep from Jacob\'s flock.',
    significance: 'White represents purity and righteousness.',
    relatedReferences: ['Isaiah 1:18', 'Daniel 7:9', 'Revelation 3:4-5'],
    icon: '⚪'
  },
  {
    id: 'fm-118',
    word: 'Black',
    reference: 'Genesis 30:32',
    description: 'First mention of black, in Jacob\'s flock',
    category: 'colors',
    context: 'Jacob would take all the black sheep as his wages.',
    significance: 'Black represents sin, judgment, and sorrow.',
    relatedReferences: ['Lamentations 5:17', 'Joel 2:31', 'Revelation 6:5'],
    icon: '⚫'
  },
  {
    id: 'fm-119',
    word: 'Gold',
    reference: 'Genesis 2:11-12',
    description: 'First mention of gold, found in Havilah',
    category: 'colors',
    context: 'The gold of Havilah is good.',
    significance: 'Gold represents divine nature, royalty, and glory.',
    relatedReferences: ['Exodus 25:3', '1 Kings 6:20-22', 'Revelation 21:18'],
    icon: '🟡'
  },
  {
    id: 'fm-120',
    word: 'Green',
    reference: 'Genesis 1:30',
    description: 'First mention of green, as food for animals',
    category: 'colors',
    context: 'Green plants were given as food for all animals.',
    significance: 'Green represents life, growth, and vitality.',
    relatedReferences: ['Psalm 23:2', 'Song of Solomon 6:11', 'Revelation 8:7'],
    icon: '🟢'
  },
  {
    id: 'fm-121',
    word: 'Red',
    reference: 'Genesis 25:25',
    description: 'First mention of red, Esau\'s appearance',
    category: 'colors',
    context: 'Esau came out red and hairy.',
    significance: 'Red represents blood, life, and sacrifice.',
    relatedReferences: ['Exodus 12:22', 'Joshua 2:21', 'Revelation 6:4'],
    icon: '🔴'
  },

  // ================================================================
  // SECTION 11: TITLES & NAMES OF GOD (10 entries)
  // ================================================================
  {
    id: 'fm-122',
    word: 'LORD (Yahweh)',
    reference: 'Genesis 2:4',
    description: 'First mention of Yahweh, God\'s covenant name',
    category: 'titles',
    context: 'The LORD God made the heavens and the earth.',
    significance: 'Yahweh is God\'s personal, covenant name.',
    relatedReferences: ['Exodus 3:14-15', 'Psalm 83:18', 'Isaiah 42:8'],
    icon: '📜'
  },
  {
    id: 'fm-123',
    word: 'God Almighty (El Shaddai)',
    reference: 'Genesis 17:1',
    description: 'First mention of God Almighty, revealed to Abraham',
    category: 'titles',
    context: 'God appeared to Abraham as God Almighty.',
    significance: 'El Shaddai emphasizes God\'s power and sufficiency.',
    relatedReferences: ['Genesis 35:11', 'Exodus 6:3', 'Ruth 1:20-21'],
    icon: '👑'
  },
  {
    id: 'fm-124',
    word: 'King of Kings',
    reference: 'Deuteronomy 10:17',
    description: 'First mention of God as King of Kings',
    category: 'titles',
    context: 'The LORD is the God of gods and Lord of lords.',
    significance: 'God is the supreme ruler over all kings and authorities.',
    relatedReferences: ['Psalm 136:3', '1 Timothy 6:15', 'Revelation 17:14'],
    icon: '👑'
  },
  {
    id: 'fm-125',
    word: 'Rock',
    reference: 'Deuteronomy 32:4',
    description: 'First mention of God as the Rock',
    category: 'titles',
    context: 'The Rock, His work is perfect.',
    significance: 'Rock represents God\'s strength, stability, and protection.',
    relatedReferences: ['Psalm 18:2', '1 Corinthians 10:4', '1 Peter 2:8'],
    icon: '🪨'
  },
  {
    id: 'fm-126',
    word: 'Shepherd',
    reference: 'Genesis 48:15',
    description: 'First mention of God as Shepherd',
    category: 'titles',
    context: 'Jacob refers to God as the Shepherd who has guided him all his life.',
    significance: 'God as Shepherd represents His care and guidance.',
    relatedReferences: ['Psalm 23:1', 'Isaiah 40:11', 'John 10:11-14'],
    icon: '🐑'
  },
  {
    id: 'fm-127',
    word: 'Father',
    reference: 'Deuteronomy 32:6',
    description: 'First mention of God as Father',
    category: 'titles',
    context: 'Is He not your Father, who created you?',
    significance: 'God as Father represents His love, care, and authority.',
    relatedReferences: ['Isaiah 63:16', 'Matthew 6:9', 'Romans 8:15'],
    icon: '👨'
  },
  {
    id: 'fm-128',
    word: 'Judge',
    reference: 'Genesis 18:25',
    description: 'First mention of God as Judge',
    category: 'titles',
    context: 'Abraham calls God the Judge of all the earth.',
    significance: 'God is the righteous Judge over all creation.',
    relatedReferences: ['Psalm 7:11', 'Psalm 96:13', 'Revelation 19:11'],
    icon: '⚖️'
  },
  {
    id: 'fm-129',
    word: 'Savior',
    reference: 'Judges 3:9',
    description: 'First mention of God as Savior',
    category: 'titles',
    context: 'God raised up a deliverer (savior) for Israel.',
    significance: 'God is the ultimate Savior of His people.',
    relatedReferences: ['Isaiah 43:11', 'Luke 1:47', 'Titus 2:13'],
    icon: '🆓'
  },
  {
    id: 'fm-130',
    word: 'Redeemer',
    reference: 'Job 19:25',
    description: 'First mention of God as Redeemer',
    category: 'titles',
    context: 'Job declares that his Redeemer lives.',
    significance: 'God is the Redeemer who delivers and rescues His people.',
    relatedReferences: ['Isaiah 47:4', 'Psalm 19:14', 'Galatians 3:13'],
    icon: '🕊️'
  },
  {
    id: 'fm-131',
    word: 'Living God',
    reference: 'Deuteronomy 5:26',
    description: 'First mention of the Living God',
    category: 'titles',
    context: 'The people heard the voice of the Living God.',
    significance: 'The Living God is active, present, and personal.',
    relatedReferences: ['Joshua 3:10', 'Psalm 42:2', '2 Corinthians 6:16'],
    icon: '✨'
  },

  // ================================================================
  // SECTION 12: SYMBOLS (10 entries)
  // ================================================================
  {
    id: 'fm-132',
    word: 'Lamb',
    reference: 'Genesis 22:8',
    description: 'First mention of a lamb, as a sacrifice',
    category: 'symbols',
    context: 'Abraham said, "God himself will provide the lamb for the burnt offering."',
    significance: 'The lamb represents Jesus, the Lamb of God.',
    relatedReferences: ['Exodus 12:3-13', 'Isaiah 53:7', 'John 1:29'],
    icon: '🐑'
  },
  {
    id: 'fm-133',
    word: 'Fire',
    reference: 'Genesis 15:17',
    description: 'First mention of fire, as God\'s presence',
    category: 'symbols',
    context: 'A smoking firepot and a blazing torch appeared to Abraham.',
    significance: 'Fire represents God\'s presence, judgment, and purification.',
    relatedReferences: ['Exodus 3:2', 'Acts 2:3', 'Hebrews 12:29'],
    icon: '🔥'
  },
  {
    id: 'fm-134',
    word: 'Cloud',
    reference: 'Genesis 9:13',
    description: 'First mention of a cloud, in the rainbow promise',
    category: 'symbols',
    context: 'God set the rainbow in the cloud as a sign of the covenant.',
    significance: 'Clouds represent God\'s presence and guidance.',
    relatedReferences: ['Exodus 13:21-22', '1 Kings 8:10-11', 'Revelation 1:7'],
    icon: '☁️'
  },
  {
    id: 'fm-135',
    word: 'Blood',
    reference: 'Genesis 4:10',
    description: 'First mention of blood, Abel\'s cry from the ground',
    category: 'symbols',
    context: 'Abel\'s blood cried out to God from the ground.',
    significance: 'Blood represents life, sacrifice, and redemption.',
    relatedReferences: ['Exodus 12:13', 'Leviticus 17:11', 'Ephesians 1:7'],
    icon: '🩸'
  },
  {
    id: 'fm-136',
    word: 'Star',
    reference: 'Genesis 15:5',
    description: 'First mention of stars, as descendants',
    category: 'symbols',
    context: 'God told Abraham to count the stars as his descendants.',
    significance: 'Stars represent God\'s promises and the Messiah.',
    relatedReferences: ['Numbers 24:17', 'Matthew 2:2', 'Revelation 22:16'],
    icon: '⭐'
  },
  {
    id: 'fm-137',
    word: 'Stone',
    reference: 'Genesis 28:18',
    description: 'First mention of a stone, as a memorial',
    category: 'symbols',
    context: 'Jacob set up the stone as a pillar and poured oil on it.',
    significance: 'Stones represent memorials and God\'s presence.',
    relatedReferences: ['Joshua 4:6-7', '1 Kings 18:31-32', '1 Peter 2:4-8'],
    icon: '🪨'
  },
  {
    id: 'fm-138',
    word: 'Water',
    reference: 'Genesis 1:2',
    description: 'First mention of water, part of creation',
    category: 'symbols',
    context: 'The Spirit of God was hovering over the waters.',
    significance: 'Water represents life, purification, and the Holy Spirit.',
    relatedReferences: ['John 4:14', 'John 7:38-39', 'Revelation 22:1-2'],
    icon: '💧'
  },
  {
    id: 'fm-139',
    word: 'Bread',
    reference: 'Genesis 3:19',
    description: 'First mention of bread, as sustenance',
    category: 'symbols',
    context: 'Adam was told he would eat bread by the sweat of his brow.',
    significance: 'Bread represents life, sustenance, and Jesus as the Bread of Life.',
    relatedReferences: ['Exodus 16:4', 'John 6:35', '1 Corinthians 10:17'],
    icon: '🍞'
  },
  {
    id: 'fm-140',
    word: 'Oil',
    reference: 'Genesis 28:18',
    description: 'First mention of oil, used for anointing',
    category: 'symbols',
    context: 'Jacob poured oil on the stone as a memorial.',
    significance: 'Oil represents the Holy Spirit, anointing, and consecration.',
    relatedReferences: ['Exodus 30:22-33', 'Psalm 23:5', 'Acts 10:38'],
    icon: '🫒'
  },
  {
    id: 'fm-141',
    word: 'Wine',
    reference: 'Genesis 9:20-21',
    description: 'First mention of wine, from Noah\'s vineyard',
    category: 'symbols',
    context: 'Noah planted a vineyard and made wine.',
    significance: 'Wine represents celebration, the blood of Christ, and joy.',
    relatedReferences: ['Psalm 104:14-15', 'John 2:1-11', 'Matthew 26:29'],
    icon: '🍷'
  },

  // ================================================================
  // SECTION 13: MONTHS & SEASONS (8 entries)
  // ================================================================
  {
    id: 'fm-142',
    word: 'Month',
    reference: 'Genesis 7:11',
    description: 'First mention of a month, the flood begins',
    category: 'months',
    context: 'The flood began in the second month, the seventeenth day.',
    significance: 'Months represent the passage of time and God\'s timing.',
    relatedReferences: ['Exodus 12:2', 'Numbers 9:1-5', 'Esther 3:7'],
    icon: '📅'
  },
  {
    id: 'fm-143',
    word: 'Spring',
    reference: 'Genesis 8:22',
    description: 'First mention of spring, after the flood',
    category: 'months',
    context: 'Seedtime and harvest, cold and heat, summer and winter will never cease.',
    significance: 'Spring represents new life and resurrection.',
    relatedReferences: ['Song of Solomon 2:11-12', 'Matthew 24:32', 'Mark 11:13'],
    icon: '🌱'
  },
  {
    id: 'fm-144',
    word: 'Summer',
    reference: 'Genesis 8:22',
    description: 'First mention of summer, after the flood',
    category: 'months',
    context: 'Seedtime and harvest, cold and heat, summer and winter will never cease.',
    significance: 'Summer represents growth and harvest.',
    relatedReferences: ['Psalm 32:4', 'Jeremiah 8:20', 'Amos 8:1-2'],
    icon: '☀️'
  },
  {
    id: 'fm-145',
    word: 'Winter',
    reference: 'Genesis 8:22',
    description: 'First mention of winter, after the flood',
    category: 'months',
    context: 'Seedtime and harvest, cold and heat, summer and winter will never cease.',
    significance: 'Winter represents rest and preparation.',
    relatedReferences: ['Song of Solomon 2:11', 'Matthew 24:20', 'John 10:22'],
    icon: '❄️'
  },
  {
    id: 'fm-146',
    word: 'Year',
    reference: 'Genesis 1:14',
    description: 'First mention of a year, for marking seasons',
    category: 'months',
    context: 'The lights in the sky are for seasons, days, and years.',
    significance: 'Years mark the passage of time and God\'s faithfulness.',
    relatedReferences: ['Exodus 12:2', 'Leviticus 25:8-12', 'Luke 4:19'],
    icon: '📅'
  },
  {
    id: 'fm-147',
    word: 'Day of Atonement',
    reference: 'Leviticus 16:29-30',
    description: 'First mention of the Day of Atonement',
    category: 'months',
    context: 'The tenth day of the seventh month is the Day of Atonement.',
    significance: 'The Day of Atonement represents the ultimate sacrifice of Christ.',
    relatedReferences: ['Leviticus 23:27-32', 'Hebrews 9:7-14', 'Hebrews 10:19-22'],
    icon: '🕊️'
  },
  {
    id: 'fm-148',
    word: 'Feast of Tabernacles',
    reference: 'Leviticus 23:34-36',
    description: 'First mention of the Feast of Tabernacles',
    category: 'months',
    context: 'The fifteenth day of the seventh month is the Feast of Tabernacles.',
    significance: 'The feast represents God\'s provision and dwelling with His people.',
    relatedReferences: ['Deuteronomy 16:13-15', 'Nehemiah 8:14-18', 'John 7:2-10'],
    icon: '⛺'
  },
  {
    id: 'fm-149',
    word: 'Feast of Unleavened Bread',
    reference: 'Exodus 12:17',
    description: 'First mention of the Feast of Unleavened Bread',
    category: 'months',
    context: 'The Feast of Unleavened Bread commemorates the Exodus.',
    significance: 'The feast represents purity and the removal of sin.',
    relatedReferences: ['Exodus 13:6-10', 'Luke 22:1', '1 Corinthians 5:6-8'],
    icon: '🍞'
  },

  // ================================================================
  // SECTION 14: INSTRUMENTS (8 entries)
  // ================================================================
  {
    id: 'fm-150',
    word: 'Harp',
    reference: 'Genesis 4:21',
    description: 'First mention of a harp',
    category: 'instruments',
    context: 'Jubal was the father of all who play the harp and flute.',
    significance: 'The harp is an instrument of worship and praise.',
    relatedReferences: ['Psalm 33:2', 'Psalm 150:3', 'Revelation 5:8'],
    icon: '🎵'
  },
  {
    id: 'fm-151',
    word: 'Flute',
    reference: 'Genesis 4:21',
    description: 'First mention of a flute',
    category: 'instruments',
    context: 'Jubal was the father of all who play the harp and flute.',
    significance: 'The flute is an instrument of celebration and worship.',
    relatedReferences: ['1 Kings 1:40', 'Psalm 150:4', 'Daniel 3:5'],
    icon: '🎵'
  },
  {
    id: 'fm-152',
    word: 'Trumpet',
    reference: 'Exodus 19:16',
    description: 'First mention of a trumpet, at Sinai',
    category: 'instruments',
    context: 'The sound of the trumpet grew louder and louder.',
    significance: 'The trumpet announces God\'s presence and call to worship.',
    relatedReferences: ['Joshua 6:4-20', '1 Corinthians 15:52', 'Revelation 8:2'],
    icon: '🎺'
  },
  {
    id: 'fm-153',
    word: 'Cymbals',
    reference: '2 Samuel 6:5',
    description: 'First mention of cymbals, in worship',
    category: 'instruments',
    context: 'David and all Israel celebrated with cymbals, harps, and lyres.',
    significance: 'Cymbals represent joyful praise and celebration.',
    relatedReferences: ['Psalm 150:5', '1 Chronicles 15:19', '1 Corinthians 13:1'],
    icon: '🥁'
  },
  {
    id: 'fm-154',
    word: 'Tambourine',
    reference: 'Genesis 31:27',
    description: 'First mention of a tambourine, in celebration',
    category: 'instruments',
    context: 'Laban asked why Jacob departed secretly without tambourines.',
    significance: 'The tambourine represents celebration and dance.',
    relatedReferences: ['Exodus 15:20', 'Psalm 68:25', 'Psalm 149:3'],
    icon: '🥁'
  },
  {
    id: 'fm-155',
    word: 'Lyre',
    reference: 'Genesis 4:21',
    description: 'First mention of a lyre',
    category: 'instruments',
    context: 'Jubal was the father of all who play the harp and flute.',
    significance: 'The lyre is an instrument of worship and praise.',
    relatedReferences: ['Psalm 33:2', 'Psalm 98:5', 'Psalm 150:3'],
    icon: '🎵'
  },
  {
    id: 'fm-156',
    word: 'Shofar (Ram\'s Horn)',
    reference: 'Exodus 19:13',
    description: 'First mention of a shofar, at Sinai',
    category: 'instruments',
    context: 'The ram\'s horn would sound to call the people to the mountain.',
    significance: 'The shofar calls people to worship and battle.',
    relatedReferences: ['Leviticus 25:9', 'Joshua 6:4-20', 'Psalm 98:6'],
    icon: '🎺'
  }
]

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getAllFirstMentions = (): FirstMention[] => {
  return firstMentions
}

export const getFirstMentionByWord = (word: string): FirstMention | undefined => {
  return firstMentions.find(fm => fm.word.toLowerCase() === word.toLowerCase())
}

export const searchFirstMentions = (query: string): FirstMention[] => {
  const lowerQuery = query.toLowerCase()
  return firstMentions.filter(fm =>
    fm.word.toLowerCase().includes(lowerQuery) ||
    fm.description.toLowerCase().includes(lowerQuery) ||
    fm.context.toLowerCase().includes(lowerQuery) ||
    fm.reference.toLowerCase().includes(lowerQuery) ||
    fm.significance.toLowerCase().includes(lowerQuery)
  )
}

export const getFirstMentionsByCategory = (category: FirstMentionCategory): FirstMention[] => {
  return firstMentions.filter(fm => fm.category === category)
}

export const getFirstMentionCategories = (): FirstMentionCategory[] => {
  return [
    'theology', 'creation', 'covenant', 'sin', 'salvation',
    'worship', 'relationships', 'prophecy', 'law', 'promise',
    'judgment', 'grace', 'names', 'places', 'events',
    'objects', 'animals', 'food', 'clothing', 'numbers',
    'colors', 'months', 'instruments', 'titles', 'symbols'
  ]
}

export const getCategoryCount = (): Record<FirstMentionCategory, number> => {
  const counts: Record<FirstMentionCategory, number> = {} as any
  firstMentions.forEach(fm => {
    counts[fm.category] = (counts[fm.category] || 0) + 1
  })
  return counts
}

export const getRandomFirstMention = (): FirstMention => {
  return firstMentions[Math.floor(Math.random() * firstMentions.length)]
}

export const getFirstMentionsByReference = (reference: string): FirstMention[] => {
  return firstMentions.filter(fm => fm.reference === reference)
}

export const getTotalFirstMentions = (): number => {
  return firstMentions.length
}

export const getFirstMentionStats = () => {
  return {
    total: firstMentions.length,
    categories: getCategoryCount(),
    categoryList: getFirstMentionCategories(),
    references: firstMentions.map(fm => fm.reference)
  }
}
