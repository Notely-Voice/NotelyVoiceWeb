import { icons } from "@/lib";
import Image from "next/image";
import CreateToolCanvas from "./CreateToolCanvas";

const CreateNotesTool = () => {
  return (
    <div className="border-8 border-[#C3FBFF] bg-white w-fit flex flex-col justify-center items-center rounded-[40px] pt-7 px-8 mx-auto overflow-hidden">
      <p className="font-bold text-[26px] leading-7 tracking-[-6%] text-center">
        Quickly write down ideas, reminders, or thoughts. Keep everything in one
        place with a simple, distraction-free note-taking experience.
      </p>

      {/* <div className="mt-6"> */}
      <div className="mt-20 -mb-16 min-h-[560px] w-[320px] bg-[var(--blueBg)] border-8 border-black rounded-[70px] py-5 px-5 flex flex-col justify-between relative">
        <div className="bg-[#F0FEFF] rounded-full mt-1.5 w-[105px] h-7 mx-auto"></div>

        <div className="absolute -top-20 -right-20 mx-auto w-fit">
          <Image
            src={icons.curly_dotted_line_black}
            alt="curly dotted line pointing towards what's on the phone"
            width={150}
            height={340}
          />
        </div>

        <div className="absolute top-[14%] -left-10">
          <CreateToolCanvas />
        </div>

        <div className="border-4 border-white py-4 px-6 mb-12 rounded-[40px] min-h-[190px] relative flex flex-col justify-between">
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

export default CreateNotesTool;
