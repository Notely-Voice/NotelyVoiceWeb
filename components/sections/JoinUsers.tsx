import { heroCommentsData } from "@/contents/homeData";

const JoinUsers = () => {
  return (
    <div className="px-4 sm:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-black py-6 lg:py-10 xl:py-12 px-6 lg:px-16 rounded-[20px] lg:rounded-4xl flex flex-col lg:flex-row justify-center gap-6 z-20 relative">
        <p className="text-white font-varien text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-255 text-center">Join 100,000+ users who trust Notely voice for voice transcription</p>
      </div>

      {/* the dark part */}
      <div className="wrapper bg-white text-[#3E45FB] pt-[70px] lg:pt-20 pb-5 lg:pb-[30px] rounded-b-[20px] sm:rounded-b-[40px] -mt-14! relative z-10 overflow-hidden">
        <div className="nv-scroll flex gap-10 items-center">
          {[...heroCommentsData, ...heroCommentsData].map((comment, idx) => {
            return (
              <div key={`${idx}`} className="flex items-center gap-4">
                <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-medium whitespace-nowrap ${idx === 0 && 'ml-10'}`}>
                  {comment.comment}
                </p>
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl italic font-varien whitespace-nowrap">
                  {comment.author}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoinUsers;
