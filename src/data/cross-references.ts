export type CrossReference = {
  verse: string
  relatedVerses: string[]
  description: string
  category?: 'theology' | 'salvation' | 'prophecy' | 'wisdom' | 'christology' | 
    'pneumatology' | 'ecclesiology' | 'eschatology' | 'soteriology' | 
    'hamartiology' | 'bibliology' | 'angelology' | 'anthropology' | 
    'sanctification' | 'prayer' | 'worship' | 'suffering' | 'covenant' | 
    'law' | 'grace' | 'kingdom' | 'spiritual-warfare' | 'discipleship'
  theologicalTopic?: string[]
  importance?: 1 | 2 | 3 | 4 | 5
  testament?: 'old' | 'new' | 'both'
  difficulty?: 'basic' | 'intermediate' | 'advanced'
  keywords?: string[]
}

/**
 * Comprehensive Cross-Reference Database
 * 
 * Contains 150+ curated cross-references spanning the entire Bible,
 * covering major theological topics, key doctrines, and practical wisdom
 */
export const crossReferences: CrossReference[] = [
  // ================================================================
  // SECTION 1: GOD'S NATURE & ATTRIBUTES (Theology Proper)
  // ================================================================
  
  // 1.1 GOD'S EXISTENCE & NATURE
  {
    verse: 'Genesis 1:1',
    relatedVerses: [
      'John 1:1-3', 
      'Colossians 1:16-17', 
      'Hebrews 11:3', 
      'Psalm 33:6',
      'Psalm 19:1',
      'Romans 1:20',
      'Isaiah 40:26',
      'Revelation 4:11',
      'Acts 17:24-28',
      'Jeremiah 10:12-13',
      'Psalm 8:3-4',
      'Hebrews 1:2-3'
    ],
    description: 'Creation and the Word - God as Creator',
    category: 'theology',
    theologicalTopic: ['Creation', 'Sovereignty', 'Word of God', 'Trinity', 'Ex Nihilo'],
    importance: 5,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['creation', 'beginning', 'God', 'word', 'power']
  },
  {
    verse: 'Exodus 3:14',
    relatedVerses: [
      'John 8:58',
      'Revelation 1:8',
      'Psalm 90:2',
      'Isaiah 44:6',
      'John 17:5',
      'Hebrews 13:8',
      '2 Peter 3:8',
      'Malachi 3:6',
      'Revelation 4:8',
      'Isaiah 45:5-6',
      'Deuteronomy 32:39',
      'Psalm 102:25-27'
    ],
    description: 'God as "I AM" - self-existent and eternal',
    category: 'theology',
    theologicalTopic: ['Eternality', 'Self-existence', 'Names of God', 'Holiness', 'Immutability'],
    importance: 5,
    testament: 'both',
    difficulty: 'intermediate',
    keywords: ['I AM', 'eternal', 'self-existent', 'Yahweh', 'covenant name']
  },
  {
    verse: 'Deuteronomy 6:4',
    relatedVerses: [
      'Mark 12:29',
      '1 Corinthians 8:4-6',
      'Ephesians 4:6',
      'Isaiah 45:21-22',
      'Deuteronomy 4:35',
      'Psalm 86:10',
      'Zechariah 14:9',
      'Malachi 2:10',
      'Romans 3:30',
      '1 Timothy 2:5'
    ],
    description: 'The Shema - God is One',
    category: 'theology',
    theologicalTopic: ['Monotheism', 'Unity of God', 'Shema', 'Israel'],
    importance: 5,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['shema', 'one God', 'monotheism', 'listen', 'obey']
  },
  {
    verse: 'Isaiah 55:8-9',
    relatedVerses: [
      'Romans 11:33-36',
      'Job 11:7-9',
      'Psalm 92:5-6',
      'Ephesians 3:20-21',
      '1 Corinthians 1:25',
      'Proverbs 3:5-6',
      'Isaiah 40:13-14',
      'Jeremiah 23:18',
      'Psalm 145:3',
      'Isaiah 46:9-10',
      'Daniel 4:35',
      'Job 38:1-4'
    ],
    description: 'God\'s thoughts and ways higher than ours',
    category: 'theology',
    theologicalTopic: ['Sovereignty', 'Transcendence', 'Wisdom', 'Mystery', 'Incomprehensibility'],
    importance: 4,
    testament: 'both',
    difficulty: 'intermediate',
    keywords: ['higher thoughts', 'sovereignty', 'wisdom', 'transcendence']
  },

  // 1.2 GOD'S HOLINESS & RIGHTEOUSNESS
  {
    verse: 'Isaiah 6:3',
    relatedVerses: [
      'Revelation 4:8',
      'Psalm 99:9',
      '1 Peter 1:15-16',
      'Leviticus 19:2',
      'Isaiah 57:15',
      'Habakkuk 1:13',
      'Psalm 5:4-5',
      'Exodus 15:11',
      'Psalm 22:3',
      '1 Samuel 2:2',
      'Psalm 96:9',
      'Revelation 15:4'
    ],
    description: 'Holy, holy, holy - the holiness of God',
    category: 'theology',
    theologicalTopic: ['Holiness', 'Transcendence', 'Worship', 'Purity', 'Glory'],
    importance: 5,
    testament: 'both',
    difficulty: 'intermediate',
    keywords: ['holy', 'seraphim', 'glory', 'purity', 'reverence']
  },
  {
    verse: 'Psalm 145:17-18',
    relatedVerses: [
      'Deuteronomy 32:4',
      'Psalm 100:5',
      'Psalm 119:68',
      'Jeremiah 33:11',
      'Nahum 1:7',
      'Psalm 86:5',
      'James 5:11',
      'Romans 2:4',
      'Exodus 34:6-7',
      'Psalm 103:8',
      'Joel 2:13',
      'Micah 7:18'
    ],
    description: 'The righteousness and goodness of God',
    category: 'theology',
    theologicalTopic: ['Righteousness', 'Goodness', 'Merciful', 'Gracious', 'Faithfulness'],
    importance: 4,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['righteous', 'good', 'merciful', 'gracious', 'faithful']
  },

  // 1.3 TRINITY
  {
    verse: 'Matthew 28:19',
    relatedVerses: [
      '2 Corinthians 13:14',
      '1 Peter 1:2',
      'Ephesians 2:18',
      'John 14:16-17',
      'John 15:26',
      'Galatians 4:6',
      'Romans 8:9-11',
      '1 Corinthians 12:4-6',
      'John 1:1-14',
      'Genesis 1:26',
      'Isaiah 48:16',
      'Revelation 1:4-5'
    ],
    description: 'The Trinity - Father, Son, and Holy Spirit',
    category: 'theology',
    theologicalTopic: ['Trinity', 'Godhead', 'Baptism', 'Community'],
    importance: 5,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['trinity', 'father', 'son', 'holy spirit', 'baptism']
  },

  // ================================================================
  // SECTION 2: JESUS CHRIST (Christology)
  // ================================================================

  // 2.1 INCARNATION & DEITY
  {
    verse: 'John 1:1-14',
    relatedVerses: [
      'Philippians 2:5-11',
      'Colossians 1:15-20',
      'Hebrews 1:1-3',
      'Colossians 2:9-10',
      'Revelation 19:13',
      '1 Timothy 3:16',
      'John 17:5',
      '2 Corinthians 8:9',
      'Isaiah 7:14',
      'Matthew 1:23',
      'Galatians 4:4-5',
      'John 5:18'
    ],
    description: 'The Word became flesh - Christ\'s pre-existence and incarnation',
    category: 'christology',
    theologicalTopic: ['Incarnation', 'Divinity of Christ', 'Word of God', 'Glory', 'Humanity of Christ'],
    importance: 5,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['incarnation', 'word', 'flesh', 'divinity', 'glory']
  },
  {
    verse: 'John 14:6',
    relatedVerses: [
      'Acts 4:12',
      '1 Timothy 2:5',
      'Hebrews 9:15',
      'Matthew 11:27',
      'John 10:9',
      'John 6:35',
      'John 11:25',
      'Colossians 1:28',
      'John 8:12',
      'John 3:16-18',
      'Romans 10:12',
      'John 17:3'
    ],
    description: 'Jesus is the way, truth, and life - exclusive salvation',
    category: 'christology',
    theologicalTopic: ['Exclusivity', 'Truth', 'Life', 'Mediator', 'Salvation'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['way', 'truth', 'life', 'exclusive', 'salvation']
  },
  {
    verse: 'Colossians 2:9-10',
    relatedVerses: [
      'John 1:16-17',
      'Romans 1:3-4',
      'Hebrews 5:5-6',
      '2 Peter 1:17',
      'Matthew 17:5',
      'Hebrews 1:8-9',
      'Revelation 1:17-18',
      'Philippians 2:6-8',
      'Acts 2:36',
      '1 Corinthians 1:30',
      'Colossians 1:19',
      'John 20:28'
    ],
    description: 'Fullness of deity in Christ',
    category: 'christology',
    theologicalTopic: ['Deity of Christ', 'Fullness', 'Head of Church', 'Supremacy'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['fullness', 'deity', 'bodily', 'head', 'supremacy']
  },

  // 2.2 ATONEMENT & SACRIFICE
  {
    verse: 'Isaiah 53:5-6',
    relatedVerses: [
      '1 Peter 2:24-25',
      '2 Corinthians 5:21',
      'Hebrews 9:28',
      '1 John 2:2',
      'Romans 4:25',
      'Colossians 1:22',
      'Ephesians 5:2',
      'Acts 8:32-33',
      'Isaiah 53:10-12',
      'Mark 10:45',
      'Matthew 20:28',
      'John 1:29'
    ],
    description: 'Suffering servant - atonement for sin',
    category: 'soteriology',
    theologicalTopic: ['Atonement', 'Substitution', 'Suffering', 'Sin', 'Sacrifice'],
    importance: 5,
    testament: 'both',
    difficulty: 'intermediate',
    keywords: ['suffering', 'servant', 'atonement', 'substitution', 'sin']
  },
  {
    verse: 'Romans 3:23-25',
    relatedVerses: [
      'Romans 5:8-9',
      'Ephesians 2:8-9',
      '1 John 2:2',
      'Galatians 2:16',
      'Hebrews 9:22',
      'Leviticus 17:11',
      'Matthew 26:28',
      'Acts 13:38-39',
      'Romans 6:23',
      'Colossians 2:13-14',
      '1 Corinthians 15:3-4',
      '2 Corinthians 5:18-19'
    ],
    description: 'Justification by grace through redemption in Christ',
    category: 'soteriology',
    theologicalTopic: ['Justification', 'Redemption', 'Grace', 'Atonement', 'Propitiation'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['justification', 'redemption', 'grace', 'propitiation', 'faith']
  },

  // 2.3 RESURRECTION
  {
    verse: '1 Corinthians 15:3-4',
    relatedVerses: [
      'Matthew 28:6-7',
      'Luke 24:6-7',
      'John 20:19-20',
      'Acts 2:24',
      'Romans 1:4',
      'Romans 6:4-5',
      'Colossians 2:12',
      '2 Timothy 2:8',
      '1 Peter 1:3',
      'Revelation 1:18',
      'Acts 4:10',
      'Philippians 3:10-11'
    ],
    description: 'The gospel - death, burial, and resurrection of Christ',
    category: 'soteriology',
    theologicalTopic: ['Resurrection', 'Gospel', 'Victory', 'Death', 'Burial'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['gospel', 'resurrection', 'death', 'burial', 'victory']
  },

  // 2.4 SECOND COMING
  {
    verse: 'Acts 1:10-11',
    relatedVerses: [
      'John 14:3',
      '1 Thessalonians 4:16-17',
      'Revelation 1:7',
      'Hebrews 9:28',
      'Philippians 3:20-21',
      'Titus 2:13',
      '2 Peter 3:10',
      'Matthew 24:30',
      'Mark 13:26-27',
      'Luke 21:27',
      '1 Corinthians 15:51-52',
      'Revelation 22:12'
    ],
    description: 'Christ will return in the same way',
    category: 'eschatology',
    theologicalTopic: ['Second Coming', 'Ascension', 'Hope', 'Promise', 'Return'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['return', 'ascension', 'clouds', 'heaven', 'promise']
  },

  // ================================================================
  // SECTION 3: HOLY SPIRIT (Pneumatology)
  // ================================================================

  // 3.1 PERSON & NATURE OF THE HOLY SPIRIT
  {
    verse: 'Acts 2:1-4',
    relatedVerses: [
      'Acts 1:8',
      'Joel 2:28-29',
      'Luke 24:49',
      'Acts 4:31',
      'Acts 10:44-46',
      'Acts 19:6',
      '1 Corinthians 12:4-7',
      'Ephesians 5:18',
      'Acts 2:38-39',
      'Acts 8:14-17',
      'Acts 11:15-17',
      'Acts 13:2-4'
    ],
    description: 'Pentecost - the Holy Spirit comes upon believers',
    category: 'pneumatology',
    theologicalTopic: ['Holy Spirit', 'Baptism of Spirit', 'Empowerment', 'Tongues', 'Pentecost'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['pentecost', 'holy spirit', 'baptism', 'fire', 'tongues']
  },
  {
    verse: 'John 14:16-17',
    relatedVerses: [
      'John 15:26',
      'John 16:7-15',
      'Romans 8:9-11',
      '1 Corinthians 6:19',
      'Ephesians 1:13-14',
      'Ephesians 4:30',
      'Galatians 4:6',
      '1 Corinthians 2:10-12',
      'John 14:25-27',
      'Luke 11:13',
      'Romans 5:5',
      '1 John 2:27'
    ],
    description: 'The Holy Spirit as Helper and Comforter',
    category: 'pneumatology',
    theologicalTopic: ['Holy Spirit', 'Comforter', 'Helper', 'Teacher', 'Guide'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['helper', 'comforter', 'advocate', 'teacher', 'spirit']
  },

  // 3.2 HOLY SPIRIT IN THE BELIEVER'S LIFE
  {
    verse: 'Ephesians 5:18-21',
    relatedVerses: [
      'Colossians 3:16-17',
      'Acts 2:4',
      'Romans 8:9-11',
      '1 Corinthians 12:13',
      'Galatians 5:16-18',
      'Titus 3:5-6',
      'Romans 15:13',
      'John 7:37-39',
      'Acts 4:31',
      'Acts 9:17',
      'Romans 8:26-27',
      '1 Corinthians 14:15'
    ],
    description: 'Be filled with the Spirit - Spirit-filled life',
    category: 'pneumatology',
    theologicalTopic: ['Holy Spirit', 'Filling', 'Worship', 'Community', 'Submission'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['filled', 'spirit', 'worship', 'submission', 'gratitude']
  },
  {
    verse: 'Romans 8:26-27',
    relatedVerses: [
      'Galatians 4:6',
      'Ephesians 6:18',
      'Jude 1:20',
      'Romans 8:34',
      'John 14:16-17',
      'John 16:23-24',
      '1 Corinthians 14:14-15',
      'Psalm 139:1-4',
      'Zechariah 12:10',
      'Acts 2:4',
      'Romans 8:15-16',
      '2 Corinthians 5:2-4'
    ],
    description: 'The Spirit intercedes for us',
    category: 'pneumatology',
    theologicalTopic: ['Holy Spirit', 'Prayer', 'Intercession', 'Weakness', 'Help'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['intercedes', 'prayer', 'groans', 'weakness', 'spirit']
  },

  // ================================================================
  // SECTION 4: SALVATION (Soteriology)
  // ================================================================

  // 4.1 CALLING & ELECTION
  {
    verse: 'Romans 8:28-30',
    relatedVerses: [
      'Ephesians 1:4-11',
      '2 Timothy 1:9',
      '1 Peter 1:2',
      'Romans 9:11-24',
      'Romans 11:2-5',
      'John 15:16',
      'John 6:37-44',
      'Acts 13:48',
      'Ephesians 1:13-14',
      '2 Thessalonians 2:13-14',
      'Romans 8:31-39',
      '1 Corinthians 1:26-31'
    ],
    description: 'The golden chain of salvation - foreknew, predestined, called, justified, glorified',
    category: 'soteriology',
    theologicalTopic: ['Election', 'Predestination', 'Calling', 'Justification', 'Glorification'],
    importance: 5,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['election', 'predestination', 'called', 'justified', 'glorified']
  },
  {
    verse: 'John 6:44',
    relatedVerses: [
      'John 6:65',
      'John 12:32',
      'John 16:8-11',
      'Acts 16:14',
      'Romans 3:10-12',
      'Romans 8:7-8',
      '1 Corinthians 2:14',
      'Ephesians 2:1-5',
      '2 Corinthians 4:4-6',
      'Colossians 2:13',
      'Titus 3:3-5',
      '1 Peter 1:22-23'
    ],
    description: 'No one can come to Christ unless drawn by the Father',
    category: 'soteriology',
    theologicalTopic: ['Election', 'Drawing', 'Depravity', 'Grace', 'Calling'],
    importance: 4,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['draw', 'father', 'come', 'raise', 'spirit']
  },

  // 4.2 REPENTANCE & FAITH
  {
    verse: 'Acts 3:19',
    relatedVerses: [
      'Acts 2:38',
      'Luke 24:46-47',
      'Romans 10:9-10',
      '2 Corinthians 7:9-10',
      'Acts 20:21',
      'Acts 26:20',
      'Matthew 4:17',
      'Mark 1:15',
      'Luke 13:3',
      'Acts 17:30-31',
      'Acts 11:18',
      '2 Peter 3:9'
    ],
    description: 'Repent and turn to God - the call to repentance',
    category: 'soteriology',
    theologicalTopic: ['Repentance', 'Conversion', 'Forgiveness', 'Times of Refreshing'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['repent', 'turn', 'sins', 'blotted out', 'refreshing']
  },
  {
    verse: 'Hebrews 11:6',
    relatedVerses: [
      'Hebrews 11:1',
      'Romans 10:17',
      'John 6:29',
      'Mark 11:22-24',
      'Matthew 21:21-22',
      '1 John 5:4-5',
      'John 14:12-14',
      'James 1:6-8',
      '2 Corinthians 5:7',
      '1 Peter 1:8-9',
      'John 3:18',
      'John 5:24'
    ],
    description: 'Faith that pleases God',
    category: 'soteriology',
    theologicalTopic: ['Faith', 'Belief', 'Seeking God', 'Reward', 'Trust'],
    importance: 5,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['faith', 'pleases', 'seek', 'reward', 'believe']
  },

  // 4.3 JUSTIFICATION & REGENERATION
  {
    verse: '2 Corinthians 5:17',
    relatedVerses: [
      'Romans 6:4',
      'Galatians 6:15',
      'Ephesians 4:24',
      'Colossians 3:10',
      'Ezekiel 36:26',
      'John 3:3',
      '1 Peter 1:23',
      'Romans 8:1-2',
      'Titus 3:5',
      '1 John 3:9',
      '2 Corinthians 4:16',
      'Revelation 21:5'
    ],
    description: 'New creation in Christ - regeneration',
    category: 'soteriology',
    theologicalTopic: ['New Birth', 'Regeneration', 'Transformation', 'Identity in Christ'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['new creation', 'old things passed', 'renewal', 'transformation']
  },
  {
    verse: 'Romans 5:1-2',
    relatedVerses: [
      'Romans 8:1',
      'John 14:27',
      'Philippians 4:7',
      'Ephesians 2:14-18',
      'Colossians 1:20-22',
      '2 Corinthians 5:18-19',
      'Acts 10:36',
      'Romans 14:17',
      'Ephesians 2:13',
      'Colossians 1:13-14',
      'John 16:33',
      'Romans 15:13'
    ],
    description: 'Peace with God through justification by faith',
    category: 'soteriology',
    theologicalTopic: ['Justification', 'Peace', 'Faith', 'Grace', 'Access'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['peace', 'justified', 'faith', 'grace', 'access']
  },

  // 4.4 ASSURANCE
  {
    verse: '1 John 5:13',
    relatedVerses: [
      'John 20:31',
      'Romans 10:9-10',
      '1 Peter 1:3-5',
      'Hebrews 10:22-23',
      '2 Timothy 1:12',
      'Romans 8:38-39',
      'John 10:27-29',
      '1 John 2:3-6',
      '1 John 3:14',
      '1 John 4:13',
      'John 5:24',
      'Romans 8:16'
    ],
    description: 'Assurance of salvation through faith',
    category: 'soteriology',
    theologicalTopic: ['Assurance', 'Eternal Life', 'Faith', 'Confidence', 'Witness'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['assurance', 'eternal life', 'believe', 'know', 'witness']
  },

  // ================================================================
  // SECTION 5: THE CHURCH (Ecclesiology)
  // ================================================================

  // 5.1 NATURE OF THE CHURCH
  {
    verse: 'Ephesians 1:22-23',
    relatedVerses: [
      'Colossians 1:18',
      'Ephesians 5:23',
      '1 Corinthians 12:27',
      'Romans 12:4-5',
      '1 Corinthians 10:17',
      'Ephesians 4:15-16',
      'Colossians 2:19',
      '1 Peter 2:5',
      '1 Corinthians 3:16-17',
      'Ephesians 2:19-22',
      '1 Timothy 3:15',
      'Hebrews 3:6'
    ],
    description: 'The church as the body of Christ',
    category: 'ecclesiology',
    theologicalTopic: ['Church', 'Body of Christ', 'Head', 'Unity', 'Fellowship'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['body', 'church', 'head', 'fullness', 'body of Christ']
  },
  {
    verse: '1 Peter 2:9-10',
    relatedVerses: [
      'Exodus 19:5-6',
      'Deuteronomy 7:6',
      'Isaiah 43:20-21',
      'Revelation 1:6',
      'Revelation 5:9-10',
      'Titus 2:14',
      'Ephesians 2:19',
      'Romans 9:25-26',
      'Hosea 2:23',
      'Hebrews 3:1',
      '1 Corinthians 3:9',
      'Colossians 1:21-22'
    ],
    description: 'A chosen people, royal priesthood, holy nation',
    category: 'ecclesiology',
    theologicalTopic: ['Priesthood', 'Holy Nation', 'People of God', 'Identity', 'Witness'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['chosen', 'royal', 'priesthood', 'holy', 'people']
  },

  // 5.2 CHURCH GOVERNMENT & OFFICES
  {
    verse: '1 Timothy 3:1-7',
    relatedVerses: [
      'Titus 1:5-9',
      'Acts 20:28',
      '1 Peter 5:1-4',
      '1 Timothy 5:17-19',
      'Ephesians 4:11-12',
      '1 Corinthians 12:28',
      'Romans 12:6-8',
      'Hebrews 13:7',
      'Hebrews 13:17',
      'Acts 14:23',
      'Titus 1:5',
      '2 Timothy 2:2'
    ],
    description: 'Qualifications for overseers/elders',
    category: 'ecclesiology',
    theologicalTopic: ['Leadership', 'Elders', 'Overseers', 'Qualifications', 'Pastoral Ministry'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['overseer', 'elder', 'qualifications', 'leadership', 'pastor']
  },

  // 5.3 ORDINANCES - BAPTISM
  {
    verse: 'Romans 6:3-4',
    relatedVerses: [
      'Colossians 2:12',
      'Galatians 3:27',
      'Acts 2:38-41',
      'Matthew 28:19',
      'Mark 16:16',
      '1 Peter 3:21',
      'Acts 8:36-38',
      'Acts 22:16',
      'Romans 6:5-11',
      'Ephesians 4:5',
      '1 Corinthians 12:13',
      'Acts 10:47-48'
    ],
    description: 'Baptism - identification with Christ in death and resurrection',
    category: 'ecclesiology',
    theologicalTopic: ['Baptism', 'Symbolism', 'Death to Sin', 'New Life', 'Obedience'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['baptism', 'death', 'burial', 'resurrection', 'new life']
  },

  // 5.4 ORDINANCES - COMMUNION
  {
    verse: '1 Corinthians 11:23-26',
    relatedVerses: [
      'Luke 22:19-20',
      'Matthew 26:26-28',
      'Mark 14:22-24',
      'Acts 2:42',
      'Acts 20:7',
      '1 Corinthians 10:16-17',
      'John 6:53-56',
      'Hebrews 9:22',
      'Exodus 12:14',
      'Exodus 24:8',
      'Jeremiah 31:31-34',
      '1 Corinthians 11:27-32'
    ],
    description: 'The Lord\'s Supper - remembrance of Christ\'s sacrifice',
    category: 'ecclesiology',
    theologicalTopic: ['Communion', 'Remembrance', 'Covenant', 'Sacrifice', 'Examination'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['communion', 'remembrance', 'body', 'blood', 'covenant']
  },

  // ================================================================
  // SECTION 6: LAST THINGS (Eschatology)
  // ================================================================

  // 6.1 DEATH & AFTERLIFE
  {
    verse: 'Hebrews 9:27',
    relatedVerses: [
      '2 Corinthians 5:10',
      'Romans 14:10-12',
      'Revelation 20:11-15',
      'Ecclesiastes 12:14',
      'Matthew 12:36-37',
      '1 Corinthians 3:11-15',
      '1 Peter 4:5',
      'Revelation 22:12',
      'Matthew 25:31-46',
      'John 5:28-29',
      'Acts 17:31',
      'Romans 2:16'
    ],
    description: 'Appointed to die once, then judgment',
    category: 'eschatology',
    theologicalTopic: ['Judgment', 'Death', 'Accountability', 'Eternal Destiny', 'Recompense'],
    importance: 4,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['death', 'judgment', 'accountability', 'appointed', 'destiny']
  },
  {
    verse: 'Revelation 21:1-4',
    relatedVerses: [
      '2 Peter 3:10-13',
      'Isaiah 65:17-25',
      'Romans 8:18-21',
      '1 Corinthians 15:24-28',
      'Isaiah 25:6-9',
      'Revelation 22:1-5',
      '2 Corinthians 5:17',
      'Acts 3:19-21',
      'Isaiah 60:18-20',
      'Revelation 7:15-17',
      'Ezekiel 37:26-28',
      'John 14:1-3'
    ],
    description: 'New heaven and new earth - God\'s final dwelling with His people',
    category: 'eschatology',
    theologicalTopic: ['Restoration', 'Eternal State', 'God\'s Presence', 'Heaven', 'New Creation'],
    importance: 5,
    testament: 'both',
    difficulty: 'intermediate',
    keywords: ['new heaven', 'new earth', 'dwelling', 'tears', 'restoration']
  },

  // 6.2 HEAVEN & HELL
  {
    verse: 'Matthew 25:46',
    relatedVerses: [
      'Daniel 12:2',
      'John 5:28-29',
      'Revelation 20:10-15',
      'Revelation 21:8',
      'Mark 9:43-48',
      'Matthew 13:41-43',
      'Matthew 13:49-50',
      'Luke 16:22-26',
      '2 Thessalonians 1:8-9',
      'Jude 1:7',
      'Revelation 14:9-11',
      'Isaiah 66:24'
    ],
    description: 'Eternal punishment and eternal life',
    category: 'eschatology',
    theologicalTopic: ['Heaven', 'Hell', 'Eternal Punishment', 'Eternal Life', 'Justice'],
    importance: 5,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['eternal', 'punishment', 'life', 'righteous', 'condemnation']
  },
  {
    verse: 'John 14:1-3',
    relatedVerses: [
      'Revelation 21:1-4',
      'John 17:24',
      'Ephesians 2:6',
      'Colossians 1:5',
      '1 Peter 1:3-4',
      'Hebrews 11:10',
      'John 12:26',
      '2 Corinthians 5:1-2',
      'Philippians 3:20-21',
      'Colossians 3:1-4',
      '1 Thessalonians 4:16-17',
      'Revelation 22:3-5'
    ],
    description: 'Jesus prepares a place for us in heaven',
    category: 'eschatology',
    theologicalTopic: ['Heaven', 'Promises', 'Preparation', 'Comfort', 'Hope'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['prepare', 'place', 'mansions', 'come again', 'receive']
  },

  // 6.3 THE END TIMES
  {
    verse: 'Matthew 24:30-31',
    relatedVerses: [
      'Revelation 1:7',
      'Daniel 7:13-14',
      'Zechariah 12:10-14',
      'Revelation 19:11-16',
      'Acts 1:11',
      '1 Thessalonians 4:16-17',
      'Matthew 26:64',
      'Mark 14:62',
      'Luke 21:27',
      'Revelation 6:15-17',
      '2 Peter 3:10-12',
      '1 Corinthians 15:52'
    ],
    description: 'The coming of the Son of Man - second coming',
    category: 'eschatology',
    theologicalTopic: ['Second Coming', 'Glory', 'Judgment', 'Kingdom', 'Angels'],
    importance: 5,
    testament: 'both',
    difficulty: 'intermediate',
    keywords: ['coming', 'son of man', 'glory', 'trumpet', 'gather']
  },

  // 6.4 RESURRECTION OF THE DEAD
  {
    verse: '1 Corinthians 15:51-52',
    relatedVerses: [
      '1 Thessalonians 4:15-17',
      'Philippians 3:20-21',
      '1 Corinthians 15:42-49',
      '1 John 3:2-3',
      'Romans 8:23',
      '2 Corinthians 5:1-5',
      'Colossians 3:4',
      'Revelation 20:4-6',
      'Daniel 12:2-3',
      'John 11:25-26',
      '2 Timothy 2:11-12',
      'Romans 6:5'
    ],
    description: 'The mystery of the resurrection - we will be changed',
    category: 'eschatology',
    theologicalTopic: ['Resurrection', 'Transformation', 'Immortality', 'Rapture', 'Mystery'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['mystery', 'resurrection', 'changed', 'trumpet', 'immortality']
  },

  // ================================================================
  // SECTION 7: SPIRITUAL LIFE & GROWTH (Sanctification)
  // ================================================================

  // 7.1 FRUIT OF THE SPIRIT
  {
    verse: 'Galatians 5:22-23',
    relatedVerses: [
      'Ephesians 5:9',
      'Colossians 3:12-15',
      '1 Corinthians 13:4-7',
      '2 Peter 1:5-8',
      'Romans 14:17',
      '1 Timothy 6:11',
      'Titus 2:11-12',
      '1 John 4:16-18',
      'Matthew 7:16-20',
      'John 15:1-8',
      'Romans 8:9-11',
      'Ephesians 4:1-3'
    ],
    description: 'Fruit of the Spirit - character transformation',
    category: 'sanctification',
    theologicalTopic: ['Fruit of Spirit', 'Character', 'Holiness', 'Love', 'Self-control'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['fruit', 'spirit', 'love', 'joy', 'peace']
  },
  {
    verse: '2 Peter 1:5-8',
    relatedVerses: [
      'Galatians 5:22-23',
      '1 Timothy 6:11',
      'Colossians 3:12-14',
      'Romans 5:3-5',
      'James 1:2-4',
      'Romans 12:1-2',
      'Philippians 4:8',
      '1 Thessalonians 5:23',
      '2 Corinthians 7:1',
      '1 Peter 1:15-16',
      'Ephesians 4:22-24',
      'Hebrews 12:14'
    ],
    description: 'Add to your faith virtue, knowledge, self-control, etc.',
    category: 'sanctification',
    theologicalTopic: ['Growth', 'Virtue', 'Knowledge', 'Self-control', 'Godliness'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['add', 'faith', 'virtue', 'knowledge', 'self-control']
  },

  // 7.2 HOLINESS & PURITY
  {
    verse: '1 Peter 1:15-16',
    relatedVerses: [
      'Leviticus 19:2',
      'Leviticus 20:7',
      'Romans 12:1',
      '2 Corinthians 7:1',
      'Hebrews 12:14',
      '1 Thessalonians 4:3-7',
      'Ephesians 5:25-27',
      '2 Timothy 2:21',
      '1 John 3:2-3',
      'Titus 2:11-14',
      'Colossians 3:1-5',
      '1 Corinthians 6:18-20'
    ],
    description: 'Be holy because God is holy',
    category: 'sanctification',
    theologicalTopic: ['Holiness', 'Purity', 'Obedience', 'Separation', 'Imitation'],
    importance: 5,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['holy', 'obedience', 'purity', 'conformity', 'child']
  },
  {
    verse: '1 Thessalonians 4:3-5',
    relatedVerses: [
      '1 Corinthians 6:18-20',
      'Ephesians 5:3-5',
      'Colossians 3:5-8',
      '1 Peter 2:11-12',
      'Romans 13:13-14',
      'Galatians 5:16-21',
      '1 John 2:15-17',
      '2 Timothy 2:22',
      'Titus 2:11-12',
      '1 Corinthians 10:8',
      '1 Thessalonians 5:22',
      '1 Peter 4:2-4'
    ],
    description: 'Sanctification - abstain from sexual immorality',
    category: 'sanctification',
    theologicalTopic: ['Sexual Purity', 'Sanctification', 'Self-control', 'Holiness'],
    importance: 4,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['sanctification', 'sexual immorality', 'control', 'honor', 'purity']
  },

  // 7.3 CONFORMITY TO CHRIST
  {
    verse: 'Romans 8:29',
    relatedVerses: [
      'Ephesians 1:4-5',
      'Ephesians 4:13-15',
      '2 Corinthians 3:18',
      'Colossians 1:28',
      '1 John 3:2-3',
      'Philippians 1:6',
      'Philippians 3:20-21',
      'Romans 12:2',
      '1 Corinthians 15:49',
      '2 Corinthians 4:16',
      'Colossians 3:10',
      'Hebrews 2:10-11'
    ],
    description: 'Predestined to be conformed to the image of Christ',
    category: 'sanctification',
    theologicalTopic: ['Conformity', 'Image of Christ', 'Predestination', 'Transformation'],
    importance: 4,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['conformed', 'image', 'firstborn', 'predestined', 'brothers']
  },

  // ================================================================
  // SECTION 8: PRAYER & WORSHIP
  // ================================================================

  // 8.1 PRAYER
  {
    verse: 'Philippians 4:6-7',
    relatedVerses: [
      '1 Peter 5:7',
      'Matthew 6:25-34',
      'Psalm 55:22',
      'John 14:27',
      'Colossians 4:2',
      '1 Timothy 2:1-2',
      'James 4:2-3',
      'Romans 8:26',
      'Psalm 34:4-5',
      'Psalm 37:5-6',
      'Ephesians 6:18',
      'Hebrews 4:16'
    ],
    description: 'Prayer and the peace of God',
    category: 'prayer',
    theologicalTopic: ['Prayer', 'Peace', 'Anxiety', 'Thanksgiving', 'Supplication'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['prayer', 'peace', 'anxiety', 'thanksgiving', 'guard']
  },
  {
    verse: 'Matthew 6:9-13',
    relatedVerses: [
      'Luke 11:2-4',
      'John 17:1-26',
      'Romans 8:15',
      'Galatians 4:6',
      'Psalm 103:20-21',
      '1 Kings 8:28-30',
      'Luke 18:1-8',
      'John 16:23-24',
      'Matthew 7:7-8',
      'Mark 11:24',
      '1 John 5:14-15',
      'James 5:16-18'
    ],
    description: 'The Lord\'s Prayer - model for prayer',
    category: 'prayer',
    theologicalTopic: ['Prayer', 'Kingdom', 'Forgiveness', 'Temptation', 'Worship'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['prayer', 'kingdom', 'forgive', 'temptation', 'deliver']
  },

  // 8.2 WORSHIP
  {
    verse: 'John 4:23-24',
    relatedVerses: [
      'Psalm 29:2',
      'Psalm 96:9',
      'Philippians 3:3',
      'Romans 12:1',
      'Hebrews 13:15',
      '1 Peter 2:5',
      'Psalm 100:1-5',
      'Ephesians 5:19-20',
      'Colossians 3:16-17',
      'Psalm 95:6-7',
      'Revelation 5:9-10',
      'Revelation 19:1-8'
    ],
    description: 'Worship in spirit and truth',
    category: 'worship',
    theologicalTopic: ['Worship', 'Truth', 'Spirit', 'Adoration', 'Sincerity'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['worship', 'spirit', 'truth', 'adoration', 'sincerity']
  },

  // ================================================================
  // SECTION 9: SUFFERING & TRIALS
  // ================================================================

  {
    verse: 'James 1:2-4',
    relatedVerses: [
      'Romans 5:3-5',
      '1 Peter 1:6-7',
      '2 Corinthians 4:17-18',
      '2 Corinthians 12:9-10',
      'Hebrews 12:11',
      '1 Peter 4:12-13',
      '2 Timothy 2:12',
      'Romans 8:17-18',
      'Philippians 3:10-11',
      'Colossians 1:24',
      '1 Peter 5:10',
      '2 Corinthians 1:3-7'
    ],
    description: 'Trials produce steadfastness and maturity',
    category: 'suffering',
    theologicalTopic: ['Suffering', 'Trials', 'Steadfastness', 'Maturity', 'Joy'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['trials', 'joy', 'steadfastness', 'maturity', 'testing']
  },
  {
    verse: '2 Corinthians 12:9-10',
    relatedVerses: [
      'Philippians 4:13',
      '2 Corinthians 4:7-9',
      '2 Corinthians 11:30',
      '2 Corinthians 13:4',
      '1 Corinthians 1:25',
      'Ephesians 6:10',
      'Isaiah 40:29-31',
      '1 Peter 4:14',
      'Hebrews 11:32-34',
      'Romans 5:3-5',
      '2 Timothy 4:17',
      'Colossians 1:11'
    ],
    description: 'God\'s strength is made perfect in weakness',
    category: 'suffering',
    theologicalTopic: ['Weakness', 'Strength', 'Grace', 'Sufficiency', 'Boasting'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['grace', 'sufficient', 'weakness', 'strength', 'boast']
  },

  // ================================================================
  // SECTION 10: WISDOM & PRACTICAL LIVING
  // ================================================================

  // 10.1 WISDOM
  {
    verse: 'Proverbs 1:7',
    relatedVerses: [
      'Psalm 111:10',
      'Job 28:28',
      'Proverbs 9:10',
      'Proverbs 15:33',
      'Proverbs 19:23',
      'Ecclesiastes 12:13',
      'Proverbs 3:7',
      'Proverbs 8:13',
      'Proverbs 11:2',
      'Proverbs 14:16',
      'Proverbs 16:6',
      'Proverbs 22:4'
    ],
    description: 'The fear of the Lord is the beginning of knowledge',
    category: 'wisdom',
    theologicalTopic: ['Wisdom', 'Fear of God', 'Knowledge', 'Folly', 'Beginning'],
    importance: 5,
    testament: 'old',
    difficulty: 'basic',
    keywords: ['fear', 'Lord', 'wisdom', 'knowledge', 'beginning']
  },
  {
    verse: 'Proverbs 3:5-6',
    relatedVerses: [
      'Psalm 32:8', 
      'Proverbs 16:3', 
      'James 1:5', 
      'Psalm 37:5',
      'Jeremiah 17:7-8',
      'Proverbs 28:26',
      'Isaiah 30:21',
      'Colossians 3:15',
      'Psalm 37:3-7',
      'Proverbs 16:9',
      'Proverbs 20:24',
      'Isaiah 55:8-9'
    ],
    description: 'Trusting in the Lord for wisdom and guidance',
    category: 'wisdom',
    theologicalTopic: ['Trust', 'Guidance', 'Surrender', 'Wisdom', 'Direction'],
    importance: 5,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['trust', 'lean not', 'acknowledge', 'direct paths', 'wisdom']
  },

  // 10.2 WORK & STEWARDSHIP
  {
    verse: 'Colossians 3:23-24',
    relatedVerses: [
      'Ephesians 6:5-8',
      '1 Corinthians 10:31',
      '1 Corinthians 15:58',
      'Ecclesiastes 9:10',
      '1 Peter 4:10-11',
      '2 Corinthians 9:6-8',
      'Proverbs 22:29',
      'Proverbs 13:4',
      'Proverbs 14:23',
      'Romans 12:11',
      '1 Timothy 5:18',
      '2 Thessalonians 3:10-12'
    ],
    description: 'Working for the Lord with all your heart',
    category: 'wisdom',
    theologicalTopic: ['Work', 'Stewardship', 'Excellence', 'Serving', 'Reward'],
    importance: 4,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['work', 'heart', 'Lord', 'reward', 'inheritance']
  },

  // 10.3 MONEY & RICHES
  {
    verse: '1 Timothy 6:10',
    relatedVerses: [
      'Matthew 6:24',
      'Luke 16:13',
      'Proverbs 23:4-5',
      'Proverbs 28:20',
      'Hebrews 13:5',
      'Matthew 19:23-24',
      'Mark 10:23-25',
      'Luke 18:24-25',
      'Ecclesiastes 5:10',
      'Psalm 62:10',
      'Proverbs 11:28',
      '1 Timothy 6:17-19'
    ],
    description: 'Love of money is the root of all evil',
    category: 'wisdom',
    theologicalTopic: ['Money', 'Contentment', 'Greed', 'Stewardship', 'Riches'],
    importance: 4,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['money', 'love', 'root', 'evil', 'contentment']
  },

  // 10.4 RELATIONSHIPS
  {
    verse: 'Ephesians 5:22-33',
    relatedVerses: [
      'Colossians 3:18-19',
      '1 Peter 3:1-7',
      'Genesis 2:22-24',
      'Proverbs 18:22',
      'Proverbs 19:14',
      'Proverbs 31:10-31',
      'Titus 2:3-5',
      '1 Corinthians 7:1-16',
      '1 Corinthians 11:3',
      'Song of Solomon 4:7',
      'Ephesians 5:25-27',
      'Hebrews 13:4'
    ],
    description: 'Marriage - Christ and the church as the model',
    category: 'wisdom',
    theologicalTopic: ['Marriage', 'Husbands', 'Wives', 'Love', 'Submission'],
    importance: 4,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['marriage', 'husbands', 'wives', 'love', 'submission']
  },
  {
    verse: 'Ephesians 6:1-4',
    relatedVerses: [
      'Colossians 3:20-21',
      'Proverbs 1:8-9',
      'Proverbs 22:6',
      'Proverbs 23:13-14',
      'Proverbs 29:15-17',
      'Deuteronomy 6:6-7',
      'Psalm 78:4-7',
      '2 Timothy 3:14-15',
      'Hebrews 12:7-11',
      'Malachi 4:6',
      'Proverbs 13:24',
      'Proverbs 19:18'
    ],
    description: 'Children and parents - honoring and instruction',
    category: 'wisdom',
    theologicalTopic: ['Children', 'Parenting', 'Obedience', 'Training', 'Admonition'],
    importance: 4,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['children', 'parents', 'obey', 'train', 'honor']
  },

  // 10.5 TONGUE & SPEECH
  {
    verse: 'Ephesians 4:29',
    relatedVerses: [
      'Colossians 3:8',
      'Colossians 4:6',
      'Matthew 12:34-37',
      'Matthew 15:18-20',
      'James 3:1-12',
      'Proverbs 10:19',
      'Proverbs 12:18',
      'Proverbs 15:1',
      'Proverbs 16:24',
      'Proverbs 18:21',
      'Proverbs 25:11',
      '1 Peter 3:10'
    ],
    description: 'Wholesome speech - building up, not tearing down',
    category: 'wisdom',
    theologicalTopic: ['Speech', 'Edification', 'Grace', 'Tongue', 'Wholesome'],
    importance: 4,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['speech', 'edify', 'grace', 'wholesome', 'build up']
  },

  // ================================================================
  // SECTION 11: COVENANTS & PROMISES
  // ================================================================

  // 11.1 ABRAHAMIC COVENANT
  {
    verse: 'Genesis 12:2-3',
    relatedVerses: [
      'Genesis 15:18-21',
      'Genesis 17:4-8',
      'Genesis 22:17-18',
      'Galatians 3:6-9',
      'Romans 4:13-17',
      'Acts 3:25-26',
      'Hebrews 6:13-14',
      'Exodus 32:13',
      'Psalm 105:8-11',
      'Luke 1:73-75',
      'Galatians 3:14-16',
      'Ephesians 2:12-13'
    ],
    description: 'The Abrahamic Covenant - blessing to all nations',
    category: 'covenant',
    theologicalTopic: ['Covenant', 'Promise', 'Blessing', 'Nations', 'Faith'],
    importance: 5,
    testament: 'old',
    difficulty: 'intermediate',
    keywords: ['covenant', 'blessing', 'nations', 'great nation', 'faith']
  },

  // 11.2 DAVIDIC COVENANT
  {
    verse: '2 Samuel 7:12-16',
    relatedVerses: [
      'Psalm 89:3-4',
      'Psalm 132:11-12',
      'Isaiah 9:6-7',
      'Jeremiah 33:20-22',
      'Luke 1:31-33',
      'Acts 2:29-31',
      'Acts 13:22-23',
      'Hebrews 1:5',
      'Revelation 22:16',
      'Matthew 1:1',
      'Matthew 22:41-45',
      'Romans 1:3-4'
    ],
    description: 'The Davidic Covenant - eternal throne and kingdom',
    category: 'covenant',
    theologicalTopic: ['Covenant', 'David', 'Kingdom', 'Throne', 'Messiah'],
    importance: 5,
    testament: 'old',
    difficulty: 'advanced',
    keywords: ['covenant', 'throne', 'kingdom', 'eternal', 'house']
  },

  // 11.3 NEW COVENANT
  {
    verse: 'Jeremiah 31:31-34',
    relatedVerses: [
      'Hebrews 8:6-13',
      'Hebrews 10:16-17',
      'Luke 22:20',
      '1 Corinthians 11:25',
      '2 Corinthians 3:6',
      'Ezekiel 36:26-27',
      'Ezekiel 37:26-28',
      'Romans 11:26-27',
      '2 Corinthians 5:17',
      'John 14:6',
      'Acts 2:17-18',
      'Joel 2:28-32'
    ],
    description: 'The New Covenant - law written on hearts',
    category: 'covenant',
    theologicalTopic: ['New Covenant', 'Law', 'Heart', 'Forgiveness', 'Relationship'],
    importance: 5,
    testament: 'both',
    difficulty: 'advanced',
    keywords: ['new covenant', 'hearts', 'law', 'forgive', 'know']
  },

  // ================================================================
  // SECTION 12: ANGELS & SPIRITUAL BEINGS (Angelology)
  // ================================================================

  // 12.1 ANGELS
  {
    verse: 'Hebrews 1:14',
    relatedVerses: [
      'Psalm 34:7',
      'Psalm 91:11-12',
      'Matthew 18:10',
      'Acts 12:15',
      '2 Kings 6:17-18',
      'Daniel 6:22',
      'Hebrews 13:2',
      'Psalm 103:20-21',
      'Luke 2:13-14',
      'Acts 27:23-24',
      'Matthew 4:11',
      '1 Corinthians 6:3'
    ],
    description: 'Angels as ministering spirits sent to serve believers',
    category: 'angelology',
    theologicalTopic: ['Angels', 'Ministry', 'Protection', 'Service', 'Spirits'],
    importance: 3,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['angels', 'ministering', 'spirits', 'serve', 'heirs']
  },

  // 12.2 SATAN & DEMONS
  {
    verse: 'Ephesians 6:11-12',
    relatedVerses: [
      '1 Peter 5:8-9',
      'James 4:7',
      '2 Corinthians 11:14-15',
      'Revelation 12:9-10',
      'Luke 10:18-20',
      'John 10:10',
      'Romans 16:20',
      '2 Corinthians 2:11',
      'Colossians 2:15',
      'Hebrews 2:14',
      '1 John 3:8',
      'Jude 1:9'
    ],
    description: 'Spiritual warfare against the devil and powers of darkness',
    category: 'spiritual-warfare',
    theologicalTopic: ['Satan', 'Spiritual Warfare', 'Demons', 'Evil Forces', 'Armor of God'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['armor', 'powers', 'darkness', 'spiritual warfare', 'devil']
  },

  // ================================================================
  // SECTION 13: LOVE & RELATIONSHIPS
  // ================================================================

  {
    verse: '1 Corinthians 13:4-7',
    relatedVerses: [
      'John 13:34-35',
      'Romans 13:10',
      'Galatians 5:22-23',
      '1 Peter 4:8',
      'Colossians 3:14',
      '1 John 4:7-12',
      'Song of Solomon 8:6-7',
      'John 15:12-13',
      'Romans 12:9-10',
      '1 John 3:16-18',
      '1 Corinthians 16:14',
      'Ephesians 4:2'
    ],
    description: 'The definition and characteristics of love',
    category: 'wisdom',
    theologicalTopic: ['Love', 'Patience', 'Kindness', 'Endurance', 'Agape'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['love', 'patient', 'kind', 'endures', 'agape']
  },
  {
    verse: '1 John 4:7-10',
    relatedVerses: [
      'John 3:16',
      'Romans 5:8',
      '1 John 4:19',
      '1 Peter 1:22',
      'Romans 8:39',
      'Ephesians 2:4-5',
      'Titus 3:4-5',
      '2 Corinthians 5:14-15',
      '1 John 2:2',
      'John 15:13',
      'Galatians 2:20',
      'Ephesians 5:25'
    ],
    description: 'Love comes from God - God is love',
    category: 'wisdom',
    theologicalTopic: ['Love', 'God\'s Love', 'Atonement', 'Origins', 'Imitation'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['love', 'god is love', 'propitiation', 'abide', 'brothers']
  },

  // ================================================================
  // SECTION 14: HOPE & ENCOURAGEMENT
  // ================================================================

  {
    verse: 'Jeremiah 29:11',
    relatedVerses: [
      'Romans 8:28', 
      'Ephesians 1:11', 
      'Proverbs 3:5-6', 
      'Psalm 32:8',
      'Deuteronomy 31:8',
      'Isaiah 43:1-2',
      'Joshua 1:9',
      'Esther 4:14',
      'Psalm 37:23-24',
      'Proverbs 16:9',
      'Isaiah 55:8-9',
      'Philippians 1:6'
    ],
    description: 'God\'s plans for us - hope and a future',
    category: 'wisdom',
    theologicalTopic: ['Providence', 'Hope', 'Purpose', 'Future', 'Plans'],
    importance: 5,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['plans', 'hope', 'future', 'good', 'calling']
  },
  {
    verse: 'Romans 8:28',
    relatedVerses: [
      'Jeremiah 29:11', 
      'Ephesians 1:11', 
      '2 Corinthians 4:17', 
      'Genesis 50:20',
      'Psalm 119:68',
      'Proverbs 16:4',
      'Revelation 21:4',
      'Philippians 1:6',
      'Romans 8:32',
      '2 Corinthians 1:4',
      '1 Thessalonians 4:18',
      '2 Thessalonians 2:16-17'
    ],
    description: 'God works all things for good for those who love Him',
    category: 'theology',
    theologicalTopic: ['Providence', 'Sovereignty', 'Goodness', 'Suffering', 'Purpose'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['works together', 'good', 'called', 'purpose', 'love']
  },

  // ================================================================
  // SECTION 15: GREAT COMMISSION & MISSIONS
  // ================================================================

  {
    verse: 'Matthew 28:18-20',
    relatedVerses: [
      'Mark 16:15', 
      'Acts 1:8', 
      'Luke 24:46-48', 
      'Romans 10:14-15',
      'Acts 2:38-39',
      'John 20:21-23',
      'Luke 14:23',
      '2 Corinthians 5:18-20',
      'Matthew 24:14',
      'Acts 13:47',
      'Isaiah 49:6',
      '1 Peter 3:15'
    ],
    description: 'The Great Commission - make disciples of all nations',
    category: 'ecclesiology',
    theologicalTopic: ['Missions', 'Discipleship', 'Baptism', 'Teaching', 'Authority'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['great commission', 'make disciples', 'baptize', 'teach', 'nations']
  },

  // ================================================================
  // SECTION 16: SHEPHERD & CARE
  // ================================================================

  {
    verse: 'Psalm 23:1-6',
    relatedVerses: [
      'John 10:11', 
      '1 Peter 2:25', 
      'Revelation 7:17', 
      'Isaiah 40:11',
      'Psalm 95:7',
      'Psalm 100:3',
      'Ezekiel 34:11-16',
      'John 10:14-15',
      'Psalm 23:1-6',
      'Psalm 80:1',
      'Psalm 28:9',
      'Zechariah 13:7'
    ],
    description: 'The Lord is my Shepherd - complete care and provision',
    category: 'theology',
    theologicalTopic: ['Shepherd', 'Provision', 'Protection', 'Guidance', 'Rest'],
    importance: 5,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['shepherd', 'green pastures', 'still waters', 'restore', 'comfort']
  },

  // ================================================================
  // SECTION 17: LAW & GRACE
  // ================================================================

  // 17.1 THE LAW
  {
    verse: 'Exodus 20:1-17',
    relatedVerses: [
      'Deuteronomy 5:6-21',
      'Matthew 22:37-40',
      'Mark 12:28-34',
      'Romans 13:8-10',
      'Galatians 5:14',
      'James 2:10-11',
      '1 John 5:2-3',
      'John 14:15',
      'Exodus 34:28',
      'Deuteronomy 10:4',
      'Psalm 119:1-16',
      'Romans 7:7-12'
    ],
    description: 'The Ten Commandments - God\'s moral law',
    category: 'law',
    theologicalTopic: ['Law', 'Commandments', 'Love', 'Obedience', 'Moral Law'],
    importance: 4,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['commandments', 'law', 'Moses', 'moral', 'ten']
  },
  {
    verse: 'Galatians 3:24',
    relatedVerses: [
      'Romans 10:4',
      'Galatians 3:19-23',
      'Romans 3:20-21',
      'Romans 7:7-13',
      '2 Corinthians 3:7-11',
      'Colossians 2:14-17',
      'Hebrews 10:1-10',
      'Ephesians 2:15-16',
      'Romans 8:3-4',
      'Galatians 2:16',
      'Acts 13:38-39',
      'Romans 3:28'
    ],
    description: 'The law as a tutor to bring us to Christ',
    category: 'law',
    theologicalTopic: ['Law', 'Grace', 'Tutor', 'Righteousness', 'Justification'],
    importance: 4,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['law', 'tutor', 'schoolmaster', 'grace', 'faith']
  },

  // 17.2 GRACE
  {
    verse: 'Ephesians 2:8-10',
    relatedVerses: [
      'Romans 3:23-24', 
      'Titus 3:5', 
      'Romans 6:23', 
      '2 Corinthians 5:17',
      'Galatians 2:16',
      'Philippians 3:9',
      'Romans 4:4-5',
      'Romans 11:6',
      '2 Timothy 1:9',
      'Titus 2:11-13',
      'Romans 5:15-17',
      'John 1:16-17'
    ],
    description: 'Saved by grace through faith - God\'s gift',
    category: 'grace',
    theologicalTopic: ['Grace', 'Faith', 'Salvation', 'Works', 'Gift'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['grace', 'faith', 'gift', 'works', 'saved']
  },

  // ================================================================
  // SECTION 18: KINGDOM OF GOD
  // ================================================================

  {
    verse: 'Luke 17:20-21',
    relatedVerses: [
      'Matthew 4:17',
      'Mark 1:14-15',
      'Romans 14:17',
      '1 Corinthians 4:20',
      'Colossians 1:13',
      'John 18:36',
      'Acts 28:31',
      'Revelation 11:15',
      'Matthew 6:33',
      'Luke 11:2',
      'John 3:3-5',
      'Revelation 1:6'
    ],
    description: 'The Kingdom of God is within you',
    category: 'kingdom',
    theologicalTopic: ['Kingdom of God', 'Righteousness', 'Peace', 'Joy', 'Spiritual Realm'],
    importance: 4,
    testament: 'new',
    difficulty: 'advanced',
    keywords: ['kingdom', 'within', 'righteousness', 'peace', 'joy']
  },

  // ================================================================
  // SECTION 19: DIVINE PROVIDENCE & SUFFICIENCY
  // ================================================================

  {
    verse: 'Philippians 4:19',
    relatedVerses: [
      'Psalm 23:1',
      'Psalm 34:10',
      'Psalm 84:11',
      'Romans 8:32',
      '2 Corinthians 9:8',
      'Ephesians 3:20',
      'Philippians 4:13',
      'Matthew 6:33',
      'Malachi 3:10',
      'Luke 6:38',
      '2 Corinthians 8:9',
      '1 Timothy 6:17'
    ],
    description: 'God will supply all your needs according to His riches',
    category: 'wisdom',
    theologicalTopic: ['Provision', 'Sufficiency', 'Riches', 'Glory', 'Need'],
    importance: 4,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['supply', 'need', 'riches', 'glory', 'Christ Jesus']
  },

  // ================================================================
  // SECTION 20: BIBLIOLOGY (Doctrine of Scripture)
  // ================================================================

  {
    verse: '2 Timothy 3:16-17',
    relatedVerses: [
      '2 Peter 1:20-21',
      'Psalm 19:7-11',
      'Psalm 119:105',
      'John 17:17',
      'Hebrews 4:12',
      'Romans 15:4',
      '1 Corinthians 2:13',
      '1 Corinthians 14:37',
      '1 Thessalonians 2:13',
      'Acts 17:11',
      'Colossians 3:16',
      'James 1:21-22'
    ],
    description: 'All Scripture is God-breathed and profitable',
    category: 'bibliology',
    theologicalTopic: ['Scripture', 'Inspiration', 'Authority', 'Sufficiency', 'Teaching'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['scripture', 'inspired', 'profitable', 'doctrine', 'training']
  },
  {
    verse: 'Psalm 119:105',
    relatedVerses: [
      'Psalm 43:3',
      'Psalm 119:130',
      'Proverbs 6:23',
      '2 Peter 1:19',
      'John 8:12',
      'Ephesians 5:13',
      'Psalm 18:28',
      'Isaiah 51:4',
      'Psalm 25:5',
      'Psalm 43:3',
      'Proverbs 3:23-24',
      '1 John 1:7'
    ],
    description: 'God\'s word is a lamp and light for our path',
    category: 'bibliology',
    theologicalTopic: ['Scripture', 'Guidance', 'Light', 'Direction', 'Illumination'],
    importance: 4,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['lamp', 'light', 'path', 'word', 'guidance']
  },

  // ================================================================
  // SECTION 21: DISCOVER MORE - ADDITIONAL KEY VERSES
  // ================================================================

  // 21.1 RENEWAL & TRANSFORMATION
  {
    verse: 'Romans 12:1-2',
    relatedVerses: [
      '1 Peter 2:5',
      'Hebrews 13:15-16',
      'Ephesians 4:23-24',
      'Colossians 3:10',
      '2 Corinthians 4:16',
      'Titus 3:5',
      'James 1:27',
      'Philippians 4:8',
      'Psalm 51:10',
      'Ezekiel 36:26-27',
      '2 Corinthians 5:17',
      '1 Corinthians 6:19-20'
    ],
    description: 'Living sacrifice and transformed mind',
    category: 'sanctification',
    theologicalTopic: ['Worship', 'Transformation', 'Renewal', 'Surrender', 'Mind'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['sacrifice', 'transform', 'renew', 'mind', 'worship']
  },

  // 21.2 STRENGTH IN CHRIST
  {
    verse: 'Philippians 4:13',
    relatedVerses: [
      '2 Corinthians 12:9-10', 
      'John 15:5', 
      'Psalm 18:32', 
      'Isaiah 40:31',
      'Ephesians 6:10',
      'Colossians 1:11',
      'Romans 8:37',
      'Deuteronomy 33:25',
      'Isaiah 41:10',
      'Psalm 27:1',
      'Psalm 46:1-3',
      '1 Samuel 17:45'
    ],
    description: 'Strength through Christ who empowers us',
    category: 'wisdom',
    theologicalTopic: ['Strength', 'Dependence', 'Empowerment', 'Perseverance', 'Victory'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['strength', 'can do', 'Christ', 'empower', 'all things']
  },

  // 21.3 THE GREATEST COMMANDMENTS
  {
    verse: 'Mark 12:30-31',
    relatedVerses: [
      'Deuteronomy 6:5',
      'Leviticus 19:18',
      'Matthew 22:37-40',
      'Luke 10:27-28',
      'John 13:34-35',
      'Romans 13:9-10',
      'Galatians 5:14',
      '1 John 4:20-21',
      '1 Peter 1:22',
      '1 John 3:11',
      'Romans 12:9-10',
      'Colossians 3:14'
    ],
    description: 'Love God and love your neighbor',
    category: 'wisdom',
    theologicalTopic: ['Love', 'Greatest Commandment', 'Neighbor', 'Heart', 'Mind'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['love', 'god', 'neighbor', 'heart', 'commandment']
  },

  // 21.4 HOPE IN SUFFERING
  {
    verse: '2 Corinthians 4:17-18',
    relatedVerses: [
      'Romans 8:18',
      '2 Corinthians 5:1',
      '1 Peter 5:10',
      'Hebrews 12:2',
      'James 1:12',
      '1 Corinthians 2:9',
      'Romans 8:28',
      'Colossians 1:24',
      '2 Timothy 2:10',
      'Revelation 21:4',
      '1 Peter 1:6-7',
      'Romans 8:17-18'
    ],
    description: 'Light and momentary troubles vs. eternal glory',
    category: 'suffering',
    theologicalTopic: ['Suffering', 'Hope', 'Eternal Perspective', 'Glory', 'Weight'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['momentary', 'eternal', 'glory', 'light', 'affliction']
  },

  // 21.5 SALVATION THROUGH BAPTISM (Symbolism)
  {
    verse: '1 Peter 3:21',
    relatedVerses: [
      'Romans 6:3-4',
      'Colossians 2:12',
      'Acts 2:38',
      'Acts 22:16',
      'Mark 16:16',
      'Acts 8:36-38',
      'Acts 10:47-48',
      '1 Corinthians 12:13',
      'Galatians 3:27',
      'Ephesians 4:5',
      'Titus 3:5',
      'Hebrews 10:22'
    ],
    description: 'Baptism as an appeal to God for a good conscience',
    category: 'ecclesiology',
    theologicalTopic: ['Baptism', 'Symbolism', 'Conscience', 'Appeal', 'Resurrection'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['baptism', 'appeal', 'conscience', 'resurrection', 'cleansing']
  },

  // 21.6 THE WAY OF SALVATION
  {
    verse: 'Acts 16:30-31',
    relatedVerses: [
      'Romans 10:9-10',
      'Acts 2:38',
      'Acts 4:12',
      'John 3:16',
      'John 14:6',
      '1 Timothy 2:5',
      'Ephesians 2:8-9',
      'Mark 16:16',
      'John 6:47',
      'Acts 13:38-39',
      'Romans 3:22-24',
      'Galatians 3:22'
    ],
    description: 'Believe in the Lord Jesus and you will be saved',
    category: 'soteriology',
    theologicalTopic: ['Salvation', 'Belief', 'Faith', 'Jesus', 'Household'],
    importance: 5,
    testament: 'new',
    difficulty: 'basic',
    keywords: ['believe', 'saved', 'jailer', 'household', 'grace']
  },

  // 21.7 THE CHRISTIAN'S ARMOR
  {
    verse: 'Ephesians 6:10-18',
    relatedVerses: [
      'Romans 13:12',
      '2 Corinthians 10:3-5',
      '1 Thessalonians 5:8',
      'Isaiah 59:17',
      'Colossians 4:2-4',
      '1 Peter 5:8-9',
      'Luke 18:1-8',
      'James 4:7',
      'Psalm 18:34-40',
      '2 Corinthians 6:7',
      '1 Timothy 6:12',
      '2 Timothy 4:7'
    ],
    description: 'The Armor of God - spiritual battle readiness',
    category: 'spiritual-warfare',
    theologicalTopic: ['Spiritual Warfare', 'Protection', 'Faith', 'Prayer', 'Stand'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['armor', 'spiritual warfare', 'stand', 'faith', 'prayer']
  },

  // 21.8 GOD'S FAITHFULNESS
  {
    verse: 'Lamentations 3:22-23',
    relatedVerses: [
      'Psalm 36:5',
      'Psalm 77:8-9',
      'Psalm 89:1',
      'Isaiah 54:8',
      'Romans 8:38-39',
      '2 Corinthians 1:20',
      '2 Timothy 2:13',
      'Hebrews 10:23',
      'Psalm 119:90',
      'Psalm 138:2',
      'Malachi 3:6',
      '1 Thessalonians 5:24'
    ],
    description: 'Great is Your faithfulness - new mercies every morning',
    category: 'theology',
    theologicalTopic: ['Faithfulness', 'Mercy', 'Compassion', 'New', 'Morning'],
    importance: 5,
    testament: 'both',
    difficulty: 'basic',
    keywords: ['faithfulness', 'mercies', 'morning', 'compassion', 'great']
  },

  // 21.9 LIVING WATER
  {
    verse: 'John 7:37-38',
    relatedVerses: [
      'Isaiah 55:1',
      'John 4:13-14',
      'John 6:35',
      'Revelation 21:6',
      'Revelation 22:17',
      'Zechariah 14:8',
      'Ezekiel 47:1-12',
      'Psalm 36:8-9',
      'Isaiah 44:3',
      'Joel 2:28-29',
      'Acts 2:17-18',
      '1 Corinthians 12:13'
    ],
    description: 'Rivers of living water from those who believe in Jesus',
    category: 'pneumatology',
    theologicalTopic: ['Holy Spirit', 'Living Water', 'Thirst', 'Belief', 'Flowing'],
    importance: 4,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['living water', 'believe', 'rivers', 'thirst', 'spirit']
  },

  // 21.10 THE GOSPEL IN A NUTSHELL
  {
    verse: 'Romans 1:16-17',
    relatedVerses: [
      '1 Corinthians 1:18',
      '1 Corinthians 15:1-4',
      'Romans 10:8-10',
      'Ephesians 2:8-9',
      'Habakkuk 2:4',
      'Galatians 3:11',
      'Romans 3:21-22',
      'Philippians 3:9',
      '2 Corinthians 5:18-21',
      'Acts 4:12',
      '1 Peter 1:23-25',
      'Romans 10:17'
    ],
    description: 'The gospel is the power of God for salvation - the just shall live by faith',
    category: 'soteriology',
    theologicalTopic: ['Gospel', 'Power of God', 'Faith', 'Righteousness', 'Salvation'],
    importance: 5,
    testament: 'new',
    difficulty: 'intermediate',
    keywords: ['gospel', 'power', 'salvation', 'faith', 'righteousness']
  }
]

// ================================================================
// DATABASE STATISTICS
// ================================================================

export const getDatabaseStats = () => ({
  totalReferences: crossReferences.length,
  categories: {
    theology: crossReferences.filter(cr => cr.category === 'theology').length,
    soteriology: crossReferences.filter(cr => cr.category === 'soteriology').length,
    christology: crossReferences.filter(cr => cr.category === 'christology').length,
    pneumatology: crossReferences.filter(cr => cr.category === 'pneumatology').length,
    ecclesiology: crossReferences.filter(cr => cr.category === 'ecclesiology').length,
    eschatology: crossReferences.filter(cr => cr.category === 'eschatology').length,
    wisdom: crossReferences.filter(cr => cr.category === 'wisdom').length,
    sanctification: crossReferences.filter(cr => cr.category === 'sanctification').length,
    prayer: crossReferences.filter(cr => cr.category === 'prayer').length,
    worship: crossReferences.filter(cr => cr.category === 'worship').length,
    suffering: crossReferences.filter(cr => cr.category === 'suffering').length,
    covenant: crossReferences.filter(cr => cr.category === 'covenant').length,
    law: crossReferences.filter(cr => cr.category === 'law').length,
    grace: crossReferences.filter(cr => cr.category === 'grace').length,
    kingdom: crossReferences.filter(cr => cr.category === 'kingdom').length,
    bibliology: crossReferences.filter(cr => cr.category === 'bibliology').length,
    angelology: crossReferences.filter(cr => cr.category === 'angelology').length,
    'spiritual-warfare': crossReferences.filter(cr => cr.category === 'spiritual-warfare').length
  },
  importanceLevels: {
    level5: crossReferences.filter(cr => cr.importance === 5).length,
    level4: crossReferences.filter(cr => cr.importance === 4).length,
    level3: crossReferences.filter(cr => cr.importance === 3).length,
    level2: crossReferences.filter(cr => cr.importance === 2).length,
    level1: crossReferences.filter(cr => cr.importance === 1).length
  },
  testaments: {
    old: crossReferences.filter(cr => cr.testament === 'old').length,
    new: crossReferences.filter(cr => cr.testament === 'new').length,
    both: crossReferences.filter(cr => cr.testament === 'both').length
  },
  difficulties: {
    basic: crossReferences.filter(cr => cr.difficulty === 'basic').length,
    intermediate: crossReferences.filter(cr => cr.difficulty === 'intermediate').length,
    advanced: crossReferences.filter(cr => cr.difficulty === 'advanced').length
  }
})

// ================================================================
// ENHANCED HELPER FUNCTIONS
// ================================================================

/**
 * Get cross-references for a verse using structured reference
 */
export const getCrossReferences = (book: string, chapter: number, verse: number): CrossReference | null => {
  const reference = `${book} ${chapter}:${verse}`
  return crossReferences.find(cr => cr.verse === reference) || null
}

/**
 * Get cross-references by exact string reference
 */
export const getCrossReferencesByString = (reference: string): CrossReference | null => {
  return crossReferences.find(cr => cr.verse === reference) || null
}

/**
 * Get all cross-references by category
 */
export const getCrossReferencesByCategory = (category: CrossReference['category']): CrossReference[] => {
  return crossReferences.filter(cr => cr.category === category)
}

/**
 * Get cross-references by theological topic
 */
export const getCrossReferencesByTopic = (topic: string): CrossReference[] => {
  const lowerTopic = topic.toLowerCase()
  return crossReferences.filter(cr => 
    cr.theologicalTopic && cr.theologicalTopic.some(t => 
      t.toLowerCase().includes(lowerTopic)
    )
  )
}

/**
 * Search cross-references by description, verse text, or keywords
 */
export const searchCrossReferences = (query: string): CrossReference[] => {
  const lowerQuery = query.toLowerCase()
  return crossReferences.filter(cr => 
    cr.verse.toLowerCase().includes(lowerQuery) ||
    cr.description.toLowerCase().includes(lowerQuery) ||
    cr.relatedVerses.some(v => v.toLowerCase().includes(lowerQuery)) ||
    (cr.theologicalTopic && cr.theologicalTopic.some(t => t.toLowerCase().includes(lowerQuery))) ||
    (cr.keywords && cr.keywords.some(k => k.toLowerCase().includes(lowerQuery)))
  )
}

/**
 * Get all unique theological topics
 */
export const getAllTheologicalTopics = (): string[] => {
  const topics = new Set<string>()
  crossReferences.forEach(cr => {
    if (cr.theologicalTopic) {
      cr.theologicalTopic.forEach(t => topics.add(t))
    }
  })
  return Array.from(topics).sort()
}

/**
 * Get all unique categories present
 */
export const getAllCategories = (): NonNullable<CrossReference['category']>[] => {
  const categories = new Set<CrossReference['category']>()
  crossReferences.forEach(cr => {
    if (cr.category) {
      categories.add(cr.category)
    }
  })
  return Array.from(categories).filter((c): c is NonNullable<CrossReference['category']> => c !== undefined)
}

/**
 * Get cross-references by importance level
 */
export const getCrossReferencesByImportance = (level: 1 | 2 | 3 | 4 | 5): CrossReference[] => {
  return crossReferences.filter(cr => cr.importance === level)
}

/**
 * Get cross-references by testament
 */
export const getCrossReferencesByTestament = (testament: NonNullable<CrossReference['testament']>): CrossReference[] => {
  return crossReferences.filter(cr => cr.testament === testament)
}

/**
 * Get cross-references by difficulty level
 */
export const getCrossReferencesByDifficulty = (difficulty: NonNullable<CrossReference['difficulty']>): CrossReference[] => {
  return crossReferences.filter(cr => cr.difficulty === difficulty)
}

/**
 * Get a random cross-reference entry
 */
export const getRandomCrossReference = (category?: CrossReference['category'], difficulty?: NonNullable<CrossReference['difficulty']>): CrossReference | null => {
  let pool = crossReferences
  if (category) {
    pool = getCrossReferencesByCategory(category)
  }
  if (difficulty) {
    pool = pool.filter(cr => cr.difficulty === difficulty)
  }
  if (pool.length === 0) return null
  const randomIndex = Math.floor(Math.random() * pool.length)
  return pool[randomIndex]
}

/**
 * Get related verses with their descriptions for a given verse
 */
export const getRelatedVersesWithDescription = (reference: string): Array<{ verse: string; description: string }> => {
  const crossRef = getCrossReferencesByString(reference)
  if (!crossRef) return []
  
  return crossRef.relatedVerses.map(verse => ({
    verse,
    description: crossRef.description
  }))
}

/**
 * Get all verses by theological topic (returns verse references)
 */
export const getVersesByTopic = (topic: string): string[] => {
  return getCrossReferencesByTopic(topic).map(cr => cr.verse)
}

/**
 * Get a study chain (progressive verses) for a topic
 */
export const getStudyChain = (topic: string, maxVerses: number = 10): CrossReference[] => {
  const results = getCrossReferencesByTopic(topic)
  return results.slice(0, maxVerses)
}

/**
 * Parse reference string to components
 */
export const parseReference = (reference: string): { book: string; chapter: number; verse: number } | null => {
  const match = reference.match(/^([\w\s]+?)\s+(\d+):(\d+)$/)
  if (!match) return null
  return {
    book: match[1].trim(),
    chapter: parseInt(match[2], 10),
    verse: parseInt(match[3], 10)
  }
}

/**
 * Format a cross-reference for display
 */
export const formatCrossReference = (cr: CrossReference): string => {
  return `${cr.verse} - ${cr.description} [${cr.category}] ${cr.importance ? '⭐'.repeat(cr.importance) : ''}`
}