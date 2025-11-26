'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Globe, Zap, Network, Lock, Eye } from 'lucide-react'
import FigmaOverlay from './FigmaOverlay'

const features = [
    {
        title: "Real-Time Tracking",
        description: "Monitor every click, view, and purchase as it happens across your store.",
        icon: Network,
        className: "md:col-span-2"
    },
    {
        title: "Predictive Analytics",
        description: "ML-powered forecasting for inventory, revenue, and customer behavior.",
        icon: Cpu,
        className: ""
    },
    {
        title: "Instant Insights",
        description: "Auto-generated reports and alerts when metrics change significantly.",
        icon: Zap,
        className: ""
    },
    {
        title: "Universal Integration",
        description: "Connect to Shopify, WooCommerce, custom stores, and 100+ platforms.",
        icon: Globe,
        className: "md:col-span-2"
    },
]

export default function Features() {
    return (
        <section className="w-full min-h-screen bg-white text-black py-24 px-4 md:px-12 flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto w-full"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">
                    ANALYTICS_CORE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <FigmaOverlay key={i} label={`card.${feature.title.toLowerCase().replace(/\s+/g, '-')}`} className={`${feature.className} flex`}>
                            <Card className="bg-gray-50 border-gray-200 hover:border-black transition-colors duration-300 h-full w-full flex flex-col">
                                <CardHeader>
                                    <feature.icon className="w-8 h-8 mb-4 stroke-1" />
                                    <CardTitle className="font-mono text-lg tracking-wide">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-gray-500 font-light">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </FigmaOverlay>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
