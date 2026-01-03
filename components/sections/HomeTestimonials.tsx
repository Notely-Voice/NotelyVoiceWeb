"use client";

import { testimonialData } from "@/contents/homeData";
import { icons } from "@/lib";
import Image from "next/image";
import { useState } from "react";
import SectionIntro from "../layouts/SectionIntro";
import { useResponsive } from "@/hooks/useResponsive";

const HomeTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenSize = useResponsive();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };

  const getVisibleIndices = () => {
    const indices = [];
    const total = testimonialData.length;
    
    // Create a carousel that shows 5 images: 2 on left, 1 center, 2 on right
    for (let i = -2; i <= 2; i++) {
      indices.push((currentIndex + i + total) % total);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();
  const currentTestimonial = testimonialData[currentIndex];

  // Dynamic offset based on screen size
  const getOffset = (position: number) => {
    const offsetMap: Record<string, number> = {
      // xs: 80,
      sm: 80,
      md: 90,
      lg: 120,
      xl: 150,
    };
    return (position - 2) * (offsetMap[screenSize] || 150);
  };

  return (
    <div className="pt-3.5 px-[36px] flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[var(--blueBg)] pt-12 xl:pt-14 pb-12 lg:pb-[50px] pl-10 lg:pl-12 xl:pl-20 pr-10 rounded-[40px] flex flex-col justify-center z-20 relative">
        
        {/* Heading */}
        <div className="flex flex-col justify-center items-center">
          <SectionIntro
            heading="Trusted by Pros"
            text={`(if "accuracy" is implied)`}
            headingStyle="text-white text-[48px] lg:text-[64px] xl:text-[60px]! leading-[100%] max-w-full tracking-[-3%] mb-5!"
            textStyle="text-white text-lg lg:text-2xl italic font-medium font-varien leading-[100%]! text-center max-w-full mb-0!"
            className="text-center"
          />
        </div>

        {/* Carousel Section */}
        <div className="flex flex-col items-center justify-center w-full">
          
          {/* Images Carousel */}
          <div className="relative w-full flex justify-center items-center h-[280px] lg:h-[300px]">
            {/* Left pointer button */}
            <button
              onClick={handlePrev}
              className="absolute -left-6 md:-left-0 md:left-0 xl:left-10 z-40 p-2 hover:scale-110 transition-transform duration-200 flex-shrink-0 mt-20"
              aria-label="Previous testimonial"
            >
              <Image
                src={icons.left_pointer}
                alt="Previous"
                width={60}
                height={60}
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
            </button>

            {/* Images Container */}
            <div className="relative w-full flex justify-center items-center">
              {visibleIndices.map((index, position) => {
                const isCenter = position === 2;
                const offset = getOffset(position);

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 ease-in-out flex flex-col items-center`}
                    style={{
                      transform: `translateX(${offset}px) scale(${
                        isCenter ? 1.2 : 0.85
                      })`,
                      zIndex: isCenter ? 30 : 20 - Math.abs(position - 2) * 5,
                      opacity: isCenter ? 1 : 0.9,
                    }}
                  >
                    <div
                      className={`relative rounded-full transition-all duration-500 ${
                        isCenter
                          ? "w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 border-6 md:border-8 xl:border-10 border-white"
                          : "w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 border-6 md:border-8 xl:border-10 border-[var(--blueBg)]"
                      }`}
                    >
                      <Image
                        src={testimonialData[index].image}
                        alt={testimonialData[index].name}
                        fill
                        className="rounded-full object-cover"
                        priority={isCenter}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right pointer button */}
            <button
              onClick={handleNext}
              className="absolute -right-6 md:-right-0 md:right-0 xl:right-10 z-40 p-2 hover:scale-110 transition-transform duration-200 flex-shrink-0 mt-20"
              aria-label="Next testimonial"
            >
              <Image
                src={icons.right_pointer}
                alt="Next"
                width={60}
                height={60}
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="w-full max-w-[700px] bg-[#F0FEFF] border-4 border-black rounded-[32px] py-6 px-8 lg:py-10 lg:px-12 flex flex-col gap-6 items-center text-center transition-all duration-500">
            <div>
              <p className="text-black text-xl lg:text-2xl font-bold leading-[160%] mb-4">
                {currentTestimonial.comment}
              </p>
              <h3 className="text-black text-xl lg:text-3xl font-black font-satoshi">
                {currentTestimonial.name}, {currentTestimonial.role}
              </h3>
              {/*<p className="text-[#666666] text-sm lg:text-base font-medium">*/}
              {/*  {currentTestimonial.role}*/}
              {/*</p>*/}
            </div>
          </div>

          {/* Carousel Indicators */}
          {/*<div className="flex gap-2 justify-center items-center">*/}
          {/*  {testimonialData.map((_, index) => (*/}
          {/*    <button*/}
          {/*      key={index}*/}
          {/*      onClick={() => setCurrentIndex(index)}*/}
          {/*      className={`h-2 rounded-full transition-all duration-300 ${*/}
          {/*        index === currentIndex*/}
          {/*          ? "w-8 bg-white"*/}
          {/*          : "w-2 bg-white/40 hover:bg-white/60"*/}
          {/*      }`}*/}
          {/*      aria-label={`Go to testimonial ${index + 1}`}*/}
          {/*    />*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
