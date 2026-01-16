import FAQHero from "@/components/sections/FAQHero"
import StartSpeaking from "@/components/sections/StartSpeaking"

function FAQ() {
  return (
    <div className="bg-[#F0FEFF] flex flex-col gap-10 sm:gap-[70px]"> 
      <FAQHero />

      <StartSpeaking
        bgColor="white"
        borderColor="black"
        titleColor="black"
        textColor="black"
        isLineBlack
        listeningTextColor="white"
        transcribedTextColor="white"
        voiceIconColor="blue"
        checkIconColor="blue"
      />
    </div>
  )
}

export default FAQ