import { icons } from "@/lib";
import Image from "next/image";
import CreateToolCanvas from "./CreateToolCanvas";

const CreateNotesTool = () => {
  return (
    <div className="border-4 sm:border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-2xl sm:rounded-[40px] pt-4 sm:pt-7 px-4 sm:px-8 mx-auto overflow-hidden">
      <p className="font-bold text-base sm:text-[26px] leading-5 sm:leading-7 tracking-[-6%] text-center">
        Quickly write down ideas, reminders, or thoughts. Keep everything in one
        place with a simple, distraction-free note-taking experience.
      </p>

      {/* <div className="mt-6"> */}
      <div className="mt-8 sm:mt-20 -mb-8 sm:-mb-16 min-h-[280px] sm:min-h-[560px] w-[160px] sm:w-[320px] bg-[var(--blueBg)] border-4 sm:border-8 border-black rounded-[40px] sm:rounded-[70px] py-3 sm:py-5 px-3 sm:px-5 flex flex-col justify-between relative">
        <div className="bg-[#F0FEFF] rounded-full mt-1 sm:mt-1.5 w-16 sm:w-[105px] h-3 sm:h-7 mx-auto"></div>

        <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 mx-auto w-fit">
          <Image
            src={icons.curly_dotted_line_black}
            alt="curly dotted line pointing towards what's on the phone"
            width={150}
            height={340}
            className="w-20 sm:w-40"
          />
        </div>

        <div className="absolute top-[14%] -left-6 sm:-left-10">
          <CreateToolCanvas />
        </div>

        <div className="border-2 sm:border-4 border-white py-2 sm:py-4 px-3 sm:px-6 mb-6 sm:mb-12 rounded-2xl sm:rounded-[40px] min-h-[100px] sm:min-h-[190px] relative flex flex-col justify-between">
          <p className="font-black text-xs sm:text-base text-white">Space exploration</p>

          <div className="flex justify-between items-end">
            <div className="bg-white rounded-full text-black py-1 sm:py-2 px-3 sm:px-6 text-xs sm:text-base font-bold w-fit">
              Note
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CreateNotesTool;
