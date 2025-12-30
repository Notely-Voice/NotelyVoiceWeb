"use client";

import { useState, useEffect } from "react";

const HomeTextBox = () => {
  const [hasListed, setHasListed] = useState(false);
  const [hasFaded, setHasFaded] = useState(false);

  // After first animation cycle (fadeInDown), trigger fadeOut
  useEffect(() => {
    if (!hasListed && !hasFaded) {
      const timer = setTimeout(() => {
        setHasListed(true);
      }, 2000); // Total duration of the fadeInDown cycle
      return () => clearTimeout(timer);
    }
  }, [hasListed, hasFaded]);

  // After fadeOut completes, reset to start next cycle
  useEffect(() => {
    if (hasListed && !hasFaded) {
      const timer = setTimeout(() => {
        setHasFaded(true);
      }, 500); // Duration of the fadeOut animation
      return () => clearTimeout(timer);
    }
  }, [hasListed, hasFaded]);

  // Reset both states to restart the cycle
  useEffect(() => {
    if (hasFaded) {
      const timer = setTimeout(() => {
        setHasListed(false);
        setHasFaded(false);
      }, 0); // Minimal delay before restarting
      return () => clearTimeout(timer);
    }
  }, [hasFaded]);

  const lines = [
    "Key areas of space discovery,",
    "exoplanets, galactic seas and ",
    "the universe, spacecraft and ",
    "missions, black holes.",
  ];
  const lineStagger = 0.3; // seconds between lines
  const lineDuration = 1; // line entry duration
  const isInFadeOutPhase = hasListed && !hasFaded;

  return (
    <div className="border-[5px] border-black h-max min-w-max bg-[#F0FEFF] py-2.5 xl:py-4 px-3 xl:px-5 rounded-[20px] overflow-hidden">
      <div className="flex flex-col xl:gap-1">
        {lines.map((text, idx) => (
          <p
            key={idx}
            className={`animate__animated font-medium text-sm lg:text-xs xl:text-base leading-[18px] tracking-normal text-[#3E45FB] ${
              isInFadeOutPhase ? "animate__fadeOut" : "animate__fadeInDown"
            }`}
            style={{
              animationDelay: isInFadeOutPhase ? "0s" : `${idx * lineStagger}s`,
              animationDuration: isInFadeOutPhase ? "1s" : `${lineDuration}s`,
              animationIterationCount: "1",
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HomeTextBox;
