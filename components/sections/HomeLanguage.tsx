"use client";

import SectionIntro from "../layouts/SectionIntro";
import GreetingPhone from "../ui/GreetingPhone";
import {useResponsive} from "@/hooks/useResponsive";
import Voice from "@/components/ui/Voice";

const HomeLanguage = () => {
  const screenSize = useResponsive();

  // Dynamic bar dimensions based on screen size
  const barWidth = {
    xxs: 4,
    xs: 4,
    sm: 4,
    md: 5,
    lmd: 9,
    lg: 9,
    xl: 11,
  }[screenSize];

  const barHeight = {
    xxs: 'h-6',
    xs: 'h-6',
    sm: 'h-6',
    md: 'h-10',
    lmd: 'h-13',
    lg: 'h-14',
    xl: 'h-16',
  }[screenSize];

  const position = {
    xxs: 'left-[-14%]',
    xs: 'left-[-10%]',
    sm: 'left-[-1%]',
    md: 'left-[2%]',
    lmd: 'left-[12%]',
    lg: '-left-18',
    xl: '-left-18',
  }[screenSize];

  return (
    <div className="px-4 sm:px-6 xl:px-9 my-24 flex flex-col justify-center items-center relative w-full">
      <div
        className="wrapper bg-black py-10 px-5 rounded-4xl sm:rounded-[40px] grid lg:grid-cols-2 lg:grid-rows-1 gap-3 z-20 relative sm:max-w-[85%]! lg:max-w-[90%]! xl:max-w-[1100px]! overflow-hidden">
        <div className="sm:pl-12 xl:pl-16 py-3 sm:py-5 w-full sm:w-fit">
          <SectionIntro
            heading="100+ languages"
            text="Notely voice automatically detects and transcribes in your language, letting you move between them—just like you do."
            headingStyle="max-w-full lg:max-w-[480px] xl:max-w-[565px] text-3xl sm:text-[48px]! xl:text-[60px]! mb-4!"
            textStyle="max-w-full lg:max-w-[480px] xl:max-w-[600px] text-sm sm:text-xl mb-6!"
            buttonBlockStyle="flex gap-4 items-center"
          />
        </div>

        <div className="flex justify-center items-center px-2 sm:px-0 mx-auto sm:mx-0 w-max sm:w-full relative">
          <div
            className={`z-10 absolute top-[70%] lg:top-70 xl:top-80 ${position} py-1 sm:py-2 lg:py-2.5 px-1 sm:px-2 lg:px-2.5 rounded-[18px] sm:rounded-[32px] md:rounded-[36px] lg:rounded-[40px] xl:rounded-[44px] border-2 border-dashed border-white h-fit`}>
            <div
              className={`border-3 sm:border-5 border-white md:min-h-[100px] bg-black  py-3 sm:py-6 md:py-6 lg:py-8 lg:px-8 px-3 sm:px-6 md:px-6 xl:px-10 rounded-2xl sm:rounded-3xl md:rounded-[32px] lg:rounded-[36px] flex items-center justify-center`}
            >
              <Voice color="white" className="gap-0" barWidth={barWidth} barHeight={barHeight} />
            </div>
          </div>

          <GreetingPhone/>
        </div>
      </div>
    </div>
  );
};

export default HomeLanguage;
