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
 * fills the screen. The frame keeps a fixed 187:392 aspect ratio, so the
 * video should be exported at that ratio (it is cropped with object-cover).
 */
const PhoneVideoFrame = ({
  src,
  webmSrc,
  poster,
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
  }, []);

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative aspect-187/392 shrink-0 overflow-hidden rounded-[21%/10%] bg-black shadow-[0_40px_70px_-30px_rgba(62,69,251,0.55)] ring-1 ring-white/10 @container ${className}`}
    >
      {src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop={loop}
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        (fallback ?? <PhoneRecordingScreen />)
      )}
    </div>
  );
};

export default PhoneVideoFrame;
