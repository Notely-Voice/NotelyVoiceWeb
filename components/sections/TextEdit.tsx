import Image from "next/image";
import { icons } from "@/lib";
import EditingToolCanvas from "@/components/ui/EditingToolCanvas";
import Button from "@/components/ui/Button";

const TextEdit = () => {
  return (
    <div className="pt-3.5 px-4 sm:px-6 xl:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper px-0 sm:px-6 lg:px-10 xl:px-14 rounded-3xl sm:rounded-[40px] md:grid lg:grid-rows-1 md:grid-cols-2 flex flex-col-reverse gap-10 md:gap-6 lg:gap-10 justify-center items-center z-20 relative">
        <div className="border-4 sm:border-5 border-dashed border-black bg-[#F0FEFF] w-fit flex flex-col items-center rounded-2xl sm:rounded-[40px] py-8 md:py-8 lg:py-12 xl:py-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-14 mx-auto overflow-hidden">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-black font-black">
              Space exploration
            </h2>
            <p className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl">
              Write freely with simple formatting tools like bold, italics, and
              underline. Keep your notes clean and readable without unnecessary
              clutter.
            </p>
          </div>

          {/*<div className="">*/}

          <div className="mt-24 md:mt-20 xl:mt-28 py-2.5 sm:py-6 px-3 sm:px-6 border-2 sm:border-4 border-dashed border-[#3E45FB] bg-white rounded-4xl sm:rounded-[40px] min-h-[200px] lg:min-h-[280px] flex flex-col justify-between gap-1 sm:gap-2.5 w-[100%] lg:w-[85%] xl:w-[85%]">
            <div className="flex flex-col items-end mt-6">
              <Image
                src={icons.language}
                alt="language icon"
                className="w-6 md:w-4 lg:w-8 mb-1.5"
              />
              <Image
                src={icons.microphone_rounded}
                alt="microphone icon"
                width={32}
                className="mt-0.5 sm:mt-1 w-6 md:w-4 lg:w-10"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-start items-center gap-3 lg:gap-5 xl:gap-6">
                <h2 className="ml-3 lg:ml-4 xl:ml-10 font-bold text-lg lg:text-xl">
                  Title
                </h2>
                <h4 className="font-medium md:text-sm lg:text-lg">Heading</h4>
                <h6 className="text-sm md:text-xs lg:text-base">Subheading</h6>
              </div>

              <div className="flex justify-between items-center bg-black rounded-full py-1 sm:py-1.5 px-3 sm:px-4">
                <p className="font-black md:text-xs lg:text-2xl text-[#F0FEFF]">
                  B
                </p>
                <p className="font-noto-serif-tamil italic! md:text-xs lg:text-2xl text-[#F0FEFF]">
                  I
                </p>
                <Image
                  src={icons.left_align}
                  alt="left align"
                  className="w-3 md:w-2 lg:w-4"
                />
                <Image
                  src={icons.center_align}
                  alt="center align"
                  className="w-3 md:w-2 lg:w-4"
                />
                <Image
                  src={icons.right_align}
                  alt="right align"
                  className="w-3 md:w-2 lg:w-4"
                />
              </div>
            </div>
          </div>
          {/*</div>*/}
        </div>

        <div className="flex flex-col items-start md:items-end gap-6 ml-0 md:ml-5">
          <Button
            btnText="create notes"
            isRounded
            className={`px-6 sm:px-12 py-3.5 lg:px-12 w-fit font-varien font-regular text-xs sm:text-sm lg:text-base hover:text-black! hover:bg-white! focus:text-black! focus:bg-white! cursor-text transition-all`}
          />

          <h1
            className={`font-varien leading-[100%] tracking-[-3%] font-normal text-left md:text-right text-black lg:max-w-100 xl:max-w-128 text-[40px] sm:text-[68px] md:text-[48px] lg:text-[52px] xl:text-[72px]`}
          >
            Format Your Notes, Your Way
          </h1>
          <p
            className={`font-medium text-lg md:text-base lg:text-2xl xl:text-3xl xl:leading-9 tracking-[-3%] text-left md:text-right text-black md:max-w-64 lg:max-w-80 xl:max-w-100 md:mb-8 lg:mb-7`}
          >
            Create notes that look as good as they sound. Format text with
            headers, lists, emphasis, and more to turn raw thoughts into
            polished, organized documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextEdit;
