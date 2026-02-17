import type { Metadata } from "next";
import { FIRM_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: `General terms and conditions governing the use of ${FIRM_INFO.name} website and professional legal services.`,
};

export default function TermsOfServicePage() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest">
                        Governing Standards
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold italic mb-4">Terms of Service</h1>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em]">Effective Date: January {currentYear}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate prose-headings:font-serif prose-headings:italic prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary transition-colors">
                    <p className="lead italic border-l-4 border-secondary pl-6 mb-12">
                        Welcome to the official website of {FIRM_INFO.name}. By accessing this website or engaging our services, you agree to be bound by the following Terms and Conditions, which govern our professional relationship with you.
                    </p>

                    <h2>1. No Legal Advice</h2>
                    <p>
                        The content on this website is provided for general informational purposes only and does **not** constitute legal advice. Accessing this site or contacting the firm does not create an advocate-client relationship until a formal Letter of Engagement has been signed.
                    </p>

                    <h2>2. Professional Services</h2>
                    <p>
                        All legal services provided by {FIRM_INFO.name} are subject to the Advocates Act of Kenya and the rules made thereunder. Our professional fees are generally guided by the Advocates Remuneration Order current at the time of engagement.
                    </p>

                    <h2>3. Intellectual Property</h2>
                    <p>
                        The content, logos, designs, and intellectual property on this website are owned by {FIRM_INFO.name} or its licensors. Unauthorized reproduction or redistribution of any material from this site is strictly prohibited.
                    </p>

                    <h2>4. Limitation of Liability</h2>
                    <p>
                        While we strive for accuracy, {FIRM_INFO.name} assumes no liability for errors or omissions on this website. Total professional liability for our services is limited to the extent permitted by Kenyan law and our professional indemnity insurance coverage.
                    </p>

                    <h2>5. External Links</h2>
                    <p>
                        This website may contain links to third-party resources (such as Government portals like Ardhisasa). We are not responsible for the content or privacy practices of such external sites.
                    </p>

                    <h2>6. Governing Law</h2>
                    <p>
                        These terms and any dispute arising from the use of this website or our services shall be governed by and construed in accordance with the **Laws of the Republic of Kenya**. Any disputes shall be subject to the exclusive jurisdiction of the Courts of Kenya.
                    </p>

                    <h2>7. Client Obligations</h2>
                    <p>
                        Clients are expected to provide full, honest, and timely disclosure of all facts relevant to their matters. Failure to do so may result in the firm&apos;s withdrawal from the matter in accordance with professional ethics.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        For any inquiries regarding these terms, please contact our administrative office at:
                    </p>
                    <div className="bg-gray-50 p-8 border border-gray-100 italic">
                        <strong>{FIRM_INFO.name}</strong><br />
                        {FIRM_INFO.address.street}, {FIRM_INFO.address.city}<br />
                        Phone: {FIRM_INFO.phone}<br />
                        Email: {FIRM_INFO.email}
                    </div>
                </div>
            </section>
        </article>
    );
}
