// src/lib/reading-plans/index.ts

// ========== TYPES ==========
export interface ReadingPlan {
  id: string
  name: string
  description: string
  icon: string
  totalDays: number
  chaptersPerDay: number
  totalChapters: number
  focus: string
  atmosphere: 'sunrise' | 'sapphire' | 'emerald' | 'royal' | 'amber' | 'golden' | 'crimson' | 'fiery' | 'starry' | 'desert' | 'mountain' | 'still'
  color: string
  gradient: string
  category: 'new-testament' | 'old-testament' | 'whole-bible' | 'wisdom' | 'prophets' | 'history' | 'gospels' | 'epistles' | 'special'
  chapters: { [day: number]: string[] }
  dailyVerse?: string[]
}

export interface PlanProgress {
  planId: string
  completedDays: number[]
  startDate: string
  streak: number
  lastReadDate: string | null
}

// ========== ALL 12 JOURNEYS ==========

export const readingPlans: ReadingPlan[] = [
  // 1. GOSPEL JOURNEY
  {
    id: 'gospel-journey',
    name: 'The Gospel Journey',
    description: 'Walk through the life of Christ in 30 days',
    icon: '☀',
    totalDays: 30,
    chaptersPerDay: 2,
    totalChapters: 60,
    focus: 'Life & Ministry of Jesus',
    atmosphere: 'sunrise',
    color: '#D4AF37',
    gradient: 'linear-gradient(135deg, #D4AF37, #b8941a, #8a6f0a)',
    category: 'gospels',
    chapters: {
      1: ['Matthew 1-2'],
      2: ['Matthew 3-4'],
      3: ['Matthew 5-7'],
      4: ['Matthew 8-9'],
      5: ['Matthew 10-11'],
      6: ['Matthew 12-13'],
      7: ['Matthew 14-15'],
      8: ['Matthew 16-17'],
      9: ['Matthew 18-19'],
      10: ['Matthew 20-21'],
      11: ['Matthew 22-23'],
      12: ['Matthew 24-25'],
      13: ['Matthew 26'],
      14: ['Matthew 27-28'],
      15: ['Mark 1-2'],
      16: ['Mark 3-4'],
      17: ['Mark 5-6'],
      18: ['Mark 7-8'],
      19: ['Mark 9-10'],
      20: ['Mark 11-12'],
      21: ['Mark 13-14'],
      22: ['Mark 15-16'],
      23: ['Luke 1-2'],
      24: ['Luke 3-4'],
      25: ['Luke 5-6'],
      26: ['Luke 7-8'],
      27: ['Luke 9-10'],
      28: ['Luke 11-12'],
      29: ['Luke 13-14'],
      30: ['Luke 15-16']
    }
  },

  // 2. THROUGH THE BIBLE
  {
    id: 'through-the-bible',
    name: 'Through the Bible',
    description: 'Journey through the entire Bible in 90 days',
    icon: '🧭',
    totalDays: 90,
    chaptersPerDay: 4,
    totalChapters: 360,
    focus: 'The Whole Story',
    atmosphere: 'sapphire',
    color: '#4a7a8a',
    gradient: 'linear-gradient(135deg, #4a7a8a, #2a4a5a, #1a2a3a)',
    category: 'whole-bible',
    chapters: {}
  },

  // 3. THE YEARLY PILGRIMAGE
  {
    id: 'yearly-pilgrimage',
    name: 'The Yearly Pilgrimage',
    description: 'Walk through the Bible in one year',
    icon: '⭐',
    totalDays: 365,
    chaptersPerDay: 3,
    totalChapters: 1095,
    focus: 'Daily Bread',
    atmosphere: 'emerald',
    color: '#22c55e',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a, #0a7a2a)',
    category: 'whole-bible',
    chapters: {}
  },

  // 4. PSALMS JOURNEY
  {
    id: 'psalms-journey',
    name: 'Psalms Journey',
    description: 'Pray through the Psalms in 60 days',
    icon: '📜',
    totalDays: 60,
    chaptersPerDay: 3,
    totalChapters: 180,
    focus: 'Prayer & Worship',
    atmosphere: 'royal',
    color: '#8a5a9a',
    gradient: 'linear-gradient(135deg, #8a5a9a, #6a3a7a, #4a2a5a)',
    category: 'wisdom',
    chapters: {}
  },

  // 5. PROVERBS WISDOM
  {
    id: 'proverbs-wisdom',
    name: 'Proverbs Wisdom',
    description: 'Gain wisdom through Proverbs in 31 days',
    icon: '✨',
    totalDays: 31,
    chaptersPerDay: 1,
    totalChapters: 31,
    focus: 'Wisdom Literature',
    atmosphere: 'amber',
    color: '#D4A84A',
    gradient: 'linear-gradient(135deg, #D4A84A, #c8982a, #b8881a)',
    category: 'wisdom',
    chapters: {
      1: ['Proverbs 1'],
      2: ['Proverbs 2'],
      3: ['Proverbs 3'],
      4: ['Proverbs 4'],
      5: ['Proverbs 5'],
      6: ['Proverbs 6'],
      7: ['Proverbs 7'],
      8: ['Proverbs 8'],
      9: ['Proverbs 9'],
      10: ['Proverbs 10'],
      11: ['Proverbs 11'],
      12: ['Proverbs 12'],
      13: ['Proverbs 13'],
      14: ['Proverbs 14'],
      15: ['Proverbs 15'],
      16: ['Proverbs 16'],
      17: ['Proverbs 17'],
      18: ['Proverbs 18'],
      19: ['Proverbs 19'],
      20: ['Proverbs 20'],
      21: ['Proverbs 21'],
      22: ['Proverbs 22'],
      23: ['Proverbs 23'],
      24: ['Proverbs 24'],
      25: ['Proverbs 25'],
      26: ['Proverbs 26'],
      27: ['Proverbs 27'],
      28: ['Proverbs 28'],
      29: ['Proverbs 29'],
      30: ['Proverbs 30'],
      31: ['Proverbs 31']
    }
  },

  // 6. NEW TESTAMENT JOURNEY
  {
    id: 'nt-journey',
    name: 'New Testament Journey',
    description: 'Explore the New Testament in 60 days',
    icon: '✝',
    totalDays: 60,
    chaptersPerDay: 3,
    totalChapters: 180,
    focus: 'New Testament',
    atmosphere: 'golden',
    color: '#D4AF37',
    gradient: 'linear-gradient(135deg, #D4AF37, #c8982a, #b8881a)',
    category: 'new-testament',
    chapters: {}
  },

  // 7. OLD TESTAMENT JOURNEY
  {
    id: 'ot-journey',
    name: 'Old Testament Journey',
    description: 'Travel through the Old Testament in 60 days',
    icon: '🏛',
    totalDays: 60,
    chaptersPerDay: 4,
    totalChapters: 240,
    focus: 'Old Testament',
    atmosphere: 'desert',
    color: '#C8A84A',
    gradient: 'linear-gradient(135deg, #C8A84A, #a8882a, #88701a)',
    category: 'old-testament',
    chapters: {}
  },

  // 8. PROPHETS JOURNEY
  {
    id: 'prophets-journey',
    name: 'Prophets Journey',
    description: 'Hear the voice of the prophets in 45 days',
    icon: '🔥',
    totalDays: 45,
    chaptersPerDay: 3,
    totalChapters: 135,
    focus: 'Major & Minor Prophets',
    atmosphere: 'fiery',
    color: '#B86161',
    gradient: 'linear-gradient(135deg, #B86161, #8a4a4a, #6a2a2a)',
    category: 'prophets',
    chapters: {}
  },

  // 9. EPISTLES JOURNEY
  {
    id: 'epistles-journey',
    name: 'Epistles Journey',
    description: 'Walk through the letters of the apostles in 40 days',
    icon: '📨',
    totalDays: 40,
    chaptersPerDay: 2,
    totalChapters: 80,
    focus: 'Pauline & General Epistles',
    atmosphere: 'still',
    color: '#6a9aaa',
    gradient: 'linear-gradient(135deg, #6a9aaa, #4a7a8a, #2a5a6a)',
    category: 'epistles',
    chapters: {}
  },

  // 10. HISTORY OF ISRAEL
  {
    id: 'israel-history',
    name: 'History of Israel',
    description: 'Journey through Israel\'s story in 45 days',
    icon: '🗺',
    totalDays: 45,
    chaptersPerDay: 3,
    totalChapters: 135,
    focus: 'Joshua → Esther',
    atmosphere: 'desert',
    color: '#C8A84A',
    gradient: 'linear-gradient(135deg, #C8A84A, #a8882a, #88701a)',
    category: 'history',
    chapters: {}
  },

  // 11. EASTER JOURNEY
  {
    id: 'easter-journey',
    name: 'Easter Journey',
    description: 'Walk through the Passion of Christ in 40 days',
    icon: '🕊',
    totalDays: 40,
    chaptersPerDay: 1,
    totalChapters: 40,
    focus: 'Passion & Resurrection',
    atmosphere: 'crimson',
    color: '#B82222',
    gradient: 'linear-gradient(135deg, #B82222, #8a1a1a, #6a0a0a)',
    category: 'special',
    chapters: {}
  },

  // 12. ADVENT JOURNEY
  {
    id: 'advent-journey',
    name: 'Advent Journey',
    description: 'Prepare your heart for Christmas in 25 days',
    icon: '🌙',
    totalDays: 25,
    chaptersPerDay: 1,
    totalChapters: 25,
    focus: 'Christmas & Prophecy',
    atmosphere: 'starry',
    color: '#4a5a8a',
    gradient: 'linear-gradient(135deg, #4a5a8a, #2a3a6a, #1a2a4a)',
    category: 'special',
    chapters: {}
  }
]

