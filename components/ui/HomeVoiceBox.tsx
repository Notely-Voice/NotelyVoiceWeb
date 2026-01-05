"use client";

import { useResponsive } from "@/hooks/useResponsive";
import Voice from "./Voice";

const HomeVoiceBox = ({ className }: { className?: string }) => {


  return (
    <div className="py-1 sm:py-2 px-1.5 sm:px-3 rounded-[30px] xl:rounded-[50px] border-2 border-dashed border-white h-fit">
      <div
        className={`border-[5px] border-black xl:min-h-[158px] bg-[#F0FEFF]  py-4 sm:py-8 px-7 sm:px-8 xl:px-12 rounded-3xl xl:rounded-[40px] flex items-center justify-center ${className}`}
      >
        <Voice
          color="var(--blueBg)"
          className="gap-0"
        />
      </div>
    </div>
  );
};

export default HomeVoiceBox;
