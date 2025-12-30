import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const TranscribeToolCanvas = () => {
  return (
    <div className="py-4 px-4 border-4 border-dashed border-[#3E45FB] bg-white rounded-4xl min-h-[140px] flex flex-col justify-between gap-2.5 max-w-[260px]">
      
      <div className="flex justify-center py-7">
        <Voice color="var(--blueBg)" barWidth={9} barHeight="h-12" />
      </div>

      <div className="flex justify-center items-end gap-2.5">
            <div className="bg-black rounded-full text-white py-1.5 px-6 text-sm font-bold w-fit">
              Append 
            </div>
            <div className="bg-black rounded-full text-white py-1.5 px-6 text-sm font-bold w-fit">
              Summarize 
            </div>
          </div>
    </div>
  );
};

export default TranscribeToolCanvas;
