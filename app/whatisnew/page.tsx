import WhatsNewHero from "@/components/sections/WhatsNewHero";
import WhatsNewContent from "@/components/sections/WhatsNewContent";

function WhatsNew() {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-[70px]">
      <WhatsNewHero />
      <WhatsNewContent />
    </div>
  );
}

export default WhatsNew;
