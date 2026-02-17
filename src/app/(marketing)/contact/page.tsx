import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { OfficeMap } from "@/components/maps/OfficeMap";
import { FIRM_INFO } from "@/lib/constants";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${FIRM_INFO.name}. Contact our legal team for consultation, advice, or to schedule an appointment.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56196c273e8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest">
            Always at Your Service
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic text-white">Contact Our Firm</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-light leading-relaxed text-white/90">
            Professional legal counsel is only a message away. Reach out to our dedicated advocates today.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form Area */}
            <div className="bg-gray-50/50 p-10 md:p-14 border border-gray-100 relative group">
              <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-700" />
              <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900 italic">Secure Message</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Send us a confidential inquiry and our team will provide a professional response within 24 hours.
              </p>
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>

            {/* Support Information */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-serif font-bold mb-10 text-gray-900 border-l-4 border-secondary pl-6 italic">Direct Consultation</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Phone</h3>
                    <p className="text-gray-600 font-medium">{FIRM_INFO.phone}</p>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mt-2">Available Mon - Fri</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Electronic Mail</h3>
                    <a href={`mailto:${FIRM_INFO.email}`} className="text-primary font-bold hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">
                      {FIRM_INFO.email}
                    </a>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mt-2">Official Correspondence</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Headquarters</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {FIRM_INFO.address.street}, {FIRM_INFO.address.city}, {FIRM_INFO.address.country}. {FIRM_INFO.address.poBox}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Office Hours</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mon - Fri: 8:00 AM - 5:00 PM<br />
                      Sat - Sun: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Immediate Action glassmorphism card */}
              <div className="bg-primary/5 border border-primary/10 p-10 rounded-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rotate-45 translate-x-12 -translate-y-12" />
                <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-primary transition-colors italic">Case Urgency?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  For immediate assistance with urgent legal matters, we recommend scheduling an expedited online consultation.
                </p>
                <a href="/book-appointment" className="inline-flex items-center text-primary font-bold hover:text-secondary group-hover:gap-2 transition-all">
                  Access Scheduling System <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Premium Gray Overlay */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 italic">Our Physical Presence</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4" />
          </div>
          <div className="max-w-6xl mx-auto shadow-2xl relative overflow-hidden h-[500px]">
            <OfficeMap />
            <div className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-md p-6 border border-gray-200 shadow-xl max-w-xs">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Location Strategy</p>
              <p className="text-gray-600 text-sm italic">&quot;Next to Sarit Centre, Westlands. Optimized for client accessibility and prestige.&quot;</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
