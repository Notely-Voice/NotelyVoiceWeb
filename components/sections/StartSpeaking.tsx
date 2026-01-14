"use client";

import Image from "next/image";
import { icons, images } from "@/lib";
import Voice from "../ui/Voice";
import Button from "../ui/Button";
import SectionIntro from "@/components/layouts/SectionIntro";
import SpeakingPhone from "@/components/ui/SpeakingPhone";

interface StartSpeakingProps {
  bgColor?: "black" | "white" | "blue" | "#F0FEFF"; // Dynamic background based on page
  borderColor?: string; // Custom border color
  cardBgColor?: string; // Custom card background color
  titleColor?: string; // Custom title color
  textColor?: string; // Custom text color
  buttonBg?: string; // Custom button background
  buttonText?: string; // Custom button text color
  useWhiteButton?: boolean; // Use white button variant
  isLineBlack?: boolean; // Determine line color
}

const StartSpeaking: React.FC<StartSpeakingProps> = ({
  bgColor = "black",
  borderColor = "black",
  titleColor = "white",
  textColor = "white",
  cardBgColor = "#3E45FB",
  buttonBg = "white",
  buttonText = "#3E45FB",
  useWhiteButton = true,
  isLineBlack = false,
}) => {
  const bgClass =
    bgColor === "white"
      ? "bg-white"
      : bgColor === "blue"
      ? "bg-[#3E45FB]"
      : bgColor === "#F0FEFF"
      ? "bg-[#F0FEFF]"
      : "bg-black";

  const borderClass =
    borderColor === "white"
      ? "border-white"
      : borderColor === "blue"
      ? "border-[#3E45FB]"
      : borderColor === "#F0FEFF"
      ? "border-[#F0FEFF]"
      : "border-black";

  const textClass =
    textColor === "white"
      ? "text-white"
      : textColor === "blue"
      ? "text-[#3E45FB]"
      : textColor === "#F0FEFF"
      ? "text-[#F0FEFF]"
      : "text-black";

  const titleClass =
    titleColor === "white"
      ? "text-white!"
      : titleColor === "blue"
      ? "text-[#3E45FB]!"
      : titleColor === "#F0FEFF"
      ? "text-[#F0FEFF]!"
      : "text-black!";

  return (
    <div className={`px-6 xl:px-9 flex justify-center items-center relative`}>
      <div
        className={`${bgClass} border-4 ${borderClass} rounded-[30px] sm:rounded-[40px] wrapper px-6 xl:px-9 pt-6 sm:pt-16  flex flex-col justify-center items-center overflow-hidden`}
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col justify-center items-center w-full relative">
          {/* Title and Subtitle */}
          <div className="">
            <SectionIntro
              heading="Start Speaking"
              headingStyle={`${titleClass} text-[52px]! lg:text-[70px]! max-w-full mb-4! lg:mb-6!`}
            />
          </div>

          {/* Decorative Dotted Lines */}
          {isLineBlack ? (
            <Image
              src={icons.curly_dotted_line_black}
              alt="dotted line"
              className="absolute hidden lg:inline-block top-24 lg:right-16 xl:right-36 rotate-10 z-30 w-[120px] lg:w-[120px] xl:w-[150px]"
            />
          ) : (
            <Image
              src={icons.curly_reverse_dotted_line_white}
              alt="dotted line"
              className="absolute hidden lg:inline-block top-24 lg:right-16 xl:right-36 rotate-10 z-30 w-[120px] lg:w-[120px] xl:w-[150px]"
            />
          )}

          {/* Main Card Section */}
          <div className="relative">
            {/* Decorative Dotted Lines */}
            <Image
              src={icons.curly_reverse_dotted_line_white}
              alt="dotted line"
              className="absolute lg:hidden inline-block -top-10 -right-20 rotate-10 z-30 w-[100px]"
            />

            <SpeakingPhone />

            {/* Listening Label - Left Side */}
            <div
              className="absolute left-0 top-1/3 lg:-translate-y-1/2 -translate-x-1/2 flex items-center gap-2 z-20 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: bgColor === "black" ? "white" : "black",
                color: bgColor === "black" ? "black" : "white",
              }}
            >
              <div className={`text-sm font-semibold tracking-[-3%] font-instrument whitespace-nowrap`}>
                Listening
              </div>
              <Image
                src={icons.voice_blue}
                alt="voice"
                width={20}
                height={20}
              />
            </div>

            {/* Transcribed Label - Right Side */}
            <div
              className="absolute right-0 top-4/5 -translate-y-1/2 translate-x-1/2 flex items-center gap-2 z-20 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: bgColor === "black" ? "#F0FEFF" : "black",
                color: bgColor === "black" ? "black" : "#F0FEFF",
              }}
            >
                <div className={"text-sm text-[var(--blueBg)] font-semibold tracking-[-3%] font-instrument whitespace-nowrap"}>
                Transcribed
              </div>
              <Image
                src={icons.check_filled_blue}
                alt="check"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col justify-center items-center w-full">
          {/* Subtitle and Button in container */}
          <div className="flex flex-col justify-center w-full mt-4.5 gap-4 sm:gap-6">
            {/* Title */}
            <h2
              className="font-varien text-4xl leading-[100%] tracking-[-3%] font-normal"
              style={{ color: titleColor }}
            >
              START SPEAKING
            </h2>
            <p
              className="font-medium text-lg sm:text-2xl max-w-[300px]"
              style={{ color: textColor }}
            >
              100% private free AI voice-to-text transcription
            </p>

            {/* Start for free button */}
            <Button btnText="Start for free" isWhite className="w-fit" />
          </div>

          {/* Mobile Card */}
          <div className="relative">
            {/* Decorative Dotted Lines */}
            <Image
              src={icons.curly_reverse_dotted_line_white}
              alt="dotted line"
              className="absolute lg:hidden inline-block top-0 -right-6 rotate-10 z-30 w-[60px] sm:w-[80px]"
            />

            {/* Card */}
            <SpeakingPhone />

            {/* Listening Label - Left Side */}
            <div
              className="absolute left-0 top-1/3 translate-y-2/3  -translate-x-1/4 sm:-translate-x-1/2 flex items-center gap-2 z-20 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: bgColor === "black" ? "white" : "black",
                color: bgColor === "black" ? "black" : "white",
              }}
            >
              <div className="text-[10px] sm:text-sm font-semibold tracking-[-3%] font-instrument whitespace-nowrap">
                Listening
              </div>
              <Image
                src={icons.voice_blue}
                alt="voice"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>

            {/* Transcribed Label - Right Side */}
            <div
              className="absolute right-0 top-4/5 -translate-y-1/2 translate-x-1/4 sm:translate-x-1/2 flex items-center gap-2 z-20 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: bgColor === "black" ? "#F0FEFF" : "black",
                color: bgColor === "black" ? "black" : "#F0FEFF",
              }}
            >
              <div className="text-[10px] sm:text-sm text-[var(--blueBg)] font-semibold tracking-[-3%] font-instrument whitespace-nowrap">
                Transcribed
              </div>
              <Image
                src={icons.check_filled_blue}
                alt="check"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSpeaking;
