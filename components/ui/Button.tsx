"use client";

import { icons } from "@/lib";
import Image from "next/image";
import { useState } from "react";
import { useDownloadModal } from "@/contexts/DownloadModalContext";

const Button = ({
  isRounded,
  isFlashy,
  hasThickBorder,
  isDownload,
  isWhite,
  isBlackText,
  btnText,
  className,
  downloadCta,
  downloadStore,
  storeIcon,
  onClick,
  isActive,
}: {
  isRounded?: boolean;
  isFlashy?: boolean;
  hasThickBorder?: boolean;
  isDownload?: boolean;
  isWhite?: boolean;
  isBlackText?: boolean;
  btnText?: string;
  className?: string;
  downloadCta?: string;
  downloadStore?: string;
  storeIcon?: string;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { openModal } = useDownloadModal();

  const showGlow = isHovering || isFocused || isActive;

  return (
    <>
      {isRounded ? (
        <button
          onClick={onClick}
          className={`font-satoshi py-2.5 px-3.5 lg:py-4 lg:px-6 rounded-full ${
            isWhite
              ? "bg-white hover:bg-[#2702C2] focus:bg-[#2702C2] border hover:border border-transparent hover:border-white focus:border-white"
              : "bg-[#2702C2] hover:bg-white focus:bg-white border hover:border border-transparent hover:border-[#3E45FB] focus:border-[#3E45FB]"
          } text-sm lg:text-base leading-[100%] tracking-normal ${
            isWhite
              ? "text-black hover:text-white focus:text-white"
              : "text-[#F2FFFF] hover:text-black focus:text-black"
          } font-black cursor-pointer ${className}`}
        >
          {btnText}
        </button>
      ) : isFlashy ? (
        <div
          className="relative inline-block"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Blue glow background that appears on hover or focus */}
          {showGlow && (
            <div
              className="absolute rounded-full pointer-events-none transition-all duration-300"
              style={{
                background: "#3E45FB",
                top: "-4px",
                left: "-4px",
                right: "-4px",
                bottom: "-9px",
                zIndex: 1,
              }}
            />
          )}
          <button
            onClick={onClick}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`z-10 relative font-satoshi py-2.5 px-3.5 lg:py-4 lg:px-6 rounded-full bg-black border border-transparent text-sm lg:text-base leading-[100%] tracking-normal text-[#F2FFFF] font-black cursor-pointer transition-all duration-300 ${className}`}
          >
            {btnText}
          </button>
        </div>
      ) : isDownload ? (
        <button
          onClick={onClick}
          className={`flex items-center justify-center py-2 pl-3.5 pr-4 sm:py-2.5 sm:pl-6 sm:pr-10 bg-[#F0F8FF] rounded-full border-[3px] hover:border-[#3E45FB] focus:border-[#3E45FB] cursor-pointer ${className}`}
        >
          <Image
            src={storeIcon || icons.Playstore}
            alt="icon"
            className="w-4 sm:w-6 xl:w-8"
          />
          <div className="ml-2 sm:ml-4.5 text-[#3E45FB]">
            <p className="text-[10px] sm:text-xs xl:text-sm text-start font-semibold whitespace-nowrap">
              {downloadCta}
            </p>
            <h3 className="font-bold text-sm sm:text-lg xl:text-xl text-start leading-[100%] whitespace-nowrap">
              {downloadStore}
            </h3>
          </div>
        </button>
      ) : hasThickBorder ? (
        <button
          onClick={onClick}
          className={
            "font-varien font-normal uppercase py-2.5 px-3 sm:py-3.5 sm:px-6 border-4 sm:border-7 border-white rounded-full hover:bg-[var(--blueBg)] focus:bg-[var(--blueBg)] text-[10px] sm:text-lg lg:text-2xl xl:text-[28px] text-white leading-[100%] tracking-[-3%] cursor-pointer " +
            className
          }
        >
          {btnText}
        </button>
      ) : (
        <button
          onClick={openModal}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`font-satoshi py-2.5 px-2.5 sm:py-3 sm:px-3.5 lg:py-4 lg:px-6 rounded-full ${
            isWhite
              ? "bg-white hover:bg-[#2702C2] focus:bg-[#2702C2] border hover:border hover:border-white focus:border-white"
              : isBlackText
              ? "bg-white hover:bg-transparent border hover:border-white focus:border-white"  
              : "bg-[#2702C2] hover:bg-white focus:bg-white border hover:border hover:border-[#3E45FB] focus:border-[#3E45FB]"
          } text-xs sm:text-sm lg:text-base leading-[100%] tracking-normal ${
            isWhite
              ? "text-[#3E45FB] hover:text-white focus:text-white"
              : isBlackText
              ? "text-black hover:text-white focus:text-white"
              : "text-[#F2FFFF] hover:text-[#3E45FB] focus:text-[#3E45FB]"
          } font-black cursor-pointer flex items-center justify-center gap-2 sm:gap-3 ${className}`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Image
              src={
                isWhite 
                  ? ((isHovering || isFocused) ? icons.apple_white : icons.apple)
                  : isBlackText
                    ? ((isHovering || isFocused) ? icons.apple_white : icons.apple_black)
                    : ((isHovering || isFocused) ? icons.apple : icons.apple_white)
              }
              alt="Apple"
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            />
            <div className={`w-px h-4 sm:h-5 lg:h-6 ${
              isWhite 
                ? ((isHovering || isFocused) ? "bg-white" : "bg-[#3E45FB]")
                : isBlackText
                  ? ((isHovering || isFocused) ? "bg-white" : "bg-black")
                  : ((isHovering || isFocused) ? "bg-[#3E45FB]" : "bg-white")
            }`} />
            <Image
              src={
                isWhite 
                  ? ((isHovering || isFocused) ? icons.playstore_white : icons.playstore_blue)
                  : isBlackText
                    ? ((isHovering || isFocused) ? icons.playstore_white : icons.playstore_black)
                    : ((isHovering || isFocused) ? icons.playstore_blue : icons.playstore_white)
              }
              alt="Play Store"
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            />
          </div>
          {btnText}
        </button>
      )}
    </>
  );
};

export default Button;
