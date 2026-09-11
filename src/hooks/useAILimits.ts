// src/hooks/useAILimits.ts
import { useState, useEffect, useCallback } from 'react'
import { useSubscription } from './useSubscription'
import { useAuth } from './useAuth'

const USAGE_KEY = 'hyescriptures_ai_usage'

export type AIFeature = 'explain' | 'shepherd' | 'sermon' | 'scripture'

interface AIUsage {
  date: string
  counts: Record<AIFeature, number>
}

const getToday = () => new Date().toISOString().split('T')[0]

// Per-feature limits
const FEATURE_LIMITS: Record<AIFeature, { free: number; elder: number }> = {
  explain: { free: 2, elder: 7 },
  shepherd: { free: 0, elder: 7 },
  sermon: { free: 0, elder: 7 },
  scripture: { free: 1, elder: 3 },
}

const emptyCounts = (): Record<AIFeature, number> => ({
  explain: 0,
  shepherd: 0,
  sermon: 0,
  scripture: 0,
})

const getUsage = (): AIUsage => {
  try {
    const data = localStorage.getItem(USAGE_KEY)
    if (!data) return { date: getToday(), counts: emptyCounts() }
    const usage = JSON.parse(data) as AIUsage
    if (usage.date !== getToday()) return { date: getToday(), counts: emptyCounts() }
    // Ensure all features exist
    return { date: usage.date, counts: { ...emptyCounts(), ...usage.counts } }
  } catch {
    return { date: getToday(), counts: emptyCounts() }
  }
}

const saveUsage = (usage: AIUsage) => {
  localStorage.setItem(USAGE_KEY, JSON.stringify(usage))
}

export const useAILimits = (feature?: AIFeature) => {
  const { tier } = useSubscription()
  const { user } = useAuth()
  const [usage, setUsage] = useState<AIUsage>(getUsage())

  useEffect(() => {
    setUsage(getUsage())
  }, [user])

  const getFeatureLimit = useCallback((f: AIFeature): number => {
    const limits = FEATURE_LIMITS[f]
    return tier === 'elder' ? limits.elder : limits.free
  }, [tier])

  const checkAndIncrement = useCallback((f?: AIFeature): { allowed: boolean; message?: string } => {
    const targetFeature = f || feature
    if (!targetFeature) {
      return { allowed: false, message: 'No AI feature specified' }
    }

    const limit = getFeatureLimit(targetFeature)
    const current = getUsage()
    const currentCount = current.counts[targetFeature] || 0

    if (limit === 0) {
      return {
        allowed: false,
        message: tier === 'free'
          ? 'This feature is for Elder members. Upgrade to unlock.'
          : 'Feature unavailable.',
      }
    }

    if (currentCount >= limit) {
      const featureNames: Record<AIFeature, string> = {
        explain: 'AI explanations',
        shepherd: 'Shepherd messages',
        sermon: 'sermon generations',
        scripture: 'scripture moments',
      }
      return {
        allowed: false,
        message: tier === 'free'
          ? `You've used your ${limit} free ${featureNames[targetFeature]} today. Upgrade to Elder for more.`
          : `You've used all ${limit} ${featureNames[targetFeature]} today. Come back tomorrow.`,
      }
    }

    const updated: AIUsage = {
      date: current.date,
      counts: {
        ...current.counts,
        [targetFeature]: currentCount + 1,
      },
    }
    saveUsage(updated)
    setUsage(updated)
    return { allowed: true }
  }, [feature, getFeatureLimit, tier])

  // Get remaining for a feature
  const getRemaining = useCallback((f?: AIFeature): number => {
    const targetFeature = f || feature
    if (!targetFeature) return 0
    const limit = getFeatureLimit(targetFeature)
    const used = usage.counts[targetFeature] || 0
    return Math.max(0, limit - used)
  }, [feature, getFeatureLimit, usage])

  const getUsed = useCallback((f?: AIFeature): number => {
    const targetFeature = f || feature
    if (!targetFeature) return 0
    return usage.counts[targetFeature] || 0
  }, [feature, usage])

  return {
    // Legacy single-feature accessors (uses `feature` param)
    remaining: feature ? getRemaining() : 0,
    used: feature ? getUsed() : 0,
    limit: feature ? getFeatureLimit(feature) : 0,
    isLimited: feature ? getRemaining() === 0 : false,
    tier,
    // New multi-feature API
    checkAndIncrement,
    getRemaining,
    getUsed,
    getFeatureLimit,
  }
}
