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
        <div onClick={onClick}
          className={`font-satoshi py-8 px-[61.5px] rounded-full ${
            isWhite ? "bg-white" : "bg-[#2702C2]"
          } text-[24px] leading-[100%] tracking-normal ${
            isWhite ? "text-black" : "text-[#F0FEFF]"
          } font-black cursor-pointer ${className}`}
        >
          {btnText}
        </div>
      ) : isDownload ? (
        <div onClick={onClick}
          className={`flex items-center py-4 pl-6 pr-10 bg-white rounded-[50px] border-[3px] border-[#3E45FB] cursor-pointer ${className}`}
        >
          <Image
            src={storeIcon || icons.Playstore}
            alt="icon"
            width={48}
            height={48}
          />
          <div className="ml-4.5 text-[#3E45FB]">
            <p className="text-base font-semibold">{downloadCta}</p>
            <h3 className="font-bold text-2xl leading-[100%]">
              {downloadStore}
            </h3>
          </div>
        </div>
      ) : hasThickBorder ? (
        <button onClick={onClick}
          className={
            "font-varien font-normal uppercase py-3.5 px-6 border-8 border-white rounded-full hover:bg-[var(--blueBg)] focus:bg-[var(--blueBg)] text-[32px] text-white leading-[100%] tracking-[-3%] cursor-pointer " +
            className
          }
        >
          {btnText}
        </button>
      ) : (
        <div onClick={onClick}
          className={`font-satoshi py-[26px] px-[61.5px] rounded-[25px] ${
            isWhite
              ? "bg-white hover:bg-[#2702C2]"
              : "bg-[#2702C2] hover:bg-white"
          } text-[28px] leading-[100%] tracking-normal ${
            isWhite
              ? "text-[#3E45FB] hover:text-white"
              : "text-[#F2FFFF] hover:text-[#3E45FB]"
          } font-black cursor-pointer ${className}`}
        >
          {btnText}
        </div>
      )}
    </>
  );
};

export default Button;
