// src/components/Games/MissionaryJourney.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Compass, 
  ChevronRight, 
  ChevronLeft,
  Star,
  Trophy,
  Users,
  BookOpen,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCw,
  Home,
  Target,
  Award,
  Crown,
  Calendar,
  Clock,
  Sparkles,
  Route,
  Navigation,
  Flag,
  Globe,
  User,
  Cross,
  Lightbulb,
  BarChart,
  Settings,
  Play,
  Menu,
  Zap,
  Flame,
  TrendingUp,
  Shield
} from 'lucide-react'
import { 
  getAllJourneys, 
  getJourney, 
  getJourneyProgress,
  getTotalLocations,
  getLocationByIndex,
  getJourneyTotalQuestions,
  getJourneyDifficulty,
  type Journey,
  type JourneyLocation,
  type JourneyQuestion
} from '../../data/games/missionary-journey'
import { gameEngine } from '../../lib/games/game-engine'
import { TIMING, EASING } from '../../lib/animations'
import styles from './MissionaryJourney.module.css'

// ============================================================
// SVG ICONS - Premium Map Icons
// ============================================================

const MapIcons = {
  City: ({ size = 24, color = '#D4AF37', active = false }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      {active && <circle cx="12" cy="10" r="3" fill={color} />}
      {!active && <circle cx="12" cy="10" r="3" />}
    </svg>
  ),
  Completed: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#5FAF75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Current: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="#D4AF37" stroke="none" />
    </svg>
  ),
  Locked: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Traveler: ({ size = 28, color = '#D4AF37' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 4 6 12 6 12s6-8 6-12c0-3.5-2.5-6-6-6z" />
      <circle cx="12" cy="8" r="2.5" />
      <path d="M9 14L12 17L15 14" />
    </svg>
  ),
  Distance: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  Milestone: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  FlagIcon: ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V3" />
      <path d="M4 3h12l-2 5 2 5H4" />
    </svg>
  ),
  Scroll: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="16" x2="16" y2="16" />
      <line x1="8" y1="12" x2="12" y2="12" />
    </svg>
  ),
  LocationPin: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Fire: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 6 6 10 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2-8-6-12z" />
      <path d="M12 18c-2.2 0-4-1.8-4-4 0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4z" />
    </svg>
  ),
  MapPinned: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  CompassIcon: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10-4-10-8-10-8 4-8 10 8 10 8 10z" />
      <path d="M12 6v12" />
      <path d="M12 6l-4 6 4 6 4-6-4-6z" />
    </svg>
  ),
  Trophy: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  ),
  MapDecoration: () => (
    <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }}>
      <path d="M0 100 Q50 80 100 100 T200 100 T300 100 T400 100" stroke="#D4AF37" strokeWidth="1" fill="none" />
      <path d="M0 120 Q50 100 100 120 T200 120 T300 120 T400 120" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
      <circle cx="50" cy="30" r="15" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="150" cy="60" r="10" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="300" cy="40" r="20" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  ),
}

// ============================================================
// PREMIUM LOADING ANIMATION
// ============================================================

const MapLoadingAnimation = () => (
  <div className={styles.mapLoading}>
    <motion.div 
      className={styles.mapLoadingPulse}
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <Compass size={32} />
    </motion.div>
    <p className={styles.mapLoadingText}>Charting the journey...</p>
  </div>
)

// ============================================================
// MAIN COMPONENT
// ============================================================

interface MissionaryJourneyProps {
  onBack: () => void
}

