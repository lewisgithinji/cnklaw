import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ATTORNEYS, FIRM_INFO } from "@/lib/constants";
import { FiMail, FiPhone, FiLinkedin, FiArrowLeft, FiAward, FiBook } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface AttorneyPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return ATTORNEYS.map((attorney) => ({
        slug: attorney.slug,
    }));
}

export const runtime = "edge";

export async function generateMetadata({ params }: AttorneyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const attorney = ATTORNEYS.find((a) => a.slug === slug);

    if (!attorney) {
        return { title: "Attorney Not Found" };
    }

    return {
        title: `${attorney.name} | ${attorney.title}`,
        description: attorney.bio.substring(0, 160),
    };
}

export default async function AttorneyProfilePage({ params }: AttorneyPageProps) {
    const { slug } = await params;
    const attorney = ATTORNEYS.find((a) => a.slug === slug);

    if (!attorney) {
        notFound();
    }

    return (
        <>
            {/* Profile Hero */}
            <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-black opacity-90" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rotate-12 transform translate-x-1/4" />

                <div className="container mx-auto px-4 relative z-10">
                    <Link
                        href="/attorneys"
                        className="inline-flex items-center text-secondary text-xs font-bold uppercase tracking-widest mb-12 hover:text-white transition-colors"
                    >
                        <FiArrowLeft className="mr-2" /> Back to Counsel
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        {/* Portrait / Initials */}
                        <div className="md:col-span-4 lg:col-span-3">
                            <div className="aspect-[4/5] bg-white/10 border border-white/20 flex items-center justify-center relative group overflow-hidden">
                                <span className="text-9xl font-serif font-bold text-secondary/30 group-hover:scale-110 transition-transform duration-700">
                                    {attorney.name[0]}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div className="md:col-span-8 lg:col-span-9 text-white">
                            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-[10px] font-bold uppercase tracking-widest">
                                {attorney.title}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">{attorney.name}</h1>
                            <div className="w-24 h-1 bg-secondary mb-8" />

                            <div className="flex flex-wrap gap-8 text-sm">
                                <div className="flex items-center gap-3">
                                    <FiMail className="text-secondary w-5 h-5" />
                                    <a href={`mailto:${attorney.email || FIRM_INFO.email}`} className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">
                                        {attorney.email || FIRM_INFO.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiPhone className="text-secondary w-5 h-5" />
                                    <span>{attorney.phone || FIRM_INFO.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiLinkedin className="text-secondary w-5 h-5" />
                                    <span className="uppercase tracking-widest text-[10px] font-bold">LinkedIn Profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Details */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Biography */}
                        <div className="lg:col-span-8">
                            <h2 className="text-3xl font-serif font-bold mb-8 italic text-gray-900 border-b border-gray-100 pb-4">Professional Biography</h2>
                            <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed italic">
                                <p className="mb-6 whitespace-pre-line">{attorney.bio}</p>
                                <p>
                                    A core member of the {FIRM_INFO.name} leadership, dedicated to upholding the firm’s principles of integrity and value-optimized legal service.
                                </p>
                            </div>

                            {/* Achievements / Credentials (Placeholder) */}
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-gray-50 border border-gray-100">
                                    <FiAward className="text-primary w-8 h-8 mb-6" />
                                    <h3 className="font-serif font-bold text-xl mb-4 italic">Education & Admissions</h3>
                                    <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                        <li className="flex gap-2"><span>•</span> Kenya School of Law (Advocacy)</li>
                                        <li className="flex gap-2"><span>•</span> Certified Public Secretary (Kenya)</li>
                                        <li className="flex gap-2"><span>•</span> Commissioner for Oaths</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-gray-50 border border-gray-100">
                                    <FiBook className="text-primary w-8 h-8 mb-6" />
                                    <h3 className="font-serif font-bold text-xl mb-4 italic">Recent Insights</h3>
                                    <p className="text-sm text-gray-500 italic mb-4">No recent publications found.</p>
                                    <Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary">Explore Blog</Link>
                                </div>
                            </div>
                        </div>

                        {/* Specializations Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-10 bg-gray-900 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rotate-45 translate-x-16 -translate-y-16" />
                                    <h3 className="text-xl font-serif font-bold mb-8 italic text-secondary">Expertise</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {attorney.specializations.map(spec => (
                                            <span key={spec} className="px-3 py-1 bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white/80">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-10 bg-secondary text-black">
                                    <h3 className="text-2xl font-serif font-bold mb-4 italic">Direct Consultation</h3>
                                    <p className="text-sm font-medium leading-relaxed mb-8">
                                        Request a strategic legal session with {attorney.name.split(' ')[0]}.
                                    </p>
                                    <Button asChild className="w-full bg-primary text-white rounded-none h-14 font-bold shadow-xl">
                                        <Link href="/book-appointment">Request Appointment</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
