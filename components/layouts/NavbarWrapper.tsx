"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  const dynamicColors = [
    {
      bgColor: "bg-[#F0FEFF]",
      textColor: "text-black",
      textHoverColor: "text-[var(--blueBg)]",
      isBlueButton: true,
      isWhiteLogo: false,
    },
    {
      bgColor: "bg-white",
      textColor: "text-black",
      textHoverColor: "text-[var(--blueBg)]",
      isBlueButton: true,
      isWhiteLogo: false,
    },
    {
      bgColor: "bg-[#3E45FB]",
      textColor: "text-white",
      textHoverColor: "text-white",
      isWhiteButton: true,
      isWhiteLogo: true,
    },
    {
      bgColor: "bg-[#F0FEFF]",
      textColor: "text-black",
      textHoverColor: "text-[var(--blueBg)]",
      isBlueButton: true,
      isWhiteLogo: false,
    },
    {
      bgColor: "bg-black",
      textColor: "text-white",
      textHoverColor: "text-white",
      isWhiteButton: true,
      isWhiteLogo: true,
    },
    {
      bgColor: "bg-white",
      textColor: "text-black",
      textHoverColor: "text-[var(--blueBg)]",
      isBlueButton: true,
      isWhiteLogo: false,
    },
  ];

  let navbarProps = dynamicColors[0];

  switch (pathname) {
    case "/":
      navbarProps = dynamicColors[0];
      break;
    case "/features":
      navbarProps = dynamicColors[1];
      break;
    case "/pricing":
      navbarProps = dynamicColors[2];
      break;
    case "/faq":
      navbarProps = dynamicColors[3];
      break;
    case "/privacy":
      navbarProps = dynamicColors[4];
      break;
    case "/about":
      navbarProps = dynamicColors[5];
      break;
    default:
      navbarProps = dynamicColors[0];
  }

  return (
    <Navbar
      logoColor={navbarProps.textColor}
      textColor={navbarProps.textColor}
      bgColor={navbarProps.bgColor}
      textHoverColor={navbarProps.textHoverColor}
      isBlueButton={navbarProps.isBlueButton}
      isWhiteButton={navbarProps.isWhiteButton || false}
      isWhiteLogo={navbarProps.isWhiteLogo}
    />
  );
};

export default NavbarWrapper;
