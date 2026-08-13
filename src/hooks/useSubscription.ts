import { useState, useEffect, useCallback } from 'react'
import { useAuth } from './useAuth'
import type { Tier, Feature } from '../types/subscription'
import { TIER_FEATURES, AI_LIMITS } from '../types/subscription'

const ELDER_EMAILS: string[] = [
  'hyacinthmichael36@gmail.com',
  'inemhilda52@gmail.com',
]

const HYESPACE_VERIFY_URL =
  'https://bqyrkdxqwysrhvjfajix.supabase.co/functions/v1/verify-subscription'

export const useSubscription = () => {
  const { user } = useAuth()
  const [tier, setTier] = useState<Tier>('free')
  const [loading, setLoading] = useState(true)
  const [storeId, setStoreId] = useState<string | null>(() => {
    try {
      return typeof window !== 'undefined'
        ? localStorage.getItem('hyespace-store-id')
        : null
    } catch {
      return null
    }
  })

  const checkTier = useCallback(async () => {
    if (!user?.email) {
      setTier('free')
      setLoading(false)
      return
    }

    // Elder emails bypass
    if (ELDER_EMAILS.includes(user.email)) {
      setTier('elder')
      setLoading(false)
      return
    }

    // Must have storeId to verify via HyeSpace
    if (!storeId) {
      setTier('free')
      setLoading(false)
      return
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000)

      const res = await fetch(HYESPACE_VERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storeId: storeId.trim().toLowerCase(),
          appId: 'hyescriptures',
          email: user.email,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!res.ok) {
        console.error('HyeSpace verification failed:', res.status)
        setTier('free')
        setLoading(false)
        return
      }

      const data = await res.json()

      if (data.error) {
        console.error('HyeSpace error:', data.error)
        setTier('free')
        setLoading(false)
        return
      }

      if (data.subscribed && data.status === 'active') {
        // Map tier_id to Tier type (hyescriptures-elder → elder, anything else → free)
        const mappedTier: Tier =
          data.tierId === 'hyescriptures-elder' ? 'elder' : 'free'
        setTier(mappedTier)
      } else {
        setTier('free')
      }

      setLoading(false)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('HyeSpace verification timeout')
      } else {
        console.error('HyeSpace verification error:', error)
      }
      setTier('free')
      setLoading(false)
    }
  }, [user?.email, storeId])

  useEffect(() => {
    checkTier()
  }, [checkTier])

  const linkStoreId = useCallback((id: string) => {
    const cleanId = id.trim().toLowerCase()
    try {
      localStorage.setItem('hyespace-store-id', cleanId)
      setStoreId(cleanId)
    } catch (error) {
      console.error('Failed to save store ID:', error)
    }
  }, [])

  const unlinkStoreId = useCallback(() => {
    try {
      localStorage.removeItem('hyespace-store-id')
      setStoreId(null)
      setTier('free')
    } catch (error) {
      console.error('Failed to remove store ID:', error)
    }
  }, [])

  const features = TIER_FEATURES[tier]
  const aiLimit = AI_LIMITS[tier]
  const hasAccess = (feature: Feature): boolean => features.includes(feature)

  return {
    tier,
    features,
    aiLimit,
    hasAccess,
    loading,
    storeId,
    linkStoreId,
    unlinkStoreId,
    refetch: checkTier,
  }
}
