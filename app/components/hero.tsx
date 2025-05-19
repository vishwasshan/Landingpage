"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const cardItems = [
    "/icon1.png",
    "/icon2.png",
    "/icon3.png",
    "/icon4.png",
    "/icon4.png",
    "/icon5.png",
    "/icon6.png",
    "/icon7.png",
    "/icon8.png",
  ];

  return (
    <div className="font-sans text-[#fff]">
      <div className="grid lg:grid-cols-2 items-center gap-y-6 h-[65vh] bg-gradient-to-l from-transparent to-black">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
          <h2 className="lg:text-5xl text-3xl font-bold mb-4 lg:!leading-[56px]">
            Revolutionizing Interior Marketing
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Connect with World Class Interior Designers & Personalize Your
            Interior Designs. Move in within 45 days! Homes for every style,
            superior finishes, trendy designs & quality at affordable prices.
          </p>
          <button
            type="button"
            className="bg-transparent hover:bg-blue-600 border-2 border-white mt-10 transition-all text-white font-bold text-sm rounded-md px-6 py-2.5"
          >
            Get Started
          </button>
        </div>
        <div className="lg:h-[440px] flex items-center">
          <img
            width="100%"
            src="/image.webp"
            className="w-full h-full object-cover"
            alt="Tech Startup"
          />
        </div>
      </div>

      <div className="overflow-hidden w-full my-12">
        <Marquee>
          {cardItems.concat(cardItems).map((item, index) => (
            <div style={{ margin: "0  60px" }} key={index}>
              <img width="80px" height="80px" src={item} alt={item} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
