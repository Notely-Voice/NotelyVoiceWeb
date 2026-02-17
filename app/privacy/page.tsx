import type { Metadata } from "next";
import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Read Notely Voice's privacy policy. We prioritize your privacy with 100% on-device transcription. Learn how we protect your data and never send it to external servers.",
  keywords: [
    "privacy policy",
    "data protection",
    "on-device processing",
    "secure transcription",
    "privacy-first",
  ],
  path: "/privacy",
});

function Privacy() {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-[70px]">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}

export default Privacy;
