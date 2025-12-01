'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center px-4 text-black md:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-6 font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tighter text-black mix-blend-difference sm:text-7xl md:text-8xl lg:text-9xl"
        >
          pulse
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="relative z-10 mb-2 text-lg font-light text-gray-600 sm:text-xl md:text-2xl"
        >
          ecommerce intelligence platform
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="relative z-10 font-mono text-xs tracking-wide text-gray-400 sm:text-sm md:text-base"
        >
          See what your customers do. Know what they&apos;ll do next.
        </motion.p>
      </motion.div>

      {/* System info - bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-20 left-6 hidden md:left-12 md:block"
      >
        <p className="font-mono text-[10px] tracking-widest text-gray-400">
          SYSTEM_READY
          <br />
          V.1.0.0_ANALYTICS
        </p>
      </motion.div>

      {/* Scroll indicator - bottom center */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-gray-400">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gray-300"
        />
      </motion.div>
    </section>
  );
}
