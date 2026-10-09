import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Primitives shared by the feature-showcase cards                            */
/* -------------------------------------------------------------------------- */

type Tone = "light" | "blue";

export const ShowcaseCard = ({
  tone = "light",
  children,
  label,
}: {
  tone?: Tone;
  children: ReactNode;
  /** Accessible description of the illustration. */
  label: string;
}) => (
  <div
    role="img"
    aria-label={label}
    className={`relative h-[250px] w-full overflow-hidden rounded-[22px] sm:h-[290px] sm:rounded-[28px] lg:h-[300px] ${
      tone === "blue" ? "bg-[#3E45FB]" : "bg-[#F0FEFF]"
    }`}
  >
    {children}
  </div>
);

/** Faint concentric rings behind the phone. */
export const Rings = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2"
  >
    <div className="absolute left-1/2 top-1/2 aspect-square w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D5EEF1] sm:w-[340px]" />
    <div className="absolute left-1/2 top-1/2 aspect-square w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E1F4F6] sm:w-[520px]" />
  </div>
);

/** An app tile positioned by percentage so it scales with the card. */
export const FloatingTile = ({
  src,
  alt,
  x,
  y,
  index = 0,
  highlighted = false,
  children,
}: {
  src?: StaticImageData | string;
  alt?: string;
  x: number;
  y: number;
  index?: number;
  highlighted?: boolean;
  children?: ReactNode;
}) => (
  <div
    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div
      className="nv-float"
      style={{ "--float-delay": `${index * -0.9}s` } as CSSProperties}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          className={`h-auto w-[34px] rounded-[10px] sm:w-[40px] lg:w-[44px] ${
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

/**
 * A phone drawn in code, cropped by the bottom edge of the card.
 * The wrapper is the container-query context, so children can size
 * themselves with `cqw` units and scale with the phone.
 */
export const CardPhone = ({
  children,
  borderClass = "border-black",
  dashed = false,
  widthClass = "w-[44%] min-w-[150px] max-w-[210px]",
}: {
  children?: ReactNode;
  borderClass?: string;
  dashed?: boolean;
  widthClass?: string;
}) => (
  <div
    className={`absolute left-1/2 top-[16%] z-10 -translate-x-1/2 [container-type:inline-size] ${widthClass}`}
  >
    <div
      className={`relative h-[150cqw] overflow-hidden rounded-t-[14cqw] border-[0.9cqw] border-b-0 bg-white ${borderClass} ${
        dashed ? "border-dashed" : ""
      }`}
    >
      {children}
    </div>
  </div>
);
