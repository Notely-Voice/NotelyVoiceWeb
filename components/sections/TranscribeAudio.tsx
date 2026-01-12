"use client";

import Button from "@/components/ui/Button";
import Voice from "@/components/ui/Voice";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TranscribeAudio = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>("append");
  return (
    <div className="pt-3.5 px-4 sm:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper overflow-hidden bg-[#F0FEFF] py-12 xl:py-16 px-6 sm:px-12 lg:px-10 xl:px-20 border-4 border-black rounded-[20px] sm:rounded-[40px] flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-15 lg:gap-10 z-20 relative">
        {/* <div> */}
          <div className="flex flex-col gap-6 ml-0 md:ml-5">
            <Button
              btnText="Transcribe Audio"
              isRounded
              className={`px-6 sm:px-12 py-3.5 lg:px-12 w-fit font-varien font-regular text-xs sm:text-sm lg:text-base bg-black! hover:text-white! hover:bg-black! focus:text-white! focus:bg-black! cursor-text transition-all`}
            />

            <h1
              className={`font-varien leading-[100%] tracking-[-3%] font-normal text-black md:max-w-135 lg:max-w-100 xl:max-w-128 text-[40px] sm:text-[68px] md:text-[64px] lg:text-[52px] xl:text-[72px]`}
            >
              Turn Any Audio Into Text
            </h1>
            <p
              className={`font-medium text-lg md:text-2xl lg:text-2xl xl:text-3xl xl:leading-9 tracking-[-3%] text-black md:max-w-128 lg:max-w-120 xl:max-w-132 md:mb-8 lg:mb-7`}
            >
              Upload recordings, voice memos, or audio files and watch them
              transform into accurate, editable transcripts.
            </p>

            {/* Accordion Section */}
            <div className="w-full lg:max-w-md flex flex-col gap-4">
              {/* Append Item */}
              <div className="bg-[#3E45FB] rounded-2xl overflow-hidden shadow-lg">
                <button
                  onClick={() =>
                    setExpandedItem(expandedItem === "append" ? null : "append")
                  }
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 flex justify-between items-center hover:bg-[#3E45FB]/80 transition-colors duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-left">
                    Append
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-white transition-transform duration-300 flex-shrink-0 ${
                      expandedItem === "append" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItem === "append" ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-4 sm:pb-5">
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      Add new content to existing notes without starting over.
                      Continue where you left off by speaking additional
                      thoughts, and they'll seamlessly attach to your original
                      note.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summarize Item */}
              <div className="bg-[#3E45FB] rounded-2xl overflow-hidden shadow-lg">
                <button
                  onClick={() =>
                    setExpandedItem(
                      expandedItem === "summarize" ? null : "summarize"
                    )
                  }
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 flex justify-between items-center hover:bg-[#3E45FB]/80 transition-colors duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-left">
                    Summarize
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-white transition-transform duration-300 flex-shrink-0 ${
                      expandedItem === "summarize" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItem === "summarize" ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-4 sm:pb-5">
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      Get a concise summary of your transcribed notes with key
                      points highlighted automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* </div> */}

          <div className="min-h-[480px] sm:min-h-[560px] xl:min-h-[620px] max-w-70 w-fit bg-[var(--blueBg)] border-4 sm:border-8 border-black rounded-[35px] sm:rounded-[60px] py-3 sm:py-5 px-2.5 sm:px-5 flex flex-col justify-between relative">
            <div className="bg-[#F0FEFF] rounded-full w-[90px] h-5 sm:h-7 mx-auto"></div>

            <p className="font-black text-xs sm:text-sm text-white max-w-[300px] py-16 sm:py-18 px-6 sm:px-10 bg-[#1C00C4] rounded-4xl sm:rounded-[40px] mt-6 sm:mt-12 mb-10">
              Add new content to existing notes without starting over. Continue
              where you left off by speaking additional thoughts, and they'll
              seamlessly attach to your original note.
            </p>

            <div className="py-2 sm:py-4 px-2 sm:px-4 border-2 sm:border-4 border-dashed border-[#3E45FB] bg-white rounded-2xl sm:rounded-4xl min-h-[140px] flex flex-col justify-between gap-1 sm:gap-2.5 max-w-full">
              <div className="flex justify-center py-6 sm:py-7">
                <Voice color="var(--blueBg)" className="sm:hidden" />
                <Voice
                  color="var(--blueBg)"
                  barWidth={9}
                  barHeight="h-12"
                  className="hidden sm:flex"
                />
              </div>

              <div className="flex justify-center items-end gap-1 sm:gap-2.5">
                <div className="bg-black rounded-full text-white py-0.5 sm:py-1.5 px-3 sm:px-6 text-xs sm:text-sm font-bold w-fit">
                  Append
                </div>
                <div className="bg-black rounded-full text-white py-0.5 sm:py-1.5 px-3 sm:px-6 text-xs sm:text-sm font-bold w-fit">
                  Summarize
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TranscribeAudio;
