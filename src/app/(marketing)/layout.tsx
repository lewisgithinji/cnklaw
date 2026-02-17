"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { QuickContactFAB } from "@/components/ui/QuickContactFAB";
import { motion, useScroll, useSpring } from "framer-motion";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex min-h-screen flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-[1000]"
        style={{ scaleX }}
      />
      <Header />
      <main className="flex-1 w-full">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <QuickContactFAB />
    </div>
  );
}
