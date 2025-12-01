'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TERMINAL_LINES = [
  '> INITIALIZING PULSE_CORE...',
  '> LOADING ANALYTICS MODULES...',
  '> CONNECTING TO DATA_STREAM...',
  '> CALIBRATING NEURAL ENGINE...',
  '> SYSTEM_READY',
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setLines((prev) => [...prev, TERMINAL_LINES[currentLineIndex]]);
      setCurrentLineIndex((prev) => prev + 1);
    }, 350);

    return () => clearTimeout(timeout);
  }, [currentLineIndex, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white font-mono text-xs sm:text-sm md:text-base"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }}
    >
      <div className="flex w-full max-w-md flex-col gap-1.5 px-6 md:gap-2 md:px-8">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`tracking-wide text-black ${i === TERMINAL_LINES.length - 1 ? 'text-green-600' : ''}`}
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.7 }}
          className="inline-block h-4 w-2 bg-black md:h-5 md:w-3"
        />
      </div>
    </motion.div>
  );
}
