'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-black px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center relative z-10"
            >
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 mix-blend-difference text-black">
                    pulse
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-600 mb-2 relative z-10">
                    ecommerce intelligence platform
                </p>
                <p className="text-sm md:text-base font-mono text-gray-400 relative z-10">
                    See what your customers do. Know what they'll do next.
                </p>
            </motion.div>

            <div className="absolute bottom-20 left-10 hidden md:block">
                <p className="font-mono text-xs text-gray-400">
                    SYSTEM_READY<br />
                    V.1.0.0_ANALYTICS
                </p>
            </div>
        </section>
    )
}
