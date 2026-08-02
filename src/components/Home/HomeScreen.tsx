// src/components/Home/HomeScreen.tsx
import React, { useState, useEffect, useMemo } from 'react'
import { useBible } from '../../hooks/useBible'
import { supabase } from '../../lib/supabase'
import { useStreak } from '../../hooks/useStreak'
import { Search } from '../Search/Search'
import { NoteEditor } from '../Notes/NoteEditor'
import { PrayerEditor } from '../Prayer/PrayerEditor'
import { 
  Search as SearchIcon, Headphones, PenLine, Heart, ChevronRight, X, Sparkles
} from 'lucide-react'
import './HomeScreen.css'

interface HomeScreenProps {
  onNavigateToDevotional?: () => void
  onNavigateToAudio?: () => void
}

const getDailySeed = (): number => {
  const today = new Date()
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
}

const seededRandom = (seed: number) => {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateToDevotional, onNavigateToAudio,
}) => {
  const { bible, currentBook, currentChapter } = useBible()
  const { getStreak } = useStreak()
  const [devotional, setDevotional] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [greeting, setGreeting] = useState('Good Morning')
  const [userName, setUserName] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [showNoteEditor, setShowNoteEditor] = useState(false)
  const [showPrayerEditor, setShowPrayerEditor] = useState(false)
  const [lastPosition, setLastPosition] = useState<{book: string, chapter: number} | null>(null)
  const [planProgress, setPlanProgress] = useState<{day: number, name: string, percent: number} | null>(null)
  const [streak, setStreak] = useState(0)

  const verseOfTheDay = useMemo(() => {
    if (!bible || bible.verses.length === 0) return null
    const seed = getDailySeed()
    const random = seededRandom(seed)
    const index = Math.floor(random() * bible.verses.length)
    return bible.verses[index]
  }, [bible])

  useEffect(() => {
    const name = localStorage.getItem('hyescriptures_display_name') || 'Beloved'
    setUserName(name)
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) setGreeting('Good Morning')
    else if (hour >= 12 && hour < 17) setGreeting('Good Afternoon')
    else setGreeting('Good Evening')

    const fetchDevotional = async () => {
      try {
        const today = new Date().toISOString().split('T')[0]
        const { data, error } = await supabase.from('daily_ai_content').select('*').eq('date', today).maybeSingle()
        if (!error && data) setDevotional(data)
      } catch {} finally { setLoading(false) }
    }
    fetchDevotional()

    try { const saved = localStorage.getItem('hyescriptures_last_position'); if (saved) setLastPosition(JSON.parse(saved)) } catch {}
    try {
      const plans = JSON.parse(localStorage.getItem('hyescriptures_reading_plans') || '{}')
      const activePlanId = Object.keys(plans)[0]
      if (activePlanId && plans[activePlanId]) {
        const plan = plans[activePlanId]
        const completed = plan.completedDays?.length || 0
        const total = plan.totalDays || 365
        setPlanProgress({ day: completed + 1, name: plan.name || 'Bible in 1 Year', percent: Math.round((completed / total) * 100) })
      }
    } catch {}
    const streakData = getStreak(); setStreak(streakData.currentStreak)
  }, [])

  const getCurrentContent = () => {
    if (!devotional) return null
    const hour = new Date().getHours()
    const isMorning = hour >= 5 && hour < 17
    return isMorning ? {
      scripture: devotional.morning_scripture, reflection: devotional.morning_reflection,
      prayer: devotional.morning_prayer, label: 'Morning Devotional', icon: '🌅'
    } : {
      scripture: devotional.night_scripture, reflection: devotional.night_reflection,
      prayer: devotional.night_prayer, label: 'Night Devotional', icon: '🌙'
    }
  }

  const currentContent = getCurrentContent()

  const getGreetingEmoji = () => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) return '🌅'
    if (hour >= 12 && hour < 17) return '☀️'
    return '🌙'
  }

  if (showSearch) {
    return (
      <div className="home-search-overlay">
        <div className="home-search-header">
          <button className="home-search-back" onClick={() => setShowSearch(false)}><X size={20} /></button>
          <span>Search Scripture</span>
        </div>
        <Search onSelectVerse={() => setShowSearch(false)} />
      </div>
    )
  }

  const displayBook = lastPosition?.book || currentBook
  const displayChapter = lastPosition?.chapter || currentChapter

  return (
    <div className="home-container">
      <div className="home-greeting">
        <h2>{getGreetingEmoji()} {greeting}</h2>
        <p>{userName}{streak > 0 ? ` · 🔥 ${streak} day streak` : ''}</p>
      </div>

      {verseOfTheDay && (
        <div className="home-card verse-of-day-card">
          <div className="card-label"><Sparkles size={12} style={{ display: 'inline', marginRight: 4 }} />Verse of the Day</div>
          <div className="card-title" style={{ fontStyle: 'italic' }}>"{verseOfTheDay.text}"</div>
          <div className="card-subtitle" style={{ fontWeight: 600, color: 'var(--primary)' }}>{verseOfTheDay.book} {verseOfTheDay.chapter}:{verseOfTheDay.verse}</div>
        </div>
      )}

      <div className="home-card devotional-card" onClick={onNavigateToDevotional} style={{ cursor: 'pointer' }}>
        <div className="card-label">{loading ? '⏳ Loading...' : currentContent?.label || "Today's Scripture"}</div>
        {!loading && currentContent ? (
          <>
            <div className="card-title">{currentContent.scripture || 'Romans 8:28'}</div>
            <div className="card-subtitle">{currentContent.reflection?.slice(0, 120) || 'And we know that all things work together for good...'}...</div>
            <div className="card-action">Read Devotional <ChevronRight size={16} /></div>
          </>
        ) : (
          <>
            <div className="card-title">Romans 8:28 - And we know that all things work together for good...</div>
            <div className="card-subtitle">"And we know that all things work together for good to them that love God..."</div>
            <div className="card-action">Read Devotional <ChevronRight size={16} /></div>
          </>
        )}
        {currentContent?.prayer && <div className="home-prayer-preview"><Heart size={14} /><span>{currentContent.prayer.slice(0, 80)}...</span></div>}
      </div>

      <div className="home-card">
        <div className="card-label">Continue Reading</div>
        <div className="card-title">{displayBook}</div>
        <div className="card-subtitle">Chapter {displayChapter}</div>
        <div className="home-progress"><div className="home-progress-bar"><div className="home-progress-fill" style={{ width: `${Math.min(((displayChapter || 1) / 50) * 100, 100)}%` }} /></div><span className="home-progress-text">Chapter {displayChapter}</span></div>
        <div className="card-action">Continue Reading <ChevronRight size={16} /></div>
      </div>

      {planProgress && (
        <div className="home-card">
          <div className="card-label">Reading Plan</div>
          <div className="card-title">Day {planProgress.day}</div>
          <div className="card-subtitle">{planProgress.name}</div>
          <div className="home-progress"><div className="home-progress-bar"><div className="home-progress-fill" style={{ width: `${planProgress.percent}%` }} /></div><span className="home-progress-text">{planProgress.percent}%</span></div>
          <div className="card-action">View Plan <ChevronRight size={16} /></div>
        </div>
      )}

      <div className="home-quick-actions">
        <button className="quick-action" onClick={() => setShowSearch(true)}><SearchIcon size={20} /><span className="qa-label">Search</span></button>
        <button className="quick-action" onClick={onNavigateToAudio}><Headphones size={20} /><span className="qa-label">Listen</span></button>
        <button className="quick-action" onClick={() => setShowNoteEditor(true)}><PenLine size={20} /><span className="qa-label">Notes</span></button>
        <button className="quick-action" onClick={() => setShowPrayerEditor(true)}><Heart size={20} /><span className="qa-label">Prayer</span></button>
      </div>

      {showNoteEditor && <NoteEditor onClose={() => setShowNoteEditor(false)} />}
      {showPrayerEditor && <PrayerEditor onClose={() => setShowPrayerEditor(false)} />}
    </div>
  )
}