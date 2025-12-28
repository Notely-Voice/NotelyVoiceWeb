import { icons, images } from "@/lib";
import Image from "next/image";
import Voice from "../ui/Voice";
import HomeVoiceBox from "../ui/HomeVoiceBox";
import HomeTextBox from "../ui/HomeTextBox";

const HomeHeroDesign = () => {
  return (
    <div className="relative min-h-[520px] 2xl:max-h-[680px] w-full flex-1 flex flex-col items-center justify-center">
      <Image
        src={icons.up_arrow_icon}
        alt="Up Arrow Line"
        className="absolute top-0 right-0"
      />
      <div className="relative">
        <Image
          src={icons.slanted_phone}
          alt="Slant Phone"
          className="mt-[70px] mb-[70px] min-h-[480px] min-w-[600px] mr-10 z-10 -rotate-2"
          width={600}
        />
      </div>
      <Image
        src={icons.down_dotted_icon}
        alt="Down Dotted Line"
        className="absolute bottom-0 right-0"
      />

      <div className="absolute top-[170px] left-[20%] -translate-x-1/2 z-20">
      <HomeVoiceBox  />
      </div>

      <div className="absolute top-[320px] left-[70%] -translate-x-1/2 z-20">
      <HomeTextBox />
      </div>
    </div>
  );
};

export default HomeHeroDesign;
