// src/components/Reading/PlanDetail.tsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReadingPlan } from '../../lib/reading-plans'
import { 
  readingPlans,
  getPlanChapters,
  getPlanProgress,
  toggleDayComplete,
  initializePlan,
  getProgressPercentage,
  getStreak
} from '../../lib/reading-plans'
import { useChapterProgress } from '../../hooks/useChapterProgress'
import { 
  ChevronLeft, 
  CheckCircle, 
  Circle, 
  BookOpen,
  Flame,
  ArrowRight,
  Clock,
  Crown,
  Sparkles,
  Target
} from 'lucide-react'
import { TIMING, EASING } from '../../lib/animations'
import styles from './PlanDetail.module.css'

interface PlanDetailProps {
  planId: string
  onBack: () => void
  onSelectVerse: (reference: string) => void
}

const Icons = {
  Destination: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export const PlanDetail: React.FC<PlanDetailProps> = ({ planId, onBack, onSelectVerse }) => {
  const { isChapterComplete, getCompletedChapters } = useChapterProgress()
  const [plan, setPlan] = useState<ReadingPlan | null>(null)
  const [completedDays, setCompletedDays] = useState<number[]>([])
  const [currentDay, setCurrentDay] = useState<number>(1)
  const [streak, setStreak] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  const [celebratingDay, setCelebratingDay] = useState<number | null>(null)
  const [allChaptersRead, setAllChaptersRead] = useState(false)

  useEffect(() => {
    const found = readingPlans.find(p => p.id === planId)
    if (found) {
      setPlan(found)
      const progress = getPlanProgress(planId)
      if (progress) {
        setCompletedDays(progress.completedDays)
        let foundIncomplete = false
        for (let i = 1; i <= found.totalDays; i++) {
          if (!progress.completedDays.includes(i)) {
            setCurrentDay(i)
            foundIncomplete = true
            break
          }
        }
        if (!foundIncomplete && progress.completedDays.length === found.totalDays) {
          setCurrentDay(found.totalDays)
        }
        setStreak(getStreak(planId))
      } else {
        initializePlan(planId)
      }
    }
  }, [planId])

  // Check if all chapters for current day are read
  useEffect(() => {
    if (!plan) return
    const chapters = getPlanChapters(planId, currentDay)
    if (chapters.length === 0) {
      setAllChaptersRead(false)
      return
    }

    const allRead = chapters.every(ch => {
      if (ch.includes('-')) {
        const [book, range] = ch.split(' ')
        const [start, end] = range.split('-').map(Number)
        for (let c = start; c <= end; c++) {
          if (!isChapterComplete(book, c)) return false
        }
        return true
      }
      const [book, chapterNum] = ch.split(' ')
      return isChapterComplete(book, parseInt(chapterNum))
    })

    setAllChaptersRead(allRead)
  }, [plan, currentDay, completedDays, isChapterComplete])

  const handleToggleDay = (day: number) => {
    if (!allChaptersRead) return

    const progress = toggleDayComplete(planId, day)
    setCompletedDays(progress.completedDays)
    setStreak(getStreak(planId))
    
    setCelebratingDay(day)
    setShowCelebration(true)
    setTimeout(() => setShowCelebration(false), 3000)
    
    if (progress.completedDays.includes(day)) {
      const planData = readingPlans.find(p => p.id === planId)
      if (planData) {
        for (let i = day + 1; i <= planData.totalDays; i++) {
          if (!progress.completedDays.includes(i)) {
            setTimeout(() => setCurrentDay(i), 500)
            break
          }
        }
        if (progress.completedDays.length === planData.totalDays) {
          setCurrentDay(planData.totalDays)
        }
      }
    }
  }

  const handleSelectChapter = (chapterRef: string) => {
    // Handle "Matthew 1-2" range format
    if (chapterRef.includes('-')) {
      const [book, range] = chapterRef.split(' ')
      const [start] = range.split('-').map(Number)
      onSelectVerse(`${book} ${start}:1`)
      return
    }
    // Handle "Matthew 1" format
    const parts = chapterRef.split(' ')
    const bookName = parts.slice(0, -1).join(' ')
    const chapter = parts[parts.length - 1]
    onSelectVerse(`${bookName} ${chapter}:1`)
  }

  // Check individual chapter completion for UI
  const isChapterRead = (chapterRef: string): boolean => {
    if (chapterRef.includes('-')) {
      const [book, range] = chapterRef.split(' ')
      const [start, end] = range.split('-').map(Number)
      for (let c = start; c <= end; c++) {
        if (!isChapterComplete(book, c)) return false
      }
      return true
    }
    const [book, chapterNum] = chapterRef.split(' ')
    return isChapterComplete(book, parseInt(chapterNum))
  }

  if (!plan) {
    return <div className={styles.loading}>Loading...</div>
  }

  const percentage = getProgressPercentage(planId)
  const dayChapters = getPlanChapters(planId, currentDay)
  const isDayComplete = completedDays.includes(currentDay)
  const totalDays = plan.totalDays
  const isComplete = percentage === 100

  const dailyVerses = [
    { text: 'Your word is a lamp to my feet and a light to my path.', ref: 'Psalm 119:105' },
    { text: 'Blessed is the man who walks not in the counsel of the wicked...', ref: 'Psalm 1:1' },
    { text: 'The grass withers, the flower fades, but the word of God stands forever.', ref: 'Isaiah 40:8' },
    { text: 'Man shall not live by bread alone, but by every word that comes from the mouth of God.', ref: 'Matthew 4:4' },
    { text: 'The law of the Lord is perfect, reviving the soul.', ref: 'Psalm 19:7' },
    { text: 'All Scripture is breathed out by God and profitable for teaching.', ref: '2 Timothy 3:16' },
    { text: 'Open my eyes, that I may behold wondrous things out of your law.', ref: 'Psalm 119:18' }
  ]
  const dailyVerse = dailyVerses[(currentDay - 1) % dailyVerses.length]

  const getAtmosphereClass = () => {
    const atmosphereMap: Record<string, string> = {
      'sunrise': styles.atmosphereSunrise,
      'sapphire': styles.atmosphereSapphire,
      'emerald': styles.atmosphereEmerald,
      'royal': styles.atmosphereRoyal,
      'amber': styles.atmosphereAmber,
      'golden': styles.atmosphereGolden,
      'crimson': styles.atmosphereCrimson,
      'fiery': styles.atmosphereFiery,
      'starry': styles.atmosphereStarry,
      'desert': styles.atmosphereDesert,
      'mountain': styles.atmosphereMountain,
      'still': styles.atmosphereStill
    }
    return atmosphereMap[plan.atmosphere] || styles.atmosphereDefault
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.ambientGlow} ${getAtmosphereClass()}`} />
      
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={onBack}>
            <ChevronLeft size={18} />
            <span>Back</span>
          </button>
          <div className={styles.headerInfo}>
            <span className={styles.headerPlan}>{plan.icon} {plan.name}</span>
            <span className={styles.headerProgress}>{Math.round(percentage)}%</span>
          </div>
        </div>

        {/* Journey Path Progress */}
        <div className={styles.journeyPath}>
          <div className={styles.pathContainer}>
            <div className={styles.pathLine}>
              <div className={styles.pathLineFill} style={{ width: `${percentage}%` }} />
            </div>
            <div className={styles.pathNodes}>
              {Array.from({ length: Math.min(totalDays, 12) }, (_, i) => {
                const day = Math.floor((i / 11) * (totalDays - 1)) + 1
                const isCompleted = completedDays.includes(day)
                const isCurrent = day === currentDay
                return (
                  <div
                    key={i}
                    className={`${styles.node} ${isCompleted ? styles.nodeCompleted : ''} ${isCurrent ? styles.nodeCurrent : ''}`}
                    onClick={() => setCurrentDay(day)}
                  >
                    {isCompleted ? '●' : '○'}
                  </div>
                )
              })}
            </div>
            <div className={styles.pathLabels}>
              <span>Start</span>
              <span>Finish</span>
            </div>
          </div>
        </div>

        {/* Today's Destination */}
        <motion.div 
          className={styles.destinationCard}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: TIMING.NORMAL / 1000 }}
          style={{
            borderColor: `${plan.color}20`,
            background: `linear-gradient(135deg, ${plan.color}08, #15253A)`
          }}
        >
          <div className={styles.destinationHeader}>
            <div className={styles.destinationBadge} style={{ color: plan.color }}>
              <Icons.Destination />
              <span>Today's Destination</span>
            </div>
            <span className={styles.destinationDay}>Day {currentDay} of {totalDays}</span>
          </div>

          <h3 className={styles.destinationTitle}>{plan.name}</h3>
          <p className={styles.destinationFocus}>
            <Target size={14} style={{ color: plan.color }} />
            {plan.focus}
          </p>
          
          <div className={styles.destinationReading}>
            <h4 className={styles.destinationReadingTitle}>Today's Reading</h4>
            <div className={styles.destinationChapterList}>
              {dayChapters.length > 0 ? (
                dayChapters.map((chapterRef) => {
                  const isRead = isChapterRead(chapterRef)
                  return (
                    <button
                      key={chapterRef}
                      className={`${styles.destinationChapter} ${isRead ? styles.chapterRead : ''}`}
                      onClick={() => handleSelectChapter(chapterRef)}
                      style={{ borderColor: isRead ? '#22c55e' : `${plan.color}20` }}
                    >
                      <span>{chapterRef}</span>
                      {isRead ? (
                        <CheckCircle size={14} style={{ color: '#22c55e' }} />
                      ) : (
                        <BookOpen size={14} style={{ color: plan.color }} />
                      )}
                    </button>
                  )
                })
              ) : (
                <span className={styles.noChapters}>Complete!</span>
              )}
            </div>
          </div>

          <div className={styles.destinationMeta}>
            <span className={styles.destinationTime}>
              <Clock size={14} />
              ~{plan.chaptersPerDay * 3} min
            </span>
            <span className={styles.destinationChapters}>
              <BookOpen size={14} />
              {plan.chaptersPerDay} chapter{plan.chaptersPerDay > 1 ? 's' : ''}
            </span>
          </div>

          {/* Daily Verse */}
          <div className={styles.dailyVerse} style={{ borderColor: `${plan.color}15` }}>
            <p className={styles.dailyVerseText}>"{dailyVerse.text}"</p>
            <p className={styles.dailyVerseRef}>— {dailyVerse.ref}</p>
          </div>

          <button 
            className={`${styles.completeBtn} ${isDayComplete ? styles.completed : ''} ${!allChaptersRead && !isDayComplete ? styles.disabled : ''}`}
            onClick={() => handleToggleDay(currentDay)}
            disabled={!allChaptersRead && !isDayComplete}
            style={{
              background: isDayComplete ? 'rgba(255,255,255,0.02)' : plan.gradient,
              color: isDayComplete ? '#5FAF75' : '#07111F',
              borderColor: isDayComplete ? 'rgba(95,175,117,0.15)' : 'transparent',
              opacity: !allChaptersRead && !isDayComplete ? 0.4 : 1,
              cursor: !allChaptersRead && !isDayComplete ? 'not-allowed' : 'pointer',
            }}
          >
            {isDayComplete ? (
              <>
                <CheckCircle size={18} />
                Completed
              </>
            ) : !allChaptersRead ? (
              <>
                <Circle size={18} />
                Read All Chapters First
              </>
            ) : isComplete ? (
              <>
                <Crown size={18} />
                Journey Complete!
              </>
            ) : (
              <>
                <Circle size={18} />
                Complete Day {currentDay}
              </>
            )}
            {!isDayComplete && allChaptersRead && !isComplete && <ArrowRight size={18} />}
          </button>

          {/* Streak */}
          {streak > 0 && (
            <div className={styles.streakDisplay} style={{ borderColor: `${plan.color}20` }}>
              <Flame size={16} style={{ color: plan.color }} />
              <span>{streak} day{streak > 1 ? 's' : ''} streak</span>
            </div>
          )}
        </motion.div>

        {/* Completion Celebration */}
        <AnimatePresence>
          {showCelebration && celebratingDay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={styles.celebration}
            >
              <div className={styles.celebrationContent}>
                <Sparkles size={32} className={styles.celebrationIcon} />
                <h4>Day {celebratingDay} Complete!</h4>
                <p>You've walked another step in your journey.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Footer */}
        <div className={styles.statsFooter}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{completedDays.length}</span>
            <span className={styles.statLabel}>Days</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{streak}</span>
            <span className={styles.statLabel}>Streak</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{Math.round(percentage)}%</span>
            <span className={styles.statLabel}>Complete</span>
          </div>
        </div>
      </div>
    </div>
  )
}
