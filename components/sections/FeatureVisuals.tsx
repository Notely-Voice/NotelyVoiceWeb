"use client";

import {
  AudioLines,
  CheckCheck,
  Cloud,
  Delete,
  Languages,
  Undo2,
} from "lucide-react";
import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { homeAssets } from "@/lib/newHomeAssets";
import {
  CardPhone,
  FloatingTile,
  Rings,
  ShowcaseCard,
} from "../ui/ShowcaseCard";

const { apps, screens } = homeAssets;

export const MeetingsVisual = () => (
  <ShowcaseCard
    xlHeightClass="xl:h-[418px]"
    xlWidthClass="xl:w-[801px]"
    bgClass="bg-[#F1F9F6]"
    label="A meeting transcript on a phone, with Private AI and Advanced AI transcription options"
  >
    <FloatingTile src={apps.blueShieldLogo} alt="" x={19.9} y={19.4} index={0} />
    <FloatingTile x={78.8} y={31.3} index={1}>
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-black sm:h-[40px] sm:w-[40px] lg:h-[44px] lg:w-[44px] xl:h-[38px] xl:w-[38px]">
        <svg aria-hidden width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="nv-cloud-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#6CB3F6" />
              <stop offset="1" stopColor="#7763E4" />
            </linearGradient>
          </defs>
        </svg>
        <Cloud
          className="h-[66%] w-[66%]"
          fill="url(#nv-cloud-grad)"
          stroke="url(#nv-cloud-grad)"
          strokeWidth={1.5}
        />
      </span>
    </FloatingTile>

    <div className="absolute left-1/2 -bottom-[1%] z-10 w-[44%] min-w-[150px] max-w-[307px] -translate-x-1/2">
      <Image
        src={screens.meetingTranscriptScreen}
        alt="Meeting transcript screen"
        className="h-auto w-full"
        priority={false}
      />
    </div>

    <div className="absolute left-[24%] top-[50%] z-20 -translate-x-1/2 -translate-y-1/2 sm:left-[27%] xl:left-[25.97%]">
      <div  style={{ "--float-delay": "-1.4s" } as CSSProperties}>
        <Image
          src={screens.privateAi}
          alt="Private AI transcription"
          className="h-auto w-[62px] sm:w-[78px] lg:w-[88px] xl:w-[98px]"
        />
      </div>
    </div>
    <div className="absolute left-[75%] top-[77.5%] z-20 -translate-x-1/2 -translate-y-1/2 sm:left-[72%] xl:left-[72.66%]">
      <div style={{ "--float-delay": "-3s" } as CSSProperties}>
        <Image
          src={screens.advancedAi}
          alt="Advanced AI transcription"
          className="h-auto w-[62px] sm:w-[78px] lg:w-[88px] xl:w-[98px]"
        />
      </div>
    </div>
  </ShowcaseCard>
);


const TILE_XL = "xl:w-[59.5px] xl:rounded-[14px] xl:drop-shadow-none";

