'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Radio, Brain, MessageSquare, RefreshCw, Terminal } from 'lucide-react'

const steps = [
    {
        id: '01',
        title: 'Collect',
        description: 'Capture every interaction across your store. Page views, clicks, carts, purchases, and customer journeys in real-time.',
        icon: Radio,
        code: '> connecting_to_store\n> tracking_initialized\n> events_streaming...'
    },
    {
        id: '02',
        title: 'Analyze',
        description: 'ML algorithms process patterns, detect anomalies, and identify trends. Understanding customer behavior at scale.',
        icon: Brain,
        code: '> processing_events\n> pattern_detected: cart_abandonment\n> confidence: 0.94'
    },
    {
        id: '03',
        title: 'Predict',
        description: 'Forecast revenue, inventory needs, and customer lifetime value. Know what happens next before it does.',
        icon: MessageSquare,
        code: '> generating_forecast\n> revenue_trend: +12.4%\n> confidence_interval: 95%'
    },
    {
        id: '04',
        title: 'Optimize',
        description: 'Actionable recommendations to improve conversion, reduce churn, and maximize revenue. Data becomes decisions.',
        icon: RefreshCw,
        code: '> analyzing_funnel\n> recommendation: optimize_checkout\n> potential_lift: +8.2%'
    },
]

export default function Process() {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <section className="w-full min-h-screen bg-white text-black py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-4 md:px-12 flex flex-col justify-center h-full relative z-10">

                {/* Header Section */}
                <div className="w-full mb-12 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        PROCESSING_PIPELINE
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    {/* Left: Step Navigation */}
                    <div className="flex flex-col justify-center gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(i)}
                                className={`text-left transition-all duration-300 group ${activeStep === i ? 'opacity-100 translate-x-4' : 'opacity-30 hover:opacity-60'
                                    }`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${activeStep === i ? 'border-black bg-black text-white' : 'border-gray-300'
                                        }`}>
                                        <span className="font-mono text-lg font-bold">{step.id}</span>
                                    </div>
                                    <div>
                                        <span className="text-2xl md:text-3xl font-light block group-hover:underline decoration-1 underline-offset-4">
                                            {step.title}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Content Cards */}
                    <div className="flex items-center justify-center relative">
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl transform scale-150 opacity-50 -z-10" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative"
                            >
                                {/* Card Header */}
                                <div className="p-8 md:p-10 pb-0 relative">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-4 bg-black text-white rounded-2xl inline-block shadow-lg">
                                            {(() => {
                                                const Icon = steps[activeStep].icon
                                                return <Icon size={32} strokeWidth={1.5} />
                                            })()}
                                        </div>
                                        <span className="font-mono text-6xl font-bold text-gray-100 select-none">
                                            {steps[activeStep].id}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                        {steps[activeStep].title}
                                    </h3>
                                    <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                        {steps[activeStep].description}
                                    </p>
                                </div>

                                {/* Card Footer / Terminal */}
                                <div className="bg-gray-50 p-6 border-t border-gray-100 font-mono text-sm">
                                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs uppercase tracking-wider">
                                        <Terminal size={12} />
                                        <span>System Log</span>
                                    </div>
                                    <div className="text-gray-600 space-y-1">
                                        {steps[activeStep].code.split('\n').map((line, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 + 0.2 }}
                                            >
                                                {line}
                                            </motion.div>
                                        ))}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            className="w-2 h-4 bg-black inline-block align-middle ml-1"
                                        />
                                    </div>
                                </div>

                                {/* Progress Bar Top */}
                                <motion.div
                                    className="absolute top-0 left-0 h-1 bg-black"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 4, ease: "linear" }}
                                    onAnimationComplete={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
