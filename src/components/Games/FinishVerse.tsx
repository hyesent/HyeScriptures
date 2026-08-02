// src/components/Games/FinishVerse.tsx
import React, { useState, useRef, useEffect } from 'react';
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
  CheckCircle,
  XCircle,
  Loader2,
  BookOpen,
  PenTool,
  Send,
  Award,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { getFinishVerse, getVerseDifficulties } from '../../data/games/finish-verse';
import type {FinishVerse} from '../../data/games/finish-verse';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './FinishVerse.module.css';

interface FinishVerseProps {
  onBack: () => void;
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Verse: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="16" x2="16" y2="16" />
      <line x1="8" y1="12" x2="12" y2="12" />
    </svg>
  ),
  Missing: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
  )
};

const FinishVerse: React.FC<FinishVerseProps> = ({ onBack }) => {
  const [verses, setVerses] = useState<FinishVerse[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<{ show: boolean; correct: boolean; text: string }>({ show: false, correct: false, text: '' });
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState<{ correct: boolean; verse: string }[]>([]);
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const totalQuestions = 5;

  const startGame = () => {
    const qs = getFinishVerse(difficulty, totalQuestions);
    setVerses(qs);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setXpEarned(0);
    setResults([]);
    setGameStarted(true);
    setGameOver(false);
    setFeedback({ show: false, correct: false, text: '' });
    setInputValue('');
    setShowReference(false);
    setIsSubmitting(false);
    setBestScore(gameEngine.getBestScore('finish-verse'));
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.show || isSubmitting) return;
    if (!inputValue.trim()) return;
    
    setIsSubmitting(true);
    const current = verses[currentIndex];
    const isCorrect = inputValue.toLowerCase().trim() === current.missingWord.toLowerCase();
    
    if (isCorrect) {
      const points = 10 + (streak > 1 ? 5 : 0);
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      
      const baseXP = 10;
      const streakXP = Math.min(streak * 2, 10);
      setXpEarned(prev => prev + baseXP + streakXP);
      
      setFeedback({ 
        show: true, 
        correct: true, 
        text: `Correct! "${current.missingWord}"` 
      });
      setResults([...results, { correct: true, verse: current.reference }]);
    } else {
      setStreak(0);
      setFeedback({ 
        show: true, 
        correct: false, 
        text: `Incorrect. The word was "${current.missingWord}"` 
      });
      setResults([...results, { correct: false, verse: current.reference }]);
    }
    
    setInputValue('');
    setTimeout(() => {
      nextVerse();
    }, 1500);
  };

  const nextVerse = () => {
    setFeedback({ show: false, correct: false, text: '' });
    setInputValue('');
    setIsSubmitting(false);
    setShowReference(false);
    
    if (currentIndex < verses.length - 1) {
      setCurrentIndex(prev => prev + 1);
      if (inputRef.current) inputRef.current.focus();
    } else {
      setGameOver(true);
      const correctCount = results.filter(r => r.correct).length;
      gameEngine.recordAnswer('finish-verse', correctCount >= 3, 'mixed');
    }
  };

  const getDisplayVerse = (verse: FinishVerse) => {
    return verse.fullVerse.replace(verse.missingWord, '______');
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
              <Icons.Verse />
            </div>
            <h2 className={styles.startTitle}>Finish the Verse</h2>
            <p className={styles.startSubtitle}>Type the missing word to complete the verse!</p>
            
            <div className={styles.startSection}>
              <span className={styles.startLabel}>Difficulty</span>
              <div className={styles.chipGroup}>
                {getVerseDifficulties().map((diff) => (
                  <button
                    key={diff.value}
                    className={`${styles.chip} ${difficulty === diff.value ? styles.active : ''}`}
                    onClick={() => setDifficulty(diff.value as 'easy' | 'medium' | 'hard')}
                  >
                    {diff.label}
                    <span className={styles.chipCount}>{diff.words}</span>
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
              <PenTool size={18} />
              Begin Challenge
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
    const correctCount = results.filter(r => r.correct).length;
    const isNewBest = score >= bestScore && score > 0;
    const accuracy = Math.round((correctCount / verses.length) * 100);
    
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
              📖
            </motion.span>

            <h2 className={styles.resultsTitle}>Mission Complete!</h2>
            <p className={styles.resultsSubtitle}>
              You completed {correctCount} out of {verses.length} verses
            </p>

            {isNewBest && (
              <motion.div 
                className={styles.newBest}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Crown size={14} />
                New Best Score!
              </motion.div>
            )}
            
            <div className={styles.resultsStats}>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{score}</span>
                <span className={styles.resultsStatLabel}>Score</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{correctCount}/{verses.length}</span>
                <span className={styles.resultsStatLabel}>Correct</span>
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
                <PenTool size={16} />
                Play Again
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.secondary}
                onClick={() => {
                  setGameStarted(false);
                  setGameOver(false);
                }}
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
  const current = verses[currentIndex];
  const progress = ((currentIndex) / verses.length) * 100;
  const displayText = current ? getDisplayVerse(current) : '';

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <div className={styles.gameCard}>
          {/* Header */}
          <div className={styles.gameHeader}>
            <div>
              <span className={styles.gameModeLabel}>
                <BookOpen size={16} />
                Finish the Verse
              </span>
              <span className={styles.gameProgress}>
                Verse {currentIndex + 1} of {verses.length}
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

          {/* Verse Display */}
          <div className={styles.verseContainer}>
            <button 
              className={styles.referenceToggle}
              onClick={() => setShowReference(!showReference)}
            >
              {showReference ? current.reference : 'Click to reveal reference'}
            </button>
            <div className={styles.verseBox}>
              <p className={styles.verseText}>
                "{displayText}"
              </p>
            </div>
            <div className={styles.missingHint}>
              <Icons.Missing />
              <span>Type the missing word</span>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type the missing word..."
              className={styles.inputField}
              disabled={feedback.show}
              autoFocus
            />
            <button
              type="submit"
              className={`${styles.submitBtn} ${(!inputValue.trim() || feedback.show) ? styles.submitDisabled : ''}`}
              disabled={!inputValue.trim() || feedback.show}
            >
              <Send size={18} />
              Submit
            </button>
          </form>

          {/* Feedback */}
          <AnimatePresence>
            {feedback.show && (
              <motion.div 
                className={`${styles.feedback} ${feedback.correct ? styles.feedbackCorrect : styles.feedbackWrong}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span className={styles.feedbackIcon}>
                  {feedback.correct ? <CheckCircle size={18} /> : <XCircle size={18} />}
                </span>
                <span>{feedback.text}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FinishVerse;