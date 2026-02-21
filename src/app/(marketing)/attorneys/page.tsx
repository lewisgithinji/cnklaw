import type { Metadata } from "next";
import { FIRM_INFO, TEAM } from "@/lib/constants";
import { CallToAction } from "@/components/sections/CallToAction";
import { CouncilContent } from "@/components/sections/CouncilContent";

export const metadata: Metadata = {
  title: "Our Team | The Council",
  description: `Meet the dedicated legal professionals at ${FIRM_INFO.name}. Our team of experts is committed to providing strategic and results-oriented legal solutions.`,
  alternates: {
    canonical: "/attorneys",
  },
};

export default function TeamPage() {
  const attorneys = TEAM.filter(m => m.category === "Partner" || m.category === "Associate");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cnklaw.co.ke"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Our Team",
                "item": "https://cnklaw.co.ke/attorneys"
              }
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": attorneys.map((attorney, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Person",
                "name": attorney.name,
                "jobTitle": attorney.title,
                "description": attorney.bio,
                "image": `https://cnklaw.co.ke${attorney.image}`,
                "worksFor": {
                  "@type": "LegalService",
                  "name": FIRM_INFO.name
                }
              }
            }))
          }),
        }}
      />
      <CouncilContent />
      <CallToAction />
    </>
  );
}
