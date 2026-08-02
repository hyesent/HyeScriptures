export type Topic = {
  name: string
  description: string
  verses: string[]
  category?: 'theology' | 'practical' | 'christology' | 'soteriology' | 'pneumatology' | 
    'ecclesiology' | 'eschatology' | 'wisdom' | 'spiritual-life' | 'relationships' | 
    'suffering' | 'worship' | 'prayer' | 'covenant' | 'prophecy' | 'history'
  subTopics?: string[]
  importance?: 1 | 2 | 3 | 4 | 5
  testament?: 'old' | 'new' | 'both'
}

export const topics: Topic[] = [
  // ================================================================
  // SECTION 1: GOD'S NATURE & ATTRIBUTES (Theology Proper)
  // ================================================================
  {
    name: 'God is Love',
    description: 'Verses revealing God\'s loving nature and character',
    category: 'theology',
    importance: 5,
    testament: 'both',
    subTopics: ['Love of God', 'Compassion', 'Mercy'],
    verses: [
      '1 John 4:8',
      '1 John 4:16',
      'Psalm 103:8',
      'Psalm 145:8-9',
      'John 3:16',
      'Romans 5:8',
      'Ephesians 2:4-5',
      'Titus 3:4-5',
      'Lamentations 3:22-23',
      'Psalm 100:5',
      'Psalm 86:15',
      'Exodus 34:6-7',
      'Nehemiah 9:17',
      'Joel 2:13',
      'Micah 7:18'
    ]
  },
  {
    name: 'God is Holy',
    description: 'Scriptures about God\'s absolute holiness and purity',
    category: 'theology',
    importance: 5,
    testament: 'both',
    subTopics: ['Holiness', 'Purity', 'Righteousness'],
    verses: [
      'Isaiah 6:3',
      'Revelation 4:8',
      '1 Peter 1:15-16',
      'Leviticus 19:2',
      'Isaiah 57:15',
      'Habakkuk 1:13',
      'Psalm 99:9',
      'Exodus 15:11',
      '1 Samuel 2:2',
      'Psalm 22:3',
      'Psalm 96:9',
      'Revelation 15:4',
      'Psalm 89:14',
      'Deuteronomy 32:4',
      'Job 34:10'
    ]
  },
  {
    name: 'God is Sovereign',
    description: 'Verses about God\'s supreme authority and control over all things',
    category: 'theology',
    importance: 5,
    testament: 'both',
    subTopics: ['Sovereignty', 'Providence', 'Authority'],
    verses: [
      'Daniel 4:35',
      'Isaiah 46:9-10',
      'Psalm 115:3',
      'Psalm 135:6',
      'Job 42:2',
      'Romans 11:33-36',
      'Ephesians 1:11',
      'Colossians 1:16-17',
      'Proverbs 19:21',
      'Proverbs 16:9',
      'Jeremiah 32:17',
      'Psalm 103:19',
      'Isaiah 55:8-9',
      'Matthew 28:18',
      '1 Chronicles 29:11-12'
    ]
  },
  {
    name: 'God is Faithful',
    description: 'Verses about God\'s faithfulness to His promises',
    category: 'theology',
    importance: 5,
    testament: 'both',
    subTopics: ['Faithfulness', 'Promises', 'Trustworthiness'],
    verses: [
      'Lamentations 3:22-23',
      'Deuteronomy 7:9',
      'Psalm 36:5',
      'Psalm 89:1-2',
      'Isaiah 49:7',
      '1 Corinthians 1:9',
      '1 Corinthians 10:13',
      '2 Corinthians 1:20',
      '2 Timothy 2:13',
      'Hebrews 10:23',
      'Hebrews 11:11',
      'Psalm 33:4',
      'Psalm 100:5',
      'Psalm 138:2',
      'Malachi 3:6'
    ]
  },
  {
    name: 'God is Creator',
    description: 'Verses about God as the Creator of all things',
    category: 'theology',
    importance: 5,
    testament: 'both',
    subTopics: ['Creation', 'Origins', 'Power'],
    verses: [
      'Genesis 1:1',
      'Psalm 19:1',
      'Psalm 33:6',
      'Psalm 104:24',
      'Isaiah 40:26',
      'Isaiah 45:18',
      'John 1:1-3',
      'Colossians 1:16-17',
      'Hebrews 11:3',
      'Revelation 4:11',
      'Psalm 8:3-4',
      'Psalm 148:5',
      'Acts 17:24-25',
      'Jeremiah 10:12-13',
      'Nehemiah 9:6'
    ]
  },
  {
    name: 'God is Our Father',
    description: 'Verses about God as our loving Heavenly Father',
    category: 'theology',
    importance: 5,
    testament: 'both',
    subTopics: ['Fatherhood', 'Adoption', 'Care'],
    verses: [
      'Matthew 6:9',
      'Romans 8:15',
      'Galatians 4:6',
      'Ephesians 1:3-5',
      'Ephesians 2:18',
      'John 1:12-13',
      '2 Corinthians 6:18',
      '1 John 3:1',
      'Psalm 68:5',
      'Psalm 103:13',
      'Isaiah 64:8',
      'Jeremiah 3:19',
      'Malachi 2:10',
      'Colossians 1:12',
      '1 Peter 1:17'
    ]
  },

  // ================================================================
  // SECTION 2: TRINITY
  // ================================================================
  {
    name: 'The Trinity',
    description: 'Verses revealing the triune nature of God - Father, Son, and Holy Spirit',
    category: 'theology',
    importance: 5,
    testament: 'both',
    subTopics: ['Trinity', 'Godhead'],
    verses: [
      'Matthew 28:19',
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
      'Revelation 1:4-5',
      'Ephesians 4:4-6',
      'Jude 1:20-21'
    ]
  },

  // ================================================================
  // SECTION 3: JESUS CHRIST (Christology)
  // ================================================================
  {
    name: 'Deity of Christ',
    description: 'Scriptures affirming Jesus is God',
    category: 'christology',
    importance: 5,
    testament: 'both',
    subTopics: ['Divinity', 'Equality with God'],
    verses: [
      'John 1:1',
      'John 10:30',
      'Colossians 2:9',
      'Hebrews 1:3',
      'Philippians 2:6',
      'John 20:28',
      'John 8:58',
      'Revelation 1:17-18',
      'Romans 9:5',
      'Titus 2:13',
      '2 Peter 1:1',
      '1 John 5:20',
      'Isaiah 9:6',
      'Matthew 1:23',
      'Acts 20:28'
    ]
  },
  {
    name: 'Incarnation',
    description: 'Verses about Jesus becoming human',
    category: 'christology',
    importance: 5,
    testament: 'both',
    subTopics: ['Incarnation', 'Humanity of Christ'],
    verses: [
      'John 1:14',
      'Philippians 2:5-8',
      'Hebrews 2:14-18',
      'Galatians 4:4-5',
      '2 Corinthians 8:9',
      '1 Timothy 3:16',
      'Luke 2:10-12',
      'Matthew 1:23',
      'Isaiah 7:14',
      'Micah 5:2',
      '1 John 4:2-3',
      '2 John 1:7',
      'John 1:18',
      'Colossians 1:15',
      'Hebrews 4:15'
    ]
  },
  {
    name: 'Jesus is the Way',
    description: 'Verses about Jesus as the only way to salvation',
    category: 'christology',
    importance: 5,
    testament: 'new',
    subTopics: ['Exclusivity', 'Salvation', 'Truth'],
    verses: [
      'John 14:6',
      'Acts 4:12',
      'Romans 10:9-10',
      '1 Timothy 2:5-6',
      'John 10:9',
      'John 3:16-18',
      'John 3:36',
      'John 6:35',
      'John 11:25',
      'Colossians 1:28',
      'Acts 16:31',
      'Acts 2:21',
      'Romans 3:22-24',
      'Galatians 3:22',
      '1 John 5:11-12'
    ]
  },
  {
    name: 'The Atonement',
    description: 'Verses about Christ\'s sacrifice for our sins',
    category: 'christology',
    importance: 5,
    testament: 'both',
    subTopics: ['Sacrifice', 'Substitution', 'Redemption'],
    verses: [
      'Isaiah 53:5-6',
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
      'John 1:29',
      'Hebrews 9:22',
      'Romans 3:25-26'
    ]
  },
  {
    name: 'Resurrection of Christ',
    description: 'Verses about Jesus rising from the dead',
    category: 'christology',
    importance: 5,
    testament: 'new',
    subTopics: ['Resurrection', 'Victory', 'Power'],
    verses: [
      'Matthew 28:5-7',
      'Mark 16:6',
      'Luke 24:5-6',
      'John 20:19-20',
      'Acts 2:24',
      'Romans 1:4',
      'Romans 6:4-5',
      '1 Corinthians 15:3-4',
      '1 Corinthians 15:20-21',
      'Colossians 2:12',
      '2 Timothy 2:8',
      '1 Peter 1:3',
      'Revelation 1:18',
      'Acts 4:10',
      'Philippians 3:10-11'
    ]
  },
  {
    name: 'Ascension of Christ',
    description: 'Verses about Jesus ascending to heaven',
    category: 'christology',
    importance: 3,
    testament: 'new',
    subTopics: ['Ascension', 'Exaltation'],
    verses: [
      'Acts 1:9-11',
      'Luke 24:50-53',
      'Mark 16:19',
      'John 20:17',
      'Ephesians 4:8-10',
      'Hebrews 4:14',
      'Hebrews 8:1',
      'Romans 8:34',
      'Colossians 3:1',
      '1 Timothy 3:16',
      'Psalm 68:18',
      'Psalm 110:1',
      'Acts 2:33-34',
      'Ephesians 1:20-23',
      '1 Peter 3:22'
    ]
  },

  // ================================================================
  // SECTION 4: HOLY SPIRIT (Pneumatology)
  // ================================================================
  {
    name: 'Person of the Holy Spirit',
    description: 'Verses showing the Holy Spirit is a divine person',
    category: 'pneumatology',
    importance: 5,
    testament: 'new',
    subTopics: ['Personhood', 'Deity', 'Role'],
    verses: [
      'John 14:16-17',
      'John 15:26',
      'John 16:7-15',
      'Acts 5:3-4',
      'Romans 8:9-11',
      '1 Corinthians 2:10-11',
      '1 Corinthians 3:16',
      '1 Corinthians 6:19',
      'Ephesians 1:13-14',
      'Ephesians 4:30',
      'Galatians 4:6',
      'Acts 13:2-4',
      'Romans 8:26-27',
      'Acts 16:6-7',
      '1 John 2:27'
    ]
  },
  {
    name: 'Baptism of the Holy Spirit',
    description: 'Verses about being baptized and filled with the Spirit',
    category: 'pneumatology',
    importance: 4,
    testament: 'new',
    subTopics: ['Baptism', 'Filling', 'Power'],
    verses: [
      'Acts 1:4-5',
      'Acts 2:1-4',
      'Acts 4:31',
      'Acts 8:14-17',
      'Acts 9:17-18',
      'Acts 10:44-46',
      'Acts 19:6',
      'Acts 11:15-17',
      'John 20:22',
      'Acts 2:38-39',
      'Luke 24:49',
      'Titus 3:5-6',
      'Romans 8:9',
      '1 Corinthians 12:13',
      'Ephesians 5:18'
    ]
  },
  {
    name: 'Gifts of the Holy Spirit',
    description: 'Verses about spiritual gifts given for building the church',
    category: 'pneumatology',
    importance: 4,
    testament: 'new',
    subTopics: ['Spiritual Gifts', 'Ministry', 'Building'],
    verses: [
      '1 Corinthians 12:4-11',
      '1 Corinthians 12:27-31',
      '1 Corinthians 14:1-5',
      'Romans 12:6-8',
      'Ephesians 4:11-16',
      '1 Peter 4:10-11',
      '1 Corinthians 13:1-3',
      '1 Corinthians 14:12',
      '1 Corinthians 14:26-33',
      'Acts 2:17-18',
      'Acts 11:28',
      'Acts 21:9-11',
      '1 Timothy 4:14',
      '2 Timothy 1:6-7',
      'Hebrews 2:4'
    ]
  },
  {
    name: 'Fruit of the Spirit',
    description: 'Verses about character produced by the Holy Spirit',
    category: 'pneumatology',
    importance: 5,
    testament: 'new',
    subTopics: ['Character', 'Transformation', 'Virtues'],
    verses: [
      'Galatians 5:22-23',
      'Ephesians 5:9',
      'Colossians 3:12-15',
      '2 Peter 1:5-8',
      'Romans 14:17',
      '1 Timothy 6:11',
      'Titus 2:11-12',
      '1 John 4:16-18',
      'Matthew 7:16-20',
      'John 15:1-8',
      'Romans 8:9-11',
      'Ephesians 4:1-3',
      'Philippians 4:8',
      'Romans 5:3-5',
      'James 3:17-18'
    ]
  },

  // ================================================================
  // SECTION 5: SALVATION (Soteriology)
  // ================================================================
  {
    name: 'Salvation',
    description: 'Verses about being saved by grace through faith in Christ',
    category: 'soteriology',
    importance: 5,
    testament: 'both',
    subTopics: ['Redemption', 'Grace', 'Faith'],
    verses: [
      'John 3:16',
      'Acts 4:12',
      'Romans 10:9-10',
      'Ephesians 2:8-9',
      'Titus 3:5',
      'Romans 6:23',
      '1 Timothy 2:5-6',
      'John 3:17',
      'Acts 2:38',
      'Romans 5:8-9',
      '2 Corinthians 5:17',
      'John 14:6',
      '1 Peter 1:18-19',
      'Romans 1:16-17',
      'Acts 16:30-31'
    ]
  },
  {
    name: 'Justification',
    description: 'Verses about being declared righteous before God',
    category: 'soteriology',
    importance: 5,
    testament: 'new',
    subTopics: ['Justification', 'Righteousness', 'Declared'],
    verses: [
      'Romans 3:23-24',
      'Romans 5:1-2',
      'Romans 8:33-34',
      '2 Corinthians 5:21',
      'Galatians 2:16',
      'Galatians 3:24-26',
      'Philippians 3:9',
      'Romans 4:3-5',
      'Romans 3:28',
      'Galatians 2:21',
      'Romans 4:22-24',
      'Romans 5:18-19',
      'Titus 3:7',
      'Romans 10:4',
      '1 Corinthians 6:11'
    ]
  },
  {
    name: 'Repentance',
    description: 'Verses about turning from sin and turning to God',
    category: 'soteriology',
    importance: 5,
    testament: 'both',
    subTopics: ['Repentance', 'Turning', 'Conversion'],
    verses: [
      'Acts 3:19',
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
      '2 Peter 3:9',
      'Ezekiel 18:30-32',
      'Psalm 51:1-4'
    ]
  },
  {
    name: 'Assurance of Salvation',
    description: 'Verses giving confidence in our salvation',
    category: 'soteriology',
    importance: 5,
    testament: 'new',
    subTopics: ['Assurance', 'Confidence', 'Eternal Security'],
    verses: [
      '1 John 5:13',
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
      'Romans 8:16',
      'Hebrews 6:19-20',
      'Colossians 2:2-3'
    ]
  },
  {
    name: 'Eternal Life',
    description: 'Verses about the gift of eternal life in Christ',
    category: 'soteriology',
    importance: 5,
    testament: 'both',
    subTopics: ['Eternal Life', 'Immortality', 'Promise'],
    verses: [
      'John 3:16',
      'John 10:28-29',
      'John 17:3',
      'Romans 6:23',
      '1 John 5:11-13',
      '1 John 2:25',
      'John 5:24',
      'John 6:47',
      '1 Timothy 1:16',
      'Titus 1:2',
      'Titus 3:7',
      'John 11:25-26',
      'Romans 5:21',
      'Galatians 6:8',
      '1 John 5:20'
    ]
  },

  // ================================================================
  // SECTION 6: THE CHURCH (Ecclesiology)
  // ================================================================
  {
    name: 'The Church',
    description: 'Verses about the body of Christ and His church',
    category: 'ecclesiology',
    importance: 4,
    testament: 'both',
    subTopics: ['Body of Christ', 'Community', 'Fellowship'],
    verses: [
      'Ephesians 1:22-23',
      'Colossians 1:18',
      'Ephesians 5:23-27',
      '1 Corinthians 12:27',
      'Romans 12:4-5',
      '1 Corinthians 10:17',
      'Ephesians 4:15-16',
      '1 Peter 2:5',
      '1 Corinthians 3:16-17',
      'Ephesians 2:19-22',
      '1 Timothy 3:15',
      'Hebrews 3:6',
      'Acts 2:42-47',
      '1 Corinthians 14:26',
      'Ephesians 4:11-13'
    ]
  },
  {
    name: 'Church Leadership',
    description: 'Verses about elders, overseers, and pastors',
    category: 'ecclesiology',
    importance: 4,
    testament: 'new',
    subTopics: ['Leadership', 'Elders', 'Pastors'],
    verses: [
      '1 Timothy 3:1-7',
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
      '2 Timothy 2:2',
      'Acts 6:1-6',
      'Philippians 1:1'
    ]
  },
  {
    name: 'Baptism',
    description: 'Verses about baptism and its meaning',
    category: 'ecclesiology',
    importance: 5,
    testament: 'new',
    subTopics: ['Baptism', 'Symbolism', 'Obedience'],
    verses: [
      'Romans 6:3-4',
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
      'Acts 10:47-48',
      'Acts 16:33',
      'Acts 19:1-5'
    ]
  },
  {
    name: 'Lord\'s Supper / Communion',
    description: 'Verses about communion and remembering Christ\'s sacrifice',
    category: 'ecclesiology',
    importance: 5,
    testament: 'new',
    subTopics: ['Communion', 'Remembrance', 'Sacrifice'],
    verses: [
      '1 Corinthians 11:23-26',
      'Luke 22:19-20',
      'Matthew 26:26-28',
      'Mark 14:22-24',
      'Acts 2:42',
      'Acts 20:7',
      '1 Corinthians 10:16-17',
      'John 6:53-56',
      '1 Corinthians 11:27-32',
      '1 Corinthians 10:20-21',
      'Exodus 12:14',
      'Exodus 24:8',
      'Jeremiah 31:31-34',
      'Hebrews 9:22',
      'Hebrews 9:28'
    ]
  },

  // ================================================================
  // SECTION 7: LAST THINGS (Eschatology)
  // ================================================================
  {
    name: 'Second Coming',
    description: 'Verses about Christ\'s return',
    category: 'eschatology',
    importance: 5,
    testament: 'both',
    subTopics: ['Return', 'Promise', 'Hope'],
    verses: [
      'Acts 1:10-11',
      'John 14:3',
      '1 Thessalonians 4:16-17',
      'Revelation 1:7',
      'Hebrews 9:28',
      'Philippians 3:20-21',
      'Titus 2:13',
      '2 Peter 3:10',
      'Matthew 24:30-31',
      'Mark 13:26-27',
      'Luke 21:27',
      '1 Corinthians 15:51-52',
      'Revelation 22:12',
      'Matthew 24:42-44',
      'Revelation 19:11-16'
    ]
  },
  {
    name: 'Heaven',
    description: 'Verses about heaven and eternal life with God',
    category: 'eschatology',
    importance: 5,
    testament: 'both',
    subTopics: ['Heaven', 'Glory', 'Restoration'],
    verses: [
      'Revelation 21:1-4',
      'Revelation 22:1-5',
      'John 14:1-3',
      'John 17:24',
      'Ephesians 2:6',
      'Colossians 1:5',
      '1 Peter 1:3-4',
      'Hebrews 11:10',
      '2 Corinthians 5:1-2',
      'Philippians 3:20-21',
      'Colossians 3:1-4',
      '1 Thessalonians 4:16-17',
      'Isaiah 65:17-25',
      'Romans 8:18-21',
      '2 Peter 3:10-13'
    ]
  },
  {
    name: 'Hell',
    description: 'Verses about judgment and eternal separation from God',
    category: 'eschatology',
    importance: 5,
    testament: 'both',
    subTopics: ['Judgment', 'Punishment', 'Warning'],
    verses: [
      'Matthew 25:46',
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
      'Isaiah 66:24',
      'Matthew 10:28',
      'Hebrews 10:26-27'
    ]
  },
  {
    name: 'The Resurrection',
    description: 'Verses about the resurrection of the dead',
    category: 'eschatology',
    importance: 5,
    testament: 'both',
    subTopics: ['Resurrection', 'Victory', 'Transformation'],
    verses: [
      '1 Corinthians 15:51-52',
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
      'Romans 6:5',
      'John 5:28-29',
      'Acts 24:15'
    ]
  },
  {
    name: 'The Rapture',
    description: 'Verses about being caught up with Christ',
    category: 'eschatology',
    importance: 4,
    testament: 'new',
    subTopics: ['Rapture', 'Caught Up', 'Mystery'],
    verses: [
      '1 Corinthians 15:51-53',
      '1 Thessalonians 4:15-17',
      'Philippians 3:20-21',
      'John 14:1-3',
      '1 Thessalonians 5:9-11',
      'Revelation 3:10',
      'Luke 21:34-36',
      'Titus 2:13',
      '1 Corinthians 15:23',
      '1 Thessalonians 1:10',
      '1 Thessalonians 5:1-4',
      'Matthew 24:40-42',
      'Luke 17:34-37',
      '2 Thessalonians 2:1-3',
      'Revelation 4:1-2'
    ]
  },

  // ================================================================
  // SECTION 8: SPIRITUAL LIFE & CHARACTER
  // ================================================================
  {
    name: 'Faith',
    description: 'Verses about faith and believing in God',
    category: 'spiritual-life',
    importance: 5,
    testament: 'both',
    subTopics: ['Faith', 'Belief', 'Trust'],
    verses: [
      'Hebrews 11:1',
      'Hebrews 11:6',
      '2 Corinthians 5:7',
      'Romans 10:17',
      'Ephesians 2:8',
      'Mark 11:24',
      'James 1:6',
      '1 Peter 1:8-9',
      'John 20:29',
      'Matthew 17:20',
      'Romans 1:17',
      'Galatians 2:20',
      '1 John 5:4',
      'Mark 11:22',
      'Luke 17:5-6'
    ]
  },
  {
    name: 'Grace',
    description: 'Verses about God\'s grace and unmerited favor',
    category: 'spiritual-life',
    importance: 5,
    testament: 'new',
    subTopics: ['Grace', 'Favor', 'Gift'],
    verses: [
      'Ephesians 2:8-9',
      '2 Corinthians 12:9',
      'Romans 3:23-24',
      'Titus 2:11',
      'Romans 11:6',
      'Acts 20:24',
      '1 Corinthians 15:10',
      '2 Timothy 2:1',
      'Hebrews 4:16',
      'James 4:6',
      '1 Peter 5:10',
      '2 Corinthians 9:8',
      'Romans 5:2',
      'Ephesians 1:7',
      'Colossians 3:16'
    ]
  },
  {
    name: 'Love',
    description: 'Verses about God\'s love and loving others',
    category: 'relationships',
    importance: 5,
    testament: 'both',
    subTopics: ['Love', 'Agape', 'Charity'],
    verses: [
      'John 3:16',
      '1 Corinthians 13:4-7',
      '1 John 4:8',
      '1 John 4:19',
      'Romans 8:38-39',
      'John 15:13',
      '1 Peter 4:8',
      '1 Corinthians 16:14',
      'Colossians 3:14',
      'Song of Solomon 8:7',
      'Zephaniah 3:17',
      '1 John 3:1',
      'Ephesians 3:17-19',
      'Romans 5:5',
      'Deuteronomy 7:9'
    ]
  },
  {
    name: 'Hope',
    description: 'Verses about hope and trusting God\'s promises',
    category: 'spiritual-life',
    importance: 5,
    testament: 'both',
    subTopics: ['Hope', 'Expectation', 'Confidence'],
    verses: [
      'Jeremiah 29:11',
      'Romans 15:13',
      'Hebrews 11:1',
      'Psalm 33:20-22',
      'Psalm 62:5',
      'Romans 5:3-5',
      'Colossians 1:27',
      '1 Peter 1:3',
      'Psalm 130:5-6',
      'Proverbs 23:18',
      'Zechariah 9:12',
      'Romans 12:12',
      'Titus 3:7',
      'Psalm 42:5',
      'Psalm 39:7'
    ]
  },
  {
    name: 'Joy',
    description: 'Verses about joy and rejoicing in the Lord',
    category: 'spiritual-life',
    importance: 4,
    testament: 'both',
    subTopics: ['Joy', 'Rejoicing', 'Happiness'],
    verses: [
      'Philippians 4:4',
      'Psalm 30:5',
      'John 16:22',
      'Psalm 16:11',
      'Romans 15:13',
      '1 Thessalonians 5:16',
      'Psalm 118:24',
      'Nehemiah 8:10',
      'Psalm 100:1-2',
      '2 Corinthians 7:4',
      'James 1:2',
      'Habakkuk 3:18',
      'Psalm 126:5-6',
      'Isaiah 35:10',
      'John 15:11'
    ]
  },
  {
    name: 'Peace',
    description: 'Verses about peace and resting in God',
    category: 'spiritual-life',
    importance: 5,
    testament: 'both',
    subTopics: ['Peace', 'Rest', 'Calm'],
    verses: [
      'John 14:27',
      'Philippians 4:6-7',
      'Psalm 29:11',
      'Isaiah 26:3',
      'Psalm 4:8',
      '2 Thessalonians 3:16',
      'Colossians 3:15',
      'Psalm 85:8',
      'Psalm 119:165',
      'Psalm 37:11',
      'Romans 8:6',
      'Galatians 5:22',
      '1 Peter 5:7',
      'Psalm 34:14',
      'Matthew 11:28-30'
    ]
  },
  {
    name: 'Strength',
    description: 'Verses about finding strength in God',
    category: 'spiritual-life',
    importance: 5,
    testament: 'both',
    subTopics: ['Strength', 'Power', 'Fortitude'],
    verses: [
      'Isaiah 40:31',
      'Philippians 4:13',
      'Psalm 18:32',
      'Psalm 28:7',
      'Isaiah 41:10',
      'Deuteronomy 31:6',
      'Joshua 1:9',
      'Psalm 46:1',
      'Psalm 27:1',
      '1 Chronicles 16:11',
      'Psalm 18:1-2',
      'Psalm 20:1-2',
      'Psalm 59:17',
      'Psalm 84:5',
      'Ephesians 3:16'
    ]
  },
  {
    name: 'Forgiveness',
    description: 'Verses about God\'s forgiveness and forgiving others',
    category: 'relationships',
    importance: 5,
    testament: 'both',
    subTopics: ['Forgiveness', 'Pardon', 'Release'],
    verses: [
      '1 John 1:9',
      'Ephesians 4:32',
      'Matthew 6:14-15',
      'Psalm 103:10-12',
      'Colossians 3:13',
      'Mark 11:25',
      'Luke 17:3-4',
      'Psalm 86:5',
      'Micah 7:18-19',
      'Isaiah 43:25',
      'Romans 4:7-8',
      '2 Corinthians 2:10',
      'Psalm 130:3-4',
      'Isaiah 1:18',
      'Psalm 32:1-2'
    ]
  },
  {
    name: 'Prayer',
    description: 'Verses about prayer and talking to God',
    category: 'prayer',
    importance: 5,
    testament: 'both',
    subTopics: ['Prayer', 'Intercession', 'Supplication'],
    verses: [
      'Matthew 6:9-13',
      'Philippians 4:6',
      '1 Thessalonians 5:17',
      'James 5:16',
      '1 Peter 5:7',
      'Romans 12:12',
      'Psalm 34:17',
      'Psalm 145:18',
      'John 15:7',
      '1 John 5:14',
      'Mark 11:24',
      'Colossians 4:2',
      'Luke 18:1',
      'Ephesians 6:18',
      'Jeremiah 33:3'
    ]
  },
  {
    name: 'Worship',
    description: 'Verses about worship and praising God',
    category: 'worship',
    importance: 5,
    testament: 'both',
    subTopics: ['Worship', 'Praise', 'Adoration'],
    verses: [
      'Psalm 95:6',
      'John 4:24',
      'Psalm 100:1-2',
      'Psalm 150:1-6',
      'Hebrews 13:15',
      'Psalm 34:1-3',
      'Psalm 96:1-4',
      'Colossians 3:16',
      'Psalm 28:7',
      'Psalm 66:1-4',
      'Psalm 117:1-2',
      'Revelation 7:9-12',
      'Psalm 149:1-3',
      'Psalm 147:1',
      'Revelation 5:11-14'
    ]
  },

  // ================================================================
  // SECTION 9: WISDOM & PRACTICAL LIVING
  // ================================================================
  {
    name: 'Wisdom',
    description: 'Verses about wisdom and understanding',
    category: 'wisdom',
    importance: 5,
    testament: 'both',
    subTopics: ['Wisdom', 'Understanding', 'Knowledge'],
    verses: [
      'Proverbs 1:7',
      'Proverbs 2:6',
      'James 1:5',
      'Proverbs 3:13',
      'Psalm 111:10',
      'Proverbs 4:7',
      'Colossians 2:3',
      'Colossians 3:16',
      'Proverbs 16:16',
      'Ephesians 5:15-16',
      'Psalm 119:99',
      'Proverbs 19:20',
      'Proverbs 9:10',
      'Proverbs 24:14',
      'Ecclesiastes 7:12'
    ]
  },
  {
    name: 'Fear of God',
    description: 'Verses about reverent fear of the Lord',
    category: 'wisdom',
    importance: 4,
    testament: 'both',
    subTopics: ['Fear', 'Reverence', 'Awe'],
    verses: [
      'Proverbs 9:10',
      'Psalm 111:10',
      'Proverbs 1:7',
      'Proverbs 19:23',
      'Psalm 34:9',
      'Ecclesiastes 12:13',
      'Proverbs 8:13',
      'Psalm 147:11',
      'Proverbs 14:26-27',
      'Psalm 25:14',
      'Proverbs 16:6',
      'Psalm 115:11',
      'Proverbs 22:4',
      'Isaiah 33:6',
      'Acts 9:31'
    ]
  },
  {
    name: 'Work and Diligence',
    description: 'Verses about working diligently for the Lord',
    category: 'practical',
    importance: 3,
    testament: 'both',
    subTopics: ['Work', 'Diligence', 'Stewardship'],
    verses: [
      'Colossians 3:23-24',
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
      '2 Thessalonians 3:10-12',
      'Proverbs 10:4-5',
      'Proverbs 12:11'
    ]
  },
  {
    name: 'Money and Stewardship',
    description: 'Verses about handling money and possessions',
    category: 'practical',
    importance: 4,
    testament: 'both',
    subTopics: ['Money', 'Stewardship', 'Contentment'],
    verses: [
      '1 Timothy 6:10',
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
      '1 Timothy 6:17-19',
      'Proverbs 30:8-9',
      'Proverbs 3:9-10'
    ]
  },
  {
    name: 'Contentment',
    description: 'Verses about being content in all circumstances',
    category: 'practical',
    importance: 4,
    testament: 'both',
    subTopics: ['Contentment', 'Satisfaction', 'Rest'],
    verses: [
      'Philippians 4:11-13',
      '1 Timothy 6:6-8',
      'Hebrews 13:5',
      'Proverbs 30:8-9',
      'Psalm 23:1',
      '2 Corinthians 12:10',
      'Psalm 16:11',
      'Psalm 37:16',
      'Psalm 84:10-11',
      'Proverbs 15:17',
      'Proverbs 17:1',
      'Luke 12:15',
      '2 Corinthians 9:8',
      '1 Timothy 4:4-5',
      'Ecclesiastes 5:12'
    ]
  },
  {
    name: 'Tongue and Speech',
    description: 'Verses about controlling our words',
    category: 'practical',
    importance: 4,
    testament: 'both',
    subTopics: ['Speech', 'Words', 'Tongue'],
    verses: [
      'Ephesians 4:29',
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
      '1 Peter 3:10',
      'Proverbs 21:23',
      'Psalm 19:14'
    ]
  },

  // ================================================================
  // SECTION 10: RELATIONSHIPS
  // ================================================================
  {
    name: 'Marriage',
    description: 'Verses about marriage and its meaning',
    category: 'relationships',
    importance: 4,
    testament: 'both',
    subTopics: ['Marriage', 'Husbands', 'Wives'],
    verses: [
      'Ephesians 5:22-33',
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
      'Hebrews 13:4',
      'Malachi 2:13-16',
      'Matthew 19:4-6'
    ]
  },
  {
    name: 'Parenting',
    description: 'Verses about raising children and family life',
    category: 'relationships',
    importance: 4,
    testament: 'both',
    subTopics: ['Parenting', 'Children', 'Family'],
    verses: [
      'Ephesians 6:1-4',
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
      'Proverbs 19:18',
      'Psalm 127:3',
      'Titus 2:4-5'
    ]
  },
  {
    name: 'Friendship',
    description: 'Verses about true friendship and relationships',
    category: 'relationships',
    importance: 3,
    testament: 'both',
    subTopics: ['Friendship', 'Loyalty', 'Companionship'],
    verses: [
      'Proverbs 17:17',
      'Proverbs 18:24',
      'Proverbs 27:6',
      'Proverbs 27:17',
      'Ecclesiastes 4:9-10',
      'John 15:13-15',
      'Proverbs 22:11',
      'Proverbs 13:20',
      'Proverbs 16:28',
      'Proverbs 19:4',
      'Proverbs 27:9',
      '1 Samuel 18:1-3',
      'Ruth 1:16-17',
      'Proverbs 27:10',
      'Proverbs 11:13'
    ]
  },
  {
    name: 'Love for Enemies',
    description: 'Verses about loving and forgiving enemies',
    category: 'relationships',
    importance: 4,
    testament: 'both',
    subTopics: ['Enemies', 'Love', 'Forgiveness'],
    verses: [
      'Matthew 5:43-48',
      'Luke 6:27-36',
      'Romans 12:17-21',
      'Proverbs 25:21-22',
      'Luke 23:34',
      'Acts 7:60',
      '1 Peter 3:9-12',
      'Proverbs 24:17-18',
      'Exodus 23:4-5',
      'Leviticus 19:18',
      'Romans 12:14',
      'Colossians 3:13',
      'Ephesians 4:31-32',
      'Matthew 6:12',
      'Mark 11:25'
    ]
  },

  // ================================================================
  // SECTION 11: SUFFERING & TRIALS
  // ================================================================
  {
    name: 'Suffering and Trials',
    description: 'Verses about enduring suffering and trials',
    category: 'suffering',
    importance: 4,
    testament: 'both',
    subTopics: ['Suffering', 'Trials', 'Testing'],
    verses: [
      'James 1:2-4',
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
      '2 Corinthians 1:3-7',
      'Psalm 34:19',
      'John 16:33'
    ]
  },
  {
    name: 'Comfort in Suffering',
    description: 'Verses about God\'s comfort in difficult times',
    category: 'suffering',
    importance: 5,
    testament: 'both',
    subTopics: ['Comfort', 'Hope', 'Sustenance'],
    verses: [
      '2 Corinthians 1:3-5',
      'Psalm 23:4',
      'Psalm 34:18',
      'Psalm 46:1-3',
      'Isaiah 41:10',
      'Isaiah 43:2',
      'Jeremiah 31:13',
      'Matthew 5:4',
      'Romans 15:13',
      '1 Thessalonians 4:18',
      '2 Thessalonians 2:16-17',
      'Revelation 21:4',
      'Psalm 147:3',
      'Psalm 27:1',
      'Psalm 18:1-2'
    ]
  },
  {
    name: 'Weakness and Grace',
    description: 'Verses about God\'s grace in our weakness',
    category: 'suffering',
    importance: 5,
    testament: 'both',
    subTopics: ['Weakness', 'Grace', 'Strength'],
    verses: [
      '2 Corinthians 12:9-10',
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
      'Colossians 1:11',
      'Psalm 18:32',
      'Psalm 28:7'
    ]
  },

  // ================================================================
  // SECTION 12: COVENANTS & PROMISES
  // ================================================================
  {
    name: 'Abrahamic Covenant',
    description: 'Verses about God\'s covenant with Abraham',
    category: 'covenant',
    importance: 4,
    testament: 'old',
    subTopics: ['Covenant', 'Promise', 'Blessing'],
    verses: [
      'Genesis 12:2-3',
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
      'Ephesians 2:12-13',
      'Romans 9:6-8',
      'Galatians 3:29'
    ]
  },
  {
    name: 'Davidic Covenant',
    description: 'Verses about God\'s covenant with David',
    category: 'covenant',
    importance: 4,
    testament: 'old',
    subTopics: ['Covenant', 'Kingdom', 'Throne'],
    verses: [
      '2 Samuel 7:12-16',
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
      'Romans 1:3-4',
      'Psalm 132:17',
      'Acts 15:16-17'
    ]
  },
  {
    name: 'New Covenant',
    description: 'Verses about the new covenant in Christ',
    category: 'covenant',
    importance: 5,
    testament: 'both',
    subTopics: ['New Covenant', 'Grace', 'Heart'],
    verses: [
      'Jeremiah 31:31-34',
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
      'Joel 2:28-32',
      'Hebrews 12:24',
      'Matthew 26:28'
    ]
  },

  // ================================================================
  // SECTION 13: ANGELS & SPIRITUAL BEINGS
  // ================================================================
  {
    name: 'Angels',
    description: 'Verses about angels as God\'s messengers and protectors',
    category: 'theology',
    importance: 3,
    testament: 'both',
    subTopics: ['Angels', 'Messengers', 'Protection'],
    verses: [
      'Hebrews 1:14',
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
      '1 Corinthians 6:3',
      'Revelation 5:11-12',
      'Revelation 22:8-9'
    ]
  },
  {
    name: 'Satan and Demons',
    description: 'Verses about the devil and spiritual warfare',
    category: 'theology',
    importance: 4,
    testament: 'both',
    subTopics: ['Satan', 'Demons', 'Spiritual Warfare'],
    verses: [
      'Ephesians 6:11-12',
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
      'Jude 1:9',
      'Matthew 4:1-11',
      'Revelation 20:10'
    ]
  },

  // ================================================================
  // SECTION 14: PROPHECY & MESSIANIC VERSES
  // ================================================================
  {
    name: 'Messianic Prophecies',
    description: 'Old Testament prophecies fulfilled in Jesus',
    category: 'prophecy',
    importance: 5,
    testament: 'old',
    subTopics: ['Prophecy', 'Messiah', 'Fulfillment'],
    verses: [
      'Isaiah 7:14',
      'Isaiah 9:6-7',
      'Isaiah 53:1-12',
      'Micah 5:2',
      'Psalm 22:1-31',
      'Psalm 110:1-7',
      'Zechariah 9:9',
      'Zechariah 12:10',
      'Zechariah 13:7',
      'Psalm 16:10',
      'Psalm 34:20',
      'Psalm 69:21',
      'Isaiah 61:1-3',
      'Jeremiah 23:5-6',
      'Malachi 3:1-3'
    ]
  },

  // ================================================================
  // SECTION 15: HEALING & RESTORATION
  // ================================================================
  {
    name: 'Healing',
    description: 'Verses about physical and spiritual healing',
    category: 'suffering',
    importance: 4,
    testament: 'both',
    subTopics: ['Healing', 'Restoration', 'Health'],
    verses: [
      'Exodus 15:26',
      'Psalm 103:2-3',
      'Jeremiah 17:14',
      '3 John 1:2',
      '1 Peter 2:24',
      'Psalm 30:2',
      'Psalm 147:3',
      'Psalm 34:18',
      'Matthew 11:28',
      '2 Corinthians 12:9',
      'Psalm 34:17-20',
      'Psalm 41:1-3',
      'James 5:14-16',
      'Psalm 118:17',
      'Isaiah 53:5'
    ]
  },
  {
    name: 'Restoration',
    description: 'Verses about God restoring what was lost',
    category: 'suffering',
    importance: 4,
    testament: 'both',
    subTopics: ['Restoration', 'Renewal', 'Redemption'],
    verses: [
      'Joel 2:25-26',
      'Psalm 23:3',
      'Psalm 51:12',
      'Isaiah 61:7',
      'Jeremiah 30:17',
      'Ezekiel 36:33-35',
      '1 Peter 5:10',
      'Revelation 21:5',
      'Zechariah 9:12',
      'Psalm 80:3',
      'Psalm 85:1-3',
      'Acts 3:19-21',
      'Romans 8:21',
      '2 Corinthians 5:17',
      'Galatians 6:1'
    ]
  },

  // ================================================================
  // SECTION 16: GUIDANCE & DIRECTION
  // ================================================================
  {
    name: 'Guidance',
    description: 'Verses about seeking God\'s guidance',
    category: 'wisdom',
    importance: 5,
    testament: 'both',
    subTopics: ['Guidance', 'Direction', 'Leading'],
    verses: [
      'Proverbs 3:5-6',
      'Psalm 32:8',
      'Psalm 119:105',
      'Isaiah 58:11',
      'Proverbs 16:9',
      'Psalm 25:4-5',
      'Psalm 48:14',
      'Psalm 73:24',
      'Psalm 25:8-9',
      'Proverbs 11:14',
      'Proverbs 15:22',
      'Isaiah 30:21',
      'Psalm 37:23-24',
      'Psalm 27:11',
      'Proverbs 16:3'
    ]
  },
  {
    name: 'God\'s Will',
    description: 'Verses about knowing and doing God\'s will',
    category: 'spiritual-life',
    importance: 4,
    testament: 'both',
    subTopics: ['Will of God', 'Obedience', 'Purpose'],
    verses: [
      'Romans 12:1-2',
      'Ephesians 5:17',
      'Colossians 1:9-10',
      '1 Thessalonians 5:18',
      '1 Peter 2:15',
      '1 Peter 4:19',
      'John 7:17',
      'Psalm 40:8',
      'Psalm 143:10',
      'Matthew 7:21',
      'Ephesians 6:6',
      'Hebrews 13:21',
      'Matthew 6:10',
      'John 6:38-40',
      'James 4:13-15'
    ]
  },

  // ================================================================
  // SECTION 17: SPIRITUAL DISCIPLINES
  // ================================================================
  {
    name: 'Fasting',
    description: 'Verses about fasting and seeking God',
    category: 'spiritual-life',
    importance: 3,
    testament: 'both',
    subTopics: ['Fasting', 'Humility', 'Prayer'],
    verses: [
      'Isaiah 58:6-9',
      'Matthew 6:16-18',
      'Matthew 17:21',
      'Acts 13:2-3',
      'Acts 14:23',
      'Esther 4:16',
      'Joel 2:12-13',
      'Psalm 69:10',
      'Zechariah 7:5-6',
      'Acts 27:9',
      'Daniel 9:3',
      'Luke 2:37',
      'Acts 10:30',
      '1 Corinthians 7:5',
      'Nehemiah 1:4'
    ]
  },
  {
    name: 'Reading Scripture',
    description: 'Verses about reading and studying the Bible',
    category: 'spiritual-life',
    importance: 5,
    testament: 'both',
    subTopics: ['Bible', 'Study', 'Meditation'],
    verses: [
      '2 Timothy 3:16-17',
      'Psalm 119:11',
      'Psalm 119:105',
      'Joshua 1:8',
      'Psalm 1:1-3',
      'Acts 17:11',
      'Colossians 3:16',
      'James 1:22-25',
      'Deuteronomy 17:18-19',
      'Psalm 19:7-11',
      'Proverbs 2:1-6',
      'Hebrews 4:12',
      'Romans 15:4',
      'Psalm 119:97-100',
      'John 5:39-40'
    ]
  },

  // ================================================================
  // SECTION 18: THE GOSPEL & MISSIONS
  // ================================================================
  {
    name: 'The Gospel',
    description: 'Verses about the good news of salvation in Christ',
    category: 'soteriology',
    importance: 5,
    testament: 'both',
    subTopics: ['Gospel', 'Good News', 'Salvation'],
    verses: [
      'Romans 1:16-17',
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
      'Romans 10:17',
      'Mark 16:15',
      'Acts 20:24',
      '1 Timothy 1:11'
    ]
  },
  {
    name: 'The Great Commission',
    description: 'Verses about making disciples of all nations',
    category: 'ecclesiology',
    importance: 5,
    testament: 'new',
    subTopics: ['Missions', 'Discipleship', 'Witness'],
    verses: [
      'Matthew 28:18-20',
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
      '1 Peter 3:15',
      'Colossians 1:28-29',
      '2 Timothy 2:2'
    ]
  },

  // ================================================================
  // SECTION 19: THE KINGDOM OF GOD
  // ================================================================
  {
    name: 'Kingdom of God',
    description: 'Verses about the Kingdom of God and its values',
    category: 'theology',
    importance: 5,
    testament: 'both',
    subTopics: ['Kingdom', 'Righteousness', 'Rule'],
    verses: [
      'Luke 17:20-21',
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
      'Revelation 1:6',
      'Matthew 13:44-46',
      'Luke 12:31-32'
    ]
  },

  // ================================================================
  // SECTION 20: THE LAW
  // ================================================================
  {
    name: 'The Ten Commandments',
    description: 'Verses about the moral law of God',
    category: 'law',
    importance: 4,
    testament: 'old',
    subTopics: ['Law', 'Moral', 'Commandments'],
    verses: [
      'Exodus 20:1-17',
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
      'Romans 7:7-12',
      'Romans 3:20',
      'Psalm 19:7-9'
    ]
  },
  {
    name: 'The Law and Grace',
    description: 'Verses about the relationship between law and grace',
    category: 'law',
    importance: 5,
    testament: 'both',
    subTopics: ['Law', 'Grace', 'Freedom'],
    verses: [
      'Galatians 3:24',
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
      'Romans 3:28',
      'Romans 6:14',
      '2 Corinthians 5:17'
    ]
  },

  // ================================================================
  // SECTION 21: ADDITIONAL THEMES
  // ================================================================
  {
    name: 'Humility',
    description: 'Verses about humility and being humble before God',
    category: 'wisdom',
    importance: 4,
    testament: 'both',
    subTopics: ['Humility', 'Pride', 'Meekness'],
    verses: [
      'James 4:6',
      '1 Peter 5:5-6',
      'Philippians 2:3-4',
      'Proverbs 22:4',
      'Proverbs 15:33',
      'Proverbs 11:2',
      'Psalm 25:9',
      'Micah 6:8',
      'Matthew 23:12',
      'Luke 14:11',
      'Proverbs 16:18-19',
      '2 Chronicles 7:14',
      'Isaiah 57:15',
      'Proverbs 29:23',
      'Colossians 3:12'
    ]
  },
  {
    name: 'Patience',
    description: 'Verses about patience and waiting on the Lord',
    category: 'wisdom',
    importance: 4,
    testament: 'both',
    subTopics: ['Patience', 'Waiting', 'Endurance'],
    verses: [
      'James 1:3-4',
      'Romans 12:12',
      'Psalm 37:7',
      'Psalm 40:1',
      'Proverbs 14:29',
      'Proverbs 15:18',
      'Colossians 1:11',
      'Colossians 3:12',
      '2 Timothy 2:24',
      'Hebrews 6:12',
      'Hebrews 10:36',
      'James 5:7-8',
      '1 Peter 2:20',
      'Revelation 14:12',
      'Psalm 27:14'
    ]
  },
  {
    name: 'Courage',
    description: 'Verses about being courageous and bold in faith',
    category: 'spiritual-life',
    importance: 4,
    testament: 'both',
    subTopics: ['Courage', 'Boldness', 'Strength'],
    verses: [
      'Joshua 1:9',
      'Deuteronomy 31:6',
      'Psalm 27:14',
      'Isaiah 41:10',
      'Acts 4:13',
      'Acts 4:29-31',
      '2 Timothy 1:7',
      'Hebrews 13:6',
      'Psalm 56:3-4',
      'Psalm 118:6-7',
      '1 Corinthians 16:13',
      'Ephesians 6:10',
      '2 Corinthians 5:6-8',
      'Proverbs 28:1',
      'Acts 28:31'
    ]
  },
  {
    name: 'Obedience',
    description: 'Verses about obeying God and His commands',
    category: 'spiritual-life',
    importance: 5,
    testament: 'both',
    subTopics: ['Obedience', 'Compliance', 'Faithfulness'],
    verses: [
      'John 14:15',
      '1 John 5:3',
      'James 1:22-25',
      'Deuteronomy 28:1-2',
      'Joshua 1:7-8',
      'Psalm 119:60',
      'Proverbs 3:1-4',
      'Ecclesiastes 12:13',
      'John 15:10',
      'Acts 5:29',
      'Romans 13:1-2',
      'Ephesians 6:1',
      'Colossians 3:20',
      '1 Peter 1:14-16',
      'Hebrews 5:8-9'
    ]
  }
]

