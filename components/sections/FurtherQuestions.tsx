"use client";

import Button from "../ui/Button";

const FurtherQuestions = () => {
  return (
    <div className="px-4 sm:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-black rounded-[20px] sm:rounded-[40px] px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
        <h2 className="font-varien text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
          STILL HAVE QUESTIONS?
        </h2>
        
        <p className="text-white text-base sm:text-lg lg:text-xl max-w-2xl opacity-90">
          Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
        </p>

        <Button
          isRounded
          btnText="Contact Support"
          onClick={() => window.location.href = 'mailto:support@notely.com'}
        />
      </div>
    </div>
  );
};

export default FurtherQuestions;