// ========== ALL BIBLE BOOKS FOR CHAPTER GENERATION ==========

const ALL_BIBLE_BOOKS = [
  // Old Testament
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
  'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms',
  'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah',
  'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
  'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah',
  'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
  'Haggai', 'Zechariah', 'Malachi',
  // New Testament
  'Matthew', 'Mark', 'Luke', 'John', 'Acts',
  'Romans', '1 Corinthians', '2 Corinthians', 'Galatians',
  'Ephesians', 'Philippians', 'Colossians',
  '1 Thessalonians', '2 Thessalonians',
  '1 Timothy', '2 Timothy', 'Titus', 'Philemon',
  'Hebrews', 'James', '1 Peter', '2 Peter',
  '1 John', '2 John', '3 John', 'Jude', 'Revelation'
]

const NT_BOOKS = [
  'Matthew', 'Mark', 'Luke', 'John', 'Acts',
  'Romans', '1 Corinthians', '2 Corinthians', 'Galatians',
  'Ephesians', 'Philippians', 'Colossians',
  '1 Thessalonians', '2 Thessalonians',
  '1 Timothy', '2 Timothy', 'Titus', 'Philemon',
  'Hebrews', 'James', '1 Peter', '2 Peter',
  '1 John', '2 John', '3 John', 'Jude', 'Revelation'
]

