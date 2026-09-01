// src/components/Games/Crossword.tsx
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
  Puzzle,
  Grid,
  LayoutGrid,
  ChevronRight,
  RefreshCw,
  Sparkles,
  Award
} from 'lucide-react';
import { 
  getRandomCrossword,
  getTotalPuzzles,
  getAllThemes,
  getCrosswordsByTheme
} from '../../data/games/crossword';
import type { CrosswordPuzzle, CrosswordClue } from '../../data/games/crossword';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './Crossword.module.css';

interface CrosswordProps {
  onBack: () => void;
}

const Crossword: React.FC<CrosswordProps> = ({ onBack }) => {
  // ================================================================
  // STATE
  // ================================================================
  
  const [puzzle, setPuzzle] = useState<CrosswordPuzzle | null>(null);
  const [grid, setGrid] = useState<string[][]>([]);
  const [userGrid, setUserGrid] = useState<string[][]>([]);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [selectedClue, setSelectedClue] = useState<CrosswordClue | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<'across' | 'down'>('across');
  const [wordInput, setWordInput] = useState<string>('');
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [completedWords, setCompletedWords] = useState<Set<string>>(new Set());
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [showReference, setShowReference] = useState<boolean>(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [wrongWord, setWrongWord] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const [hintsRemaining, setHintsRemaining] = useState(3); // ✅ NEW: Max 3 hints
  const [hintUsed, setHintUsed] = useState(false); // ✅ NEW: Track if hint was used

  const inputRef = useRef<HTMLInputElement>(null);
  const themes = ['all', ...getAllThemes()];

  // ================================================================
  // DETECT MOBILE
  // ================================================================

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ================================================================
  // GAME INITIALIZATION - FIXED: Timer race condition
  // ================================================================

  const startGame = () => {
    // Clean up existing timer FIRST
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }

    let newPuzzle: CrosswordPuzzle;
    
    if (selectedTheme !== 'all') {
      const themedPuzzles = getCrosswordsByTheme(selectedTheme);
      if (themedPuzzles.length === 0) {
        newPuzzle = getRandomCrossword();
      } else {
        newPuzzle = themedPuzzles[Math.floor(Math.random() * themedPuzzles.length)];
      }
    } else {
      newPuzzle = getRandomCrossword();
    }
    
    setPuzzle(newPuzzle);
    
    // Initialize grids
    const puzzleGrid = newPuzzle.grid.map(row => [...row]);
    setGrid(puzzleGrid);
    
    // User grid starts empty (only show black cells)
    const userGridCopy = puzzleGrid.map(row => 
      row.map(cell => cell === '■' ? '■' : '')
    );
    setUserGrid(userGridCopy);
    
    setCompletedWords(new Set());
    setSelectedCell(null);
    setSelectedClue(null);
    setWordInput('');
    setIsWrong(false);
    setIsCorrect(false);
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTime(0);
    setTotalCorrect(0);
    setTotalWrong(0);
    setCompletedCount(0);
    setIsComplete(false);
    setXpEarned(0);
    setWrongWord('');
    setBestScore(gameEngine.getBestScore('crossword'));
    setHintsRemaining(3); // ✅ Reset hints
    setHintUsed(false);
    
    // Start new timer
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    setTimerInterval(interval);
    
    // Focus input after a delay
    setTimeout(() => inputRef.current?.focus(), 200);
  };

  // ================================================================
  // CLEANUP TIMER ON UNMOUNT
  // ================================================================

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  // ================================================================
  // CLUE SELECTION - FIXED: Overlapping clue selection
  // ================================================================

  const selectClue = (clue: CrosswordClue) => {
    if (completedWords.has(clue.id)) return;
    
    setSelectedClue(clue);
    setSelectedDirection(clue.direction);
    setWordInput('');
    setIsWrong(false);
    setIsCorrect(false);
    
    // Highlight the first cell of the clue
    setSelectedCell({ row: clue.row, col: clue.col });
    
    // Focus input
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleCellClick = (row: number, col: number) => {
    if (gameOver) return;
    if (grid[row]?.[col] === '■') return;
    
    // Find which clue this cell belongs to - prioritize selected direction
    const clue = puzzle?.clues.find(c => {
      const isAcross = c.direction === 'across' && 
        c.row === row && 
        c.col <= col && 
        c.col + c.length > col;
      
      const isDown = c.direction === 'down' && 
        c.col === col && 
        c.row <= row && 
        c.row + c.length > row;
      
      // If we have a selected direction, prioritize it
      if (selectedClue) {
        if (selectedDirection === 'across') {
          return isAcross || (isDown && !puzzle?.clues.some(cc => 
            cc.direction === 'across' && 
            cc.row === row && 
            cc.col <= col && 
            cc.col + cc.length > col
          ));
        } else {
          return isDown || (isAcross && !puzzle?.clues.some(cc => 
            cc.direction === 'down' && 
            cc.col === col && 
            cc.row <= row && 
            cc.row + cc.length > row
          ));
        }
      }
      
      return isAcross || isDown;
    });
    
    if (clue) {
      // If clicking on a completed word, don't allow selection
      if (completedWords.has(clue.id)) return;
      selectClue(clue);
    }
  };

  // ================================================================
  // WORD INPUT HANDLING - FIXED: Correct feedback & wrong word erasure
  // ================================================================

  const handleWordSubmit = () => {
    if (!selectedClue || !puzzle) return;
    if (completedWords.has(selectedClue.id)) return;
    if (gameOver) return;
    
    const word = wordInput.trim().toUpperCase();
    if (word.length === 0) return;
    
    const isCorrectWord = word === selectedClue.answer;
    
    if (isCorrectWord) {
      // ✅ CORRECT!
      setIsCorrect(true);
      setIsWrong(false);
      setTotalCorrect(prev => prev + 1);
      setCompletedCount(prev => prev + 1);
      
      // Fill the grid with the word
      const newUserGrid = userGrid.map(row => [...row]);
      const clue = selectedClue;
      
      for (let i = 0; i < clue.answer.length; i++) {
        const r = clue.direction === 'down' ? clue.row + i : clue.row;
        const c = clue.direction === 'across' ? clue.col + i : clue.col;
        newUserGrid[r][c] = clue.answer[i];
      }
      
      setUserGrid(newUserGrid);
      
      // Mark word as completed
      setCompletedWords(prev => new Set([...prev, clue.id]));
      
      // Update score
      const timeBonus = Math.max(0, 10 - Math.floor(time / 10));
      const points = 10 + timeBonus;
      setScore(prev => prev + points);
      
      // Clear input
      setWordInput('');
      
      // FIXED: Show correct animation, THEN auto-select next clue
      setTimeout(() => {
        setIsCorrect(false);
        autoSelectNextClue();
      }, 500);
      
      // Check if puzzle is complete
      if (completedWords.size + 1 === puzzle.clues.length) {
        handlePuzzleComplete();
      }
      
    } else {
      // ❌ WRONG!
      setIsWrong(true);
      setIsCorrect(false);
      setTotalWrong(prev => prev + 1);
      setWrongWord(word);
      
      // Highlight all cells in the clue with red glow
      const clue = selectedClue;
      const newUserGrid = userGrid.map(row => [...row]);
      
      // Mark cells as wrong by adding a special marker
      for (let i = 0; i < clue.answer.length; i++) {
        const r = clue.direction === 'down' ? clue.row + i : clue.row;
        const c = clue.direction === 'across' ? clue.col + i : clue.col;
        // Add a temporary wrong marker
        newUserGrid[r][c] = userGrid[r][c] || '✗';
      }
      setUserGrid(newUserGrid);
      
      // FIXED: Only remove ✗ markers, keep any real letters
      setTimeout(() => {
        const restoredGrid = userGrid.map(row => 
          row.map(cell => cell === '✗' ? '' : cell)
        );
        setUserGrid(restoredGrid);
        setWordInput('');
        setIsWrong(false);
        setWrongWord('');
        inputRef.current?.focus();
      }, 1200);
    }
  };

  const autoSelectNextClue = () => {
    if (!puzzle) return;
    
    // Find the next unanswered clue (try same direction first)
    let nextClue = puzzle.clues.find(c => 
      c.direction === selectedDirection && !completedWords.has(c.id)
    );
    
    // If none in same direction, find any unanswered clue
    if (!nextClue) {
      nextClue = puzzle.clues.find(c => !completedWords.has(c.id));
    }
    
    if (nextClue) {
      selectClue(nextClue);
    }
  };

  // ================================================================
  // KEYBOARD NAVIGATION - NEW FEATURE
  // ================================================================

  const moveSelection = (rowDelta: number, colDelta: number) => {
    if (!selectedCell || !puzzle) return;
    
    let newRow = selectedCell.row + rowDelta;
    let newCol = selectedCell.col + colDelta;
    
    // Clamp to grid bounds
    newRow = Math.max(0, Math.min(puzzle.grid.length - 1, newRow));
    newCol = Math.max(0, Math.min(puzzle.grid[0].length - 1, newCol));
    
    // Find if the new cell is part of a clue
    const clue = puzzle?.clues.find(c => {
      if (c.direction === 'across') {
        return c.row === newRow && c.col <= newCol && c.col + c.length > newCol;
      } else {
        return c.col === newCol && c.row <= newRow && c.row + c.length > newRow;
      }
    });
    
    if (clue && !completedWords.has(clue.id)) {
      setSelectedCell({ row: newRow, col: newCol });
      selectClue(clue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleWordSubmit();
    }
    
    if (e.key === 'Escape') {
      setWordInput('');
      setIsWrong(false);
      setIsCorrect(false);
    }
    
    // Arrow key navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveSelection(-1, 0);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveSelection(1, 0);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      moveSelection(0, -1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      moveSelection(0, 1);
    }
    
    // Spacebar to toggle direction
    if (e.key === ' ' && !e.repeat) {
      e.preventDefault();
      if (selectedClue) {
        const oppositeDir = selectedDirection === 'across' ? 'down' : 'across';
        const oppositeClue = puzzle?.clues.find(c => 
          c.direction === oppositeDir && 
          c.row === selectedClue.row && 
          c.col === selectedClue.col
        );
        if (oppositeClue && !completedWords.has(oppositeClue.id)) {
          selectClue(oppositeClue);
        }
      }
    }
    
    if (e.key === 'Tab') {
      e.preventDefault();
      if (selectedDirection === 'across') {
        const nextClue = puzzle?.clues.find(c => 
          c.direction === 'across' && !completedWords.has(c.id) && c.id !== selectedClue?.id
        );
        if (nextClue) selectClue(nextClue);
      } else {
        const nextClue = puzzle?.clues.find(c => 
          c.direction === 'down' && !completedWords.has(c.id) && c.id !== selectedClue?.id
        );
        if (nextClue) selectClue(nextClue);
      }
    }
  };

  // ================================================================
  // PUZZLE COMPLETE - FIXED: totalCells undefined
  // ================================================================

  const handlePuzzleComplete = () => {
    setGameOver(true);
    setIsComplete(true);
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    
    const result = gameEngine.recordAnswer('crossword', true, 'mixed');
    const timeBonus = Math.max(0, 100 - time);
    const accuracy = totalCorrect + totalWrong > 0 
      ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) 
      : 100;
    const accuracyBonus = Math.round(accuracy / 10) * 5;
    const finalScore = result.score + timeBonus + accuracyBonus;
    
    setScore(finalScore);
    const baseXP = 50;
    const timeBonusXP = Math.floor(time / 10);
    const accuracyXP = Math.floor(accuracy / 10);
    setXpEarned(baseXP + timeBonusXP + accuracyXP);
  };

  // ================================================================
  // RENDER HELPERS - FIXED: getClueNumber uses number field
  // ================================================================

  const getTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getClueNumber = (row: number, col: number): string | null => {
    const clue = puzzle?.clues.find(c => 
      (c.direction === 'across' && c.row === row && c.col === col) ||
      (c.direction === 'down' && c.row === row && c.col === col)
    );
    return clue ? String(clue.number) : null;
  };

  const getCellClass = (row: number, col: number): string => {
    const gridCell = grid[row]?.[col];
    const userCell = userGrid[row]?.[col];
    let classes = styles.cell;
    
    // Black cell
    if (gridCell === '■') {
      return `${classes} ${styles.cellBlack}`;
    }
    
    // Check if this cell is part of the selected clue
    let isPartOfSelectedClue = false;
    if (selectedClue) {
      if (selectedClue.direction === 'across') {
        isPartOfSelectedClue = selectedClue.row === row && 
          selectedClue.col <= col && 
          selectedClue.col + selectedClue.length > col;
      } else {
        isPartOfSelectedClue = selectedClue.col === col && 
          selectedClue.row <= row && 
          selectedClue.row + selectedClue.length > row;
      }
    }
    
    // Selected cell
    if (selectedCell?.row === row && selectedCell?.col === col) {
      classes += ` ${styles.cellSelected}`;
    }
    
    // Highlighted (part of selected clue)
    if (isPartOfSelectedClue && !completedWords.has(selectedClue?.id || '')) {
      classes += ` ${styles.cellHighlighted}`;
    }
    
    // Completed word
    if (userCell && userCell !== '■' && userCell !== '✗') {
      const isCompleted = selectedClue && completedWords.has(selectedClue.id);
      if (isCompleted || (selectedClue && userCell === selectedClue.answer[col - selectedClue.col])) {
        classes += ` ${styles.cellCompleted}`;
      }
    }
    
    // Wrong marker
    if (userCell === '✗') {
      classes += ` ${styles.cellWrong}`;
    }
    
    return classes;
  };

  // ================================================================
  // HINT SYSTEM - ✅ FIXED: Limited to 3 hints
  // ================================================================

  const revealLetter = () => {
    // ✅ Check if hints remaining
    if (!selectedClue || completedWords.has(selectedClue.id) || gameOver) return;
    if (hintsRemaining <= 0) {
      // Optional: Could show a toast notification
      return;
    }
    
    const clue = selectedClue;
    const newUserGrid = userGrid.map(row => [...row]);
    let filledCount = 0;
    
    // Find the first empty cell in the clue
    for (let i = 0; i < clue.answer.length; i++) {
      const r = clue.direction === 'down' ? clue.row + i : clue.row;
      const c = clue.direction === 'across' ? clue.col + i : clue.col;
      if (newUserGrid[r][c] === '' || newUserGrid[r][c] === '✗') {
        newUserGrid[r][c] = clue.answer[i];
        filledCount++;
        break; // Only reveal one letter
      }
    }
    
    if (filledCount > 0) {
      setUserGrid(newUserGrid);
      // ✅ Decrease hints remaining
      setHintsRemaining(prev => prev - 1);
      setHintUsed(true);
      // Penalty: -2 points for using a hint
      setScore(prev => Math.max(0, prev - 2));
      
      // Check if the word is now complete
      let wordComplete = true;
      for (let i = 0; i < clue.answer.length; i++) {
        const r = clue.direction === 'down' ? clue.row + i : clue.row;
        const c = clue.direction === 'across' ? clue.col + i : clue.col;
        if (newUserGrid[r][c] !== clue.answer[i]) {
          wordComplete = false;
          break;
        }
      }
      if (wordComplete && !completedWords.has(clue.id)) {
        // Auto-complete the word
        setCompletedWords(prev => new Set([...prev, clue.id]));
        setCompletedCount(prev => prev + 1);
        setTotalCorrect(prev => prev + 1);
        setIsCorrect(true);
        setTimeout(() => {
          setIsCorrect(false);
          autoSelectNextClue();
        }, 500);
        if (completedWords.size + 1 === puzzle?.clues.length) {
          handlePuzzleComplete();
        }
      }
    }
  };

  // ================================================================
  // START SCREEN
  // ================================================================
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
              <Puzzle size={48} strokeWidth={1.5} />
            </div>
            <h2 className={styles.startTitle}>Bible Crossword</h2>
            <p className={styles.startSubtitle}>Type the full word to solve each clue</p>
            <p className={styles.startCount}>
              {getTotalPuzzles()} puzzles available
            </p>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Theme</span>
              <div className={styles.chipGroup}>
                {themes.map((theme) => (
                  <button
                    key={theme}
                    className={`${styles.chip} ${selectedTheme === theme ? styles.active : ''}`}
                    onClick={() => setSelectedTheme(theme)}
                  >
                    {theme === 'all' ? 'All' : theme}
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
              Begin Crossword
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  // ================================================================
  // GAME OVER SCREEN
  // ================================================================
  if (gameOver && isComplete) {
    const completed = puzzle ? (completedCount / puzzle.clues.length) * 100 : 0;
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

            <h2 className={styles.resultsTitle}>Puzzle Complete!</h2>
            <p className={styles.resultsSubtitle}>
              Solved in {getTimeString(time)}
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
                <span className={styles.resultsStatValue}>{Math.round(completed)}%</span>
                <span className={styles.resultsStatLabel}>Completed</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{getTimeString(time)}</span>
                <span className={styles.resultsStatLabel}>Time</span>
              </div>
            </div>

            <div className={styles.resultsStats}>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{totalCorrect}</span>
                <span className={styles.resultsStatLabel}>Correct</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{totalWrong}</span>
                <span className={styles.resultsStatLabel}>Wrong</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>
                  {totalCorrect + totalWrong > 0 ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) : 0}%
                </span>
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
                <RefreshCw size={16} />
                New Puzzle
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

  // ================================================================
  // ACTIVE GAME - MOBILE RESPONSIVE
  // ================================================================
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
                <Puzzle size={16} />
                Crossword
              </span>
              <span className={styles.gameTitle}>
                {puzzle?.title}
              </span>
            </div>
            <div className={styles.gameStats}>
              <span className={styles.gameTime}>
                <Clock size={14} />
                {getTimeString(time)}
              </span>
              <span className={styles.gameProgress}>
                {completedCount}/{puzzle?.clues.length} clues
              </span>
              <span className={styles.gameScore}>
                <Star size={14} />
                {score}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressTrack}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${puzzle ? (completedCount / puzzle.clues.length) * 100 : 0}%` }}
              transition={{ duration: TIMING.NORMAL / 1000 }}
            />
          </div>

          <div className={styles.crosswordLayout}>
            {/* Grid - MOBILE RESPONSIVE */}
            <div className={styles.gridContainer}>
              <div 
                className={`${styles.grid} ${isMobile ? styles.gridMobile : ''}`}
                style={{ 
                  gridTemplateColumns: `repeat(${puzzle?.grid[0]?.length || 10}, 1fr)`
                }}
              >
                {puzzle?.grid.map((row, rowIndex) => (
                  row.map((cell, colIndex) => {
                    const clueNumber = getClueNumber(rowIndex, colIndex);
                    const userCell = userGrid[rowIndex]?.[colIndex] || '';
                    const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                    const isBlack = cell === '■';
                    
                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        className={`${getCellClass(rowIndex, colIndex)} ${isSelected ? styles.selected : ''}`}
                        style={{
                          cursor: isBlack ? 'default' : 'pointer',
                          minWidth: isMobile ? '44px' : 'auto',
                          minHeight: isMobile ? '44px' : 'auto',
                        }}
                      >
                        {!isBlack && (
                          <>
                            {userCell}
                            {clueNumber && userCell === '' && (
                              <span className={styles.clueNumber}>
                                {clueNumber}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })
                ))}
              </div>
            </div>

            {/* Clues Panel - MOBILE RESPONSIVE */}
            <div className={`${styles.cluesPanel} ${isMobile ? styles.cluesPanelMobile : ''}`}>
              {/* Selected Clue Input */}
              {selectedClue && !completedWords.has(selectedClue.id) && (
                <div className={styles.inputSection}>
                  <div className={styles.inputLabel}>
                    <span className={styles.inputDirection}>
                      {selectedDirection === 'across' ? '→' : '↓'}
                    </span>
                    <span className={styles.inputClue}>
                      {selectedClue.number}. {selectedClue.clue}
                    </span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <input
                      ref={inputRef}
                      type="text"
                      className={`${styles.wordInput} ${isWrong ? styles.wrong : ''} ${isCorrect ? styles.correct : ''}`}
                      value={wordInput}
                      onChange={(e) => {
                        setWordInput(e.target.value.toUpperCase());
                        if (isWrong) setIsWrong(false);
                      }}
                      onKeyDown={handleKeyDown}
                      placeholder="Type the word..."
                      autoFocus
                      maxLength={selectedClue.answer.length}
                      disabled={gameOver}
                      style={{ fontSize: isMobile ? '16px' : 'inherit' }}
                    />
                    <button 
                      className={styles.submitBtn}
                      onClick={handleWordSubmit}
                      disabled={gameOver}
                    >
                      <CheckCircle size={18} />
                    </button>
                    {/* ✅ HINT BUTTON - Shows remaining hints */}
                    <button 
                      className={`${styles.hintBtn} ${hintsRemaining <= 0 ? styles.hintBtnDisabled : ''}`}
                      onClick={revealLetter}
                      disabled={gameOver || hintsRemaining <= 0}
                      title={hintsRemaining > 0 ? `Reveal a letter (-2 points) (${hintsRemaining} left)` : 'No hints remaining'}
                    >
                      <Lightbulb size={18} />
                      <span className={styles.hintCount}>{hintsRemaining}</span>
                    </button>
                  </div>
                  {isWrong && (
                    <div className={styles.wrongFeedback}>
                      <XCircle size={14} />
                      Wrong! Try again.
                    </div>
                  )}
                  {isCorrect && (
                    <div className={styles.correctFeedback}>
                      <CheckCircle size={14} />
                      Correct! ✓
                    </div>
                  )}
                  <div className={styles.inputHint}>
                    <span>{wordInput.length}/{selectedClue.answer.length} letters</span>
                    <span>Press Enter to submit</span>
                  </div>
                </div>
              )}

              {/* Completed words count */}
              <div className={styles.clueStats}>
                <span className={styles.clueStatsText}>
                  {completedCount} of {puzzle?.clues.length} clues solved
                </span>
                {isComplete && (
                  <span className={styles.clueStatsComplete}>🎉 Complete!</span>
                )}
              </div>

              {/* Across Clues */}
              <div className={styles.clueGroup}>
                <h4 className={styles.clueGroupTitle}>Across</h4>
                {puzzle?.clues.filter(c => c.direction === 'across').map((clue) => {
                  const isCompleted = completedWords.has(clue.id);
                  return (
                    <div 
                      key={clue.id} 
                      className={`${styles.clueItem} ${selectedClue?.id === clue.id ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
                      onClick={() => {
                        if (!isCompleted) {
                          selectClue(clue);
                        }
                      }}
                      style={{ cursor: isCompleted ? 'default' : 'pointer' }}
                    >
                      <span className={styles.clueNumber}>{clue.number}.</span>
                      <span className={styles.clueText}>{clue.clue}</span>
                      {isCompleted && (
                        <span className={styles.clueCheck}>✓</span>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Down Clues */}
              <div className={styles.clueGroup}>
                <h4 className={styles.clueGroupTitle}>Down</h4>
                {puzzle?.clues.filter(c => c.direction === 'down').map((clue) => {
                  const isCompleted = completedWords.has(clue.id);
                  return (
                    <div 
                      key={clue.id} 
                      className={`${styles.clueItem} ${selectedClue?.id === clue.id ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
                      onClick={() => {
                        if (!isCompleted) {
                          selectClue(clue);
                        }
                      }}
                      style={{ cursor: isCompleted ? 'default' : 'pointer' }}
                    >
                      <span className={styles.clueNumber}>{clue.number}.</span>
                      <span className={styles.clueText}>{clue.clue}</span>
                      {isCompleted && (
                        <span className={styles.clueCheck}>✓</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Instructions */}
              <div className={`${styles.instructions} ${isMobile ? styles.instructionsMobile : ''}`}>
                <p> Type the full word</p>
                <p>↵ Press Enter to submit</p>
                <p> Arrow keys to navigate</p>
                <p> Click a clue to select it</p>
                <p>💡 {hintsRemaining} hints remaining</p>
                {isMobile && (
                  <p className={styles.mobileHint}>💡 Tap a clue to select it</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crossword;
