import type { Metadata } from "next";
import Image from "next/image";
import { CallToAction } from "@/components/sections/CallToAction";
import { FIRM_INFO } from "@/lib/constants";
import { AboutHero } from "@/components/sections/AboutHero";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${FIRM_INFO.name} - our history, mission, values, and commitment to providing excellent legal services in Kenya.`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cnklaw.co.ke"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://cnklaw.co.ke/about"
              }
            ]
          }),
        }}
      />
      <AboutHero />

      {/* Our Story Section */}
      <section id="story" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="border-l-8 border-secondary pl-8">
                <h2 className="text-5xl font-serif font-bold text-gray-900 italic leading-tight">Founded on Principles <br />Driven by Results</h2>
                <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mt-4 font-bold">Our Philosophy</p>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Established with a vision to redefine legal service delivery in Kenya,
                  <strong> {FIRM_INFO.name}</strong> stands as a beacon of professional integrity and client-centric advocacy.
                </p>
                <p>
                  Our firm brings together decades of specialized experience in land law, corporate governance, and complex dispute resolution. We pride ourselves on being strategic partners rather than just legal advisors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2 italic">25+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Years of Practice</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2 italic">1k+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Global Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <Image
                src="/Staff/optimized/Partners.jpg"
                alt="CNK Law Partners"
                width={800}
                height={1000}
                className="relative z-10 w-full aspect-[4/5] object-cover grayscale shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission - High Contrast Banner */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-secondary mb-8">Operating Principle</h2>
            <p className="text-3xl md:text-5xl font-serif font-medium leading-tight italic">
              &quot;To provide high quality legal services to our clients without compromising on legal ethics.&quot;
            </p>
            <div className="mt-12 text-secondary/60 font-serif">— Our Mission Statement</div>
          </div>
        </div>
      </section>

      {/* Our Philosophies */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 italic">Our Pillars of Success</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">⚖️</div>
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">Tenets of Justice</h3>
              <p className="text-gray-600 leading-relaxed">Embodying the unity of client, court, and dedicated legal team to secure quality service and justice.</p>
            </div>
            <div className="bg-white p-10 border-t-4 border-secondary shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-secondary transition-colors">Client-Centred</h3>
              <p className="text-gray-600 leading-relaxed">Committed to strong relationships through extensive partner interaction and direct involvement.</p>
            </div>
            <div className="bg-white p-10 border-t-4 border-primary shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🏛️</div>
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">Credibility</h3>
              <p className="text-gray-600 leading-relaxed">An exemplary firm handling every case with objectivity, strict ethics, and total confidentiality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Commitment */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -left-20 top-0 text-[200px] font-serif opacity-[0.03] select-none text-primary">STRATEGY</div>
            <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900 relative">Our Strategic Theme</h2>
            <p className="text-xl mb-12 font-medium text-gray-700 leading-relaxed border-l-4 border-secondary pl-8">
              At {FIRM_INFO.name}, we are committed to building a reputable law firm that leads through customer-friendly and high-quality legal innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Accessible, dependable and timely service delivery.",
                "Unwavering fairness and respect in all professional duties.",
                "Total clarity and transparency in every legal operation.",
                "Responsiveness to client needs and commitment to continuous improvement."
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-none bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">0{idx + 1}</div>
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network & Affiliations */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-10 text-secondary">Professional Memberships</h2>
              <div className="space-y-6">
                {[
                  "Law Society of Kenya (LSK)",
                  "East Africa Law Society",
                  "International Bar Association",
                  "Institute of Certified Public Secretaries of Kenya"
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-2 h-2 bg-secondary group-hover:w-8 transition-all duration-300" />
                    <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">{member}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-10 text-secondary">Our Bankers</h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  "Co-operative Bank",
                  "NCBA Bank",
                  "Kingdom Bank",
                  "Family Bank"
                ].map((bank, i) => (
                  <div key={i} className="p-6 border border-white/10 hover:border-secondary/50 transition-colors text-center">
                    <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Partnered with</div>
                    <div className="font-serif font-bold text-white/90">{bank}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
