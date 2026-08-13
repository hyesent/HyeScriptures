import React from 'react'
import { useSubscription } from '../hooks/useSubscription'
import { Check, Crown, ExternalLink } from 'lucide-react'

export const UpgradePage: React.FC = () => {
  const { tier } = useSubscription()

  const handleUpgradeClick = () => {
    window.open('https://hyespace.vercel.app', '_blank')
  }

  return (
    <div style={{ padding: 24, maxWidth: 420, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 4, fontSize: 22, fontWeight: 700 }}>Upgrade to Elder</h2>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: 24, fontSize: 14 }}>
        {tier === 'elder' ? 'You are already an Elder. Manage your subscription on HyeSpace.' : 'Unlock the full HyeScriptures experience'}
      </p>

      <div style={{
        border: '2px solid #c9a84c', borderRadius: 20, padding: 32,
        textAlign: 'center', background: '#fdfcf9',
      }}>
        <Crown size={36} style={{ color: '#c9a84c', marginBottom: 12 }} />
        <h3 style={{ margin: '0 0 4px', fontSize: 18 }}>Elder</h3>
        <p style={{ fontSize: 36, fontWeight: 700, margin: '0 0 4px' }}>$4.99</p>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 20 }}>per year</p>

        <ul style={{ textAlign: 'left', fontSize: 14, listStyle: 'none', padding: 0, marginBottom: 24 }}>
          <li style={{ marginBottom: 10 }}><Check size={16} style={{ color: '#22c55e', marginRight: 8 }} />All AI features (7 calls/day)</li>
          <li style={{ marginBottom: 10 }}><Check size={16} style={{ color: '#22c55e', marginRight: 8 }} />AI Chat, Sermon Builder, Quiz Generator</li>
          <li style={{ marginBottom: 10 }}><Check size={16} style={{ color: '#22c55e', marginRight: 8 }} />Strong's Concordance (Greek/Hebrew)</li>
          <li style={{ marginBottom: 10 }}><Check size={16} style={{ color: '#22c55e', marginRight: 8 }} />Full Audio Bible</li>
          <li style={{ marginBottom: 10 }}><Check size={16} style={{ color: '#22c55e', marginRight: 8 }} />Custom App Icon</li>
          <li style={{ marginBottom: 10 }}><Check size={16} style={{ color: '#22c55e', marginRight: 8 }} />Elder Badge + Exclusive Perks</li>
          <li><Check size={16} style={{ color: '#22c55e', marginRight: 8 }} />No Ads</li>
        </ul>

        <button
          onClick={handleUpgradeClick}
          disabled={tier === 'elder'}
          style={{
            width: '100%', padding: 14, borderRadius: 14, border: 'none',
            background: tier === 'elder' ? '#e8e4dd' : '#1a1a2e',
            color: tier === 'elder' ? '#888' : 'white',
            fontWeight: 600, fontSize: 15,
            cursor: tier === 'elder' ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          {tier === 'elder' ? 'Current Plan' : <>
            Upgrade to Elder
            <ExternalLink size={16} />
          </>}
        </button>

        <p style={{ fontSize: 12, color: '#999', marginTop: 16, marginBottom: 0 }}>
          Managed through HyeSpace
        </p>
      </div>
    </div>
  )
}
