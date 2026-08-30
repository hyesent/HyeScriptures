// src/components/Games/TimelineChallenge.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  History,
  Filter,
  SkipForward,
  EyeOff
} from 'lucide-react';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import { 
  timelineEvents, 
  getEventsByCategory,
  getCategories,
  getDifficultyLevels,
  type TimelineEvent 
} from '../../data/games/timeline';
import styles from './TimelineChallenge.module.css';

interface TimelineChallengeProps {
  onBack: () => void;
}

type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

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
};

// ============================================================
// TIMELINE CHALLENGE COMPONENT
// ============================================================

const TimelineChallenge: React.FC<TimelineChallengeProps> = ({ onBack }) => {
  // Game State
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
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [eventCount, setEventCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [maxAttempts, setMaxAttempts] = useState(2);
  const [level, setLevel] = useState(1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');
  const [showSkip, setShowSkip] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [correctAnimation, setCorrectAnimation] = useState(false);
  const [wrongAnimation, setWrongAnimation] = useState(false);
  const [placedEvents, setPlacedEvents] = useState<TimelineEvent[]>([]);
  const [showTimelinePreview, setShowTimelinePreview] = useState(false);

  // Get events based on difficulty and category
  const getFilteredEvents = useCallback(() => {
    let filtered = selectedCategory === 'all' 
      ? [...timelineEvents] 
      : getEventsByCategory(selectedCategory);
    
    const difficultyMap: Record<Difficulty, number> = {
      easy: 10,
      medium: 20,
      hard: 30,
      expert: 50
    };
    
    const count = difficultyMap[difficulty] || 10;
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }, [difficulty, selectedCategory]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        setTimerInterval(null);
      }
    };
  }, [timerInterval]);

  const startGame = () => {
    const selectedEvents = getFilteredEvents();
    
    // Sort events chronologically (oldest first) for the correct order
    const sorted = [...selectedEvents].sort((a, b) => a.year - b.year);
    // Shuffle for display
    const shuffled = [...selectedEvents].sort(() => Math.random() - 0.5);
    
    setEvents(sorted);
    setShuffledEvents(shuffled);
    setPlacedEvents([]);
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
    setTotalCorrect(0);
    setTotalWrong(0);
    setMaxAttempts(difficulty === 'easy' ? 3 : difficulty === 'medium' ? 2 : 1);
    setIsCorrect(false);
    setIsWrong(false);
    setShowHint(false);
    setShowSkip(false);
    setCorrectAnimation(false);
    setWrongAnimation(false);
    setShowTimelinePreview(false);
    setBestScore(gameEngine.getBestScore('timeline'));
    
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  // Get year display string (ONLY used for hints/reveals, NOT in gameplay)
  const getYearDisplay = (year: number): string => {
    if (year < 0) {
      return `${Math.abs(year)} BC`;
    }
    return `AD ${year}`;
  };

  // Generate a HINT that DOES NOT reveal the year
  const getHintForEvent = (event: TimelineEvent): string => {
    const index = events.indexOf(event);
    const total = events.length;
    
    // Calculate position without revealing exact year
    let position = '';
    if (index < total / 3) {
      position = 'early';
    } else if (index < total * 2 / 3) {
      position = 'middle';
    } else {
      position = 'late';
    }
    
    // Get the event before and after (if they exist)
    const prevEvent = index > 0 ? events[index - 1] : null;
    const nextEvent = index < total - 1 ? events[index + 1] : null;
    
    const hints = [
      `This event is in the ${position} part of biblical history`,
      `This event is from the ${event.category.replace('-', ' ')} period`,
      `${event.people && event.people.length > 0 ? `Key figure${event.people.length > 1 ? 's' : ''}: ${event.people.slice(0, 3).join(', ')}` : ''}`,
    ];
    
    // Add a contextual hint without revealing the year
    if (prevEvent) {
      hints.push(`This event happens after ${prevEvent.event}`);
    }
    if (nextEvent) {
      hints.push(`This event happens before ${nextEvent.event}`);
    }
    
    return hints[Math.floor(Math.random() * hints.length)];
  };

  const handleEventSelect = (event: TimelineEvent) => {
    if (gameOver || completed) return;
    if (isCorrect || isWrong) return;
    if (wrongAttempts >= maxAttempts) {
      setShowSkip(true);
      return;
    }
    
    const currentIndex = eventCount;
    const correctEvent = events[currentIndex];
    
    if (event.id === correctEvent.id) {
      // ✅ CORRECT!
      setIsCorrect(true);
      setCorrectAnimation(true);
      setShowSkip(false);
      
      setPlacedEvents(prev => [...prev, event]);
      setEventCount(prev => prev + 1);
      setTotalCorrect(prev => prev + 1);
      setStreak(prev => prev + 1);
      setWrongAttempts(0);
      
      const points = 10 + (streak * 2);
      setScore(prev => prev + points);
      
      const baseXP = 15;
      const streakBonus = Math.min(streak * 5, 25);
      setXpEarned(prev => prev + baseXP + streakBonus);
      
      // Remove the correct event from shuffled
      setShuffledEvents(prev => prev.filter(e => e.id !== event.id));
      
      // Level up every 5 correct
      if ((totalCorrect + 1) % 5 === 0) {
        setLevel(prev => prev + 1);
      }
      
      // Clear animation after delay
      setTimeout(() => {
        setCorrectAnimation(false);
        setIsCorrect(false);
      }, 600);
      
      // Check if complete
      if (eventCount + 1 === events.length) {
        handleGameComplete();
      }
    } else {
      // ❌ WRONG!
      setIsWrong(true);
      setWrongAnimation(true);
      setWrongAttempts(prev => prev + 1);
      setTotalWrong(prev => prev + 1);
      setStreak(0);
      
      // Check if max attempts reached
      if (wrongAttempts + 1 >= maxAttempts) {
        setShowSkip(true);
      }
      
      setTimeout(() => {
        setWrongAnimation(false);
        setIsWrong(false);
      }, 600);
    }
  };

  // Skip current event (with penalty)
  const handleSkipEvent = () => {
    if (gameOver || completed) return;
    
    const currentIndex = eventCount;
    const correctEvent = events[currentIndex];
    
    // Add the correct event (with penalty)
    setPlacedEvents(prev => [...prev, correctEvent]);
    setEventCount(prev => prev + 1);
    setScore(prev => Math.max(0, prev - 5));
    setWrongAttempts(0);
    setShowSkip(false);
    
    // Remove the correct event from shuffled
    setShuffledEvents(prev => prev.filter(e => e.id !== correctEvent.id));
    
    // Check if complete
    if (eventCount + 1 === events.length) {
      handleGameComplete();
    }
  };

  // Use hint (shows contextual info, NOT the year)
  const useHint = () => {
    const currentIndex = eventCount;
    const correctEvent = events[currentIndex];
    
    if (correctEvent) {
      setHintText(getHintForEvent(correctEvent));
      setShowHint(true);
      // Penalty: -3 points
      setScore(prev => Math.max(0, prev - 3));
      
      setTimeout(() => {
        setShowHint(false);
      }, 6000);
    }
  };

  const handleGameComplete = () => {
    setCompleted(true);
    setGameOver(true);
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    
    const timeBonus = Math.max(0, 100 - time);
    const accuracyBonus = totalCorrect + totalWrong > 0 
      ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 10) 
      : 0;
    const finalScore = score + timeBonus + accuracyBonus;
    setScore(finalScore);
    
    gameEngine.recordAnswer('timeline', true, 'mixed');
    if (finalScore > bestScore) setBestScore(finalScore);
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
    const categories = getCategories();
    const difficulties = getDifficultyLevels();
    
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
              {timelineEvents.length} events available
            </p>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Category</span>
              <div className={styles.chipGroup}>
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    className={`${styles.chip} ${selectedCategory === cat.value ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    {cat.label}
                    {cat.value !== 'all' && (
                      <span className={styles.chipCount}>
                        {timelineEvents.filter(e => e.category === cat.value).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Difficulty</span>
              <div className={styles.chipGroup}>
                {difficulties.map((diff) => (
                  <button
                    key={diff.value}
                    className={`${styles.chip} ${difficulty === diff.value ? styles.active : ''}`}
                    onClick={() => setDifficulty(diff.value as Difficulty)}
                  >
                    {diff.label}
                    <span className={styles.chipCount}>{diff.count} events</span>
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
    const accuracy = totalCorrect + totalWrong > 0 
      ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) 
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
                <span className={styles.resultsStatValue}>{totalCorrect}/{events.length}</span>
                <span className={styles.resultsStatLabel}>Placed</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{accuracy}%</span>
                <span className={styles.resultsStatLabel}>Accuracy</span>
              </div>
            </div>

            {/* ✅ NEW: Show the full timeline with years (only on game over) */}
            {completed && (
              <div className={styles.timelineReveal}>
                <h4 className={styles.timelineRevealTitle}>
                  <Clock size={14} /> Complete Timeline
                </h4>
                <div className={styles.timelineRevealList}>
                  {events.map((event, index) => (
                    <div key={event.id} className={styles.timelineRevealItem}>
                      <span className={styles.timelineRevealYear}>
                        {getYearDisplay(event.year)}
                      </span>
                      <span className={styles.timelineRevealEvent}>
                        {event.event || event.description}
                      </span>
                      {index < events.length - 1 && (
                        <span className={styles.timelineRevealArrow}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                {selectedCategory !== 'all' && (
                  <span className={styles.categoryBadge}>
                    {selectedCategory.replace('-', ' ')}
                  </span>
                )}
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

          {/* Stats bar */}
          <div className={styles.statsBar}>
            <span>✅ Correct: {totalCorrect}</span>
            <span>❌ Wrong: {totalWrong}</span>
            <span>🎯 Attempts: {wrongAttempts}/{maxAttempts}</span>
          </div>

          {/* Next Event to Place - NO YEAR SHOWN! */}
          {currentEvent && (
            <div className={styles.targetBox}>
              <p className={styles.targetLabel}>
                <span className={styles.targetIcon}>
                  <Calendar size={14} />
                </span>
                Which event comes next in chronological order?
                {showHint && (
                  <span className={styles.hintBadge}>
                    <Lightbulb size={12} /> {hintText}
                  </span>
                )}
              </p>
              <div className={styles.currentEventDisplay}>
                {/* ✅ NO YEAR shown here! */}
                <div className={styles.currentEventDescription}>
                  {currentEvent.event || currentEvent.description}
                </div>
                {currentEvent.reference && (
                  <div className={styles.currentEventReference}>
                    <BookOpen size={12} />
                    {currentEvent.reference}
                  </div>
                )}
                {currentEvent.people && currentEvent.people.length > 0 && (
                  <div className={styles.currentEventPeople}>
                    👤 {currentEvent.people.join(', ')}
                  </div>
                )}
                {/* ✅ Year is hidden - shows as "???" */}
                <div className={styles.currentEventYearHidden}>
                  <EyeOff size={12} /> Year hidden
                </div>
              </div>

              {/* Feedback */}
              {correctAnimation && (
                <div className={styles.correctFeedback}>
                  <CheckCircle size={16} /> Correct! +{10 + (streak * 2)} pts
                </div>
              )}
              {wrongAnimation && (
                <div className={styles.wrongFeedback}>
                  <XCircle size={16} /> Wrong! {maxAttempts - wrongAttempts} attempts left
                </div>
              )}
              {showSkip && (
                <div className={styles.skipContainer}>
                  <button
                    onClick={handleSkipEvent}
                    className={styles.skipBtn}
                  >
                    <SkipForward size={14} />
                    Skip (-5 pts)
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className={styles.actionBar}>
            {!showHint && currentEvent && (
              <button
                onClick={useHint}
                className={styles.hintBtn}
                disabled={isCorrect || isWrong || wrongAttempts >= maxAttempts}
              >
                <Lightbulb size={14} />
                Hint (-3 pts)
              </button>
            )}
            {showHint && (
              <button
                onClick={() => setShowHint(false)}
                className={styles.hintCloseBtn}
              >
                ✕ Close Hint
              </button>
            )}
          </div>

          {/* Available Events to Place - NO YEARS SHOWN! */}
          <div className={styles.eventsGrid}>
            {shuffledEvents.length === 0 && !completed && (
              <div className={styles.noEvents}>
                <Loader2 size={24} className={styles.spinning} />
                Loading events...
              </div>
            )}
            {shuffledEvents.map((event) => (
              <motion.button
                key={event.id}
                className={`${styles.eventBtn} ${isCorrect || isWrong ? styles.disabled : ''}`}
                onClick={() => handleEventSelect(event)}
                whileHover={{ scale: isCorrect || isWrong ? 1 : 1.03 }}
                whileTap={{ scale: isCorrect || isWrong ? 1 : 0.95 }}
                disabled={isCorrect || isWrong}
              >
                {/* ✅ NO YEAR shown here! */}
                <span className={styles.eventDescription}>
                  {event.event || event.description}
                </span>
                {event.people && event.people.length > 0 && (
                  <span className={styles.eventPeople}>
                    👤 {event.people.slice(0, 2).join(', ')}
                    {event.people.length > 2 && ' +'}
                  </span>
                )}
                <span className={styles.eventYearHidden}>
                  ❓ Year hidden
                </span>
              </motion.button>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className={styles.bottomStats}>
            <span>Remaining: {shuffledEvents.length}</span>
            <span>Wrong attempts: {wrongAttempts}</span>
            {eventCount > 0 && (
              <span>Placed: {eventCount}</span>
            )}
          </div>

          {/* ✅ Show placed events count as mini timeline */}
          {placedEvents.length > 0 && (
            <div className={styles.placedTimeline}>
              <p className={styles.placedTimelineLabel}>
                ✅ Placed: {placedEvents.length} of {events.length}
              </p>
              <div className={styles.placedTimelineItems}>
                {placedEvents.slice(-5).map((event, index) => (
                  <span key={event.id} className={styles.placedEvent}>
                    {event.event || event.description}
                    {index < placedEvents.length - 1 && ' → '}
                  </span>
                ))}
                {placedEvents.length > 5 && (
                  <span className={styles.placedMore}>... (+{placedEvents.length - 5} more)</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineChallenge;
