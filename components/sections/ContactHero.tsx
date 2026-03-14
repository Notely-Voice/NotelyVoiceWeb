'use client';

import { ctaData } from "@/contents/aboutData";
import Link from "next/link";

const ContactHero = () => {
  return (
    <div className="px-4 sm:px-9 flex flex-col justify-center items-center relative gap-10 sm:gap-[70px] pt-10">
      {/* Get In Touch Section */}
      <div className="wrapper bg-black rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] px-6 sm:px-12 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20 border-4 border-black flex flex-col items-center gap-4 sm:gap-6 z-20 relative w-full">
        {/* Heading */}
        <h2 className="font-varien text-[#F0FEFF] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-[-3%] text-center">
          {ctaData.getInTouchHeading}
        </h2>

        {/* Description */}
        <p className="text-[#F0FEFF] text-base sm:text-lg lg:text-xl xl:text-2xl text-center">
          {ctaData.getInTouchDescription}
        </p>

        {/* Email */}
        <Link href={`mailto:${encodeURIComponent(ctaData.getInTouchEmail.trim())}`} className="text-[#F0FEFF] text-base sm:text-lg lg:text-xl xl:text-2xl text-center font-medium">
          Email us: {ctaData.getInTouchEmail}
        </Link>
      </div>
    </div>
  );
};

export default ContactHero;
