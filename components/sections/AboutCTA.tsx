import Button from "@/components/ui/Button";
import { ctaData } from "@/contents/aboutData";
import { icons } from "@/lib";

const AboutCTA = () => {
  return (
    <div className="px-4 sm:px-9 flex flex-col justify-center items-center relative gap-10 sm:gap-[70px]">
      {/* Join Us Section */}
      <div className="wrapper bg-black rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] px-2.5 sm:px-12 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20 border-4 border-black flex flex-col items-center gap-3 sm:gap-4 z-20 relative w-full">
        {/* Heading */}
        <h1 className="font-varien text-[#F0FEFF] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-[-3%] text-center">
          {ctaData.joinUsHeading}
        </h1>

        {/* Description */}
        <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl text-center leading-relaxed max-w-[300px] sm:max-w-2xl">
          {ctaData.joinUsDescription}
        </p>

        {/* Subheading */}
        <h3 className="font-bold text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center mt-4 sm:mt-6">
          {ctaData.joinUsSubheading}
        </h3>

        {/* Download Buttons */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6">
          <Button
            storeIcon={icons.Playstore}
            downloadCta="GET IT ON"
            downloadStore="Google Play"
            isDownload
            className="w-full sm:w-fit"
          />
          <Button
            storeIcon={icons.apple}
            downloadCta="Download on the"
            downloadStore="App Store"
            isDownload
            className="w-full sm:w-fit"
          />
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="wrapper bg-black rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] px-6 sm:px-12 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20 border-4 border-black flex flex-col items-center gap-4 sm:gap-6 z-20 relative w-full">
        {/* Heading */}
        <h2 className="font-varien text-[#F0FEFF] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-[-3%] text-center">
          {ctaData.getInTouchHeading}
        </h2>

        {/* Description */}
        <p className="text-[#F0FEFF] text-base sm:text-lg lg:text-xl xl:text-2xl text-center">
          {ctaData.getInTouchDescription}
        </p>

        {/* Email */}
        <p className="text-[#F0FEFF] text-base sm:text-lg lg:text-xl xl:text-2xl text-center font-medium">
          {ctaData.getInTouchEmail}
        </p>
      </div>
    </div>
  );
};

export default AboutCTA;