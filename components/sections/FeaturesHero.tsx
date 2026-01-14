"use client";

import Button from "../ui/Button";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useResponsive } from "@/hooks/useResponsive";
import SectionIntro from "@/components/layouts/SectionIntro";
import HomeHeroDesign from "@/components/layouts/HomeHeroDesign";
import Image from "next/image";
import { icons } from "@/lib";

interface FeatureItem {
  label: string;
  href: string;
}

const FEATURES: FeatureItem[] = [
  { label: "CREATE NOTES", href: "#create-notes" },
  { label: "RICH TEXT EDITING", href: "#text-editing" },
  { label: "TRANSCRIBE AUDIO", href: "#transcribe-audio" },
  { label: "LANGUAGES", href: "#languages" },
  { label: "AUDIO RECORDER", href: "#audio-recorder" },
  { label: "CUSTOM THEME", href: "#custom-theme" },
];

const FeaturesHero = () => {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const screenSize = useResponsive();

  const [selected, setSelected] = useState<string>("English");
  const [expanded, setExpanded] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const intervalRef = useRef<number | null>(null);
  const [loopCount, setLoopCount] = useState(0);

  // Calculate offset based on screen size (button height + gap)
  const getItemOffset = () => {
    if (screenSize === "xxs" || screenSize === "xs") {
      return 52;
    }
    // if (screenSize === "sm") {
    //   return 56;
    // }
    // if (screenSize === "md") {
    //   return 60;
    // }
     if (screenSize === "lg") {
      return 64;
    }
    return 72;
  };

  useEffect(() => {
    // Loop animation 10 times
    if (loopCount < 1) {
      const timer = setTimeout(() => {
        setExpanded((prev) => !prev);
        setLoopCount((prev) => prev + 1);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [loopCount]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FEATURES;
    return FEATURES.filter((f) => f.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="pt-3.5 px-4 sm:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper overflow-hidden bg-[#F0FEFF] pt-12 xl:pt-20 px-6 sm:px-12 lg:px-16 xl:px-24 border-4 border-black rounded-[20px] sm:rounded-[40px] flex flex-col lg:flex-row justify-center lg:justify-between gap-4 lg:gap-6 z-20 relative">
        <div>
          <h1
            className={`font-varien text-[#F2FFFF] xl:text-[80px] leading-[100%] tracking-[-3%] font-normal mb-8 ${"text-black  mb-3! sm:mb-4 lg:mb-8 lg:max-w-100 xl:max-w-125 text-[42px] sm:text-[68px] lg:text-[60px]"}`}
          >
            Do more <br />
            <span className="text-[#3E45FB]">with </span>
            <br /> your voice
          </h1>
          <p
            className={`font-medium xl:text-3xl xl:leading-9 tracking-[-3%] text-[#F2FFFF] mb-[45px] max-w-[509px] ${"text-black lg:max-w-100 xl:max-w-[509px] mb-8 lg:mb-7 text- sm:text-xl lg:text-2xl lg:leading-[130%]"}`}
          >
            Voice-to-text that turns your thoughts into clear, polished text in
            any app or website.
          </p>

          <div className={`${"mb-10 lg:mb-0"}`}>
            <Button btnText="Start for free" className={`w-fit`} />
          </div>
        </div>

        {/* RIGHT SECTION - Phone Mockup with Features */}
        <div
          className={`-mb-12 mx-auto lg:mx-0 bg-white min-h-95 sm:min-h-140 xl:min-h-170 w-[85%] sm:w-85 md:w-90 lg:w-[320px] xl:w-105 border-3 sm:border-5 border-black rounded-[35px] sm:rounded-[50px] py-3 sm:py-5 px-3 sm:px-5 flex flex-col justify-start relative transition-all duration-600 ease-in-out `}
        >
          <div className="bg-black rounded-full w-16 sm:w-[105px] h-5 sm:h-7 mx-auto"></div>

          <div className="mt-3 sm:mt-6 w-full flex flex-col items-center relative">
            <div className="w-full px-2 pt-2 sm:pt-4 overflow-hidden">
              <ul className="flex flex-col gap-1 sm:gap-2 lg:gap-3 absolute left-0 right-0 mx-auto overflow-y-hidden">
                {filtered.map((item, idx) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setSelected(item.label);
                      }}
                      className="font-varien bg-white text-center text-black hover:text-[#3E45FB] focus:text-[#3E45FB] border-4 text-[10px] sm:text-base lg:text-lg xl:text-xl tracking-[-3%] rounded-full px-6 py-1.5 sm:py-2 xl:py-3 w-full font-medium block"
                      style={{
                        zIndex: `${idx === 0 && 20}`,
                        transform: expanded
                          ? "translateY(0)"
                          : `translateY(${-idx * getItemOffset()}px)`,
                        transition: `transform 600ms cubic-bezier(.2,.8,.2,1) ${
                          expanded
                            ? idx * 40
                            : (filtered.length - 1 - idx) * 40
                        }ms`,
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
