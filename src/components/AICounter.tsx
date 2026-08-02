// src/components/AICounter.tsx
import React from 'react'
import { useAILimits } from '../hooks/useAILimits'
import { Sparkles } from 'lucide-react'

export const AICounter: React.FC = () => {
  const { remaining, limit, tier } = useAILimits()

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