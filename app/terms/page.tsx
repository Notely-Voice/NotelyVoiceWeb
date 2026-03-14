import TermsHero from "@/components/sections/TermsHero";
import TermsContent from "@/components/sections/TermsContent";

function Terms() {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-[70px]">
      <TermsHero />
      <TermsContent />
    </div>
  );
}

export default Terms;
