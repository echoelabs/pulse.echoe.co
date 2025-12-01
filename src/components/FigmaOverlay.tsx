'use client';

import { useState } from 'react';

interface FigmaOverlayProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export default function FigmaOverlay({
  children,
  label = 'div.component.flex',
  className = '',
}: FigmaOverlayProps) {
  const [isHovered, setIsHovered] = useState(false);

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
          <div
            className={`pointer-events-none absolute inset-0 z-50 rounded border-2 border-blue-500 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Label tag */}
          <div
            className={`pointer-events-none absolute -top-6 left-0 z-50 rounded bg-blue-500 px-2 py-1 font-mono text-xs text-white transition-all duration-200 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
          >
            {label}
          </div>
        </>
      )}
    </div>
  );
}
