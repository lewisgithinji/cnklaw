import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, FIRM_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white relative overflow-hidden">
      {/* Background Cinematic Tint */}
      <div className="absolute inset-0 bg-[#3d0a11] opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="text-center max-w-2xl relative z-10">
        <div className="inline-block px-3 py-1 mb-8 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
          Error 404 • Counsel Unavailable
        </div>

        <h1 className="text-8xl md:text-9xl font-serif font-bold italic text-primary/10 mb-4 select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 -mt-12 md:-mt-16 italic">
          Resolution Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-12 font-medium leading-relaxed">
          The legal path you are seeking does not exist in our current archives.
          Return to the heart of our practice or reach out to our senior counsel.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link href={"/" as Route}>
            <Button size="lg" className="rounded-none px-10 h-14 bg-primary text-white font-bold uppercase tracking-widest shadow-2xl hover:bg-primary/95 transition-all">
              Return to Chambers
            </Button>
          </Link>
          <Link href={"/contact" as Route}>
            <Button variant="outline" size="lg" className="rounded-none px-10 h-14 border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-all font-bold uppercase tracking-widest">
              Consult Counsel
            </Button>
          </Link>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <h3 className="text-[10px] items-center justify-center flex gap-4 font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 before:h-px before:w-8 before:bg-gray-100 after:h-px after:w-8 after:bg-gray-100">
            Strategic Navigation
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href as Route}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors hover:underline underline-offset-8 decoration-secondary/30"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {FIRM_INFO.name}
          </p>
        </div>
      </div>
    </div>
  );
}
