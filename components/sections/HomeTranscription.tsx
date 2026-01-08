"use client";

import { useState } from "react";
import { toolkitButtons } from "@/contents/homeData";
import SectionIntro from "../layouts/SectionIntro";
import CreateNotesTool from "../ui/CreateNotesTool";
import Button from "../ui/Button";
import TextEditTool from "../ui/TextEditTool";
import TranscribeTool from "../ui/TranscribeTool";
import LanguageTool from "../ui/LanguageTool";
import RecordShareTool from "../ui/RecordShareTool";
import CustomTool from "../ui/CustomTool";
import { useResponsive } from "@/hooks/useResponsive";

const HomeTranscription = () => {
  const [selectedButtonIdx, setSelectedButtonIdx] = useState(0);
  const screenSize = useResponsive();

  // Map button index to component
  const getToolComponent = (index: number) => {
    switch (index) {
      case 0:
        return <CreateNotesTool />;
      case 1:
        return <TextEditTool />;
      case 2:
        return <TranscribeTool />;
      case 3:
        return <LanguageTool />;
      case 4:
        return <RecordShareTool />;
      case 5:
        return <CustomTool />;
      default:
        return <CreateNotesTool />;
    }
  };

  return (
    <div className="px-4 sm:px-6 xl:px-9 mb-12 sm:mb-24 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--white_bg)] rounded-[40px] flex flex-col justify-center z-20 relative">
        <SectionIntro
          bluetext="Your Smarter Transcription Toolkit"
          headingStyle="text-black text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[70px] leading-[100%] max-w-full tracking-[-3%] max-w-[1200px] mb-0! sm:mb-6! lg:mb-6!"
          className="px-5 sm:px-10 lg:px-16 xl:px-20 lg:mb-4"
        />

        <div className="bg-black py-6 sm:py-10 px-3 sm:px-5 rounded-3xl sm:rounded-[40px] grid lg:grid-cols-2 lg:grid-rows-1 gap-3 z-20 relative">
          <div className="flex flex-wrap lg:flex-col justify-center items-center gap-2 sm:gap-4 lg:gap-6 mx-auto mt-4 sm:mt-8 order-2 lg:order-1">
            {toolkitButtons.map((btn, idx) => (
              <Button
                btnText={btn.btnText}
                key={idx}
                hasThickBorder
                onClick={() => setSelectedButtonIdx(idx)}
                className={
                  selectedButtonIdx === idx ? "bg-[var(--blueBg)]" : ""
                }
              />
            ))}

            <SectionIntro
              isDownload
              buttonBlockStyle="flex gap-2 sm:gap-4 items-center"
              textStyle="mb-0!"
            />
          </div>

          {/* dynamically rendered component based on the button selected above */}
          <div className="px-2 sm:px-4 order-1 lg:order-2">{getToolComponent(selectedButtonIdx)}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeTranscription;
