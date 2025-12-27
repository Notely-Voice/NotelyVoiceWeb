import SectionIntro from "../layouts/SectionIntro";

const HomeTranscription = () => {
  return (
    <div className="mt-[40px] pt-3.5 px-[36px] flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--white_bg)] pb-[110px] px-24 rounded-[40px] flex flex-col justify-center z-20 relative">
        <SectionIntro
          bluetext="Your Smarter Transcription Toolkit"
          headingStyle="text-black text-[80px]! leading-[100%] tracking-[-3%] max-w-[1200px]"
          // className="px-9"
        />

        <div className="bg-black border-[3px] border-black">
          <div>
            
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HomeTranscription;
