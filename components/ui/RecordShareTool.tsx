import { icons } from "@/lib";
import Image from "next/image";
import EditingToolCanvas from "./EditingToolCanvas";
import TranscribeToolCanvas from "./TranscribeToolCanvas";
import RecordShareToolCanvas from "./RecordShareToolCanvas";

const RecordShareTool = () => {
  return (
    <div className="border-[10px] border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-[50px] pt-10 px-12 mx-auto relative overflow-hidden">
      <p className="max-w-[500px] font-bold text-[28px] leading-8 tracking-[-6%] text-center">
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


      <div className="mt-20 -mb-20 min-h-[580px] w-[320px] bg-[var(--blueBg)] border-8 border-black rounded-[70px] py-5 px-5 flex flex-col justify-start relative">
        <div className="bg-[#F0FEFF] rounded-full mt-1.5 w-[105px] h-7 mx-auto"></div>

        <p className="font-black text-base text-white mt-12">
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
