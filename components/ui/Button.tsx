const Button = ({
  isRounded,
  isFlashy,
  hasThickBorder,
  isWhite,
  btnText,
  className,
}: {
  isRounded?: boolean;
  isFlashy?: boolean;
  hasThickBorder?: boolean;
  isWhite?: boolean;
  btnText: string;
  className?: string;
}) => {
  return (
    <>
      {isRounded ? (
        <div
          className={`font-satoshi py-8 px-[61.5px] rounded-full ${
            isWhite ? "bg-white" : "bg-[#2702C2]"
          } text-[24px] leading-[100%] tracking-normal ${
            isWhite ? "text-black" : "text-[#F0FEFF]"
          } font-black ${className}`}
        >
          {btnText}
        </div>
      ) : (
        <div
          className={`font-satoshi py-[26px] px-[61.5px] rounded-[25px] ${
            isWhite ? "bg-white" : "bg-[#2702C2]"
          } text-[28px] leading-[100%] tracking-normal ${
            isWhite ? "text-[#3E45FB]" : "text-[#F2FFFF]"
          } font-black ${className}`}
        >
          {btnText}
        </div>
      )}
    </>
  );
};

export default Button;
