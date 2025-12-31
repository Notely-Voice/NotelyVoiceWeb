import Link from "next/link";
import { images } from "../../lib/index";
import Image from "next/image";

const Logo = ({ isWhite, className }: { isWhite?: boolean; className?: string }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {isWhite ? (
        <Image
          src={images.notely_voice_logo_white}
          alt="Notely Voice Logo"
          className="w-16 lg:w-[72px] xl:w-20"
        />
      ) : (
        <Image
          src={images.notely_voice_logo}
          alt="Notely Voice Logo"
          className="w-8 lg:w-10"
        />
      )}

      {isWhite ? (
        <p className="font-bold font-instrument text-5xl lg:text-6xl xl:text-[70px] leading-23 tracking-[-3%] text-white ml-3 lg:ml-5 whitespace-nowrap">
          Notely Voice
        </p>
      ) : (
        <p className="font-bold font-instrument text-2xl lg:text-[32px] leading-8 lg:leading-10 tracking-[-3%] text-black ml-2 lg:ml-3.5 whitespace-nowrap">
          Notely Voice
        </p>
      )}
    </Link>
  );
};

export default Logo;
