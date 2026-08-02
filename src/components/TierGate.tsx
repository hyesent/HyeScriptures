import React from 'react'
import { useSubscription } from '../hooks/useSubscription'
import type { Feature } from '../types/subscription'
import { Lock, Sparkles, Crown, ChevronRight } from 'lucide-react'

interface TierGateProps {
  feature: Feature
  children: React.ReactNode
  fallback?: React.ReactNode
  onUpgrade?: () => void
}

export const TierGate: React.FC<TierGateProps> = ({ feature, children, fallback, onUpgrade }) => {
  const { hasAccess, tier, loading } = useSubscription()

  if (loading) return null
  if (hasAccess(feature)) return <>{children}</>
  if (fallback) return <>{fallback}</>

  const requiredTier = 
    ['sermon_builder', 'strongs', 'full_audio_bible', 'premium_themes', 'custom_logo', 'elder_badge', 'early_access', 'elder_community', 'vote_roadmap'].includes(feature)
      ? 'Elder'
      : 'Pro'

  const upgradeMessage = requiredTier === 'Elder'
    ? 'Unlock with Elder'
    : 'Upgrade to Pro'

  const Icon = requiredTier === 'Elder' ? Crown : Sparkles

  return (
    <div
      onClick={onUpgrade}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
        gap: 8,
        cursor: onUpgrade ? 'pointer' : 'default',
        borderRadius: 16,
        border: '1px dashed var(--border-light)',
        background: 'var(--bg-card)',
        opacity: 0.7,
        transition: 'all 0.2s',
        minHeight: 120,
      }}
      onMouseEnter={e => { if (onUpgrade) (e.currentTarget as HTMLElement).style.opacity = '1' }}
      onMouseLeave={e => { if (onUpgrade) (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
    >
      <Icon size={24} style={{ color: '#c9a84c' }} />
      <span style={{ fontSize: 13, fontWeight: 600 }}>{upgradeMessage}</span>
      <span style={{ fontSize: 11, color: '#999' }}>
        {requiredTier === 'Elder' ? '$19.99/year' : '$4.99/year'}
      </span>
      {onUpgrade && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#c9a84c', fontWeight: 600 }}>
          Tap to upgrade <ChevronRight size={12} />
        </span>
      )}
    </div>
  )
}