import {
  CheckCheck,
  Cloud,
  Delete,
  Languages,
  Undo2,
} from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { homeAssets } from "@/lib/newHomeAssets";
import {
  CardPhone,
  FloatingTile,
  Rings,
  ShowcaseCard,
} from "../ui/ShowcaseCard";

const { apps, screens } = homeAssets;

/* -------------------------------------------------------------------------- */
/*  1. Private meeting transcriptions                                          */
/* -------------------------------------------------------------------------- */

export const MeetingsVisual = () => (
  <ShowcaseCard label="A meeting transcript on a phone, with Private AI and Advanced AI transcription options">
    <FloatingTile src={apps.blueShieldLogo} alt="" x={20} y={22} index={0} />
    <FloatingTile x={79} y={31} index={1}>
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-black sm:h-[40px] sm:w-[40px] lg:h-[44px] lg:w-[44px]">
        <Cloud
          className="h-[55%] w-[55%] text-[#2F88FF]"
          fill="currentColor"
          strokeWidth={1.5}
        />
      </span>
    </FloatingTile>

    <div className="absolute left-1/2 -bottom-[1%] z-10 w-[44%] min-w-[150px] max-w-[210px] -translate-x-1/2">
      <Image
        src={screens.meetingTranscriptScreen}
        alt="Meeting transcript screen"
        className="h-auto w-full"
        priority={false}
      />
    </div>

    <div className="absolute left-[24%] top-[50%] z-20 -translate-x-1/2 -translate-y-1/2 sm:left-[26%]">
      <div className="nv-float" style={{ "--float-delay": "-1.4s" } as CSSProperties}>
        <Image
          src={screens.privateAi}
          alt="Private AI transcription"
          className="h-auto w-[62px] sm:w-[78px] lg:w-[88px]"
        />
      </div>
    </div>
    <div className="absolute left-[75%] top-[77%] z-20 -translate-x-1/2 -translate-y-1/2 sm:left-[73%]">
      <div className="nv-float" style={{ "--float-delay": "-3s" } as CSSProperties}>
        <Image
          src={screens.advancedAi}
          alt="Advanced AI transcription"
          className="h-auto w-[62px] sm:w-[78px] lg:w-[88px]"
        />
      </div>
    </div>
  </ShowcaseCard>
);

/* -------------------------------------------------------------------------- */
/*  2. Hands-free typing on any app                                            */
/* -------------------------------------------------------------------------- */

const LiveAudioLines = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="2" y1="10" x2="2" y2="13">
      <animate
        attributeName="y1"
        values="10;8.5;10.5;7.5;10"
        dur="1.2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y2"
        values="13;14.5;12.5;15.5;13"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </line>
    <line x1="6" y1="6" x2="6" y2="17">
      <animate
        attributeName="y1"
        values="6;8.5;4;7.5;6"
        dur="0.95s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y2"
        values="17;14.5;19;15.5;17"
        dur="0.95s"
        repeatCount="indefinite"
      />
    </line>
    <line x1="10" y1="3" x2="10" y2="21">
      <animate
        attributeName="y1"
        values="3;7;2;5.5;3"
        dur="1.1s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y2"
        values="21;17;22;18.5;21"
        dur="1.1s"
        repeatCount="indefinite"
      />
    </line>
    <line x1="14" y1="8" x2="14" y2="15">
      <animate
        attributeName="y1"
        values="8;4.5;9.5;6;8"
        dur="0.85s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y2"
        values="15;18.5;13.5;17;15"
        dur="0.85s"
        repeatCount="indefinite"
      />
    </line>
    <line x1="18" y1="5" x2="18" y2="18">
      <animate
        attributeName="y1"
        values="5;8;4;7;5"
        dur="1.05s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y2"
        values="18;15;19;16;18"
        dur="1.05s"
        repeatCount="indefinite"
      />
    </line>
    <line x1="22" y1="10" x2="22" y2="13">
      <animate
        attributeName="y1"
        values="10;8;10.5;8.5;10"
        dur="1.25s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y2"
        values="13;15;12.5;14.5;13"
        dur="1.25s"
        repeatCount="indefinite"
      />
    </line>
  </svg>
);