export const KeyboardVisual = () => (
  <ShowcaseCard
    xlHeightClass="xl:h-[418px]"
    xlWidthClass="xl:w-[801px]"
    bgClass="bg-[#F1F9F6]"
    label="Notely Voice keyboard dictating a message into WhatsApp, surrounded by messaging app icons"
  >
    <Rings exact />
    <FloatingTile src={apps.telegramLogo} x={20.72} y={19.62} index={0} xlClass={TILE_XL} />
    <FloatingTile src={apps.gmailLogo} x={79.28} y={19.62} index={1} xlClass={TILE_XL} />
    <FloatingTile src={apps.slackLogo} x={13.8} y={50.24} index={2} xlClass={TILE_XL} />
    <FloatingTile src={apps.imessageLogo} x={86.27} y={50.24} index={3} xlClass={TILE_XL} />
    <FloatingTile src={apps.whatsappLogo} x={15.48} y={81.82} index={4} xlClass={TILE_XL} />
    <FloatingTile src={apps.xLogoBlack} x={84.52} y={81.82} index={5} xlClass={TILE_XL} />

    <CardPhone
      widthClass="w-[44%] min-w-[150px] max-w-[307px]"
      bgClass="bg-[#F3FEFF]"
      radiusClass="rounded-t-[9.8cqw]"
    >
      <div className="flex h-[129.3cqw] flex-col gap-[5.2cqw] px-[6cqw] pt-[6.25cqw]">
        {/* Received bubble */}
        <div className="relative h-[24.75cqw] shrink-0 rounded-[4.9cqw] bg-[#1F4D37] pl-[5.2cqw] pt-[4.07cqw] text-white">
          <p className="font-inter whitespace-nowrap text-[3.29cqw] leading-[3.9cqw]">
            industry&apos;s standard dummy text ever since
            <br />
            the 1500s, when an unknown printer took a
            <br />
            galley of type and scrambled it to make a
            <br />
            type specimen book.unchanged.
          </p>
          <p className="absolute right-[4.9cqw] top-[16.9cqw] flex items-center gap-[1.5cqw] font-inter text-[3.37cqw] leading-[4.2cqw] text-[#87A79A]">
            12.10 pm
            <CheckCheck className="h-[5.6cqw] w-[5.6cqw] text-[#56BDE6]" strokeWidth={2.2} />
          </p>
        </div>

        {/* Input */}
        <div className="relative h-[20.8cqw] shrink-0 overflow-hidden rounded-[4.56cqw] border-[0.33cqw] border-[#7B86EA] bg-white">
          <div className="h-[10.4cqw] bg-[#FBFBFF] pl-[3.9cqw] pt-[2.77cqw]">
            <span className="flex h-[6.2cqw] w-fit items-center gap-[2.1cqw] rounded-[1.6cqw] bg-white pl-[1cqw] pr-[1.2cqw]">
              <span className="h-[4.2cqw] w-[4.2cqw] overflow-hidden rounded-[1cqw] bg-[#BFEBBA]">
                <Image
                  src={apps.whatsappLogo}
                  alt=""
                  className="h-full w-full mix-blend-multiply"
                />
              </span>
              <span className="font-inter text-[3.58cqw] font-medium leading-none text-black">
                WHatsapp
              </span>
            </span>
          </div>
          <span className="absolute left-[4.2cqw] top-[13cqw] block h-[4.9cqw] w-[0.65cqw] bg-[#3773F6]" />
        </div>

        {/* Notely voice recorder */}
        <div className="relative h-[57.3cqw] shrink-0 rounded-[11.4cqw] bg-black text-white mt-[1.3cqw]">
          <span className="absolute left-[7.8cqw] top-[8.3cqw] font-inter text-[4.07cqw] font-medium leading-[5.2cqw]">
            Notely Talk
          </span>
          <span className="absolute right-[9.8cqw] top-[9.1cqw] h-[8.14cqw] w-[16.6cqw] rounded-full bg-white">
            <span className="absolute left-[0.98cqw] top-[0.8cqw] flex h-[6.5cqw] w-[6.5cqw] items-center justify-center rounded-full bg-black">
              <AudioLines className="h-[3.9cqw] w-[3.9cqw] text-white" strokeWidth={2.4} />
            </span>
            <Languages className="absolute left-[10.3cqw] top-[2.1cqw] h-[3.9cqw] w-[3.9cqw] text-black" strokeWidth={2} />
          </span>
          <p className="absolute inset-x-0 top-[20.2cqw] text-center font-inter text-[2.44cqw] font-medium leading-[3.26cqw]">
            Tap to speak
          </p>
          <svg
            aria-hidden
            viewBox="0 0 19.5 12"
            className="absolute left-[9.7cqw] top-[33.2cqw] h-[3.9cqw] w-[6.35cqw]"
          >
            <path
              d="M0 6 L4.6 0.6 Q5 0 5.8 0 H17.5 Q19.5 0 19.5 2 V10 Q19.5 12 17.5 12 H5.8 Q5 12 4.6 11.4 Z"
              fill="white"
            />
            <path d="M9.6 3.9 L13.4 7.7 M13.4 3.9 L9.6 7.7" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="absolute left-1/2 top-[25.7cqw] flex h-[18.9cqw] w-[40.7cqw] -translate-x-1/2 items-center justify-center rounded-full bg-white">
            <svg aria-hidden viewBox="0 0 26 26" className="h-[8.14cqw] w-[8.14cqw]">
              <g stroke="black" strokeWidth="3.1" strokeLinecap="round">
                <path d="M2 18.3V7.7" />
                <path d="M7.5 22.5V3.5" />
                <path d="M13 24V2" />
                <path d="M18.5 21.5V4.5" />
                <path d="M24 17.5V8.5" />
              </g>
            </svg>
          </span>
          <Undo2
            className="absolute left-[69.5cqw] top-[32.2cqw] h-[5.9cqw] w-[5.9cqw] text-white"
            strokeWidth={2.2}
          />
        </div>
      </div>
    </CardPhone>
  </ShowcaseCard>
);

