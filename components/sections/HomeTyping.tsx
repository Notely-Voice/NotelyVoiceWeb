"use client";

import SectionIntro from "../layouts/SectionIntro";
import {useEffect, useState} from "react";
import TextPhone from "../ui/TextPhone";
import Image from "next/image";
import {icons} from "@/lib";

const HomeTyping = () => {
  const keyboardText =
    "Key areas of space discovery, exoplanets, galactic seas and the universe, spacecraft and missions, black holes and dark matter, human space flight, research and study of planets outside our solar system.";
  const charDuration = 0.1; // seconds per character
  const totalChars = keyboardText.length;
  const totalAnimationTime = totalChars * charDuration * 1000; // convert to ms

  const [isAllWhite, setIsAllWhite] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  // When animation completes, reset to restart
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAllWhite(true);
    }, totalAnimationTime);
    return () => clearTimeout(timer);
  }, [cycleKey, totalAnimationTime]);

  // After being marked as white, reset and retrigger
  useEffect(() => {
    if (isAllWhite) {
      const resetTimer = setTimeout(() => {
        setIsAllWhite(false);
        setCycleKey((prev) => prev + 1);
      }, 500); // Brief pause before restarting
      return () => clearTimeout(resetTimer);
    }
  }, [isAllWhite]);

  return (
    <div className="my-12 sm:my-25 pt-3.5 px-4 sm:px-6 xl:px-9 flex flex-col justify-center items-center relative">
      <div
        className="wrapper bg-[var(--white_bg)] px-0 sm:px-6 lg:px-10 xl:px-14 rounded-3xl sm:rounded-[40px] flex flex-col justify-center z-20 relative">
        <SectionIntro
          bluetext="4x faster"
          heading="than typing"
          text="After 150 years of using the same keyboard, voice that actually works is finally here. When you create, code, and respond faster, you free up time for more. Speak naturally at the speed you think and let Flow handle the rest."
          headingStyle="text-black text-[42px] sm:text-[52px] lg:text-[70px] max-w-full mb-4! lg:mb-6!"
          textStyle="text-black text-base sm:text-xl md:text-2xl max-w-full mb-0!"
          // className="px-9"
        />

        <div
          className="flex flex-col sm:grid lg:grid-cols-2 grid-cols-1 grid-rows-2 lg:grid-rows-1 gap-3 sm:gap-5 lg:gap-6 mt-12 lg:mt-16 relative mx-6">
          <div
            className="pt-4 px-5 sm:pt-10 sm:px-5 bg-black border-4 border-[#3E45FB] rounded-3xl sm:rounded-[40px] flex flex-col justify-start items-center gap-5 min-h-[360px]">
            <h2 className="text-2xl sm:text-[40px] text-white leading-[50px] tracking-[-6%] font-bold">
              Keyboard
            </h2>

            <div className="border-4 sm:border-7 border-white rounded-3xl sm:rounded-[40px] pt-4 pb-5 px-5 sm:pt-10 sm:pb-12 sm:px-12 max-w-[400px]">
              <p
                className="text-[10px] sm:text-base sm:leading-6 min-h-[120px] sm:min-h-[150px]"
                // style={{minHeight: "150px"}}
                key={cycleKey}
              >
                {keyboardText.split("").map((char, idx) => (
                  <span
                    key={idx}
                    className={`char text-[#494747] ${
                      isAllWhite ? "reset-char" : ""
                    }`}
                    style={{
                      animationDelay: `${idx * charDuration}s`,
                      animationDuration: `${charDuration}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div>

            <p
              className="text-white text-[10px] sm:text-lg sm:leading-6 tracking-[-6%] font-medium py-1.5 lg-py-0 px-3 sm:px-[22.5px] border-2 sm:border-4 border-[#F0FEFF] rounded-full">
              Text revealed character-by-character
            </p>
          </div>

          <div className="inline lg:hidden absolute top-[41%] sm:top-[47%] -right-[4%] rotate-[105deg]">
            <Image src={icons.curly_dotted_line_white}
                   alt="dotted line showing relationship between keyboard and notely voice"
                   className="w-[100px] sm:w-[260px] lg:w-[180px] xl:w-[220px]"/>
          </div>

          <div
            className="py-4 px-5 sm:py-10 bg-[#3E45FB] border-5 border-[#3E45FB] rounded-3xl sm:rounded-[40px] flex flex-col justify-start items-center gap-6 min-h-[360px]">
            <h2 className="text-2xl sm:text-[40px] text-white sm:leading-[50px] tracking-[-6%] font-bold">
              Notely voice
            </h2>

            <div>
              <TextPhone/>
              <p
                className="text-[#3E45FB] bg-white text-[10px] sm:text-lg sm:leading-[30px] tracking-[-6%] font-medium sm:py-0 px-[22.5px] border-5 border-[#F0FEFF] rounded-full mt-3">
                Entire sentence appears at once
              </p>
            </div>

          </div>
          <div className="hidden lg:inline absolute bottom-16 left-[38%]">
            <Image src={icons.curly_dotted_line_white}
                   alt="dotted line showing relationship between keyboard and notely voice"
                   className="w-[180px] xl:w-[220px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTyping;
