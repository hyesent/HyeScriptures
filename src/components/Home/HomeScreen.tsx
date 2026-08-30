// src/components/Home/HomeScreen.tsx
import React, { useState, useEffect, useMemo } from 'react'
import { useBible } from '../../hooks/useBible'
import { supabase } from '../../lib/supabase'
import { useStreak } from '../../hooks/useStreak'
import { useChapterProgress } from '../../hooks/useChapterProgress'
import { getActivePlans } from '../../lib/reading-plans'
import { Search } from '../Search/Search'
import { NoteEditor } from '../Notes/NoteEditor'
import { PrayerEditor } from '../Prayer/PrayerEditor'
import { 
  Search as SearchIcon, Headphones, PenLine, Heart, ChevronRight, X, Sparkles, CheckCircle, ChevronDown, BookOpen
} from 'lucide-react'
import './HomeScreen.css'

interface HomeScreenProps {
  onNavigateToDevotional?: () => void
  onNavigateToAudio?: () => void
  onNavigateToBible?: (book: string, chapter: number) => void
  onNavigateToPlans?: () => void
}

const getDailySeed = (): number => {
  const today = new Date()
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
}

const seededRandom = (seed: number) => {
  let x = Math.sin(seed) * 10000
  return () => {
    x = Math.sin(x) * 10000
    return x - Math.floor(x)
  }
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateToDevotional, onNavigateToAudio, onNavigateToBible, onNavigateToPlans,
}) => {
  const { bible, currentBook, currentChapter } = useBible()
  const { getStreak } = useStreak()
  const { getStats, getBookProgress } = useChapterProgress()
  const [devotional, setDevotional] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [greeting, setGreeting] = useState('Good Morning')
  const [userName, setUserName] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [showNoteEditor, setShowNoteEditor] = useState(false)
  const [showPrayerEditor, setShowPrayerEditor] = useState(false)
  const [lastPosition, setLastPosition] = useState<{book: string, chapter: number} | null>(null)
  const [streak, setStreak] = useState(0)
  const [chapterStats, setChapterStats] = useState({ totalChaptersRead: 0, booksCompleted: 0 })
  const [activePlans, setActivePlans] = useState<any[]>([])
  const [showPlans, setShowPlans] = useState(false)

  const verseOfTheDay = useMemo(() => {
    if (!bible || bible.verses.length === 0) return null
    console.log("Total verses:", bible.verses.length)
console.log(
  "Books available:",
  [...new Set(bible.verses.map(v => v.book))]
)
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
    
    const streakData = getStreak(); setStreak(streakData.currentStreak)
    setChapterStats(getStats())
    
    // Load active plans
    const plans = getActivePlans()
    setActivePlans(plans)
    if (plans.length === 1) setShowPlans(true)
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

  const chapterMap: Record<string, number> = {
    'Genesis': 50, 'Exodus': 40, 'Leviticus': 27, 'Numbers': 36,
    'Deuteronomy': 34, 'Joshua': 24, 'Judges': 21, 'Ruth': 4,
    '1 Samuel': 31, '2 Samuel': 24, '1 Kings': 22, '2 Kings': 25,
    '1 Chronicles': 29, '2 Chronicles': 36, 'Ezra': 10, 'Nehemiah': 13,
    'Esther': 10, 'Job': 42, 'Psalms': 150, 'Proverbs': 31,
    'Ecclesiastes': 12, 'Song of Solomon': 8, 'Isaiah': 66, 'Jeremiah': 52,
    'Lamentations': 5, 'Ezekiel': 48, 'Daniel': 12, 'Hosea': 14,
    'Joel': 3, 'Amos': 9, 'Obadiah': 1, 'Jonah': 4, 'Micah': 7,
    'Nahum': 3, 'Habakkuk': 3, 'Zephaniah': 3, 'Haggai': 2,
    'Zechariah': 14, 'Malachi': 4, 'Matthew': 28, 'Mark': 16,
    'Luke': 24, 'John': 21, 'Acts': 28, 'Romans': 16,
    '1 Corinthians': 16, '2 Corinthians': 13, 'Galatians': 6, 'Ephesians': 6,
    'Philippians': 4, 'Colossians': 4, '1 Thessalonians': 5, '2 Thessalonians': 3,
    '1 Timothy': 6, '2 Timothy': 4, 'Titus': 3, 'Philemon': 1,
    'Hebrews': 13, 'James': 5, '1 Peter': 5, '2 Peter': 3,
    '1 John': 5, '2 John': 1, '3 John': 1, 'Jude': 1, 'Revelation': 22
  }
  const totalChaptersInBook = chapterMap[displayBook] || 50
  const bookProgress = bible ? getBookProgress(displayBook, totalChaptersInBook) : 0

  const handleContinueReading = () => {
    if (onNavigateToBible) onNavigateToBible(displayBook, displayChapter)
  }

  return (
    <div className="home-container">
      <div className="home-greeting">
        <h2>{getGreetingEmoji()} {greeting}</h2>
        <p>{userName}{streak > 0 ? ` · 🔥 ${streak} day streak` : ''}</p>
      </div>

      {/* Reading Progress Card */}
      {chapterStats.totalChaptersRead > 0 && (
        <div className="home-card" style={{ borderLeft: '3px solid #22c55e' }}>
          <div className="card-label"><CheckCircle size={12} style={{ display: 'inline', marginRight: 4 }} />Your Progress</div>
          <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
            <div>
              <span style={{ fontSize: 22, fontWeight: 700, color: '#22c55e' }}>{chapterStats.totalChaptersRead}</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', display: 'block' }}>Chapters Read</span>
            </div>
            <div>
              <span style={{ fontSize: 22, fontWeight: 700, color: 'var(--primary)' }}>{chapterStats.booksCompleted}</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', display: 'block' }}>Books Completed</span>
            </div>
          </div>
        </div>
      )}

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

      {/* Continue Reading */}
      <div className="home-card" onClick={handleContinueReading} style={{ cursor: 'pointer' }}>
        <div className="card-label">Continue Reading</div>
        <div className="card-title">{displayBook}</div>
        <div className="card-subtitle">Chapter {displayChapter}</div>
        <div className="home-progress">
          <div className="home-progress-bar">
            <div className="home-progress-fill" style={{ width: `${bookProgress}%` }} />
          </div>
          <span className="home-progress-text">{bookProgress}% of {displayBook}</span>
        </div>
        <div className="card-action">Continue Reading <ChevronRight size={16} /></div>
      </div>

      {/* Reading Plans - Collapsible */}
      {activePlans.length > 0 && (
        <div className="home-card">
          <div 
            className="card-label" 
            onClick={() => setShowPlans(!showPlans)} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <span>📖 Reading Plans ({activePlans.length} active)</span>
            <ChevronDown size={16} style={{ transform: showPlans ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
          </div>

          {showPlans && (
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {activePlans.map(({ plan, progress, percentage, currentDay }) => (
                <div 
                  key={plan.id} 
                  onClick={onNavigateToPlans}
                  style={{ 
                    cursor: 'pointer',
                    padding: 12,
                    borderRadius: 12,
                    background: 'var(--bg-hover)',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 18 }}>{plan.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{plan.name}</span>
                    <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-muted)' }}>
                      Day {Math.min(currentDay, plan.totalDays)}/{plan.totalDays}
                    </span>
                  </div>
                  <div className="home-progress" style={{ margin: 0 }}>
                    <div className="home-progress-bar">
                      <div className="home-progress-fill" style={{ width: `${percentage}%`, background: plan.color }} />
                    </div>
                    <span className="home-progress-text" style={{ fontSize: 11 }}>{percentage}%</span>
                  </div>
                </div>
              ))}
              <button 
                onClick={onNavigateToPlans}
                style={{
                  padding: '8px 12px',
                  background: 'transparent',
                  border: '1px solid var(--border-light)',
                  borderRadius: 8,
                  fontSize: 12,
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                View All Plans →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Quick Actions */}
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
