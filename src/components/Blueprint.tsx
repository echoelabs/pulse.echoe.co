'use client';

import { motion } from 'framer-motion';

export default function Blueprint() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 py-24 text-white md:px-12">
      {/* Subtle radial gradient */}
      <div className="bg-gradient-radial pointer-events-none absolute inset-0 from-[#00ff88]/5 via-transparent to-transparent" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <div className="mb-10 text-center">
          <div className="mb-6 inline-block rounded-full border border-[#00ff88]/30 bg-black/30 px-4 py-1 backdrop-blur-sm">
            <span className="font-mono text-xs text-[#00ff88]">DATA_ARCHITECTURE</span>
          </div>

          <h2 className="mb-6 text-5xl font-bold tracking-tighter whitespace-nowrap text-white md:text-7xl">
            ANALYTICS<span className="text-[#00ff88]">_</span>ENGINE
          </h2>

          <div className="mx-auto mb-8 h-px w-32 bg-[#00ff88] opacity-50" />
        </div>

        {/* Architecture Diagram */}
        <div className="group relative mb-12 flex aspect-[4/3] w-full max-w-3xl items-center justify-center overflow-hidden rounded-xl border border-[#00ff88]/20 bg-[#0a0a0a]/80 p-8 backdrop-blur-sm md:aspect-[16/9]">
          {/* Inner decorative grid lines */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 h-8 w-8 rounded-tl-lg border-t-2 border-l-2 border-[#00ff88]/30" />
          <div className="absolute top-0 right-0 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-[#00ff88]/30" />
          <div className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-[#00ff88]/30" />
          <div className="absolute right-0 bottom-0 h-8 w-8 rounded-br-lg border-r-2 border-b-2 border-[#00ff88]/30" />

          {/* Central Processing Unit Representation */}
          <div className="relative z-10 flex h-48 w-48 flex-col items-center justify-center gap-4 rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/5 transition-all duration-700 group-hover:border-[#00ff88]/50 group-hover:shadow-[0_0_30px_-10px_rgba(0,255,136,0.2)] md:h-64 md:w-64">
            {/* Core Label */}
            <div className="absolute top-2 left-3 font-mono text-[10px] text-[#00ff88]/70">
              NPU_ARCH_V2
            </div>

            {/* Cores */}
            <div className="grid h-3/4 w-3/4 grid-cols-2 gap-2 p-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden rounded border border-[#00ff88]/20 bg-[#00ff88]/5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  {/* Activity Indicator */}
                  <div className="absolute right-1.5 bottom-1.5 h-1 w-1 animate-pulse rounded-full bg-[#00ff88] shadow-[0_0_5px_#00ff88]" />

                  {/* Abstract Data Lines */}
                  <div className="absolute top-2 right-4 left-2 h-[1px] bg-[#00ff88]/10" />
                  <div className="absolute top-4 right-6 left-2 h-[1px] bg-[#00ff88]/10" />

                  {/* Scanning line effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff88]/10 to-transparent"
                    style={{
                      animation: `scan 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.7}s`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bus / Connections */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-0 h-[1px] w-full bg-[#00ff88]/10" />
            <div className="absolute top-0 left-1/2 h-full w-[1px] bg-[#00ff88]/10" />
          </div>

          {/* Floating Data Points (Decorations) */}
          <div className="absolute top-1/4 left-[15%] h-2 w-2 rounded-full border border-[#00ff88]/30" />
          <div className="absolute right-[15%] bottom-1/4 h-2 w-2 rounded-full border border-[#00ff88]/30" />

          {/* Data stats (Subtle text) */}
          <div className="absolute bottom-4 left-6 flex flex-col gap-1 font-mono text-[10px] text-[#00ff88]/40">
            <div>CLK: 4.2 GHz</div>
            <div>TEMP: 42°C</div>
          </div>
          <div className="absolute right-6 bottom-4 flex flex-col gap-1 text-right font-mono text-[10px] text-[#00ff88]/40">
            <div>MEM: 64GB</div>
            <div>BW: 512GB/s</div>
          </div>
        </div>

        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed font-light text-gray-400 md:text-lg">
          Distributed data processing engineered for real-time analytics and predictive modeling.
          <br className="hidden md:block" />
          Turning billions of events into actionable insights.
        </p>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(200%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
