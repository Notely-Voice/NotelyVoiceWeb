import Image from "next/image";
import { icons } from "@/lib";

const MoreInfoHero = () => {
  return (
    <div className="bg-black px-4 sm:px-[36px]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Title */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <h1 className="font-varien text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
            MORE INFO
          </h1>
          <p className="text-white text-center text-sm sm:text-base lg:text-lg font-medium max-w-3xl">
            Everything you need to know about Notely Voice features
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <a
            href="https://play.google.com/store/apps/details?id=com.notelyvoice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Image src={icons.playstore_black} alt="Play Store" width={24} height={24} />
            <span>Get it on Play Store</span>
          </a>
          <a
            href="https://apps.apple.com/app/notely-voice/id6738048309"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Image src={icons.apple_black} alt="App Store" width={24} height={24} />
            <span>Download on App Store</span>
          </a>
        </div>

        {/* Content Box */}
        <div className="bg-[#F0FEFF] rounded-[20px] sm:rounded-[30px] px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
          <div className="space-y-4">
            <p className="text-black text-base sm:text-lg lg:text-lg leading-relaxed">
              Notely Voice brings powerful AI transcription to your fingertips with features designed for both Android and iOS platforms.
            </p>
            <p className="text-black text-base sm:text-lg lg:text-lg leading-relaxed">
              Discover all the amazing features that make Notely Voice the best voice-to-text solution for students, professionals, and content creators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoHero;
