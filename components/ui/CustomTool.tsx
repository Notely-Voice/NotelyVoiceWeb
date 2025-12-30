import { icons } from "@/lib";
import Image from "next/image";
import CustomToolCanvas from "./CustomToolCanvas";

const CustomTool = () => {
  return (
    <div className="border-[10px] border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-[50px] pt-10 px-12 mx-auto overflow-hidden">
      <p className="max-w-[500px] font-bold text-[28px] leading-8 tracking-[-6%] text-center">
        Personalize your UI with customizable themes. Tailor your note-taking experience to match your style.
      </p>

      {/* <div className="mt-6"> */}
      <div className="mt-20 -mb-20 min-h-[580px] w-[320px] bg-[var(--blueBg)] border-8 border-black rounded-[70px] py-5 px-5 flex flex-col justify-between relative">
        <div className="bg-[#F0FEFF] rounded-full mt-1.5 w-[105px] h-7 mx-auto"></div>

        <div className="absolute -top-20 -right-30 mx-auto w- rotate-12">
          <Image
            src={icons.curly_dotted_line_black}
            alt="curly dotted line pointing towards what's on the phone"
            width={160}
            height={300}
          />
        </div>

        <div className="absolute top-[12%] -left-16">
          <CustomToolCanvas />
        </div>

        <div className="border-4 border-white py-4 px-6 mb-16 rounded-[40px] min-h-[200px] relative flex flex-col justify-between">
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
