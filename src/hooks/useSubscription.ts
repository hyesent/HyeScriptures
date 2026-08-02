import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'
import { supabase } from '../lib/supabase'
import type { Tier, Feature } from '../types/subscription'
import { TIER_FEATURES, AI_LIMITS } from '../types/subscription'

const ELDER_EMAILS: string[] = [
  'hyacinthmichael36@gmail.com',
  'inemhilda52@gmail.com',
]

const PRO_EMAILS: string[] = [
  'pro.user@gmail.com',
]
export const useSubscription = () => {
  const { user } = useAuth()
  const [tier, setTier] = useState<Tier>('free')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) { setTier('free'); setLoading(false); return }
    checkTier()
  }, [user])

  const checkTier = async () => {
    const email = user?.email || ''

    if (ELDER_EMAILS.includes(email)) { setTier('elder'); setLoading(false); return }
    if (PRO_EMAILS.includes(email)) { setTier('pro'); setLoading(false); return }

    const { data } = await supabase.from('subscriptions')
      .select('tier, status, expires_at')
      .eq('user_id', user?.id)
      .eq('status', 'active')
      .maybeSingle()

    if (data && data.expires_at && new Date(data.expires_at) > new Date()) {
      setTier(data.tier as Tier)
    } else {
      setTier('free')
    }
    setLoading(false)
  }

  const features = TIER_FEATURES[tier]
  const aiLimit = AI_LIMITS[tier]
  const hasAccess = (feature: Feature): boolean => features.includes(feature)

  return { tier, features, aiLimit, hasAccess, loading, refetch: checkTier }
}