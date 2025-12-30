import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const ChatPhone = () => {
  return (
    <div className="min-h-[680px] w-[360px] bg-[var(--blueBg)] border-6 border-[#F0FEFF] rounded-[60px] pt-5 px-3 pb-3 flex flex-col justify-between">
      <div className="bg-[#F0FEFF] rounded-full w-[145px] h-8 mx-auto"></div>

      <div className="flex flex-col gap-3">
        <p className="py-2.5 px-5 max-w-[271px] text-white text-sm bg-[#1C00C4] rounded-[15px]">
          Hey, I need help setting up my account.
        </p>
        <div className="flex justify-end">
          <p className="py-2.5 px-5 max-w-[260px] text-white text-sm bg-[#1C00C4] rounded-[15px]">
            Sure! I can help with that. Are you creating a new account or
            updating an existing one?
          </p>
        </div>
        <p className="py-2.5 px-5 max-w-[271px] text-white text-sm bg-[#1C00C4] rounded-[15px]">
          Creating a new one.
        </p>
      </div>

      <div className="bg-[#F2FFFF] border-4 border-white py-3 px-4 rounded-[45px] min-h-[160px] relative flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="py-3 px-3 bg-[var(--blueBg)] rounded-full flex justify-center items-center w-fit">
            <Image src={icons.X_white} alt="X" width={12} height={12} />
          </div>
          <div className="py-3.5 px-3 bg-[var(--blueBg)] rounded-full flex justify-center items-center w-fit">
            <Image src={icons.check_white} alt="Check" width={12} height={12} />
          </div>
        </div>

        <div className="mx-auto">
          <Voice barHeight="h-12" barWidth={9} />
          <p className="mt-6 text-center text-xl text-[var(--blueBg)] font-medium">Listening...</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="bg-transparent rounded-full flex justify-center items-center w-fit">
            <Image src={icons.globe_blue} alt="Globe" width={38} height={38} />
          </div>
          <div className="bg-transparent rounded-full flex justify-center items-center w-fit">
            <Image
              src={icons.microphone_blue}
              alt="Microphone"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPhone;
