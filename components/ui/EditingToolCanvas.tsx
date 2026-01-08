import { icons } from "@/lib";
import Image from "next/image";

const EditingToolCanvas = () => {
  return (
    <div className="py-2 sm:py-4 px-2 sm:px-4 border-2 sm:border-4 border-dashed border-[#3E45FB] bg-white rounded-2xl sm:rounded-4xl min-h-[90px] sm:min-h-[180px] flex flex-col justify-between gap-1 sm:gap-2.5 w-[130px] sm:w-[260px] xl:w-[280px]">
      <div className="flex flex-col items-end">
        <Image src={icons.language} alt="language icon" className="w-4 sm:w-6" />
        <Image src={icons.microphone_rounded} alt="microphone icon" width={32} className="mt-0.5 sm:mt-1 w-4 sm:w-8" />
      </div>
      
      <div className="flex justify-between items-center gap-0.5 sm:gap-1">
        <h2 className="font-bold text-xs sm:text-xl">Title</h2>
        <h4 className="font-medium text-[10px] sm:text-lg">Heading</h4>
        <h6 className="text-[8px] sm:text-base">Subheading</h6>
      </div>

      <div className="flex justify-between items-center bg-black rounded-full py-1 sm:py-1.5 px-2 sm:px-4">
        <p className="font-black text-xs sm:text-2xl text-[#F0FEFF]">B</p>
        <p className="font-noto-serif-tamil italic! text-xs sm:text-2xl text-[#F0FEFF]">I</p>
        <Image src={icons.left_align} alt="left align" className="w-3 sm:w-5" />
        <Image src={icons.center_align} alt="center align" className="w-3 sm:w-5" />
        <Image src={icons.right_align} alt="right align" className="w-3 sm:w-5" />
      </div>
    </div>
  );
};

export default EditingToolCanvas;
