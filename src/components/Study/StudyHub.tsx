// src/components/Study/StudyHub.tsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, BookOpen, BookMarked, Map, Calendar, Link, 
  ScrollText, Tag, Heart, Gamepad2, PenTool, Brain,
  Award, MessageSquare, ChevronLeft, Sun, Crown,
} from 'lucide-react'
import { useSubscription } from '../../hooks/useSubscription'
import { AIChat } from '../AI/AIChat'
import { TopicsList } from './TopicsList'
import { TopicDetail } from './TopicDetail'
import { StrongsConcordance } from './StrongsConcordance'
import { BibleMaps } from './BibleMaps'
import { TimelineSlider } from './TimelineSlider'
import { CrossReferences } from './CrossReferences'
import { ProphecyTracker } from './ProphecyTracker'
import { ProphecyDetail } from './ProphecyDetail'
import type { Prophecy } from '../../data/prophecies'
import { FirstMentionTracker } from './FirstMentionTracker'
import { EmotionHeatMap } from './EmotionHeatMap'
import { DevotionalPage } from '../Devotional/DevotionalPage'
import { SermonBuilder } from '../AI/SermonBuilder'
import { MemoryVerseList } from '../Memory/MemoryVerseList'
import { BadgeList } from '../Badges/BadgeList'
import { JournalList } from '../Journal/JournalList'
import { GameHub } from '../Games/GameHub'
import { UpgradePage } from '../UpgradePage'
import styles from './StudyHub.module.css'

type StudyView = 'hub' | 'ai' | 'topics' | 'topicDetail' | 'strongs' | 'maps' | 'timeline' | 'crossReferences' | 'prophecies' | 'prophecyDetail' | 'firstMentions' | 'emotions' | 'devotional' | 'games' | 'sermon' | 'memory' | 'badges' | 'journal' | 'upgrade'

interface StudyItem {
  id: string
  icon: React.ElementType
  label: string
  description: string
  view: StudyView
  isArena?: boolean
  isElder?: boolean
}

export const StudyHub: React.FC = () => {
  const [currentView, setCurrentView] = useState<StudyView>('hub')
  const [selectedTopic, setSelectedTopic] = useState<string>('')
  const [selectedProphecy, setSelectedProphecy] = useState<Prophecy | null>(null)
  const { tier } = useSubscription()

  const studyItems: StudyItem[] = [
    // Free — everyone
    { id: 'devotional', icon: Sun, label: 'Daily Devotional', description: 'Morning & Night prayers', view: 'devotional' },
    { id: 'topics', icon: BookOpen, label: 'Bible Topics', description: '500+ verses by topic', view: 'topics' },
    { id: 'maps', icon: Map, label: 'Bible Maps', description: 'Interactive biblical locations', view: 'maps' },
    { id: 'timeline', icon: Calendar, label: 'Timeline', description: '4004 BC → 100 AD', view: 'timeline' },
    { id: 'crossReferences', icon: Link, label: 'Cross References', description: 'Related verses', view: 'crossReferences' },
    { id: 'prophecies', icon: ScrollText, label: 'Prophecy Tracker', description: 'OT → NT fulfillment', view: 'prophecies' },
    { id: 'firstMentions', icon: Tag, label: 'First Mentions', description: 'First appearance of words', view: 'firstMentions' },
    { id: 'emotions', icon: Heart, label: 'Emotion Heat Map', description: 'Peace, Anger, Joy', view: 'emotions' },
    { id: 'games', icon: Gamepad2, label: 'Arena', description: 'Train. Remember. Grow.', view: 'games', isArena: true },
    { id: 'memory', icon: Brain, label: 'Memory Verses', description: 'Spaced repetition', view: 'memory' },
    { id: 'journal', icon: MessageSquare, label: 'Journal', description: 'Personal reflections', view: 'journal' },
    { id: 'badges', icon: Award, label: 'Achievements', description: 'Your progress', view: 'badges' },
    // Elder — AI + premium
    { id: 'ai', icon: Sparkles, label: 'Shepherd', description: 'Ask questions about Scripture', view: 'ai', isElder: true },
    { id: 'sermon', icon: PenTool, label: 'Sermon Builder', description: 'AI sermon outlines', view: 'sermon', isElder: true },
    { id: 'strongs', icon: BookMarked, label: "Strong's Concordance", description: 'Greek & Hebrew word studies', view: 'strongs', isElder: true },
  ]

  const handleSelect = (view: StudyView) => setCurrentView(view)

  const handleBack = () => {
    if (currentView === 'topicDetail' || currentView === 'prophecyDetail') {
      setCurrentView(currentView === 'topicDetail' ? 'topics' : 'prophecies')
    } else if (currentView === 'upgrade') {
      setCurrentView('hub')
    } else {
      setCurrentView('hub')
    }
  }

  const handleUpgrade = () => setCurrentView('upgrade')

  const handleSelectTopic = (topic: string) => { setSelectedTopic(topic); setCurrentView('topicDetail') }
  const handleSelectProphecy = (prophecy: Prophecy) => { setSelectedProphecy(prophecy); setCurrentView('prophecyDetail') }
  const handleJumpToVerse = (reference: string) => console.log('Jump to verse:', reference)

  const renderContent = () => {
    switch (currentView) {
      case 'hub':
        return (
          <>
            <div className={styles.grid}>
              {studyItems.map((item) => {
                const Icon = item.icon
                const isArena = item.isArena || false
                const isElder = item.isElder || false

                const isLocked = isElder && tier !== 'elder'
                
                const card = (
                  <motion.button
                    key={item.id}
                    className={`${styles.studyItem} ${isArena ? styles.arenaEntry : ''} ${isLocked ? styles.locked : ''}`}
                    onClick={() => isLocked ? handleUpgrade() : handleSelect(item.view)}
                    whileHover={isLocked ? {} : { y: -4, scale: 1.02 }}
                    whileTap={isLocked ? {} : { scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className={`${styles.iconWrapper} ${isArena ? styles.arenaIconWrapper : ''}`}>
                      <Icon size={isArena ? 28 : 24} className={isArena ? styles.arenaIcon : styles.icon} />
                    </div>
                    <span className={`${styles.label} ${isArena ? styles.arenaLabel : ''}`}>{item.label}</span>
                    <span className={styles.description}>{item.description}</span>
                    {isElder && <span className={styles.elderBadge}><Crown size={10} />Elder</span>}
                    {isArena && <span className={styles.arenaIndicator}><Crown size={12} />Enter</span>}
                    {isLocked && (
                      <span className={styles.lockedOverlay}>
                        <Crown size={16} style={{ color: '#c9a84c' }} />
                        <span style={{ fontSize: 10, color: '#c9a84c', fontWeight: 600 }}>Elder</span>
                      </span>
                    )}
                  </motion.button>
                )

                return card
              })}
            </div>

            {/* Free → Elder Upsell */}
            {tier === 'free' && (
              <motion.div
                className={styles.upsellBanner}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleUpgrade}
              >
                <div className={styles.upsellLeft}>
                  <Crown size={24} style={{ color: '#c9a84c' }} />
                  <div>
                    <span className={styles.upsellTitle}>Unlock Elder</span>
                    <span className={styles.upsellDesc}>AI Chat, Sermon Builder, Strong's Greek/Hebrew, full audio Bible + exclusive perks</span>
                  </div>
                </div>
                <div className={styles.upsellRight}>
                  <span className={styles.upsellPrice}>$4.99/yr</span>
                  <ChevronLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                </div>
              </motion.div>
            )}
          </>
        )

      case 'games': return <GameHub onBack={handleBack} />
      case 'ai': return <AIChat />
      case 'devotional': return <DevotionalPage />
      case 'topics': return <TopicsList onSelectTopic={handleSelectTopic} />
      case 'topicDetail': return <TopicDetail topicName={selectedTopic} onBack={handleBack} onSelectTopic={handleSelectTopic} />
      case 'strongs': return <StrongsConcordance />
      case 'maps': return <BibleMaps />
      case 'timeline': return <TimelineSlider onSelectVerse={handleJumpToVerse} />
      case 'crossReferences': return <CrossReferences onBack={handleBack} onSelectVerse={handleJumpToVerse} />
      case 'prophecies': return <ProphecyTracker onSelectProphecy={handleSelectProphecy} onJumpToVerse={handleJumpToVerse} />
      case 'prophecyDetail': return selectedProphecy && <ProphecyDetail prophecy={selectedProphecy} onBack={handleBack} onJumpToVerse={handleJumpToVerse} />
      case 'firstMentions': return <FirstMentionTracker onSelectVerse={handleJumpToVerse} />
      case 'emotions': return <EmotionHeatMap onSelectVerse={handleJumpToVerse} />
      case 'sermon': return <SermonBuilder />
      case 'memory': return <MemoryVerseList onSelectVerse={handleJumpToVerse} />
      case 'badges': return <BadgeList />
      case 'journal': return <JournalList />
      case 'upgrade': return <UpgradePage />
      default: return null
    }
  }

  const showBackButton = currentView !== 'hub'

  return (
    <div className={styles.container}>
      {showBackButton && currentView !== 'games' && (
        <div className={styles.backHeader}>
          <button className={styles.backBtn} onClick={handleBack}>
            <ChevronLeft size={20} />
          </button>
          <span className={styles.backTitle}>
            {currentView === 'ai' && 'Shepherd'}
            {currentView === 'devotional' && 'Daily Devotional'}
            {currentView === 'topics' && 'Bible Topics'}
            {currentView === 'strongs' && "Strong's Concordance"}
            {currentView === 'maps' && 'Bible Maps'}
            {currentView === 'timeline' && 'Timeline'}
            {currentView === 'crossReferences' && 'Cross References'}
            {currentView === 'prophecies' && 'Prophecy Tracker'}
            {currentView === 'firstMentions' && 'First Mentions'}
            {currentView === 'emotions' && 'Emotion Heat Map'}
            {currentView === 'sermon' && 'Sermon Builder'}
            {currentView === 'memory' && 'Memory Verses'}
            {currentView === 'badges' && 'Badges'}
            {currentView === 'journal' && 'Journal'}
            {currentView === 'upgrade' && 'Upgrade to Elder'}
            {currentView === 'topicDetail' && 'Topic Detail'}
            {currentView === 'prophecyDetail' && 'Prophecy Detail'}
          </span>
        </div>
      )}

      {!showBackButton && (
        <div className={styles.header}>
          <h2>Study</h2>
          <p className={styles.subtitle}>Explore the depths of Scripture</p>
        </div>
      )}

      <div className={styles.content}>{renderContent()}</div>
    </div>
  )
}
