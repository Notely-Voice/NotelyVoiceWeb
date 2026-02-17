import type { Metadata } from "next";
import AboutCTA from "@/components/sections/AboutCTA";
import AboutDetails from "@/components/sections/AboutDetails";
import AboutHero from "@/components/sections/AboutHero";
import Stand from "@/components/sections/Stand";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about Notely Voice and our mission to provide 100% private, on-device AI voice transcription for everyone. Discover our story and values.",
  keywords: [
    "about notely voice",
    "privacy-first transcription",
    "company mission",
    "our story",
  ],
  path: "/about",
});

function AboutUs() {
  return (
    <div className="bg-white flex flex-col gap-10 sm:gap-[70px]">
      <AboutHero />
      <AboutDetails />
      <Stand />
      <AboutCTA />
    </div>
  );
}

export default AboutUs;
