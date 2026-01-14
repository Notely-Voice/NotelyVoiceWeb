import CreateNotes from "@/components/sections/CreateNotes";
import FeaturesHero from "@/components/sections/FeaturesHero";
import TextEdit from "@/components/sections/TextEdit";
import TranscribeAudio from "@/components/sections/TranscribeAudio";
import Languages from "@/components/sections/Languages";
import AudioRecorder from "@/components/sections/AudioRecorder";
import StartSpeaking from "@/components/sections/StartSpeaking";
import CustomTheme from "@/components/sections/CustomTheme";

function Features() {
  return (
    <div className="bg-white flex flex-col gap-[70px]">
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
        cardBgColor="blue"
        isLineBlack
      />
    </div>
  );
}

export default Features;