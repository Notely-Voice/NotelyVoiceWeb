import { heroCommentsData } from "@/contents/homeData";
import { icons } from "@/lib/index";
import Image from "next/image";
import HomeHeroDesign from "../layouts/HomeHeroDesign";
import SectionIntro from "../layouts/SectionIntro";

const HomeHero = () => {
  return (
    <div className="pt-3.5 px-4 sm:px-[36px] flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--blueBg)] pt-12 xl:pt-20 pb-0 lg:pb-[50px]  pl-6 sm:pl-16 lg:pl-12 xl:pl-20  pr-6 sm:pr-10 rounded-[20px] sm:rounded-[40px] flex flex-col lg:flex-row justify-center gap-6 z-20 relative">
        <SectionIntro
          heading="Speak, Don't Type"
          text="100% private AI voice-to-text transcription, everything on-device.
        Perfect for students, pros & accessibility."
          headingStyle="max-w-[280px]! sm:max-w-[420px]! mb-3! sm:mb-4! lg:mb-8! lg:max-w-[400px]! xl:max-w-[500px]! text-[42px] sm:text-[68px] lg:text-[60px]"
          textStyle="max-w-[490px]! lg:max-w-[400px]! xl:max-w-[509px]! mb-8! lg:mb-[45px]! text- sm:text-xl lg:text-2xl! lg:leading-[130%]! lg:mb-7!"
          isBtnWhite
          btnText="Start for free"
          buttonBlockStyle="mb-10 lg:mb-0"
        />
        <HomeHeroDesign />
      </div>

{/* the dark part */}
      <div className="wrapper bg-black pt-[70px] pb-[20px] rounded-b-[20px] sm:rounded-b-[40px] -mt-14! relative z-10 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-4 px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center">

          {/* Coming soon section */}
          <div className="flex items-center gap-4">
            <p className="text-[#F0FEFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium">Coming soon on</p>
            <div className="flex items-center">
              <div className="w-10 h-10  flex items-center justify-center">
                <Image src={icons.windows} alt="Windows" width={28} height={28} />
              </div>
              <div className="w-10 h-10  flex items-center justify-center">
                <Image src={icons.linux} alt="Linux" width={28} height={28} />
              </div>
            </div>
          </div>

          {/* Available on section */}
          <div className="flex items-center gap-4">
            <p className="text-[#F0FEFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium">Available on</p>
            <div className="flex items-center">
              <div className="w-10 h-10  flex items-center justify-center">
                <Image src={icons.appstore} alt="appstore" width={28} height={28} />
              </div>
              <div className="w-10 h-10  flex items-center justify-center">
                <Image src={icons.android} alt="android" width={28} height={28} />
              </div>
              <div className="w-10 h-10  flex items-center justify-center">
                <Image src={icons.apple_white} alt="Apple" width={22} height={22} />
              </div>
            </div>
          </div>
          </div>

          {/* Ratings section */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {/* AppStore rating */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#F0FEFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium">4.9</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                <Image key={i} src={icons.star_white} alt="Apple" width={16} height={16} />
                ))}
              </div>
              <span className="text-[#F0FEFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium">AppStore</span>
            </div>

            {/* Play Store rating */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#F0FEFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium">4.9</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  
                <Image key={i} src={icons.star_white} alt="Apple" width={16} height={16} />
                ))}
              </div>
              <span className="text-[#F0FEFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium">Play Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
