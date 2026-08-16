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
      1: ['Matthew 1-2'], 2: ['Matthew 3-4'], 3: ['Matthew 5-7'], 4: ['Matthew 8-9'],
      5: ['Matthew 10-11'], 6: ['Matthew 12-13'], 7: ['Matthew 14-15'], 8: ['Matthew 16-17'],
      9: ['Matthew 18-19'], 10: ['Matthew 20-21'], 11: ['Matthew 22-23'], 12: ['Matthew 24-25'],
      13: ['Matthew 26'], 14: ['Matthew 27-28'], 15: ['Mark 1-2'], 16: ['Mark 3-4'],
      17: ['Mark 5-6'], 18: ['Mark 7-8'], 19: ['Mark 9-10'], 20: ['Mark 11-12'],
      21: ['Mark 13-14'], 22: ['Mark 15-16'], 23: ['Luke 1-2'], 24: ['Luke 3-4'],
      25: ['Luke 5-6'], 26: ['Luke 7-8'], 27: ['Luke 9-10'], 28: ['Luke 11-12'],
      29: ['Luke 13-14'], 30: ['Luke 15-16']
    }
  },
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
    chapters: {}
  },
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
  {
    id: 'israel-history',
    name: 'History of Israel',
    description: "Journey through Israel's story in 45 days",
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

// ========== GENERATE PROVERBS CHAPTERS ==========
for (let i = 1; i <= 31; i++) {
  readingPlans.find(p => p.id === 'proverbs-wisdom')!.chapters[i] = [`Proverbs ${i}`]
}

// ========== ALL BIBLE BOOKS FOR CHAPTER GENERATION ==========
const ALL_BIBLE_BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
  'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms',
  'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah',
  'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
  'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah',
  'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
  'Haggai', 'Zechariah', 'Malachi',
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

// ========== CHAPTER COUNT MAP ==========
const CHAPTER_COUNT: Record<string, number> = {
  'Genesis': 50, 'Exodus': 40, 'Leviticus': 27, 'Numbers': 36,
  'Deuteronomy': 34, 'Joshua': 24, 'Judges': 21, 'Ruth': 4,
  '1 Samuel': 31, '2 Samuel': 24, '1 Kings': 22, '2 Kings': 25,
  '1 Chronicles': 29, '2 Chronicles': 36, 'Ezra': 10, 'Nehemiah': 13,
  'Esther': 10, 'Job': 42, 'Psalms': 150, 'Proverbs': 31,
  'Ecclesiastes': 12, 'Song of Solomon': 8, 'Isaiah': 66, 'Jeremiah': 52,
  'Lamentations': 5, 'Ezekiel': 48, 'Daniel': 12, 'Hosea': 14,
  'Joel': 3, 'Amos': 9, 'Obadiah': 1, 'Jonah': 4, 'Micah': 7,
  'Nahum': 3, 'Habakkuk': 3, 'Zephaniah': 3, 'Haggai': 2,
  'Zechariah': 14, 'Malachi': 4, 'Matthew': 28, 'Mark': 16,
  'Luke': 24, 'John': 21, 'Acts': 28, 'Romans': 16,
  '1 Corinthians': 16, '2 Corinthians': 13, 'Galatians': 6, 'Ephesians': 6,
  'Philippians': 4, 'Colossians': 4, '1 Thessalonians': 5, '2 Thessalonians': 3,
  '1 Timothy': 6, '2 Timothy': 4, 'Titus': 3, 'Philemon': 1,
  'Hebrews': 13, 'James': 5, '1 Peter': 5, '2 Peter': 3,
  '1 John': 5, '2 John': 1, '3 John': 1, 'Jude': 1, 'Revelation': 22
}

// ========== GENERATE FULL CHAPTER LIST ==========
const generateFullChapterList = (bookList: string[]): string[] => {
  const chapters: string[] = []
  bookList.forEach(book => {
    const count = CHAPTER_COUNT[book] || 1
    for (let c = 1; c <= count; c++) {
      chapters.push(`${book} ${c}`)
    }
  })
  return chapters
}

// Pre-generate full chapter lists
const ALL_CHAPTERS = generateFullChapterList(ALL_BIBLE_BOOKS)
const NT_CHAPTERS = generateFullChapterList(NT_BOOKS)
const OT_CHAPTERS = generateFullChapterList(OT_BOOKS)
const PROPHETS_CHAPTERS = generateFullChapterList(PROPHETS_BOOKS)
const EPISTLES_CHAPTERS = generateFullChapterList(EPISTLES_BOOKS)
const HISTORY_CHAPTERS = generateFullChapterList(HISTORY_BOOKS)

// ========== GENERATE PLAN CHAPTERS ==========
const generatePlanChapters = (chapterList: string[], chaptersPerDay: number): { [day: number]: string[] } => {
  const result: { [day: number]: string[] } = {}
  const totalDays = Math.ceil(chapterList.length / chaptersPerDay)
  for (let day = 1; day <= totalDays; day++) {
    const start = (day - 1) * chaptersPerDay
    const end = Math.min(start + chaptersPerDay, chapterList.length)
    result[day] = chapterList.slice(start, end)
  }
  return result
}

// Generate chapters for plans that don't have them
readingPlans.forEach(plan => {
  if (Object.keys(plan.chapters).length === 0) {
    switch (plan.id) {
      case 'through-the-bible':
        plan.chapters = generatePlanChapters(ALL_CHAPTERS, plan.chaptersPerDay)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = ALL_CHAPTERS.length
        break
      case 'yearly-pilgrimage':
        plan.chapters = generatePlanChapters(ALL_CHAPTERS, plan.chaptersPerDay)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = ALL_CHAPTERS.length
        break
      case 'psalms-journey':
        plan.chapters = generatePlanChapters(generateFullChapterList(['Psalms']), plan.chaptersPerDay)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = 150
        break
      case 'nt-journey':
        plan.chapters = generatePlanChapters(NT_CHAPTERS, plan.chaptersPerDay)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = NT_CHAPTERS.length
        break
      case 'ot-journey':
        plan.chapters = generatePlanChapters(OT_CHAPTERS, plan.chaptersPerDay)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = OT_CHAPTERS.length
        break
      case 'prophets-journey':
        plan.chapters = generatePlanChapters(PROPHETS_CHAPTERS, plan.chaptersPerDay)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = PROPHETS_CHAPTERS.length
        break
      case 'epistles-journey':
        plan.chapters = generatePlanChapters(EPISTLES_CHAPTERS, plan.chaptersPerDay)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = EPISTLES_CHAPTERS.length
        break
      case 'israel-history':
        plan.chapters = generatePlanChapters(HISTORY_CHAPTERS, plan.chaptersPerDay)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = HISTORY_CHAPTERS.length
        break
      case 'easter-journey':
        plan.chapters = generatePlanChapters(NT_CHAPTERS.slice(0, 40), 1)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = 40
        break
      case 'advent-journey':
        plan.chapters = generatePlanChapters(generateFullChapterList(['Isaiah', 'Matthew', 'Luke']).slice(0, 25), 1)
        plan.totalDays = Object.keys(plan.chapters).length
        plan.totalChapters = 25
        break
    }
  }
})

// ========== FUNCTIONS ==========
export const getPlanChapters = (planId: string, day: number): string[] => {
  const plan = readingPlans.find(p => p.id === planId)
  if (!plan) return []
  return plan.chapters[day] || []
}

export const getPlanProgress = (planId: string): PlanProgress | null => {
  try {
    const data = localStorage.getItem(`hyescriptures_plan_${planId}`)
    return data ? JSON.parse(data) : null
  } catch { return null }
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
  if (!progress) progress = initializePlan(planId)

  const index = progress.completedDays.indexOf(day)
  if (index > -1) {
    progress.completedDays.splice(index, 1)
  } else {
    progress.completedDays.push(day)
    progress.completedDays.sort((a, b) => a - b)
  }

  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

  if (progress.lastReadDate !== today) {
    if (progress.lastReadDate === yesterday) {
      progress.streak += 1
    } else {
      progress.streak = 1
    }
    progress.lastReadDate = today
  }

  savePlanProgress(planId, progress)
  return progress
}

// Get all active plans (plans that have been started)
export const getActivePlans = (): { plan: ReadingPlan; progress: PlanProgress; percentage: number; currentDay: number }[] => {
  const active: { plan: ReadingPlan; progress: PlanProgress; percentage: number; currentDay: number }[] = []

  readingPlans.forEach(plan => {
    const progress = getPlanProgress(plan.id)
    if (progress && progress.startDate) {
      const percentage = getProgressPercentage(plan.id)
      const currentDay = (progress.completedDays[progress.completedDays.length - 1] || 0) + 1
      active.push({ plan, progress, percentage, currentDay })
    }
  })

  return active.sort((a, b) => b.percentage - a.percentage)
}

// Check if all chapters for a plan day are read
export const isPlanDayComplete = (planId: string, day: number, completedChapters: string[]): boolean => {
  const chapters = getPlanChapters(planId, day)
  if (chapters.length === 0) return false
  return chapters.every(ch => completedChapters.includes(ch))
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
