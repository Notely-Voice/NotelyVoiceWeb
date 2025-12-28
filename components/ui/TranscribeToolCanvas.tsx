import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const TranscribeToolCanvas = () => {
  return (
    <div className="py-4 px-4 border-4 border-dashed border-[#3E45FB] bg-white rounded-4xl min-h-[180px] flex flex-col justify-between gap-2.5 min-w-[260px]">
      
      <div className="flex justify-center py-7">
        <Voice color="var(--blueBg)" barWidth={10} barHeight="h-14" />
      </div>

      <div className="flex justify-between items-end gap-4">
            <div className="bg-black rounded-full text-white py-2 px-6 text-base font-bold w-fit">
              Append 
            </div>
            <div className="bg-black rounded-full text-white py-2 px-6 text-base font-bold w-fit">
              Summarize 
            </div>
          </div>
    </div>
  );
};

export default TranscribeToolCanvas;
