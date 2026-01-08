import { icons } from "@/lib";
import Image from "next/image";
import CustomToolCanvas from "./CustomToolCanvas";

const CustomTool = () => {
  return (
    <div className="border-4 sm:border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-2xl sm:rounded-[50px] pt-4 sm:pt-7 px-4 sm:px-8 mx-auto overflow-hidden">
      <p className="font-bold text-base sm:text-[26px] leading-5 sm:leading-7 tracking-[-6%] text-center">
        Personalize your UI with customizable themes. Tailor your note-taking experience to match your style.
      </p>

      {/* <div className="mt-6"> */}
      <div className="mt-8 sm:mt-16 -mb-10 sm:-mb-20 min-h-[280px] sm:min-h-[560px] w-[160px] sm:w-[320px] bg-[var(--blueBg)] border-4 sm:border-8 border-black rounded-[40px] sm:rounded-[50px] py-3 sm:py-5 px-3 sm:px-5 flex flex-col justify-between relative">
        <div className="bg-[#F0FEFF] rounded-full w-16 sm:w-[105px] h-3 sm:h-7 mx-auto"></div>

        <div className="absolute -top-8 sm:-top-16 -right-12 sm:-right-24 mx-auto z-10">
          <Image
            src={icons.curly_dotted_line_extended}
            alt="curly dotted line pointing towards what's on the phone"
            className="w-16 sm:w-[240px]"
          />
        </div>

        <div className="absolute top-[14%] -left-6 sm:-left-10 xl:-left-14">
          <CustomToolCanvas />
        </div>

        <div className="border-2 sm:border-4 border-white py-2 sm:py-4 px-3 sm:px-6 mb-8 sm:mb-16 rounded-2xl sm:rounded-[30px] min-h-[100px] sm:min-h-[180px] relative flex flex-col justify-between">
          <p className="font-black text-base text-white">Space exploration</p>

          <div className="flex justify-between items-end">
            <div className="bg-white rounded-full text-black py-2 px-6 text-base font-bold w-fit">
              Note
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CustomTool;
