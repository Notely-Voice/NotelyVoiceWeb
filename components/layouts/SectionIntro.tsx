import { icons } from "@/lib";
import Button from "../ui/Button";

const SectionIntro = ({
  heading,
  text,
  headingStyle,
  textStyle,
  buttonBlockStyle,
  isDownload,
  isBtnWhite,
  isBtnBlue,
  btnText,
  className,
  bluetext,
}: {
  heading?: string;
  text?: string;
  headingStyle?: string;
  textStyle?: string;
  buttonBlockStyle?: string;
  isDownload?: boolean;
  isBtnWhite?: boolean;
  isBtnBlue?: boolean;
  btnText?: string;
  className?: string;
  bluetext?: string;
}) => {
  return (
    <div className={className}>
      <h1
        className={`font-varien text-[#F2FFFF] text-[90px] leading-[100%] tracking-[-3%] font-normal mb-8 max-w-[700px] ${headingStyle}`}
      >
        {bluetext && <span className="text-[#3E45FB]">{bluetext}</span>} {heading}
      </h1>
      <p
        className={`font-medium text-[36px] leading-[41px] tracking-[-3%] text-[#F2FFFF] mb-[45px] ${textStyle}`}
      >
        {text}
      </p>
      {isDownload ? (
        <div className={`${buttonBlockStyle}`}>
          <Button
            storeIcon={icons.Playstore}
            downloadCta="GET IT IN"
            downloadStore="Google Play"
            isWhite
            isDownload
            className={`w-fit`}
          />
          <Button
            storeIcon={icons.apple}
            downloadCta="Download on the"
            downloadStore="App Store"
            isWhite
            isDownload
            className={`w-fit`}
          />
        </div>
      ) : isBtnWhite ? (
        <div className={`${buttonBlockStyle}`}>
          <Button btnText={btnText} isWhite className={`w-fit`} />
        </div>
      ) : isBtnBlue ? (
        <div className={`${buttonBlockStyle}`}>
          <Button btnText={btnText} isWhite className={`w-fit`} />
        </div>
      ) : null}
    </div>
  );
};

export default SectionIntro;
