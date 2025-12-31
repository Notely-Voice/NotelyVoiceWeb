import { icons } from "@/lib";
import Image from "next/image";
import EditingToolCanvas from "./EditingToolCanvas";

const TextEditTool = () => {
  return (
    <div className="border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-[40px] pt-7 px-8 mx-auto overflow-hidden">
      <p className="font-bold text-[26px] leading-7 tracking-[-6%] text-center">
        Write freely with simple formatting tools like bold, italics, and
        underline. Keep your notes clean and readable without unnecessary
        clutter.
      </p>

      {/* <div className="mt-6"> */}
      <div className="mt-16 -mb-20 min-h-[580px] w-[300px] bg-[var(--blueBg)] border-8 border-black rounded-[50px] py-5 px-5 flex flex-col justify-start relative">
        <div className="bg-[#F0FEFF] rounded-full mt-1.5 w-[105px] h-7 mx-auto"></div>

        <div className="absolute -top-12 rotate-2 -right-44 lg:-right-36 mx-auto w-fit">
          <Image
            src={icons.curly_dotted_line_long}
            alt="curly dotted line pointing towards what's on the phone"
            className="w-[220px] lg:w-[180px]"
            height={10}
          />
        </div>

        <p className="font-black text-sm text-white mt-10">
          Write freely with simple formatting tools like bold, italics, and
          underline. Keep your notes clean and readable without unnecessary
          clutter.
        </p>

        <div className="absolute top-[40%] -left-12 xl:-left-16">
          <EditingToolCanvas />
        </div>

        {/* <div className="border-4 border-white py-4 px-6 mb-16 rounded-[40px] min-h-[200px] relative flex flex-col justify-between">
          <p className="font-black text-base text-white">Space exploration</p>

          <div className="flex justify-between items-end">
            <div className="bg-white rounded-full text-black py-2 px-6 text-base font-bold w-fit">
              Note
            </div>
          </div>
        </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default TextEditTool;
