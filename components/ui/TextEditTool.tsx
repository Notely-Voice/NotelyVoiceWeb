import { icons } from "@/lib";
import Image from "next/image";
import EditingToolCanvas from "./EditingToolCanvas";

const TextEditTool = () => {
  return (
    <div className="border-[15px] border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-[50px] pt-10 px-12 mx-auto overflow-hidden">
      <p className="max-w-[500px] font-bold text-[28px] leading-8 tracking-[-6%] text-center">
        Write freely with simple formatting tools like bold, italics, and
        underline. Keep your notes clean and readable without unnecessary
        clutter.
      </p>

      {/* <div className="mt-6"> */}
      <div className="mt-20 -mb-20 min-h-[580px] w-[320px] bg-[var(--blueBg)] border-8 border-black rounded-[70px] py-5 px-5 flex flex-col justify-start relative">
        <div className="bg-[#F0FEFF] rounded-full mt-1.5 w-[105px] h-7 mx-auto"></div>

        <div className="absolute -top-16 -right-40 mx-auto w-fit">
          <Image
            src={icons.curly_dotted_line_long}
            alt="curly dotted line pointing towards what's on the phone"
            width={200}
            height={10}
          />
        </div>

        <p className="font-black text-base text-white mt-12">
          Write freely with simple formatting tools like bold, italics, and
          underline. Keep your notes clean and readable without unnecessary
          clutter.
        </p>

        <div className="absolute top-[50%] -left-16">
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
