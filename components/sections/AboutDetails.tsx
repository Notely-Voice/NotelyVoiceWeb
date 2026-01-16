import Image from "next/image";
import { icons } from "@/lib";
import { AboutDetailsData } from "@/contents/aboutData";

const AboutDetails = () => {
  const getIcon = (iconName: string) => {
    return icons[iconName as keyof typeof icons];
  };

  return (
    <div className="px-4 sm:px-6 flex flex-col justify-center items-center relative">
      <div className="wrapper flex flex-col gap-10 sm:gap-[70px] w-full">
        {/* Desktop View - Horizontal Layout */}
        <div className="hidden md:flex flex-col gap-10 sm:gap-[70px] w-full">
          {AboutDetailsData.map((item) => (
            <div
              key={item.id}
              className={`bg-black border-3 border-[#3E45FB] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-8 md:p-10 lg:p-12 flex flex-row ${item.id === "why" ? "flex-row-reverse" : ""} items-center gap-8 lg:gap-12`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <Image
                  src={getIcon(item.icon)}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="font-varien text-white text-2xl lg:text-3xl font-bold tracking-[-2%]">
                  {item.title}
                </h3>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Stacked */}
        <div className="md:hidden flex flex-col gap-10 sm:gap-[70px] w-full">
          {AboutDetailsData.map((item) => (
            <div
              key={item.id}
              className="bg-black border-3 border-[#3E45FB] rounded-[20px] p-6 sm:p-8 flex flex-col gap-5"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 flex ${item.id === "why" ? "self-end" : ""}`}>
                <Image
                  src={getIcon(item.icon)}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="w-16 h-16  sm:w-20 sm:h-20"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-varien text-white text-xl sm:text-2xl font-bold tracking-[-2%]">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;