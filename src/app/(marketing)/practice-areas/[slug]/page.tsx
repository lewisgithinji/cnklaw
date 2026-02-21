import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PRACTICE_AREAS, ATTORNEYS, FIRM_INFO } from "@/lib/constants";
import { CallToAction } from "@/components/sections/CallToAction";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

interface PracticeAreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PracticeAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    return {
      title: "Practice Area Not Found",
    };
  }

  return {
    title: area.title,
    description: area.description,
    alternates: {
      canonical: `/practice-areas/${slug}`,
    },
  };
}

export default async function PracticeAreaDetailPage({ params }: PracticeAreaPageProps) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  // Find experts in this practice area
  const experts = ATTORNEYS.filter(attorney =>
    attorney.specializations.some(spec =>
      area.title.toLowerCase().includes(spec.toLowerCase()) ||
      spec.toLowerCase().includes(area.title.toLowerCase().split(' ')[0])
    )
  );

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
                "name": "Practice Areas",
                "item": "https://cnklaw.co.ke/practice-areas"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": area.title,
                "item": `https://cnklaw.co.ke/practice-areas/${area.slug}`
              }
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": area.title,
            "description": area.description,
            "provider": {
              "@type": "LegalService",
              "name": FIRM_INFO.name,
              "url": "https://cnklaw.co.ke",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": FIRM_INFO.address.street,
                "addressLocality": FIRM_INFO.address.city,
                "addressCountry": FIRM_INFO.address.country,
              }
            },
            "areaServed": "KE",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": area.title,
              "itemListElement": area.expertisePoints?.map((point, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": point
                }
              }))
            }
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Link href={"/practice-areas" as Route} className="inline-flex items-center text-secondary font-bold text-xs uppercase tracking-[0.2em] hover:text-white transition-colors group">
              <span className="mr-3 transform group-hover:-translate-x-2 transition-transform">←</span>
              Expertise Directory
            </Link>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic leading-tight max-w-4xl">{area.title}</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-light leading-relaxed">
            {area.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-20">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 italic">Strategic Legal <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">Consultancy</span></h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    {area.fullDescription ||
                      `At ${FIRM_INFO.name}, we recognize that ${area.title.toLowerCase()} requires more than just legal knowledge—it demands strategic foresight and a deep understanding of the client's objectives. Our dedicated team brings decades of combined experience to ensure your interests are protected with the highest level of professional care.`}
                  </p>
                  <p>
                    We specialize in delivering innovative solutions to complex legal challenges, leveraging our domestic and regional expertise to navigate the unique landscape of Kenyan law.
                  </p>
                </div>
              </div>

              {/* Service Timeline */}
              <div className="space-y-12">
                <h3 className="text-3xl font-serif font-bold italic text-gray-900">How We Resolve Your Case</h3>
                <div className="space-y-0">
                  {[
                    { step: "01", title: "Strategic Intake", desc: "Detailed consultation to identify legal objectives and risk parameters." },
                    { step: "02", title: "Expert Analysis", desc: "Case validation against current Kenyan statutes and judicial precedents." },
                    { step: "03", title: "Strategic Filing", desc: "Preparation and lodging of all necessary legal documentation with precision." },
                    { step: "04", title: "Vigorous Advocacy", desc: "Dedicated representation in negotiations, mediation, or court proceedings." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-serif font-bold text-secondary/30 group-hover:text-secondary transition-colors duration-500">
                          {item.step}
                        </div>
                        <div className="w-px h-full bg-gray-100 group-last:bg-transparent my-4" />
                      </div>
                      <div className="pb-12">
                        <h4 className="font-serif font-bold text-xl mb-3 text-gray-900 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {[
                  { title: "Comprehensive Analysis", desc: "Detailed evaluation of legal risks and opportunities." },
                  { title: "Strategic Litigation", desc: "Expert representation in disputes and negotiations." },
                  { title: "Compliance Oversight", desc: "Ensuring all operations align with statutory requirements." },
                  { title: "Direct Partner Support", desc: "Unwavering access to senior legal counsel throughout your case." }
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-gray-50/50 border border-gray-100 hover:border-secondary transition-all group">
                    <FiCheckCircle className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif font-bold text-xl mb-2 text-gray-900 group-hover:text-primary transition-colors">{pillar.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar / Contextual Info */}
            <div className="space-y-12">
              {/* Expert Team Sidebar */}
              {experts.length > 0 && (
                <div className="bg-primary p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rotate-45 translate-x-16 -translate-y-16" />
                  <h3 className="text-xl font-serif font-bold mb-8 italic text-secondary border-b border-white/10 pb-4">Practice Leaders</h3>
                  <div className="space-y-8">
                    {experts.map(expert => (
                      <div key={expert.id} className="group cursor-pointer">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-white/10 flex items-center justify-center font-serif font-bold text-secondary text-lg border border-white/20">
                            {expert.name[0]}
                          </div>
                          <div>
                            <p className="font-bold text-base leading-tight group-hover:text-secondary transition-colors">{expert.name}</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/50">{expert.title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href={"/attorneys" as Route} className="mt-8 block text-center py-4 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    View Entire Team
                  </Link>
                </div>
              )}

              {/* Action Box */}
              <div className="bg-secondary p-10 text-black">
                <h3 className="text-2xl font-serif font-bold mb-4 italic">Require Counsel?</h3>
                <p className="text-sm leading-relaxed mb-8 font-medium">
                  Experience the precision of CNK Law. Schedule your consultation to discuss our {area.title.toLowerCase()} strategies.
                </p>
                <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 rounded-none h-14 font-bold">
                  <Link href={"/book-appointment" as Route}>Initiate Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Navigation */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-gray-900 italic mb-4">Explore More Expertise</h2>
              <p className="text-gray-600">Discover our range of specialized legal services tailored to corporate and individual needs.</p>
            </div>
            <Link href={"/practice-areas" as Route} className="text-primary font-bold uppercase text-xs tracking-widest hover:text-secondary transition-colors border-b border-primary pb-1">
              View All Areas
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.filter((a) => a.slug !== area.slug)
              .slice(0, 4)
              .map((relatedArea) => (
                <Link
                  key={relatedArea.slug}
                  href={`/practice-areas/${relatedArea.slug}` as Route}
                  className="group bg-white p-8 border border-gray-100 hover:border-primary transition-all duration-300"
                >
                  <h3 className="font-serif font-bold text-xl mb-4 text-gray-900 group-hover:text-primary transition-colors">{relatedArea.title}</h3>
                  <div className="flex items-center text-xs font-bold uppercase text-gray-400 group-hover:text-secondary transition-colors">
                    View Details <FiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