const SourceChip = ({ label, children, widthClass = "", }: { label: string; children: React.ReactNode; widthClass?: string; }) => (
  <span className={`flex h-[6.7cqw] ${widthClass} items-center gap-[1.47cqw] rounded-[3.26cqw] bg-white px-[3.42cqw] text-[3.26cqw] leading-none text-black`}>
    {children}
    <span>
    {label}
    </span>
  </span>
);

export const AskVisual = () => (
  <ShowcaseCard
    xlHeightClass="xl:h-[418px]"
    xlWidthClass="xl:w-[801px]"
    bgClass="bg-[#F1F9F6]"
    label="An AI assistant answering a question using Slack, Calendar and browser history, with ChatGPT, Gemini and Claude icons around it"
  >
    <Rings exact />
    <FloatingTile src={apps.geminiLogo} x={32} y={18.4} index={0} xlClass={TILE_XL} />
    <FloatingTile src={apps.chatgptLogo} x={77.03} y={23.7} index={1} xlClass={TILE_XL} />
    <FloatingTile src={apps.mcpLogo} x={17.73} y={54.07} index={2} xlClass={TILE_XL} />
    <FloatingTile src={apps.claudeLogoTile} x={81.9} y={59.57} index={3} xlClass={TILE_XL} />

    <CardPhone
      widthClass="top-[20.1%] w-[44%] min-w-[150px] max-w-[307px] xl:-ml-px"
      bgClass="bg-[#F3FEFF]"
      radiusClass="rounded-t-[9.8cqw]"
    >
      <div className="flex h-[140cqw] flex-col items-start pl-[6.83cqw] pt-[16.4cqw]">
        <p className="font-inter h-[17.9cqw] w-[86cqw] shrink-0 rounded-[4.56cqw] rounded-tr-none bg-black pl-[4.7cqw] pt-[3.75cqw] text-[3.29cqw] leading-[3.9cqw] text-white">
          Summarize what I did last week across my
          <br />
          Slack, Calendar, and browser history.
        </p>
        <p className="mt-[5.7cqw] text-[4.23cqw] leading-[5.2cqw] text-[#494747]">Sources</p>
        <div className="mt-[1.8cqw] flex gap-[3.42cqw]">
          <SourceChip label="Calendar" widthClass="w-[24.27cqw]">
            <Image src={apps.calendarLogo} alt="" className="-mx-[0.15cqw] h-[3.2cqw] w-[3.2cqw] max-w-none" />
          </SourceChip>
          <SourceChip label="Slack" widthClass="w-[18.4cqw]">
            <Image src={apps.slackLogo} alt="" className="-mx-[0.9cqw] h-[4.7cqw] w-[4.7cqw] max-w-none" />
          </SourceChip>
          <SourceChip label="Browser" widthClass="w-[21.3cqw]">
            <Image src={apps.chromeLogo} alt="" className="-ml-[0.7cqw] -mr-[0.55cqw] h-[3.3cqw] w-[3.3cqw] max-w-none" />
          </SourceChip>
        </div>
        <p className="mt-[3.9cqw] whitespace-nowrap text-[4.24cqw] leading-[5.86cqw] text-black">
          I went through last week&apos;s memories,
          <br />
          emails, and the web. Here&apos;s where
          <br />
          things stand:
        </p>
        <p className="mt-[1.6cqw] ml-[0.3cqw] whitespace-nowrap text-[4.24cqw] leading-[5.86cqw] text-black">
          Last week, you primarily focused on
          <br />
          finalizing the Q3 Product Launch.
          <br />
          According to your Slack activity, you
          <br />
          approved the final design assets with the
          <br />
          marketing team and resolved two critical
          <br />
          deployment blockers. Your calendar shows
        </p>
      </div>
    </CardPhone>
  </ShowcaseCard>
);


const GmailMIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg
    viewBox="10 14 40 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M19.6364 44.3573V29.4952L15.0831 25.2785L11 22.9385V41.7345C11 43.1857 12.1615 44.3573 13.591 44.3573H19.6364Z"
      fill="#4285F4"
    />
    <path
      d="M40.3633 44.3573H46.4087C47.8425 44.3573 48.9997 43.1813 48.9997 41.7345V22.9386L44.375 25.6188L40.3633 29.4952V44.3573Z"
      fill="#34A853"
    />
    <path
      d="M19.6352 29.4951L19.0156 23.6881L19.6352 18.1301L29.9988 25.9983L40.3624 18.1301L41.0555 23.388L40.3624 29.4951L29.9988 37.3633L19.6352 29.4951Z"
      fill="#EA4335"
    />
    <path
      d="M40.3633 18.1301V29.4951L48.9997 22.9384V19.4414C48.9997 16.1981 45.3422 14.3491 42.7816 16.2942L40.3633 18.1301Z"
      fill="#FBBC04"
    />
    <path
      d="M11 22.9384L14.972 25.9541L19.6364 29.4952V18.1302L17.218 16.2943C14.653 14.349 11 16.1981 11 19.4413V22.9384Z"
      fill="#C5221F"
    />
  </svg>
);

export const CreateVisual = () => (
  <ShowcaseCard label="A prompt asking Gmail to find a contract thread and reply, surrounded by productivity app icons">
    <Rings />
    <FloatingTile src={apps.slackLogo} x={14} y={24} index={0} />
    <FloatingTile src={apps.chatgptLogo} x={10} y={50} index={1} />
    <FloatingTile src={apps.notionLogo} x={14} y={86} index={2} />
    <FloatingTile src={apps.gmailLogo} x={86} y={24} index={3} highlighted />
    <FloatingTile src={apps.whatsappLogo} x={90} y={50} index={4} />
    <FloatingTile src={apps.telegramLogo} x={86} y={86} index={5} />

    {/* Phone */}
    <CardPhone
      borderClass="border-black bg-[#F0FEFF]"
      widthClass="w-[44%] min-w-[165px] max-w-[301px]"
    >
      <div className="h-[105cqw] sm:h-[115cqw] w-full" />
    </CardPhone>

    {/* Gmail prompt text block floating over the phone */}
    <div className="absolute left-1/2 top-[65%] md:top-[55%] z-20 w-[82%] sm:w-[84%] min-w-[260px] max-w-[424px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] border-[1.5px] border-[#BAC6FF] bg-white p-2.5 md:p-4 shadow-[0_12px_28px_rgba(62,69,251,0.08)]">
      <div className="inline-flex items-center gap-1.5 rounded-[7px] bg-[#F4F5F8] px-2.5 py-1">
        <GmailMIcon className="h-3 w-3.5 shrink-0" />
        <span className="text-[11px] font-medium text-black">Gmail</span>
      </div>
      <p className="mt-3 text-[10px] sm:text-[13px] font-normal leading-snug text-black whitespace-normal">
        Find the contract thread and reply with what we decided
      </p>
    </div>
  </ShowcaseCard>
);

