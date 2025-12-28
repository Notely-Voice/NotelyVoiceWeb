import { icons } from "@/lib";
import Image from "next/image";

const EditingToolCanvas = () => {
  return (
    <div className="py-4 px-4 border-4 border-dashed border-[#3E45FB] bg-white rounded-4xl min-h-[180px] flex flex-col justify-between gap-2.5 w-[260px]">
      <div className="flex flex-col items-end">
        <Image src={icons.language} alt="language icon" />
        <Image src={icons.microphone_rounded} alt="microphone icon" width={32} className="mt-1" />
      </div>
      
      <div className="flex justify-between items-center gap-1">
        <h2 className="font-bold text-xl">Title</h2>
        <h4 className="font-medium text-lg">Heading</h4>
        <h6 className="text-base">Subheading</h6>
      </div>

      <div className="flex justify-between items-center bg-black rounded-full py-1.5 px-4">
        <p className="font-black text-2xl text-[#F0FEFF]">B</p>
        <p className="font-noto-serif-tamil italic text-2xl text-[#F0FEFF]">I</p>
        <Image src={icons.left_align} alt="left align" />
        <Image src={icons.center_align} alt="center align" />
        <Image src={icons.right_align} alt="right align" />
      </div>
    </div>
  );
};

export default EditingToolCanvas;
