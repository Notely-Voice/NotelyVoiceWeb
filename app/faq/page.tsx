import type { Metadata } from "next";
import FAQHero from "@/components/sections/FAQHero"
import FurtherQuestions from "@/components/sections/FurtherQuestions"
import StartSpeaking from "@/components/sections/StartSpeaking"
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "FAQ - Frequently Asked Questions",
  description:
    "Find answers to common questions about Notely Voice, including features, privacy, pricing, compatibility, and more. Get help with voice-to-text transcription.",
  keywords: [
    "faq",
    "frequently asked questions",
    "help",
    "support",
    "how to use",
    "transcription help",
  ],
  path: "/faq",
});

function FAQ() {
  return (
    <div className="bg-[#F0FEFF] flex flex-col gap-10 sm:gap-[70px]"> 
      <FAQHero />
      <FurtherQuestions />

      <StartSpeaking
        bgColor="white"
        borderColor="black"
        titleColor="black"
        textColor="black"
        isLineBlack
        listeningTextColor="white"
        transcribedTextColor="white"
        voiceIconColor="blue"
        checkIconColor="blue"
      />
    </div>
  )
}

export default FAQ