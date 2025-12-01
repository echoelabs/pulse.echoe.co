'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Brain, MessageSquare, RefreshCw, Terminal } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Collect',
    description:
      'Capture every interaction across your store. Page views, clicks, carts, purchases, and customer journeys in real-time.',
    icon: Radio,
    code: '> connecting_to_store\n> tracking_initialized\n> events_streaming...',
  },
  {
    id: '02',
    title: 'Analyze',
    description:
      'ML algorithms process patterns, detect anomalies, and identify trends. Understanding customer behavior at scale.',
    icon: Brain,
    code: '> processing_events\n> pattern_detected: cart_abandonment\n> confidence: 0.94',
  },
  {
    id: '03',
    title: 'Predict',
    description:
      'Forecast revenue, inventory needs, and customer lifetime value. Know what happens next before it does.',
    icon: MessageSquare,
    code: '> generating_forecast\n> revenue_trend: +12.4%\n> confidence_interval: 95%',
  },
  {
    id: '04',
    title: 'Optimize',
    description:
      'Actionable recommendations to improve conversion, reduce churn, and maximize revenue. Data becomes decisions.',
    icon: RefreshCw,
    code: '> analyzing_funnel\n> recommendation: optimize_checkout\n> potential_lift: +8.2%',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white py-24 text-black">
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 md:px-12">
        {/* Header Section */}
        <div className="mb-12 w-full md:mb-20">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">PROCESSING_PIPELINE</h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
          {/* Left: Step Navigation */}
          <div className="relative z-10 flex flex-col justify-center gap-8">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className={`group text-left transition-all duration-300 ${
                  activeStep === i ? 'translate-x-4 opacity-100' : 'opacity-30 hover:opacity-60'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                      activeStep === i ? 'border-black bg-black text-white' : 'border-gray-300'
                    }`}
                  >
                    <span className="font-mono text-lg font-bold">{step.id}</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-light decoration-1 underline-offset-4 group-hover:underline md:text-3xl">
                      {step.title}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Content Cards */}
          <div className="relative flex items-center justify-center">
            {/* Decorative background blob */}
            <div className="absolute inset-0 -z-10 scale-150 transform rounded-full bg-gradient-to-tr from-gray-100 to-gray-50 opacity-50 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl"
              >
                {/* Card Header */}
                <div className="relative p-8 pb-0 md:p-10">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="inline-block rounded-2xl bg-black p-4 text-white shadow-lg">
                      {(() => {
                        const Icon = steps[activeStep].icon;
                        return <Icon size={32} strokeWidth={1.5} />;
                      })()}
                    </div>
                    <span className="font-mono text-6xl font-bold text-gray-100 select-none">
                      {steps[activeStep].id}
                    </span>
                  </div>

                  <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {steps[activeStep].title}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-500">
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Card Footer / Terminal */}
                <div className="border-t border-gray-100 bg-gray-50 p-6 font-mono text-sm">
                  <div className="mb-3 flex items-center gap-2 text-xs tracking-wider text-gray-400 uppercase">
                    <Terminal size={12} />
                    <span>System Log</span>
                  </div>
                  <div className="space-y-1 text-gray-600">
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
                      className="ml-1 inline-block h-4 w-2 bg-black align-middle"
                    />
                  </div>
                </div>

                {/* Progress Bar Top */}
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-black"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                  onAnimationComplete={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
