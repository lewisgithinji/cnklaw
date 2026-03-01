"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Route } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { NAV_LINKS, FIRM_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                isScrolled
                    ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm"
                    : "bg-transparent py-8"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center">
                    <div className="relative w-40 h-12 sm:w-56 sm:h-16 overflow-hidden">
                        <Image
                            src="/cnk-official-logo.png"
                            alt="CNK Law"
                            fill
                            className="object-contain transition-all duration-500"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href as Route}
                            className={cn(
                                "text-[9px] xl:text-[10px] uppercase font-bold tracking-[0.2em] transition-all hover:text-secondary relative group whitespace-nowrap",
                                isScrolled ? "text-gray-600" : "text-white/80"
                            )}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className={cn(
                        "hidden 2xl:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest",
                        isScrolled ? "text-gray-500" : "text-white/60"
                    )}>
                        <FiPhone className="text-secondary" />
                        {FIRM_INFO.phone.split(' / ')[0]}
                    </div>
                    <Link href="/book-appointment">
                        <Button
                            className={cn(
                                "rounded-none font-bold uppercase tracking-widest text-[9px] xl:text-[10px] h-11 px-6 xl:px-8 transition-all duration-500",
                                isScrolled
                                    ? "bg-primary text-white hover:bg-secondary hover:text-primary"
                                    : "bg-white text-primary hover:bg-secondary hover:text-primary"
                            )}
                        >
                            APPOINTMENT
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "lg:hidden p-2 transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl lg:hidden overflow-hidden"
                    >
                        <div className="p-8 space-y-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href as Route}
                                    className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-secondary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-gray-50">
                                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-4">Quick Contact</p>
                                <p className="text-primary font-bold">{FIRM_INFO.phone}</p>
                            </div>
                            <Link href="/contact" className="block pt-4">
                                <Button className="w-full rounded-none bg-primary text-white font-bold uppercase tracking-widest text-xs h-14">
                                    Free Consultation
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