// ================================================================
// HELPER FUNCTIONS
// ================================================================

/**
 * Get all topic names
 */
export const getTopicNames = (): string[] => {
  return topics.map(t => t.name)
}

/**
 * Get a topic by name (case-insensitive)
 */
export const getTopicByName = (name: string): Topic | undefined => {
  return topics.find(t => t.name.toLowerCase() === name.toLowerCase())
}

/**
 * Search topics by name, description, or verses
 */
export const searchTopics = (query: string): Topic[] => {
  const lowerQuery = query.toLowerCase()
  return topics.filter(t => 
    t.name.toLowerCase().includes(lowerQuery) ||
    t.description.toLowerCase().includes(lowerQuery) ||
    t.verses.some(v => v.toLowerCase().includes(lowerQuery)) ||
    (t.subTopics && t.subTopics.some(st => st.toLowerCase().includes(lowerQuery)))
  )
}

/**
 * Get topics by category
 */
export const getTopicsByCategory = (category: string): Topic[] => {
  return topics.filter(t => t.category === category)
}

/**
 * Get all unique categories
 */
export const getAllCategories = (): string[] => {
  const categories = new Set<string>()
  topics.forEach(t => {
    if (t.category) categories.add(t.category)
  })
  return Array.from(categories)
}

/**
 * Get topics by importance level
 */
