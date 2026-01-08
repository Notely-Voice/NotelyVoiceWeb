import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const TranscribeToolCanvas = () => {
  return (
    <div className="py-2 sm:py-4 px-2 sm:px-4 border-2 sm:border-4 border-dashed border-[#3E45FB] bg-white rounded-2xl sm:rounded-4xl min-h-[70px] sm:min-h-[140px] flex flex-col justify-between gap-1 sm:gap-2.5 max-w-[130px] sm:max-w-[260px]">
      
      <div className="flex justify-center py-3 sm:py-7">
        <Voice color="var(--blueBg)"  className="sm:hidden" />
        <Voice color="var(--blueBg)" barWidth={9} barHeight="h-12" className="hidden sm:flex" />
      </div>

      <div className="flex justify-center items-end gap-1 sm:gap-2.5">
        <div className="bg-black rounded-full text-white py-0.5 sm:py-1.5 px-3 sm:px-6 text-[6px] sm:text-sm font-bold w-fit">
          Append 
        </div>
        <div className="bg-black rounded-full text-white py-0.5 sm:py-1.5 px-3 sm:px-6 text-[6px] sm:text-sm font-bold w-fit">
          Summarize 
        </div>
      </div>
    </div>
  );
};

export default TranscribeToolCanvas;
