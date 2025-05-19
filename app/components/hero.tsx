"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import LeadForm from "./LeadForm";

const Hero = () => {
  const cardItems = [
    "/icon1.png",
    "/icon2.png",
    "/icon3.png",
    "/icon4.png",
    "/icon5.png",
    "/icon6.png",
    "/icon7.png",
    "/icon8.png",
  ];

  return (
    <div className="font-sans text-white">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-6 min-h-[65vh] bg-gradient-to-l from-transparent to-black p-4 sm:p-6 lg:p-12 relative">
        {/* Left - Text Section */}
        <div className="max-lg:order-1 max-lg:text-center z-10">
          <h2 className="lg:text-5xl text-3xl font-bold mb-4 leading-tight lg:leading-[56px]">
            Revolutionizing Interior Marketing
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            Connect with World Class Interior Designers & Personalize Your
            Interior Designs. Move in within 45 days! Homes for every style,
            superior finishes, trendy designs & quality at affordable prices.
          </p>
          <button
            type="button"
            className="bg-transparent hover:bg-blue-600 border-2 border-white mt-8 transition-all text-white font-semibold text-sm rounded-md px-5 py-2.5 mx-auto max-lg:block"
          >
            Get Started
          </button>
        </div>

        {/* Right - Image with Form Overlay */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full flex justify-center items-center rounded-xl overflow-hidden">
          <img
            src="/image.webp"
            alt="Interior"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex justify-center items-center p-4">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden w-full my-8 sm:my-12">
        <Marquee gradient={false} speed={50}>
          {cardItems.concat(cardItems).map((item, index) => (
            <div
              key={index}
              className="mx-4 sm:mx-10"
              style={{ minWidth: 80, minHeight: 80 }}
            >
              <img
                src={item}
                alt={`logo-${index}`}
                width="80"
                height="80"
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
