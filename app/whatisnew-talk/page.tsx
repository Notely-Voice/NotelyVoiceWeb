import type { Metadata } from "next";
import WhatsNewTalkHero from "@/components/sections/WhatsNewTalkHero";
import WhatsNewTalkContent from "@/components/sections/WhatsNewTalkContent";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "What's New - Notely Talk",
  description:
    "Discover the latest features and updates in Notely Talk. Your AI voice keyboard for seamless dictation across all your favorite apps.",
  keywords: [
    "what's new",
    "updates",
    "new features",
    "AI voice keyboard",
    "dictation app",
    "release notes",
  ],
  path: "/whatisnew-talk",
});

function WhatsNewTalk() {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-[70px]">
      <WhatsNewTalkHero />
      <WhatsNewTalkContent />
    </div>
  );
}

export default WhatsNewTalk;
