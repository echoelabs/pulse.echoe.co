'use client'

import { motion } from 'framer-motion'

export default function Blueprint() {
    return (
        <section className="w-full min-h-screen bg-[#0a0a0a] text-white py-24 px-4 md:px-12 flex flex-col justify-center items-center relative overflow-hidden">
            {/* Subtle radial gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-[#00ff88]/5 via-transparent to-transparent pointer-events-none" />

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
                <div className="mb-10 text-center">
                    <div className="inline-block px-4 py-1 border border-[#00ff88]/30 rounded-full mb-6 backdrop-blur-sm bg-black/30">
                        <span className="text-xs font-mono text-[#00ff88]">DATA_ARCHITECTURE</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white whitespace-nowrap">
                        ANALYTICS<span className="text-[#00ff88]">_</span>ENGINE
                    </h2>

                    <div className="h-px w-32 bg-[#00ff88] mx-auto mb-8 opacity-50" />
                </div>

                {/* Architecture Diagram */}
                <div className="relative w-full max-w-3xl aspect-[4/3] md:aspect-[16/9] border border-[#00ff88]/20 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-sm p-8 flex items-center justify-center mb-12 overflow-hidden group">
                    {/* Inner decorative grid lines */}
                    <div className="absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff88]/30 rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff88]/30 rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00ff88]/30 rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff88]/30 rounded-br-lg" />

                    {/* Central Processing Unit Representation */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 border border-[#00ff88]/30 bg-[#00ff88]/5 rounded-lg flex flex-col items-center justify-center gap-4 z-10 transition-all duration-700 group-hover:border-[#00ff88]/50 group-hover:shadow-[0_0_30px_-10px_rgba(0,255,136,0.2)]">
                        {/* Core Label */}
                        <div className="absolute top-2 left-3 text-[10px] font-mono text-[#00ff88]/70">NPU_ARCH_V2</div>

                        {/* Cores */}
                        <div className="grid grid-cols-2 gap-2 w-3/4 h-3/4 p-1">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-[#00ff88]/20 bg-[#00ff88]/5 rounded relative overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                >
                                    {/* Activity Indicator */}
                                    <div className="absolute bottom-1.5 right-1.5 w-1 h-1 bg-[#00ff88] rounded-full animate-pulse shadow-[0_0_5px_#00ff88]" />

                                    {/* Abstract Data Lines */}
                                    <div className="absolute top-2 left-2 right-4 h-[1px] bg-[#00ff88]/10" />
                                    <div className="absolute top-4 left-2 right-6 h-[1px] bg-[#00ff88]/10" />

                                    {/* Scanning line effect */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff88]/10 to-transparent"
                                        style={{
                                            animation: `scan 3s ease-in-out infinite`,
                                            animationDelay: `${i * 0.7}s`
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bus / Connections */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00ff88]/10" />
                        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#00ff88]/10" />
                    </div>

                    {/* Floating Data Points (Decorations) */}
                    <div className="absolute top-1/4 left-[15%] w-2 h-2 border border-[#00ff88]/30 rounded-full" />
                    <div className="absolute bottom-1/4 right-[15%] w-2 h-2 border border-[#00ff88]/30 rounded-full" />

                    {/* Data stats (Subtle text) */}
                    <div className="absolute bottom-4 left-6 text-[10px] font-mono text-[#00ff88]/40 flex flex-col gap-1">
                        <div>CLK: 4.2 GHz</div>
                        <div>TEMP: 42°C</div>
                    </div>
                    <div className="absolute bottom-4 right-6 text-[10px] font-mono text-[#00ff88]/40 flex flex-col gap-1 text-right">
                        <div>MEM: 64GB</div>
                        <div>BW: 512GB/s</div>
                    </div>
                </div>

                <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto text-center leading-relaxed">
                    Distributed data processing engineered for real-time analytics and predictive modeling.
                    <br className="hidden md:block" />
                    Turning billions of events into actionable insights.
                </p>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(200%); opacity: 0; }
                }
            `}</style>
        </section>
    )
}
