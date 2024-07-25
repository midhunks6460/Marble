import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroImageProps {
  activeSlide: string;
  heroImageChanging: boolean;
}

const HeroImage: React.FC<HeroImageProps> = ({
  activeSlide,
  heroImageChanging,
}) => {
  const [displayedSlide, setDisplayedSlide] = useState(activeSlide);

  useEffect(() => {
    if (!heroImageChanging) {
      setDisplayedSlide(activeSlide);
    }
  }, [activeSlide, heroImageChanging]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-2xl shadow transform transition-transform duration-500 hover:scale-105 hover:rotate-3 cursor-pointer">
      <Image
        src={displayedSlide}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
};

export default HeroImage;