const MissionaryJourney: React.FC<MissionaryJourneyProps> = ({ onBack }) => {
  // Journey Selection State
  const [journeyId, setJourneyId] = useState<string>('first-journey')
  const [allJourneys, setAllJourneys] = useState<Journey[]>([])
  const [showJourneySelect, setShowJourneySelect] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // Game State
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [journeyComplete, setJourneyComplete] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [xpEarned, setXpEarned] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [pathProgress, setPathProgress] = useState(0)
  const [showJourneyStats, setShowJourneyStats] = useState(false)
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([])
  const [hintsRemaining, setHintsRemaining] = useState(3)
  const [showHint, setShowHint] = useState(false)
  const [hintText, setHintText] = useState('')
  const [totalWrong, setTotalWrong] = useState(0)
  const [isReviewMode, setIsReviewMode] = useState(false)
  const [reviewQuestions, setReviewQuestions] = useState<Array<{ question: JourneyQuestion; userAnswer: number; isCorrect: boolean }>>([])
  const [completionBadges, setCompletionBadges] = useState<string[]>([])
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0)
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  
  // Timer ref
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const journey = getJourney(journeyId)
  const currentLocation = journey?.locations[currentLocationIndex]
  const currentQuestions = currentLocation?.questions || []
  const currentQuestion = currentQuestions[currentQuestionIndex]
  const isLastLocation = currentLocationIndex === (journey?.locations.length || 0) - 1
  const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1
  const totalLocations = journey?.locations.length || 0
  const progress = totalLocations > 1 ? ((currentLocationIndex) / (totalLocations - 1)) * 100 : 0
  const distanceTraveled = currentLocationIndex * 50
  const remainingCities = totalLocations - currentLocationIndex - 1

  // Load all journeys on mount
  useEffect(() => {
    const journeys = getAllJourneys()
    setAllJourneys(journeys)
  }, [])

  // Load best score on mount
  useEffect(() => {
    setBestScore(gameEngine.getBestScore('missionary-journey'))
  }, [])

  // Timer
  useEffect(() => {
    if (gameStarted && !journeyComplete) {
      setStartTime(new Date())
      setIsTimeRunning(true)
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1)
      }, 1000)
    } else if (journeyComplete || !gameStarted) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      setIsTimeRunning(false)
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [gameStarted, journeyComplete])

  // Particles
  useEffect(() => {
    if (gameStarted) {
      const newParticles = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2,
        speed: 0.5 + Math.random() * 1.5
      }))
      setParticles(newParticles)
    }
  }, [gameStarted])

  // Path progress animation
  useEffect(() => {
    if (gameStarted) {
      const target = totalLocations > 1 ? (currentLocationIndex / (totalLocations - 1)) * 100 : 0
      setPathProgress(prev => {
        const diff = target - prev
        return prev + diff * 0.1
      })
    }
  }, [currentLocationIndex, gameStarted, totalLocations])

  // Save progress to localStorage
  useEffect(() => {
    if (gameStarted && journey && !journeyComplete) {
      const progressData = {
        journeyId: journey.id,
        locationIndex: currentLocationIndex,
        questionIndex: currentQuestionIndex,
        score,
        correctAnswers,
        completed: journeyComplete,
        streak,
        bestStreak,
        totalWrong,
        xpEarned,
        elapsedTime
      }
      localStorage.setItem(`missionary-journey-${journey.id}`, JSON.stringify(progressData))
    }
  }, [gameStarted, journey, currentLocationIndex, currentQuestionIndex, score, correctAnswers, journeyComplete, streak, bestStreak, totalWrong, xpEarned, elapsedTime])

  // Load saved progress
  const loadSavedProgress = useCallback(() => {
    if (!journey) return false
    
    const saved = localStorage.getItem(`missionary-journey-${journey.id}`)
    if (saved) {
      try {
        const data = JSON.parse(saved)
        if (!data.completed) {
          setCurrentLocationIndex(data.locationIndex || 0)
          setCurrentQuestionIndex(data.questionIndex || 0)
          setScore(data.score || 0)
          setCorrectAnswers(data.correctAnswers || 0)
          setStreak(data.streak || 0)
          setBestStreak(data.bestStreak || 0)
          setTotalWrong(data.totalWrong || 0)
          setXpEarned(data.xpEarned || 0)
          setElapsedTime(data.elapsedTime || 0)
          return true
        }
      } catch (e) {
        console.log('Error loading progress:', e)
      }
    }
    return false
  }, [journey])

  const startGame = () => {
    setIsLoading(true)
    setGameStarted(true)
    setCurrentLocationIndex(0)
    setCurrentQuestionIndex(0)
    setScore(0)
    setCorrectAnswers(0)
    setJourneyComplete(false)
    setStreak(0)
    setBestStreak(0)
    setXpEarned(0)
    setTotalWrong(0)
    setPathProgress(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setShowHint(false)
    setHintsRemaining(3)
    setTotalQuestionsAnswered(0)
    setElapsedTime(0)
    setReviewQuestions([])
    setIsReviewMode(false)
    setCompletionBadges([])
    setBestScore(gameEngine.getBestScore('missionary-journey'))
    
    setTimeout(() => setIsLoading(false), 300)
  }

  const continueGame = () => {
    if (loadSavedProgress()) {
      setGameStarted(true)
    } else {
      startGame()
    }
  }

  const getTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return
    if (!currentQuestion) return

    setSelectedAnswer(index)
    const correct = index === currentQuestion.correct
    setShowExplanation(true)
    setTotalQuestionsAnswered(prev => prev + 1)

    // Record review data
    setReviewQuestions(prev => [...prev, {
      question: currentQuestion,
      userAnswer: index,
      isCorrect: correct
    }])

    if (correct) {
      setCorrectAnswers(prev => prev + 1)
      setStreak(prev => {
        const newStreak = prev + 1
        if (newStreak > bestStreak) setBestStreak(newStreak)
        return newStreak
      })
      const bonus = Math.min(streak, 5)
      const points = 10 + bonus
      setScore(prev => prev + points)
      
      const baseXP = 12
      const streakXP = Math.min(streak * 2, 10)
      setXpEarned(prev => prev + baseXP + streakXP)
      gameEngine.addXP(baseXP + streakXP, 'missionary-journey')
    } else {
      setStreak(0)
      setTotalWrong(prev => prev + 1)
    }

    gameEngine.recordAnswer('missionary-journey', correct, 'mixed')
  }

  const handleHint = () => {
    if (hintsRemaining <= 0 || !currentQuestion) return
    
    const correctAnswer = currentQuestion.options[currentQuestion.correct]
    const hints = [
      `💡 The correct answer is related to ${correctAnswer.toLowerCase()}`,
      `📖 Think about what you know about ${journey?.keyPeople?.[0] || 'Paul'}'s journey`,
      `🔍 The answer can be found in the book of ${journey?.keyBook || 'Acts'}`,
      `✝️ Consider what happened at this location in the Bible`,
      `📜 This event is recorded in ${journey?.chapters || 'the Scriptures'}`
    ]
    
    setHintText(hints[Math.floor(Math.random() * hints.length)])
    setShowHint(true)
    setHintsRemaining(prev => prev - 1)
    
    // Auto-hide hint after 5 seconds
    setTimeout(() => {
      setShowHint(false)
    }, 5000)
  }

  const nextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setShowHint(false)
    } else {
      if (!isLastLocation) {
        setCurrentLocationIndex(prev => prev + 1)
        setCurrentQuestionIndex(0)
        setSelectedAnswer(null)
        setShowExplanation(false)
        setShowHint(false)
      } else {
        // Journey Complete!
        setJourneyComplete(true)
        const completionBonus = 50
        const timeBonus = Math.max(0, 30 - Math.floor(elapsedTime / 60))
        const streakBonus = bestStreak * 2
        const finalBonus = completionBonus + timeBonus + streakBonus
        
        setXpEarned(prev => prev + finalBonus)
        gameEngine.addXP(finalBonus, 'journey-complete')
        gameEngine.recordAnswer('missionary-journey', true, 'mixed')
        
        // Check for badges
        const badges: string[] = []
        const totalQuestions = journey?.totalQuestions || 0
        if (totalQuestions > 0 && correctAnswers >= totalQuestions * 0.9) badges.push('🏆 Scholar')
        if (bestStreak >= 5) badges.push('🔥 Hot Streak')
        if (totalWrong === 0) badges.push('💯 Perfect')
        if (elapsedTime < 120) badges.push('⚡ Speed Runner')
        setCompletionBadges(badges)
      }
    }
  }

  const getLocationStatus = (index: number): 'completed' | 'current' | 'locked' => {
    if (index < currentLocationIndex) return 'completed'
    if (index === currentLocationIndex) return 'current'
    return 'locked'
  }

  const toggleJourneyStats = () => {
    setShowJourneyStats(prev => !prev)
  }

  const toggleJourneySelect = () => {
    setShowJourneySelect(prev => !prev)
  }

  const selectJourney = (id: string) => {
    setIsLoading(true)
    setJourneyId(id)
    setShowJourneySelect(false)
    // Reset game state for new journey
    setGameStarted(false)
    setJourneyComplete(false)
    setCurrentLocationIndex(0)
    setCurrentQuestionIndex(0)
    setScore(0)
    setCorrectAnswers(0)
    setStreak(0)
    setBestStreak(0)
    setXpEarned(0)
    setTotalWrong(0)
    setElapsedTime(0)
    setReviewQuestions([])
    setIsReviewMode(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setHintsRemaining(3)
    setCompletionBadges([])
    setPathProgress(0)
    
    setTimeout(() => setIsLoading(false), 300)
  }

  const toggleReviewMode = () => {
    setIsReviewMode(prev => !prev)
  }

  // ============================================================
  // START SCREEN
  // ============================================================
  if (!gameStarted) {
    return (
      <div className={styles.container}>
        <div className={styles.ambientGlow} />
        <div className={styles.content}>
          <button className={styles.backBtn} onClick={onBack}>
            <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
            Back
          </button>

          <motion.div 
            className={styles.startCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: TIMING.NORMAL / 1000 }}
          >
            <div className={styles.startIcon}>
              <MapIcons.Traveler size={36} />
            </div>
            <h1 className={styles.startTitle}>{journey?.name}</h1>
            <p className={styles.startDescription}>{journey?.description}</p>

            {/* Journey Selector */}
            <div className={styles.journeySelector}>
              <button 
                className={styles.journeySelectBtn}
                onClick={toggleJourneySelect}
              >
                <Globe size={16} />
                {journey?.name || 'Select Journey'}
                <ChevronRight size={16} style={{ transform: showJourneySelect ? 'rotate(90deg)' : 'rotate(0deg)' }} />
              </button>
              <AnimatePresence>
                {showJourneySelect && (
                  <motion.div 
                    className={styles.journeySelectDropdown}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {allJourneys.map(j => (
                      <button
                        key={j.id}
                        className={`${styles.journeySelectItem} ${j.id === journeyId ? styles.active : ''}`}
                        onClick={() => selectJourney(j.id)}
                      >
                        <span className={styles.journeySelectName}>{j.name}</span>
                        <span className={styles.journeySelectLocations}>{j.locations.length} cities</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stats */}
            <div className={styles.startStats}>
              <div className={styles.startStat}>
                <span className={styles.startStatValue}>{journey?.locations.length}</span>
                <span className={styles.startStatLabel}><MapIcons.LocationPin size={12} /> Cities</span>
              </div>
              <div className={styles.startStat}>
                <span className={styles.startStatValue}>
                  {journey?.totalQuestions || journey?.locations.reduce((sum, loc) => sum + loc.questions.length, 0) || 0}
                </span>
                <span className={styles.startStatLabel}><BookOpen size={12} /> Questions</span>
              </div>
              <div className={styles.startStat}>
                <span className={styles.startStatValue}>
                  {journey?.totalDistance || '~1,400'}
                </span>
                <span className={styles.startStatLabel}><MapIcons.Distance size={12} /> Miles</span>
              </div>
            </div>

            {/* Difficulty Badge */}
            {journey && (
              <div className={styles.startDifficulty}>
                <span className={`${styles.difficultyBadge} ${styles[getJourneyDifficulty(journey.id)]}`}>
                  {getJourneyDifficulty(journey.id).charAt(0).toUpperCase() + getJourneyDifficulty(journey.id).slice(1)}
                </span>
                <span className={styles.difficultyLabel}>Difficulty</span>
              </div>
            )}

            {/* Key People */}
            {journey?.keyPeople && journey.keyPeople.length > 0 && (
              <div className={styles.startPeople}>
                <span className={styles.startPeopleLabel}><Users size={12} /> Key Figures:</span>
                <div className={styles.startPeopleList}>
                  {journey.keyPeople.map((person, idx) => (
                    <span key={idx} className={styles.startPerson}>
                      <User size={12} /> {person}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className={styles.startButtons}>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.startBtn}
                onClick={startGame}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 size={18} className={styles.spinning} />
                ) : (
                  <>
                    <Play size={18} />
                    Begin Journey
                  </>
                )}
              </motion.button>
              
              {localStorage.getItem(`missionary-journey-${journeyId}`) && (
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={styles.continueBtn}
                  onClick={continueGame}
                >
                  <RotateCw size={18} />
                  Continue
                </motion.button>
              )}
            </div>

            <p className={styles.startHint}>Answer questions correctly to travel to the next city</p>
          </motion.div>
        </div>
      </div>
    )
  }

  // ============================================================
  // COMPLETE SCREEN
  // ============================================================
  if (journeyComplete) {
    const totalQuestions = journey?.totalQuestions || 0
    const accuracy = totalQuestionsAnswered > 0 
      ? Math.round((correctAnswers / totalQuestionsAnswered) * 100) 
      : 0
    const isNewBest = score >= bestScore && score > 0
    
    return (
      <div className={styles.container}>
        <div className={styles.ambientGlow} />
        <div className={styles.content}>
          <motion.div 
            className={styles.resultsCard}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: TIMING.NORMAL / 1000 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className={styles.resultsIcon}
            >
              <MapIcons.Trophy size={48} />
            </motion.div>
            <h1 className={styles.resultsTitle}>Journey Complete! 🎉</h1>
            <p className={styles.resultsSubtitle}>
              You've traveled with {journey?.keyPeople?.[0] || 'the missionaries'} and spread the Gospel!
            </p>
            
            {isNewBest && (
              <motion.div className={styles.newBest} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
                <Crown size={14} /> New Best Score!
              </motion.div>
            )}

            {/* Completion Badges */}
            {completionBadges.length > 0 && (
              <div className={styles.completionBadges}>
                {completionBadges.map((badge, index) => (
                  <motion.span 
                    key={index} 
                    className={styles.badge}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            )}

            <div className={styles.resultsStats}>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{score}</span>
                <span className={styles.resultsStatLabel}><MapIcons.Trophy size={12} /> Score</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{accuracy}%</span>
                <span className={styles.resultsStatLabel}><Target size={12} /> Accuracy</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{correctAnswers}/{totalQuestions}</span>
                <span className={styles.resultsStatLabel}><CheckCircle size={12} /> Correct</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{bestStreak}</span>
                <span className={styles.resultsStatLabel}><Flame size={12} /> Best Streak</span>
              </div>
            </div>

            <div className={styles.resultsJourneyInfo}>
              <span><MapIcons.Distance size={16} /> {journey?.totalDistance || '~1,400'} miles traveled</span>
              <span><MapIcons.Milestone size={16} /> {currentLocationIndex + 1} cities visited</span>
              <span><Clock size={16} /> {getTimeString(elapsedTime)}</span>
            </div>

            <motion.div className={styles.xpEarned} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <span className={styles.xpEmoji}><Award size={18} /></span>
              <span className={styles.xpValue}>+{xpEarned} XP</span>
            </motion.div>

            {/* Review Mode Toggle */}
            {reviewQuestions.length > 0 && (
              <button 
                className={styles.reviewToggle}
                onClick={toggleReviewMode}
              >
                <BookOpen size={14} />
                {isReviewMode ? 'Hide Review' : 'Review Answers'}
              </button>
            )}

            {/* Review Questions */}
            <AnimatePresence>
              {isReviewMode && reviewQuestions.length > 0 && (
                <motion.div 
                  className={styles.reviewContainer}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {reviewQuestions.map((item, index) => (
                    <div key={index} className={`${styles.reviewItem} ${item.isCorrect ? styles.reviewCorrect : styles.reviewWrong}`}>
                      <span className={styles.reviewIndex}>Q{index + 1}</span>
                      <span className={styles.reviewQuestion}>{item.question.question}</span>
                      <span className={styles.reviewResult}>
                        {item.isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className={styles.resultsButtons}>
              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={styles.primary} onClick={startGame}>
                <RotateCw size={18} /> Play Again
              </motion.button>
              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={styles.secondary} onClick={onBack}>
                <Home size={18} /> Menu
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // ============================================================
  // ACTIVE GAME
  // ============================================================
  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.ambientGlow} />
        <div className={styles.content}>
          <MapLoadingAnimation />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      {/* Ambient Particles */}
      <div className={styles.particlesContainer}>
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: 0.2 + Math.random() * 0.3
            }}
            animate={{
              y: ['0%', '-100%'],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10 + particle.speed * 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>
      
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <button onClick={onBack} className={styles.headerBackBtn}>
            <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} /> Back
          </button>
          <div className={styles.headerInfo}>
            <button className={styles.headerStatsBtn} onClick={toggleJourneyStats} title="Journey Stats">
              <BarChart size={16} />
            </button>
            <button className={styles.headerStatsBtn} onClick={toggleJourneySelect} title="Change Journey">
              <Globe size={16} />
            </button>
            <span className={styles.headerScore}><Star size={14} /> {score}</span>
            <span className={styles.headerLocation}>
              <MapIcons.LocationPin size={14} /> {currentLocationIndex + 1}/{totalLocations}
            </span>
            <span className={styles.headerTime}>
              <Clock size={14} /> {getTimeString(elapsedTime)}
            </span>
          </div>
        </div>

        {/* Journey Select Dropdown */}
        <AnimatePresence>
          {showJourneySelect && (
            <motion.div 
              className={styles.journeySelectDropdown}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {allJourneys.map(j => (
                <button
                  key={j.id}
                  className={`${styles.journeySelectItem} ${j.id === journeyId ? styles.active : ''}`}
                  onClick={() => selectJourney(j.id)}
                >
                  <span className={styles.journeySelectName}>{j.name}</span>
                  <span className={styles.journeySelectLocations}>{j.locations.length} cities</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Journey Stats Popup */}
        <AnimatePresence>
          {showJourneyStats && (
            <motion.div 
              className={styles.journeyStatsPopup}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className={styles.journeyStatsContent}>
                <div className={styles.journeyStat}><MapIcons.Distance size={14} /> <span>{Math.max(0, distanceTraveled)} miles traveled</span></div>
                <div className={styles.journeyStat}><MapIcons.Milestone size={14} /> <span>{currentLocationIndex + 1} of {totalLocations} cities</span></div>
                <div className={styles.journeyStat}><Target size={14} /> <span>{Math.max(0, remainingCities)} cities remaining</span></div>
                <div className={styles.journeyStat}><CheckCircle size={14} /> <span>{correctAnswers} correct answers</span></div>
                <div className={styles.journeyStat}><Flame size={14} /> <span>{streak} streak</span></div>
                <div className={styles.journeyStat}><Lightbulb size={14} /> <span>{hintsRemaining} hints remaining</span></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map Container */}
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            {/* Background decorative lines */}
            <MapIcons.MapDecoration />

            {/* Route Path */}
            <svg className={styles.routePath} viewBox="0 0 400 200" preserveAspectRatio="none">
              <path 
                d="M40 100 C80 80, 120 60, 160 80 C200 100, 240 60, 280 80 C320 100, 360 80, 380 100" 
                stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.1"
              />
              <motion.path 
                d="M40 100 C80 80, 120 60, 160 80 C200 100, 240 60, 280 80 C320 100, 360 80, 380 100" 
                stroke="#D4AF37" strokeWidth="2.5" fill="none" 
                strokeDasharray="4 8"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 400 - (pathProgress / 100) * 400 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </svg>

            {/* Compass Rose */}
            <div className={styles.compassRose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" opacity="0.3" />
                <polygon points="12 2 15 9 22 9 16 14 18 21 12 17 6 21 8 14 2 9 9 9 12 2" />
                <circle cx="12" cy="12" r="2" fill="#D4AF37" opacity="0.5" />
              </svg>
            </div>

            {/* Markers */}
            {journey?.locations.map((location, index) => {
              const status = getLocationStatus(index)
              const isCurrent = status === 'current'
              const isCompleted = status === 'completed'
              return (
                <div
                  key={location.id}
                  className={`${styles.mapMarker} ${styles[status]}`}
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`
                  }}
                >
                  <div className={`${styles.markerDot} ${isCurrent ? styles.pulsing : ''}`}>
                    {isCompleted && <MapIcons.Completed size={16} />}
                    {isCurrent && <MapIcons.Current size={20} />}
                    {status === 'locked' && <MapIcons.Locked size={16} />}
                  </div>
                  <span className={styles.markerLabel}>
                    {location.name}
                    {isCurrent && <span className={styles.markerCurrentIndicator}>📍</span>}
                  </span>
                </div>
              )
            })}

            {/* Traveler */}
            <motion.div
              className={styles.traveler}
              style={{
                left: `${currentLocation?.coordinates.x || 35}%`,
                top: `${currentLocation?.coordinates.y || 25}%`
              }}
              animate={{
                scale: [1, 1.15, 1],
                y: [0, -4, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'easeInOut'
              }}
            >
              <MapIcons.Traveler size={28} />
              <div className={styles.travelerGlow} />
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressBar}>
            <div className={styles.progressTrack}>
              <motion.div 
                className={styles.progressFill}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, progress)}%` }}
                transition={{ duration: TIMING.LARGE / 1000 }}
              />
            </div>
            <div className={styles.progressLabel}>
              <span>{Math.round(progress)}% Complete</span>
              <span>{currentLocationIndex + 1} of {totalLocations}</span>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className={styles.locationInfo}>
          <div className={styles.locationHeader}>
            <div className={styles.locationIconWrapper}>
              <span className={styles.locationEmoji}>{currentLocation?.emoji || '📍'}</span>
            </div>
            <div className={styles.locationHeaderContent}>
              <h2 className={styles.locationName}>{currentLocation?.name}</h2>
              <div className={styles.locationMeta}>
                <span className={styles.locationRegion}>{currentLocation?.region}</span>
                {currentLocation?.keyEvent && (
                  <span className={styles.locationEvent}>
                    <MapIcons.FlagIcon size={12} /> {currentLocation.keyEvent}
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className={styles.locationDescription}>{currentLocation?.description}</p>
          {currentLocation?.people && currentLocation.people.length > 0 && (
            <div className={styles.locationPeople}>
              <span className={styles.locationPeopleLabel}><Users size={12} /> People:</span>
              {currentLocation.people.map((person, idx) => (
                <span key={idx} className={styles.locationPerson}>{person}</span>
              ))}
            </div>
          )}
          {currentLocation?.trivia && (
            <div className={styles.locationTrivia}>
              <span className={styles.triviaIcon}>💡</span> <p>{currentLocation.trivia}</p>
            </div>
          )}
          {currentLocation?.verse && (
            <div className={styles.locationVerse}>
              <MapIcons.Scroll size={14} /> <span>{currentLocation.verse}</span>
            </div>
          )}
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLocationIndex}-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: TIMING.NORMAL / 1000 }}
            className={styles.questionCard}
          >
            <div className={styles.questionHeader}>
              <span className={styles.questionNumber}>
                Question {currentQuestionIndex + 1}/{currentQuestions.length}
              </span>
              <div className={styles.questionBadges}>
                {streak > 1 && (
                  <span className={styles.streakBadge}>
                    <MapIcons.Fire size={14} /> {streak} streak
                  </span>
                )}
                {hintsRemaining > 0 && (
                  <button 
                    className={styles.hintBtn}
                    onClick={handleHint}
                    disabled={showHint}
                  >
                    <Lightbulb size={14} /> {hintsRemaining}
                  </button>
                )}
              </div>
            </div>
            
            {showHint && hintText && (
              <motion.div 
                className={styles.hintBanner}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Lightbulb size={16} /> {hintText}
              </motion.div>
            )}

            <p className={styles.questionText}>{currentQuestion?.question}</p>
            <div className={styles.options}>
              {currentQuestion?.options.map((option, index) => {
                let optionClass = styles.option
                if (selectedAnswer === null) optionClass += ` ${styles.optionAvailable}`
                else if (index === currentQuestion.correct) optionClass += ` ${styles.optionCorrect}`
                else if (selectedAnswer === index && index !== currentQuestion.correct) optionClass += ` ${styles.optionWrong}`
                else optionClass += ` ${styles.optionDisabled}`
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={optionClass}
                    whileHover={selectedAnswer === null ? { x: 4 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  >
                    <span className={styles.optionLetter}>{String.fromCharCode(65 + index)}</span>
                    <span className={styles.optionText}>{option}</span>
                    {selectedAnswer !== null && index === currentQuestion.correct && (
                      <CheckCircle size={20} className={styles.optionCheck} />
                    )}
                    {selectedAnswer === index && index !== currentQuestion.correct && (
                      <XCircle size={20} className={styles.optionX} />
                    )}
                  </motion.button>
                )
              })}
            </div>
            
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${styles.explanation} ${
                  selectedAnswer === currentQuestion.correct ? styles.explanationCorrect : styles.explanationWrong
                }`}
              >
                <p>{currentQuestion?.explanation}</p>
              </motion.div>
            )}
            
            {showExplanation && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.nextBtn}
                onClick={nextQuestion}
              >
                {isLastQuestion && isLastLocation ? (
                  <>Complete Journey <Flag size={18} /></>
                ) : isLastQuestion ? (
                  <>Next City <MapIcons.LocationPin size={18} /></>
                ) : (
                  <>Next Question <ChevronRight size={18} /></>
                )}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Journey Progress Footer */}
        <div className={styles.journeyProgress}>
          <span><MapIcons.LocationPin size={14} /> {currentLocationIndex + 1}/{totalLocations} cities</span>
          <span><CheckCircle size={14} /> {correctAnswers} correct</span>
          <span><MapIcons.Distance size={14} /> {Math.max(0, distanceTraveled)}mi</span>
          <span><Flame size={14} /> {streak} streak</span>
        </div>
      </div>
    </div>
  )
}

export default MissionaryJourney
