import { icons } from "@/lib";
import Image from "next/image";
import Voice from "./Voice";

const ChatPhone = () => {
  return (
    <div className="min-h-[930px] w-[487px] bg-[var(--blueBg)] border-8 border-[#F0FEFF] rounded-[70px] py-5 px-5 flex flex-col justify-between">
      <div className="bg-[#F0FEFF] rounded-full mt-2.5 w-[185px] h-11 mx-auto"></div>

      <div className="flex flex-col gap-5">
        <p className="py-2.5 px-5 max-w-[271px] text-white bg-[#1C00C4] rounded-[15px]">
          Hey, I need help setting up my account.
        </p>
        <div className="flex justify-end">
          <p className="py-2.5 px-5 max-w-[260px] text-white bg-[#1C00C4] rounded-[15px]">
            Sure! I can help with that. Are you creating a new account or
            updating an existing one?
          </p>
        </div>
        <p className="py-2.5 px-5 max-w-[271px] text-white bg-[#1C00C4] rounded-[15px]">
          Creating a new one.
        </p>
      </div>

      <div className="bg-[#F2FFFF] border-4 border-white py-8 px-6 rounded-[40px] min-h-[314px] relative flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="py-3 px-3 bg-[var(--blueBg)] rounded-full flex justify-center items-center w-fit">
            <Image src={icons.X_white} alt="X" width={20} height={20} />
          </div>
          <div className="py-3.5 px-3 bg-[var(--blueBg)] rounded-full flex justify-center items-center w-fit">
            <Image src={icons.check_white} alt="Check" width={20} height={20} />
          </div>
        </div>

        <div className="mx-auto">
          <Voice />
        </div>

        <div className="flex items-center justify-between">
          <div className="py-3 px-3 bg-transparent rounded-full flex justify-center items-center w-fit">
            <Image src={icons.globe_blue} alt="Globe" width={38} height={38} />
          </div>
          <div className="py-3 px-3 bg-transparent rounded-full flex justify-center items-center w-fit">
            <Image
              src={icons.microphone_blue}
              alt="Microphone"
              width={37}
              height={37}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPhone;
