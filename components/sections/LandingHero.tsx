import Image from "next/image";
import { icons } from "@/lib/index";
import PhoneVideoFrame from "../ui/PhoneVideoFrame";
import homeAssets from "@/lib/newHomeAssets";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/notely-voice-ai-voice-to-text/id6745835691";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.module.notelycompose.android";


// const StoreBadge = ({
//   href,
//   icon,
//   alt,
//   label,
//   store,
// }: {
//   href: string;
//   icon: string;
//   alt: string;
//   label: string;
//   store: string;
// }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label={`${label} ${store}`}
//     className="group flex h-13 items-center gap-2.5 rounded-lg bg-black px-3 text-white outline-offset-2 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(62,69,251,0.7)] focus-visible:outline-2 focus-visible:outline-[#3E45FB] sm:h-14 sm:px-4"
//   >
//     <Image src={icon} alt={alt} width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7" />
//     <span className="flex flex-col leading-none">
//       <span className="text-[9px] font-medium tracking-wide sm:text-[10px]">
//         {label}
//       </span>
//       <span className="mt-0.5 text-[15px] font-semibold sm:text-lg">{store}</span>
//     </span>
//   </a>
// );

const LandingHero = () => {
  return (
    <section
      aria-labelledby="landing-hero-heading"
      className="relative flex w-full justify-center px-5 py-6 sm:px-10 lg:py-12"
    >
      <div className="wrapper flex flex-col items-center gap-12 md:flex-row lg:justify-center md:gap-16 xl:gap-28 lg:px-10 xl:px-16">
        
        <div className="flex max-w-148 flex-col items-center text-center md:items-start md:text-left">
          <h1
            id="landing-hero-heading"
            className="font-varien text-[46px] font-normal uppercase leading-[0.98] tracking-[-0.03em] text-[#3E45FB] sm:text-[68px] lg:text-[75px] "
          >
            Speak,
            <br />
            Don&apos;t type
          </h1>
          <p className="mt-6 max-w-200 text-lg font-medium leading-relaxed text-black sm:text-xl lg:mt-8 lg:text-2xl lg:leading-normal">
            100% private AI voice-to-text transcription, everything on-device.
            Perfect for students, pros &amp; accessibility.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {/* <StoreBadge
              href={APP_STORE_URL}
              icon={icons.apple_white}
              alt="Apple logo"
              label="Download on the"
              store="App Store"
            />

            <StoreBadge
              href={PLAY_STORE_URL}
              icon={icons.Playstore}
              alt="Google Play logo"
              label="GET IT ON"
              store="Google Play"
            /> */}

            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Image src={homeAssets.icons.appStoreDownload} alt="Apple logo" />
            </a>

            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Image src={homeAssets.icons.googlePlayDownload} alt="Google Play logo" />
            </a>
          </div>
        </div>

        {/* Phone (video slot) */}
        <div className="relative flex justify-center lg:pr-6 xl:pr-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E45FB]/10 blur-3xl"
          />
          <PhoneVideoFrame
            src="/notely_phone_screen.mp4"
            className="relative min-w-64 lg:min-w-80 lg:max-w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
