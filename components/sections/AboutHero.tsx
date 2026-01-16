"use client";

import SectionIntro from "@/components/layouts/SectionIntro";
import Voice from "@/components/ui/Voice";
import { useResponsive } from "@/hooks/useResponsive";
import Image from "next/image";
import { icons } from "@/lib";

const AboutHero = () => {
  return (
    <div className="pt-10 px-4 sm:px-6 flex flex-col justify-center items-center relative">
      <div className="wrapper overflow-hidden bg-[#3E45FB] pt-10 lg:pt-12 xl:pt-16 px-6 sm:px-12 md:px-8 lg:px-12 xl:px-16 rounded-[20px] sm:rounded-[40px] flex flex-col md:flex-row justify-start items-center md:gap-6 lg:gap-8 xl:gap-16 z-20 relative">
        {/* Left Section */}
        <SectionIntro
          heading="WE BELIEVE YOUR VOICE DESERVES TO BE HEARD"
          text="In a world where ideas come fast and typing can't keep up, we created Notely Voice to help you capture every thought, every moment, and every brilliant idea—just by speaking"
          headingStyle="text-white max-w-xs! sm:max-w-full! md:max-w-md! lg:max-w-110! xl:max-w-140! text-3xl sm:text-[52px] md:text-[34px] lg:text-[44px]! xl:text-[60px]! mb-4! lg:mb-6!"
          textStyle="text-[#F0FEFF] max-w-[280px]! sm:max-w-sm! md:max-w-[300px]! lg:max-w-90! xl:max-w-100! text-xs sm:text-lg md:text-sm lg:text-lg! xl:text-xl! leading-tight! mb-6! lg:mb-16!"
          // className="flex-1"
        />

        {/* Right Section - Phone Mockup */}
        <div className="mt-6 lg:mt-12 -mb-20 md:-mb-46 lg:-mb-32 xl:-mb-40 min-h-[280px] md:min-h-[400px] w-56 sm:w-80 md:w-80 lg:w-86 xl:w-100 bg-black border-5 border-white rounded-[40px] sm:rounded-[50px] md:rounded-[50px] xl:rounded-[70px] py-5 px-5 flex flex-col justify-start items-center relative">
          {/* Dotted Line */}
          <Image
            src={icons.curly_reverse_dotted_line_white}
            alt="dotted line"
            className="absolute -top-6 lg:-top-12 -right-10 lg:-right-16 rotate-10 z-30 w-12 sm:w-16 lg:w-[100px]"
          />

          {/* Phone Notch */}
          <div className="bg-[#F0FEFF] rounded-full w-[80px] lg:w-[105px] h-4 lg::h-6 mx-auto"></div>

          {/* Text */}
          <p className="text-white text-center text-xs sm:text-lg md:text-sm lg:text-[22px] font-bold tracking-[-3%] mt-4 sm:mt-10 md:mt-5 lg:mt-12 max-w-[320px] leading-tight">
            100% private AI voice-to-text transcription
          </p>

          {/* Voice Visualization */}
          <Voice
            color="#ffffff"
            barHeight={"h-16"}
            barWidth={9}
            className="mt-10 gap-1.5!"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
