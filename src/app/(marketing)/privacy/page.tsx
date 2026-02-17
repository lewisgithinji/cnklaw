import type { Metadata } from "next";
import { FIRM_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `How ${FIRM_INFO.name} collects, uses, and protects your personal information in accordance with Kenyan data protection laws.`,
};

export default function PrivacyPolicyPage() {
    const currentYear = new Date().getFullYear();

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest">
                        Legal Transparency
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold italic mb-4">Privacy Policy</h1>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em]">Last Updated: January {currentYear}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate prose-headings:font-serif prose-headings:italic prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary transition-colors">
                    <p className="lead italic border-l-4 border-secondary pl-6 mb-12">
                        At {FIRM_INFO.name}, we are committed to maintaining the trust and confidence of our visitors and clients. This Privacy Policy outlines how we collect, handle, and protect your personal information in compliance with the Data Protection Act of Kenya.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        When you interact with our website or engage our legal services, we may collect the following types of information:
                    </p>
                    <ul>
                        <li><strong>Personal Identification:</strong> Name, email address, phone number, and physical address provided via our contact or appointment forms.</li>
                        <li><strong>Legal Matter Details:</strong> Information specific to your legal inquiries or cases necessary for representation.</li>
                        <li><strong>Usage Data:</strong> IP addresses, browser types, and navigation patterns collected via cookies for website optimization.</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                        The information we collect is used solely for professional purposes, including:
                    </p>
                    <ul>
                        <li>Providing and managing legal representation and advice.</li>
                        <li>Responding to inquiries and scheduling professional consultations.</li>
                        <li>Maintaining firm-client communication and sending billing information.</li>
                        <li>Enhancing website user experience and security.</li>
                    </ul>

                    <h2>3. Confidentiality and Professional Ethics</h2>
                    <p>
                        As a firm of Advocates, our handle of your data is governed not only by civil law but also by the strict **Advocate-Client Privilege**. We do not sell, rent, or trade email lists or personal data with other companies or businesses for marketing purposes.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement high-level physical, electronic, and managerial procedures to safeguard and secure the information we collect online. This includes encryption for sensitive data and restricted access to physical files at our chambers.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>
                        Under the Kenyan Data Protection Act, you have the right to access, rectify, or request the deletion of your personal data held by {FIRM_INFO.name}. You may also object to processing or request data portability.
                    </p>

                    <h2>6. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or the evolving legislative landscape in Kenya. We encourage you to review this page periodically.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have questions regarding this policy or how your data is handled, please contact our Data Compliance Officer at:
                    </p>
                    <div className="bg-gray-50 p-8 border border-gray-100 italic">
                        <strong>{FIRM_INFO.name}</strong><br />
                        {FIRM_INFO.address.street}<br />
                        {FIRM_INFO.address.city}, {FIRM_INFO.address.country}<br />
                        Email: {FIRM_INFO.email}
                    </div>
                </div>
            </section>
        </article>
    );
}
