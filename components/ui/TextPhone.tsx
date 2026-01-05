import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const TextPhone = () => {
  return (
    <div className="min-h-[360px] sm:min-h-[420px] w-[200px] sm:w-[240px] bg-[var(--blueBg)] border-6 border-[#F0FEFF] rounded-4xl sm:rounded-[40px] pt-3 pb-2 px-2 flex flex-col justify-between mx-auto">
      <div className="bg-[#F0FEFF] rounded-full w-[72px] sm:w-[90px] h-4 sm:h-6 mx-auto"></div>

      <div className="flex gap-5">
        <p className="py-2.5 px-2 sm:px-5 max-w-[271px] text-white text-[10px] sm:text-xs rounded-[15px]">
          Key areas of space discovery, exoplanets, galactic seas and the
          universe, spacecraft and missions, black holes and dark matter, human
          space flight, research and study of planets outside our solar system.
        </p>
      </div>

      <div className="border-4 border-white py-3 px-2.5 rounded-3xl sm:rounded-[30px] h-[120px] sm:h-[160px] relative flex flex-col">
        <div className="flex items-center justify-between">
          <div className="py-1.5 px-1.5 rounded-full flex justify-center items-center w-fit border border-white">
            <Image src={icons.X_white} alt="X" width={9} height={9} />
          </div>
          <div className="py-1.5 px-1.5 rounded-full flex justify-center items-center w-fit border border-white">
            <Image src={icons.check_white} alt="Check" width={9} height={9} />
          </div>
        </div>

        <div className="mx-auto sm:mt-7">
          <Voice className="h-10!" barWidth={8} color="#F0FEFF" />
        </div>
      </div>
    </div>
  );
};

export default TextPhone;
