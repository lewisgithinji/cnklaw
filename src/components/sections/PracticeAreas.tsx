import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRACTICE_AREAS } from "@/lib/constants";
import {
  FiBriefcase,
  FiHome,
  FiDollarSign,
  FiShield,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { IconType } from "react-icons";

const ICON_MAP: Record<string, IconType> = {
  "corporate-commercial-law": FiBriefcase,
  "conveyancing-real-estate": FiHome,
  "civil-criminal-litigation": FiAward,
  "employment-labour-law": FiUsers,
  "family-law-probate": FiUsers,
  "dispute-resolution-adr": FiAward,
  "insurance-law": FiShield,
  "intellectual-property": FiShield,
  "banking-finance-law": FiDollarSign,
};

/** Format index as zero-padded string: 01, 02 … */
const padIndex = (i: number) => String(i + 1).padStart(2, "0");

export function PracticeAreas() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[oklch(0.35_0.15_25)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[oklch(0.75_0.15_80)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* ── Section Header ── */}
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

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRACTICE_AREAS.map((area, index) => {
            const Icon = ICON_MAP[area.slug] || FiBriefcase;
            // Show first 3 expertise points in the hover-reveal panel
            const previewPoints = area.expertisePoints?.slice(0, 3) ?? [];

            return (
              <Card
                key={area.slug}
                className="group border-0 shadow-md hover:shadow-2xl bg-white overflow-hidden flex flex-col transition-all duration-500 rounded-none cursor-pointer"
              >
                {/* ─── Image Zone ─── */}
                <div className="relative h-56 w-full overflow-hidden">

                  {/* Base photo */}
                  <Image
                    src={area.image ?? "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />

                  {/* Layer 1 — always-on dark-to-transparent gradient (legibility) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

                  {/* Layer 2 — brand burgundy tint; subtle at rest, stronger on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Layer 3 — gold shimmer sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/10 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* ── Card Number — top-right ── */}
                  <div className="absolute top-4 right-4 font-serif text-3xl font-bold text-white/20 group-hover:text-secondary/60 transition-colors duration-500 leading-none select-none">
                    {padIndex(index)}
                  </div>

                  {/* ── Icon badge — bottom-left ── */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-10 h-10 flex items-center justify-center bg-secondary text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-secondary">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* ── Expertise hover-reveal panel ── */}
                  {previewPoints.length > 0 && (
                    <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-primary/95 backdrop-blur-sm px-5 pt-4 pb-5">
                      <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-2">
                        Key Services
                      </p>
                      <ul className="space-y-1.5">
                        {previewPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-white text-xs leading-snug">
                            <FiCheckCircle size={12} className="text-secondary mt-0.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ── Gold progress bar — slides in on hover ── */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-secondary transition-[width] duration-700 ease-in-out z-30" />
                </div>

                {/* ─── Card Body ─── */}
                <CardContent className="flex flex-col flex-1 pt-5 pb-6 px-6 border-t-0">

                  {/* Title */}
                  <h3 className="font-serif text-[1.1rem] font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-snug text-gray-900">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-5">
                    {area.description}
                  </p>

                  {/* Expertise count pill */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/practice-areas/${area.slug}` as Route}
                      className="inline-flex items-center gap-1.5 text-primary font-bold hover:text-secondary transition-colors duration-300 text-xs uppercase tracking-wider group/link"
                    >
                      <span>Detailed Services</span>
                      <FiArrowRight size={13} className="transform group-hover/link:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                    <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 uppercase tracking-widest">
                      {area.expertisePoints?.length ?? 0} Specialties
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-12 h-14 font-bold transition-all relative group overflow-hidden"
          >
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
