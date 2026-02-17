"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";

export function OfficeMap() {
  // Western Heights, Karuna Road, Westlands, Nairobi
  const iframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.852957448203!2d36.8042456!3d-1.2604243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1741ac69f9d3%3A0xe543e3ff2d645e7e!2sWestern%20Heights!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske`;

  return (
    <div className="w-full h-[450px] rounded-none overflow-hidden shadow-2xl border-4 border-white">
      <iframe
        src={iframeSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="CNK Law Office Location"
        className="grayscale hover:grayscale-0 transition-all duration-700"
      ></iframe>
    </div>
  );
}
