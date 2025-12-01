'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useState, useCallback, type MouseEvent } from 'react';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function Impact() {
  const [displayText, setDisplayText] = useState('INTO REVENUE');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const scrambleText = useCallback(() => {
    let iterations = 0;
    const targetText = 'INTO REVENUE';

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((letter, index) => {
            if (index < iterations) {
              return targetText[index];
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join('')
      );

      if (iterations >= targetText.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);
  }, []);

  return (
    <section
      className="group relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-24 text-center text-white md:px-12"
      onMouseMove={handleMouseMove}
      onMouseEnter={scrambleText}
    >
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-20" />

      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 255, 136, 0.1),
                            transparent 80%
                        )
                    `,
        }}
      />

      {/* Decorative Floating Elements */}
      <div className="animate-blob absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#00ff88] opacity-5 mix-blend-multiply blur-3xl filter" />
      <div className="animate-blob animation-delay-2000 absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-purple-500 opacity-5 mix-blend-multiply blur-3xl filter" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl"
      >
        <div className="mb-4 flex justify-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-400 backdrop-blur-sm">
            NEXT_GEN_INTERFACE
          </span>
        </div>

        <h2 className="mb-8 text-6xl leading-none font-bold tracking-tighter select-none md:text-9xl">
          TURN DATA <br />
          <span
            className="cursor-pointer bg-gradient-to-r from-white via-[#00ff88] to-gray-400 bg-clip-text font-mono text-transparent"
            onMouseEnter={scrambleText}
            onClick={scrambleText}
          >
            {displayText}
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-xl leading-relaxed font-light text-gray-400 md:text-2xl">
          Stop guessing. Start knowing.
          <span className="font-medium text-white">
            {' '}
            Real-time insights and predictive analytics{' '}
          </span>
          that turn your store data into revenue.
        </p>

        {/* Call to Action Button */}
        <motion.div className="mt-12" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="mx-auto flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black transition-colors duration-300 hover:bg-[#00ff88]">
            Get Started
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