export const KeyboardVisual = () => (
  <ShowcaseCard label="Notely Voice keyboard dictating a message into WhatsApp, surrounded by messaging app icons">
    <Rings />
    <FloatingTile src={apps.telegramLogo} x={21} y={19} index={0} />
    <FloatingTile src={apps.gmailLogo} x={79} y={19} index={1} />
    <FloatingTile src={apps.slackLogo} x={14} y={50} index={2} />
    <FloatingTile src={apps.imessageLogo} x={86} y={50} index={3} />
    <FloatingTile src={apps.whatsappLogo} x={15} y={81} index={4} />
    <FloatingTile src={apps.xLogoBlack} x={85} y={81} index={5} />

    <CardPhone>
      <div className="flex h-[150cqw] flex-col gap-[3.5cqw] p-[5cqw] pt-[6cqw]">
        {/* Received bubble */}
        <div className="rounded-[5cqw] bg-[#0E5A41] p-[4cqw] text-white">
          <p className="text-[4cqw] leading-[1.35]">
            Industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book, unchanged.
          </p>
          <p className="mt-[1cqw] flex items-center justify-end gap-[1cqw] text-[2.4cqw] text-[#7be3bf]">
            12:10 pm
            <CheckCheck className="h-[3cqw] w-[3cqw]" strokeWidth={3} />
          </p>
        </div>

        {/* Input */}
        <div className="rounded-[2cqw] border-[0.4cqw] border-[#b9c6ff] bg-white px-[3cqw] py-[2.2cqw]">
          <p className="flex items-center gap-[1.6cqw] text-[2.7cqw] font-medium text-black">
            <Image src={apps.whatsappLogo} alt="" className="h-2.5 w-2.5" />
            WhatsApp
          </p>
          <span
            className="nv-blink mt-[1.6cqw] block h-[4cqw] w-[0.35cqw] bg-black"
            style={{ animation: "nv-blink 1s steps(1) infinite" }}
          />
        </div>

        {/* Notely voice recorder */}
        <div className="mt-auto rounded-2xl lg:rounded-3xl bg-black px-[5cqw] pb-[10cqw] pt-[8cqw] mb-[4cqw] text-white">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium">Notely Voice</span>
            <span className="flex items-center gap-1 rounded-full bg-white px-[1.6cqw] py-[1cqw] text-black">
              <LiveAudioLines className="h-3 w-3 bg-black text-white rounded-full p-0.5" />
              <Languages className="h-2 w-2" />
            </span>
          </div>
          <p className="mt-[5cqw] text-center text-[2.4cqw] text-white/60">
            Tap to speak
          </p>
          <div className="mt-[2cqw] flex items-center justify-between gap-[3cqw]">
            <Delete className="h-[8cqw] w-[8cqw] text-white/80" />
            <span className="flex h-[18cqw] w-[40cqw] items-center justify-center rounded-full bg-white text-black">
              <LiveAudioLines className="h-[12cqw] w-[18cqw]" />
            </span>
            <Undo2 className="h-[8cqw] w-[8cqw] text-white/80" />
          </div>
        </div>
      </div>
    </CardPhone>
  </ShowcaseCard>
);

/* -------------------------------------------------------------------------- */
/*  3. AI queries using personal context                                       */
/* -------------------------------------------------------------------------- */

const SourceChip = ({ label, children, }: { label: string; children: React.ReactNode; }) => (
  <span className="flex items-center gap-[1.2cqw] bg-white rounded-xl px-[2cqw] py-[1cqw] text-[2.2cqw] text-black/70">
    {children}
    <span>
    {label}
    </span>
  </span>
);

