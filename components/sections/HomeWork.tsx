"use client";

import { icons, images } from "@/lib";
import SectionIntro from "../layouts/SectionIntro";
import Image from "next/image";
import Voice from "../ui/Voice";
import SpeakBox from "../ui/SpeakBox";
import Button from "../ui/Button";
import { toolkitButtons, useCaseButtons } from "@/contents/homeData";
import { useState } from "react";
import { UseCases } from "../layouts/UseCases";
import ListenVoiceBox from "../ui/ListenVoiceBox";
import NotesBox from "../ui/NotesBox";

const HomeWork = () => {
  const [selectedButtonIdx, setSelectedButtonIdx] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Map button index to component
  const getToolComponent = (index: number) => {
    switch (index) {
      case 0:
        return UseCases.students;
      case 1:
        return UseCases.creators;
      case 2:
        return UseCases.teams;
      case 3:
        return UseCases.accessibility;
      case 4:
        return UseCases.journalist;
      default:
        return UseCases.students;
    }
  };

  return (
    <div className="px-6 xl:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--white_bg)] rounded-[40px] flex flex-col justify-center relative">
        <SectionIntro
          bluetext="Built for How You Work"
          headingStyle="text-black text-[48px] lg:text-[64px] xl:text-[70px] leading-[100%] max-w-full tracking-[-3%] max-w-[1200px] mb-0! lg:mb-6!"
          className="px-10 lg:px-16 xl:px-20 lg:mb-4"
        />

        <div className="border-4 border-[#3E45FB] bg-white rounded-[40px] overflow-hidden flex justfy-center items-center lg:flex-col flex-col-reverse z-20 relative">
          {/* Desktop layout: all in one row with dashed lines */}
          <div className="hidden lg:flex bg-[var(--white_bg)] border-b-4 border-[#3E45FB] rounded-[55px] xl:rounded-[65px] py-4 lg:px-10 xl:px-12 justify-start items-center w-[104%]">
            <SpeakBox minWidth="min-w-[200px]" />

            <div className="mx-3 min-w-14">
              <Image src={icons.dashed_line} alt="dashed line" />
            </div>

            <ListenVoiceBox />

            <div className="mx-3 min-w-14">
              <Image src={icons.dashed_line} alt="dashed line" />
            </div>

            <NotesBox />
          </div>

          {/* Mobile/Tablet layout: SpeakBox + ListenVoiceBox in container above NotesBox */}
          <div className="lg:hidden flex flex-col gap-4 bg-[var(--white_bg)] border-t-4 border-[#3E45FB] rounded-[40px] pt-10 pb-6 px-7 overflow-hidden w-[104%]">
            <div className="bg-white border-4 border-dashed border-[#3E45FB] rounded-[40px] py-4 px-6 grid grid-cols-2 justify-center items-center gap-6">
              <SpeakBox minWidth="min-w-[140px]" />
              <ListenVoiceBox />
            </div>
            <NotesBox className="max-w-full" />
          </div>

          <div className="bg-white py-10 px-8 grid lg:grid-cols-2 gap-5 justify-center lg:justify-between items-center w-full border-[#3E45FB] rounded-b-[40px]">
            {/* Desktop buttons (visible on lg and above) */}
            <div className="hidden lg:flex flex-wrap justify-start items-center gap-4 lg:gap-6 mx-auto mt-8 max-w-[480px]">
              {useCaseButtons.map((btn, idx) => (
                <Button
                  btnText={btn.btnText}
                  isFlashy
                  key={idx}
                  onClick={() => setSelectedButtonIdx(idx)}
                  isActive={selectedButtonIdx === idx}
                  className={
                    selectedButtonIdx === idx ? "bg-[var(--blueBg)]" : ""
                  }
                />
              ))}
            </div>

            {/* Mobile dropdown (visible on md and below) */}
            <div className="lg:hidden relative w-full max-w-[300px]">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-black text-white rounded-full py-2.5 px-3.5 lg:py-4 lg:px-6 font-satoshi text-sm lg:text-base font-black cursor-pointer"
              >
                <span>{useCaseButtons[selectedButtonIdx]?.btnText}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#3E45FB] rounded-2xl overflow-hidden z-50 shadow-lg">
                  {useCaseButtons.map((btn, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedButtonIdx(idx);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 font-satoshi text-sm font-medium transition-all ${
                        selectedButtonIdx === idx
                          ? "bg-[var(--blueBg)] text-white"
                          : "text-black hover:bg-[#F0FEFF]"
                      }`}
                    >
                      {btn.btnText}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {getToolComponent(selectedButtonIdx)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
