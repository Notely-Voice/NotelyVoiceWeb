import SectionIntro from "../layouts/SectionIntro";

const HomeWork = () => {
  return (
    <div className="px-6 xl:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--white_bg)] rounded-[40px] flex flex-col justify-center z-20 relative">
        <SectionIntro
          bluetext="Built for How You Work"
          headingStyle="text-black text-[48px] lg:text-[64px] xl:text-[70px] leading-[100%] max-w-full tracking-[-3%] max-w-[1200px] mb-0! lg:mb-6!"
          className="px-10 lg:px-16 xl:px-20 lg:mb-4"
        />

        <div className="bg-black py-10 px-5 rounded-[40px] grid lg:grid-cols-2 lg:grid-rows-1 gap-3 z-20 relative"></div>
      </div>
    </div>
  );
};

export default HomeWork;
