import { images } from "@/lib";
import Image from "next/image";
import { useEffect, useState } from "react";

const SpeakBox = ({ minWidth = "min-w-[260px]" }: { minWidth?: string }) => {
  const speakingImages = [
    images.speak1,
    images.speak2,
    images.speak3,
    images.speak4,
    images.speak5,
    images.speak_full
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % speakingImages.length);
    }, 150); // Cycles through images every 150ms for smooth wave animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${minWidth}`}>
      <Image src={speakingImages[currentImageIndex]} alt="Speaking" />
    </div>
  );
};

export default SpeakBox;
