"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import HeroImage from "@/components/HeroSection/HeroImage";
import Desc from "@/components/HeroSection/Desc";
import Snowfall from "react-snowfall";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [heroImageChanging, setHeroImageChanging] = useState(false);
  const slides = ["/marble.jpg", "/c1.jpg", "/c2.jpg", "/c3.jpg"];

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500">
      <Snowfall />
      <Navbar />
      <div className="grid grid-cols-2">
        <HeroImage
          activeSlide={slides[activeIndex]}
          heroImageChanging={heroImageChanging}
        />
        <Desc
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          slides={slides}
          setHeroImageChanging={setHeroImageChanging}
        />
      </div>
    </div>
  );
};

export default Page;
