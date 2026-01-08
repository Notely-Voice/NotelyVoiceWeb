import { icons } from "@/lib"
import Image from "next/image"

const CreateToolCanvas = () => {
  return (
    <div className="py-2 sm:py-4 px-3 sm:px-5 border-2 sm:border-4 border-dashed border-[#3E45FB] bg-white rounded-2xl sm:rounded-4xl min-h-[90px] sm:min-h-[180px] flex flex-col justify-between gap-3 sm:gap-6 w-[135px] sm:w-[270px]">
      <p className="font-medium text-xs sm:text-lg text-black">Life and inspiration</p>

      <div className="flex justify-between items-end">
        <div className="bg-black rounded-full text-white py-1 sm:py-1.5 px-3 sm:px-5 text-xs sm:text-base font-bold w-fit">Note</div>
        <Image src={icons.plus_circle} alt="a plus inside a circle icon" width={40} className="w-5 sm:w-10" />
      </div>
    </div>
  )
}

export default CreateToolCanvas