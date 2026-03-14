import type { Metadata } from "next";
import CreateNotes from "@/components/sections/CreateNotes";
import FeaturesHero from "@/components/sections/FeaturesHero";
import TextEdit from "@/components/sections/TextEdit";
import TranscribeAudio from "@/components/sections/TranscribeAudio";
import Languages from "@/components/sections/Languages";
import AudioRecorder from "@/components/sections/AudioRecorder";
import StartSpeaking from "@/components/sections/StartSpeaking";
import CustomTheme from "@/components/sections/CustomTheme";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Features",
  description:
    "Explore Notely Voice features: on-device transcription, multi-language support, text editing, audio recording, custom themes, and more. All with complete privacy.",
  keywords: [
    "transcription features",
    "voice features",
    "multi-language support",
    "text editing",
    "audio recorder",
    "custom themes",
    "real-time transcription",
  ],
  path: "/features",
});

function Features() {
  return (
    <div className="bg-white flex flex-col gap-10 sm:gap-[70px]">
      <FeaturesHero />
      <CreateNotes />
      <TextEdit />
      <TranscribeAudio />
      <Languages />
      <AudioRecorder />
      <CustomTheme />
      <StartSpeaking
        bgColor="#F0FEFF"
        borderColor="black"
        titleColor="black"
        textColor="black"
        isLineBlack
        listeningTextColor="white"
        transcribedTextColor="white"
        voiceIconColor="white"
        checkIconColor="white"
      />
    </div>
  );
}

export default Features;