"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiPhone, FiMail } from "react-icons/fi";
import { FIRM_INFO } from "@/lib/constants";

export function QuickContactFAB() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-64 bg-white shadow-2xl border border-gray-100 p-6 space-y-4"
                    >
                        <h3 className="text-primary font-serif font-bold italic text-lg border-b border-secondary/20 pb-2">
                            How can we help?
                        </h3>

                        <a
                            href={`tel:${FIRM_INFO.phone}`}
                            className="flex items-center gap-4 p-3 hover:bg-primary/5 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <FiPhone />
                            </div>
                            <div className="text-sm">
                                <p className="font-bold">Call Us</p>
                                <p className="text-gray-500 text-xs text-nowrap">{FIRM_INFO.phone}</p>
                            </div>
                        </a>

                        <a
                            href={`mailto:${FIRM_INFO.email}`}
                            className="flex items-center gap-4 p-3 hover:bg-primary/5 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <FiMail />
                            </div>
                            <div className="text-sm">
                                <p className="font-bold">Email Us</p>
                                <p className="text-gray-500 text-xs">Direct Response</p>
                            </div>
                        </a>

                        <a
                            href="/book-appointment"
                            className="block w-full text-center bg-secondary text-black font-bold py-3 text-sm hover:bg-secondary/90 transition-all active:scale-95"
                        >
                            Book Appointment
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-primary text-white shadow-2xl flex items-center justify-center relative overflow-hidden group"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
                </motion.div>

                {/* Animated pulse effect */}
                {!isOpen && (
                    <span className="absolute inset-0 animate-ping bg-secondary/30 rounded-none opacity-20" />
                )}
            </motion.button>
        </div>
    );
}
