export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  requirement: number // days
  color: string
  category: 'streak' | 'verses' | 'plans' | 'achievement'
}

export const badges: Badge[] = [
  // ================================================================
  // STREAK BADGES
  // ================================================================
  {
    id: 'streak-3',
    name: 'Fire Starter',
    description: 'Read the Bible for 3 days in a row',
    icon: '🔥',
    requirement: 3,
    color: '#f97316',
    category: 'streak'
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Read the Bible for 7 days in a row',
    icon: '⚔️',
    requirement: 7,
    color: '#ef4444',
    category: 'streak'
  },
  {
    id: 'streak-14',
    name: 'Fortress of Faith',
    description: 'Read the Bible for 14 days in a row',
    icon: '🏰',
    requirement: 14,
    color: '#8b5cf6',
    category: 'streak'
  },
  {
    id: 'streak-30',
    name: 'Month of Might',
    description: 'Read the Bible for 30 days in a row',
    icon: '💪',
    requirement: 30,
    color: '#22c55e',
    category: 'streak'
  },
  {
    id: 'streak-60',
    name: 'Two Months Strong',
    description: 'Read the Bible for 60 days in a row',
    icon: '🏅',
    requirement: 60,
    color: '#3b82f6',
    category: 'streak'
  },
  {
    id: 'streak-90',
    name: 'Quarter Champion',
    description: 'Read the Bible for 90 days in a row',
    icon: '👑',
    requirement: 90,
    color: '#f59e0b',
    category: 'streak'
  },
  {
    id: 'streak-180',
    name: 'Half Year Hero',
    description: 'Read the Bible for 180 days in a row',
    icon: '⭐',
    requirement: 180,
    color: '#c9a84c',
    category: 'streak'
  },
  {
    id: 'streak-365',
    name: 'Year of the Word',
    description: 'Read the Bible for 365 days in a row',
    icon: '🏆',
    requirement: 365,
    color: '#c9a84c',
    category: 'streak'
  },

  // ================================================================
  // VERSE BADGES
  // ================================================================
  {
    id: 'verses-10',
    name: 'Verse Explorer',
    description: 'Read 10 verses',
    icon: '📖',
    requirement: 10,
    color: '#6b7280',
    category: 'verses'
  },
  {
    id: 'verses-100',
    name: 'Verse Seeker',
    description: 'Read 100 verses',
    icon: '🔍',
    requirement: 100,
    color: '#3b82f6',
    category: 'verses'
  },
  {
    id: 'verses-500',
    name: 'Verse Hunter',
    description: 'Read 500 verses',
    icon: '🎯',
    requirement: 500,
    color: '#8b5cf6',
    category: 'verses'
  },
  {
    id: 'verses-1000',
    name: 'Verse Master',
    description: 'Read 1,000 verses',
    icon: '🏅',
    requirement: 1000,
    color: '#f59e0b',
    category: 'verses'
  },
  {
    id: 'verses-5000',
    name: 'Bible Scholar',
    description: 'Read 5,000 verses',
    icon: '📜',
    requirement: 5000,
    color: '#c9a84c',
    category: 'verses'
  },

  // ================================================================
  // READING PLAN BADGES
  // ================================================================
  {
    id: 'plan-30',
    name: '30 Day Finisher',
    description: 'Complete the 30-day reading plan',
    icon: '⚡',
    requirement: 30,
    color: '#f59e0b',
    category: 'plans'
  },
  {
    id: 'plan-90',
    name: '90 Day Conqueror',
    description: 'Complete the 90-day reading plan',
    icon: '⚔️',
    requirement: 90,
    color: '#ef4444',
    category: 'plans'
  },
  {
    id: 'plan-365',
    name: 'Year Long Victor',
    description: 'Complete the 1-year reading plan',
    icon: '👑',
    requirement: 365,
    color: '#c9a84c',
    category: 'plans'
  },

  // ================================================================
  // ACHIEVEMENT BADGES
  // ================================================================
  {
    id: 'first-read',
    name: 'First Steps',
    description: 'Read your first chapter',
    icon: '👣',
    requirement: 1,
    color: '#6b7280',
    category: 'achievement'
  },
  {
    id: 'first-book',
    name: 'Book Explorer',
    description: 'Complete your first book of the Bible',
    icon: '📚',
    requirement: 1,
    color: '#3b82f6',
    category: 'achievement'
  },
  {
    id: 'all-books',
    name: 'Bible Explorer',
    description: 'Read at least one chapter from every book',
    icon: '🗺️',
    requirement: 66,
    color: '#8b5cf6',
    category: 'achievement'
  }
]

export const getBadgeById = (id: string): Badge | undefined => {
  return badges.find(b => b.id === id)
}

export const getBadgesByCategory = (category: Badge['category']): Badge[] => {
  return badges.filter(b => b.category === category)
}

export const getEarnedBadges = (userStreak: number, versesRead: number, completedPlans: string[] = []): Badge[] => {
  const earned: Badge[] = []
  
  // Streak badges
  badges.filter(b => b.category === 'streak').forEach(badge => {
    if (userStreak >= badge.requirement) {
      earned.push(badge)
    }
  })
  
  // Verse badges
  badges.filter(b => b.category === 'verses').forEach(badge => {
    if (versesRead >= badge.requirement) {
      earned.push(badge)
    }
  })
  
  // Plan badges
  if (completedPlans.includes('30-days')) {
    const badge = getBadgeById('plan-30')
    if (badge) earned.push(badge)
  }
  if (completedPlans.includes('90-days')) {
    const badge = getBadgeById('plan-90')
    if (badge) earned.push(badge)
  }
  if (completedPlans.includes('1-year')) {
    const badge = getBadgeById('plan-365')
    if (badge) earned.push(badge)
  }
  
  // Achievement badges (simplified)
  if (versesRead >= 20) {
    const badge = getBadgeById('first-read')
    if (badge) earned.push(badge)
  }
  
  return earned
}