'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
    { id: 'hero', label: 'INIT' },
    { id: 'features', label: 'CAPABILITIES' },
    { id: 'process', label: 'PIPELINE' },
    { id: 'blueprint', label: 'CORE' },
    { id: 'impact', label: 'IMPACT' },
    { id: 'footer', label: 'EOF' },
]

export default function UI() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
    const [currentSection, setCurrentSection] = useState(0)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize to lat/lng style coordinates
            const lat = ((e.clientY / window.innerHeight) * 180 - 90).toFixed(4)
            const lng = ((e.clientX / window.innerWidth) * 360 - 180).toFixed(4)
            setCursorPos({ x: parseFloat(lng), y: parseFloat(lat) })
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercentage = scrollPosition / documentHeight

            // Determine current section based on scroll
            const sectionIndex = Math.min(
                Math.floor(scrollPercentage * sections.length),
                sections.length - 1
            )
            setCurrentSection(sectionIndex)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initialize

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {/* Green indicator - always green */}
            <div className="fixed top-6 md:top-12 left-6 md:left-12 pointer-events-none z-20 h-2 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>

            {/* ONLINE text - inverts with background, positioned to align with indicator */}
            <div className="fixed top-6 md:top-12 left-[calc(1.5rem+0.5rem+0.5rem)] md:left-[calc(3rem+0.5rem+0.5rem)] pointer-events-none z-20 h-2 flex items-center mix-blend-difference">
                <span className="text-[10px] font-mono tracking-widest text-white">ONLINE</span>
            </div>

            <div className="fixed inset-0 pointer-events-none z-20 p-6 md:p-12 flex flex-col justify-between mix-blend-difference">
                {/* Top Bar */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-row items-center gap-2 opacity-0">
                        {/* Spacer to maintain layout */}
                        <div className="w-2 h-2" />
                        <span className="text-[10px] font-mono tracking-widest">ONLINE</span>
                    </div>
                    <div className="text-[10px] font-mono text-white text-right tabular-nums">
                        <p><span className="inline-block w-[28px]">LAT:</span> <span className="inline-block w-[65px] text-right">{cursorPos.y > 0 ? '+' : ''}{cursorPos.y.toFixed(4)}</span></p>
                        <p><span className="inline-block w-[65px]">LNG:</span> <span className="inline-block w-[65px] text-right">{cursorPos.x > 0 ? '+' : ''}{cursorPos.x.toFixed(4)}</span></p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-between items-end">
                    <div className="text-[10px] font-mono text-white">
                        <p>MEM: 64GB</p>
                        <p>CPU: 12 CORE</p>
                    </div>
                    <div className="text-[10px] font-mono text-white tabular-nums text-right">
                        <p className="font-bold">{String(currentSection + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}</p>
                        <p className="opacity-70">{sections[currentSection].label}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
