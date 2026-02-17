"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AboutHero() {
    return (
        <section className="relative h-screen bg-primary overflow-hidden flex items-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale scale-105" />
            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm text-secondary text-sm font-bold uppercase tracking-[0.3em]">
                        Legacy of Trust
                    </div>
                    <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 italic leading-none">
                        Over 25 Years of <br />
                        <span className="text-secondary underline decoration-1 underline-offset-[16px] xl:underline-offset-[24px]">Excellence</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed font-light mb-12 italic">
                        "We provide professional legal solutions with utmost integrity and care for our clients."
                    </p>
                    <Button size="lg" className="bg-secondary text-black hover:bg-white rounded-none h-16 px-12 font-bold transition-all" onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}>
                        Discover Our Journey
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
