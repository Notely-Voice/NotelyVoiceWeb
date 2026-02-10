"use client";

import { icons } from "@/lib";
import Image from "next/image";
import { useEffect } from "react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAppStoreClick = () => {
    window.open(
      "https://apps.apple.com/us/app/notely-voice-ai-voice-to-text/id6745835691",
      "_blank"
    );
  };

  const handlePlayStoreClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.module.notelycompose.android",
      "_blank"
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md w-full relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <Image
            src={icons.X_white}
            alt="Close"
            className="w-4 h-4 brightness-0"
          />
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <h2 className="font-satoshi font-black text-2xl sm:text-3xl lg:text-4xl text-[#2702C2] mb-3">
            Download Notely Voice
          </h2>
          <p className="font-satoshi text-sm sm:text-base text-gray-600 mb-8">
            Choose your platform to get started
          </p>

          <div className="space-y-4">
            {/* App Store Button */}
            <button
              onClick={handleAppStoreClick}
              className="w-full flex items-center justify-center gap-3 sm:gap-4 py-2.5 sm:py-4 px-4 sm:px-6 bg-[#2702C2] hover:bg-[#1f0291] focus:bg-[#1f0291] rounded-full transition-colors group"
            >
              <Image
                src={icons.apple_white}
                alt="Apple"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <span className="font-satoshi font-bold text-sm sm:text-lg text-white">
                Download from App Store
              </span>
            </button>

            {/* Play Store Button */}
            <button
              onClick={handlePlayStoreClick}
              className="w-full flex items-center justify-center gap-3 sm:gap-4 py-2.5 sm:py-4 px-4 sm:px-6 bg-[#2702C2] hover:bg-[#1f0291] focus:bg-[#1f0291] rounded-full transition-colors group"
            >
              <Image
                src={icons.Playstore}
                alt="Play Store"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <span className="font-satoshi font-bold text-sm sm:text-lg text-white">
                Download from Play Store
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
