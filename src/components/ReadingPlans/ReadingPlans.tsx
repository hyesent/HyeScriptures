// src/components/Reading/ReadingPlans.tsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  ChevronRight, 
  BookOpen, 
  Flame,
  Trophy,
  Target,
  Clock,
  ArrowRight,
  Compass,
  Star,
  Crown,
  ScrollText,
  Sparkles,
  Sun,
  Moon,
  Cloud,
  Wind,
  MapPin,
  Route
} from 'lucide-react'
import { 
  readingPlans, 
  getProgressPercentage, 
  getStreak,
  getCompletedCount,
  initializePlan,
  getPlanProgress
} from '../../lib/reading-plans'
import { TIMING, EASING } from '../../lib/animations'
import styles from './ReadingPlans.module.css'

// ============================================================
// PLAN CONFIGURATIONS
// ============================================================

interface PlanConfig {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  gradient: string
  color: string
  bgImage: string
  atmosphere: 'sunrise' | 'sapphire' | 'emerald' | 'royal' | 'amber'
}

const PLAN_CONFIGS: Record<string, PlanConfig> = {
  '30-days': {
    id: '30-days',
    name: 'The Gospel Journey',
    description: 'Walk through the life of Christ in 30 days',
    icon: <Sun size={24} />,
    gradient: 'linear-gradient(135deg, #D4AF37, #b8941a, #8a6f0a)',
    color: '#D4AF37',
    bgImage: 'url("/images/gospel-journey-bg.jpg")',
    atmosphere: 'sunrise'
  },
  '90-days': {
    id: '90-days',
    name: 'Through the Bible',
    description: 'Journey through the entire Bible in 90 days',
    icon: <Compass size={24} />,
    gradient: 'linear-gradient(135deg, #4a7a8a, #2a4a5a, #1a2a3a)',
    color: '#4a7a8a',
    bgImage: 'url("/images/through-bible-bg.jpg")',
    atmosphere: 'sapphire'
  },
  '1-year': {
    id: '1-year',
    name: 'The Yearly Pilgrimage',
    description: 'Walk through the Bible in one year',
    icon: <Star size={24} />,
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a, #0a7a2a)',
    color: '#22c55e',
    bgImage: 'url("/images/yearly-pilgrimage-bg.jpg")',
    atmosphere: 'emerald'
  },
  'psalms': {
    id: 'psalms',
    name: 'Psalms Journey',
    description: 'Pray through the Psalms in 60 days',
    icon: <ScrollText size={24} />,
    gradient: 'linear-gradient(135deg, #8a5a9a, #6a3a7a, #4a2a5a)',
    color: '#8a5a9a',
    bgImage: 'url("/images/psalms-journey-bg.jpg")',
    atmosphere: 'royal'
  },
  'proverbs': {
    id: 'proverbs',
    name: 'Proverbs Wisdom',
    description: 'Gain wisdom through Proverbs in 31 days',
    icon: <Sparkles size={24} />,
    gradient: 'linear-gradient(135deg, #D4A84A, #c8982a, #b8881a)',
    color: '#D4A84A',
    bgImage: 'url("/images/proverbs-wisdom-bg.jpg")',
    atmosphere: 'amber'
  }
}

// ============================================================
// ATMOSPHERE BACKGROUNDS
// ============================================================

const AtmosphereBackground: React.FC<{ type: string }> = ({ type }) => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 3,
    speed: 0.2 + Math.random() * 0.5,
    delay: Math.random() * 5
  }))

  const rays = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    angle: (i / 6) * 360,
    delay: i * 0.5
  }))

  if (type === 'sunrise') {
    return (
      <div className={styles.atmosphereSunrise}>
        <div className={styles.sunGlow} />
        <div className={styles.sunRays}>
          {rays.map((ray) => (
            <div
              key={ray.id}
              className={styles.ray}
              style={{
                transform: `rotate(${ray.angle}deg)`,
                animationDelay: `${ray.delay}s`
              }}
            />
          ))}
        </div>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${10 + p.speed * 5}s`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
    )
  }

  if (type === 'sapphire') {
    return (
      <div className={styles.atmosphereSapphire}>
        <div className={styles.sapphireGlow} />
        <div className={styles.sapphireWaves}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={styles.wave}
              style={{
                animationDelay: `${i * 2}s`,
                opacity: 0.3 - i * 0.08
              }}
            />
          ))}
        </div>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.starParticle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${15 + p.speed * 5}s`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
    )
  }

  // Default: gentle glow
  return (
    <div className={styles.atmosphereDefault}>
      <div className={styles.defaultGlow} />
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${10 + p.speed * 5}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  )
}

// ============================================================
// MAIN COMPONENT
// ============================================================

interface ReadingPlansProps {
  onSelectPlan: (planId: string) => void
}

