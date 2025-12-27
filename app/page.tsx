import HomeDownload from "@/components/sections/HomeDownload";
import HomeHero from "@/components/sections/HomeHero";
import HomeTyping from "@/components/sections/HomeTyping";

export default function Home() {
  return (
    <div>
      <HomeHero  />
      <HomeDownload />
      <HomeTyping />
    </div>
  );
}
