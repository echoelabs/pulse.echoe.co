'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TERMINAL_LINES = [
    "> INITIALIZING ECHOE_CORE...",
    "> LOADING NEURAL MODULES...",
    "> CONNECTING TO OMNI_CHANNEL...",
    "> OPTIMIZING VISUAL CORTEX...",
    "> SYSTEM_READY"
]

export default function Loader({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<string[]>([])
    const [currentLineIndex, setCurrentLineIndex] = useState(0)

    useEffect(() => {
        if (currentLineIndex >= TERMINAL_LINES.length) {
            const timeout = setTimeout(() => {
                onComplete()
            }, 800)
            return () => clearTimeout(timeout)
        }

        const timeout = setTimeout(() => {
            setLines(prev => [...prev, TERMINAL_LINES[currentLineIndex]])
            setCurrentLineIndex(prev => prev + 1)
        }, 400) // Speed of each line appearing

        return () => clearTimeout(timeout)
    }, [currentLineIndex, onComplete])

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center font-mono text-sm md:text-base"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="flex flex-col gap-2 w-full max-w-md p-8">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-black"
                    >
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-3 h-5 bg-black inline-block ml-1"
                />
            </div>
        </motion.div>
    )
}
