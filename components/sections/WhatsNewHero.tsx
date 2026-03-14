const WhatsNewHero = () => {
  return (
    <div className="bg-black px-4 sm:px-[36px]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Date */}
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-center sm:justify-between gap-4 sm:gap-0 mb-4 sm:mb-6 md:mb-10 lg:mb-10 xl:mb-12">
          <h1 className="font-varien text-center sm:text-start text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
            WHAT&apos;S NEW
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
            Latest Updates
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-[#F0FEFF] rounded-[20px] sm:rounded-[30px] px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
          <div className="space-y-4">
            <p className="text-black text-base sm:text-lg lg:text-lg leading-relaxed">
              Stay up to date with the latest features and improvements in Notely Voice. We&apos;re constantly working to bring you the best voice transcription experience.
            </p>
            <p className="text-black text-base sm:text-lg lg:text-lg leading-relaxed">
              Check out what&apos;s new in our latest releases for both Android and iOS platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNewHero;
