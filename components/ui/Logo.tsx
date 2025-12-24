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
          width={102}
          height={102}
        />
      ) : (
        <Image
          src={images.notely_voice_logo}
          alt="Notely Voice Logo"
          width={65}
          height={60}
        />
      )}

      {isWhite ? (
        <p className="font-bold font-instrument text-[100px] leading-23 tracking-[-3%] text-white ml-9">
          Notely Voice
        </p>
      ) : (
        <p className="font-bold font-instrument text-[42px] leading-23 tracking-[-3%] text-black ml-3.5">
          Notely Voice
        </p>
      )}
    </Link>
  );
};

export default Logo;
