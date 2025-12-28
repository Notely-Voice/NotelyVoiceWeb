import Voice from "./Voice"

const HomeVoiceBox = ({ className }: { className?: string }) => {
  return (
    <div className="p-4 rounded-[50px] border-2 border-dashed border-white h-fit">
      <div className={`border-[5px] border-black min-h-[158px] bg-[#F0FEFF] py-8 px-12 rounded-[40px] flex items-center justify-center ${className}`}>
        <Voice color="var(--blueBg)" barWidth={9} barHeight="h-14" />
      </div>
    </div>
  )
}

export default HomeVoiceBox