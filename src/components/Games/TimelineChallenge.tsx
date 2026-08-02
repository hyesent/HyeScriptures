// src/components/Games/TimelineChallenge.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  Zap, 
  Crown,
  Target,
  Clock,
  Flame,
  Star,
  Lightbulb,
  BookOpen,
  XCircle,
  CheckCircle,
  Loader2,
  Calendar,
  ChevronRight,
  ChevronDown,
  GripVertical,
  History,
  Award
} from 'lucide-react';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './TimelineChallenge.module.css';

interface TimelineEvent {
  id: string;
  year: string;
  description: string;
  category: 'old-testament' | 'new-testament' | 'early-church';
  reference?: string;
}

interface TimelineChallengeProps {
  onBack: () => void;
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Timeline: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <line x1="6" y1="8" x2="6" y2="16" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="18" y1="8" x2="18" y2="16" />
    </svg>
  ),
  Event: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
};

// ============================================================
// DATA
// ============================================================

const TIMELINE_EVENTS: TimelineEvent[] = [
  // Old Testament
  { id: 'creation', year: '4000 BC', description: 'Creation of the world', category: 'old-testament', reference: 'Genesis 1' },
  { id: 'flood', year: '2300 BC', description: 'The Great Flood', category: 'old-testament', reference: 'Genesis 6-9' },
  { id: 'abraham', year: '2000 BC', description: 'Abraham called by God', category: 'old-testament', reference: 'Genesis 12' },
  { id: 'exodus', year: '1446 BC', description: 'Exodus from Egypt', category: 'old-testament', reference: 'Exodus 12' },
  { id: 'law', year: '1446 BC', description: 'Law given at Sinai', category: 'old-testament', reference: 'Exodus 20' },
  { id: 'conquest', year: '1406 BC', description: 'Conquest of Canaan', category: 'old-testament', reference: 'Joshua 1-12' },
  { id: 'judges', year: '1350 BC', description: 'Period of the Judges', category: 'old-testament', reference: 'Judges 2' },
  { id: 'saul', year: '1050 BC', description: 'Saul becomes first king', category: 'old-testament', reference: '1 Samuel 10' },
  { id: 'david', year: '1010 BC', description: 'David becomes king', category: 'old-testament', reference: '1 Samuel 16' },
  { id: 'solomon', year: '970 BC', description: 'Solomon builds the Temple', category: 'old-testament', reference: '1 Kings 6' },
  { id: 'divided', year: '930 BC', description: 'Kingdom divided', category: 'old-testament', reference: '1 Kings 12' },
  { id: 'exile', year: '586 BC', description: 'Babylonian exile', category: 'old-testament', reference: '2 Kings 25' },
  { id: 'return', year: '538 BC', description: 'Return from exile', category: 'old-testament', reference: 'Ezra 1' },
  { id: 'nehemiah', year: '445 BC', description: 'Nehemiah rebuilds walls', category: 'old-testament', reference: 'Nehemiah 2' },
  { id: 'malachi', year: '430 BC', description: 'Malachi\'s prophecy', category: 'old-testament', reference: 'Malachi 1' },
  
  // New Testament
  { id: 'john-baptist', year: '6 BC', description: 'John the Baptist born', category: 'new-testament', reference: 'Luke 1' },
  { id: 'jesus-birth', year: '4 BC', description: 'Jesus Christ born', category: 'new-testament', reference: 'Matthew 1' },
  { id: 'jesus-baptism', year: 'AD 27', description: 'Jesus baptized', category: 'new-testament', reference: 'Matthew 3' },
  { id: 'jesus-ministry', year: 'AD 28-30', description: 'Jesus\' ministry', category: 'new-testament', reference: 'Matthew 4-28' },
  { id: 'crucifixion', year: 'AD 30', description: 'Crucifixion and resurrection', category: 'new-testament', reference: 'Matthew 27-28' },
  { id: 'pentecost', year: 'AD 30', description: 'Pentecost - Church begins', category: 'new-testament', reference: 'Acts 2' },
  { id: 'paul-conversion', year: 'AD 35', description: 'Paul\'s conversion', category: 'new-testament', reference: 'Acts 9' },
  
  // Early Church
  { id: 'jerusalem-council', year: 'AD 49', description: 'Jerusalem Council', category: 'early-church', reference: 'Acts 15' },
  { id: 'paul-missionary', year: 'AD 46-57', description: 'Paul\'s missionary journeys', category: 'early-church', reference: 'Acts 13-21' },
  { id: 'paul-epistles', year: 'AD 50-67', description: 'Paul\'s epistles written', category: 'early-church' },
  { id: 'rome-persecution', year: 'AD 64', description: 'Persecution in Rome', category: 'early-church' },
  { id: 'jerusalem-destruction', year: 'AD 70', description: 'Jerusalem destroyed', category: 'early-church' },
  { id: 'john-revelation', year: 'AD 95', description: 'John writes Revelation', category: 'early-church', reference: 'Revelation 1' }
];

