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

const HomeTranscription = () => {
  const [selectedButtonIdx, setSelectedButtonIdx] = useState(0);

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
    <div className="px-[36px] flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--white_bg)] rounded-[40px] flex flex-col justify-center z-20 relative">
        <SectionIntro
          bluetext="Your Smarter Transcription Toolkit"
          headingStyle="text-black text-[80px]! leading-[100%] tracking-[-3%] max-w-[1200px]"
          className="px-24 mb-6"
        />

        <div className="bg-black py-12 rounded-[40px] grid grid-cols-2 grid-rows-1 gap-3 z-20 relative">
          <div className="flex flex-col justify-between items-center mx-auto mt-8">
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
              buttonBlockStyle="flex gap-8 items-center"
            />
          </div>

          {/* dynamically rendered component based on the button selected above */}
          <div className="px-4">{getToolComponent(selectedButtonIdx)}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeTranscription;
