import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";

function Privacy() {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-[70px]">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}

export default Privacy;
