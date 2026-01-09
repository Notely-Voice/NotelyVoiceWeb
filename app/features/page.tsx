import CreateNotes from "@/components/sections/CreateNotes";
import FeaturesHero from "@/components/sections/FeaturesHero";

function Features() {
  return (
    <div className="bg-white flex flex-col gap-[70px]">
      <FeaturesHero />
      <CreateNotes />
    </div>
  );
}

export default Features;