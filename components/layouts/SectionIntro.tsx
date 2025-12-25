import Button from "../ui/Button";

const SectionIntro = ({
  headingStyle,
  textStyle,
  buttonBlockStyle,
}: {
  headingStyle?: string;
  textStyle?: string;
  buttonBlockStyle?: string;
}) => {
  return (
    <div>
      <h1
        className={`font-varien text-[#F2FFFF] text-[110px] leading-[100%] tracking-[-3%] font-normal mb-8 max-w-[700px] ${headingStyle}`}
      >
        Speak, Don’t Type
      </h1>
      <p
        className={`font-medium text-[40px] leading-[41px] tracking-[-3%] text-[#F2FFFF] mb-[45px] ${textStyle}`}
      >
        100% private AI voice-to-text transcription, everything on-device.
        Perfect for students, pros & accessibility.
      </p>
      <div className={`${buttonBlockStyle}`}>
        <Button btnText="Start for free" isWhite className={`w-fit`} />
      </div>
    </div>
  );
};

export default SectionIntro;
