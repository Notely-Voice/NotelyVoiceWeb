"use client";

import Button from "@/components/ui/Button";
import {icons} from "@/lib";
import Image from "next/image";
import {useEffect, useMemo, useRef, useState} from "react";
import {useResponsive} from "@/hooks/useResponsive";

const languagesAll = [
  "English",
  "Afrikaans",
  "Armanic",
  "Albania",
  "Albanian",
  "Arabic",
];

const Languages = () => {
  const [selected, setSelected] = useState<string>("English");
  const [expanded, setExpanded] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const intervalRef = useRef<number | null>(null);
  const screenSize = useResponsive();

  // Calculate offset based on screen size (button height + gap)
  const getItemOffset = () => {
    if (screenSize === "xxs" || screenSize === "xs") {
      // Mobile: text-sm (14px) + py-1.5 (12px) + gap-2 (8px) = ~34px
      return 40;
    }
    // Desktop: text-lg (18px) + py-1.5 (12px) + gap-3 (12px) = ~52px
    return 52;
  };

  useEffect(() => {
    // timings (ms)
    const expandDelay = 50;
    const openFor = 1000;
    const closedFor = 1000;

    const startLoop = () => {
      // open
      intervalRef.current = window.setInterval(() => {
        // open
        setExpanded(true);
        // close after openFor
        window.setTimeout(() => setExpanded(false), openFor);
      }, openFor + closedFor);
      // trigger first open after a small delay
      window.setTimeout(() => {
        setExpanded(true);
        window.setTimeout(() => setExpanded(false), openFor);
      }, expandDelay);
    };

    startLoop();

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return languagesAll;
    return languagesAll.filter((l) => l.toLowerCase().includes(q));
  }, [query]);

  return (
    <div id="languages" className="px-4 sm:px-9 flex flex-col justify-center items-center relative">
      <div
        className="wrapper overflow-hidden px-2 sm:px-6 lg:px-8 xl:px-12 items-center gap-4 lg:gap-6 z-20 relative">
        {/* Left Content Section */}
        <div>
          <div className="flex flex-col gap-6 ml-0 md:ml-5">
            {/* Badge */}
            <div className="w-fit bg-black border-2 border-black rounded-full px-6 py-3">
              <span className="font-black text-white text-xs sm:text-sm tracking-wider uppercase">
                Transcription Languages
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`font-varien leading-[100%] tracking-[-3%] font-black text-black lg:max-w-100 xl:max-w-128 text-[40px] sm:text-[68px] md:text-[48px] lg:text-[52px] xl:text-[72px]`}
            >
              Transcribe Across Languages
            </h1>

            {/* Description */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 px-4 sm:px-10 py-12 bg-black rounded-3xl w-full relative">
              <div className="flex flex-col gap-3">

              <p
                className={`font-medium text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xl:leading-9 tracking-[-3%] text-white md:max-w-130 lg:max-w-110 xl:max-w-132 md:mb-8 lg:mb-7`}
              >
                Switch between languages effortlessly. The app recognizes and
                transcribes multiple languages, so you can capture notes in
                whatever language feels natural in the moment.
              </p>

              {/* Download Buttons */}
              <div className="flex gap-2 sm:gap-4">
                <Button
                  storeIcon={icons.Playstore}
                  downloadCta="GET IT ON"
                  downloadStore="Google Play"
                  isDownload
                  className="w-full sm:w-fit"
                />
                <Button
                  storeIcon={icons.apple}
                  downloadCta="Download on the"
                  downloadStore="App Store"
                  isDownload
                  className="w-full sm:w-fit"
                />
              </div>
              </div>

              {/* Right Phone Component */}
              {/*<div>*/}
              <div className="relative lg:absolute lg:top-[-60%] xl:top-[-70%] lg:right-[5%] xl:right-[8%]">
                <div
                  className={`bg-[var(--blueBg)] min-h-[380px] sm:min-h-[520px] lg:min-h-[540px] xl:min-h-[580px] w-[210px] sm:w-[260px] md:w-[300px] xl:w-[320px] border-4 sm:border-8 border-black rounded-[35px] sm:rounded-[50px] py-3 sm:py-5 px-3 sm:px-5 flex flex-col justify-start relative transition-all duration-600 ease-in-out `}
                >
                  <div className="bg-[#F0FEFF] rounded-full w-8 sm:w-[105px] h-4 sm:h-5 mx-auto"></div>

                  <div className="mt-3 sm:mt-6 w-full flex flex-col items-center relative">
                    <div className="w-full px-2">
                      <div
                        className="flex items-center gap-2 sm:gap-3 border border-white sm:border-2 rounded-full px-2 sm:px-3 py-1 sm:py-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white/90"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                          />
                        </svg>

                        <input
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search"
                          className="bg-transparent focus:outline-none w-full text-white placeholder-white/80 text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="w-full px-2 pt-4 overflow-hidden">
                      <ul className="flex flex-col gap-2 sm:gap-3 absolute left-0 right-0 mx-auto">
                        {filtered.map((lang, idx) => (
                          <li key={lang}>
                            <button
                              onClick={() => {
                                setSelected(lang);
                                setExpanded(false);
                                setQuery("");
                              }}
                              className="bg-[#F0FEFF] text-start text-black text-sm sm:text-lg tracking-[-3%] rounded-full px-6 py-1.5 w-full font-medium"
                              style={{
                                zIndex: `${idx === 0 && 20}`,
                                transform: expanded
                                  ? "translateY(0)"
                                  : `translateY(${-idx * getItemOffset()}px)`,
                                transition: `transform 600ms cubic-bezier(.2,.8,.2,1) ${
                                  expanded ? idx * 30 : (filtered.length - 1 - idx) * 30
                                }ms`,
                              }}
                            >
                              {lang}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/*</div>*/}
      </div>
    </div>
  );
};

export default Languages;