export const getTopicsByImportance = (level: 1 | 2 | 3 | 4 | 5): Topic[] => {
  return topics.filter(t => t.importance === level)
}

/**
 * Get topics by testament
 */
export const getTopicsByTestament = (testament: 'old' | 'new' | 'both'): Topic[] => {
  return topics.filter(t => t.testament === testament)
}

/**
 * Get all verses from a list of topic names
 */
export const getVersesFromTopics = (topicNames: string[]): string[] => {
  const verses = new Set<string>()
  topicNames.forEach(name => {
    const topic = getTopicByName(name)
    if (topic) {
      topic.verses.forEach(v => verses.add(v))
    }
  })
  return Array.from(verses)
}

/**
 * Get topic statistics
 */
export const getTopicStats = () => ({
  totalTopics: topics.length,
  categories: getAllCategories().reduce((acc, cat) => {
    acc[cat] = topics.filter(t => t.category === cat).length
    return acc
  }, {} as Record<string, number>),
  importanceLevels: {
    level5: topics.filter(t => t.importance === 5).length,
    level4: topics.filter(t => t.importance === 4).length,
    level3: topics.filter(t => t.importance === 3).length,
    level2: topics.filter(t => t.importance === 2).length,
    level1: topics.filter(t => t.importance === 1).length
  },
  testaments: {
    old: topics.filter(t => t.testament === 'old').length,
    new: topics.filter(t => t.testament === 'new').length,
    both: topics.filter(t => t.testament === 'both').length
  },
  totalVerses: topics.reduce((sum, t) => sum + t.verses.length, 0),
  uniqueVerses: new Set(topics.flatMap(t => t.verses)).size
})

