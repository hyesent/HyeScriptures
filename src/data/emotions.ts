export type Emotion = 'peace' | 'anger' | 'joy' | 'sorrow' | 'fear' | 'love' | 'hope' | 'gratitude'

export type EmotionColor = {
  emotion: Emotion
  label: string
  color: string
  bgColor: string
  textColor: string
  emoji: string
  description: string
}

export interface EmotionVerse {
  reference: string
  emotion: Emotion
  intensity: 1 | 2 | 3 | 4 | 5
  context: string
  book: string
  chapter: number
  verse: number
}

// ================================================================
// EMOTION COLORS
// ================================================================

export const emotionColors: EmotionColor[] = [
  {
    emotion: 'peace',
    label: 'Peace',
    color: '#3b82f6',
    bgColor: '#dbeafe',
    textColor: '#1e40af',
    emoji: '🕊️',
    description: 'Calm, rest, contentment, tranquility'
  },
  {
    emotion: 'anger',
    label: 'Anger',
    color: '#ef4444',
    bgColor: '#fee2e2',
    textColor: '#dc2626',
    emoji: '🔥',
    description: 'Wrath, fury, indignation, righteous anger'
  },
  {
    emotion: 'joy',
    label: 'Joy',
    color: '#f59e0b',
    bgColor: '#fef3c7',
    textColor: '#d97706',
    emoji: '⭐',
    description: 'Gladness, rejoicing, delight, celebration'
  },
  {
    emotion: 'sorrow',
    label: 'Sorrow',
    color: '#8b5cf6',
    bgColor: '#ede9fe',
    textColor: '#6d28d9',
    emoji: '😢',
    description: 'Grief, mourning, lamentation, weeping'
  },
  {
    emotion: 'fear',
    label: 'Fear',
    color: '#6b7280',
    bgColor: '#f3f4f6',
    textColor: '#374151',
    emoji: '😰',
    description: 'Awe, terror, anxiety, dread, reverence'
  },
  {
    emotion: 'love',
    label: 'Love',
    color: '#ec4899',
    bgColor: '#fce7f3',
    textColor: '#be185d',
    emoji: '❤️',
    description: 'Affection, compassion, devotion, charity'
  },
  {
    emotion: 'hope',
    label: 'Hope',
    color: '#22c55e',
    bgColor: '#dcfce7',
    textColor: '#15803d',
    emoji: '🌈',
    description: 'Expectation, trust, confidence, waiting'
  },
  {
    emotion: 'gratitude',
    label: 'Gratitude',
    color: '#f472b6',
    bgColor: '#fce7f3',
    textColor: '#be185d',
    emoji: '🙏',
    description: 'Thankfulness, praise, appreciation, thanksgiving'
  }
]

// ================================================================
// EMOTION VERSE DATA
// ================================================================

