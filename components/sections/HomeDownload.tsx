import { socialsRowData } from "@/contents/homeData";
import SectionIntro from "../layouts/SectionIntro";
import IconBox from "../ui/iconBox";
import ChatPhone from "../ui/ChatPhone";

const HomeDownload = () => {
  return (
    <div className="mt-[140px] px-[36px] flex flex-col justify-center items-center relative">
      <div className="wrapper bg-black pt-20 pb-20 rounded-[40px] flex flex-col z-20 relative">
        <div className="pl-20 pr-12 w-fit">
          <SectionIntro
            heading="Write faster in all your apps, on any device"
            text="Seamless speech-to-text in every application on your iPhone or computer"
            headingStyle="max-w-[565px] text-[60px]! mb-4!"
            textStyle="max-w-[560px] mb-6!"
            buttonBlockStyle="flex gap-8 items-center"
            isDownload
          />
        </div>

        <div className="bg-[#F0FEFF] py-4.5 mt-16 overflow-hidden">
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
        
        <div className="absolute -top-10 right-24">
          <ChatPhone />
        </div>
      </div>
    </div>
  );
};

export default HomeDownload;
