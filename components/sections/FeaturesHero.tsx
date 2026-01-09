"use client";

import Button from "../ui/Button";
import {useState} from "react";
import {useResponsive} from "@/hooks/useResponsive";
import SectionIntro from "@/components/layouts/SectionIntro";
import HomeHeroDesign from "@/components/layouts/HomeHeroDesign";

interface FeatureItem {
  label: string;
}

const FEATURES: FeatureItem[] = [
  {label: "CREATE NOTES"},
  {label: "RICH TEXT EDITING"},
  {label: "TRANSCRIBE AUDIO"},
  {label: "LANGUAGES"},
  {label: "AUDIO RECORDER"},
  {label: "CUSTOM THEME"},
];

const FeaturesHero = () => {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const screenSize = useResponsive();

  // Responsive phone mockup styles
  const getPhoneMockupStyle = () => {
    const styles: Record<string, any> = {
      xxs: {width: "200px", height: "360px"},
      xs: {width: "220px", height: "400px"},
      sm: {width: "260px", height: "480px"},
      md: {width: "280px", height: "520px"},
      lg: {width: "320px", height: "560px"},
      xl: {width: "360px", height: "620px"},
    };
    return styles[screenSize] || styles.sm;
  };

  const phoneMockupStyle = getPhoneMockupStyle();

  return (
    <div className="pt-3.5 px-4 sm:px-[36px] flex flex-col justify-center items-center relative">
      <div
        className="wrapper bg-[#F0FEFF] pt-12 xl:pt-20 pb-0 lg:pb-[50px] border-4 border-black pl-6 sm:pl-16 lg:pl-12 xl:pl-20  pr-6 sm:pr-10 rounded-[20px] sm:rounded-[40px] flex flex-col lg:flex-row justify-center gap-6 z-20 relative">
        <SectionIntro
          heading="Speak, Don't Type"
          text="100% private AI voice-to-text transcription, everything on-device.
        Perfect for students, pros & accessibility."
          headingStyle="text-black max-w-[280px]! sm:max-w-[420px]! mb-3! sm:mb-4! lg:mb-8! lg:max-w-[400px]! xl:max-w-[500px]! text-[42px] sm:text-[68px] lg:text-[60px]"
          textStyle="text-black max-w-[490px]! lg:max-w-[400px]! xl:max-w-[509px]! mb-8! lg:mb-[45px]! text- sm:text-xl lg:text-2xl! lg:leading-[130%]! lg:mb-7!"
          isBtnWhite
          btnText="Start for free"
          buttonBlockStyle="mb-10 lg:mb-0"
        />

        {/* RIGHT SECTION - Phone Mockup with Features */}
        <div className="flex-1 flex justify-center items-center w-full lg:w-auto">
          <div className="relative" style={{width: phoneMockupStyle.width, height: phoneMockupStyle.height}}>
            {/* Phone Outer Frame - Border Only */}
            <div
              className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] xl:rounded-[48px] overflow-hidden"
              style={{
                width: "100%",
                height: "100%",
                border: "3px solid black",
              }}
            >
              {/* Phone Notch */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black rounded-b-3xl z-20"
                style={{
                  width: screenSize === 'xxs' || screenSize === 'xs' ? '80px' : screenSize === 'sm' || screenSize === 'md' ? '100px' : '120px',
                  height: screenSize === 'xxs' || screenSize === 'xs' ? '16px' : screenSize === 'sm' || screenSize === 'md' ? '20px' : '24px',
                }}
              />

              {/* Phone Screen Background */}
              <div className="w-full h-full bg-[#F2FFFF] flex flex-col items-center justify-start overflow-hidden">
                {/* Padding and Feature Buttons */}
                <div
                  className="w-full flex flex-col items-center gap-2 sm:gap-3 lg:gap-4"
                  style={{
                    paddingTop: screenSize === 'xxs' || screenSize === 'xs' ? '28px' : screenSize === 'sm' || screenSize === 'md' ? '32px' : '40px',
                    paddingLeft: screenSize === 'xxs' ? '12px' : screenSize === 'xs' || screenSize === 'sm' ? '14px' : '16px',
                    paddingRight: screenSize === 'xxs' ? '12px' : screenSize === 'xs' || screenSize === 'sm' ? '14px' : '16px',
                    paddingBottom: '24px',
                  }}
                >
                  {/* Feature Buttons */}
                  {FEATURES.map((feature, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFeatureIdx(idx)}
                      className={`w-full rounded-full font-satoshi font-black leading-[100%] tracking-normal transition-all duration-300 transform cursor-pointer ${
                        activeFeatureIdx === idx
                          ? "bg-[#3E45FB] text-white shadow-md scale-105"
                          : "bg-white text-black border-2 border-black hover:bg-gray-50 active:scale-95"
                      }`}
                      style={{
                        padding: screenSize === 'xxs' ? '8px 12px' : screenSize === 'xs' ? '10px 14px' : screenSize === 'sm' || screenSize === 'md' ? '12px 16px' : '14px 20px',
                        fontSize: screenSize === 'xxs' ? '9px' : screenSize === 'xs' ? '10px' : screenSize === 'sm' ? '11px' : screenSize === 'md' ? '12px' : '13px',
                      }}
                    >
                      {feature.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Outer Border Frame (decorative) */}
            <div
              className="absolute rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] xl:rounded-[48px] pointer-events-none"
              style={{
                inset: '-6px',
                border: '2px solid black',
                // borderOpacity: 0.15,
              }}
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default FeaturesHero;
