'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Hero from '@/components/Hero';
import Scene from '@/components/Scene';
import UI from '@/components/UI';
import Loader from '@/components/Loader';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Blueprint from '@/components/Blueprint';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';
import BackgroundController from '@/components/BackgroundController';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();

  // Refresh Lenis after loading completes to recalculate scroll height
  useEffect(() => {
    if (!isLoading && lenis) {
      setTimeout(() => {
        lenis.resize();
      }, 100);
    }
  }, [isLoading, lenis]);

  return (
    <main className="relative min-h-[200vh] w-full">
      <CustomCursor />
      <BackgroundController />

      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <UI />
          <Scene />
          <Hero />
          {/* Spacer for scrolling to enable zoom effects */}
          <div className="h-screen w-full"></div>

          <div className="relative z-10">
            <Features />

            <Process />

            <Blueprint />

            <Impact />

            <Footer />
          </div>
        </>
      )}
    </main>
  );
}
