import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { FIRM_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Schedule a consultation with ${FIRM_INFO.name}. Our experienced attorneys are ready to help with your legal needs.`,
};

export default function BookAppointmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background with Cinematic Grade */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Hero/skyline-hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 via-40% to-primary/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm text-secondary text-sm font-semibold tracking-wider uppercase mb-6">
              Professional Consultations
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight italic">
              Book an Appointment
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Schedule a confidential consultation with our experienced legal team. We provide strategic guidance tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">How It Works</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Our streamlined booking process ensures you get the legal assistance you need quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white border border-primary/10 shadow-sm text-primary rounded-full flex items-center justify-center text-3xl font-serif italic font-bold mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                1
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Submit Request</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provide your details and a brief summary of your legal matter through our secure form.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white border border-primary/10 shadow-sm text-primary rounded-full flex items-center justify-center text-3xl font-serif italic font-bold mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                2
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Confirmation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team reviews your request and contacts you within 24 hours to finalize the schedule.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white border border-primary/10 shadow-sm text-primary rounded-full flex items-center justify-center text-3xl font-serif italic font-bold mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                3
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Legal Consultation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engage in a focused session with your attorney to map out your strategic legal path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Request Your Appointment</h2>
              <p className="text-lg text-muted-foreground italic">
                All communications are confidential and protected by attorney-client privilege.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="bg-white border shadow-xl p-8 md:p-10">
                  <AppointmentForm />
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div className="bg-primary/5 border border-primary/10 p-8">
                  <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary" />
                    What to Expect
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Detailed strategy session (approx. 45-60 min)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Review of documents and relevant case history</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>Actionable advice and transparent fee structure</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/5 border border-secondary/20 p-8">
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">Immediate Assistance</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-light">
                    For urgent legal representation or time-sensitive matters:
                  </p>
                  <p className="text-2xl font-serif font-bold text-primary mb-1">{FIRM_INFO.phone}</p>
                  <p className="text-sm text-muted-foreground">Office Hours: Mon - Fri | 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
