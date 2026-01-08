import { icons } from "@/lib";
import Image from "next/image";
import EditingToolCanvas from "./EditingToolCanvas";
import TranscribeToolCanvas from "./TranscribeToolCanvas";
import RecordShareToolCanvas from "./RecordShareToolCanvas";

const RecordShareTool = () => {
  return (
    <div className="border-4 sm:border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-2xl sm:rounded-[50px] pt-4 sm:pt-7 px-2 sm:px-8 mx-auto relative overflow-hidden">
      <p className="font-bold text-base sm:text-[26px] leading-5 sm:leading-7 tracking-[-6%] text-center">
        Convert recorded audio into accurate, readable text. Perfect for
        interviews, lectures, or brainstorming sessions.
      </p>

      {/* <div className="absolute top-46 -left-46 mx-auto w-fit -rotate-90">
        <Image
          src={icons.curly_dotted_line_black}
          alt="curly dotted line pointing towards what's on the phone"
          width={200}
          height={10}
        />
      </div> */}


      <div className="mt-8 sm:mt-20 -mb-10 sm:-mb-20 min-h-[280px] sm:min-h-[560px] xl:min-h-[580px] w-[160px] sm:w-[260px] xl:w-[280px] bg-[var(--blueBg)] border-4 sm:border-8 border-black rounded-[35px] sm:rounded-[50px] py-3 sm:py-5 px-2 sm:px-5 flex flex-col justify-start items-center relative">
        <div className="bg-[#F0FEFF] rounded-full w-16 sm:w-[105px] h-3 sm:h-7 mx-auto"></div>

        <p className="font-black text-[10px] sm:text-sm text-white mt-3 sm:mt-12">
          Convert recorded audio into accurate, readable text. Perfect for
          interviews, lectures, or brainstorming sessions.
        </p>

        <div className="absolute top-[45%]">
          <RecordShareToolCanvas />
        </div>
      </div>
    </div>
  );
};

export default RecordShareTool;
