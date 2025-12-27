import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const TextPhone = () => {
  return (
    <div className="min-h-[524px] w-[311px] bg-[var(--blueBg)] border-8 border-[#F0FEFF] rounded-[50px] pt-3 pb-2 px-2 flex flex-col justify-between">
      <div className="bg-[#F0FEFF] rounded-full mt-2.5 w-[105px] h-7 mx-auto"></div>

      <div className="flex  gap-5">
        <p className="py-2.5 px-5 max-w-[271px] text-white text-sm rounded-[15px]">
          Key areas of space discovery, exoplanets, galactic seas and the
          universe, spacecraft and missions, black holes and dark matter, human
          space flight, research and study of planets outside our solar system.
        </p>
      </div>

      <div className="border-4 border-white py-8 px-6 rounded-[40px] h-[187px] relative flex flex-col">
        <div className="flex items-center justify-between">
          <div className="py-1.5 px-1.5 rounded-full flex justify-center items-center w-fit border border-white">
            <Image src={icons.X_white} alt="X" width={12} height={12} />
          </div>
          <div className="py-1.5 px-1.5 rounded-full flex justify-center items-center w-fit border border-white">
            <Image src={icons.check_white} alt="Check" width={12} height={12} />
          </div>
        </div>

        <div className="mx-auto">
          <Voice className="h-16!" barWidth={8} color="#F0FEFF" />
        </div>
      </div>
    </div>
  );
};

export default TextPhone;
