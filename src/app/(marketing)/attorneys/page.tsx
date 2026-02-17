import type { Metadata } from "next";
import { FIRM_INFO } from "@/lib/constants";
import { CallToAction } from "@/components/sections/CallToAction";
import { CouncilContent } from "@/components/sections/CouncilContent";

export const metadata: Metadata = {
  title: "Our Team | The Council",
  description: `Meet the dedicated legal professionals at ${FIRM_INFO.name}. Our team of experts is committed to providing strategic and results-oriented legal solutions.`,
};

export default function TeamPage() {
  return (
    <>
      <CouncilContent />
      <CallToAction />
    </>
  );
}
