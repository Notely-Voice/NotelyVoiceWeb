import { icons, images } from "@/lib";
import Image from "next/image";
import Voice from "../ui/Voice";
import HomeVoiceBox from "../ui/HomeVoiceBox";
import HomeTextBox from "../ui/HomeTextBox";

const HomeHeroDesign = () => {
  return (
    <div className="relative min-h-[320px] 2xl:max-h-[520px] w-full flex-1 flex flex-col items-center justify-center">
      <Image
        src={icons.up_arrow_icon}
        alt="Up Arrow Line"
        className="absolute -top-3 right-0"
        width={420}
      />
      <div className="relative">
        <Image
          src={icons.slanted_phone}
          alt="Slant Phone"
          className="mt-[40px] mb-[60px] min-h-[380px] min-w-[500px] -mr-12 z-10 -rotate-2"
          width={500}
        />
      </div>
      <Image
        src={icons.down_dotted_icon}
        alt="Down Dotted Line"
        className="absolute bottom-0 right-0"
        width={420}
      />

      <div className="absolute top-[100px] left-[30%] -translate-x-1/2 z-20">
      <HomeVoiceBox  />
      </div>

      <div className="absolute top-[260px] left-[76%] -translate-x-1/2 z-20">
      <HomeTextBox />
      </div>
    </div>
  );
};

export default HomeHeroDesign;