export const emotionVerses: EmotionVerse[] = [
  // ================================================================
  // PEACE (Blue)
  // ================================================================
  {
    reference: 'John 14:27',
    emotion: 'peace',
    intensity: 5,
    context: 'Jesus gives peace to His disciples before His crucifixion',
    book: 'John',
    chapter: 14,
    verse: 27
  },
  {
    reference: 'Philippians 4:6-7',
    emotion: 'peace',
    intensity: 5,
    context: 'The peace of God guards hearts and minds',
    book: 'Philippians',
    chapter: 4,
    verse: 6
  },
  {
    reference: 'Psalm 29:11',
    emotion: 'peace',
    intensity: 4,
    context: 'The Lord gives strength and peace to His people',
    book: 'Psalm',
    chapter: 29,
    verse: 11
  },
  {
    reference: 'Isaiah 26:3',
    emotion: 'peace',
    intensity: 4,
    context: 'Perfect peace for those who trust in God',
    book: 'Isaiah',
    chapter: 26,
    verse: 3
  },
  {
    reference: 'Psalm 4:8',
    emotion: 'peace',
    intensity: 3,
    context: 'Peaceful sleep knowing God protects',
    book: 'Psalm',
    chapter: 4,
    verse: 8
  },

  // ================================================================
  // ANGER (Red)
  // ================================================================
  {
    reference: 'Matthew 21:12-13',
    emotion: 'anger',
    intensity: 5,
    context: 'Jesus cleanses the temple with righteous anger',
    book: 'Matthew',
    chapter: 21,
    verse: 12
  },
  {
    reference: 'John 2:15',
    emotion: 'anger',
    intensity: 5,
    context: 'Jesus makes a whip and drives out the money changers',
    book: 'John',
    chapter: 2,
    verse: 15
  },
  {
    reference: 'Exodus 32:19',
    emotion: 'anger',
    intensity: 4,
    context: 'Moses breaks the tablets in anger at Israel\'s idolatry',
    book: 'Exodus',
    chapter: 32,
    verse: 19
  },
  {
    reference: 'Psalm 7:11',
    emotion: 'anger',
    intensity: 4,
    context: 'God is angry with the wicked every day',
    book: 'Psalm',
    chapter: 7,
    verse: 11
  },
  {
    reference: 'Ephesians 4:26',
    emotion: 'anger',
    intensity: 3,
    context: 'Be angry but do not sin',
    book: 'Ephesians',
    chapter: 4,
    verse: 26
  },

  // ================================================================
  // JOY (Gold)
  // ================================================================
  {
    reference: 'Philippians 4:4',
    emotion: 'joy',
    intensity: 5,
    context: 'Rejoice in the Lord always',
    book: 'Philippians',
    chapter: 4,
    verse: 4
  },
  {
    reference: 'Psalm 30:5',
    emotion: 'joy',
    intensity: 5,
    context: 'Joy comes in the morning after weeping',
    book: 'Psalm',
    chapter: 30,
    verse: 5
  },
  {
    reference: 'John 16:22',
    emotion: 'joy',
    intensity: 4,
    context: 'No one can take away your joy',
    book: 'John',
    chapter: 16,
    verse: 22
  },
  {
    reference: 'Psalm 16:11',
    emotion: 'joy',
    intensity: 5,
    context: 'In God\'s presence is fullness of joy',
    book: 'Psalm',
    chapter: 16,
    verse: 11
  },
  {
    reference: 'Nehemiah 8:10',
    emotion: 'joy',
    intensity: 4,
    context: 'The joy of the Lord is your strength',
    book: 'Nehemiah',
    chapter: 8,
    verse: 10
  },

  // ================================================================
  // SORROW (Purple)
  // ================================================================
  {
    reference: 'John 11:35',
    emotion: 'sorrow',
    intensity: 5,
    context: 'Jesus weeps at the tomb of Lazarus',
    book: 'John',
    chapter: 11,
    verse: 35
  },
  {
    reference: 'Lamentations 1:1',
    emotion: 'sorrow',
    intensity: 5,
    context: 'Jerusalem weeps in desolation',
    book: 'Lamentations',
    chapter: 1,
    verse: 1
  },
  {
    reference: 'Psalm 34:18',
    emotion: 'sorrow',
    intensity: 4,
    context: 'The Lord is near to the brokenhearted',
    book: 'Psalm',
    chapter: 34,
    verse: 18
  },
  {
    reference: 'Matthew 26:38',
    emotion: 'sorrow',
    intensity: 5,
    context: 'Jesus is sorrowful unto death in Gethsemane',
    book: 'Matthew',
    chapter: 26,
    verse: 38
  },
  {
    reference: 'Psalm 51:17',
    emotion: 'sorrow',
    intensity: 3,
    context: 'A broken and contrite heart God will not despise',
    book: 'Psalm',
    chapter: 51,
    verse: 17
  },

  // ================================================================
  // FEAR (Gray)
  // ================================================================
  {
    reference: 'Psalm 56:3-4',
    emotion: 'fear',
    intensity: 4,
    context: 'When I am afraid, I put my trust in God',
    book: 'Psalm',
    chapter: 56,
    verse: 3
  },
  {
    reference: 'Isaiah 41:10',
    emotion: 'fear',
    intensity: 4,
    context: 'Fear not, for I am with you',
    book: 'Isaiah',
    chapter: 41,
    verse: 10
  },
  {
    reference: 'Luke 1:30',
    emotion: 'fear',
    intensity: 3,
    context: 'Fear not, Mary, you have found favor with God',
    book: 'Luke',
    chapter: 1,
    verse: 30
  },
  {
    reference: 'Matthew 14:27',
    emotion: 'fear',
    intensity: 4,
    context: 'Jesus tells the disciples to not be afraid walking on water',
    book: 'Matthew',
    chapter: 14,
    verse: 27
  },
  {
    reference: '2 Timothy 1:7',
    emotion: 'fear',
    intensity: 3,
    context: 'God has not given us a spirit of fear',
    book: '2 Timothy',
    chapter: 1,
    verse: 7
  },

  // ================================================================
  // LOVE (Pink)
  // ================================================================
  {
    reference: 'John 3:16',
    emotion: 'love',
    intensity: 5,
    context: 'God so loved the world that He gave His only Son',
    book: 'John',
    chapter: 3,
    verse: 16
  },
  {
    reference: '1 Corinthians 13:4-7',
    emotion: 'love',
    intensity: 5,
    context: 'Love is patient, kind, and does not envy',
    book: '1 Corinthians',
    chapter: 13,
    verse: 4
  },
  {
    reference: '1 John 4:8',
    emotion: 'love',
    intensity: 5,
    context: 'God is love',
    book: '1 John',
    chapter: 4,
    verse: 8
  },
  {
    reference: 'Romans 5:8',
    emotion: 'love',
    intensity: 4,
    context: 'God shows His love in that while we were sinners Christ died for us',
    book: 'Romans',
    chapter: 5,
    verse: 8
  },
  {
    reference: '1 John 4:19',
    emotion: 'love',
    intensity: 4,
    context: 'We love because He first loved us',
    book: '1 John',
    chapter: 4,
    verse: 19
  },

  // ================================================================
  // HOPE (Green)
  // ================================================================
  {
    reference: 'Jeremiah 29:11',
    emotion: 'hope',
    intensity: 5,
    context: 'God has plans to give you hope and a future',
    book: 'Jeremiah',
    chapter: 29,
    verse: 11
  },
  {
    reference: 'Romans 15:13',
    emotion: 'hope',
    intensity: 5,
    context: 'The God of hope fills you with joy and peace',
    book: 'Romans',
    chapter: 15,
    verse: 13
  },
  {
    reference: 'Psalm 33:20-22',
    emotion: 'hope',
    intensity: 4,
    context: 'We wait for the Lord; He is our help and shield',
    book: 'Psalm',
    chapter: 33,
    verse: 20
  },
  {
    reference: 'Hebrews 11:1',
    emotion: 'hope',
    intensity: 5,
    context: 'Faith is the substance of things hoped for',
    book: 'Hebrews',
    chapter: 11,
    verse: 1
  },
  {
    reference: 'Psalm 62:5',
    emotion: 'hope',
    intensity: 3,
    context: 'My soul waits in silence for God; my hope comes from Him',
    book: 'Psalm',
    chapter: 62,
    verse: 5
  },

  // ================================================================
  // GRATITUDE (Light Pink)
  // ================================================================
  {
    reference: 'Psalm 100:4',
    emotion: 'gratitude',
    intensity: 4,
    context: 'Enter His gates with thanksgiving and courts with praise',
    book: 'Psalm',
    chapter: 100,
    verse: 4
  },
  {
    reference: '1 Thessalonians 5:18',
    emotion: 'gratitude',
    intensity: 4,
    context: 'In everything give thanks for this is God\'s will',
    book: '1 Thessalonians',
    chapter: 5,
    verse: 18
  },
  {
    reference: 'Psalm 118:1',
    emotion: 'gratitude',
    intensity: 4,
    context: 'Give thanks to the Lord for He is good',
    book: 'Psalm',
    chapter: 118,
    verse: 1
  },
  {
    reference: 'Colossians 3:15',
    emotion: 'gratitude',
    intensity: 3,
    context: 'Be thankful in your hearts',
    book: 'Colossians',
    chapter: 3,
    verse: 15
  },
  {
    reference: 'Psalm 107:1',
    emotion: 'gratitude',
    intensity: 4,
    context: 'Give thanks to the Lord, for He is good; His love endures forever',
    book: 'Psalm',
    chapter: 107,
    verse: 1
  }
]

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getEmotionColor = (emotion: Emotion): EmotionColor | undefined => {
  return emotionColors.find(ec => ec.emotion === emotion)
}