// ============================================================
// TIMELINE CHALLENGE COMPONENT
// ============================================================

const TimelineChallenge: React.FC<TimelineChallengeProps> = ({ onBack }) => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [shuffledEvents, setShuffledEvents] = useState<TimelineEvent[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [streak, setStreak] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [eventCount, setEventCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [level, setLevel] = useState(1);

  // Get events based on difficulty
  const getEventsForDifficulty = useCallback(() => {
    let filtered = [...TIMELINE_EVENTS];
    
    if (difficulty === 'easy') {
      filtered = filtered.slice(0, 10);
    } else if (difficulty === 'medium') {
      filtered = filtered.slice(0, 20);
    }
    
    return filtered;
  }, [difficulty]);

  const startGame = () => {
    const selectedEvents = getEventsForDifficulty();
    const shuffled = [...selectedEvents].sort(() => Math.random() - 0.5);
    
    setEvents(selectedEvents);
    setShuffledEvents(shuffled);
    setGameStarted(true);
    setGameOver(false);
    setCompleted(false);
    setScore(0);
    setTime(0);
    setStreak(0);
    setXpEarned(0);
    setWrongAttempts(0);
    setLevel(1);
    setEventCount(0);
    setSelectedEvent(null);
    setBestScore(gameEngine.getBestScore('timeline'));
    
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  const handleEventSelect = (event: TimelineEvent) => {
    if (gameOver || completed) return;
    
    setSelectedEvent(event);
    const currentIndex = eventCount;
    const correctEvent = events[currentIndex];
    
    if (event.id === correctEvent.id) {
      setEventCount(prev => prev + 1);
      setStreak(prev => prev + 1);
      const points = 10 + (streak * 2);
      setScore(prev => prev + points);
      
      const baseXP = 15;
      const streakBonus = Math.min(streak * 5, 25);
      setXpEarned(prev => prev + baseXP + streakBonus);
      
      if (eventCount + 1 === events.length) {
        setCompleted(true);
        setGameOver(true);
        if (timerInterval) {
          clearInterval(timerInterval);
          setTimerInterval(null);
        }
        const timeBonus = Math.max(0, 50 - time);
        setScore(prev => prev + timeBonus);
        gameEngine.recordAnswer('timeline', true, 'mixed');
      }
    } else {
      setWrongAttempts(prev => prev + 1);
      setStreak(0);
      // Remove wrong event from shuffled
      setShuffledEvents(prev => prev.filter(e => e.id !== event.id));
    }
  };

  const getTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = events.length > 0 ? (eventCount / events.length) * 100 : 0;

  // ============================================================
  // START SCREEN
  // ============================================================
  if (!gameStarted) {
    return (
      <div className={styles.container}>
        <div className={styles.ambientGlow} />
        
        <div className={styles.content}>
          <button className={styles.backBtn} onClick={onBack}>
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <motion.div 
            className={styles.startCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: TIMING.NORMAL / 1000 }}
          >
            <div className={styles.startIcon}>
              <Icons.Timeline />
            </div>
            <h2 className={styles.startTitle}>Timeline Challenge</h2>
            <p className={styles.startSubtitle}>Place biblical events in chronological order</p>
            <p className={styles.startCount}>
              {TIMELINE_EVENTS.length} events available
            </p>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Difficulty</span>
              <div className={styles.chipGroup}>
                {[
                  { id: 'easy', label: 'Easy', count: '10 events' },
                  { id: 'medium', label: 'Medium', count: '20 events' },
                  { id: 'hard', label: 'Hard', count: 'All events' }
                ].map((diff) => (
                  <button
                    key={diff.id}
                    className={`${styles.chip} ${difficulty === diff.id ? styles.active : ''}`}
                    onClick={() => setDifficulty(diff.id as 'easy' | 'medium' | 'hard')}
                  >
                    {diff.label}
                    <span className={styles.chipCount}>{diff.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.startBtn}
              onClick={startGame}
            >
              Begin Timeline
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // GAME OVER SCREEN
  // ============================================================
  if (gameOver) {
    const isNewBest = score >= bestScore && score > 0;
    const accuracy = eventCount + wrongAttempts > 0 
      ? Math.round((eventCount / (eventCount + wrongAttempts)) * 100) 
      : 0;
    
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
            <motion.span 
              className={styles.resultsEmoji}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            >
              {completed ? '🏆' : '💪'}
            </motion.span>

            <h2 className={styles.resultsTitle}>
              {completed ? 'Timeline Complete!' : 'Keep Practicing'}
            </h2>
            {completed && (
              <p className={styles.resultsSubtitle}>
                Completed in {getTimeString(time)}
              </p>
            )}

            {isNewBest && (
              <motion.div 
                className={styles.newBest}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Star size={14} />
                New Best Score!
              </motion.div>
            )}

            <div className={styles.resultsStats}>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{score}</span>
                <span className={styles.resultsStatLabel}>Score</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{eventCount}/{events.length}</span>
                <span className={styles.resultsStatLabel}>Placed</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{accuracy}%</span>
                <span className={styles.resultsStatLabel}>Accuracy</span>
              </div>
            </div>

            <motion.div 
              className={styles.xpEarned}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className={styles.xpEmoji}>✨</span>
              <span className={styles.xpValue}>+{xpEarned} XP</span>
            </motion.div>

            <div className={styles.resultsButtons}>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.primary}
                onClick={startGame}
              >
                New Timeline
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.secondary}
                onClick={onBack}
              >
                Menu
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // ACTIVE GAME
  // ============================================================
  const currentEvent = events[eventCount];

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <button className={styles.backBtn} onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <div className={styles.gameCard}>
          {/* Header */}
          <div className={styles.gameHeader}>
            <div>
              <span className={styles.gameModeLabel}>
                <History size={16} />
                Timeline
              </span>
              <span className={styles.gameProgress}>
                Level {level} • {eventCount} of {events.length} placed
              </span>
            </div>
            <div className={styles.gameStats}>
              <span className={styles.gameScore}>
                <Trophy size={14} />
                {score}
              </span>
              {streak > 1 && (
                <span className={styles.streakBadge}>
                  <Flame size={12} />
                  {streak}x
                </span>
              )}
              <span className={styles.gameTime}>
                <Clock size={14} />
                {getTimeString(time)}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressTrack}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: TIMING.LARGE / 1000 }}
            />
          </div>

          {/* Next Event to Place */}
          {currentEvent && (
            <div className={styles.targetBox}>
              <p className={styles.targetLabel}>
                <span className={styles.targetIcon}>
                  <Calendar size={14} />
                </span>
                Place this event in order
              </p>
              <div className={styles.currentEventDisplay}>
                <div className={styles.currentEventYear}>{currentEvent.year}</div>
                <div className={styles.currentEventDescription}>{currentEvent.description}</div>
                {currentEvent.reference && (
                  <div className={styles.currentEventReference}>
                    <BookOpen size={12} />
                    {currentEvent.reference}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Available Events to Place */}
          <div className={styles.eventsGrid}>
            {shuffledEvents.map((event) => (
              <motion.button
                key={event.id}
                className={styles.eventBtn}
                onClick={() => handleEventSelect(event)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.eventYear}>{event.year}</span>
                <span className={styles.eventDescription}>{event.description}</span>
              </motion.button>
            ))}
          </div>

          {/* Stats */}
          <div className={styles.bottomStats}>
            <span>Remaining: {shuffledEvents.length}</span>
            <span>Wrong attempts: {wrongAttempts}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineChallenge;