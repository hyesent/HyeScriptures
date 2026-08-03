import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useSubscription } from '../hooks/useSubscription'
import { Check, Crown } from 'lucide-react'

const API_URL = 'https://hyelearner-api.onrender.com'

export const UpgradePage: React.FC = () => {
  const { user } = useAuth()
  const { tier } = useSubscription()
  const [loading, setLoading] = useState(false)

  const handleUpgrade = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/subscriptions/hyescriptures/init`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: 'elder',
          email: user?.email,
          callback_url: window.location.origin + '/upgrade-success',
        }),
      })
      const data = await res.json()
      if (data.authorizationUrl) window.location.href = data.authorizationUrl
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 420, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 4, fontSize: 22, fontWeight: 700 }}>Upgrade to Elder</h2>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: 24, fontSize: 14 }}>
        {tier === 'elder' ? 'You are already an Elder.' : 'Unlock the full Hyescriptures experience'}
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
          onClick={handleUpgrade}
          disabled={loading || tier === 'elder'}
          style={{
            width: '100%', padding: 14, borderRadius: 14, border: 'none',
            background: tier === 'elder' ? '#e8e4dd' : '#1a1a2e',
            color: tier === 'elder' ? '#888' : 'white',
            fontWeight: 600, fontSize: 15,
            cursor: tier === 'elder' ? 'default' : 'pointer',
          }}
        >
          {tier === 'elder' ? 'Current Plan' : loading ? 'Loading...' : 'Upgrade to Elder'}
        </button>
      </div>
    </div>
  )
}
