import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic tracking-tight">
          Ready to Secure Your Future?
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-10" />
        <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed font-light italic">
          Schedule a professional consultation with our experienced legal team today. Let us provide the value-optimizing legal solutions you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-white text-black font-bold rounded-none px-16 h-18 text-xl transition-all hover:scale-105 shadow-2xl">
            <Link href={"/book-appointment" as Route}>Book Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white hover:text-black rounded-none px-16 h-18 text-xl transition-all">
            <Link href={"/contact" as Route}>Speak with an Advocate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
