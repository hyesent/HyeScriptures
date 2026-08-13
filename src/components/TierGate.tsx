import React from 'react'
import { useSubscription } from '../hooks/useSubscription'
import type { Feature } from '../types/subscription'
import { Crown, ChevronRight, ExternalLink } from 'lucide-react'

interface TierGateProps {
  feature: Feature
  children: React.ReactNode
  fallback?: React.ReactNode
  onUpgrade?: () => void
}

export const TierGate: React.FC<TierGateProps> = ({ feature, children, fallback, onUpgrade }) => {
  const { hasAccess, loading } = useSubscription()

  if (loading) return null
  if (hasAccess(feature)) return <>{children}</>
  if (fallback) return <>{fallback}</>

  const handleUpgrade = () => {
    window.open('https://hyespace.vercel.app', '_blank')
  }

  return (
    <div
      onClick={handleUpgrade}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
        gap: 8,
        cursor: 'pointer',
        borderRadius: 16,
        border: '1px dashed var(--border-light)',
        background: 'var(--bg-card)',
        opacity: 0.7,
        transition: 'all 0.2s',
        minHeight: 120,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
    >
      <Crown size={24} style={{ color: '#c9a84c' }} />
      <span style={{ fontSize: 13, fontWeight: 600 }}>Unlock with Elder</span>
      <span style={{ fontSize: 11, color: '#999' }}>$4.99/year</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#c9a84c', fontWeight: 600 }}>
        Tap to upgrade <ExternalLink size={12} />
      </span>
    </div>
  )
}