export const getVersesByEmotion = (emotion: Emotion): EmotionVerse[] => {
  return emotionVerses.filter(ev => ev.emotion === emotion)
}

export const getVersesByBook = (book: string): EmotionVerse[] => {
  return emotionVerses.filter(ev => ev.book === book)
}

export const getEmotionStats = () => {
  const stats: Record<Emotion, number> = {} as any
  emotionVerses.forEach(ev => {
    stats[ev.emotion] = (stats[ev.emotion] || 0) + 1
  })
  return stats
}

export const getVerseEmotion = (reference: string): Emotion | undefined => {
  const verse = emotionVerses.find(ev => ev.reference === reference)
  return verse?.emotion
}

export const getEmotionIntensity = (reference: string): number | undefined => {
  const verse = emotionVerses.find(ev => ev.reference === reference)
  return verse?.intensity
}

export const getEmotionVersesByIntensity = (intensity: 1 | 2 | 3 | 4 | 5): EmotionVerse[] => {
  return emotionVerses.filter(ev => ev.intensity === intensity)
}

export const getEmotionLabel = (emotion: Emotion): string => {
  const color = getEmotionColor(emotion)
  return color?.label || emotion
}

export const getEmotionEmoji = (emotion: Emotion): string => {
  const color = getEmotionColor(emotion)
  return color?.emoji || '📖'
}

export const getRandomEmotionVerse = (): EmotionVerse => {
  return emotionVerses[Math.floor(Math.random() * emotionVerses.length)]
}