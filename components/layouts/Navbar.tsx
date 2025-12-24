import { navbarItems } from "@/contents/globalData";
import Logo from "../ui/Logo";
import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="h-45.5 flex items-center justify-between shadow-md">
      <div className="wrapper flex items-center justify-between w-full">
        <Logo className="ml-[36px]" />

        <div className="flex items-center gap-9.25">
          {navbarItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-satoshi font-bold text-[28px] leading-[100%] tracking-normal text-black">
              {item.label}
            </Link>
          ))}
        </div>
        <Button btnText="Start for free" isRounded isWhite />
      </div>
    </div>
  );
};

export default Navbar;