/* -------------------------------------------------------------------------- */
/*  5. Daily personal synthesis                                                */
/* -------------------------------------------------------------------------- */

export const JournalsVisual = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const notionRef = useRef<HTMLDivElement>(null);
  const chatgptRef = useRef<HTMLDivElement>(null);
  const claudeRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState<Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }> | null>(null);

  useEffect(() => {
    const updateLines = () => {
      if (!cardRef.current || !phoneRef.current) return;
      const cardRect = cardRef.current.getBoundingClientRect();
      const phoneRect = phoneRef.current.getBoundingClientRect();

      const newLines = [];

      // 1. Notion -> Phone Left Edge
      if (notionRef.current) {
        const tileRect = notionRef.current.getBoundingClientRect();
        newLines.push({
          x1: tileRect.right - cardRect.left,
          y1: tileRect.top + tileRect.height / 2 - cardRect.top,
          x2: phoneRect.left - cardRect.left,
          y2: phoneRect.top + phoneRect.height * 0.32 - cardRect.top,
        });
      }

      // 2. ChatGPT -> Phone Top-Right Edge
      if (chatgptRef.current) {
        const tileRect = chatgptRef.current.getBoundingClientRect();
        newLines.push({
          x1: tileRect.left + tileRect.width * 0.18 - cardRect.left,
          y1: tileRect.bottom - tileRect.height * 0.12 - cardRect.top,
          x2: phoneRect.right - cardRect.left,
          y2: phoneRect.top + phoneRect.height * 0.12 - cardRect.top,
        });
      }

      // 3. Claude -> Phone Right Edge
      if (claudeRef.current) {
        const tileRect = claudeRef.current.getBoundingClientRect();
        newLines.push({
          x1: tileRect.left - cardRect.left,
          y1: tileRect.top + tileRect.height / 2 - cardRect.top,
          x2: phoneRect.right - cardRect.left,
          y2: phoneRect.top + phoneRect.height * 0.50 - cardRect.top,
        });
      }

      setLines(newLines);
    };

    updateLines();

    const ro = new ResizeObserver(updateLines);
    if (cardRef.current) ro.observe(cardRef.current);
    if (phoneRef.current) ro.observe(phoneRef.current);
    window.addEventListener("resize", updateLines);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateLines);
    };
  }, []);

  return (
    <ShowcaseCard
      cardRef={cardRef}
      tone="blue"
      label="The Notely Voice notes app connected to Notion, ChatGPT and Claude"
    >
      {/* Dashed connectors that dynamically stay attached to the phone */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {lines ? (
          lines.map((l, i) => (
            <line
              key={i}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.85"
            />
          ))
        ) : (
          [
            [17, 40, 28, 44],
            [78, 26, 72, 26],
            [81, 76, 72, 62],
          ].map(([x1, y1, x2, y2]) => (
            <line
              key={`${x1}-${y1}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.85"
            />
          ))
        )}
      </svg>

      <FloatingTile
        tileRef={notionRef}
        src={apps.notionLogoBlue}
        x={10}
        y={60}
        index={0}
      />
      <FloatingTile
        tileRef={chatgptRef}
        src={apps.chatgptLogoBlue}
        x={88}
        y={16}
        index={1}
      />
      <FloatingTile
        tileRef={claudeRef}
        src={apps.claudeLogo}
        x={90}
        y={76}
        index={2}
      />

      <div
        ref={phoneRef}
        className="absolute left-1/2 -bottom-[1%] z-10 min-w-[180px] -translate-x-1/2 overflow-hidden rounded-t-[26px] border-2 border-b-0 border-dashed border-transparent sm:rounded-t-[30px]"
      >
        <Image
          src={screens.notesAppScreen}
          alt="Notes app screen"
          className="h-auto w-full"
          priority={false}
        />
      </div>
    </ShowcaseCard>
  );
};
