import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FIRM_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${FIRM_INFO.name}`,
    default: `${FIRM_INFO.name} | Premium Legal Services in Nairobi`,
  },
  description: FIRM_INFO.description,
  keywords: ["Law Firm Nairobi", "Conveyancing Lawyer Kenya", "Banking Law Kenya", "C.N. Karanja & Associates", "Advocates Nairobi"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cnklaw.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://cnklaw.co.ke",
    siteName: FIRM_INFO.name,
    title: `${FIRM_INFO.name} | Expert Legal Counsel`,
    description: FIRM_INFO.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${FIRM_INFO.name} | Expert Legal Counsel`,
    description: FIRM_INFO.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": FIRM_INFO.name,
              "description": FIRM_INFO.description,
              "url": "https://cnklaw.co.ke",
              "telephone": FIRM_INFO.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": FIRM_INFO.address.street,
                "addressLocality": FIRM_INFO.address.city,
                "addressCountry": FIRM_INFO.address.country,
                "postOfficeBoxNumber": FIRM_INFO.address.poBox,
              },
              "priceRange": "$$$",
            }),
          }}
        />
      </head>
      <body className="font-sans selection:bg-primary/20">
        {children}
      </body>
    </html>
  );
}
