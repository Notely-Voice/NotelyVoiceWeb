import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, Mic, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "We couldn't find the page you were looking for. Head back to Notely Voice.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Floating "transcript" chips that drift around the hero. */
const CHIPS = [
  {
    text: "[inaudible]",
    pos: "left-[4%] top-[14%]",
    tilt: "-8deg",
    delay: "0s",
    hide: "",
  },
  {
    text: "…did you say “page”?",
    pos: "right-[3%] top-[22%]",
    tilt: "6deg",
    delay: "1.2s",
    hide: "hidden md:block",
  },
  {
    text: "no matching words",
    pos: "left-[8%] bottom-[18%]",
    tilt: "5deg",
    delay: "2.4s",
    hide: "hidden md:block",
  },
  {
    text: "404 · silence",
    pos: "right-[6%] bottom-[14%]",
    tilt: "-6deg",
    delay: "0.6s",
    hide: "",
  },
];

const BAR_HEIGHTS = [0.22, 0.4, 0.62, 0.34, 0.5, 0.26];

const NotFound = () => {
  return (
    <main
      id="main-content"
      className="relative flex w-full flex-1 items-center justify-center overflow-hidden bg-[#F0FEFF] px-5 py-16 sm:px-10 sm:py-24"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="nv-glow absolute left-1/2 top-[42%] h-[70vw] max-h-[720px] w-[70vw] max-w-[720px] rounded-full bg-[#3E45FB]/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(62,69,251,0.22) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />
        {CHIPS.map((chip) => (
          <span
            key={chip.text}
            className={`nv-drift absolute ${chip.pos} ${chip.hide} rounded-full border border-[#3E45FB]/20 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[#3E45FB]/80 shadow-[0_8px_24px_-12px_rgba(62,69,251,0.5)] backdrop-blur-sm sm:text-sm`}
            style={
              {
                "--tilt": chip.tilt,
                "--d": chip.delay,
                transform: `rotate(${chip.tilt})`,
              } as React.CSSProperties
            }
          >
            {chip.text}
          </span>
        ))}
      </div>

      <div className="relative z-10 flex w-full max-w-[760px] flex-col items-center text-center">
        <p
          className="nv-rise inline-flex items-center gap-2 rounded-full border border-[#3E45FB]/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#3E45FB] backdrop-blur-sm sm:text-sm"
          style={{ "--d": "0s" } as React.CSSProperties}
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Error 404
        </p>

        {/* 4 [waveform] 4 */}
        <div
          role="img"
          aria-label="404"
          className="nv-rise mt-6 flex items-center justify-center gap-[0.04em] font-varien leading-none text-[#3E45FB] select-none"
          style={
            {
              "--d": "0.1s",
              fontSize: "clamp(104px, 26vw, 240px)",
            } as React.CSSProperties
          }
        >
          <span aria-hidden>4</span>

          <span
            aria-hidden
            className="relative flex items-center justify-center"
            style={{ width: "0.82em", height: "0.82em" }}
          >
            {/* sound rings */}
            <span className="nv-ring absolute inset-0 rounded-full border-2 border-[#3E45FB]/50" />
            <span
              className="nv-ring absolute inset-0 rounded-full border-2 border-[#3E45FB]/40"
              style={{ "--d": "1.06s" } as React.CSSProperties}
            />
            <span
              className="nv-ring absolute inset-0 rounded-full border-2 border-[#3E45FB]/30"
              style={{ "--d": "2.12s" } as React.CSSProperties}
            />

            {/* the “0” as a mic button */}
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#3E45FB] shadow-[0_24px_60px_-18px_rgba(62,69,251,0.85)]">
              <span className="absolute inset-[7%] rounded-full border border-white/25" />
              <span className="flex items-center gap-[0.045em]">
                {BAR_HEIGHTS.map((h, i) => (
                  <span
                    // biome-ignore lint/suspicious/noArrayIndexKey: static decorative bars
                    key={i}
                    className="nv-bar block rounded-full bg-white"
                    style={
                      {
                        width: "0.055em",
                        height: `${h}em`,
                        "--delay": `${i * 140}ms`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </span>
            </span>
          </span>

          <span aria-hidden>4</span>
        </div>

        <h1
          className="nv-rise mt-8 font-varien text-[30px] font-normal uppercase leading-[1.05] tracking-[-0.02em] text-black sm:text-[44px] md:text-[52px]"
          style={{ "--d": "0.25s" } as React.CSSProperties}
        >
          We couldn&apos;t catch
          <br />
          that page
        </h1>

        <p
          className="nv-rise mt-5 max-w-[480px] text-base font-medium leading-[1.6] text-black/70 sm:text-lg"
          style={{ "--d": "0.35s" } as React.CSSProperties}
        >
          The page you&apos;re looking for has moved, been renamed, or never
          existed. Let&apos;s get you back to something worth saying.
          <span
            aria-hidden
            className="nv-blink ml-1 inline-block h-[1em] w-[2px] translate-y-[3px] bg-[#3E45FB]"
          />
        </p>

        <div
          className="nv-rise mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          style={{ "--d": "0.45s" } as React.CSSProperties}
        >
          <Link
            href="/"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#3E45FB] px-7 text-base font-semibold text-white outline-offset-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(62,69,251,0.9)] focus-visible:outline-2 focus-visible:outline-[#3E45FB]"
          >
            <Home
              className="h-[18px] w-[18px] transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110"
              aria-hidden
            />
            Back to home
          </Link>
          <Link
            href="/features"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#3E45FB]/30 bg-white px-7 text-base font-semibold text-[#3E45FB] outline-offset-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3E45FB] hover:shadow-[0_14px_30px_-16px_rgba(62,69,251,0.6)] focus-visible:outline-2 focus-visible:outline-[#3E45FB]"
          >
            <Mic className="h-[18px] w-[18px]" aria-hidden />
            Explore features
            <ArrowLeft
              className="h-[18px] w-[18px] rotate-180 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>

        <nav
          aria-label="Helpful links"
          className="nv-rise mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm"
          style={{ "--d": "0.55s" } as React.CSSProperties}
        >
          <span className="font-medium text-black/50">Or try:</span>
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 font-semibold text-black/70 outline-offset-2 transition-colors duration-150 hover:bg-[#3E45FB]/10 hover:text-[#3E45FB] focus-visible:outline-2 focus-visible:outline-[#3E45FB]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
};

export default NotFound;
