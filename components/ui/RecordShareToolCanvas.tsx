import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const RecordShareToolCanvas = () => {
  return (
    <div className="py-1.5 sm:py-3 px-2 sm:px-4 border-2 sm:border-4 border-dashed border-[#3E45FB] bg-white rounded-2xl sm:rounded-4xl min-h-[90px] sm:min-h-[180px] flex flex-col justify-between gap-2 sm:gap-4 min-w-[130px] sm:min-w-[220px] w-[130%] -ml-[15%]">
      <div className="flex justify-center py-2 sm:py-4">
        <Voice color="var(--blueBg)" barWidth={5} barHeight="h-5 sm:h-12" className="sm:hidden" />
        <Voice color="var(--blueBg)" barWidth={10} barHeight="h-12" className="hidden sm:flex" />
      </div>

      <div className="flex justify-between items-end gap-2 sm:gap-4 bg-black py-1 sm:py-2 px-2 sm:px-4.5 rounded-full w-fit mx-auto">
        <Image src={icons.pause} alt="pause icon" width={20} height={20} className="w-3 sm:w-5" />
        <Image src={icons.stop} alt="stop icon" width={20} height={20} className="w-3 sm:w-5" />
      </div>
    </div>
  );
};

export default RecordShareToolCanvas;
