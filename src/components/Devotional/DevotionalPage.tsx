import React, { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { 
  Copy, 
  Share, 
  BookOpen, 
  RefreshCw,
  Heart,
  Clock
} from 'lucide-react'
import styles from './DevotionalPage.module.css'

interface DailyContent {
  id: string
  date: string
  morning_scripture: string | null
  morning_reflection: string | null
  morning_prayer: string | null
  night_scripture: string | null
  night_reflection: string | null
  night_prayer: string | null
}

export const DevotionalPage: React.FC = () => {
  const [content, setContent] = useState<DailyContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [cachedContent, setCachedContent] = useState<DailyContent | null>(null)

  // Determine time of day
  const hour = new Date().getHours()
  const isMorning = hour >= 5 && hour < 17

  // Get greeting based on time
  const getGreeting = () => {
    const h = new Date().getHours()
    if (h < 12) return 'Good Morning'
    if (h < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const cached = localStorage.getItem(`devotional_${today}`)
    if (cached) {
      try {
        setCachedContent(JSON.parse(cached))
      } catch {}
    }
    
    fetchDailyContent()
  }, [])

  const fetchDailyContent = async () => {
    try {
      setLoading(true)
      const today = new Date().toISOString().split('T')[0]
      
      const { data, error } = await supabase
        .from('daily_ai_content')
        .select('*')
        .eq('date', today)
        .maybeSingle()

      if (error) {
        console.error('Error fetching devotional:', error)
      }

      if (data) {
        setContent(data)
        localStorage.setItem(`devotional_${today}`, JSON.stringify(data))
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await fetchDailyContent()
    setRefreshing(false)
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleShare = async (text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Devotional',
          text: text
        })
      } catch {}
    } else {
      navigator.clipboard.writeText(text)
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const parseScripture = (scripture: string | null) => {
    if (!scripture) return { reference: '', verse: '' }
    const parts = scripture.split(' - ')
    if (parts.length === 2) {
      return { reference: parts[0], verse: parts[1] }
    }
    return { reference: scripture, verse: '' }
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.skeleton}>
          <div className={styles.skeletonHeader} />
          <div className={styles.skeletonCard} />
          <div className={styles.skeletonCard} />
          <div className={styles.skeletonCard} />
        </div>
      </div>
    )
  }

  const displayContent = content || cachedContent

  // Determine which devotional to show
  const currentDevotional = isMorning
    ? {
        scripture: displayContent?.morning_scripture || null,
        reflection: displayContent?.morning_reflection || null,
        prayer: displayContent?.morning_prayer || null,
      }
    : {
        scripture: displayContent?.night_scripture || null,
        reflection: displayContent?.night_reflection || null,
        prayer: displayContent?.night_prayer || null,
      }

  const hasContent = currentDevotional.scripture || currentDevotional.reflection || currentDevotional.prayer
  const scriptureData = parseScripture(currentDevotional.scripture)

  const fullText = `${currentDevotional.scripture}\n\n${currentDevotional.reflection}\n\n${currentDevotional.prayer}`

  if (!displayContent || !hasContent) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <Heart size={48} className={styles.emptyIcon} />
          <h3>Devotional is being prepared</h3>
          <p>Today's devotional will be available soon. Please check back later.</p>
          <button className={styles.refreshBtn} onClick={handleRefresh}>
            <RefreshCw size={16} />
            Check Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h2 className={styles.greeting}>{getGreeting()}</h2>
            <p className={styles.title}>
              {isMorning ? '🌅 Morning Devotional' : '🌙 Night Devotional'}
            </p>
          </div>
          <button className={styles.refreshBtn} onClick={handleRefresh} disabled={refreshing}>
            <RefreshCw size={16} className={refreshing ? styles.spinning : ''} />
          </button>
        </div>
        <p className={styles.date}>{formatDate(displayContent.date)}</p>
        <div className={styles.meta}>
          <Clock size={14} />
          <span>2 min read</span>
        </div>
      </div>

      <div className={styles.content}>
        {/* Scripture Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>📖</span>
            <span className={styles.cardLabel}>Scripture</span>
          </div>
          <div className={styles.scriptureBlock}>
            <h4 className={styles.scriptureRef}>{scriptureData.reference}</h4>
            <p className={styles.scriptureText}>"{scriptureData.verse}"</p>
          </div>
          <div className={styles.cardActions}>
            <button 
              className={styles.cardActionBtn}
              onClick={() => handleCopy(scriptureData.verse)}
            >
              <Copy size={14} />
              Copy
            </button>
            <button 
              className={styles.cardActionBtn}
              onClick={() => handleShare(scriptureData.verse)}
            >
              <Share size={14} />
              Share
            </button>
            <button className={styles.cardActionBtn}>
              <BookOpen size={14} />
              Open Bible
            </button>
          </div>
        </div>

        {/* Reflection Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>💭</span>
            <span className={styles.cardLabel}>Reflection</span>
          </div>
          <p className={styles.reflectionText}>
            {currentDevotional.reflection || 'Not available'}
          </p>
          <div className={styles.cardActions}>
            <button 
              className={styles.cardActionBtn}
              onClick={() => handleCopy(currentDevotional.reflection || '')}
            >
              <Copy size={14} />
              Copy
            </button>
          </div>
        </div>

        {/* Prayer Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>🙏</span>
            <span className={styles.cardLabel}>Prayer</span>
          </div>
          <p className={styles.prayerText}>
            {currentDevotional.prayer || 'Not available'}
          </p>
          <div className={styles.cardActions}>
            <button 
              className={styles.cardActionBtn}
              onClick={() => handleCopy(currentDevotional.prayer || '')}
            >
              <Copy size={14} />
              Copy
            </button>
            <button 
              className={styles.cardActionBtn}
              onClick={() => handleShare(fullText)}
            >
              <Share size={14} />
              Share Devotional
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}