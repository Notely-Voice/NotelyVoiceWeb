import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const RecordShareToolCanvas = () => {
  return (
    <div className="py-4 px-4 border-4 border-dashed border-[#3E45FB] bg-white rounded-4xl min-h-[180px] flex flex-col justify-between gap-2.5 min-w-[260px] w-[130%] -ml-[15%]">
      <div className="flex justify-center py-7">
        <Voice color="var(--blueBg)" barWidth={10} barHeight="h-14" />
      </div>

      <div className="flex justify-between items-end gap-4 bg-black py-2 px-4.5 rounded-full w-fit mx-auto">
        <Image src={icons.pause} alt="pause icon" width={24} height={24} />
        <Image src={icons.stop} alt="stop icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default RecordShareToolCanvas;
