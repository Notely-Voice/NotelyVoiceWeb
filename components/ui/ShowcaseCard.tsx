import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";

type Tone = "light" | "blue";

export const ShowcaseCard = ({
  tone = "light",
  children,
  label,
  cardRef,
  xlHeightClass = "xl:h-[430px]",
  bgClass,
}: {
  tone?: Tone;
  children: ReactNode;
  label: string;
  cardRef?: React.Ref<HTMLDivElement>;
  xlHeightClass?: string;
  bgClass?: string;
}) => (
  <div
    ref={cardRef}
    role="img"
    aria-label={label}
    className={`relative h-65 w-full md:w-[620px] lg:w-full xl:w-[807px] overflow-hidden rounded-[22px] sm:h-80 md:h-90 lg:h-86 sm:rounded-[28px] ${xlHeightClass} ${
      bgClass ?? (tone === "blue" ? "bg-[#3E45FB]" : "bg-[#F0FEFF]")
    }`}
  >
    {children}
  </div>
);

export const Rings = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2"
  >
    <div className="absolute left-1/2 top-1/2 aspect-square w-65 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D5EEF1] sm:w-85" />
    <div className="absolute left-1/2 top-1/2 aspect-square w-100 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E1F4F6] sm:w-130" />
  </div>
);

export const FloatingTile = ({
  src,
  alt,
  x,
  y,
  index = 0,
  highlighted = false,
  children,
  tileRef,
}: {
  src?: StaticImageData | string;
  alt?: string;
  x: number;
  y: number;
  index?: number;
  highlighted?: boolean;
  children?: ReactNode;
  tileRef?: React.Ref<HTMLDivElement>;
}) => (
  <div
    ref={tileRef}
    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div
      // className="nv-float"
      style={{ "--float-delay": `${index * -0.9}s` } as CSSProperties}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          className={`h-auto w-8.5 rounded-[10px] sm:w-10 lg:w-11 ${
            highlighted
              ? "shadow-[0_0_0_2px_#3E45FB,0_8px_18px_-6px_rgba(62,69,251,0.5)]"
              : "drop-shadow-[0_6px_10px_rgba(20,30,80,0.08)]"
          }`}
        />
      ) : (
        children
      )}
    </div>
  </div>
);

export const CardPhone = ({
  children,
  borderClass = "border-black",
  dashed = false,
  widthClass = "w-[44%] min-w-[150px] max-w-[310px]",
}: {
  children?: ReactNode;
  borderClass?: string;
  dashed?: boolean;
  widthClass?: string;
}) => (
  <div
    className={`absolute left-1/2 -bottom-[1%] z-10 -translate-x-1/2 @container ${widthClass}`}
  >
    <div
      className={`relative overflow-hidden rounded-t-[14cqw] border-[0.9cqw] border-b-0 ${borderClass} ${
        dashed ? "border-dashed" : ""
      }`}
    >
      {children}
    </div>
  </div>
);
