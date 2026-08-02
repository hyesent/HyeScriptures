// src/components/Games/MemoryVerse.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Brain, 
  Clock, 
  Star, 
  Trophy, 
  RefreshCw,
  Layers,
  Zap,
  Target,
  Crown,
  Flame,
  CheckCircle,
  XCircle,
  Loader2
} from 'lucide-react';
import { getMemoryPairs, generateMemoryPairs } from '../../data/games/memory-verse';
import type { MemoryPair } from '../../data/games/memory-verse';
import { useBible } from '../../hooks/useBible';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './MemoryVerse.module.css';

interface MemoryVerseProps {
  onBack: () => void;
}

type Difficulty = 'easy' | 'medium' | 'hard';

const difficultyMap = { easy: 4, medium: 6, hard: 8 };
const difficultyLabels = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Memory: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M6 4l2 2" />
      <path d="M18 4l-2 2" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="M6 20l2-2" />
      <path d="M18 20l-2-2" />
      <path d="M12 18v4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  CardBack: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="12" y2="18" />
    </svg>
  ),
  Match: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
};

export const MemoryVerse: React.FC<MemoryVerseProps> = ({ onBack }) => {
  const { bible } = useBible();
  const [cards, setCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [bestScore, setBestScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('memory_verse_best');
    if (saved) setBestScore(parseInt(saved));
  }, []);

  const startGame = () => {
    const pairCount = difficultyMap[difficulty];
    
    let pairs: MemoryPair[];
    if (bible && bible.verses && bible.verses.length > 0) {
      pairs = generateMemoryPairs(bible, pairCount);
    } else {
      pairs = getMemoryPairs(pairCount);
    }
    
    const deck: any[] = [];
    pairs.forEach((pair, index) => {
      deck.push({ 
        id: `${pair.id}-verse`, 
        pairId: index, 
        text: pair.verse, 
        isVerse: true 
      });
      deck.push({ 
        id: `${pair.id}-ref`, 
        pairId: index, 
        text: pair.reference, 
        isVerse: false 
      });
    });
    
    const shuffled = deck.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setAttempts(0);
    setScore(0);
    setTime(0);
    setStreak(0);
    setXpEarned(0);
    setMatchedPairs(0);
    setIsFlipping(false);
    setGameStarted(true);
    setGameOver(false);
    setBestScore(gameEngine.getBestScore('memory-verse'));
    
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => setTime(prev => prev + 1), 1000);
    setTimerInterval(interval);
  };

  const handleCardClick = (index: number) => {
    if (isFlipping) return;
    if (flipped.length === 2) return;
    if (matched.includes(index)) return;
    if (flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setIsFlipping(true);
      setAttempts(prev => prev + 1);
      
      const card1 = cards[newFlipped[0]];
      const card2 = cards[newFlipped[1]];

      if (card1.pairId === card2.pairId && card1.id !== card2.id) {
        // Match!
        setMatched(prev => [...prev, ...newFlipped]);
        setMatchedPairs(prev => prev + 1);
        setStreak(prev => prev + 1);
        const points = 10 + (streak * 2);
        setScore(prev => prev + points);
        setFlipped([]);
        setIsFlipping(false);
        
        const baseXP = 12;
        const streakBonus = Math.min(streak * 3, 15);
        setXpEarned(prev => prev + baseXP + streakBonus);

        if (matchedPairs + 1 === cards.length / 2) {
          // Game complete
          setGameOver(true);
          if (timerInterval) clearInterval(timerInterval);
          
          const bonus = Math.max(0, 30 - Math.floor(time / 10));
          const finalScore = score + points + bonus;
          setScore(finalScore);
          setXpEarned(prev => prev + bonus);
          
          if (finalScore > bestScore) {
            setBestScore(finalScore);
            localStorage.setItem('memory_verse_best', finalScore.toString());
          }
          
          gameEngine.recordAnswer('memory-verse', true, 'mixed');
        }
      } else {
        // No match
        setStreak(0);
        setTimeout(() => {
          setFlipped([]);
          setIsFlipping(false);
        }, 800);
      }
    }
  };

  const getTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    if (timerInterval) clearInterval(timerInterval);
    setGameStarted(false);
    setGameOver(false);
    setCards([]);
    setFlipped([]);
    setMatched([]);
    setAttempts(0);
    setScore(0);
    setTime(0);
    setStreak(0);
    setXpEarned(0);
    setMatchedPairs(0);
    setIsFlipping(false);
  };

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
              <Icons.Memory />
            </div>
            <h2 className={styles.startTitle}>Memory Verse</h2>
            <p className={styles.startSubtitle}>Match verses to their references</p>
            
            <div className={styles.startSection}>
              <span className={styles.startLabel}>Difficulty</span>
              <div className={styles.chipGroup}>
                {Object.entries(difficultyMap).map(([key, value]) => (
                  <button
                    key={key}
                    className={`${styles.chip} ${difficulty === key ? styles.active : ''}`}
                    onClick={() => setDifficulty(key as Difficulty)}
                  >
                    {difficultyLabels[key as Difficulty]}
                    <span className={styles.chipCount}>{value} pairs</span>
                  </button>
                ))}
              </div>
            </div>
            
            {bestScore > 0 && (
              <div className={styles.bestScore}>
                <Trophy size={16} />
                Best Score: {bestScore}
              </div>
            )}
            
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.startBtn}
              onClick={startGame}
            >
              <Brain size={18} />
              Begin Memory Challenge
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
    const totalPairs = cards.length / 2;
    const isNewBest = score >= bestScore && score > 0;
    const accuracy = Math.round((matchedPairs / totalPairs) * 100);
    
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
              🏆
            </motion.span>

            <h2 className={styles.resultsTitle}>Memory Master!</h2>
            <p className={styles.resultsSubtitle}>
              Found all pairs in {getTimeString(time)}
            </p>
            
            {isNewBest && (
              <motion.div 
                className={styles.newBest}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Crown size={14} />
                New Record!
              </motion.div>
            )}
            
            <div className={styles.resultsStats}>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{score}</span>
                <span className={styles.resultsStatLabel}>Score</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{attempts}</span>
                <span className={styles.resultsStatLabel}>Attempts</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{accuracy}%</span>
                <span className={styles.resultsStatLabel}>Accuracy</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{getTimeString(time)}</span>
                <span className={styles.resultsStatLabel}>Time</span>
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
                <RefreshCw size={16} />
                Play Again
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.secondary}
                onClick={handleReset}
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
  const totalPairs = cards.length / 2;
  const progress = (matchedPairs / totalPairs) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <div className={styles.gameCard}>
          {/* Header */}
          <div className={styles.gameHeader}>
            <div>
              <span className={styles.gameModeLabel}>
                <Brain size={16} />
                Memory Verse
              </span>
              <span className={styles.gameProgress}>
                {difficultyLabels[difficulty]} • {matchedPairs} of {totalPairs} pairs
              </span>
            </div>
            <div className={styles.gameStats}>
              <span className={styles.gameScore}>
                <Star size={14} />
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
              <span className={styles.gameAttempts}>
                <Target size={14} />
                {attempts}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressTrack}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: TIMING.NORMAL / 1000 }}
            />
          </div>

          {/* Card Grid */}
          <div className={styles.cardGrid}>
            {cards.map((card, index) => {
              const isFlipped = flipped.includes(index) || matched.includes(index);
              const isMatched = matched.includes(index);
              
              return (
                <motion.button
                  key={card.id}
                  onClick={() => handleCardClick(index)}
                  className={`${styles.card} ${isFlipped ? styles.flipped : ''} ${isMatched ? styles.matched : ''}`}
                  disabled={isMatched || isFlipping}
                  whileHover={!isFlipped && !isMatched ? { scale: 1.03 } : {}}
                  whileTap={!isFlipped && !isMatched ? { scale: 0.95 } : {}}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index % 8) * 0.04 }}
                >
                  <div className={styles.cardInner}>
                    {isFlipped ? (
                      <span className={styles.cardText}>{card.text}</span>
                    ) : (
                      <span className={styles.cardBack}>
                        <Icons.CardBack />
                      </span>
                    )}
                    {isMatched && (
                      <span className={styles.cardMatch}>
                        <Icons.Match />
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
          
          <p className={styles.cardHint}>Match verses to their references</p>
        </div>
      </div>
    </div>
  );
};

export default MemoryVerse;