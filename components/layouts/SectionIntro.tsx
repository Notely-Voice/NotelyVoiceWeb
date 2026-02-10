'use client'

import { icons } from "@/lib";
import Button from "../ui/Button";
import {useDownloadModal} from "@/contexts/DownloadModalContext";
import {useRouter} from "next/navigation";

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
  const { openModal } = useDownloadModal();
  const router = useRouter()
  return (
    <div className={className}>
      <h1
        className={`font-varien text-[#F2FFFF] xl:text-[80px] leading-[100%] tracking-[-3%] font-normal mb-8 max-w-[500px] ${headingStyle}`}
      >
        {bluetext && <span className="text-[#3E45FB]">{bluetext}</span>} {heading}
      </h1>
      <p
        className={`font-medium xl:text-3xl xl:leading-[36px] tracking-[-3%] text-[#F2FFFF] mb-[45px] max-w-[509px] ${textStyle}`}
      >
        {text}
      </p>
      {isDownload ? (
        <div className={`${buttonBlockStyle}`}>
          <Button
            storeIcon={icons.Playstore}
            downloadCta="Get It On"
            downloadStore="Google Play"
            isWhite
            isDownload
            className={`w-full sm:w-fit`}
            onClick={()  =>  router.push('https://play.google.com/store/apps/details?id=com.module.notelycompose.android')}
          />
          <Button
            storeIcon={icons.apple}
            downloadCta="Download on the"
            downloadStore="App Store"
            isWhite
            isDownload
            className={`w-full sm:w-fit`}
            onClick={()  =>  router.push('https://apps.apple.com/us/app/notely-voice-ai-voice-to-text/id6745835691')}
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
