"use client"
import React from "react";
import {useResponsive} from "@/hooks/useResponsive";

type VoiceProps = {
  color?: string;
  className?: string;
  barWidth?: number;
  barHeight?: string;
};

const HEIGHTS = [0.7, 0.5, 1, 0.6, 0.35, 0.5, 0.7];


const Voice: React.FC<VoiceProps> = ({
                                       color = "#4758FF",
                                       className = "",}: VoiceProps) => {
  // compute unique heights in the order they appear so same-height bars animate together
  const uniqueHeights = Array.from(new Set(HEIGHTS));


  const screenSize = useResponsive();

// Dynamic bar dimensions based on screen size
  const barWidth = {
    xxs: 6,
    xs: 7,
    sm: 8,
    md: 9,
    lmd: 9,
    lg: 10,
    xl: 11,
  }[screenSize];

  const barHeight = {
    xxs: 'h-10',
    xs: 'h-10',
    sm: 'h-12',
    md: 'h-13',
    lmd: 'h-13',
    lg: 'h-14',
    xl: 'h-16',
  }[screenSize];

  return (
    <div
      className={`flex items-center gap-0.5 sm:gap-1 ${barHeight} ${className}`}
      aria-hidden
      style={{
        "--bar-width": `${barWidth}px`,
      } as React.CSSProperties}
    >
      {HEIGHTS.map((h, i) => {
        const groupIndex = uniqueHeights.indexOf(h);
        const delay = `${groupIndex * 220}ms`;
        return (
          <span
            key={i}
            className={`nv-bar rounded-full inline-block`}
            style={{
              height: `${Math.round(h * 100)}%`,
              width: `var(--bar-width)`,
              backgroundColor: color,
              display: "inline-block",
              transformOrigin: "center center",
              // expose the per-bar delay as a CSS custom property so the scoped
              // styled-jsx animation can read it reliably after hydration
              ["--delay" as any]: delay,
            }}
          />
        );
      })}

      {/* animation moved to globals.css to avoid SSR/client class hash mismatch */}
    </div>
  );
};

export default Voice;