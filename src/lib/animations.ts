// src/lib/animations.ts
// Centralized animation timing and variants for Bible Arena

export const TIMING = {
  FAST: 180,      // Micro-interactions, hover states
  NORMAL: 280,    // Standard transitions, button clicks
  LARGE: 450,     // Card reveals, panel slides
  SCENE: 700,     // Scene changes, entrance/exit
} as const;

export const EASING = {
  DEFAULT: [0.25, 0.46, 0.45, 0.94],  // Ease out quad
  SMOOTH: [0.25, 0.1, 0.25, 1],       // Ease in out
  BOUNCE: [0.34, 1.56, 0.64, 1],      // Gentle bounce
  GLIDE: [0.16, 1, 0.3, 1],           // Smooth glide
} as const;

// ========== PAGE TRANSITIONS ==========
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: TIMING.SCENE / 1000,
      ease: EASING.SMOOTH,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    transition: {
      duration: TIMING.LARGE / 1000,
      ease: EASING.DEFAULT,
    },
  },
};

// ========== CARD VARIANTS ==========
export const cardVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: TIMING.LARGE / 1000,
      ease: EASING.GLIDE,
    },
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: TIMING.NORMAL / 1000,
      ease: EASING.DEFAULT,
    },
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: TIMING.FAST / 1000,
      ease: EASING.DEFAULT,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: TIMING.FAST / 1000,
      ease: EASING.DEFAULT,
    },
  },
};

// ========== BUTTON VARIANTS ==========
export const buttonVariants = {
  idle: {
    scale: 1,
    y: 0,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  hover: {
    scale: 1.03,
    y: -3,
    boxShadow: '0 8px 32px rgba(212,175,55,0.2)',
    transition: {
      duration: TIMING.NORMAL / 1000,
      ease: EASING.DEFAULT,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: TIMING.FAST / 1000,
      ease: EASING.DEFAULT,
    },
  },
};

// ========== FADE SLIDE ==========
export const fadeSlideVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.NORMAL / 1000,
      ease: EASING.SMOOTH,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: TIMING.FAST / 1000,
      ease: EASING.DEFAULT,
    },
  },
};

// ========== STAGGERED LIST ==========
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: TIMING.NORMAL / 1000,
      ease: EASING.GLIDE,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: {
      duration: TIMING.FAST / 1000,
      ease: EASING.DEFAULT,
    },
  },
};

// ========== GOLD GLOW PULSE ==========
export const goldPulse = {
  initial: {
    boxShadow: '0 0 0 rgba(212,175,55,0)',
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(212,175,55,0.1)',
      '0 0 40px rgba(212,175,55,0.2)',
      '0 0 20px rgba(212,175,55,0.1)',
    ],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

// ========== RESULTS REVEAL ==========
export const resultsReveal = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: TIMING.LARGE / 1000,
      ease: EASING.BOUNCE,
    },
  },
};

// ========== XP COUNTER ==========
export const xpCounter = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.15, 1],
    transition: {
      duration: 0.6,
      ease: EASING.BOUNCE,
    },
  },
};

// ========== ACHIEVEMENT SLIDE ==========
export const achievementSlide = {
  initial: {
    opacity: 0,
    y: -40,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: TIMING.LARGE / 1000,
      ease: EASING.BOUNCE,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    scale: 0.8,
    transition: {
      duration: TIMING.NORMAL / 1000,
      ease: EASING.DEFAULT,
    },
  },
};

// ========== CORRECT ANSWER BURST ==========
export const correctBurst = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1.4,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASING.BOUNCE,
    },
  },
  exit: {
    scale: 1,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// ========== WRONG ANSWER SHAKE ==========
export const wrongShake = {
  initial: { x: 0 },
  animate: {
    x: [-6, 6, -4, 4, -2, 2, 0],
    transition: {
      duration: 0.5,
      ease: EASING.DEFAULT,
    },
  },
};

// ========== LEVEL UP ==========
export const levelUpVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotate: -5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: EASING.BOUNCE,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.5,
    transition: {
      duration: 0.3,
    },
  },
};