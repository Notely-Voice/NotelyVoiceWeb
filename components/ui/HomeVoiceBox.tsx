import Voice from "./Voice"

const HomeVoiceBox = () => {
  return (
    <div className="p-4 rounded-[64px] border-2 border-dashed border-white h-fit">
      <div className="border-[5px] border-black min-h-[188px] bg-[#F0FEFF] py-8 px-16 rounded-[50px] flex items-center justify-center">
        <Voice color="var(--blueBg)" />
      </div>
    </div>
  )
}

export default HomeVoiceBox