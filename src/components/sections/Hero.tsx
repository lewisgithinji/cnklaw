import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { FIRM_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {FIRM_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            {FIRM_INFO.tagline}
          </p>
          <p className="text-lg mb-8 opacity-80">
            {FIRM_INFO.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={"/book-appointment" as Route}>Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href={"/contact" as Route}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
