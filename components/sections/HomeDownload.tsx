import { socialsRowData } from "@/contents/homeData";
import SectionIntro from "../layouts/SectionIntro";
import IconBox from "../ui/iconBox";
import ChatPhone from "../ui/ChatPhone";

const HomeDownload = () => {
  return (
    <div className="mt-24 lg:mt-35 px-4 sm:px-6 xl:px-8 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-black pt-16 sm:pt-20 pb-20 rounded-[40px] flex flex-col z-20 relative">
        <div className="px-5 sm:pl-10 xl:pl-20 sm:pr-12 w-fit">
          <SectionIntro
            heading="Write faster in all your apps, on any device"
            text="Seamless speech-to-text in every application on your iPhone or computer"
            headingStyle="max-w-[280px] sm:max-w-full lg:max-w-[480px] xl:max-w-[565px] text-[40px] sm:text-[48px]! xl:text-[60px]! mb-4!"
            textStyle="max-w-[300px] sm:max-w-full lg:max-w-[480px] xl:max-w-[560px] text-xl mb-6!"
            buttonBlockStyle="grid grid-cols-2 sm:flex gap-2 sm:gap-4 items-center -ml-3"
            isDownload
          />
        </div>
        
        <div className="lg:absolute mx-auto -mb-30 mt-10 lg:mt-0 lg:-mb-0 lg:mx-0 lg:-top-10 lg:right-10 xl:right-24 z-10">
          <ChatPhone />
        </div>

        <div className="bg-[#F0FEFF] py-4.5 lg:mt-16 overflow-hidden">
          <div className="sm-scroll flex gap-4.5 w-max">
            {socialsRowData.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <IconBox icon={item} width={50} height={50} />
              </div>
            ))}
            {socialsRowData.map((item, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <IconBox icon={item} width={50} height={50} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDownload;