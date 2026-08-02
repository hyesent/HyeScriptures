import React, { useState } from 'react'
import { useBadges } from '../../hooks/useBadges'
import { badges as allBadges, getBadgesByCategory } from '../../data/badges'
import { 
  Award, 
  Trophy, 
  Target, 
  BookOpen, 
  Calendar, 
  Filter,
  CheckCircle,
  Lock,
  TrendingUp,
  Flame,
  Zap,
  Star
} from 'lucide-react'
import styles from './BadgeList.module.css'

export const BadgeList: React.FC = () => {
  const { badges, totalBadges } = useBadges()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'streak', 'verses', 'plans', 'achievement']
  const categoryLabels: Record<string, string> = {
    all: 'All',
    streak: 'Streak',
    verses: 'Verses',
    plans: 'Plans',
    achievement: 'Achievement'
  }

  const categoryIcons: Record<string, React.ElementType> = {
    all: Award,
    streak: Flame,
    verses: BookOpen,
    plans: Calendar,
    achievement: Trophy
  }

  const filteredBadges = selectedCategory === 'all' 
    ? allBadges 
    : getBadgesByCategory(selectedCategory as any)

  const getCategoryEmoji = (category: string) => {
    const emojis: Record<string, string> = {
      streak: '🔥',
      verses: '📖',
      plans: '📅',
      achievement: '🏆'
    }
    return emojis[category] || '📌'
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Achievements</h2>
        <p className={styles.subtitle}>
          {totalBadges} of {allBadges.length} badges earned
        </p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{totalBadges}</span>
          <span className={styles.statLabel}>Earned</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{allBadges.length - totalBadges}</span>
          <span className={styles.statLabel}>Locked</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>
            {Math.round((totalBadges / allBadges.length) * 100)}%
          </span>
          <span className={styles.statLabel}>Progress</span>
        </div>
      </div>

      <div className={styles.filters}>
        {categories.map(cat => {
          const Icon = categoryIcons[cat] || Award
          return (
            <button
              key={cat}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <Icon size={14} />
              {categoryLabels[cat] || cat}
            </button>
          )
        })}
      </div>

      <div className={styles.grid}>
        {filteredBadges.map(badge => {
          const earned = badges.some(b => b.id === badge.id)
          const Icon = earned ? Star : Lock

          return (
            <div
              key={badge.id}
              className={`${styles.badgeCard} ${earned ? styles.earned : styles.locked}`}
              style={{ borderColor: earned ? badge.color : 'var(--border-light)' }}
            >
              <div 
                className={styles.badgeIcon} 
                style={{ 
                  background: earned ? badge.color : 'var(--bg-hover)',
                  color: earned ? 'white' : 'var(--text-muted)'
                }}
              >
                <Icon size={32} className={styles.badgeEmoji} />
              </div>
              <h3 className={styles.badgeName}>{badge.name}</h3>
              <p className={styles.badgeDescription}>{badge.description}</p>
              <div className={styles.badgeRequirement}>
                <Target size={14} />
                {badge.requirement} {badge.category === 'streak' ? 'days' : 'required'}
              </div>
              {earned ? (
                <span className={styles.earnedBadge}>
                  <CheckCircle size={14} />
                  Earned
                </span>
              ) : (
                <span className={styles.lockedBadge}>
                  <Lock size={14} />
                  Locked
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}