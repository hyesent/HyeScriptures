// src/App.tsx
import React, { useEffect, useState } from 'react'
import { useAuth } from './hooks/useAuth'
import { useStreak } from './hooks/useStreak'
import { useSubscription } from './hooks/useSubscription'
import { ThemeProvider } from './contexts/ThemeContext'
import { Login } from './components/Auth/Login'
import { HomeScreen } from './components/Home/HomeScreen'
import { BibleTab } from './components/Bible/BibleTab'
import { StudyHub } from './components/Study/StudyHub'
import { CommunityTab } from './components/Community/CommunityTab'
import { MeTab } from './components/Me/MeTab'
import { AudioBible } from './components/AudioBible/AudioBible'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Crown, BookOpen } from 'lucide-react'
import { Home, Users, User } from 'lucide-react'
import './App.css'

type Tab = 'home' | 'bible' | 'study' | 'community' | 'me' | 'audio'

const AUTH_CACHE_KEY = 'hyescriptures_auth_cache'

const BibleSvg = () => (
  <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
    <defs>
      <linearGradient id="bibleGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF1B2"/><stop offset="50%" stopColor="#F6D067"/><stop offset="100%" stopColor="#BD8A12"/>
      </linearGradient>
    </defs>
    <path d="M170 150 Q256 120 342 150 L342 360 Q256 332 170 360 Z" fill="none" stroke="url(#bibleGrad)" strokeWidth="18" strokeLinejoin="round"/>
    <path d="M256 138 L256 372" stroke="url(#bibleGrad)" strokeWidth="10" strokeLinecap="round"/>
    <path d="M256 185 L256 305 M220 235 L292 235" stroke="currentColor" strokeWidth="14" strokeLinecap="round" opacity="0.6"/>
  </svg>
)

const AppLogo = () => (
  <svg width="24" height="24" viewBox="0 0 512 512" fill="none" style={{ marginRight: 4 }}>
    <rect width="512" height="512" rx="110" fill="#08111F"/>
    <defs>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF1B2"/><stop offset="50%" stopColor="#F6D067"/><stop offset="100%" stopColor="#BD8A12"/>
      </linearGradient>
    </defs>
    <circle cx="256" cy="175" r="135" fill="white" opacity="0.08"/>
    <path d="M170 150 Q256 120 342 150 L342 360 Q256 332 170 360 Z" fill="none" stroke="url(#goldGrad)" strokeWidth="18" strokeLinejoin="round"/>
    <path d="M256 138 L256 372" stroke="url(#goldGrad)" strokeWidth="10" strokeLinecap="round"/>
    <path d="M256 150 Q215 168 188 195" stroke="white" strokeWidth="3" fill="none" opacity="0.4"/>
    <path d="M256 150 Q297 168 324 195" stroke="white" strokeWidth="3" fill="none" opacity="0.4"/>
    <path d="M256 185 L256 305 M220 235 L292 235" stroke="white" strokeWidth="14" strokeLinecap="round"/>
    <path d="M256 78 L256 52" stroke="#FFE59B" strokeWidth="4" strokeLinecap="round"/>
    <path d="M208 90 L195 66" stroke="#FFE59B" strokeWidth="3" strokeLinecap="round"/>
    <path d="M304 90 L317 66" stroke="#FFE59B" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="145" cy="120" r="2" fill="#FFE89B"/><circle cx="368" cy="135" r="3" fill="#FFE89B"/>
    <circle cx="160" cy="300" r="2" fill="#FFE89B"/><circle cx="356" cy="286" r="2" fill="#FFE89B"/>
  </svg>
)

