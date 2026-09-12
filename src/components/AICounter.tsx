// src/components/AICounter.tsx
import React from 'react'
import { useAILimits } from '../hooks/useAILimits'
import type { AIFeature } from '../hooks/useAILimits'
import { Sparkles } from 'lucide-react'

interface AICounterProps {
  feature?: AIFeature
}

export const AICounter: React.FC<AICounterProps> = ({ feature }) => {
  const { remaining, limit, tier } = useAILimits(feature)

  // Don't render if no feature is set (prevents broken 0/0 state)
  if (!feature) return null

  // Don't render if feature isn't available for this tier
  if (limit === 0) return null

  // Hide for Elders when they have plenty left
  if (tier === 'elder' && remaining > 5) return null

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      fontWeight: 600,
      color: remaining <= 1 ? '#ef4444' : '#888',
      background: remaining <= 1 ? '#fef2f2' : '#f5f5f5',
      padding: '3px 10px',
      borderRadius: 999,
      whiteSpace: 'nowrap',
    }}>
      <Sparkles size={11} />
      {remaining}/{limit} AI
    </span>
  )
}
