import SectionIntro from "../layouts/SectionIntro";

const HomeLanguage = () => {
  return (
    <div className="px-6 xl:px-9 my-24 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-black py-10 px-5 rounded-[40px] grid lg:grid-cols-2 lg:grid-rows-1 gap-3 z-20 relative">
        <div className="px-10  xl:px-16 py-5 w-fit">
          <SectionIntro
            heading="100+ languages"
            text="Notely voice automatically detects and transcribes in your language, letting you move between them—just like you do."
            headingStyle="max-w-full lg:max-w-[480px] xl:max-w-[565px] text-[48px]! xl:text-[60px]! mb-4!"
            textStyle="max-w-full lg:max-w-[480px] xl:max-w-[560px] text-xl mb-6!"
            buttonBlockStyle="flex gap-4 items-center"
          />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default HomeLanguage;
