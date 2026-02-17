"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { FIRM_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SLIDES = [
    {
        id: 1,
        title: "Founded on Excellence",
        subtitle: "A Legacy of Legal Innovation",
        description: "Strategically located in Westlands, Nairobi, we provide world-class legal solutions for the modern enterprise.",
        image: "/Hero/skyline-hero.jpg",
        cta: "Our Practice Areas",
        link: "/practice-areas",
    },
    {
        id: 2,
        title: "Dedicated to Justice",
        subtitle: "Strategic Advocacy in Every Court",
        description: "Expert litigation and dispute resolution services tailored to your unique legal needs.",
        image: "/Hero/court-hero.jpg",
        cta: "Meet Our Team",
        link: "/attorneys",
    },
    {
        id: 3,
        title: "A Unified Team",
        subtitle: "Experience meets Excellence",
        description: "Meet the dedicated professionals committed to providing the innovative legal results you deserve.",
        image: "/Hero/team-hero.jpg",
        cta: "Book Consultation",
        link: "/book-appointment",
    },
];

export function HeroSlider() {
    const [isMounted, setIsMounted] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    if (!isMounted) {
        return <section className="relative h-screen w-full bg-black animate-pulse" />;
    }

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                >
                    {/* Background Image with Parallax-like movement */}
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[6000ms] linear"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
                        }}
                    >
                        {/* Deepened dark overlay for high text legibility - Multi-stop for smoother transition */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 via-40% to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-20 h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-4 w-full">
                            <div className="max-w-3xl space-y-6">
                                <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm text-secondary text-sm font-semibold tracking-wider uppercase animate-fade-in-up">
                                    {slide.subtitle}
                                </div>
                                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight animate-fade-in-up delay-100 italic">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-white/80 leading-relaxed animate-fade-in-up delay-200 font-light">
                                    {slide.description}
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
                                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-none transition-all hover:scale-105">
                                        <Link href={slide.link as Route}>{slide.cta}</Link>
                                    </Button>
                                    {/* Fixed Button Visibility: Added bg-transparent and border/text clarity */}
                                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white/60 text-white hover:bg-white hover:text-black px-8 h-14 text-lg rounded-none backdrop-blur-sm transition-all">
                                        <Link href={"/contact" as Route}>Contact Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute bottom-12 right-4 md:right-12 z-30 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="p-4 border border-white/20 text-white hover:bg-white/10 backdrop-blur-md transition-all rounded-full"
                    aria-label="Previous slide"
                >
                    <FiChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 border border-white/20 text-white hover:bg-white/10 backdrop-blur-md transition-all rounded-full"
                    aria-label="Next slide"
                >
                    <FiChevronRight size={24} />
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-4 md:left-12 z-30 flex gap-3">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                            "h-1 transition-all duration-300 rounded-full",
                            index === currentSlide ? "w-12 bg-secondary" : "w-6 bg-white/30 hover:bg-white/50"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
