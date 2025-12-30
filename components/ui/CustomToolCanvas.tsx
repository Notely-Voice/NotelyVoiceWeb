import { icons } from "@/lib";
import Image from "next/image";
import { useEffect, useState } from "react";

const CustomToolCanvas = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNightMode((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`py-4 px-4 border-4 border-dashed rounded-4xl min-h-[180px] flex flex-col justify-between gap-6 w-[260px] transition-all duration-700 ${
        isNightMode
          ? "border-[#3E45FB] bg-black"
          : "border-[#3E45FB] bg-[#F0FEFF]"
      }`}
    >
      <p
        className={`font-medium text-base transition-colors duration-700 ${
          isNightMode ? "text-[#F0FEFF]" : "text-black"
        }`}
      >
        Choose what the app fools like
      </p>

      <div
        className={`w-36 flex ${isNightMode && "flex-row-reverse"} justify-between items-center gap-3 py-1 ${isNightMode ? "px-1.5" : "pl-5 pr-1.5"} border-[3px] border-[#F0FEFF] rounded-full w-fit transition-all duration-700 ${
          isNightMode ? "bg-[#3E45FB]" : "bg-black"
        }`}
      >
        <p
          className={`text-base font-bold w-fit transition-colors duration-700 ${
            isNightMode ? "text-white" : "text-[#F0FEFF]"
          }`}
        >
          {isNightMode ? "Night mode" : "Day mode"}
        </p>

        <div
          className={`rounded-full py-2 px-2 transition-all duration-700 ${
            isNightMode ? "bg-black" : "bg-[#F0FEFF]"
          }`}
        >
          <Image
            src={isNightMode ? icons.night : icons.day}
            alt={isNightMode ? "moon icon" : "sun icon"}
            width={22}
            height={22}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomToolCanvas;
