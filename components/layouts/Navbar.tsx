import { navbarItems } from "@/contents/globalData";
import Logo from "../ui/Logo";
import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 py-4 flex items-center justify-between px-8 z-50 bg-[var(--white_bg)]">
      <div className="flex items-center justify-between w-full wrapper mx-auto">
        <Logo className="ml-9" />
        <div className="flex items-center gap-9.25">
          {navbarItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-satoshi font-bold text-lg leading-[100%] tracking-normal text-black hover:text-[var(--blueBg)] focus:text-[var(--blueBg)]">
              {item.label}
            </Link>
          ))}
        </div>
        <Button btnText="Start for free" />
      </div>
    </div>
  );
};

export default Navbar;
