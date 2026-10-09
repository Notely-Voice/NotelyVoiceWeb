import { Check, Pause, X } from "lucide-react";

/**
 * Static "recording" screen shown inside the hero phone until the real
 * walkthrough video is supplied. All sizes use container-query units (cqw),
 * so it scales with the phone frame (the frame is the query container).
 */

const BAR_COUNT = 46;

// Deterministic heights (no Math.random) so SSR and client markup match.
const BARS = Array.from({ length: BAR_COUNT }, (_, i) => ({
  height: Math.round(
    22 + 78 * Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.31)),
  ),
  delay: (i % 9) * 140,
}));

const PhoneRecordingScreen = () => {
  return (
    <div className="absolute inset-0 select-none bg-black text-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-[11cqw] pt-[9cqw] text-[4.4cqw] font-semibold">
        <span>9:41</span>
        <span className="flex items-center gap-[1.2cqw]" aria-hidden>
          <span className="h-[2.6cqw] w-[4.4cqw] rounded-[0.6cqw] bg-white" />
          <span className="h-[2.6cqw] w-[2.6cqw] rounded-full bg-white" />
          <span className="h-[2.6cqw] w-[5.6cqw] rounded-[0.8cqw] bg-white" />
        </span>
      </div>

      {/* Close */}
      <div className="absolute right-[11cqw] top-[28cqw] flex h-[8.5cqw] w-[8.5cqw] items-center justify-center rounded-full bg-white/20">
        <X className="h-[4.6cqw] w-[4.6cqw]" strokeWidth={2.4} />
      </div>

      {/* Waveform */}
      <div
        className="absolute inset-x-0 top-[78cqw] flex h-[17cqw] items-center justify-center gap-[0.95cqw]"
        aria-hidden
      >
        {BARS.map((bar, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list
            key={i}
            className="nv-bar block w-[1.15cqw] rounded-full bg-white"
            style={
              {
                height: `${bar.height}%`,
                "--delay": `${bar.delay}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Timer */}
      <p className="absolute inset-x-0 top-[107cqw] text-center text-[12.5cqw] font-medium tabular-nums leading-none">
        02:45
      </p>
      <p className="absolute inset-x-0 top-[127cqw] text-center text-[4.3cqw] text-white/75">
        Recording
      </p>

      {/* Controls */}
      <div className="absolute inset-x-0 top-[151cqw] flex items-center justify-center gap-[4.5cqw]">
        <span className="flex h-[13cqw] w-[13cqw] items-center justify-center rounded-full bg-[#9a9a9a]">
          <Pause
            className="h-[5.5cqw] w-[5.5cqw]"
            fill="currentColor"
            strokeWidth={0}
          />
        </span>
        <span className="flex h-[13cqw] w-[13cqw] items-center justify-center rounded-full bg-white text-black">
          <Check className="h-[6cqw] w-[6cqw]" strokeWidth={3} />
        </span>
      </div>
    </div>
  );
};

export default PhoneRecordingScreen;
