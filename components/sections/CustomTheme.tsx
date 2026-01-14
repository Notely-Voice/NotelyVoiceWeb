"use client";

import Button from "../ui/Button";
import RoundedNotesBox from "../ui/RoundedNotesBox";
import Image from "next/image";
import {icons} from "@/lib";
import {useEffect, useState} from "react";
import HomeVoiceBox from "@/components/ui/HomeVoiceBox";
import Voice from "@/components/ui/Voice";
import {useResponsive} from "@/hooks/useResponsive";

const CustomTheme = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const screenSize = useResponsive();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNightMode((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


// Dynamic bar dimensions based on screen size
  const barWidth = {
    xxs: 4,
    xs: 4,
    sm: 4,
    md: 7,
    lmd: 9,
    lg: 10,
    xl: 11,
  }[screenSize];

  const barHeight = {
    xxs: 'h-6',
    xs: 'h-6',
    sm: 'h-6',
    md: 'h-10',
    lmd: 'h-13',
    lg: 'h-14',
    xl: 'h-16',
  }[screenSize];
  return (
    <div
      id="custom-theme"
      className="pt-3.5 px-4 sm:px-9 flex flex-col justify-center items-center relative scroll-mt-20"
    >
      <div
        className="wrapper overflow-hidden bg-black py-12 xl:py-20 px-6 sm:px-10 lg:px-12 xl:px-20 border-4 border-black rounded-[20px] sm:rounded-[40px] flex flex-col z-20 relative">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          <div>
            <div className={`${"mb-10 lg:mb-6"}`}>
              <Button
                btnText="Custom theme"
                isRounded
                isWhite
                className={`px-6 sm:px-12 py-3.5 lg:px-12 w-fit font-varien font-regular text-xs sm:text-sm lg:text-base hover:text-black! hover:bg-white! focus:text-black! focus:bg-white! cursor-text transition-all`}
              />
            </div>

            <h1
              className={`font-varien leading-[100%] tracking-[-3%] font-normal text-[#F0FEFF] mb-6 sm:mb-8 lg:mb-8 lg:max-w-100 xl:max-w-full text-[40px] sm:text-[60px] lg:text-[52px] xl:text-[70px]`}
            >
              Make It Yours
            </h1>
            <p
              className={`font-medium xl:text-2xl xl:leading-9 tracking-[-3%] text-[#F0FEFF] lg:max-w-100 xl:max-w-125 mb-8 lg:mb-7 text-sm sm:text-base md:text-xl lg:text-lg lg:leading-[130%]`}
            >
              Personalize your workspace with custom themes and color schemes.
              Choose light or dark mode, adjust accent colors, and create a
              note-taking environment that feels uniquely yours.
            </p>
          </div>

          <div
            className={`rounded-[40px] sm:rounded-[50px] md:rounded-[60px] py-4 sm:py-10 xl:py-14 px-6 sm:px-10 xl:px-16 min-h-90 sm:min-h-100 md:min-h-120 lg:min-h-100 xl:min-h-130 flex flex-col justify-around items-start min-w-full sm:min-w-[320px] md:min-w-[360px] xl:min-w-100 max-w-115 border-3 transition-all duration-700 ${
              isNightMode
                ? "border-white bg-black"
                : "border-black bg-white"
            }`}
          >

            <div
              className={`-mt-10 xl:-mt-16 w-max sm:w-max flex ${isNightMode && "flex-row-reverse"} justify-between items-center gap-1 sm:gap-3 py-1.5 sm:py-1 ${isNightMode ? "px-1 sm:px-1.5" : "pl-2 sm:pl-5 pr-1 sm:pr-1.5"} border-2 sm:border-[3px] border-[#F0FEFF] rounded-full w-fit transition-all duration-700 ${
                isNightMode ? "bg-[#3E45FB]" : "bg-black"
              }`}
            >
              <p
                className={`text-sm sm:text-base font-bold w-max transition-colors duration-700 ${
                  isNightMode ? "text-white" : "text-[#F0FEFF]"
                }`}
              >
                {isNightMode ? "Night mode" : "Day mode"}
              </p>

              <div
                className={`rounded-full py-1 sm:py-2 px-1 sm:px-2 transition-all duration-700 ${
                  isNightMode ? "bg-black" : "bg-[#F0FEFF]"
                }`}
              >
                <Image
                  src={isNightMode ? icons.night : icons.day}
                  alt={isNightMode ? "moon icon" : "sun icon"}
                  width={22}
                  height={22}
                  className="w-3 sm:w-5.5"
                />
              </div>
            </div>

            <div
              className="mx-auto py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-[30px] xl:rounded-[50px] border-2 border-dashed border-[#3E45FB] h-fit">
              <div
                className={`border-black min-h-[100px] bg-black  py-4 sm:py-8 md:py-8 md:px-8 px-7 sm:px-8 xl:px-12 rounded-3xl md:rounded-3xl xl:rounded-[40px] flex items-center justify-center  transition-all duration-700 ${
                  isNightMode
                    ? "bg-white"
                    : "bg-black"
                }`}
              >
                <Voice color={`${
                  isNightMode
                    ? "black"
                    : "white"
                }`} className="gap-0 transition-all duration-700" barWidth={barWidth} barHeight={barHeight}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTheme;
