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

// Display-only hints — server is the source of truth
const FEATURE_LIMITS: Record<AIFeature, { free: number; elder: number }> = {
  explain: { free: 3, elder: 10 },
  shepherd: { free: 0, elder: 10 },
  sermon: { free: 0, elder: 4 },
  scripture: { free: 3, elder: 10 },
}

const emptyCounts = (): Record<AIFeature, number> => ({
  explain: 0, shepherd: 0, sermon: 0, scripture: 0,
})

const getUsage = (): AIUsage => {
  try {
    const data = localStorage.getItem(USAGE_KEY)
    if (!data) return { date: getToday(), counts: emptyCounts() }
    const usage = JSON.parse(data) as AIUsage
    if (usage.date !== getToday()) return { date: getToday(), counts: emptyCounts() }
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

  useEffect(() => { setUsage(getUsage()) }, [user])

  const getFeatureLimit = useCallback((f: AIFeature): number => {
    const limits = FEATURE_LIMITS[f]
    return tier === 'elder' ? limits.elder : limits.free
  }, [tier])

  // Fast local hint — does NOT block the server call
  const checkAndIncrement = useCallback((f?: AIFeature): { allowed: boolean; message?: string } => {
    const targetFeature = f || feature
    if (!targetFeature) return { allowed: false, message: 'No AI feature specified' }

    const limit = getFeatureLimit(targetFeature)
    if (limit === 0) {
      return {
        allowed: false,
        message: tier === 'free'
          ? 'This feature is for Elder members. Upgrade to unlock.'
          : 'Feature unavailable.',
      }
    }

    const current = getUsage()
    const currentCount = current.counts[targetFeature] || 0
    if (currentCount >= limit) {
      return {
        allowed: false,
        message: tier === 'free'
          ? `You've used your ${limit} free AI calls today. Upgrade for more.`
          : `You've used all ${limit} AI calls today. Come back tomorrow.`,
      }
    }

    // Optimistically increment local (will be overwritten by server sync)
    const updated: AIUsage = {
      date: current.date,
      counts: { ...current.counts, [targetFeature]: currentCount + 1 },
    }
    saveUsage(updated)
    setUsage(updated)
    return { allowed: true }
  }, [feature, getFeatureLimit, tier])

  // NEW: Called after every server response to mirror the real count
  const syncFromResponse = useCallback((f: AIFeature, envelope: { count: number }) => {
    const current = getUsage()
    const updated: AIUsage = {
      date: current.date,
      counts: { ...current.counts, [f]: envelope.count },
    }
    saveUsage(updated)
    setUsage(updated)
  }, [])

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
    remaining: feature ? getRemaining() : 0,
    used: feature ? getUsed() : 0,
    limit: feature ? getFeatureLimit(feature) : 0,
    isLimited: feature ? getRemaining() === 0 : false,
    tier,
    checkAndIncrement,
    syncFromResponse,   // ← NEW
    getRemaining,
    getUsed,
    getFeatureLimit,
  }
}
