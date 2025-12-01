'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Globe, Zap, Network } from 'lucide-react';
import FigmaOverlay from './FigmaOverlay';

const features = [
  {
    title: 'Real-Time Tracking',
    description: 'Monitor every click, view, and purchase as it happens across your store.',
    icon: Network,
    className: 'md:col-span-2',
  },
  {
    title: 'Predictive Analytics',
    description: 'ML-powered forecasting for inventory, revenue, and customer behavior.',
    icon: Cpu,
    className: '',
  },
  {
    title: 'Instant Insights',
    description: 'Auto-generated reports and alerts when metrics change significantly.',
    icon: Zap,
    className: '',
  },
  {
    title: 'Universal Integration',
    description: 'Connect to Shopify, WooCommerce, custom stores, and 100+ platforms.',
    icon: Globe,
    className: 'md:col-span-2',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Features() {
  return (
    <section className="flex min-h-screen w-full flex-col justify-center bg-white px-4 py-24 text-black md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tighter sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl"
        >
          ANALYTICS_CORE
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={cardVariants} className={`${feature.className} flex`}>
              <FigmaOverlay
                label={`card.${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex w-full"
              >
                <Card className="group flex h-full w-full flex-col border-gray-200 bg-gray-50/80 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50">
                  <CardHeader className="pb-2">
                    <feature.icon className="mb-3 h-6 w-6 stroke-[1.5] text-gray-700 transition-colors group-hover:text-black md:mb-4 md:h-8 md:w-8" />
                    <CardTitle className="font-mono text-sm tracking-wide uppercase md:text-base">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <p className="text-sm leading-relaxed font-light text-gray-500 md:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </FigmaOverlay>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
