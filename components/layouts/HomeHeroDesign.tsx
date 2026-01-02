import { icons, images } from "@/lib";
import Image from "next/image";
import Voice from "../ui/Voice";
import HomeVoiceBox from "../ui/HomeVoiceBox";
import HomeTextBox from "../ui/HomeTextBox";

const HomeHeroDesign = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center">
      <Image
        src={icons.up_arrow_icon}
        alt="Up Arrow Line"
        className="absolute -top-3 lg:-top-0 right-6 md:right-16 lg:right-0 w-[400px] lg:w-[380px] xl:w-[420px]"
      />
      <div className="relative">
        <Image
          src={icons.slanted_phone}
          alt="Slant Phone"
          className="xl:mt-10 lg:-mt-2 mb-16 xl:mb-[60px] min-h-[400px] xl:min-h-[380px] xl:max-h-[380px] min-w-[400px] max-w-[400px] xl:min-w-[480px] xl:max-w-[480px] -ml-20 md:-ml-10 -mr-4 xl:-mr-10 z-10"
        />
      </div>
      <Image   
        src={icons.down_dotted_icon}
        alt="Down Dotted Line"
        className="absolute bottom-16 lg:bottom-10 xl:bottom-4 right-6 md:right-16 lg:right-0 w-[400px] lg:w-[380px] xl:w-[420px]"
      />

      <div className="absolute top-[100px] lg:top-[100px] left-[20%] lg:left-[30%] -translate-x-1/2 z-20">
      <HomeVoiceBox  />
      </div>

      <div className="absolute top-[220px] xl:top-[250px] left-[66%] lg:left-[72%] xl:left-[76%] -translate-x-1/2 z-20">
      <HomeTextBox />
      </div>
    </div>
  );
};

export default HomeHeroDesign;
