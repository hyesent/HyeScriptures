import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useSubscription } from '../hooks/useSubscription'
import { Check, Crown, Sparkles } from 'lucide-react'

const API_URL = 'https://hyelearner-api.onrender.com'

export const UpgradePage: React.FC = () => {
  const { user } = useAuth()
  const { tier } = useSubscription()
  const [loading, setLoading] = useState<string | null>(null)

  const handleUpgrade = async (plan: 'pro' | 'elder') => {
    setLoading(plan)
    try {
      const res = await fetch(`${API_URL}/subscriptions/hyescriptures/init`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          email: user?.email,
          callback_url: window.location.origin + '/upgrade-success',
        }),
      })
      const data = await res.json()
      if (data.authorizationUrl) window.location.href = data.authorizationUrl
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(null)
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 8 }}>Choose Your Plan</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: 24 }}>
        {tier !== 'free' ? `Current: ${tier.toUpperCase()}` : 'Unlock premium Bible study tools'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Pro Card */}
        <div style={{ border: '1px solid #e8e4dd', borderRadius: 16, padding: 24, textAlign: 'center' }}>
          <Sparkles size={28} style={{ color: '#c9a84c', marginBottom: 12 }} />
          <h3 style={{ margin: '0 0 4px' }}>Pro</h3>
          <p style={{ fontSize: 28, fontWeight: 700, margin: '0 0 4px' }}>$4.99</p>
          <p style={{ fontSize: 12, color: '#666', marginBottom: 16 }}>per year</p>
          <ul style={{ textAlign: 'left', fontSize: 13, listStyle: 'none', padding: 0, marginBottom: 16 }}>
            <li><Check size={14} /> AI Chat (7/day)</li>
            <li><Check size={14} /> All Study Tools</li>
            <li><Check size={14} /> Bible Games</li>
            <li><Check size={14} /> No Ads</li>
          </ul>
          <button
            onClick={() => handleUpgrade('pro')}
            disabled={loading === 'pro' || tier === 'pro'}
            style={{
              width: '100%', padding: 12, borderRadius: 12, border: 'none',
              background: tier === 'pro' ? '#e8e4dd' : '#c9a84c', color: tier === 'pro' ? '#666' : 'white',
              fontWeight: 600, cursor: tier === 'pro' ? 'default' : 'pointer',
            }}
          >
            {tier === 'pro' ? 'Current Plan' : loading === 'pro' ? 'Loading...' : 'Upgrade to Pro'}
          </button>
        </div>

        {/* Elder Card */}
        <div style={{ border: '2px solid #c9a84c', borderRadius: 16, padding: 24, textAlign: 'center', position: 'relative' }}>
          <span style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#c9a84c', color: 'white', padding: '2px 12px', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>BEST VALUE</span>
          <Crown size={28} style={{ color: '#c9a84c', marginBottom: 12, marginTop: 8 }} />
          <h3 style={{ margin: '0 0 4px' }}>Elder</h3>
          <p style={{ fontSize: 28, fontWeight: 700, margin: '0 0 4px' }}>$19.99</p>
          <p style={{ fontSize: 12, color: '#666', marginBottom: 16 }}>per year</p>
          <ul style={{ textAlign: 'left', fontSize: 13, listStyle: 'none', padding: 0, marginBottom: 16 }}>
            <li><Check size={14} /> Everything in Pro</li>
            <li><Check size={14} /> Sermon Builder</li>
            <li><Check size={14} /> Strong's (Greek/Hebrew)</li>
            <li><Check size={14} /> Elder Badge + Perks</li>
          </ul>
          <button
            onClick={() => handleUpgrade('elder')}
            disabled={loading === 'elder' || tier === 'elder'}
            style={{
              width: '100%', padding: 12, borderRadius: 12, border: 'none',
              background: tier === 'elder' ? '#e8e4dd' : '#1a1a2e', color: tier === 'elder' ? '#666' : 'white',
              fontWeight: 600, cursor: tier === 'elder' ? 'default' : 'pointer',
            }}
          >
            {tier === 'elder' ? 'Current Plan' : loading === 'elder' ? 'Loading...' : 'Upgrade to Elder'}
          </button>
        </div>
      </div>
    </div>
  )
}