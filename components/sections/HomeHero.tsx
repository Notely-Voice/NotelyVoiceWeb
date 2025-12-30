import { heroCommentsData } from "@/contents/homeData";
import HomeHeroDesign from "../layouts/HomeHeroDesign";
import SectionIntro from "../layouts/SectionIntro";

const HomeHero = () => {
  return (
    <div className="pt-3.5 px-[36px] flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--blueBg)] pt-20 pb-[50px] pl-20 pr-12 rounded-[40px] flex gap-6 z-20 relative">
        <SectionIntro
          heading="Speak, Don't Type"
          text="100% private AI voice-to-text transcription, everything on-device.
        Perfect for students, pros & accessibility."
          headingStyle="max-w-[500px]!"
          textStyle="max-w-[509px]!"
          isBtnWhite
          btnText="Start for free"
        />
        <HomeHeroDesign />
      </div>
      <div className="wrapper bg-black pt-[40px] rounded-b-[40px] -mt-14! relative z-10 overflow-hidden">
        <div className="nv-scroll flex items-center gap-[50px]">
          {heroCommentsData.map((item, index) => (
            <div
              key={index}
              className="py-12 font-inter text-[#F0FEFF] text-2xl leading-[100%] tracking-[-3%] flex gap-8 text-nowrap flex-shrink-0"
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
              className="py-12 font-inter text-[#F0FEFF] text-2xl leading-[100%] tracking-[-3%] flex gap-8 text-nowrap flex-shrink-0"
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
