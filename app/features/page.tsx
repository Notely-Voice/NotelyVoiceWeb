import CreateNotes from "@/components/sections/CreateNotes";
import FeaturesHero from "@/components/sections/FeaturesHero";
import TextEdit from "@/components/sections/TextEdit";
import TranscribeAudio from "@/components/sections/TranscribeAudio";

function Features() {
  return (
    <div className="bg-white flex flex-col gap-[70px]">
      <FeaturesHero />
      <CreateNotes />
      <TextEdit />
      <TranscribeAudio />
    </div>
  );
}

export default Features;