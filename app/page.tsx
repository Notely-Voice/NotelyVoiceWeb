import type { Metadata } from "next";
import HomeDownload from "@/components/sections/HomeDownload";
import HomeHero from "@/components/sections/HomeHero";
import HomeLanguage from "@/components/sections/HomeLanguage";
import HomeTranscription from "@/components/sections/HomeTranscription";
import HomeTyping from "@/components/sections/HomeTyping";
import HomeWork from "@/components/sections/HomeWork";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeNumbers from "@/components/sections/HomeNumbers";
import StartSpeaking from "@/components/sections/StartSpeaking";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Notely Voice — Private AI Voice-to-Text Transcription",
  description:
    "Transform your voice into text instantly with 100% private, on-device AI transcription. Perfect for students, professionals, and accessibility needs. No internet required.",
  keywords: [
    "voice notes",
    "dictation app",
    "note taking",
    "offline transcription",
    "accessibility",
    "students",
    "professionals",
  ],
  path: "/",
});

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeHero  />
      <HomeDownload />
      <HomeTyping />
      <HomeTranscription />
      <HomeWork />
      <HomeLanguage />
      <HomeTestimonials />
      <HomeNumbers />
      <StartSpeaking bgColor="black" cardBgColor="#3E45FB" borderColor="white" />
    </div>
  );
}
