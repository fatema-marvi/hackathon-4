"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DressStyle = () => {
  return (
    <div className="w-[90%] max-w-[1440px] mx-auto mt-12 bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-14">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2] my-8">
          BROWSE DRESS BY
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Categories */}
        {[
          { name: "Casual", src: "/dressstyle/casual.jpg", link: "/components/casual" },
          { name: "Party", src: "/dressstyle/party.png", link: "/components/party" },
          { name: "Formal", src: "/dressstyle/formal.png", link: "/components/formal" },
          { name: "Gym", src: "/dressstyle/gym.png", link: "/components/gym" },
        ].map((item, index) => (
          <div key={index} className="relative w-full h-[300px] group cursor-pointer overflow-hidden rounded-lg">
            <Link href={item.link} className="block w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`${item.name} Dress`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-lg"
                  priority={index === 0} // Load first image as priority
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg font-semibold px-3 py-1 rounded-md">
                  {item.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DressStyle;
