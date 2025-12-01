'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'INIT' },
  { id: 'features', label: 'CAPABILITIES' },
  { id: 'process', label: 'PIPELINE' },
  { id: 'blueprint', label: 'CORE' },
  { id: 'impact', label: 'IMPACT' },
  { id: 'footer', label: 'EOF' },
];

export default function UI() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to lat/lng style coordinates
      const lat = ((e.clientY / window.innerHeight) * 180 - 90).toFixed(4);
      const lng = ((e.clientX / window.innerWidth) * 360 - 180).toFixed(4);
      setCursorPos({ x: parseFloat(lng), y: parseFloat(lat) });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / documentHeight;

      // Determine current section based on scroll
      const sectionIndex = Math.min(
        Math.floor(scrollPercentage * sections.length),
        sections.length - 1
      );
      setCurrentSection(sectionIndex);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Green indicator - always green */}
      <div className="pointer-events-none fixed top-6 left-6 z-20 flex h-2 items-center md:top-12 md:left-12">
        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
      </div>

      {/* ONLINE text - inverts with background, positioned to align with indicator */}
      <div className="pointer-events-none fixed top-6 left-[calc(1.5rem+0.5rem+0.5rem)] z-20 flex h-2 items-center mix-blend-difference md:top-12 md:left-[calc(3rem+0.5rem+0.5rem)]">
        <span className="font-mono text-[10px] tracking-widest text-white">ONLINE</span>
      </div>

      <div className="pointer-events-none fixed inset-0 z-20 flex flex-col justify-between p-6 mix-blend-difference md:p-12">
        {/* Top Bar */}
        <div className="flex items-start justify-between">
          <div className="flex flex-row items-center gap-2 opacity-0">
            {/* Spacer to maintain layout */}
            <div className="h-2 w-2" />
            <span className="font-mono text-[10px] tracking-widest">ONLINE</span>
          </div>
          <div className="text-right font-mono text-[10px] text-white tabular-nums">
            <p>
              <span className="inline-block w-[28px]">LAT:</span>{' '}
              <span className="inline-block w-[65px] text-right">
                {cursorPos.y > 0 ? '+' : ''}
                {cursorPos.y.toFixed(4)}
              </span>
            </p>
            <p>
              <span className="inline-block w-[65px]">LNG:</span>{' '}
              <span className="inline-block w-[65px] text-right">
                {cursorPos.x > 0 ? '+' : ''}
                {cursorPos.x.toFixed(4)}
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-end justify-between">
          <div className="font-mono text-[10px] text-white">
            <p>MEM: 64GB</p>
            <p>CPU: 12 CORE</p>
          </div>
          <div className="text-right font-mono text-[10px] text-white tabular-nums">
            <p className="font-bold">
              {String(currentSection + 1).padStart(2, '0')}/
              {String(sections.length).padStart(2, '0')}
            </p>
            <p className="opacity-70">{sections[currentSection].label}</p>
          </div>
        </div>
      </div>
    </>
  );
}
