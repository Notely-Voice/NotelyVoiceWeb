import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const ChatPhone = () => {
  return (
    <div className="min-h-[476px] sm:min-h-[640px] md:min-h-[660px] lg:min-h-[620px] xl:min-h-[680px] w-[258px] sm:w-[360px] lg:w-80 xl:w-[360px] bg-[var(--blueBg)] border-4 sm:border-6 border-[#F0FEFF] rounded-[45px] sm:rounded-[60px] pt-3 sm:pt-5 px-3 pb-3 flex flex-col justify-between gap-6">
      <div className="bg-[#F0FEFF] rounded-full w-[100px] sm:w-[120px] xl:w-[145px] h-5 sm:h-7 xl:h-8 mx-auto"></div>

      <div className="flex flex-col gap-3">
        <p className="py-2 sm:py-2.5 px-3 sm:px-5 max-w-[160px] sm:max-w-[271px] text-white text-[10px] sm:text-sm bg-[#1C00C4] rounded-xl xl:rounded-[15px]">
          Hey, I need help setting up my account.
        </p>
        <div className="flex justify-end">
          <p className="py-2 sm:py-2.5 px-3 sm:px-5 max-w-[180px] sm:max-w-[260px] text-white text-[10px] sm:text-sm bg-[#1C00C4] rounded-xl xl:rounded-[15px]">
            Sure! I can help with that. Are you creating a new account or
            updating an existing one?
          </p>
        </div>
        <p className="py-2 sm:py-2.5 px-3 sm:px-5 max-w-[160px] sm:max-w-[271px] text-white text-[10px] sm:text-sm bg-[#1C00C4] rounded-xl xl:rounded-[15px]">
          Creating a new one.
        </p>
      </div>

      <div className="bg-[#F2FFFF] border-4 border-white py-3 px-4 rounded-[32px] sm:rounded-[45px] max-h-[160px] min-h-[160px] sm:max-h-[200px] md:max-h-[260px] relative flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="py-1.5 px-1.5 sm:py-3 sm:px-3 bg-[var(--blueBg)] rounded-full flex justify-center items-center w-fit">
            <Image src={icons.X_white} alt="X" width={12} height={12} />
          </div>
          <div className="py-2 px-1.5 sm:py-3.5 sm:px-3 bg-[var(--blueBg)] rounded-full flex justify-center items-center w-fit">
            <Image src={icons.check_white} alt="Check" width={12} height={12} />
          </div>
        </div>

        <div className="mx-auto">
          <Voice className="justify-center items-center" />
          <p className="mt-6 text-center text-base sm:text-xl text-[var(--blueBg)] font-medium">Listening...</p>
        </div>

        <div className="flex items-center justify-between -mt-3">
          <div className="bg-transparent rounded-full flex justify-center items-center w-fit">
            <Image src={icons.globe_blue} alt="Globe"className="w-7 sm:w-[38px]" />
          </div>
          <div className="bg-transparent rounded-full flex justify-center items-center w-fit">
            <Image
              src={icons.microphone_blue}
              alt="Microphone"
              className="w-6 sm:w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPhone;
