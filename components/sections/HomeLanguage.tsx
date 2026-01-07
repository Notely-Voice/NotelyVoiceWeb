import SectionIntro from "../layouts/SectionIntro";
import GreetingPhone from "../ui/GreetingPhone";

const HomeLanguage = () => {
  return (
    <div className="px-4 sm:px-6 xl:px-9 my-24 flex flex-col justify-center items-center relative w-full">
      <div className="wrapper bg-black py-10 px-5 rounded-4xl sm:rounded-[40px] grid lg:grid-cols-2 lg:grid-rows-1 gap-3 z-20 relative sm:max-w-[85%]! lg:max-w-[90%]! xl:max-w-[1100px]! overflow-hidden">
        <div className="sm:pl-12 xl:pl-16 py-3 sm:py-5 w-full sm:w-fit">
          <SectionIntro
            heading="100+ languages"
            text="Notely voice automatically detects and transcribes in your language, letting you move between them—just like you do."
            headingStyle="max-w-full lg:max-w-[480px] xl:max-w-[565px] text-3xl sm:text-[48px]! xl:text-[60px]! mb-4!"
            textStyle="max-w-full lg:max-w-[480px] xl:max-w-[600px] text-sm sm:text-xl mb-6!"
            buttonBlockStyle="flex gap-4 items-center"
          />
        </div>

        <div className="flex justify-center items-center px-5 sm:px-0 w-full">
          <GreetingPhone />
        </div>
      </div>
    </div>
  );
};

export default HomeLanguage;
