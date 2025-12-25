"use client"
import React from "react";

type VoiceProps = {
  color?: string;
  className?: string;
};

const HEIGHTS = [0.7, 0.5, 1, 0.6, 0.35, 0.5, 0.7];

const Voice: React.FC<VoiceProps> = ({ color = "#4758FF", className = "" }) => {
  // compute unique heights in the order they appear so same-height bars animate together
  const uniqueHeights = Array.from(new Set(HEIGHTS));

  return (
    <div className={`flex items-center gap-2 h-20 ${className}`} aria-hidden>
      {HEIGHTS.map((h, i) => {
        const groupIndex = uniqueHeights.indexOf(h);
        const delay = `${groupIndex * 220}ms`;
        return (
          <span
            key={i}
            className={`nv-bar rounded-full inline-block`} 
            style={{
              height: `${Math.round(h * 100)}%`,
              width: `12px`,
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