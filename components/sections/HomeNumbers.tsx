import { numberStatsData } from "@/contents/homeData";
import { images } from "@/lib";
import Image from "next/image";
import SectionIntro from "../layouts/SectionIntro";

const HomeNumbers = () => {
  // Determine which shape to use for each stat
  const getShapeImage = (index: number) => {
    // Alternating pattern: rounded rectangle, curly circle, rounded rectangle, curly circle
    return index % 2 === 0 ? images.rounded_rectangle : images.curly_border_circle;
  };

  return (
    <div className="pt-3.5 px-6 xl:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper w-[80%]! bg-[var(--white_bg)] pt-12 lg:pt-16 xl:pt-20 pb-12 lg:pb-16 xl:pb-20 px-6 lg:px-10 xl:px-14 rounded-[40px] flex flex-col justify-center z-20 relative">
        
          <SectionIntro
            heading="By the Numbers"
            headingStyle="text-black text-[32px] sm:text-[40px] lg:text-[52px] xl:text-[60px] leading-[100%] max-w-full tracking-[-3%] mb-0!"
            textStyle="mb-0!"
            className="text-center"
          />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4  w-full max-w-5xl mx-auto">
          {numberStatsData.map((stat, index) => {
            const shapeImage = getShapeImage(index);
            const isRectangle = index % 2 === 0;

            return (
              <div 
                key={index} 
                className="flex justify-center items-center"
              >
                <div className="relative w-full flex items-center">
                  {/* Background Image */}
                  <div
                    className={`relative flex items-center justify-center ${
                      isRectangle
                        ? "w-64 sm:w-56 h-60 md:h-48 lg:h-56 mb-[40%] -ml-1 xl:-ml-1.5"
                        : "w-56 sm:w-48 md:w-52 lg:w-64 xl:w-72 h-56 sm:h-48 md:h-52 lg:h-64 xl:h-72 mt-[40%] -ml-4 sm:-ml-20 md:-ml-5 lg:-ml-7"
                    }`}
                  >
                    <Image
                      src={shapeImage}
                      alt={stat.label || "Background Shape"}
                      fill
                      className="object-contain"
                      priority={false}
                    />

                    {/* Text Content - Centered on Image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                      <p className="text-2xl sm:text-2xl lg:text-2xl xl:text-4xl font-black text-black">
                        {stat.number}
                      </p>
                      <p className="text-sm lg:text-base xl:text-lg font-medium text-black">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeNumbers;
