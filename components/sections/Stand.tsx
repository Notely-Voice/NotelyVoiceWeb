import { standData } from "@/contents/aboutData";

const Stand = () => {
  return (
    <div className="px-4 sm:px-6 flex flex-col justify-center items-center relative">
      {/* <div className="wrapper overflow-hidden bg-[#3E45FB] pt-10 lg:pt-12 xl:pt-16 px-6 sm:px-12 md:px-8 lg:px-12 xl:px-16 rounded-[20px] sm:rounded-[40px] flex flex-col md:flex-row justify-start items-center md:gap-6 lg:gap-8 xl:gap-16 z-20 relative"> */}
        {/* Heading */}
        <h1 className="wrapper pl-10 lg:pl-16 xl:pl-20 font-varien font-black text-[#3E45FB] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-[-3%] mb-8 xl:mb-12 text-left w-full sm:text-left">
          WHAT WE STAND FOR
        </h1>

        {/* Container */}
        <div className="wrapper bg-[#F0FEFF] border-4 border-black rounded-[20px] sm:rounded-[40px] p-6 sm:p-10 lg:p-10 xl:p-16 z-20 relative w-full">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3 lg:gap-4 xl:gap-10">
            {standData.map((item) => (
              <div
                key={item.id}
                className="bg-white text-center border-3 border-[#3E45FB] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] px-4 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8 xl:px-10 xl:py-10 flex flex-col justify-center items-center gap-4 sm:gap-5"
              >
                {/* Title */}
                <h3 className="font-varien text-[#3E45FB] text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold tracking-[-2%]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed max-w-64 sm:max-w-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Stand;
