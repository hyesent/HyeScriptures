// src/components/Auth/Login.tsx
import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react'
import styles from './Login.module.css'

const AppLogo = () => (
  <svg width="72" height="72" viewBox="0 0 512 512" fill="none">
    <rect width="512" height="512" rx="110" fill="#08111F"/>
    <defs>
      <linearGradient id="loginGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF1B2"/><stop offset="50%" stopColor="#F6D067"/><stop offset="100%" stopColor="#BD8A12"/>
      </linearGradient>
    </defs>
    <circle cx="256" cy="175" r="135" fill="white" opacity="0.08"/>
    <path d="M170 150 Q256 120 342 150 L342 360 Q256 332 170 360 Z" fill="none" stroke="url(#loginGold)" strokeWidth="18" strokeLinejoin="round"/>
    <path d="M256 138 L256 372" stroke="url(#loginGold)" strokeWidth="10" strokeLinecap="round"/>
    <path d="M256 185 L256 305 M220 235 L292 235" stroke="white" strokeWidth="14" strokeLinecap="round"/>
    <path d="M256 78 L256 52" stroke="#FFE59B" strokeWidth="4" strokeLinecap="round"/>
    <path d="M208 90 L195 66" stroke="#FFE59B" strokeWidth="3" strokeLinecap="round"/>
    <path d="M304 90 L317 66" stroke="#FFE59B" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="145" cy="120" r="2" fill="#FFE89B"/><circle cx="368" cy="135" r="3" fill="#FFE89B"/>
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

type AuthMode = 'login' | 'register' | 'forgot'

export const Login: React.FC = () => {
  const { signInWithEmail, signUp, resetPassword, signInWithGoogle } = useAuth()
  const [mode, setMode] = useState<AuthMode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      if (mode === 'login') {
        await signInWithEmail(email, password)
      } else if (mode === 'register') {
        await signUp(email, password, displayName)
        setMessage('Account created! Check your email to confirm.')
        setMode('login')
      } else if (mode === 'forgot') {
        await resetPassword(email)
        setMessage('Password reset link sent to your email.')
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div style={{ position: 'fixed', inset: 0, background: 'linear-gradient(180deg, #08111F 0%, #132D5C 50%, #0A1628 100%)', zIndex: -1 }} />

      <div className={styles.card}>
        <div className={styles.icon}><AppLogo /></div>
        <h1 className={styles.title}>Hyescriptures</h1>
        <p className={styles.subtitle}>
          {mode === 'login' && 'Welcome back'}
          {mode === 'register' && 'Create your account'}
          {mode === 'forgot' && 'Reset your password'}
        </p>

        {/* Error / Success messages */}
        {error && <div className={styles.error}>{error}</div>}
        {message && <div className={styles.success}>{message}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Display Name (register only) */}
          {mode === 'register' && (
            <div className={styles.inputGroup}>
              <Mail size={18} className={styles.inputIcon} />
              <input
                type="text"
                placeholder="Display name"
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                className={styles.input}
                required
              />
            </div>
          )}

          {/* Email */}
          <div className={styles.inputGroup}>
            <Mail size={18} className={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={styles.input}
              required
              autoComplete="email"
            />
          </div>

          {/* Password (not for forgot) */}
          {mode !== 'forgot' && (
            <div className={styles.inputGroup}>
              <Lock size={18} className={styles.inputIcon} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={styles.input}
                required
                minLength={6}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          )}

          {/* Submit */}
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Please wait...' : (
              <>
                {mode === 'login' && <>Sign In <ArrowRight size={18} /></>}
                {mode === 'register' && <>Create Account <ArrowRight size={18} /></>}
                {mode === 'forgot' && <>Send Reset Link <ArrowRight size={18} /></>}
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className={styles.divider}>
          <span>or</span>
        </div>

        {/* Google Button */}
        <button className={styles.googleBtn} onClick={signInWithGoogle} disabled={loading}>
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>

        {/* Mode switchers */}
        <div className={styles.switcher}>
          {mode === 'login' && (
            <>
              <button onClick={() => setMode('register')} className={styles.switchBtn}>Create account</button>
              <span className={styles.switchDot}>·</span>
              <button onClick={() => setMode('forgot')} className={styles.switchBtn}>Forgot password?</button>
            </>
          )}
          {mode === 'register' && (
            <button onClick={() => setMode('login')} className={styles.switchBtn}>Already have an account? Sign in</button>
          )}
          {mode === 'forgot' && (
            <button onClick={() => setMode('login')} className={styles.switchBtn}>Back to sign in</button>
          )}
        </div>
      </div>
    </div>
  )
    }
