import { icons } from "@/lib";
import Image from "next/image";
import CustomToolCanvas from "./CustomToolCanvas";

const CustomTool = () => {
  return (
    <div className="border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-[50px] pt-7 px-8 mx-auto overflow-hidden">
      <p className="font-bold text-[26px] leading-7 tracking-[-6%] text-center">
        Personalize your UI with customizable themes. Tailor your note-taking experience to match your style.
      </p>

      {/* <div className="mt-6"> */}
      <div className="mt-16 -mb-20 min-h-[560px] w-[320px] bg-[var(--blueBg)] border-8 border-black rounded-[50px] py-5 px-5 flex flex-col justify-between relative">
        <div className="bg-[#F0FEFF] rounded-full w-[105px] h-7 mx-auto"></div>

        <div className="absolute -top-16 -right-24 mx-auto z-10">
          <Image
            src={icons.curly_dotted_line_extended}
            alt="curly dotted line pointing towards what's on the phone"
            className="w-[240px] "
          />
        </div>

        <div className="absolute top-[14%] -left-10 xl:-left-14">
          <CustomToolCanvas />
        </div>

        <div className="border-4 border-white py-4 px-6 mb-16 rounded-[30px] min-h-[180px] relative flex flex-col justify-between">
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