const OT_BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
  'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms',
  'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah',
  'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
  'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah',
  'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
  'Haggai', 'Zechariah', 'Malachi'
]

const PROPHETS_BOOKS = [
  'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
  'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah',
  'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
  'Haggai', 'Zechariah', 'Malachi'
]

const EPISTLES_BOOKS = [
  'Romans', '1 Corinthians', '2 Corinthians', 'Galatians',
  'Ephesians', 'Philippians', 'Colossians',
  '1 Thessalonians', '2 Thessalonians',
  '1 Timothy', '2 Timothy', 'Titus', 'Philemon',
  'Hebrews', 'James', '1 Peter', '2 Peter',
  '1 John', '2 John', '3 John', 'Jude'
]

const HISTORY_BOOKS = [
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
  'Ezra', 'Nehemiah', 'Esther'
]

const GOSPEL_BOOKS = ['Matthew', 'Mark', 'Luke', 'John']

// ========== CHAPTER GENERATION ==========

const generateChapters = (
  planId: string,
  day: number,
  bookList: string[],
  chaptersPerDay: number
): string[] => {
  const plan = readingPlans.find(p => p.id === planId)
  if (!plan) return []

  // If the plan has predefined chapters for this day, use them
  if (plan.chapters && plan.chapters[day]) {
    return plan.chapters[day]
  }

  // Otherwise generate dynamically
  const startIndex = (day - 1) * chaptersPerDay
  const endIndex = Math.min(startIndex + chaptersPerDay, bookList.length)

  return bookList.slice(startIndex, endIndex)
}

