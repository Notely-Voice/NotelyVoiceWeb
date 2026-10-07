import type { Metadata } from "next";
import PrivacyTalkHero from "@/components/sections/PrivacyTalkHero";
import PrivacyTalkContent from "@/components/sections/PrivacyTalkContent";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy - Notely Talk",
  description:
    "Read Notely Talk's privacy policy. We don't collect any information. Your voice is processed through OpenAI for real-time dictation. Learn about our privacy-first approach.",
  keywords: [
    "privacy policy",
    "data protection",
    "dictation app",
    "AI voice keyboard",
    "privacy-first",
    "no data collection",
  ],
  path: "/privacy-talk",
});

function PrivacyTalk() {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-[70px]">
      <PrivacyTalkHero />
      <PrivacyTalkContent />
    </div>
  );
}

export default PrivacyTalk;
