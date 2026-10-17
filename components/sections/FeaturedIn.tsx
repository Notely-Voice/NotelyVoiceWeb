import Image from "next/image";
import { homeAssets } from "@/lib/newHomeAssets";

const { youtubeLogo, gigazineLogo, punchLogo, youtubeLogoColored, gigazineLogoColored, punchLogoColored } = homeAssets.press;

const PRESS = [
  {
    name: "YouTube",
    defaultSrc: youtubeLogo,
    coloredSrc: youtubeLogoColored,
    href: "https://www.youtube.com/@notelyvoiceai",
    className: "h-6 sm:h-8",
  },
  {
    name: "Gigazine",
    defaultSrc: gigazineLogo,
    coloredSrc: gigazineLogoColored,
    href: "https://gigazine.net/gsc_news/en/20260315-notely-voice-ai-transcription/",
    className: "h-7 sm:h-9",
  },
  {
    name: "Punch",
    defaultSrc: punchLogo,
    coloredSrc: punchLogoColored,
    href: "#",
    className: "h-6 sm:h-8",
  },
];

const FeaturedIn = () => {
  return (
    <section
      aria-labelledby="featured-in-heading"
      className="flex w-full justify-center bg-[#E6FCFD] px-4 py-8 sm:px-6 xl:px-9 sm:py-10"
    >
      <div className="wrapper flex flex-col items-center gap-5">
        <h2
          id="featured-in-heading"
          className="text-base font-medium text-black sm:text-lg"
        >
          Featured In
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-20">
          {PRESS.map((logo) => (
            <li key={logo.name}>
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Featured in ${logo.name}`}
                className="group relative flex items-center justify-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
              >
                <Image
                  src={logo.defaultSrc}
                  alt={logo.name}
                  className={`w-auto transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ${logo.className}`}
                />
                <Image
                  src={logo.coloredSrc}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 m-auto w-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-events-none ${logo.className}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedIn;
