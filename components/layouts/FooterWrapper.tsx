"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
  const pathname = usePathname();

  const dynamicColors = [
    {
      bgColor: "bg-[#3E45FB]",
      textColor: "text-white",
      isWhiteButton: true,
    },
    {
      bgColor: "bg-black",
      textColor: "text-white",
      isBlackText: true, 
    },
    {
      bgColor: "bg-white",
      textColor: "text-[#3E45FB]",
      isBlueButton: true,
      isBlueLogo: true,
      isSocialBlue: true,
    },
    {
      bgColor: "bg-black",
      textColor: "text-white",
      isBlackText: true,
    },
    {
      bgColor: "bg-[#F0FEFF]",
      textColor: "text-[#3E45FB]",
      isBlueText: true,
      isBlueLogo: true,
      isSocialBlue: true,
    },
    {
      bgColor: "bg-[#3E45FB]",
      textColor: "text-white",
      isWhiteButton: true,
    },
  ];

  let footerProps = dynamicColors[0];

  switch (pathname) {
    case "/":
      footerProps = dynamicColors[0];
      break;
    case "/features":
      footerProps = dynamicColors[1];
      break;
    case "/pricing":
      footerProps = dynamicColors[2];
      break;
    case "/faq":
      footerProps = dynamicColors[3];
      break;
    case "/privacy":
      footerProps = dynamicColors[4];
      break;
    case "/about":
      footerProps = dynamicColors[5];
      break;
    default:
      footerProps = dynamicColors[0];
  }

  return (
    <Footer
      textColor={footerProps.textColor}
      bgColor={footerProps.bgColor}
      isBlackText={footerProps.isBlackText}
      isBlueButton={footerProps.isBlueButton}
      isWhiteButton={footerProps.isWhiteButton}
      isBlueLogo={footerProps.isBlueLogo}
      isSocialBlue={footerProps.isSocialBlue}
    />
  );
};

export default FooterWrapper;
