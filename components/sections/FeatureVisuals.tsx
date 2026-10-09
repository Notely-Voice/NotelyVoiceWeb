import {
  AudioLines,
  Check,
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

    <div className="absolute left-1/2 top-[16%] z-10 w-[44%] min-w-[150px] max-w-[210px] -translate-x-1/2">
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
      <div className="flex h-full flex-col gap-[3.5cqw] p-[5cqw] pt-[6cqw]">
        {/* Received bubble */}
        <div className="rounded-[2.4cqw] bg-[#0E5A41] p-[2.6cqw] text-white">
          <p className="text-[3.1cqw] leading-[1.35]">
            Industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book, unchanged.
          </p>
          <p className="mt-[1cqw] flex items-center justify-end gap-[1cqw] text-[2.4cqw] text-[#7be3bf]">
            12:10 pm
            <Check className="h-[3cqw] w-[3cqw]" strokeWidth={3} />
          </p>
        </div>

        {/* Input */}
        <div className="rounded-[2cqw] border-[0.4cqw] border-[#b9c6ff] bg-white px-[3cqw] py-[2.2cqw]">
          <p className="flex items-center gap-[1.6cqw] text-[2.7cqw] font-medium text-black">
            <span className="h-[1.8cqw] w-[1.8cqw] rounded-full bg-[#25D366]" />
            WhatsApp
          </p>
          <span className="mt-[1.6cqw] block h-[4cqw] w-[0.35cqw] bg-black" />
        </div>

        {/* Notely keyboard */}
        <div className="mt-auto rounded-t-[5cqw] bg-black px-[5cqw] pb-[14cqw] pt-[4.5cqw] text-white">
          <div className="flex items-center justify-between">
            <span className="text-[3.2cqw] font-medium">Notely Voice</span>
            <span className="flex items-center gap-[1cqw] rounded-full bg-white px-[1.6cqw] py-[1cqw] text-black">
              <AudioLines className="h-[3.2cqw] w-[3.2cqw]" />
              <Languages className="h-[3.2cqw] w-[3.2cqw]" />
            </span>
          </div>
          <p className="mt-[5cqw] text-center text-[2.4cqw] text-white/60">
            Tap to speak
          </p>
          <div className="mt-[2cqw] flex items-center justify-between gap-[3cqw]">
            <Delete className="h-[4.2cqw] w-[4.2cqw] text-white/80" />
            <span className="flex h-[11cqw] flex-1 items-center justify-center rounded-full bg-white text-black">
              <AudioLines className="h-[5.5cqw] w-[5.5cqw]" />
            </span>
            <Undo2 className="h-[4.2cqw] w-[4.2cqw] text-white/80" />
          </div>
        </div>
      </div>
    </CardPhone>
  </ShowcaseCard>
);

/* -------------------------------------------------------------------------- */
/*  3. AI queries using personal context                                       */
/* -------------------------------------------------------------------------- */

const SourceChip = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <span className="flex items-center gap-[1.2cqw] rounded-[1.4cqw] border-[0.3cqw] border-[#e5ecef] px-[1.8cqw] py-[1cqw] text-[2.2cqw] text-black/70">
    {children}
    {label}
  </span>
);

export const AskVisual = () => (
  <ShowcaseCard label="An AI assistant answering a question using Slack, Calendar and browser history, with ChatGPT, Gemini and Claude icons around it">
    <Rings />
    <FloatingTile src={apps.geminiLogo} x={32} y={18} index={0} />
    <FloatingTile src={apps.chatgptLogo} x={77} y={23} index={1} />
    <FloatingTile src={apps.mcpLogo} x={18} y={54} index={2} />
    <FloatingTile src={apps.claudeLogo} x={82} y={59} index={3} />

    <CardPhone borderClass="border-[#16203b]" widthClass="w-[40%] min-w-[150px] max-w-[200px]">
      <div className="flex flex-col gap-[3.5cqw] p-[5cqw] pt-[6cqw]">
        <p className="rounded-[2cqw] bg-black px-[3cqw] py-[2.6cqw] text-[2.7cqw] leading-[1.35] text-white">
          Summarize what I did last week across my Slack, Calendar, and browser
          history.
        </p>
        <p className="text-[2.4cqw] text-black/45">Sources</p>
        <div className="flex flex-wrap gap-[1.6cqw]">
          <SourceChip label="Calendar">
            <span className="h-[2.4cqw] w-[2.4cqw] rounded-[0.6cqw] bg-black" />
          </SourceChip>
          <SourceChip label="Slack">
            <Image
              src={apps.slackLogo}
              alt=""
              className="h-[3cqw] w-[3cqw]"
            />
          </SourceChip>
          <SourceChip label="Browser">
            <span
              className="h-[2.6cqw] w-[2.6cqw] rounded-full"
              style={{
                background:
                  "conic-gradient(#ea4335 0 33%, #fbbc04 0 66%, #34a853 0)",
              }}
            />
          </SourceChip>
        </div>
        <p className="text-[2.7cqw] leading-[1.45] text-black">
          I went through last week&apos;s memories, emails, and the web.
          Here&apos;s where things stand:
        </p>
        <p className="text-[2.7cqw] leading-[1.45] text-black">
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

export const CreateVisual = () => (
  <ShowcaseCard label="A prompt asking Gmail to find a contract thread and reply, surrounded by productivity app icons">
    <Rings />
    <FloatingTile src={apps.slackLogo} x={19} y={31} index={0} />
    <FloatingTile src={apps.chatgptLogo} x={13} y={55} index={1} />
    <FloatingTile src={apps.notionLogo} x={19} y={80} index={2} />
    <FloatingTile src={apps.gmailLogo} x={80} y={31} index={3} highlighted />
    <FloatingTile src={apps.whatsappLogo} x={85} y={55} index={4} />
    <FloatingTile src={apps.telegramLogo} x={80} y={80} index={5} />

    <CardPhone widthClass="w-[40%] min-w-[150px] max-w-[200px]" />

    <div className="absolute left-1/2 top-[44%] z-20 w-[56%] min-w-[210px] max-w-[300px] -translate-x-1/2 overflow-hidden rounded-md border border-[#c9d0ff] bg-white shadow-[0_14px_30px_-14px_rgba(62,69,251,0.35)]">
      <p className="flex items-center gap-1.5 bg-[#f6f8fb] px-3 py-1.5 text-[9px] font-medium text-black sm:text-[10px]">
        <Image src={apps.gmailLogo} alt="" className="h-3.5 w-3.5" />
        Gmail
      </p>
      <p className="px-3 py-2.5 text-[10px] text-black sm:text-[11px] lg:text-xs">
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
