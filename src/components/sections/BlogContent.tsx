"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Route } from "next";
import { FiArrowRight } from "react-icons/fi";

interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image?: string;
}

export function BlogContent({ posts }: { posts: Post[] }) {
    return (
        <>
            <section className="relative h-screen bg-primary overflow-hidden flex items-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop')] opacity-20 grayscale scale-105" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-1 mb-8 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm text-secondary text-sm font-bold uppercase tracking-[0.4em]">
                            Legal Intelligence
                        </div>
                        <h1 className="text-7xl md:text-9xl font-serif font-bold text-white mb-10 italic leading-none">
                            Legal <br />
                            <span className="text-secondary underline decoration-1 underline-offset-[16px] xl:underline-offset-[24px]">Insights</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light mb-12 italic">
                            Strategic analysis and specialized commentary on the evolving regulatory landscape in the Kenyan jurisdiction.
                        </p>
                        <Button size="lg" className="bg-secondary text-black hover:bg-white rounded-none h-16 px-12 font-bold transition-all" onClick={() => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })}>
                            Read The Archives
                        </Button>
                    </motion.div>
                </div>
            </section>

            <div id="articles" className="max-w-7xl mx-auto px-4 py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <Link href={`/blog/${post.slug}` as Route} className="flex flex-col h-full hover:no-underline">
                                <div className="relative h-72 overflow-hidden mb-8">
                                    <Image src={post.image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt={post.title} className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute top-6 left-6 px-4 py-1 bg-white text-primary text-[10px] font-bold uppercase tracking-widest italic shadow-lg">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        {post.date} · {post.author}
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors mb-6 italic leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 line-clamp-3 mb-8 text-base leading-relaxed italic border-l-2 border-gray-100 pl-6 flex-1">
                                        &quot;{post.excerpt}&quot;
                                    </p>
                                    <div className="flex items-center text-primary font-bold text-xs uppercase tracking-[0.2em] group/btn mt-auto">
                                        <span className="border-b border-primary/0 group-hover/btn:border-primary/100 transition-all pb-1">
                                            Read Analysis
                                        </span>
                                        <FiArrowRight className="ml-3 transform group-hover/btn:translate-x-3 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </>
    );
}



