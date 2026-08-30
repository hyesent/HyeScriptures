// src/components/Games/BookOrder.tsx
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  Zap, 
  Crown,
  ChevronRight,
  CheckCircle,
  XCircle,
  BookOpen,
  Target,
  Clock,
  Heart,
  Flame,
  Star,
  Layers,
  Shuffle,
  Brain,
  Lightbulb,
  Loader2
} from 'lucide-react';
import { getTestaments, oldTestamentBooks, newTestamentBooks } from '../../data/games/book-order';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './BookOrder.module.css';

interface BookOrderProps {
  onBack: () => void;
}

type GameMode = 'classic' | 'speed' | 'challenge' | 'categories' | 'reorder' | 'memory';
type Difficulty = 'easy' | 'medium' | 'hard';

// Valid game modes (exclude placeholder modes)
const VALID_MODES: GameMode[] = ['classic', 'speed', 'challenge', 'reorder'];

const BookOrder: React.FC<BookOrderProps> = ({ onBack }) => {
  // Game State
  const [testament, setTestament] = useState<'old' | 'new'>('old');
  const [gameMode, setGameMode] = useState<GameMode>('classic');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [availableBooks, setAvailableBooks] = useState<string[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [streak, setStreak] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [lives, setLives] = useState(3);
  const [xpEarned, setXpEarned] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledBooks, setShuffledBooks] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hintsRemaining, setHintsRemaining] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [correctAnimation, setCorrectAnimation] = useState(false);
  const [wrongAnimation, setWrongAnimation] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);

  const correctOrder = testament === 'old' ? oldTestamentBooks : newTestamentBooks;
  const maxAttempts = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 2 : 1;

  // ================================================================
  // CLEANUP TIMER ON UNMOUNT
  // ================================================================
  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        setTimerInterval(null);
      }
    };
  }, [timerInterval]);

  // ================================================================
  // GAME FUNCTIONS
  // ================================================================

  const getGameBooks = useCallback(() => {
    // For categories mode, we use all books but with category labels
    if (gameMode === 'categories') {
      return correctOrder;
    }
    return correctOrder;
  }, [gameMode, correctOrder]);

  const startGame = useCallback(() => {
    const gameBooks = getGameBooks();
    const shuffled = [...gameBooks].sort(() => Math.random() - 0.5);
    
    // Clean up existing timer
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    
    setShuffledBooks(shuffled);
    setAvailableBooks(shuffled);
    setSelectedBooks([]);
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setAttempts(0);
    setTime(0);
    setStreak(0);
    setCombo(0);
    setLevel(1);
    setTotalCorrect(0);
    setTotalWrong(0);
    setXpEarned(0);
    setLives(3);
    setIsWrong(false);
    setIsCorrect(false);
    setSelectedIndex(null);
    setHintsRemaining(3);
    setShowHint(false);
    setCorrectAnimation(false);
    setWrongAnimation(false);
    setShowSkipButton(false);
    setBestScore(gameEngine.getBestScore('book-order'));
    
    // Start new timer
    const interval = setInterval(() => {
      setTime(prev => {
        const newTime = prev + 1;
        // Speed mode: time limit of 60 seconds
        if (gameMode === 'speed' && newTime >= 60) {
          setGameOver(true);
          if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
          }
        }
        return newTime;
      });
    }, 1000);
    setTimerInterval(interval);
  }, [gameMode, getGameBooks, timerInterval]);

  // ================================================================
  // HANDLERS - FIXED
  // ================================================================

  const handleBookClick = (book: string) => {
    if (gameOver) return;
    if (isCorrect || isWrong) return; // Prevent clicks during animation
    
    const nextIndex = selectedBooks.length;
    const correctBook = correctOrder[nextIndex];
    
    // If user has used all attempts, show skip option
    if (attempts >= maxAttempts) {
      setShowSkipButton(true);
      return;
    }
    
    if (book === correctBook) {
      // ✅ CORRECT!
      setIsWrong(false);
      setIsCorrect(true);
      setCorrectAnimation(true);
      setShowSkipButton(false);
      
      // FIXED: Don't remove wrong books, only remove the correct one
      setSelectedBooks([...selectedBooks, book]);
      setAvailableBooks(availableBooks.filter(b => b !== book));
      
      // FIXED: Use updated streak for XP calculation
      const newStreak = streak + 1;
      const points = 10 + (combo * 2) + (gameMode === 'speed' ? 5 : 0);
      setScore(prev => prev + points);
      setTotalCorrect(prev => prev + 1);
      setStreak(newStreak);
      setCombo(prev => prev + 1);
      setAttempts(0);
      setShowHint(false);
      
      // FIXED: Use newStreak for XP calculation
      const baseXP = 15;
      const streakBonus = Math.min(newStreak * 5, 25);
      setXpEarned(prev => prev + baseXP + streakBonus);
      
      if ((totalCorrect + 1) % 5 === 0 && totalCorrect > 0) {
        setLevel(prev => prev + 1);
      }
      
      // Clear correct animation after delay
      setTimeout(() => {
        setCorrectAnimation(false);
        setIsCorrect(false);
      }, 600);
      
      // Check if puzzle is complete
      if (selectedBooks.length + 1 === correctOrder.length) {
        handleGameComplete();
      }
    } else {
      // ❌ WRONG!
      setIsWrong(true);
      setWrongAnimation(true);
      setAttempts(prev => prev + 1);
      setTotalWrong(prev => prev + 1);
      setStreak(0);
      setCombo(0);
      
      // FIXED: Don't remove the book from available list!
      // Just show the error and increment attempts
      
      // Challenge mode: lose a life
      if (gameMode === 'challenge') {
        setLives(prev => {
          const newLives = prev - 1;
          // FIXED: Check the updated value
          if (newLives <= 0) {
            setGameOver(true);
            if (timerInterval) {
              clearInterval(timerInterval);
              setTimerInterval(null);
            }
          }
          return newLives;
        });
      }
      
      // Check if max attempts reached
      if (attempts + 1 >= maxAttempts) {
        setShowSkipButton(true);
      }
      
      // Clear wrong animation after delay
      setTimeout(() => {
        setWrongAnimation(false);
        setIsWrong(false);
      }, 600);
    }
  };

  // FIXED: Skip current book if user is stuck
  const handleSkipBook = () => {
    if (gameOver) return;
    
    const nextIndex = selectedBooks.length;
    const correctBook = correctOrder[nextIndex];
    
    // Add the correct book and move on (but with a penalty)
    setSelectedBooks([...selectedBooks, correctBook]);
    setAvailableBooks(availableBooks.filter(b => b !== correctBook));
    setAttempts(0);
    setShowSkipButton(false);
    setScore(prev => Math.max(0, prev - 5)); // Penalty for skipping
    
    // Check if puzzle is complete
    if (selectedBooks.length + 1 === correctOrder.length) {
      handleGameComplete();
    }
  };

  const handleGameComplete = () => {
    setGameOver(true);
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    const bonus = Math.max(0, 100 - time);
    setScore(prev => prev + bonus);
    gameEngine.recordAnswer('book-order', true, testament === 'old' ? 'old-testament' : 'new-testament');
    if (score > bestScore) setBestScore(score);
  };

  const handleReorderClick = (index: number) => {
    if (gameOver) return;
    
    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else {
      const newShuffled = [...shuffledBooks];
      const temp = newShuffled[selectedIndex];
      newShuffled[selectedIndex] = newShuffled[index];
      newShuffled[index] = temp;
      setShuffledBooks(newShuffled);
      setSelectedIndex(null);
      
      // Check if the order is now correct
      const isCorrect = newShuffled.every((book, i) => book === correctOrder[i]);
      if (isCorrect) {
        setGameOver(true);
        if (timerInterval) {
          clearInterval(timerInterval);
          setTimerInterval(null);
        }
        const points = 100 - (time * 2);
        setScore(Math.max(points, 10));
        gameEngine.recordAnswer('book-order', true, testament === 'old' ? 'old-testament' : 'new-testament');
        if (score > bestScore) setBestScore(score);
      }
    }
  };

  // FIXED: Better hint system - more cryptic
  const useHint = () => {
    if (hintsRemaining > 0 && !gameOver) {
      setShowHint(true);
      setHintsRemaining(prev => prev - 1);
    }
  };

  const getHintForBook = (bookName: string): string => {
    const index = correctOrder.indexOf(bookName);
    const total = correctOrder.length;
    const position = index + 1;
    
    const hints = [
      `This book is in the ${position <= total / 3 ? 'first' : position <= total * 2 / 3 ? 'middle' : 'last'} part of the ${testament === 'old' ? 'Old' : 'New'} Testament`,
      `There are ${total - position} books after this one`,
      `This book is ${position} of ${total} in the ${testament === 'old' ? 'Old' : 'New'} Testament`,
    ];
    
    return hints[Math.floor(Math.random() * hints.length)];
  };

  const getTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ================================================================
  // RENDER FUNCTIONS
  // ================================================================

  // FIXED: Categories mode - show books grouped with their categories
  const renderCategoriesMode = () => {
    const categoryData = getCategoryGroups();
    
    return (
      <div className={styles.gameCard}>
        <div className={styles.gameHeader}>
          <div>
            <span className={styles.gameModeLabel}>
              <Layers size={16} />
              Categories
            </span>
            <span className={styles.gameProgress}>
              Learn how books are grouped
            </span>
          </div>
          <div className={styles.gameStats}>
            <span className={styles.gameScore}>
              <Trophy size={14} />
              {score}
            </span>
            <span className={styles.gameTime}>
              <Clock size={14} />
              {getTimeString(time)}
            </span>
          </div>
        </div>

        <div className={styles.categoryGrid}>
          {Object.entries(categoryData).map(([category, books]) => (
            <div key={category} className={styles.categoryGroup}>
              <h4 className={styles.categoryTitle}>{category}</h4>
              <div className={styles.categoryBooks}>
                {books.map(book => (
                  <span key={book} className={styles.categoryBook}>
                    {book}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.categoriesHint}>
          <p>📖 {Object.keys(categoryData).length} categories • {correctOrder.length} books total</p>
          <button className={styles.startBtn} onClick={startGame}>
            <Target size={16} /> Try Classic Mode
          </button>
        </div>
      </div>
    );
  };

  const getCategoryGroups = () => {
    if (testament === 'old') {
      return {
        'Law (5)': ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
        'History (12)': ['Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', 
                    '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther'],
        'Wisdom (5)': ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
        'Prophets (17)': ['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 
                     'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 
                     'Haggai', 'Zechariah', 'Malachi']
      };
    } else {
      return {
        'Gospels (4)': ['Matthew', 'Mark', 'Luke', 'John'],
        'History (1)': ['Acts'],
        'Pauline (13)': ['Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 
                    'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', 
                    '1 Timothy', '2 Timothy', 'Titus', 'Philemon'],
        'General (8)': ['Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude'],
        'Prophecy (1)': ['Revelation']
      };
    }
  };

  const renderReorderMode = () => {
    return (
      <div className={styles.gameCard}>
        <div className={styles.gameHeader}>
          <div>
            <span className={styles.gameModeLabel}>
              <Shuffle size={16} />
              Reorder
            </span>
            <span className={styles.gameProgress}>
              Swap books to correct order
            </span>
          </div>
          <div className={styles.gameStats}>
            <span className={styles.gameScore}>
              <Trophy size={14} />
              {score}
            </span>
            <span className={styles.gameTime}>
              <Clock size={14} />
              {getTimeString(time)}
            </span>
          </div>
        </div>

        <div className={styles.reorderGrid}>
          {shuffledBooks.map((book, index) => {
            const isCorrectPosition = book === correctOrder[index];
            return (
              <motion.button
                key={book + index}
                className={`${styles.reorderBook} ${selectedIndex === index ? styles.selected : ''} ${isCorrectPosition ? styles.correctPosition : ''}`}
                onClick={() => handleReorderClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {book}
                {selectedIndex === index && ' 👆'}
                {isCorrectPosition && ' ✅'}
              </motion.button>
            );
          })}
        </div>

        <div className={styles.reorderHint}>
          {selectedIndex === null ? 'Click a book to select, then click another to swap' : 'Click another book to swap'}
        </div>
        
        {shuffledBooks.some((book, i) => book === correctOrder[i]) && (
          <div className={styles.reorderProgress}>
            {shuffledBooks.filter((book, i) => book === correctOrder[i]).length} / {correctOrder.length} in correct position
          </div>
        )}
      </div>
    );
  };

  // ================================================================
  // START SCREEN
  // ================================================================

  const renderStartScreen = () => {
    // Filter out placeholder modes
    const availableModes = [
      { id: 'classic' as GameMode, label: 'Classic', icon: <Target size={20} />, desc: 'Place books in order' },
      { id: 'speed' as GameMode, label: 'Speed', icon: <Clock size={20} />, desc: 'Race against time' },
      { id: 'challenge' as GameMode, label: 'Challenge', icon: <Flame size={20} />, desc: '3 lives' },
      { id: 'categories' as GameMode, label: 'Categories', icon: <Layers size={20} />, desc: 'Learn by category' },
      { id: 'reorder' as GameMode, label: 'Reorder', icon: <Shuffle size={20} />, desc: 'Swap to correct order' },
    ];

    return (
      <motion.div 
        className={styles.startCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: TIMING.NORMAL / 1000 }}
      >
        <div className={styles.startIcon}>
          <BookOpen size={48} strokeWidth={1.5} />
        </div>
        <h2 className={styles.startTitle}>Book Order</h2>
        <p className={styles.startSubtitle}>Master the order of the Bible books</p>

        <div className={styles.startSection}>
          <span className={styles.startLabel}>Testament</span>
          <div className={styles.chipGroup}>
            {getTestaments().map((t) => (
              <button
                key={t.value}
                className={`${styles.chip} ${testament === t.value ? styles.active : ''}`}
                onClick={() => setTestament(t.value)}
              >
                {t.label}
                <span className={styles.chipCount}>{t.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.startSection}>
          <span className={styles.startLabel}>Game Mode</span>
          <div className={styles.modeGrid}>
            {availableModes.map((mode) => (
              <button
                key={mode.id}
                className={`${styles.modeChip} ${gameMode === mode.id ? styles.active : ''}`}
                onClick={() => setGameMode(mode.id)}
              >
                <span className={styles.modeIcon}>{mode.icon}</span>
                <span className={styles.modeLabel}>{mode.label}</span>
                <span className={styles.modeDesc}>{mode.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {gameMode !== 'categories' && (
          <div className={styles.startSection}>
            <span className={styles.startLabel}>Difficulty</span>
            <div className={styles.chipGroup}>
              {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
                <button
                  key={d}
                  className={`${styles.chip} ${difficulty === d ? styles.active : ''}`}
                  onClick={() => setDifficulty(d)}
                >
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                  <span className={styles.chipCount}>
                    {d === 'easy' ? '3 tries' : d === 'medium' ? '2 tries' : '1 try'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className={styles.startBtn}
          onClick={startGame}
        >
          {gameMode === 'categories' ? 'Learn Categories' : 'Begin Mission'}
          <ChevronRight size={18} />
        </motion.button>
      </motion.div>
    );
  };

  // ================================================================
  // GAME OVER SCREEN
  // ================================================================

  const renderGameOver = () => {
    const isWin = totalCorrect > totalWrong || selectedBooks.length === correctOrder.length;
    const percentage = totalCorrect + totalWrong > 0 
      ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) 
      : 0;
    const isNewBest = score >= bestScore && score > 0;
    
    return (
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
          {isWin ? '🏆' : '💪'}
        </motion.span>

        <h2 className={styles.resultsTitle}>
          {isWin ? 'Mission Complete!' : 'Keep Practicing'}
        </h2>
        {isWin && (
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
            <span className={styles.resultsStatValue}>{totalCorrect}</span>
            <span className={styles.resultsStatLabel}>Correct</span>
          </div>
          <div className={styles.resultsStat}>
            <span className={styles.resultsStatValue}>{totalWrong}</span>
            <span className={styles.resultsStatLabel}>Wrong</span>
          </div>
          <div className={styles.resultsStat}>
            <span className={styles.resultsStatValue}>{percentage}%</span>
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
            Train Again
          </motion.button>
          <div className={styles.resultsSecondaryGroup}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.secondary}
              onClick={() => {
                setGameStarted(false);
                setGameOver(false);
              }}
            >
              Change Mode
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
        </div>
      </motion.div>
    );
  };

  // ================================================================
  // ACTIVE GAME
  // ================================================================

  const renderActiveGame = () => {
    // Render different modes
    if (gameMode === 'categories') return renderCategoriesMode();
    if (gameMode === 'reorder') return renderReorderMode();

    // Classic, Speed, Challenge modes
    const progress = (selectedBooks.length / correctOrder.length) * 100;
    const nextBookName = correctOrder[selectedBooks.length];
    const hintText = nextBookName ? getHintForBook(nextBookName) : '';

    return (
      <div className={styles.gameCard}>
        <div className={styles.gameHeader}>
          <div>
            <span className={styles.gameModeLabel}>
              {gameMode === 'classic' && <Target size={16} />}
              {gameMode === 'speed' && <Clock size={16} />}
              {gameMode === 'challenge' && <Flame size={16} />}
              {gameMode.charAt(0).toUpperCase() + gameMode.slice(1)}
            </span>
            <span className={styles.gameProgress}>
              Level {level} • {selectedBooks.length} of {correctOrder.length}
            </span>
          </div>
          <div className={styles.gameStats}>
            <span className={styles.gameScore}>
              <Trophy size={14} />
              {score}
            </span>
            <span className={styles.gameTime}>
              <Clock size={14} />
              {getTimeString(time)}
            </span>
            {gameMode === 'challenge' && (
              <span className={styles.gameLives}>
                <Heart size={14} />
                {lives}
              </span>
            )}
          </div>
        </div>

        <div className={styles.progressTrack}>
          <motion.div 
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: TIMING.LARGE / 1000 }}
          />
        </div>

        <div className={styles.statsBar}>
          <span><Flame size={12} /> Streak: {streak}</span>
          <span><Zap size={12} /> Combo: {combo}x</span>
          {gameMode === 'speed' && (
            <span><Clock size={12} /> {Math.max(0, 60 - time)}s left</span>
          )}
          <span><Target size={12} /> {attempts}/{maxAttempts} tries</span>
          {hintsRemaining > 0 && (
            <span><Lightbulb size={12} /> {hintsRemaining} hints</span>
          )}
        </div>

        <div className={styles.targetBox}>
          <div className={styles.targetContent}>
            <div>
              <p className={styles.targetLabel}>
                {selectedBooks.length === 0 
                  ? 'Start by placing the first book' 
                  : `Place the next book in order`}
              </p>
              {showHint && nextBookName && (
                <p className={styles.hintText}>
                  <Lightbulb size={14} />
                  💡 {hintText}
                </p>
              )}
            </div>
            <div className={styles.targetActions}>
              {hintsRemaining > 0 && !showHint && (
                <button
                  onClick={useHint}
                  className={styles.hintBtn}
                >
                  <Lightbulb size={14} />
                  Hint ({hintsRemaining})
                </button>
              )}
              {showSkipButton && (
                <button
                  onClick={handleSkipBook}
                  className={styles.skipBtn}
                >
                  Skip (-5 pts)
                </button>
              )}
            </div>
          </div>
          {isWrong && !wrongAnimation && (
            <p className={styles.attemptsWarning}>
              Wrong! {maxAttempts - attempts} tries remaining
            </p>
          )}
          {correctAnimation && (
            <p className={styles.correctFeedback}>
              <CheckCircle size={14} /> Correct! +{10 + (combo * 2)} pts
            </p>
          )}
          {wrongAnimation && (
            <p className={styles.wrongFeedback}>
              <XCircle size={14} /> Wrong! Try again
            </p>
          )}
        </div>

        <div className={styles.booksGrid}>
          {availableBooks.map((book) => (
            <motion.button
              key={book}
              className={`${styles.bookBtn} ${wrongAnimation && book === correctOrder[selectedBooks.length] ? styles.highlightCorrect : ''}`}
              onClick={() => handleBookClick(book)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              disabled={isCorrect || isWrong}
            >
              {book}
            </motion.button>
          ))}
        </div>

        <div className={styles.bottomStats}>
          <span>Placed: {selectedBooks.length}</span>
          <span>Remaining: {availableBooks.length}</span>
          <span>
            Accuracy: {totalCorrect + totalWrong > 0 
              ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) 
              : 0}%
          </span>
        </div>
      </div>
    );
  };

  // ================================================================
  // MAIN RENDER
  // ================================================================

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <button className={styles.backBtn} onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {!gameStarted && renderStartScreen()}
        {gameStarted && !gameOver && renderActiveGame()}
        {gameOver && renderGameOver()}
      </div>
    </div>
  );
};

export default BookOrder;
