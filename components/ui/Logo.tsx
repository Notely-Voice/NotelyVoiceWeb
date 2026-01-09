import Link from "next/link";
import { images } from "../../lib/index";
import Image from "next/image";

const Logo = ({ isWhite, isBlue, isNavWhite, className }: { isWhite?: boolean; isBlue?: boolean; isNavWhite?: boolean; className?: string }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {isWhite ? (
        <Image
          src={images.notely_voice_logo_white}
          alt="Notely Voice Logo"
          className="w-11 sm:w-16 lg:w-18 xl:w-20"
        />
      ) : isBlue ? (
        <Image
          src={images.notely_voice_logo_blue}
          alt="Notely Voice Logo"
          className="w-11 sm:w-16 lg:w-18 xl:w-20"
        />
      ) : isNavWhite ? (
        <Image
          src={images.notely_voice_logo_white}
          alt="Notely Voice Logo"
          className="w-8 lg:w-10"
        />
      ) : (
        <Image
          src={images.notely_voice_logo}
          alt="Notely Voice Logo"
          className="w-8 lg:w-10"
        />
      )}

      {isWhite ? (
        <p className="font-bold font-instrument text-3xl sm:text-5xl lg:text-6xl xl:text-[70px] leading-23 tracking-[-3%] text-white ml-3 lg:ml-5 whitespace-nowrap">
          Notely Voice
        </p>
      ) : isBlue ? (
        <p className="font-bold font-instrument text-3xl sm:text-5xl lg:text-6xl xl:text-[70px] leading-23 tracking-[-3%] text-[#3E45FB] ml-3 lg:ml-5 whitespace-nowrap">
          Notely Voice
        </p>
      ) : isNavWhite ? (
        <p className="font-bold font-instrument text-xl sm:text-2xl lg:text-[32px] leading-8 lg:leading-10 tracking-[-3%] text-white ml-1 sm:ml-2 lg:ml-3.5 whitespace-nowrap">
          Notely Voice
        </p>
      ) : (
        <p className="font-bold font-instrument text-xl sm:text-2xl lg:text-[32px] leading-8 lg:leading-10 tracking-[-3%] text-black ml-1 sm:ml-2 lg:ml-3.5 whitespace-nowrap">
          Notely Voice
        </p>
      )}
    </Link>
  );
};

export default Logo;
