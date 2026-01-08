import { icons } from "@/lib";
import Image from "next/image";
import EditingToolCanvas from "./EditingToolCanvas";
import TranscribeToolCanvas from "./TranscribeToolCanvas";

const TranscribeTool = () => {
  return (
    <div className="border-4 sm:border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-2xl sm:rounded-[40px] pt-4 sm:pt-7 px-4 sm:px-8 mx-auto relative overflow-hidden">
      <p className="font-bold text-base sm:text-[26px] leading-5 sm:leading-7 tracking-[-6%] text-center">
        Convert recorded audio into accurate, readable text. Perfect for
        interviews, lectures, or brainstorming sessions.
      </p>

      <div className="absolute top-36 sm:top-36 md:top-32 lg:top-46 xl:top-36 -left-12 sm:-left-36 md:-left-32 lg:-left-48 xl:-left-36 mx-auto w-fit -rotate-[75deg] md:-rotate-[90deg] lg:-rotate-[75deg]">
        <Image
          src={icons.curly_dotted_line_black}
          alt="curly dotted line pointing towards what's on the phone"
          width={180}
          height={5}
          className="w-12 sm:w-full"
        />
      </div>


      <div className="mt-8 sm:mt-16 -mb-10 sm:-mb-20 min-h-[280px] sm:min-h-[560px] xl:min-h-[580px] w-[180px] sm:w-[260px] xl:w-[280px] bg-[var(--blueBg)] border-4 sm:border-8 border-black rounded-[35px] sm:rounded-[50px] py-3 sm:py-5 px-2.5 sm:px-5 flex flex-col justify-start relative">
        <div className="bg-[#F0FEFF] rounded-full w-8 sm:w-[105px] h-2 sm:h-7 mx-auto"></div>

        <p className="font-black text-[10px] sm:text-base text-white mt-6 sm:mt-12">
          Convert recorded audio into accurate, readable text. Perfect for
          interviews, lectures, or brainstorming sessions.
        </p>

        <div className="absolute top-[46%] -left-6 sm:-left-13 xl:-left-16">
          <TranscribeToolCanvas />
        </div>
      </div>
    </div>
  );
};

export default TranscribeTool;
