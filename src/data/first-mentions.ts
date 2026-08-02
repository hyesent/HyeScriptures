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

// ✅ Use interface instead of type - this fixes the export issue
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
// FIRST MENTIONS DATA
// ================================================================



export const firstMentions: FirstMention[] = [
  // ================================================================
  // SECTION 1: THEOLOGY
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

  // ================================================================
  // SECTION 2: CREATION
  // ================================================================
  {
    id: 'fm-006',
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
    id: 'fm-007',
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
    id: 'fm-008',
    word: 'Man (Adam)',
    reference: 'Genesis 1:26',
    description: 'First mention of man, created in God\'s image',
    category: 'creation',
    context: 'Let us make man in our image, after our likeness.',
    significance: 'Establishes humanity\'s unique dignity and purpose as God\'s image-bearers.',
    relatedReferences: ['Genesis 2:7', 'Psalm 8:4-6', 'Hebrews 2:6-8'],
    icon: '👤'
  },
  {
    id: 'fm-009',
    word: 'Woman',
    reference: 'Genesis 2:22',
    description: 'First mention of woman, created from man',
    category: 'creation',
    context: 'God made a woman from Adam\'s rib and brought her to him.',
    significance: 'Establishes the complementary nature of male and female and the institution of marriage.',
    relatedReferences: ['Genesis 2:18', 'Ephesians 5:22-33', '1 Peter 3:7'],
    icon: '👩'
  },

  // ================================================================
  // SECTION 3: COVENANT
  // ================================================================
  {
    id: 'fm-010',
    word: 'Covenant',
    reference: 'Genesis 6:18',
    description: 'First mention of covenant, with Noah',
    category: 'covenant',
    context: 'God establishes a covenant with Noah to save him and his family.',
    significance: 'Covenant is God\'s formal agreement to bless and protect His people.',
    relatedReferences: ['Genesis 9:9-17', 'Genesis 15:18', 'Exodus 19:5-6'],
    icon: '📜'
  },
  {
    id: 'fm-011',
    word: 'Promise',
    reference: 'Genesis 12:2-3',
    description: 'First mention of promise, to Abraham',
    category: 'covenant',
    context: 'God promises to make Abraham a great nation and bless all families of the earth through him.',
    significance: 'Establishes the pattern of God\'s promises and their fulfillment.',
    relatedReferences: ['Galatians 3:16-18', 'Romans 4:13-16', 'Hebrews 6:13-18'],
    icon: '🤝'
  },
  {
    id: 'fm-012',
    word: 'Bless',
    reference: 'Genesis 1:22',
    description: 'First mention of blessing, to creation',
    category: 'covenant',
    context: 'God blessed the creatures of the sea and birds, commanding them to multiply.',
    significance: 'Blessing is God\'s empowering word for fruitfulness and flourishing.',
    relatedReferences: ['Genesis 12:2-3', 'Numbers 6:24-26', 'Ephesians 1:3'],
    icon: '✨'
  },

  // ================================================================
  // SECTION 4: SIN & JUDGMENT
  // ================================================================
  {
    id: 'fm-013',
    word: 'Sin',
    reference: 'Genesis 4:7',
    description: 'First mention of sin, with Cain',
    category: 'sin',
    context: 'God warns Cain that sin is crouching at his door, but he must rule over it.',
    significance: 'Sin is a power that seeks to control us, but we can overcome it.',
    relatedReferences: ['Romans 6:12-14', 'James 1:14-15', '1 John 3:4'],
    icon: '⚠️'
  },
  {
    id: 'fm-014',
    word: 'Judgment',
    reference: 'Genesis 18:25',
    description: 'First mention of judgment, in Abraham\'s plea for Sodom',
    category: 'judgment',
    context: 'Abraham asks if the Judge of all the earth will not do what is just.',
    significance: 'Establishes that God is the righteous judge who does what is right.',
    relatedReferences: ['Psalm 9:7-8', 'Romans 2:5-6', '2 Corinthians 5:10'],
    icon: '⚖️'
  },
  {
    id: 'fm-015',
    word: 'Death',
    reference: 'Genesis 2:17',
    description: 'First mention of death, as a consequence of sin',
    category: 'sin',
    context: 'God warns Adam that eating from the forbidden tree would result in death.',
    significance: 'Death is the consequence of sin and separation from God.',
    relatedReferences: ['Romans 5:12', 'Romans 6:23', '1 Corinthians 15:21-22'],
    icon: '💀'
  },

  // ================================================================
  // SECTION 5: SALVATION
  // ================================================================
  {
    id: 'fm-016',
    word: 'Save / Salvation',
    reference: 'Genesis 47:25',
    description: 'First mention of salvation, connected to Joseph',
    category: 'salvation',
    context: 'The Egyptians tell Joseph, "You have saved our lives."',
    significance: 'Salvation is deliverance from death and preservation of life.',
    relatedReferences: ['Exodus 14:13', 'Psalm 27:1', 'Acts 4:12'],
    icon: '🆓'
  },
  {
    id: 'fm-017',
    word: 'Redeem / Redemption',
    reference: 'Genesis 48:16',
    description: 'First mention of redemption, connected to the Angel who redeems',
    category: 'salvation',
    context: 'Jacob speaks of the Angel who redeemed him from all evil.',
    significance: 'Redemption is deliverance from evil and rescue by a powerful savior.',
    relatedReferences: ['Exodus 6:6', 'Psalm 130:7-8', 'Galatians 3:13'],
    icon: '🕊️'
  },

  // ================================================================
  // SECTION 6: WORSHIP
  // ================================================================
  {
    id: 'fm-018',
    word: 'Worship',
    reference: 'Genesis 22:5',
    description: 'First mention of worship, with Abraham',
    category: 'worship',
    context: 'Abraham tells his servants to stay while he and Isaac go to worship.',
    significance: 'Worship involves sacrificial obedience and surrender to God.',
    relatedReferences: ['Exodus 20:3-6', 'John 4:23-24', 'Romans 12:1'],
    icon: '🙏'
  },
  {
    id: 'fm-019',
    word: 'Praise',
    reference: 'Genesis 29:35',
    description: 'First mention of praise, with Leah naming Judah',
    category: 'worship',
    context: 'Leah gives birth to Judah and says, "This time I will praise the Lord."',
    significance: 'Praise is the joyful acknowledgment of God\'s goodness and faithfulness.',
    relatedReferences: ['Psalm 34:1', 'Psalm 150:1-6', 'Revelation 5:11-14'],
    icon: '🎵'
  },
  {
    id: 'fm-020',
    word: 'Altar',
    reference: 'Genesis 8:20',
    description: 'First mention of an altar, built by Noah',
    category: 'worship',
    context: 'Noah builds an altar to the Lord and offers sacrifices after the flood.',
    significance: 'The altar is a place of sacrifice and communion with God.',
    relatedReferences: ['Exodus 20:24-26', '1 Kings 18:30-39', 'Hebrews 13:10'],
    icon: '🔥'
  },

  // ================================================================
  // SECTION 7: RELATIONSHIPS
  // ================================================================
  {
    id: 'fm-021',
    word: 'Love',
    reference: 'Genesis 22:2',
    description: 'First mention of love, with Abraham and Isaac',
    category: 'relationships',
    context: 'God says, "Take your son, your only son Isaac, whom you love."',
    significance: 'Love is the deep affection and devotion between family members.',
    relatedReferences: ['Deuteronomy 6:5', 'Song of Solomon 8:6-7', '1 Corinthians 13:4-7'],
    icon: '❤️'
  },
  {
    id: 'fm-022',
    word: 'Marriage',
    reference: 'Genesis 2:24',
    description: 'First mention of marriage, established by God',
    category: 'relationships',
    context: 'A man shall leave his father and mother and be joined to his wife.',
    significance: 'Marriage is the foundational human relationship, established by God.',
    relatedReferences: ['Ephesians 5:22-33', 'Matthew 19:4-6', 'Hebrews 13:4'],
    icon: '💍'
  },
  {
    id: 'fm-023',
    word: 'Friend',
    reference: 'Exodus 33:11',
    description: 'First mention of friendship, with Moses and God',
    category: 'relationships',
    context: 'The Lord spoke to Moses face to face, as a man speaks to his friend.',
    significance: 'Friendship with God is the ultimate intimacy and relationship.',
    relatedReferences: ['John 15:13-15', 'Proverbs 17:17', 'Proverbs 18:24'],
    icon: '🤝'
  },

  // ================================================================
  // SECTION 8: PROPHECY
  // ================================================================
  {
    id: 'fm-024',
    word: 'Prophet',
    reference: 'Genesis 20:7',
    description: 'First mention of a prophet, with Abraham',
    category: 'prophecy',
    context: 'God calls Abraham a prophet and commands Abimelech to restore Sarah to him.',
    significance: 'A prophet is one who speaks for God and intercedes for others.',
    relatedReferences: ['Deuteronomy 18:15-19', 'Acts 3:22-23', '1 Corinthians 12:28'],
    icon: '📢'
  },
  {
    id: 'fm-025',
    word: 'Dream',
    reference: 'Genesis 20:3',
    description: 'First mention of a dream as divine communication',
    category: 'prophecy',
    context: 'God comes to Abimelech in a dream to warn him.',
    significance: 'Dreams are one way God communicates with people.',
    relatedReferences: ['Genesis 28:12', 'Daniel 2:28', 'Matthew 1:20'],
    icon: '💭'
  },

  // ================================================================
  // SECTION 9: LAW
  // ================================================================
  {
    id: 'fm-026',
    word: 'Law',
    reference: 'Exodus 18:20',
    description: 'First mention of law, as instruction from God',
    category: 'law',
    context: 'Jethro advises Moses to teach the people God\'s laws and instructions.',
    significance: 'Law is God\'s instruction for how His people should live.',
    relatedReferences: ['Exodus 20:1-17', 'Psalm 119:1-16', 'Galatians 3:19-24'],
    icon: '📋'
  },
  {
    id: 'fm-027',
    word: 'Commandment',
    reference: 'Genesis 2:16',
    description: 'First mention of a commandment, given to Adam',
    category: 'law',
    context: 'God commands Adam not to eat from the tree of knowledge.',
    significance: 'Commandments are God\'s specific instructions for obedience.',
    relatedReferences: ['Exodus 20:1-17', 'Deuteronomy 6:1-9', 'John 14:15'],
    icon: '📜'
  },

  // ================================================================
  // SECTION 10: GRACE & MERCY
  // ================================================================
  {
    id: 'fm-028',
    word: 'Mercy',
    reference: 'Genesis 19:16',
    description: 'First mention of mercy, with Lot',
    category: 'grace',
    context: 'The angels showed mercy to Lot and pulled him back into the house.',
    significance: 'Mercy is God\'s compassion and withholding of deserved judgment.',
    relatedReferences: ['Psalm 103:8-13', 'Ephesians 2:4-5', 'Titus 3:4-5'],
    icon: '🤲'
  },

  // ================================================================
  // SECTION 11: SPIRITUAL WARFARE
  // ================================================================
  {
    id: 'fm-029',
    word: 'Temptation',
    reference: 'Genesis 3:1-6',
    description: 'First mention of temptation, with the serpent',
    category: 'theology',
    context: 'The serpent tempts Eve to eat from the forbidden tree.',
    significance: 'Temptation is the enticement to sin, often through deception.',
    relatedReferences: ['Matthew 4:1-11', 'James 1:13-15', '1 Corinthians 10:13'],
    icon: '🐍'
  },

  // ================================================================
  // SECTION 12: KINGDOM & PROMISES
  // ================================================================
  {
    id: 'fm-030',
    word: 'Kingdom',
    reference: 'Exodus 19:6',
    description: 'First mention of kingdom, as a kingdom of priests',
    category: 'promise',
    context: 'God promises Israel will be a kingdom of priests and a holy nation.',
    significance: 'The kingdom is God\'s rule over His people, established for His purposes.',
    relatedReferences: ['Deuteronomy 33:5', '1 Samuel 12:12', 'Matthew 6:33'],
    icon: '👑'
  },
  {
    id: 'fm-031',
    word: 'Anointed / Messiah',
    reference: 'Exodus 30:30',
    description: 'First mention of anointed, with Aaron and his sons',
    category: 'prophecy',
    context: 'God commands Moses to anoint Aaron and his sons as priests.',
    significance: 'Anointing signifies consecration and special appointment by God.',
    relatedReferences: ['Psalm 2:2', 'Isaiah 61:1', 'Luke 4:18'],
    icon: '💧'
  },
  {
    id: 'fm-032',
    word: 'Seed (Offspring)',
    reference: 'Genesis 3:15',
    description: 'First mention of seed, pointing to the Messiah',
    category: 'prophecy',
    context: 'God promises the seed of the woman will crush the serpent\'s head.',
    significance: 'This is the first prophecy of the coming Messiah.',
    relatedReferences: ['Genesis 22:18', 'Galatians 3:16', 'Revelation 12:17'],
    icon: '🌱'
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
    fm.reference.toLowerCase().includes(lowerQuery)
  )
}

export const getFirstMentionsByCategory = (category: FirstMentionCategory): FirstMention[] => {
  return firstMentions.filter(fm => fm.category === category)
}

export const getFirstMentionCategories = (): FirstMentionCategory[] => {
  return [
    'theology', 'creation', 'covenant', 'sin', 'salvation',
    'worship', 'relationships', 'prophecy', 'law', 'promise',
    'judgment', 'grace'
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