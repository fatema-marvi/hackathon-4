"use client";
import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-auto text-black relative bg-[#F2F0F1] w-full lg:h-[663px] gap-4 px-4 sm:px-8 lg:px-12">
      
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col justify-start items-start gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-snug tracking-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-black/60 leading-relaxed">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        {/* Button */}
        <button className="bg-black text-white text-sm sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="relative lg:w-1/2 w-full h-[400px] lg:h-full">
        
        {/* Vector Image Positioned Above */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-12 z-10">
          <Image
            src="/vector.png"
            alt="Vector Image"
            width={104}
            height={104}
            className="object-contain"
          />
        </div>

        {/* Main Hero Image (Uses `fill` for responsiveness) */}
        <div className="relative w-full h-full">
          <Image
            src="/trendy-fashionable-couple-posing.jpg"
            alt="Hero Image"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="rounded-lg"
            priority // Ensures fast loading
          />
        </div>
      </div>
    </div>
  );
};
