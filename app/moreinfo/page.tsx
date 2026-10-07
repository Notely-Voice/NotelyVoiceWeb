import type { Metadata } from "next";
import MoreInfoHero from "@/components/sections/MoreInfoHero";
import MoreInfoContent from "@/components/sections/MoreInfoContent";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "More Info - App Features",
  description:
    "Comprehensive overview of Notely Voice features for Android and iOS. Download from Google Play Store or Apple App Store and experience powerful voice transcription.",
  keywords: [
    "app features",
    "play store",
    "app store",
    "android features",
    "ios features",
    "voice transcription",
    "cloud transcription",
    "on-device AI",
  ],
  path: "/moreinfo",
});

function MoreInfo() {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-[70px]">
      <MoreInfoHero />
      <MoreInfoContent />
    </div>
  );
}

export default MoreInfo;
