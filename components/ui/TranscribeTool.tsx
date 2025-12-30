import { icons } from "@/lib";
import Image from "next/image";
import EditingToolCanvas from "./EditingToolCanvas";
import TranscribeToolCanvas from "./TranscribeToolCanvas";

const TranscribeTool = () => {
  return (
    <div className="border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-[40px] pt-7 px-8 mx-auto relative overflow-hidden">
      <p className="font-bold text-[26px] leading-7 tracking-[-6%] text-center">
        Convert recorded audio into accurate, readable text. Perfect for
        interviews, lectures, or brainstorming sessions.
      </p>

      <div className="absolute top-46 xl:top-36 -left-48 xl:-left-36 mx-auto w-fit -rotate-[75deg]">
        <Image
          src={icons.curly_dotted_line_black}
          alt="curly dotted line pointing towards what's on the phone"
          width={180}
          height={5}
        />
      </div>


      <div className="mt-16 -mb-20 min-h-[560px] xl:min-h-[580px] w-[260px] xl:w-[280px] bg-[var(--blueBg)] border-8 border-black rounded-[50px] py-5 px-5 flex flex-col justify-start relative">
        <div className="bg-[#F0FEFF] rounded-full mt-1.5 w-[105px] h-7 mx-auto"></div>

        <p className="font-black text-base text-white mt-12">
          Convert recorded audio into accurate, readable text. Perfect for
          interviews, lectures, or brainstorming sessions.
        </p>

        <div className="absolute top-[46%] -left-13 xl:-left-16">
          <TranscribeToolCanvas />
        </div>
      </div>
    </div>
  );
};

export default TranscribeTool;
