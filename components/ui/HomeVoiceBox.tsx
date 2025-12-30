"use client";

import { useResponsive } from "@/hooks/useResponsive";
import Voice from "./Voice";

const HomeVoiceBox = ({ className }: { className?: string }) => {
  const screenSize = useResponsive();

  const barWidths = {
    xs: 6,
    sm: 7,
    lg: 7,
    xl: 10,
  };

  const barWidth = barWidths[screenSize as keyof typeof barWidths] || 9;

  return (
    <div className="py-2 px-3 rounded-[30px] xl:rounded-[50px] border-2 border-dashed border-white h-fit">
      <div
        className={`border-[5px] border-black xl:min-h-[158px] bg-[#F0FEFF] py-8 px-8 xl:px-12 rounded-3xl xl:rounded-[40px] flex items-center justify-center ${className}`}
      >
        <Voice
          color="var(--blueBg)"
          barWidth={barWidth}
          barHeight="h-8 md:h-10 lg:h-10 xl:h-16"
        />
      </div>
    </div>
  );
};

export default HomeVoiceBox;
