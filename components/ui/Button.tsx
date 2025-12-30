import { icons } from "@/lib";
import Image from "next/image";

const Button = ({
  isRounded,
  isFlashy,
  hasThickBorder,
  isDownload,
  isWhite,
  btnText,
  className,
  downloadCta,
  downloadStore,
  storeIcon,
  onClick,
}: {
  isRounded?: boolean;
  isFlashy?: boolean;
  hasThickBorder?: boolean;
  isDownload?: boolean;
  isWhite?: boolean;
  btnText?: string;
  className?: string;
  downloadCta?: string;
  downloadStore?: string;
  storeIcon?: string;
  onClick?: () => void;
}) => {
  return (
    <>
      {isRounded ? (
        <button onClick={onClick}
          className={`font-satoshi py-4 px-6 rounded-full ${
            isWhite
              ? "bg-white hover:bg-[#2702C2] focus:bg-[#2702C2] border hover:border border-transparent hover:border-white focus:border-white"
              : "bg-[#2702C2] hover:bg-white focus:bg-white border hover:border border-transparent hover:border-[#3E45FB] focus:border-[#3E45FB]"
          } text-base leading-[100%] tracking-normal ${
            isWhite
              ? "text-black hover:text-white focus:text-white"
              : "text-[#F2FFFF] hover:text-black focus:text-black"
          } font-black cursor-pointer ${className}`}
        >
          {btnText}
        </button>
      ) : isDownload ? (
        <button onClick={onClick}
          className={`flex items-center py-2.5 pl-6 pr-10 bg-white rounded-[50px] border-[3px] hover:border-[#3E45FB] focus:border-[#3E45FB] cursor-pointer ${className}`}
        >
          <Image
            src={storeIcon || icons.Playstore}
            alt="icon"
            width={32}
            height={32}
          />
          <div className="ml-4.5 text-[#3E45FB]">
            <p className="text-sm text-start font-semibold">{downloadCta}</p>
            <h3 className="font-bold text-xl text-start leading-[100%]">
              {downloadStore}
            </h3>
          </div>
        </button>
      ) : hasThickBorder ? (
        <button onClick={onClick}
          className={
            "font-varien font-normal uppercase py-3.5 px-6 border-7 border-white rounded-full hover:bg-[var(--blueBg)] focus:bg-[var(--blueBg)] text-[28px] text-white leading-[100%] tracking-[-3%] cursor-pointer " +
            className
          }
        >
          {btnText}
        </button>
      ) : (
        <button onClick={onClick}
          className={`font-satoshi py-4 px-6 rounded-xl ${
            isWhite
              ? "bg-white hover:bg-[#2702C2] focus:bg-[#2702C2] border hover:border hover:border-white focus:border-white"
              : "bg-[#2702C2] hover:bg-white focus:bg-white border hover:border hover:border-[#3E45FB] focus:border-[#3E45FB]"
          } text-base leading-[100%] tracking-normal ${
            isWhite
              ? "text-[#3E45FB] hover:text-white focus:text-white"
              : "text-[#F2FFFF] hover:text-[#3E45FB] focus:text-[#3E45FB]"
          } font-black cursor-pointer ${className}`}
        >
          {btnText}
        </button>
      )}
    </>
  );
};

export default Button;
