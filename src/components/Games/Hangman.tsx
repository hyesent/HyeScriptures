// src/components/Games/Hangman.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  Zap, 
  Crown,
  Target,
  Clock,
  Heart,
  Flame,
  Star,
  Lightbulb,
  BookOpen,
  XCircle,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { getHangmanWord, getCategories } from '../../data/games/Hangman';
import type { HangmanWord } from '../../data/games/Hangman'
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './Hangman.module.css';

interface HangmanProps {
  onBack: () => void;
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Hangman: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8" />
      <path d="M8 18l4-4 4 4" />
      <path d="M8 14l4 4 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Head: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
    </svg>
  ),
  Body: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="12" x2="12" y2="20" />
    </svg>
  ),
  LeftArm: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="14" x2="6" y2="18" />
    </svg>
  ),
  RightArm: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="14" x2="18" y2="18" />
    </svg>
  ),
  LeftLeg: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="8" y2="22" />
    </svg>
  ),
  RightLeg: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="16" y2="22" />
    </svg>
  )
};

const Hangman: React.FC<HangmanProps> = ({ onBack }) => {
  const [word, setWord] = useState<HangmanWord | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [category, setCategory] = useState<string>('all');
  const [gameStarted, setGameStarted] = useState(false);
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [lives, setLives] = useState(6);
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const maxLives = 6;

  const startGame = () => {
    let newWord = getHangmanWord(difficulty, category);
    
    let attempts = 0;
    while (usedWords.includes(newWord.word) && attempts < 20) {
      newWord = getHangmanWord(difficulty, category);
      attempts++;
    }
    
    setWord(newWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setGameWon(false);
    setLives(maxLives);
    setXpEarned(0);
    setGameStarted(true);
    setBestScore(gameEngine.getBestScore('hangman'));
    gameEngine.resetScore();
  };

  const handleGuess = (letter: string) => {
    if (gameOver || gameWon) return;
    if (guessedLetters.includes(letter)) return;

    const newGuessed = [...guessedLetters, letter];
    setGuessedLetters(newGuessed);

    if (!word?.word.includes(letter)) {
      const newWrong = wrongGuesses + 1;
      setWrongGuesses(newWrong);
      setLives(maxLives - newWrong);

      if (newWrong >= maxLives) {
        setGameOver(true);
        gameEngine.recordAnswer('hangman', false, 'mixed');
      }
    } else {
      const wordLetters = word.word.split('');
      const allGuessed = wordLetters.every(l => newGuessed.includes(l));
      
      if (allGuessed) {
        setGameWon(true);
        const result = gameEngine.recordAnswer('hangman', true, 'mixed');
        setScore(result.score);
        setStreak(result.streak);
        const baseXP = 30;
        const streakBonus = Math.min(result.streak * 5, 25);
        setXpEarned(baseXP + streakBonus);
        setUsedWords([...usedWords, word.word]);
      }
    }
  };

  const displayWord = () => {
    if (!word) return '';
    return word.word
      .split('')
      .map(letter => guessedLetters.includes(letter) ? letter : '_')
      .join(' ');
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Hangman parts
  const hangmanParts = [
    { id: 'head', icon: <Icons.Head />, show: wrongGuesses >= 1 },
    { id: 'body', icon: <Icons.Body />, show: wrongGuesses >= 2 },
    { id: 'leftArm', icon: <Icons.LeftArm />, show: wrongGuesses >= 3 },
    { id: 'rightArm', icon: <Icons.RightArm />, show: wrongGuesses >= 4 },
    { id: 'leftLeg', icon: <Icons.LeftLeg />, show: wrongGuesses >= 5 },
    { id: 'rightLeg', icon: <Icons.RightLeg />, show: wrongGuesses >= 6 }
  ];

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
              <Icons.Hangman />
            </div>
            <h2 className={styles.startTitle}>Hangman</h2>
            <p className={styles.startSubtitle}>Guess the Bible word before you run out of lives</p>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Difficulty</span>
              <div className={styles.chipGroup}>
                {['easy', 'medium', 'hard'].map((diff) => (
                  <button
                    key={diff}
                    className={`${styles.chip} ${difficulty === diff ? styles.active : ''}`}
                    onClick={() => setDifficulty(diff as 'easy' | 'medium' | 'hard')}
                  >
                    {diff.charAt(0).toUpperCase() + diff.slice(1)}
                    <span className={styles.chipCount}>
                      {diff === 'easy' ? '6 lives' : diff === 'medium' ? '5 lives' : '4 lives'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Category</span>
              <div className={styles.chipGroup}>
                {getCategories().map((cat) => (
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
              Begin Mission
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
              💪
            </motion.span>

            <h2 className={styles.resultsTitle}>Game Over</h2>
            <p className={styles.resultsSubtitle}>
              The word was: <strong>{word?.word}</strong>
            </p>
            <p className={styles.resultsHint}>
              <Lightbulb size={14} />
              {word?.hint}
            </p>

            <div className={styles.resultsButtons}>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.primary}
                onClick={startGame}
              >
                Try Again
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
  // WIN SCREEN
  // ============================================================
  if (gameWon) {
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
              Word: <strong>{word?.word}</strong>
            </p>
            <p className={styles.resultsHint}>
              <Lightbulb size={14} />
              {word?.hint}
            </p>

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
                <span className={styles.resultsStatValue}>{streak}</span>
                <span className={styles.resultsStatLabel}>Streak</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{xpEarned}</span>
                <span className={styles.resultsStatLabel}>XP Earned</span>
              </div>
            </div>

            <div className={styles.resultsButtons}>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.primary}
                onClick={startGame}
              >
                Next Word
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
                <Target size={16} />
                Hangman
              </span>
              <span className={styles.gameProgress}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
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
              <span className={styles.gameLives}>
                {Array.from({ length: lives }).map((_, i) => (
                  <Heart key={i} size={14} fill="#B86161" color="#B86161" />
                ))}
              </span>
            </div>
          </div>

          {/* Hangman Visualization */}
          <div className={styles.hangmanDisplay}>
            <div className={styles.gallows}>
              {/* Gallows frame */}
              <div className={styles.gallowsTop} />
              <div className={styles.gallowsVertical} />
              <div className={styles.gallowsBase} />
              <div className={styles.gallowsRope} />
              
              {/* Body parts */}
              {hangmanParts.map((part) => (
                <div 
                  key={part.id} 
                  className={`${styles.bodyPart} ${part.show ? styles.visible : ''}`}
                >
                  {part.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Word Display */}
          <div className={styles.wordDisplay}>
            <p className={styles.wordText}>
              {displayWord()}
            </p>
            <p className={styles.wordHint}>
              <Lightbulb size={14} />
              {word?.category} • {word?.hint}
            </p>
          </div>

          {/* Alphabet */}
          <div className={styles.alphabetGrid}>
            {alphabet.map((letter) => {
              const guessed = guessedLetters.includes(letter);
              const isCorrect = word?.word.includes(letter) || false;
              
              return (
                <motion.button
                  key={letter}
                  className={`${styles.letterBtn} ${
                    guessed 
                      ? isCorrect 
                        ? styles.correct 
                        : styles.wrong
                      : ''
                  }`}
                  onClick={() => handleGuess(letter)}
                  disabled={guessed}
                  whileHover={!guessed ? { scale: 1.05 } : {}}
                  whileTap={!guessed ? { scale: 0.95 } : {}}
                >
                  {letter}
                  {guessed && (
                    <span className={styles.letterStatus}>
                      {isCorrect ? <CheckCircle size={12} /> : <XCircle size={12} />}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Guessed Letters */}
          {guessedLetters.length > 0 && (
            <div className={styles.guessedLetters}>
              <span className={styles.guessedLabel}>Guessed:</span>
              {guessedLetters.map((letter) => (
                <span 
                  key={letter} 
                  className={`${styles.guessedLetter} ${
                    word?.word.includes(letter) ? styles.guessedCorrect : styles.guessedWrong
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hangman;