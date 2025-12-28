"use client";

import SectionIntro from "../layouts/SectionIntro";
import { useEffect, useState } from "react";
import TextPhone from "../ui/TextPhone";
import Image from "next/image";
import { icons } from "@/lib";

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
    <div className="mt-[40px] pt-3.5 px-[36px] flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--white_bg)] pt-25.5 pb-[110px] px-24 rounded-[40px] flex flex-col justify-center z-20 relative">
        <SectionIntro
          bluetext="4x faster "
          heading="than typing"
          text="After 150 years of using the same keyboard, voice that actually works is finally here. When you create, code, and respond faster, you free up time for more. Speak naturally at the speed you think and let Flow handle the rest."
          headingStyle="text-black text-[80px]! leading-[100%] tracking-[-3%] max-w-[1000px]"
          textStyle="text-black leading-[50px] tracking-[-6%] max-w-full mb-0!"
          // className="px-9"
        />

        <div className="grid grid-cols-2 gap-6 mt-20 relative">
          <div className="pt-12 bg-black border-5 border-[#3E45FB] rounded-[40px] min-h-[700px] flex flex-col justify-start items-center gap-5">
            <h2 className="text-[40px] text-white leading-[50px] tracking-[-6%] font-bold">
              Keyboard
            </h2>

            <div className="border-10 border-white rounded-[40px] pt-10 pb-16 px-20 max-w-[460px]">
              <p
                className="text-[20px] leading-6"
                style={{ minHeight: "150px" }}
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

            <p className="text-white text-2xl leading-[50px] tracking-[-6%] font-medium px-[22.5px] border-5 border-[#F0FEFF] rounded-full">
              Text revealed character-by-character
            </p>
          </div>

          <div className="py-12 bg-[#3E45FB] border-5 border-[#3E45FB] rounded-[40px] min-h-[700px] flex flex-col justify-between items-center gap-5">
            <h2 className="text-[40px] text-white leading-[50px] tracking-[-6%] font-bold">
              Notely voice
            </h2>

            <div>
              <TextPhone />
            </div>

            <p className="text-[#3E45FB] bg-white text-2xl leading-[50px] tracking-[-6%] font-medium px-[22.5px] border-5 border-[#F0FEFF] rounded-full">
              Entire sentence appears at once
            </p>
          </div>

          <div className="absolute bottom-16 left-[38%]">
            <Image src={icons.curly_dotted_line_white} alt="dotted line showing relationship between keyboard and notely voice" width={280} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTyping;
