import React, { useEffect, useMemo, useRef, useState } from "react";
import { icons } from "@/lib";
import Image from "next/image";
import { useResponsive } from "@/hooks/useResponsive";

const languagesAll = [
  "English",
  "Afrikaans",
  "Armanic",
  "Albania",
  "Albenian",
  "Arabic",
];

const LanguageTool: React.FC = () => {
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
      // immediate closed period then expand
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
    <div className="border-4 sm:border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-2xl sm:rounded-[50px] pt-4 sm:pt-7 px-2 sm:px-8 mx-auto overflow-hidden">
      <p className="font-bold text-base sm:text-[26px] leading-5 sm:leading-7 tracking-[-6%] text-center">
        Transcribe audio in multiple languages with built-in multilingual
        support. Ideal for international teams, language learners, and global
        content creators.
      </p>

      {/* phone component */}
      <div
        className={`mt-8 sm:mt-16 -mb-10 sm:-mb-20 -ml-2 sm:-ml-5 bg-[var(--blueBg)] min-h-[280px] sm:min-h-[560px] xl:min-h-[580px] w-[180px] sm:w-[260px] xl:w-[280px] border-4 sm:border-8 border-black rounded-[35px] sm:rounded-[50px] py-3 sm:py-5 px-3 sm:px-5 flex flex-col justify-start relative transition-all duration-600 ease-in-out `}
      >
        <div className="bg-[#F0FEFF] rounded-full w-8 sm:w-[105px] h-2 sm:h-7 mx-auto"></div>

        <div className="absolute top-16 sm:top-20 -right-8 sm:-right-26 mx-auto w-fit pointer-events-none z-10">
          <Image
            src={icons.curly_dotted_line_black}
            alt="curly dotted line pointing towards what's on the phone"
            width={120}
            className="w-16 sm:w-full"
          />
        </div>

        <div className="mt-3 sm:mt-6 w-full flex flex-col items-center relative">
          <div className="w-full px-2">
            <div className="flex items-center gap-2 sm:gap-3 border border-white sm:border-2 rounded-full px-2 sm:px-3 py-1 sm:py-2 bg-transparent">
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
      {/* end of phone component */}
    </div>
  );
};

export default LanguageTool;
