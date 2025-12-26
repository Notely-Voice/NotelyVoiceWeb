import { socialsRowData } from "@/contents/homeData";
import SectionIntro from "../layouts/SectionIntro";
import IconBox from "../ui/iconBox";

const HomeDownload = () => {
  return (
    <div className="mt-[89px] pt-3.5 px-[36px] flex flex-col justify-center items-center relative">
      <div className="wrapper bg-black pt-25.5 pb-[110px] rounded-[40px] flex flex-col z-20 relative overflow-hidden">
        <div className="pl-20 pr-12">
          <SectionIntro
            heading="Write faster in all your apps, on any device"
            text="Seamless speech-to-text in every application on your iPhone or computer"
            headingStyle="max-w-[700px] text-[70px]!"
            textStyle="max-w-[609px] leading-[50px]"
            buttonBlockStyle="flex gap-8 items-center"
            isDownload
          />
        </div>

        <div className="bg-[#F0FEFF] py-4.5 mt-[100px] overflow-hidden">
          <div className="sm-scroll flex gap-4.5 w-max">
            {socialsRowData.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <IconBox icon={item} width={90} height={90} />
              </div>
            ))}
            {socialsRowData.map((item, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <IconBox icon={item} width={90} height={90} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDownload;
