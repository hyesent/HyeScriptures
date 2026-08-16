import React, { useState, useEffect, useRef } from 'react'
import { supabase } from '../../lib/supabase'
import { createPost } from '../../lib/community'
import { useAuth } from '../../hooks/useAuth'
import { 
  Copy, Share, BookOpen, RefreshCw, Heart, Clock, Check, Users, Image as ImageIcon
} from 'lucide-react'
import styles from './DevotionalPage.module.css'

// Import 28 backgrounds (same as ShareButton)
import bg1 from '../../assets/images/share-backgrounds/image 1.jpg'
import bg2 from '../../assets/images/share-backgrounds/image 2.jpg'
import bg3 from '../../assets/images/share-backgrounds/image 3.jpg'
import bg4 from '../../assets/images/share-backgrounds/image 4.jpg'
import bg5 from '../../assets/images/share-backgrounds/image 5.jpg'
import bg6 from '../../assets/images/share-backgrounds/image 6.jpg'
import bg7 from '../../assets/images/share-backgrounds/image 7.jpg'
import bg8 from '../../assets/images/share-backgrounds/image 8.jpg'
import bg9 from '../../assets/images/share-backgrounds/image 9.jpg'
import bg10 from '../../assets/images/share-backgrounds/image 10.jpg'
import bg11 from '../../assets/images/share-backgrounds/image 11.jpg'
import bg12 from '../../assets/images/share-backgrounds/image 12.jpg'
import bg13 from '../../assets/images/share-backgrounds/image 13.jpg'
import bg14 from '../../assets/images/share-backgrounds/image 14.jpg'
import bg15 from '../../assets/images/share-backgrounds/image 15.jpg'
import bg16 from '../../assets/images/share-backgrounds/image 16.jpg'
import bg17 from '../../assets/images/share-backgrounds/image 17.jpg'
import bg18 from '../../assets/images/share-backgrounds/image 18.jpg'
import bg19 from '../../assets/images/share-backgrounds/image 19.jpg'
import bg20 from '../../assets/images/share-backgrounds/image 20.jpg'
import bg21 from '../../assets/images/share-backgrounds/image 21.jpg'
import bg22 from '../../assets/images/share-backgrounds/image 22.jpg'
import bg23 from '../../assets/images/share-backgrounds/image 23.jpg'
import bg24 from '../../assets/images/share-backgrounds/image 24.jpg'
import bg25 from '../../assets/images/share-backgrounds/image 25.jpg'
import bg26 from '../../assets/images/share-backgrounds/image 26.jpg'
import bg27 from '../../assets/images/share-backgrounds/image 27.jpg'
import bg28 from '../../assets/images/share-backgrounds/image 28.jpg'

const backgrounds = [
  bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10,
  bg11, bg12, bg13, bg14, bg15, bg16, bg17, bg18, bg19, bg20,
  bg21, bg22, bg23, bg24, bg25, bg26, bg27, bg28,
]

const getRandomBackground = () => {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}

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
  const { user } = useAuth()
  const [content, setContent] = useState<DailyContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [cachedContent, setCachedContent] = useState<DailyContent | null>(null)
  const [copiedFull, setCopiedFull] = useState(false)
  const [posted, setPosted] = useState(false)
  const [posting, setPosting] = useState(false)
  const [background] = useState<string>(getRandomBackground)
  const scriptureCardRef = useRef<HTMLDivElement>(null)

  const hour = new Date().getHours()
  const isMorning = hour >= 5 && hour < 17

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
      try { setCachedContent(JSON.parse(cached)) } catch {}
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

      if (error) console.error('Error fetching devotional:', error)
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

  // Copy FULL devotional (verse + reflection + prayer)
  const handleCopyFull = () => {
    const fullText = `${currentDevotional.scripture}\n\n${currentDevotional.reflection}\n\n${currentDevotional.prayer}`
    navigator.clipboard.writeText(fullText)
    setCopiedFull(true)
    setTimeout(() => setCopiedFull(false), 2000)
  }

  const handleShare = async (text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Daily Devotional', text })
      } catch {}
    } else {
      navigator.clipboard.writeText(text)
    }
  }

  // Post to community
  const handlePostToCommunity = async () => {
    if (!user || posting) return
    setPosting(true)
    try {
      const post = await createPost(
        'verse_reflection',
        `${currentDevotional.reflection}\n\n${currentDevotional.prayer}`,
        currentDevotional.scripture || undefined
      )
      if (post) {
        setPosted(true)
        setTimeout(() => setPosted(false), 3000)
      }
    } catch (error) {
      console.error('Error posting:', error)
    } finally {
      setPosting(false)
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  const parseScripture = (scripture: string | null) => {
    if (!scripture) return { reference: '', verse: '' }
    const parts = scripture.split(' - ')
    if (parts.length === 2) return { reference: parts[0], verse: parts[1] }
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

  if (!displayContent || !hasContent) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <Heart size={48} className={styles.emptyIcon} />
          <h3>Devotional is being prepared</h3>
          <p>Today's devotional will be available soon. Please check back later.</p>
          <button className={styles.refreshBtn} onClick={handleRefresh}>
            <RefreshCw size={16} />Check Again
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
            <p className={styles.title}>{isMorning ? '🌅 Morning Devotional' : '🌙 Night Devotional'}</p>
          </div>
          <button className={styles.refreshBtn} onClick={handleRefresh} disabled={refreshing}>
            <RefreshCw size={16} className={refreshing ? styles.spinning : ''} />
          </button>
        </div>
        <p className={styles.date}>{formatDate(displayContent.date)}</p>
        <div className={styles.meta}><Clock size={14} /><span>2 min read</span></div>
      </div>

      <div className={styles.content}>
        {/* Scripture Card with Custom Background */}
        <div 
          ref={scriptureCardRef}
          className={styles.scriptureImageCard}
          style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className={styles.scriptureOverlay}>
            <div className={styles.scriptureContent}>
              <span className={styles.scriptureQuote}>"</span>
              <p className={styles.scriptureVerse}>{scriptureData.verse}</p>
              <div className={styles.scriptureDivider} />
              <p className={styles.scriptureReference}>{scriptureData.reference}</p>
              <span className={styles.scriptureVersion}>KJV</span>
            </div>
          </div>
        </div>

        {/* Scripture Actions */}
        <div className={styles.cardActions}>
          <button className={styles.cardActionBtn} onClick={() => handleCopy(scriptureData.verse)}>
            <Copy size={14} />Copy Verse
          </button>
          <button className={styles.cardActionBtn} onClick={() => handleShare(scriptureData.verse)}>
            <Share size={14} />Share Verse
          </button>
          <button className={styles.cardActionBtn} onClick={handlePostToCommunity} disabled={posting}>
            {posted ? <Check size={14} /> : <Users size={14} />}
            {posted ? 'Posted!' : posting ? 'Posting...' : 'Post'}
          </button>
        </div>

        {/* Reflection Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>💭</span>
            <span className={styles.cardLabel}>Reflection</span>
          </div>
          <p className={styles.reflectionText}>{currentDevotional.reflection || 'Not available'}</p>
          <div className={styles.cardActions}>
            <button className={styles.cardActionBtn} onClick={() => handleCopy(currentDevotional.reflection || '')}>
              <Copy size={14} />Copy
            </button>
          </div>
        </div>

        {/* Prayer Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>🙏</span>
            <span className={styles.cardLabel}>Prayer</span>
          </div>
          <p className={styles.prayerText}>{currentDevotional.prayer || 'Not available'}</p>
          <div className={styles.cardActions}>
            <button className={styles.cardActionBtn} onClick={() => handleCopy(currentDevotional.prayer || '')}>
              <Copy size={14} />Copy
            </button>
            <button className={styles.cardActionBtn} onClick={() => handleShare(`${currentDevotional.scripture}\n\n${currentDevotional.reflection}\n\n${currentDevotional.prayer}`)}>
              <Share size={14} />Share Devotional
            </button>
          </div>
        </div>

        {/* Copy Full Devotional */}
        <button className={styles.copyFullBtn} onClick={handleCopyFull}>
          {copiedFull ? <Check size={16} /> : <Copy size={16} />}
          {copiedFull ? 'Copied Full Devotional!' : 'Copy Full Devotional'}
        </button>
      </div>
    </div>
  )
}
