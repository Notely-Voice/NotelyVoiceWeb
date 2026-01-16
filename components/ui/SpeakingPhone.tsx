"use client";

import Voice from "@/components/ui/Voice";
import Button from "@/components/ui/Button";
import { useResponsive } from "@/hooks/useResponsive";
import Image from "next/image";
import { icons } from "@/lib";

const SpeakingPhone = ({ isLineBlack, className }: { isLineBlack: boolean, className?: string }) => {
  const screenSize = useResponsive();

  // Dynamic bar dimensions based on screen size
  const barWidth = {
    xxs: 6,
    xs: 8,
    sm: 10,
    md: 12,
    lmd: 12,
    lg: 14,
    xl: 16,
  }[screenSize];

  const barHeight = {
    xxs: "h-10",
    xs: "h-12",
    sm: "h-14",
    md: "h-16",
    lmd: "h-16",
    lg: "h-20",
    xl: "h-24",
  }[screenSize];

  return (
    <div className={`mt-12 md:mt-0 -mb-32 min-h-[360px] md:min-h-[560px] xl:min-h-[600px] w-56 sm:w-80 md:w-120 lg:w-140 xl:w-160 bg-[var(--blueBg)] border-4 sm:border-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] xl:rounded-[70px] py-5 px-5 flex flex-col justify-start items-center relative ${className}`}>
      {isLineBlack ? (
        <Image
          src={icons.curly_reverse_dotted_line_black}
          alt="dotted line"
          className="absolute -top-12 -right-6 sm:-right-12 md:-right-18 lg:-right-18 xl:-right-26 rotate-10 z-30 w-[60px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[150px]"
        />
      ) : (
        <Image
          src={icons.curly_reverse_dotted_line_white}
          alt="dotted line"
          className="absolute -top-12 -right-18 lg:-right-18 xl:-right-26 rotate-10 z-30 w-[60px] sm:w-[120px] lg:w-[120px] xl:w-[150px]"
        />
      )}

      <div className="bg-[#F0FEFF] rounded-full w-[80px] sm:w-[105px] h-5 sm:h-7 mx-auto"></div>
      <p className="hidden md:inline-block text-[#F0FEFF] text-3xl tracking-[-6%] font-bold text-center max-w-[480px] mt-10">
        100% private free AI voice-to-text transcription
      </p>

      <Voice
        color="#ffffff"
        barHeight={barHeight}
        barWidth={barWidth}
        className="mt-12 xl:mt-16"
      />

      <Button
        btnText="Start for free"
        isWhite
        className="hidden md:inline-block mt-10 xl:mt-12"
      />
    </div>
  );
};
export default SpeakingPhone;
