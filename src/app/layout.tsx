import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FIRM_INFO } from "@/lib/constants";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cnklaw.co.ke"),
  title: {
    template: `%s | ${FIRM_INFO.name}`,
    default: `${FIRM_INFO.name} | Premium Legal Services in Nairobi`,
  },
  description: FIRM_INFO.description,
  keywords: ["Law Firm Nairobi", "Conveyancing Lawyer Kenya", "Banking Law Kenya", "C.N. Karanja & Associates", "Advocates Nairobi", "Legal Counsel Nairobi", "Land Law Kenya"],
  authors: [{ name: "C.N. Karanja & Associates" }],
  publisher: FIRM_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://cnklaw.co.ke",
    siteName: FIRM_INFO.name,
    title: `${FIRM_INFO.name} | Expert Legal Counsel`,
    description: FIRM_INFO.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: FIRM_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${FIRM_INFO.name} | Expert Legal Counsel`,
    description: FIRM_INFO.description,
    images: ["/og-image.png"],
    creator: "@cnklaw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, // Placeholder to be filled in env
    // bing: "your-bing-verification-code",
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
              "logo": "https://cnklaw.co.ke/cnklogo.png",
              "image": "https://cnklaw.co.ke/cnklogo.png",
              "telephone": FIRM_INFO.phone,
              "email": FIRM_INFO.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": FIRM_INFO.address.street,
                "addressLocality": FIRM_INFO.address.city,
                "addressCountry": FIRM_INFO.address.country,
                "postOfficeBoxNumber": FIRM_INFO.address.poBox,
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -1.2652, // Western Heights, Westlands approx
                "longitude": 36.8043,
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                FIRM_INFO.social.linkedin,
                FIRM_INFO.social.twitter,
                FIRM_INFO.social.facebook
              ],
              "priceRange": "$$$",
            }),
          }}
        />
      </head>
      <body className="font-sans selection:bg-primary/20" suppressHydrationWarning>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && process.env.NEXT_PUBLIC_GA_ID !== "G-XXXXXXXXXX" && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

