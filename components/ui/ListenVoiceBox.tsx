import Voice from "./Voice";

const ListenVoiceBox = () => {
  return (
    <div className="py-3 px-4 border-4 border-dashed border-[#3E45FB] bg-white rounded-4xl min-h-[180px] max-h-[180px] xl:min-h-[200px] flex flex-col justify-between xl:gap-3 lg:min-w-[220px] xl:min-w-[260px]">
      <div className="flex justify-center pt-12 pb-6">
        <Voice color="var(--blueBg)" barWidth={10} barHeight="h-12" />
      </div>

      <p className="lg:mt-3 mb-2 text-center text-xl text-[var(--blueBg)] font-medium">
        Transcribing
      </p>
    </div>
  );
};

export default ListenVoiceBox;
