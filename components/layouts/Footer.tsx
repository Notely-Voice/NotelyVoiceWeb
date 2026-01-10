import {
  blueSocialMediaLinks,
  footerNavItems,
  socialMediaLinks,
} from "@/contents/globalData";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = ({
  bgColor,
  textColor = "text-white",
  isBlueButton,
  isWhiteButton,
  isBlackText,
  isBlueLogo,
  isSocialBlue,
  wrapperBgColor,
}: {
  bgColor?: string;
  textColor?: string;
  isBlueButton?: boolean;
  isWhiteButton?: boolean;
  isBlackText?: boolean;
  isBlueLogo?: boolean;
  isSocialBlue?: boolean;
  wrapperBgColor?: string;
}) => {
  // add SSR-safe smooth scroll-to-top handler
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    // make this container relative so the absolute button is positioned inside the footer
    <div className={`pb-8 px-4 sm:px-6 xl:px-8 pt-10 md:pt-20 lg:pt-32 ${wrapperBgColor}`}>
      <div
        className={`py-16 px-6 md:px-10 lg:px-16 xl:px-28 wrapper mx-auto rounded-4xl xl:rounded-[40px] ${bgColor}`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
          {footerNavItems.map((section) => (
            <div key={section.heading}>
              <h3
                className={`font-varien font-normal text-3xl md:text-[32px] lg:text-[40px] xl:text-5xl leading-[100%] tracking-[-3%] ${textColor} mb-4 xl:mb-7`}
              >
                {section.heading}
              </h3>
              <ul>
                {section.navList.map((item) => (
                  <li key={item.label} className="mb-2 flex items-center gap-4">
                    <Link
                      href={item.href}
                      className={`text-sm md:text-base lg:text-lg xl:text-xl leading-[100%] tracking-normal ${textColor} hover:underline`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-5">
          {isBlueLogo ? <Logo isBlue /> : <Logo isWhite />}
          {isBlueButton ? (
            <Button btnText="Start for free" />
          ) : isBlackText ? (
            <Button btnText="Start for free" isBlackText />
          ) : isWhiteButton ? (
            <Button btnText="Start for free" isWhite />
          ) : (
            <Button btnText="Start for free" isWhite />
          )}
        </div>
        <div className="flex sm:flex-row flex-col-reverse justify-between sm:items-center gap-4">
          <p
            className={`font-satoshi font-medium text-lg lg:text-xl lg:leading-[100%] xl:text-2xl xl:leading-[46px] tracking-[-6%] ${textColor}`}
          >
            © {new Date().getFullYear()} Notely Voice. All rights reserved.
          </p>
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            {isSocialBlue
              ? blueSocialMediaLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className={`${textColor} hover:underline mr-4`}
                  >
                    <Image
                      src={social.icon}
                      alt="social icon"
                      width={social.width}
                      height={social.height}
                      className={`${i === 1 ? "w-5 lg:w-9" : "w-6 lg:w-10"}`}
                    />
                  </a>
                ))
              : socialMediaLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className={`${textColor} hover:underline mr-4`}
                  >
                    <Image
                      src={social.icon}
                      alt="social icon"
                      width={social.width}
                      height={social.height}
                      className={`${i === 1 ? "w-5 lg:w-9" : "w-6 lg:w-10"}`}
                    />
                  </a>
                ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button (bottom-left of footer) */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={`fixed right-2 bottom-4 flex items-center justify-center border border-black ${bgColor} ${textColor} rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transform transition-all duration-50 animate-bounce z-999`}
        style={{ animationDuration: "1.6s" }}
      >
        {/* simple up arrow svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Footer;
