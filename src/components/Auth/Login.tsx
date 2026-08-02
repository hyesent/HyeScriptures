import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import styles from './Login.module.css'

const AppLogo = () => (
  <svg width="72" height="72" viewBox="0 0 512 512" fill="none">
    <rect width="512" height="512" rx="110" fill="#08111F"/>
    <defs>
      <linearGradient id="loginGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF1B2"/>
        <stop offset="50%" stopColor="#F6D067"/>
        <stop offset="100%" stopColor="#BD8A12"/>
      </linearGradient>
    </defs>
    <circle cx="256" cy="175" r="135" fill="white" opacity="0.08"/>
    <path d="M170 150 Q256 120 342 150 L342 360 Q256 332 170 360 Z" fill="none" stroke="url(#loginGold)" strokeWidth="18" strokeLinejoin="round"/>
    <path d="M256 138 L256 372" stroke="url(#loginGold)" strokeWidth="10" strokeLinecap="round"/>
    <path d="M256 150 Q215 168 188 195" stroke="white" strokeWidth="3" fill="none" opacity="0.4"/>
    <path d="M256 150 Q297 168 324 195" stroke="white" strokeWidth="3" fill="none" opacity="0.4"/>
    <path d="M256 185 L256 305 M220 235 L292 235" stroke="white" strokeWidth="14" strokeLinecap="round"/>
    <path d="M256 78 L256 52" stroke="#FFE59B" strokeWidth="4" strokeLinecap="round"/>
    <path d="M208 90 L195 66" stroke="#FFE59B" strokeWidth="3" strokeLinecap="round"/>
    <path d="M304 90 L317 66" stroke="#FFE59B" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="145" cy="120" r="2" fill="#FFE89B"/>
    <circle cx="368" cy="135" r="3" fill="#FFE89B"/>
    <circle cx="160" cy="300" r="2" fill="#FFE89B"/>
    <circle cx="356" cy="286" r="2" fill="#FFE89B"/>
  </svg>
)

const CrossBackground = () => (
  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.4" strokeLinecap="round"
    style={{ position: 'fixed', bottom: '8%', right: '5%', opacity: 0.04, pointerEvents: 'none' }}>
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="6" y1="8" x2="18" y2="8" />
    <line x1="5" y1="14" x2="19" y2="14" />
  </svg>
)

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59A15 15 0 0 1 9.5 24c0-1.59.3-3.12.9-4.54L2.56 13.22A23.9 23.9 0 0 0 0 24c0 3.77.88 7.34 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.97 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
)

export const Login: React.FC = () => {
  const { signInWithGoogle, loading } = useAuth()

  return (
    <div className={styles.container}>
      {/* Ambient Background */}
      <div style={{
        position: 'fixed', inset: 0,
        background: 'linear-gradient(180deg, #08111F 0%, #132D5C 50%, #0A1628 100%)',
        zIndex: -1,
      }} />
      <CrossBackground />

      <div className={styles.card}>
        {/* Logo */}
        <div className={styles.icon}>
          <AppLogo />
        </div>

        {/* Brand */}
        <h1 className={styles.title}>Hyescriptures</h1>
        <p className={styles.subtitle}>Your daily bread for the soul</p>

        {/* Verse */}
        <div style={{
          marginTop: 24, padding: '16px 20px',
          background: 'rgba(201, 168, 76, 0.06)',
          border: '1px solid rgba(201, 168, 76, 0.12)',
          borderRadius: 16, textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Georgia, serif', fontSize: 15, fontStyle: 'italic',
            color: '#c9a84c', margin: 0, lineHeight: 1.7,
          }}>
            "Your word is a lamp to my feet and a light to my path."
          </p>
          <p style={{ fontSize: 12, color: '#8899aa', margin: '8px 0 0' }}>Psalm 119:105</p>
        </div>

        {/* Google Button */}
        <button className={styles.googleBtn} onClick={signInWithGoogle} disabled={loading}>
          <GoogleIcon />
          <span>{loading ? 'Signing in...' : 'Continue with Google'}</span>
        </button>

        {/* Divider */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginTop: 20,
          opacity: 0.3,
        }}>
          <div style={{ flex: 1, height: 1, background: '#fff' }} />
          <span style={{ fontSize: 11, color: '#8899aa', textTransform: 'uppercase', letterSpacing: 1 }}>Secure Login</span>
          <div style={{ flex: 1, height: 1, background: '#fff' }} />
        </div>

        {/* Terms */}
        <p style={{
          marginTop: 20, fontSize: 11, color: '#556677', textAlign: 'center', lineHeight: 1.6,
        }}>
          By continuing, you agree to our{' '}
          <span style={{ color: '#c9a84c', cursor: 'pointer' }}>Terms of Service</span>
          {' '}and{' '}
          <span style={{ color: '#c9a84c', cursor: 'pointer' }}>Privacy Policy</span>
        </p>
      </div>

      {/* Bottom brand */}
      <p style={{
        position: 'fixed', bottom: 24, left: 0, right: 0,
        textAlign: 'center', fontSize: 11, color: '#445566',
        letterSpacing: 1,
      }}>
        HYESCRIPTURES
      </p>
    </div>
  )
}