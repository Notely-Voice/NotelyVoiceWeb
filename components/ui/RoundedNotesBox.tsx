'use client';

import {icons} from "@/lib"
import Image from "next/image"
import {useState} from "react"

const RoundedNotesBox = ({className}: { className?: string }) => {
  const [copied, setCopied] = useState(false);

  const noteText = "Quickly write down ideas, reminders, or thoughts. Keep everything in one place with a simple, distraction-free note-taking experience.";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(noteText);
      setCopied(true);
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div
      className={`border-4 border-white border-dashed rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-black py-4 sm:py-10 xl:py-14 px-6 sm:px-10 xl:px-16 min-h-75 flex flex-col justify-between items-start sm:min-w-[320px] xl:min-w-90 max-w-115 ${className}`}>
      <div className="w-full flex justify-between items-center mb-4">
        <p className="font-medium text-2xl sm:text-3xl tracking-[-6%] text-[#F0FEFE]">Note</p>

        <div className="flex items-center justify-between gap-2">

        <button
          onClick={handleCopy}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Copy note"
          title={copied ? "Copied!" : "Copy note"}
        >
          <Image src={icons.copy} alt="copy icon" className="w-5 sm:w-8 xl:w-10 ml-12"/>
        </button>


        <Image src={icons.share} alt="share icon" className="w-5 sm:w-8 xl:w-10 ml-10"/>
        </div>

      </div>

      <p
        className="text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl text-[#F0FEFF] md:max-w-150 lg:max-w-75 xl:max-w-90 sm:py-4">
        {noteText}
      </p>

      <div className="w-full flex justify-between items-center mt-4 sm:mt-16 lg:mt-12 xl:mt-20">
        <p className="font-medium text-2xl sm:text-3xl tracking-[-6%] text-[#F0FEFE]">Aa</p>

        <div className="flex items-center justify-between gap-3 sm:gap-5">

        <Image src={icons.list_white} alt="list icon" className="w-5 sm:w-8"/>

        <Image src={icons.star_white} alt="star icon" className="w-5 sm:w-6"/>

        <Image
          src={icons.delete_white}
          alt="delete icon"
          className="w-5 sm:w-6"
        />
        </div>


        <Image src={icons.microphone_rounded} alt="microphone icon" className="w-8 sm:w-10"/>
      </div>
    </div>
  )
}

export default RoundedNotesBox