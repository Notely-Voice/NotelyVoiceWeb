"use client";

import { type ReactNode, useEffect, useRef } from "react";
import PhoneRecordingScreen from "./PhoneRecordingScreen";

export interface PhoneVideoFrameProps {
  /** Primary video (e.g. an .mp4). When omitted, the fallback screen is shown. */
  src?: string;
  /** Optional preferred source, tried before `src` (e.g. a smaller .webm). */
  webmSrc?: string;
  /** Image shown while the video loads, or when motion is reduced. */
  poster?: string;
  loop?: boolean;
  /** Content shown when no video is supplied. Defaults to a recording UI. */
  fallback?: ReactNode;
  ariaLabel?: string;
  /** Control the size from outside, e.g. `w-[240px]`. Height follows the aspect ratio. */
  className?: string;
}

/**
 * A phone frame with a screen slot built for a looping, muted walkthrough
 * video. Pass `src` (and optionally `poster` / `webmSrc`) and the video
 * fills the screen. The frame keeps the video's native 1080:1750 aspect ratio; the video already
 * contains the phone bezel, so it is shown uncropped.
 */
const PhoneVideoFrame = ({
  src,
  // webmSrc,
  // poster,
  loop = true,
  fallback,
  ariaLabel = "Notely Voice app recording screen",
  className = "",
}: PhoneVideoFrameProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect reduced-motion: show the first frame / poster instead of playing.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) video.pause();
      else void video.play().catch(() => undefined);
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [src]);

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative aspect-1080/1750 shrink-0 @container ${className}`}
    >
      {src ? (
        <video
          ref={videoRef}
          className="absolute h-full w-full object-contain [clip-path:inset(0_1%_1%_0)]"
          autoPlay
          muted
          loop={loop}
          playsInline
          preload="metadata"
          // poster={poster}
          aria-hidden
          src={src}
        >
          {/* {webmSrc && <source src={webmSrc} type="video/webm" />} */}
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        (fallback ?? <PhoneRecordingScreen />)
      )}
    </div>
  );
};

export default PhoneVideoFrame;
