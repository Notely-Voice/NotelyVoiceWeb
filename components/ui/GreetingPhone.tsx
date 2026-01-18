"use client";

import {useResponsive} from "@/hooks/useResponsive";

const GreetingPhone = () => {
  const greetingsText = ["Hello", "Bonjour", "Hola", "Hallo", "Sannu", "Witam"];
  // Triple the list to create seamless snake-biting-tail loop
  const tripledGreetings = [...greetingsText, ...greetingsText, ...greetingsText];
  const screenSize = useResponsive();

  const textSize = {
    xxs: 'text-[28px]',
    xs: 'text-[32px]',
    sm: 'text-5xl',
    md: 'text-5xl',
    lmd: 'text-5xl',
    lg: 'text-[40px]',
    xl: 'text-5xl',
  }[screenSize];

  const width = {
    xxs: 'w-[95%] min-w-50',
    xs: 'w-[90%] min-w-64',
    sm: 'w-88' ,
    md: 'w-90',
    lmd: 'w-94',
    lg: 'w-[320px]',
    xl: 'w-100',
  }[screenSize];

  return (
    <div className={`mt-6 sm:mt-20 -mb-24 sm:-mb-44 lg:-mb-32 xl:-mb-36 min-h-96 sm:min-h-140 lg:min-h-130 xl:min-h-150  max-w-72 sm:max-w-full ${width} bg-[var(--blueBg)] border-5 sm:border-8 border-white rounded-[36px] sm:rounded-[60px] xl:rounded-[70px] py-5 px-5 flex flex-col justify-start items-center relative overflow-hidden`}>
      <div className="bg-[#F0FEFF] rounded-full w-20 sm:w-[105px] h-5 md:h-7 mx-auto"></div>

      <div className="scroll-container mt-8 min-h-48 max-h-56 sm:max-h-76 lg:min-h-80 lg:max-h-80 xl:min-h-90 xl:max-h-90 w-full flex items-center justify-center overflow-hidden">
        <div className="greeting-scroll flex flex-col gap-1 sm:gap-2.5">
          {tripledGreetings.map((text, idx) => (
            <p
              key={idx}
              className={`font-black text-center ${textSize} leading-tight text-white whitespace-nowrap`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreetingPhone;
