import AboutCTA from "@/components/sections/AboutCTA";
import AboutDetails from "@/components/sections/AboutDetails";
import AboutHero from "@/components/sections/AboutHero";
import Stand from "@/components/sections/Stand";

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