export const AskVisual = () => (
  <ShowcaseCard label="An AI assistant answering a question using Slack, Calendar and browser history, with ChatGPT, Gemini and Claude icons around it">
    <Rings />
    <FloatingTile src={apps.geminiLogo} x={32} y={18} index={0} />
    <FloatingTile src={apps.chatgptLogo} x={77} y={23} index={1} />
    <FloatingTile src={apps.mcpLogo} x={18} y={54} index={2} />
    <FloatingTile src={apps.claudeLogo} x={82} y={59} index={3} />

    <CardPhone borderClass="border-[#16203b]" widthClass="md:h-4/5 w-[40%] min-w-[150px] max-w-60">
      <div className="flex flex-col gap-[3.5cqw] p-[5cqw] pt-[16cqw]">
        <p className="rounded-[5cqw] bg-black px-[4cqw] py-[3cqw] text-[4cqw] leading-[1.35] text-white">
          Summarize what I did last week across my Slack, Calendar, and browser
          history.
        </p>
        <p className="text-[2.4cqw] text-black/45">Sources</p>
        <div className="flex flex-wrap gap-[1.6cqw] my-2">
          <SourceChip label="Calendar">
            <Image
              src={apps.calendarLogo}
              alt=""
              className="h-2 w-2"
            />
          </SourceChip>
          <SourceChip label="Slack">
            <Image
              src={apps.slackLogo}
              alt=""
              className="h-2 w-2"
            />
          </SourceChip>
          <SourceChip label="Browser">
            <Image
              src={apps.chromeLogo}
              alt=""
              className="h-2 w-2"
            />
          </SourceChip>
        </div>
        <p className="text-[5cqw] leading-[1.45] text-black">
          I went through last week&apos;s memories, emails, and the web.
          Here&apos;s where things stand:
        </p>
        <p className="text-[5cqw] leading-[1.45] text-black">
          Last week, you primarily focused on finalizing the Q3 Product Launch.
          According to your Slack activity, you approved the final design
          assets with the marketing team and resolved two critical deployment
          blockers.
        </p>
      </div>
    </CardPhone>
  </ShowcaseCard>
);

/* -------------------------------------------------------------------------- */
/*  4. Bring your ideas to life                                                */
/* -------------------------------------------------------------------------- */

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
      borderClass="border-black"
      widthClass="w-[44%] min-w-[165px] max-w-[220px]"
    >
      <div className="h-[135cqw] sm:h-[125cqw] w-full" />
    </CardPhone>

    {/* Gmail prompt text block floating over the phone */}
    <div className="absolute left-1/2 top-[67%] z-20 w-[82%] sm:w-[64%] min-w-[260px] max-w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] border-[1.5px] border-[#BAC6FF] bg-white p-3.5 sm:p-4 shadow-[0_12px_28px_rgba(62,69,251,0.08)]">
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

export const JournalsVisual = () => (
  <ShowcaseCard
    tone="blue"
    label="The Notely Voice notes app connected to Notion, ChatGPT and Claude"
  >
    {/* Dashed connectors, drawn in card-percentage space */}
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {[
        [17, 41, 30, 48],
        [78, 24, 70, 32],
        [81, 74, 71, 62],
      ].map(([x1, y1, x2, y2]) => (
        <line
          key={`${x1}-${y1}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
          opacity="0.85"
        />
      ))}
    </svg>

    <FloatingTile src={apps.notionLogoBlue} x={14} y={40} index={0} />
    <FloatingTile src={apps.chatgptLogoBlue} x={81} y={21} index={1} />
    <FloatingTile src={apps.claudeLogo} x={84} y={76} index={2} />

    <div className="absolute left-1/2 top-[16%] z-10 w-[42%] min-w-[160px] max-w-[220px] -translate-x-1/2 overflow-hidden rounded-t-[26px] border-2 border-b-0 border-dashed border-white sm:rounded-t-[30px]">
      <Image
        src={screens.notesAppScreen}
        alt="Notes app screen"
        className="h-auto w-full"
      />
    </div>
  </ShowcaseCard>
);