export const getPlanChapters = (planId: string, day: number): string[] => {
  const plan = readingPlans.find(p => p.id === planId)
  if (!plan) return []

  // Map plan IDs to book lists
  switch (planId) {
    case 'gospel-journey':
      return generateChapters(planId, day, GOSPEL_BOOKS, plan.chaptersPerDay)
    case 'through-the-bible':
    case 'yearly-pilgrimage':
      return generateChapters(planId, day, ALL_BIBLE_BOOKS, plan.chaptersPerDay)
    case 'psalms-journey':
      return generateChapters(planId, day, ['Psalms'], plan.chaptersPerDay)
    case 'proverbs-wisdom':
      return generateChapters(planId, day, ['Proverbs'], plan.chaptersPerDay)
    case 'nt-journey':
      return generateChapters(planId, day, NT_BOOKS, plan.chaptersPerDay)
    case 'ot-journey':
      return generateChapters(planId, day, OT_BOOKS, plan.chaptersPerDay)
    case 'prophets-journey':
      return generateChapters(planId, day, PROPHETS_BOOKS, plan.chaptersPerDay)
    case 'epistles-journey':
      return generateChapters(planId, day, EPISTLES_BOOKS, plan.chaptersPerDay)
    case 'israel-history':
      return generateChapters(planId, day, HISTORY_BOOKS, plan.chaptersPerDay)
    case 'easter-journey':
      return generateChapters(planId, day, ['Matthew', 'Mark', 'Luke', 'John'], 1)
    case 'advent-journey':
      return generateChapters(planId, day, ['Isaiah', 'Matthew', 'Luke'], 1)
    default:
      return generateChapters(planId, day, ALL_BIBLE_BOOKS, plan.chaptersPerDay)
  }
}

// ========== STORAGE FUNCTIONS ==========

export const getPlanProgress = (planId: string): PlanProgress | null => {
  try {
    const data = localStorage.getItem(`hyescriptures_plan_${planId}`)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

export const savePlanProgress = (planId: string, progress: PlanProgress): void => {
  localStorage.setItem(`hyescriptures_plan_${planId}`, JSON.stringify(progress))
}

export const initializePlan = (planId: string): PlanProgress => {
  const existing = getPlanProgress(planId)
  if (existing) return existing

  const newProgress: PlanProgress = {
    planId,
    completedDays: [],
    startDate: new Date().toISOString().split('T')[0],
    streak: 0,
    lastReadDate: null
  }
  savePlanProgress(planId, newProgress)
  return newProgress
}

export const toggleDayComplete = (planId: string, day: number): PlanProgress => {
  let progress = getPlanProgress(planId)
  if (!progress) {
    progress = initializePlan(planId)
  }

  const index = progress.completedDays.indexOf(day)
  if (index > -1) {
    progress.completedDays.splice(index, 1)
  } else {
    progress.completedDays.push(day)
    progress.completedDays.sort((a, b) => a - b)
  }

  // Update streak
  const today = new Date().toISOString().split('T')[0]
  if (progress.lastReadDate === today) {
    // Already updated today
  } else if (progress.completedDays.length > 0) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split('T')[0]
    
    if (progress.lastReadDate === yesterdayStr) {
      progress.streak += 1
    } else if (progress.lastReadDate !== today) {
      progress.streak = 1
    }
    progress.lastReadDate = today
  }

  savePlanProgress(planId, progress)
  return progress
}

export const getCompletedCount = (planId: string): number => {
  const progress = getPlanProgress(planId)
  return progress ? progress.completedDays.length : 0
}

export const getStreak = (planId: string): number => {
  const progress = getPlanProgress(planId)
  return progress ? progress.streak : 0
}

export const getProgressPercentage = (planId: string): number => {
  const plan = readingPlans.find(p => p.id === planId)
  if (!plan) return 0
  const completed = getCompletedCount(planId)
  return Math.round((completed / plan.totalDays) * 100)
}

export const getTotalChapters = (planId: string): number => {
  const plan = readingPlans.find(p => p.id === planId)
  return plan ? plan.totalChapters : 0
}

export const getJourneyByAtmosphere = (atmosphere: string): ReadingPlan | undefined => {
  return readingPlans.find(p => p.atmosphere === atmosphere)
}

export const getJourneysByCategory = (category: string): ReadingPlan[] => {
  return readingPlans.filter(p => p.category === category)
}

export const getJourneyStats = (planId: string) => {
  const plan = readingPlans.find(p => p.id === planId)
  if (!plan) return null
  
  return {
    totalDays: plan.totalDays,
    completed: getCompletedCount(planId),
    percentage: getProgressPercentage(planId),
    streak: getStreak(planId),
    chaptersPerDay: plan.chaptersPerDay,
    totalChapters: plan.totalChapters
  }
}
