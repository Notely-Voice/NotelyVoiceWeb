import Image from "next/image";
import { homeAssets } from "@/lib/newHomeAssets";

const { youtubeLogo, gigazineLogo, punchLogo } = homeAssets.press;

const PRESS = [
  { src: youtubeLogo, alt: "YouTube", className: "h-6 sm:h-8" },
  { src: gigazineLogo, alt: "Gigazine", className: "h-7 sm:h-9" },
  { src: punchLogo, alt: "Punch", className: "h-6 sm:h-8" },
];

const FeaturedIn = () => {
  return (
    <section
      aria-labelledby="featured-in-heading"
      className="flex w-full justify-center bg-[#E6FCFD] px-5 py-8 sm:px-10 sm:py-10"
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
            <li key={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className={`w-auto ${logo.className}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedIn;
