'use client'

import { useEffect, useState } from 'react'

const backgroundColors = [
    { color: '#ffffff', threshold: 0 },     // White (Hero)
    { color: '#fafafa', threshold: 0.15 },  // Very light gray (Features)
    { color: '#1a1a2e', threshold: 0.4 },   // Dark blue (Process)
    { color: '#0a0a0a', threshold: 0.65 },  // Near black (Blueprint)
    { color: '#000000', threshold: 0.85 },  // Black (Impact)
]

export default function BackgroundController() {
    const [bgColor, setBgColor] = useState(backgroundColors[0].color)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercentage = scrollPosition / documentHeight

            // Find the appropriate background color
            for (let i = backgroundColors.length - 1; i >= 0; i--) {
                if (scrollPercentage >= backgroundColors[i].threshold) {
                    setBgColor(backgroundColors[i].color)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="fixed inset-0 -z-20 transition-colors duration-1000 ease-in-out"
            style={{ backgroundColor: bgColor }}
        />
    )
}
