"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Route } from "next";
import { FiArrowRight } from "react-icons/fi";
import { TEAM } from "@/lib/constants";

import { cn } from "@/lib/utils";

export function CouncilContent() {
    const partners = TEAM.filter(m => m.category === "Partner");
    const associates = TEAM.filter(m => m.category === "Associate");
    const support = TEAM.filter(m => m.category === "Support Staff" || m.category === "Administration");

    const MemberCard = ({ member, idx }: { member: typeof TEAM[0], idx: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
        >
            <Card className="group rounded-none border-gray-100 hover:border-secondary/40 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl h-full flex flex-col bg-white">
                <div className="relative h-80 overflow-hidden bg-primary">
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className={cn(
                                "w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700",
                                member.objectPosition || "object-center"
                            )}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-8xl font-serif font-bold text-white/10">{member.name[0]}</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6">
                        <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-1">{member.category}</div>
                        <h3 className="text-2xl font-serif font-bold text-white italic">{member.name}</h3>
                    </div>
                </div>

                <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{member.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed italic mb-8 flex-1">
                        &quot;{member.shortBio || member.bio.slice(0, 160) + "..."}&quot;
                    </p>

                    <div className="space-y-4 pt-6 border-t border-gray-50">
                        {member.slug ? (
                            <Link href={`/attorneys/${member.slug}` as Route} className="flex items-center text-primary font-bold text-[10px] uppercase tracking-[0.2em] hover:text-secondary transition-colors group/link">
                                View Professional Biography
                                <FiArrowRight className="ml-2 transform group-hover/link:translate-x-2 transition-transform" />
                            </Link>
                        ) : (
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Administrative Specialist</div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );

    return (
        <>
            <section className="relative h-screen bg-primary overflow-hidden flex items-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop')] opacity-30 grayscale scale-105" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-block px-4 py-1 mb-8 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm text-secondary text-sm font-bold uppercase tracking-[0.4em]">
                            The Legal Collective
                        </div>
                        <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 italic leading-none">
                            The <span className="text-secondary underline decoration-1 underline-offset-[16px] xl:underline-offset-[24px]">Council</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                            A collective of seasoned legal minds and dedicated professionals working in unison to protect your interests through strategic advocacy.
                        </p>
                        <Button
                            size="lg"
                            className="bg-secondary text-black hover:bg-secondary/90 rounded-none h-16 px-12 font-bold transition-all uppercase tracking-widest shadow-2xl"
                            onClick={() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Meet the Partners
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section id="leadership" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-20 border-l-8 border-secondary pl-10">
                        <h2 className="text-5xl font-serif font-bold text-gray-900 italic leading-tight">Leadership & <br />Institutional Counsel</h2>
                        <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mt-4 font-bold">Partners & Senior Associates</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
                        {[...partners, ...associates].map((member, i) => (
                            <MemberCard key={member.id} member={member} idx={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Specialists Section */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-20 border-l-8 border-primary pl-10">
                        <h2 className="text-5xl font-serif font-bold text-gray-900 italic leading-tight">Legal Support <br />Specialists</h2>
                        <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mt-4 font-bold">Administration & Strategic Coordination</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {support.map((member, i) => (
                            <MemberCard key={member.id} member={member} idx={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
