// src/components/Games/WhoAmI.tsx
import React, { useState, useEffect, useRef } from 'react';
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
  User,
  Users,
  BookOpen,
  Search,
  Send,
  SkipForward,
  Lightbulb,
  Award
} from 'lucide-react';
import { getCharacterClues, getCharacterCategories, getCharacterDifficulties } from '../../data/games/who-am-i';
import type { CharacterClue } from '../../data/games/who-am-i';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './WhoAmI.module.css';

interface WhoAmIProps {
  onBack: () => void;
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Character: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Clue: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
};

const WhoAmI: React.FC<WhoAmIProps> = ({ onBack }) => {
  const [characters, setCharacters] = useState<CharacterClue[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clueLevel, setClueLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<{ show: boolean; correct: boolean; text: string }>({ show: false, correct: false, text: '' });
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [category, setCategory] = useState<string>('all');
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState<{ correct: boolean; name: string }[]>([]);
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const totalQuestions = 5;

  // Character data for filtering
  const characterClues = getCharacterClues(20);

  const startGame = () => {
    let allChars = getCharacterClues(totalQuestions);
    
    if (category !== 'all') {
      const filtered = characterClues.filter(c => c.category === category);
      if (filtered.length > 0) {
        const shuffled = [...filtered].sort(() => Math.random() - 0.5);
        allChars = shuffled.slice(0, totalQuestions);
      }
    }
    
    setCharacters(allChars);
    setCurrentIndex(0);
    setClueLevel(0);
    setScore(0);
    setStreak(0);
    setXpEarned(0);
    setResults([]);
    setGameStarted(true);
    setGameOver(false);
    setFeedback({ show: false, correct: false, text: '' });
    setInputValue('');
    setShowHint(false);
    setIsSubmitting(false);
    setBestScore(gameEngine.getBestScore('who-am-i'));
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.show || isSubmitting) return;
    if (!inputValue.trim()) return;
    
    setIsSubmitting(true);
    const current = characters[currentIndex];
    const isCorrect = inputValue.toLowerCase().trim() === current.name.toLowerCase();
    
    if (isCorrect) {
      const points = 15 - (clueLevel * 3);
      const streakBonus = Math.min(streak * 2, 10);
      const totalPoints = points + streakBonus;
      
      setScore(prev => prev + totalPoints);
      setStreak(prev => prev + 1);
      
      const baseXP = 15;
      const streakXP = Math.min(streak * 2, 10);
      setXpEarned(prev => prev + baseXP + streakXP);
      
      setFeedback({ 
        show: true, 
        correct: true, 
        text: `Correct! It's ${current.name} (${current.reference})` 
      });
      setResults([...results, { correct: true, name: current.name }]);
      
      setTimeout(() => {
        nextCharacter();
      }, 1800);
    } else {
      setStreak(0);
      if (clueLevel < 2) {
        setClueLevel(prev => prev + 1);
        setFeedback({ 
          show: true, 
          correct: false, 
          text: `Not quite. Here's another clue...` 
        });
        setTimeout(() => {
          setFeedback({ show: false, correct: false, text: '' });
          setIsSubmitting(false);
          setInputValue('');
          if (inputRef.current) inputRef.current.focus();
        }, 1200);
      } else {
        setFeedback({ 
          show: true, 
          correct: false, 
          text: `The answer was ${current.name} (${current.reference})` 
        });
        setResults([...results, { correct: false, name: current.name }]);
        setTimeout(() => {
          nextCharacter();
        }, 2000);
      }
    }
    
    setInputValue('');
  };

  const nextCharacter = () => {
    setFeedback({ show: false, correct: false, text: '' });
    setClueLevel(0);
    setInputValue('');
    setShowHint(false);
    setIsSubmitting(false);
    
    if (currentIndex < characters.length - 1) {
      setCurrentIndex(prev => prev + 1);
      if (inputRef.current) inputRef.current.focus();
    } else {
      setGameOver(true);
      const correctCount = results.filter(r => r.correct).length;
      gameEngine.recordAnswer('who-am-i', correctCount >= 3, 'mixed');
    }
  };

  const skipCharacter = () => {
    if (feedback.show || isSubmitting) return;
    const current = characters[currentIndex];
    setFeedback({ 
      show: true, 
      correct: false, 
      text: `Skipped: ${current.name} (${current.reference})` 
    });
    setResults([...results, { correct: false, name: current.name }]);
    setTimeout(nextCharacter, 1500);
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
              <Icons.Character />
            </div>
            <h2 className={styles.startTitle}>Who Am I?</h2>
            <p className={styles.startSubtitle}>Guess the Bible character from the clues!</p>
            
            <div className={styles.startSection}>
              <span className={styles.startLabel}>Difficulty</span>
              <div className={styles.chipGroup}>
                {getCharacterDifficulties().map((diff) => (
                  <button
                    key={diff.value}
                    className={`${styles.chip} ${difficulty === diff.value ? styles.active : ''}`}
                    onClick={() => setDifficulty(diff.value as 'easy' | 'medium' | 'hard')}
                  >
                    {diff.label}
                    <span className={styles.chipCount}>
                      {diff.value === 'easy' ? '5 clues' : diff.value === 'medium' ? '5 clues' : '5 clues'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className={styles.startSection}>
              <span className={styles.startLabel}>Category</span>
              <div className={styles.chipGroup}>
                {getCharacterCategories().map((cat) => (
                  <button
                    key={cat.value}
                    className={`${styles.chip} ${category === cat.value ? styles.active : ''}`}
                    onClick={() => setCategory(cat.value)}
                  >
                    {cat.label}
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
              <User size={18} />
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

            <h2 className={styles.resultsTitle}>Mission Complete!</h2>
            <p className={styles.resultsSubtitle}>
              You identified {correctCount} out of {totalQuestions} characters
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
                <span className={styles.resultsStatValue}>{correctCount}/{totalQuestions}</span>
                <span className={styles.resultsStatLabel}>Correct</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{streak}</span>
                <span className={styles.resultsStatLabel}>Best Streak</span>
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
                <User size={16} />
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
  const current = characters[currentIndex];
  const progress = ((currentIndex) / characters.length) * 100;
  const totalClues = Math.min(3, current?.clues?.length || 3);

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <div className={styles.gameCard}>
          {/* Header */}
          <div className={styles.gameHeader}>
            <div>
              <span className={styles.gameModeLabel}>
                <User size={16} />
                Who Am I?
              </span>
              <span className={styles.gameProgress}>
                Character {currentIndex + 1} of {characters.length}
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

          {/* Clue Display */}
          <div className={styles.clueContainer}>
            <div className={styles.clueHeader}>
              <span className={styles.clueLabel}>
                <Icons.Clue />
                Clue {clueLevel + 1} of {totalClues}
              </span>
            </div>
            <div className={styles.clueBox}>
              <p className={styles.clueText}>
                "{current?.clues?.[clueLevel] || 'No clue available'}"
              </p>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type the character's name..."
              className={styles.inputField}
              disabled={feedback.show && feedback.correct}
              autoFocus
            />
            <button
              type="submit"
              className={`${styles.submitBtn} ${(!inputValue.trim() || (feedback.show && feedback.correct)) ? styles.submitDisabled : ''}`}
              disabled={!inputValue.trim() || (feedback.show && feedback.correct)}
            >
              <Send size={18} />
              Guess
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

          {/* Actions */}
          {!feedback.show && (
            <div className={styles.actions}>
              <button 
                onClick={skipCharacter} 
                className={styles.skipBtn}
              >
                <SkipForward size={16} />
                Skip
              </button>
              <span className={styles.cluesRemaining}>
                {totalClues - clueLevel - 1} clues remaining
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;