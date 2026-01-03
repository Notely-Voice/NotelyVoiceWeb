import HomeDownload from "@/components/sections/HomeDownload";
import HomeHero from "@/components/sections/HomeHero";
import HomeLanguage from "@/components/sections/HomeLanguage";
import HomeTranscription from "@/components/sections/HomeTranscription";
import HomeTyping from "@/components/sections/HomeTyping";
import HomeWork from "@/components/sections/HomeWork";
import HomeTestimonials from "@/components/sections/HomeTestimonials";

export default function Home() {
  return (
    <div>
      <HomeHero  />
      <HomeDownload />
      <HomeTyping />
      <HomeTranscription />
      <HomeWork />
      <HomeLanguage />
      <HomeTestimonials />
    </div>
  );
}
