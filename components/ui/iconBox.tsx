import Image from "next/image"

const IconBox = ({icon, alt, width, height}: {icon: string, alt?: string, width: number, height: number}) => {
  return (
    <div className="py-1.5 px-1.5 rounded-xl border-2 border-dashed border-[#3E45FB] bg-white">
      <Image src={icon} alt={alt || "icon"} width={width} height={height} />
    </div>
  )
}

export default IconBox;