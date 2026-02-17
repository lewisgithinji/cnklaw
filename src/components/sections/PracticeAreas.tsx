import Link from "next/link";
import type { Route } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRACTICE_AREAS } from "@/lib/constants";
import {
  FiBriefcase,
  FiHome,
  FiDollarSign,
  FiShield,
  FiBookOpen,
  FiUsers,
  FiKey,
  FiAward
} from "react-icons/fi";

const ICON_MAP: Record<string, any> = {
  "corporate-commercial-law": FiBriefcase,
  "conveyance-land-law": FiHome,
  "banking-financial-law": FiDollarSign,
  "litigation-dispute-resolution": FiAward,
  "family-law-succession": FiUsers,
  "intellectual-property": FiShield,
};

export function PracticeAreas() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            Expertise You Can Trust
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 italic">
            Our Practice Areas
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional legal solutions tailored to your unique challenges, delivered with integrity and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRACTICE_AREAS.map((area) => {
            const Icon = ICON_MAP[area.slug] || FiBriefcase;
            return (
              <Card key={area.slug} className="group hover:border-secondary/50 transition-all duration-500 rounded-none border-gray-100 shadow-sm hover:shadow-2xl bg-white overflow-hidden relative">
                {/* Decorative Accent on Card */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -translate-y-full translate-x-full transition-transform duration-700 group-hover:translate-y-0 group-hover:-translate-x-0 group-hover:bg-primary/5 rotate-45" />

                <CardHeader className="pb-2 pt-8 relative z-10">
                  <div className="mb-6 text-primary group-hover:text-secondary transition-colors duration-500">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-none group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 transform group-hover:rotate-[360deg]">
                      <Icon size={28} />
                    </div>
                  </div>
                  <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors pr-8 leading-tight">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="mb-8 text-gray-600 line-clamp-3 text-base leading-relaxed h-20">
                    {area.description}
                  </CardDescription>
                  <Link href={`/practice-areas/${area.slug}` as Route} className="inline-flex items-center text-primary font-bold hover:text-secondary transition-all group/link tracking-tight text-sm uppercase">
                    Detailed Services
                    <span className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-12 h-14 font-bold transition-all relative group overflow-hidden">
            <Link href={"/practice-areas" as Route}>
              <span className="relative z-10">Explore All Practices</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 scale-0 group-hover:scale-100 transition-all duration-500 rounded-full" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