const LoadingScreen = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(180deg, #08111F 0%, #132D5C 100%)', gap: 24, padding: 40 }}>
    <div style={{ animation: 'float 3s ease-in-out infinite' }}>
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><line x1="12" y1="6" x2="12" y2="18" /><line x1="8" y1="10" x2="16" y2="10" />
      </svg>
    </div>
    <h1 style={{ fontSize: 28, fontWeight: 700, color: '#ffffff', letterSpacing: 2, margin: 0, fontFamily: 'Georgia, serif' }}>HYESCRIPTURES</h1>
    <p style={{ fontSize: 13, color: '#8899aa', margin: 0, letterSpacing: 1, textTransform: 'uppercase' }}>Your Daily Bread</p>
    <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>{[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#c9a84c', animation: `loadingPulse 1.4s ease-in-out ${i*0.2}s infinite` }} />)}</div>
    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" style={{ position: 'fixed', bottom: '10%', opacity: 0.06 }}><line x1="12" y1="5" x2="12" y2="19" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="7" y1="13" x2="17" y2="13" /></svg>
    <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}@keyframes loadingPulse{0%,80%,100%{opacity:0.2;transform:scale(0.8)}40%{opacity:1;transform:scale(1.3)}}`}</style>
  </div>
)

const hasCachedAuth = (): boolean => {
  try {
    const data = localStorage.getItem(AUTH_CACHE_KEY)
    if (!data) return false
    const cache = JSON.parse(data)
    return Date.now() - cache.cachedAt < 7 * 24 * 60 * 60 * 1000
  } catch { return false }
}

function App() {
  const [showLoading, setShowLoading] = useState(true)
  const [bypassAuth, setBypassAuth] = useState(false)
  const [bibleTarget, setBibleTarget] = useState<{book: string, chapter: number} | null>(null)

  useEffect(() => {
    const cached = hasCachedAuth()
    if (cached) setBypassAuth(true)
    const timer = setTimeout(() => setShowLoading(false), cached ? 800 : 1500)
    return () => clearTimeout(timer)
  }, [])

  const { user, loading: authLoading } = useAuth()
  const { updateStreak } = useStreak()
  const { tier } = useSubscription()
  const [currentTab, setCurrentTab] = React.useState<Tab>('home')

  useEffect(() => { if (user) updateStreak() }, [user])

  if (showLoading) return <LoadingScreen />

  if (bypassAuth) {
    return (
      <ThemeProvider>
        <AppContent 
          tier={tier} 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab}
          bibleTarget={bibleTarget}
          setBibleTarget={setBibleTarget}
        />
      </ThemeProvider>
    )
  }

  if (authLoading) return <LoadingScreen />
  if (!user) return <ThemeProvider><Login /></ThemeProvider>

  return (
    <ThemeProvider>
      <AppContent 
        tier={tier} 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
        bibleTarget={bibleTarget}
        setBibleTarget={setBibleTarget}
      />
    </ThemeProvider>
  )
}

const AppContent: React.FC<{
  tier: string
  currentTab: Tab
  setCurrentTab: (tab: Tab) => void
  bibleTarget: {book: string, chapter: number} | null
  setBibleTarget: (target: {book: string, chapter: number} | null) => void
}> = ({ tier, currentTab, setCurrentTab, bibleTarget, setBibleTarget }) => {
  const renderContent = () => {
    switch (currentTab) {
      case 'home': return (
        <HomeScreen 
          onNavigateToDevotional={() => setCurrentTab('study')} 
          onNavigateToAudio={() => setCurrentTab('audio')}
          onNavigateToBible={(book, chapter) => {
            setBibleTarget({ book, chapter })
            setCurrentTab('bible')
          }}
          onNavigateToPlans={() => setCurrentTab('me')}
        />
      )
      case 'bible': return (
        <BibleTab 
          initialBook={bibleTarget?.book}
          initialChapter={bibleTarget?.chapter}
          onClearInitial={() => setBibleTarget(null)}
        />
      )
      case 'study': return <StudyHub />
      case 'community': return <CommunityTab />
      case 'me': return <MeTab />
      case 'audio': return <AudioBible />
      default: return null
    }
  }

  const tierBadge = tier === 'elder' ? (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginLeft: 8, padding: '2px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, background: 'linear-gradient(135deg, #c9a84c, #e8c96a)', color: '#1a1a2e' }}>
      <Crown size={10} />Elder
    </span>
  ) : null

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 style={{ display: 'flex', alignItems: 'center' }}><AppLogo />Hyescriptures{tierBadge}</h1>
          <span className="subtitle">{currentTab === 'home' && 'Home'}{currentTab === 'bible' && 'Bible'}{currentTab === 'study' && 'Study'}{currentTab === 'community' && 'Community'}{currentTab === 'me' && 'Me'}{currentTab === 'audio' && 'Audio Bible'}</span>
        </div>
      </header>
      <main className="app-main"><ErrorBoundary>{renderContent()}</ErrorBoundary></main>
      <nav className="bottom-nav">
        <button className={`nav-item ${currentTab === 'home' ? 'active' : ''}`} onClick={() => setCurrentTab('home')}><Home size={22} /><span className="nav-label">Home</span></button>
        <button className={`nav-item ${currentTab === 'bible' ? 'active' : ''}`} onClick={() => setCurrentTab('bible')}><BibleSvg /><span className="nav-label">Bible</span></button>
        <button className={`nav-item ${currentTab === 'study' ? 'active' : ''}`} onClick={() => setCurrentTab('study')}><BookOpen size={22} /><span className="nav-label">Study</span></button>
        <button className={`nav-item ${currentTab === 'community' ? 'active' : ''}`} onClick={() => setCurrentTab('community')}><Users size={22} /><span className="nav-label">Community</span></button>
        <button className={`nav-item ${currentTab === 'me' ? 'active' : ''}`} onClick={() => setCurrentTab('me')}><User size={22} /><span className="nav-label">Me</span></button>
      </nav>
    </div>
  )
}

export default App
