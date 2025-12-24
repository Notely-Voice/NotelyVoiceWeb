import Button from "../ui/Button";
import Logo from "../ui/Logo";

const Footer = ({ bgColor }: { bgColor: string }) => {
  return (
    <div className="pb-8 px-8">
      <div
        className={`pr-[102px] pl-[125px] pt-[110px] pb-[93px] rounded-[40px] ${bgColor}`}
      >
        <div>
          
        </div>
        <div className="flex items-center justify-between mb-30">
          <Logo isWhite />
          <Button btnText="Start for free" isWhite />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
