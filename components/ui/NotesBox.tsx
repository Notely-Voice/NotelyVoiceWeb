import { icons } from "@/lib";
import Image from "next/image";

const NotesBox = ({ className }: { className?: string }) => {
  return (
    <div className={`border-4 border-[#3E45FB] rounded-2xl bg-black pt-6 min-h-[300px] flex flex-col justify-between items-start sm:min-w-[320px] xl:min-w-[360px] max-w-[460px] ${className}`}>
      <p className="text-sm sm:text-xl md:text-xl lg:text-base text-[#F0FEFF] md:max-w-[600px]  lg:max-w-[330px] py-4 px-4">
        Quickly write down ideas, reminders, or thoughts. Keep everything in one
        place with a simple, distraction-free note-taking experience.
      </p>

      <div className="border-t-4 border-[#3E45FB] px-5 py-3 w-full flex justify-start items-center">
        <p className="font-medium text-3xl tracking-[-6%] text-[#F0FEFE]">Aa</p>

        <Image src={icons.list_white} alt="list icon" className="w-9 ml-10" />

        <Image src={icons.star_white} alt="star icon" className="w-6 ml-4" />

        <Image
          src={icons.delete_white}
          alt="delete icon"
          className="w-6 ml-8"
        />
      </div>
    </div>
  );
};

export default NotesBox;
