'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useState, useEffect, useCallback, MouseEvent } from 'react'

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?"

export default function Impact() {
    const [displayText, setDisplayText] = useState("INTO REVENUE")
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    const scrambleText = useCallback(() => {
        let iterations = 0
        const targetText = "INTO REVENUE"

        const interval = setInterval(() => {
            setDisplayText(targetText.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return targetText[index]
                    }
                    return LETTERS[Math.floor(Math.random() * LETTERS.length)]
                })
                .join("")
            )

            if (iterations >= targetText.length) {
                clearInterval(interval)
            }

            iterations += 1 / 3
        }, 30)
    }, [])

    return (
        <section
            className="w-full min-h-[80vh] bg-black text-white py-24 px-4 md:px-12 flex flex-col justify-center items-center text-center relative overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseEnter={scrambleText}
        >
            {/* Interactive Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

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
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff88] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-5xl relative z-10"
            >
                <div className="mb-4 flex justify-center">
                    <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-gray-400 bg-white/5 backdrop-blur-sm">
                        NEXT_GEN_INTERFACE
                    </span>
                </div>

                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-none select-none">
                    TURN DATA <br />
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff88] to-gray-400 cursor-pointer font-mono"
                        onMouseEnter={scrambleText}
                        onClick={scrambleText}
                    >
                        {displayText}
                    </span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Stop guessing. Start knowing.
                    <span className="text-white font-medium"> Real-time insights and predictive analytics </span>
                    that turn your store data into revenue.
                </p>

                {/* Call to Action Button */}
                <motion.div
                    className="mt-12"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#00ff88] transition-colors duration-300 flex items-center gap-2 mx-auto">
                        Get Started
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}
