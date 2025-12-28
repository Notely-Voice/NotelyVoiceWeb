import { icons } from "@/lib"
import Image from "next/image"

const CreateToolCanvas = () => {
  return (
    <div  className="py-4 px-4 border-4 border-dashed border-[#3E45FB] bg-white rounded-4xl min-h-[180px] flex flex-col justify-between gap-6 w-[260px]">
      <p className="font-medium text-lg text-black">Life and inspiration</p>

      <div className="flex justify-between items-end">
        <div className="bg-black rounded-full text-white py-2 px-6 text-base font-bold w-fit">Note</div>
        <Image src={icons.plus_circle} alt="a plus inside a circle icon" width={50} />
      </div>
    </div>
  )
}

export default CreateToolCanvas