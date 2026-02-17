import type { Metadata } from "next";
import { FIRM_INFO } from "@/lib/constants";
import { CallToAction } from "@/components/sections/CallToAction";
import { PracticeAreasContent } from "@/components/sections/PracticeAreasPageContent";

export const metadata: Metadata = {
  title: "Specialized Practice Areas",
  description: `Explore the legal expertise of ${FIRM_INFO.name}. We provide professional legal solutions in Conveyancing, Corporate Law, Litigation, and more in Kenya.`,
};

export default function PracticeAreasPage() {
  return (
    <>
      <PracticeAreasContent />
      <CallToAction />
    </>
  );
}
