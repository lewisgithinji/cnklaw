"use client";

import Link from "next/link";
import type { Route } from "next";
import { FIRM_INFO, NAV_LINKS } from "@/lib/constants";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaGavel, FaBalanceScale } from "react-icons/fa";
import { HiOutlineLibrary } from "react-icons/hi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Background Animated Objects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-8xl"
        >
          <FaGavel />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/4 text-[120px]"
        >
          <FaBalanceScale />
        </motion.div>
        <motion.div
          animate={{
            x: [0, 15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 text-[100px]"
        >
          <HiOutlineLibrary />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <h3 className="text-3xl font-serif font-bold italic tracking-tight text-white">
                {FIRM_INFO.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "text-secondary" : ""}>{word} </span>
                ))}
              </h3>
            </Link>
            <p className="text-gray-400 text-base max-w-md leading-relaxed font-light italic">
              &quot;{FIRM_INFO.tagline} Providing world-class legal solutions with a commitment to integrity, excellence, and justice for all clients.&quot;
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 text-gray-400 hover:text-secondary transition-colors group">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <FiPhone className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-1">Call Us</p>
                  <span className="text-sm font-medium">{FIRM_INFO.phone}</span>
                </div>
              </div>
              <div className="flex items-start gap-4 text-gray-400 hover:text-secondary transition-colors group">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <FiMail className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-1">Email Us</p>
                  <a href={`mailto:${FIRM_INFO.email}`} className="text-sm font-medium">
                    {FIRM_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 text-gray-400 hover:text-secondary transition-colors group">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <FiMapPin className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-1">Our Chambers</p>
                  <span className="text-sm font-medium leading-relaxed">
                    {FIRM_INFO.address.street}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-[0.3em]">Navigation</h3>
            <ul className="space-y-5">
              {[...NAV_LINKS, { label: "Book Appointment", href: "/book-appointment" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href as Route} className="text-gray-400 hover:text-secondary transition-all flex items-center group text-sm font-medium">
                    <span className="w-0 group-hover:w-4 h-px bg-secondary mr-0 group-hover:mr-3 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-[0.3em]">Intelligence</h3>
            <p className="text-gray-400 text-sm leading-relaxed italic">
              Subscribe to the CNK Weekly Brief for high-impact legal insights.
            </p>
            <NewsletterForm />

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <FiLinkedin />, href: FIRM_INFO.social.linkedin, label: "LinkedIn" },
                { icon: <FiTwitter />, href: FIRM_INFO.social.twitter, label: "Twitter" },
                { icon: <FiFacebook />, href: FIRM_INFO.social.facebook, label: "Facebook" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-all duration-500 rounded-none group"
                  aria-label={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <p>
            &copy; {currentYear} {FIRM_INFO.name}. <span className="text-white/10 mx-2">|</span> Legal Excellence Delivered. <span className="text-white/10 mx-2">|</span>
            <span className="group inline-flex items-center gap-1.5 opacity-60">
              <span className="lowercase font-light">Architect by</span>
              <a
                href="https://datacare.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-bold uppercase tracking-[0.2em] hover:text-white transition-all duration-300"
              >
                DataCare
              </a>
            </span>
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