export const ReadingPlans: React.FC<ReadingPlansProps> = ({ onSelectPlan }) => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handlePlanClick = (planId: string) => {
    initializePlan(planId)
    setSelectedPlan(planId)
    onSelectPlan(planId)
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Sacred Journeys</h1>
          <p className={styles.headerSubtitle}>
            Choose a path to walk through Scripture
          </p>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.headerStat}>
            <span className={styles.headerStatValue}>12</span>
            <span className={styles.headerStatLabel}>Journeys</span>
          </div>
          <div className={styles.headerStat}>
            <span className={styles.headerStatValue}>1,189</span>
            <span className={styles.headerStatLabel}>Chapters</span>
          </div>
          <div className={styles.headerStat}>
            <span className={styles.headerStatValue}>31,102</span>
            <span className={styles.headerStatLabel}>Verses</span>
          </div>
        </div>
      </div>

      {/* Journey Grid */}
      <div className={styles.grid}>
        {readingPlans.map((plan, index) => {
          const config = PLAN_CONFIGS[plan.id] || PLAN_CONFIGS['30-days']
          const percentage = getProgressPercentage(plan.id)
          const completed = getCompletedCount(plan.id)
          const streak = getStreak(plan.id)
          const isHovered = hoveredPlan === plan.id
          const isComplete = percentage === 100

          return (
            <motion.div
              key={plan.id}
              className={`${styles.planCard} ${isHovered ? styles.hovered : ''} ${isComplete ? styles.completed : ''}`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              onClick={() => handlePlanClick(plan.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.08,
                duration: TIMING.NORMAL / 1000,
                ease: EASING.SMOOTH
              }}
              style={{
                '--plan-color': config.color,
                '--plan-gradient': config.gradient
              } as React.CSSProperties}
            >
              {/* Atmosphere Background */}
              <div className={styles.planAtmosphere}>
                <AtmosphereBackground type={config.atmosphere} />
              </div>

              {/* Plan Card Content */}
              <div className={styles.planContent}>
                <div className={styles.planHeader}>
                  <div className={styles.planIcon} style={{ color: config.color }}>
                    {config.icon}
                  </div>
                  {isComplete && (
                    <div className={styles.completedBadge}>
                      <Crown size={12} />
                      Complete
                    </div>
                  )}
                </div>

                <h3 className={styles.planName}>{config.name}</h3>
                <p className={styles.planDescription}>{config.description}</p>

                <div className={styles.planStats}>
                  <div className={styles.planStat}>
                    <span className={styles.planStatValue}>{plan.totalDays}</span>
                    <span className={styles.planStatLabel}>Days</span>
                  </div>
                  <div className={styles.planStat}>
                    <span className={styles.planStatValue}>{plan.chaptersPerDay}</span>
                    <span className={styles.planStatLabel}>Chapters/Day</span>
                  </div>
                </div>

                {/* Progress Path */}
                <div className={styles.progressPath}>
                  <div className={styles.pathTrack}>
                    <div 
                      className={styles.pathFill}
                      style={{ width: `${percentage}%`, background: config.gradient }}
                    />
                    <div 
                      className={styles.pathMarker}
                      style={{ left: `${percentage}%`, background: config.color }}
                    >
                      {percentage > 0 && (
                        <span className={styles.pathMarkerLabel}>{Math.round(percentage)}%</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Path Nodes */}
                  <div className={styles.pathNodes}>
                    {Array.from({ length: Math.min(plan.totalDays, 12) }, (_, i) => {
                      const day = Math.floor((i / 11) * (plan.totalDays - 1)) + 1
                      const isCompleted = completed >= day
                      const isCurrent = !isCompleted && completed + 1 === day
                      return (
                        <div
                          key={i}
                          className={`${styles.pathNode} ${isCompleted ? styles.completedNode : ''} ${isCurrent ? styles.currentNode : ''}`}
                          style={{
                            backgroundColor: isCompleted ? config.color : 'rgba(255,255,255,0.06)',
                            borderColor: isCompleted ? config.color : 'rgba(255,255,255,0.06)'
                          }}
                        />
                      )
                    })}
                  </div>
                </div>

                {/* Streak & Progress Info */}
                <div className={styles.planFooter}>
                  {streak > 0 && (
                    <div className={styles.streakBadge}>
                      <Flame size={14} />
                      <span>{streak} day{streak > 1 ? 's' : ''}</span>
                    </div>
                  )}
                  <div className={styles.progressText}>
                    <span>{completed} of {plan.totalDays} days</span>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`${styles.actionBtn} ${isComplete ? styles.completedAction : ''}`}
                  style={{
                    background: isComplete ? 'rgba(255,255,255,0.06)' : config.gradient,
                    color: isComplete ? '#94A3B8' : '#07111F'
                  }}
                >
                  {isComplete ? (
                    'Completed ✓'
                  ) : percentage === 0 ? (
                    'Begin Journey'
                  ) : (
                    'Continue Journey'
                  )}
                  {!isComplete && <ArrowRight size={16} />}
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
