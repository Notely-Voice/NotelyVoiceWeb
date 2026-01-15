import FeaturesHero from "@/components/sections/FeaturesHero";
import CreateNotes from "@/components/sections/CreateNotes";
import TextEdit from "@/components/sections/TextEdit";
import TranscribeAudio from "@/components/sections/TranscribeAudio";
import Languages from "@/components/sections/Languages";
import AudioRecorder from "@/components/sections/AudioRecorder";
import CustomTheme from "@/components/sections/CustomTheme";
import StartSpeaking from "@/components/sections/StartSpeaking";
import SectionIntro from "@/components/layouts/SectionIntro";
import Subscription from "@/components/sections/Subscription";
import PlansFeatures from "@/components/sections/Plans&Features";

function Pricing() {
  return (
    <div className="bg-[#3E45FB] flex flex-col gap-[70px]">
      <div className="pt-3.5 px-4 sm:px-9 flex flex-col justify-center items-center relative">
        <div className="wrapper bg-inherit pt-12 xl:pt-20 px-6 sm:px-12 lg:px-16 xl:px-24 flex justify-center items-center w-full">
          <SectionIntro
            heading="Simple Pricing, Powerful Features"
            text="Choose the plan that fits your needs. Start free and upgrade anytime as you grow."
            headingStyle="text-center max-w-[840px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl!"
            textStyle="text-center max-w-[500px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl!"
            className="flex flex-col justify-center items-center w-full"
          />
        </div>
      </div>

      <Subscription  />
      <PlansFeatures />

      <StartSpeaking
        bgColor="#F0FEFF"
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
  );
}

export default Pricing;
