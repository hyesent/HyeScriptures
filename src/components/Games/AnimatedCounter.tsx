// src/components/Games/AnimatedCounter.tsx
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './AnimatedCounter.module.css';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 600,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 60,
  });

  useEffect(() => {
    motionValue.set(value);
    
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [value, motionValue, springValue]);

  return (
    <motion.span 
      className={`${styles.counter} ${className}`}
      initial={{ scale: 1 }}
      animate={{ 
        scale: [1, 1.05, 1],
        transition: { duration: duration / 1000, ease: 'easeOut' }
      }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};