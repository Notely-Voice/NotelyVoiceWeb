import { footerNavItems, socialMediaLinks } from "@/contents/globalData";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ bgColor }: { bgColor: string }) => {
  return (
    <div className="lg:pb-8 px-6 xl:px-8 mt-32">
      <div
        className={`py-16 px-10 lg:px-16 xl:px-28 wrapper mx-auto rounded-4xl xl:rounded-[40px] ${bgColor}`}
      >
        <div className="flex justify-between items-start gap-6 mb-10">
          {footerNavItems.map((section) => (
            <div key={section.heading}>
              <h3 className="font-varien font-normal text-[32px] lg:text-[40px] xl:text-5xl leading-[100%] tracking-[-3%] text-white mb-4 xl:mb-7">
                {section.heading}
              </h3>
              <ul>
                {section.navList.map((item) => (
                  <li key={item.label} className="mb-2 flex items-center gap-4 mb-3">
                    <Link
                      href={item.href}
                      className="text-base lg:text-lg xl:text-xl leading-[100%] tracking-normal text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-12">
          <Logo isWhite />
          <Button btnText="Start for free" isWhite />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-satoshi font-medium text-lg lg:text-xl lg:leading-[100%] xl:text-2xl xl:leading-[46px] tracking-[-6%] text-white">
            © {new Date().getFullYear()} Notely Voice. All rights reserved.
          </p>
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            {socialMediaLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                // target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline mr-4"
              >
                <Image src={social.icon} alt="social icon" width={social.width} height={social.height} className={`${i === 1 ? "w-5 lg:w-9" :"w-6 lg:w-10"}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
