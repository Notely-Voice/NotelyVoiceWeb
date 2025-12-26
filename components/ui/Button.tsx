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
  doanloadCta,
  downloadStore,
  storeIcon,
}: {
  isRounded?: boolean;
  isFlashy?: boolean;
  hasThickBorder?: boolean;
  isDownload?: boolean;
  isWhite?: boolean;
  btnText?: string;
  className?: string;
  doanloadCta?: string;
  downloadStore?: string;
  storeIcon?: string;
}) => {
  return (
    <>
      {isRounded ? (
        <div
          className={`font-satoshi py-8 px-[61.5px] rounded-full ${
            isWhite ? "bg-white" : "bg-[#2702C2]"
          } text-[24px] leading-[100%] tracking-normal ${
            isWhite ? "text-black" : "text-[#F0FEFF]"
          } font-black cursor-pointer ${className}`}
        >
          {btnText}
        </div>
      ) : isDownload ? (
        <div className={`flex items-center py-4 pl-6 pr-10 bg-white rounded-[50px] border-[3px] border-[#3E45FB] cursor-pointer ${className}`}>
          <Image src={storeIcon || icons.Playstore} alt="icon" width={48} height={48} />
          <div className="ml-4.5 text-[#3E45FB]">
            <p className="text-base font-semibold">{doanloadCta}</p>
            <h3 className="font-bold text-2xl leading-[100%]">{downloadStore}</h3>
          </div>
        </div>
      ) : (
        <div
          className={`font-satoshi py-[26px] px-[61.5px] rounded-[25px] ${
            isWhite ? "bg-white" : "bg-[#2702C2]"
          } text-[28px] leading-[100%] tracking-normal ${
            isWhite ? "text-[#3E45FB]" : "text-[#F2FFFF]"
          } font-black cursor-pointer ${className}`}
        >
          {btnText}
        </div>
      )}
    </>
  );
};

export default Button;