/**
 * Get related topics (sharing similar verses)
 */
/**
 * Get related topics (sharing similar verses)
 */
export const getRelatedTopics = (topicName: string, minSharedVerses: number = 2): Topic[] => {
  const topic = getTopicByName(topicName)
  if (!topic) return []
  
  const topicVerses = new Set(topic.verses)
  const related: Array<{ topic: Topic; sharedCount: number }> = []
  
  topics.forEach(t => {
    if (t.name === topicName) return
    const shared = t.verses.filter(v => topicVerses.has(v)).length
    if (shared >= minSharedVerses) {
      related.push({ topic: t, sharedCount: shared })
    }
  })
  
  return related.sort((a, b) => b.sharedCount - a.sharedCount).map(item => item.topic)
}
/**
 * Get random topic
 */
export const getRandomTopic = (category?: string): Topic | undefined => {
  let pool = topics
  if (category) {
    pool = getTopicsByCategory(category)
  }
  if (pool.length === 0) return undefined
  return pool[Math.floor(Math.random() * pool.length)]
}

/**
 * Get a study plan (multiple topics grouped)
 */
export const getStudyPlan = (category: string, count: number = 5): Topic[] => {
  const pool = getTopicsByCategory(category)
  return pool.slice(0, count)
}

/**
 * Format topic for display
 */
export const formatTopic = (topic: Topic): string => {
  let output = `${topic.name}\n${'='.repeat(topic.name.length)}\n`
  output += `Description: ${topic.description}\n`
  output += `Category: ${topic.category || 'General'}\n`
  output += `Importance: ${'⭐'.repeat(topic.importance || 0)}\n`
  if (topic.subTopics) {
    output += `Sub-topics: ${topic.subTopics.join(', ')}\n`
  }
  output += `\nVerses (${topic.verses.length}):\n`
  topic.verses.forEach((v, i) => {
    output += `  ${i + 1}. ${v}\n`
  })
  return output
}