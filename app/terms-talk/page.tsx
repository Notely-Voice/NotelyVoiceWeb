import type { Metadata } from "next";
import TermsTalkHero from "@/components/sections/TermsTalkHero";
import TermsTalkContent from "@/components/sections/TermsTalkContent";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service - Notely Talk",
  description:
    "Read Notely Talk's Terms of Service. Understand your rights and responsibilities when using our AI voice keyboard and dictation application.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "legal terms",
    "AI voice keyboard",
    "dictation app",
  ],
  path: "/terms-talk",
});

function TermsTalk() {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-[70px]">
      <TermsTalkHero />
      <TermsTalkContent />
    </div>
  );
}

export default TermsTalk;
