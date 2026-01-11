import Button from "../ui/Button";
import RoundedNotesBox from "../ui/RoundedNotesBox";
import {createNotesCardsData} from "@/contents/featuresData";
import Image from "next/image";

const CreateNotes = () => {
  return (
    <div
      id="create-notes"
      className="pt-3.5 px-4 sm:px-9 flex flex-col justify-center items-center relative scroll-mt-20"
    >
      <div className="wrapper overflow-hidden bg-black py-12 xl:py-20 px-6 sm:px-10 lg:px-12 xl:px-20 border-4 border-black rounded-[20px] sm:rounded-[40px] flex flex-col z-20 relative">

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          <div>
            <div className={`${"mb-10 lg:mb-6"}`}>
              <Button
                btnText="create notes"
                isRounded
                isWhite
                className={`px-6 sm:px-12 py-3.5 lg:px-12 w-fit font-varien font-regular text-xs sm:text-sm lg:text-base hover:text-black! hover:bg-white! focus:text-black! focus:bg-white! cursor-text transition-all`}
              />
            </div>

            <h1
              className={`font-varien leading-[100%] tracking-[-3%] font-normal text-[#F0FEFF] mb-6 sm:mb-8 lg:mb-8 lg:max-w-100 xl:max-w-125 text-[40px] sm:text-[68px] lg:text-[52px] xl:text-[70px]`}
            >
              A Notepad That Listens
            </h1>
            <p
              className={`font-medium xl:text-2xl xl:leading-9 tracking-[-3%] text-[#F0FEFF] lg:max-w-120 xl:max-w-125 mb-8 lg:mb-7 text-sm sm:text-base md:text-xl lg:text-lg lg:leading-[130%]`}
            >
              Quickly write down ideas, reminders, or thoughts. Keep everything
              in one place with a simple, distraction-free note-taking
              experience.
            </p>
          </div>

          <RoundedNotesBox />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full mt-20">
          {createNotesCardsData.map((card, i) => (
            <div key={i}
                 className={`flex flex-col items-start gap-2.5 py-4 sm:py-6 px-3 sm:px-6 border-4 border-[#7C7C7C] rounded-2xl sm:rounded-[24px]`}>
                {/* <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex justify-center items-center rounded-full flex-shrink-0`}
                > */}
                  <Image
                    src={card.icon}
                    alt={card.title}
                    className={`w-6 sm:w-10 h-6 sm:h-10`}
                  />
                {/* </div> */}
                <div>
                  <h3
                    className={`font-varien text-[#F0FEFF] font-normal text-sm sm:text-xl lg:text-lg xl:text-2xl leading-[120%] tracking-[-1.5%] mb-2`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`font-medium text-[8px] sm:text-base lg:text-sm xl:text-base leading-[130%] tracking-[-1.5%] text-gray-300`}
                  >
                    {card.description}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;
