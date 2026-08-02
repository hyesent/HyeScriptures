// src/components/Games/VersePuzzle.tsx
import React, { useState, useEffect, useMemo } from 'react';
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
  Shuffle,
  Grid,
  Layers,
  ChevronRight,
  Scroll,
  Plus,
  Minus,
  Award
} from 'lucide-react';
import { 
  getVersePuzzle, 
  getRandomVersePuzzles, 
  getPuzzleCategories,
  getPuzzleDifficulties,
  versePuzzles
} from '../../data/games/verse-puzzle';
import type { VersePuzzle } from '../../data/games/verse-puzzle';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './VersePuzzle.module.css';

interface VersePuzzleProps {
  onBack: () => void;
}

type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';
type GameMode = 'scroll' | 'challenge' | 'speed';

interface PuzzlePiece {
  id: string;
  text: string;
  isCorrect: boolean;
  isPlaced: boolean;
  correctIndex: number;
  currentIndex: number;
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Scroll: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="16" x2="16" y2="16" />
      <line x1="8" y1="12" x2="12" y2="12" />
    </svg>
  ),
  Fragment: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
};

const VersePuzzle: React.FC<VersePuzzleProps> = ({ onBack }) => {
  // ================================================================
  // STATE
  // ================================================================
  
  const [puzzle, setPuzzle] = useState<VersePuzzle | null>(null);
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [placedPieces, setPlacedPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);
  
  // Game Status
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameMode, setGameMode] = useState<GameMode>('scroll');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [category, setCategory] = useState<string>('all');
  
  // Scoring
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [combo, setCombo] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);

  // ================================================================
  // GAME INITIALIZATION
  // ================================================================

  const initializePuzzle = () => {
    let newPuzzle = getVersePuzzle(difficulty);
    
    if (category !== 'all') {
      const filtered = versePuzzles.filter(p => p.difficulty === difficulty && p.category === category);
      if (filtered.length > 0) {
        newPuzzle = filtered[Math.floor(Math.random() * filtered.length)];
      }
    }
    
    setPuzzle(newPuzzle);
    
    const wordCount = newPuzzle.words.length;
    const newPieces: PuzzlePiece[] = newPuzzle.words.map((word, index) => ({
      id: `piece-${index}`,
      text: word,
      isCorrect: false,
      isPlaced: false,
      correctIndex: index,
      currentIndex: index,
    }));
    
    let shuffledPieces = [...newPieces];
    const shuffleCount = difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : difficulty === 'hard' ? 4 : 5;
    
    for (let i = 0; i < shuffleCount; i++) {
      shuffledPieces = shuffledPieces.sort(() => Math.random() - 0.5);
    }
    
    const correctCount = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 2 : difficulty === 'hard' ? 1 : 0;
    for (let i = 0; i < Math.min(correctCount, shuffledPieces.length); i++) {
      const correctPiece = newPieces.find(p => p.correctIndex === i);
      if (correctPiece) {
        const shuffledIndex = shuffledPieces.findIndex(p => p.id === correctPiece.id);
        if (shuffledIndex > -1) {
          [shuffledPieces[i], shuffledPieces[shuffledIndex]] = [shuffledPieces[shuffledIndex], shuffledPieces[i]];
        }
      }
    }
    
    setPieces(shuffledPieces.map((p, index) => ({ ...p, currentIndex: index })));
    setPlacedPieces([]);
    setSelectedPiece(null);
    setHoveredSlot(null);
    setShowCelebration(false);
    setIsFading(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setStreak(0);
    setCombo(0);
    setTotalCorrect(0);
    setTotalWrong(0);
    setTime(0);
    setAttempts(0);
    setHintUsed(false);
    setShowReference(false);
    setXpEarned(0);
    setLevel(1);
    setBestScore(gameEngine.getBestScore('verse-puzzle'));
    
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    setTimerInterval(interval);
    
    initializePuzzle();
  };

  // ================================================================
  // DRAG & DROP / CLICK LOGIC
  // ================================================================

  const handlePieceClick = (pieceId: string) => {
    if (gameOver || !puzzle) return;
    if (isFading) return;
    
    const piece = pieces.find(p => p.id === pieceId);
    if (!piece || piece.isPlaced) return;
    
    if (selectedPiece === pieceId) {
      setSelectedPiece(null);
      return;
    }
    
    setSelectedPiece(pieceId);
    
    if (hoveredSlot !== null) {
      handlePlacePiece(pieceId, hoveredSlot);
    }
  };

  const handleSlotClick = (index: number) => {
    if (gameOver || !puzzle) return;
    if (isFading) return;
    
    setHoveredSlot(index);
    
    if (selectedPiece) {
      handlePlacePiece(selectedPiece, index);
    }
  };

  const handlePlacePiece = (pieceId: string, slotIndex: number) => {
    if (gameOver || !puzzle) return;
    
    const piece = pieces.find(p => p.id === pieceId);
    if (!piece || piece.isPlaced) return;
    
    const slotTaken = placedPieces.some(p => p.correctIndex === slotIndex);
    if (slotTaken) return;
    
    const isCorrect = piece.correctIndex === slotIndex;
    
    if (isCorrect) {
      const updatedPiece = { ...piece, isCorrect: true, isPlaced: true };
      setPieces(prev => prev.map(p => p.id === pieceId ? updatedPiece : p));
      setPlacedPieces(prev => [...prev, updatedPiece]);
      setSelectedPiece(null);
      setHoveredSlot(null);
      
      setTotalCorrect(prev => prev + 1);
      setStreak(prev => prev + 1);
      setCombo(prev => prev + 1);
      const points = 10 + Math.floor(combo / 3) * 5;
      setScore(prev => prev + points);
      
      const baseXP = 12;
      const streakBonus = Math.min(streak * 3, 15);
      setXpEarned(prev => prev + baseXP + streakBonus);
      
      setAttempts(0);
      
      if ((totalCorrect + 1) % 5 === 0 && totalCorrect > 0) {
        setLevel(prev => prev + 1);
      }
      
      if (placedPieces.length + 1 === puzzle.words.length) {
        handlePuzzleComplete();
      }
    } else {
      setTotalWrong(prev => prev + 1);
      setStreak(0);
      setCombo(0);
      setAttempts(prev => prev + 1);
      
      const pieceElement = document.getElementById(pieceId);
      if (pieceElement) {
        pieceElement.classList.add(styles.shake);
        setTimeout(() => {
          pieceElement.classList.remove(styles.shake);
        }, 500);
      }
      
      if (attempts >= 2) {
        const remainingPieces = pieces.filter(p => !p.isPlaced);
        const shuffled = remainingPieces.sort(() => Math.random() - 0.5);
        setPieces(prev => {
          const newPieces = prev.filter(p => p.isPlaced);
          shuffled.forEach((p, index) => {
            newPieces.push({ ...p, currentIndex: index + newPieces.length });
          });
          return newPieces;
        });
        setAttempts(0);
        setSelectedPiece(null);
      }
    }
  };

  // ================================================================
  // PUZZLE COMPLETE
  // ================================================================

  const handlePuzzleComplete = () => {
    setShowCelebration(true);
    setIsFading(true);
    
    const result = gameEngine.recordAnswer('verse-puzzle', true, puzzle?.category || 'mixed');
    let bonus = 0;
    if (!hintUsed) bonus += 20;
    if (time < 30) bonus += 10;
    if (streak > 5) bonus += 5;
    
    setScore(prev => prev + bonus);
    setXpEarned(prev => prev + bonus);
    
    setTimeout(() => {
      setIsFading(false);
      setGameOver(true);
      if (timerInterval) {
        clearInterval(timerInterval);
        setTimerInterval(null);
      }
    }, 3000);
  };

  // ================================================================
  // HINT SYSTEM
  // ================================================================

  const useHint = () => {
    if (hintUsed || gameOver || !puzzle) return;
    
    setHintUsed(true);
    
    const nextIndex = placedPieces.length;
    const correctPiece = pieces.find(p => p.correctIndex === nextIndex && !p.isPlaced);
    
    if (correctPiece) {
      setSelectedPiece(correctPiece.id);
      
      setTimeout(() => {
        handlePlacePiece(correctPiece.id, nextIndex);
      }, 1500);
    }
  };

  // ================================================================
  // RENDER HELPERS
  // ================================================================

  const getTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = puzzle ? (placedPieces.length / puzzle.words.length) * 100 : 0;

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
              <Icons.Scroll />
            </div>
            <h2 className={styles.startTitle}>Verse Puzzle</h2>
            <p className={styles.startSubtitle}>Assemble the shattered verse pieces in the correct order</p>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Difficulty</span>
              <div className={styles.chipGroup}>
                {getPuzzleDifficulties().map((diff) => (
                  <button
                    key={diff.value}
                    className={`${styles.chip} ${difficulty === diff.value ? styles.active : ''}`}
                    onClick={() => setDifficulty(diff.value as Difficulty)}
                  >
                    {diff.label}
                    <span className={styles.chipCount}>{diff.words} words</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Category</span>
              <div className={styles.chipGroup}>
                {getPuzzleCategories().map((cat) => (
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

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Game Mode</span>
              <div className={styles.modeGrid}>
                {[
                  { id: 'scroll', label: 'Classic', icon: <Scroll size={20} />, desc: 'Assemble at your pace' },
                  { id: 'challenge', label: 'Challenge', icon: <Flame size={20} />, desc: 'Limited attempts' },
                  { id: 'speed', label: 'Speed', icon: <Clock size={20} />, desc: 'Race against time' }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    className={`${styles.modeChip} ${gameMode === mode.id ? styles.active : ''}`}
                    onClick={() => setGameMode(mode.id as GameMode)}
                  >
                    <span className={styles.modeIcon}>{mode.icon}</span>
                    <span className={styles.modeLabel}>{mode.label}</span>
                    <span className={styles.modeDesc}>{mode.desc}</span>
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
              Unroll the Scroll
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

  if (gameOver) {
    const accuracy = totalCorrect + totalWrong > 0 
      ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) 
      : 0;
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
              {showCelebration ? '🏆' : '📜'}
            </motion.span>

            <h2 className={styles.resultsTitle}>
              {showCelebration ? 'Scroll Restored!' : 'Scroll Fragments Lost'}
            </h2>
            
            {puzzle && (
              <div className={styles.resultsVerse}>
                <p className={styles.resultsVerseText}>{puzzle.verse}</p>
                <p className={styles.resultsVerseReference}>— {puzzle.reference}</p>
              </div>
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
  // ACTIVE GAME SCREEN
  // ================================================================

  if (!puzzle) return null;

  const isComplete = placedPieces.length === puzzle.words.length;

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.gameHeader}>
          <div>
            <span className={styles.gameModeLabel}>
              <Scroll size={16} />
              Verse Puzzle
            </span>
            <span className={styles.gameProgress}>
              Level {level} • {placedPieces.length} of {puzzle.words.length} placed
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
            transition={{ duration: TIMING.NORMAL / 1000 }}
          />
        </div>

        {/* Verse Reference */}
        <div className={styles.referenceToggle}>
          <button
            onClick={() => setShowReference(!showReference)}
            className={styles.referenceBtn}
          >
            <BookOpen size={14} />
            {showReference ? puzzle.reference : 'Click to reveal reference'}
          </button>
        </div>

        {/* The Scroll - Piece Slots */}
        <div className={styles.scrollContainer}>
          <div className={styles.scrollDecorations}>
            <div className={styles.scrollTop} />
            <div className={styles.scrollBottom} />
          </div>
          
          <div className={styles.slotsGrid}>
            {puzzle.words.map((_, index) => {
              const placed = placedPieces.find(p => p.correctIndex === index);
              const isHovered = hoveredSlot === index;
              
              return (
                <motion.div
                  key={`slot-${index}`}
                  onClick={() => handleSlotClick(index)}
                  onMouseEnter={() => setHoveredSlot(index)}
                  onMouseLeave={() => setHoveredSlot(null)}
                  className={`${styles.slot} ${placed ? styles.slotFilled : ''} ${isHovered ? styles.slotHovered : ''}`}
                  whileHover={!placed ? { scale: 1.02 } : {}}
                >
                  {placed ? (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={styles.slotText}
                    >
                      {placed.text}
                    </motion.span>
                  ) : (
                    <span className={styles.slotEmpty}>_</span>
                  )}
                  {!placed && isHovered && selectedPiece && (
                    <div className={styles.slotHighlight} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Available Pieces */}
        <div className={styles.piecesContainer}>
          <h3 className={styles.piecesTitle}>
            <Icons.Fragment />
            Fragments Available
          </h3>
          <div className={styles.piecesGrid}>
            {pieces.filter(p => !p.isPlaced).map((piece) => (
              <motion.button
                key={piece.id}
                id={piece.id}
                onClick={() => handlePieceClick(piece.id)}
                className={`${styles.piece} ${selectedPiece === piece.id ? styles.pieceSelected : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {piece.text}
              </motion.button>
            ))}
          </div>
          
          {pieces.filter(p => !p.isPlaced).length === 0 && (
            <p className={styles.piecesComplete}>
              All pieces placed!
            </p>
          )}
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button
            onClick={useHint}
            disabled={hintUsed}
            className={`${styles.hintBtn} ${hintUsed ? styles.hintUsed : ''}`}
          >
            <Lightbulb size={16} />
            {hintUsed ? 'Hint Used' : 'Use Hint'}
          </button>
          <button
            onClick={() => {
              const remainingPieces = pieces.filter(p => !p.isPlaced);
              const shuffled = remainingPieces.sort(() => Math.random() - 0.5);
              setPieces(prev => {
                const newPieces = prev.filter(p => p.isPlaced);
                shuffled.forEach((p, index) => {
                  newPieces.push({ ...p, currentIndex: index + newPieces.length });
                });
                return newPieces;
              });
              setSelectedPiece(null);
              setAttempts(0);
            }}
            className={styles.shuffleBtn}
            disabled={pieces.filter(p => !p.isPlaced).length === 0}
          >
            <Shuffle size={16} />
            Reshuffle
          </button>
        </div>

        {/* Wrong Attempts */}
        {attempts > 0 && (
          <div className={styles.attemptsWarning}>
            Wrong placement! ({3 - attempts} attempts left before reshuffle)
          </div>
        )}

        {/* Hint message */}
        {selectedPiece && hintUsed && (
          <div className={styles.hintMessage}>
            <Lightbulb size={14} />
            The selected piece belongs in the highlighted slot!
          </div>
        )}

        {/* Completion Celebration */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={styles.celebrationOverlay}
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className={styles.celebrationCard}
              >
                <div className={styles.celebrationIcon}>🎉</div>
                <h2 className={styles.celebrationTitle}>Scroll Restored!</h2>
                <p className={styles.celebrationSubtitle}>
                  You've assembled the verse perfectly!
                </p>
                <div className={styles.celebrationVerse}>
                  <p className={styles.celebrationVerseText}>{puzzle.verse}</p>
                  <p className={styles.celebrationReference}>— {puzzle.reference}</p>
                </div>
                <div className={styles.celebrationStats}>
                  <div className={styles.celebrationStat}>
                    <span className={styles.celebrationStatValue}>{score}</span>
                    <span className={styles.celebrationStatLabel}>Score</span>
                  </div>
                  <div className={styles.celebrationStat}>
                    <span className={styles.celebrationStatValue}>{getTimeString(time)}</span>
                    <span className={styles.celebrationStatLabel}>Time</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setGameOver(true);
                    if (timerInterval) {
                      clearInterval(timerInterval);
                      setTimerInterval(null);
                    }
                  }}
                  className={styles.celebrationBtn}
                >
                  Continue
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VersePuzzle;