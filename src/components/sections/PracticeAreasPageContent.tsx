"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { PRACTICE_AREAS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FiChevronRight, FiX, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function PracticeAreasContent() {
    const [selectedArea, setSelectedArea] = useState<typeof PRACTICE_AREAS[0] | null>(null);

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-[80vh] bg-primary overflow-hidden flex items-center">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-white" />

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1 mb-8 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm text-secondary text-sm font-bold uppercase tracking-[0.4em]">
                            Legal Specialization
                        </div>
                        <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 italic leading-none">
                            Our <span className="text-secondary underline decoration-1 underline-offset-[16px] xl:underline-offset-[24px]">Expertise</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light italic">
                            Delivering strategic counsel across the most critical sectors of the Kenyan economy with precision, integrity, and results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Practice Areas Masonry-style Grid */}
            <section className="py-32 bg-white relative z-20 -mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                        {PRACTICE_AREAS.map((area, idx) => (
                            <motion.div
                                key={area.slug}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedArea(area)}
                                className="group relative h-[600px] overflow-hidden cursor-pointer border-r border-b border-gray-100 last:border-r-0"
                            >
                                {/* Background Image with Parallax Transition */}
                                <div className="absolute inset-0 bg-primary overflow-hidden">
                                    <img
                                        src={area.image}
                                        alt={area.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-transparent transition-all duration-700" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-12 flex flex-col justify-end text-white z-10">
                                    <div className="mb-6 overflow-hidden">
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            className="w-12 h-1 bg-secondary group-hover:w-full transition-all duration-700"
                                        />
                                    </div>
                                    <h3 className="text-4xl font-serif font-bold mb-4 italic leading-tight group-hover:text-secondary transition-colors">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 font-light line-clamp-3 italic">
                                        {area.description}
                                    </p>
                                    <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.3em] text-secondary opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                        Experience Excellence <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>

                                {/* Number Indicator */}
                                <div className="absolute top-10 right-10 text-6xl font-serif font-bold text-white/5 group-hover:text-secondary/10 transition-colors italic transition-all duration-700 group-hover:-translate-y-2">
                                    0{idx + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Immersive Detail Overlay */}
            <AnimatePresence>
                {selectedArea && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 backdrop-blur-2xl bg-black/90"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-white w-full h-full max-w-7xl overflow-hidden relative grid grid-cols-1 lg:grid-cols-12"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedArea(null)}
                                className="absolute top-8 right-8 z-50 p-4 bg-primary text-white hover:bg-secondary hover:text-black transition-all rounded-none"
                            >
                                <FiX size={24} />
                            </button>

                            {/* Left: Immersive Visual */}
                            <div className="lg:col-span-5 relative h-[40vh] lg:h-full overflow-hidden bg-primary">
                                <motion.img
                                    initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                                    animate={{ scale: 1, filter: "grayscale(0%)" }}
                                    transition={{ duration: 1.5 }}
                                    src={selectedArea.image}
                                    alt={selectedArea.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">Strategic Practice</div>
                                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white italic leading-none">
                                        {selectedArea.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h2>
                                </div>
                            </div>

                            {/* Right: Rich Content */}
                            <div className="lg:col-span-7 p-8 md:p-20 overflow-y-auto bg-white flex flex-col justify-center">
                                <div className="max-w-2xl">
                                    <div className="mb-12">
                                        <h3 className="text-xs font-bold text-primary uppercase tracking-[0.5em] mb-6 inline-block border-b-2 border-secondary pb-2">Institutional Expertise</h3>
                                        <p className="text-2xl font-serif text-gray-800 leading-relaxed italic first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3">
                                            {selectedArea.fullDescription || selectedArea.description}
                                        </p>
                                    </div>

                                    {/* Expertise Checklist */}
                                    {selectedArea.expertisePoints && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                                            {selectedArea.expertisePoints.map((point, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                                    className="flex items-center gap-4 group"
                                                >
                                                    <div className="w-6 h-6 bg-gray-50 border border-gray-100 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all">
                                                        <FiCheck size={12} />
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{point}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Link href={`/practice-areas/${selectedArea.slug}` as Route} className="flex-1">
                                            <Button className="w-full h-16 rounded-none bg-primary text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all">
                                                In-Depth Legal Analysis
                                            </Button>
                                        </Link>
                                        <Link href={"/contact" as Route} className="flex-1">
                                            <Button variant="outline" className="w-full h-16 rounded-none border-gray-200 text-gray-900 font-bold uppercase tracking-[0.2em] text-xs hover:border-primary transition-all">
                                                Consult Our Partners
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
