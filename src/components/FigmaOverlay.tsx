'use client'

import { useState } from 'react'

interface FigmaOverlayProps {
    children: React.ReactNode
    label?: string
    className?: string
}

export default function FigmaOverlay({ children, label = 'div.component.flex', className = '' }: FigmaOverlayProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && (
                <>
                    {/* Blue border */}
                    <div className={`absolute inset-0 border-2 border-blue-500 pointer-events-none z-50 rounded transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Label tag */}
                    <div className={`absolute -top-6 left-0 bg-blue-500 text-white px-2 py-1 text-xs font-mono rounded pointer-events-none z-50 transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                        {label}
                    </div>
                </>
            )}
        </div>
    )
}
