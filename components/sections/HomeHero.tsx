import { heroCommentsData } from "@/contents/homeData";
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
      <div className="wrapper bg-black pt-[40px] rounded-b-[40px] -mt-14! relative z-10 overflow-hidden">
        <div className="nv-scroll flex items-center gap-[50px]">
          {heroCommentsData.map((item, index) => (
            <div
              key={index}
              className="py-9 lg:py-12 font-inter text-[#F0FEFF] text-2xl leading-[100%] tracking-[-3%] flex gap-8 text-nowrap flex-shrink-0"
            >
              <span className="font-semibold">{item.comment}</span>{" "}
              <span className="uppercase italic font-extrabold">
                {item.author}
              </span>
            </div>
          ))}
          {heroCommentsData.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="py-9 lg:py-12 font-inter text-[#F0FEFF] text-2xl leading-[100%] tracking-[-3%] flex gap-8 text-nowrap flex-shrink-0"
            >
              <span className="font-semibold">{item.comment}</span>{" "}
              <span className="uppercase italic font-extrabold">
                {item.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
