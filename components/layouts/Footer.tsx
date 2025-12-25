import { footerNavItems, socialMediaLinks } from "@/contents/globalData";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Image from "next/image";
import Link from "next/link";

// type IconLike = any;

// function RenderIcon({ icon }: { icon: IconLike }) {
//   if (!icon) return null;
//   if (typeof icon === "function") {
//     const IconComp = icon as any;
//     return <IconComp />;
//   }
//   if (typeof icon === "object" && "src" in icon) {
//     return <Image src={icon} alt="" width={24} height={24} />;
//   }
//   return <img src={String(icon)} alt="" width={24} height={24} />;
// }

const Footer = ({ bgColor }: { bgColor: string }) => {
  return (
    <div className="pb-8 px-8">
      <div
        className={`pr-[102px] pl-[125px] pt-[110px] pb-[93px] rounded-[40px] ${bgColor}`}
      >
        <div className="flex justify-between items-start mb-[70px]">
          {footerNavItems.map((section) => (
            <div key={section.heading} className="">
              <h3 className="font-varien font-normal text-[64px] leading-[100%] tracking-[-3%] text-white mb-[38px]">
                {section.heading}
              </h3>
              <ul>
                {section.navList.map((item) => (
                  <li key={item.label} className="mb-2 flex items-center gap-4 mb-3">
                    <div className="bg-white size-2 rounded-full"></div>
                    <Link
                      href={item.href}
                      className="font-bold text-[28px] leading-[100%] tracking-normal text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-30">
          <Logo isWhite />
          <Button btnText="Start for free" isWhite />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-satoshi font-medium text-[32px] leading-[46px] tracking-[-6%] text-white">
            © {new Date().getFullYear()} Notely Voice. All rights reserved.
          </p>
          <div className="flex gap-24">
            {socialMediaLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline mr-4"
              >
                {/* <RenderIcon icon={social.icon} /> */}
                <Image src={social.icon} alt="" width={60} height={60} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
