import React from "react";

const Testimonials = () => {
  return (
    <div className="my-6 font-[sans-serif] mt-20">
      <div className="mb- text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold">Testimonials</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <p className="text-sm text-center text-[#333] leading-relaxed">
            Working with this interior design team completely transformed our
            living space. Their attention to detail, creative ideas, and
            understanding of our style preferences made the whole process smooth
            and enjoyable. The end result exceeded our expectations, blending
            functionality with beautiful aesthetics. Highly recommend their
            services to anyone looking to refresh or redesign their home!.
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8">
            <img
              src="https://readymadeui.com/profile_2.webp"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 text-left">
              <p className="text-sm font-semibold">Arjun S</p>
              <p className="text-xs text-gray-400">arjun.s1990@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <p className="text-sm text-center text-[#333] leading-relaxed">
            The team did an amazing job redesigning our kitchen and bedrooms.
            They optimized the space perfectly, balancing style and
            practicality. The new kitchen layout is not only beautiful but also
            incredibly functional, and the bedroom designs create a cozy,
            relaxing atmosphere. Their expertise really brought our vision to
            life!
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8">
            <img
              src="https://readymadeui.com/profile_3.webp"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 text-left">
              <p className="text-sm font-semibold">
                Vikram Joshi, Homeowner, Bangalore
              </p>
              <p className="text-xs text-gray-400">vikram.joshi.s@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <p className="text-sm text-center text-[#333] leading-relaxed">
            The Homaloid team provided exceptional interior solutions that
            transformed our kitchen, living area, office, and more. Their
            attention to detail and understanding of our needs resulted in
            spaces that are both beautiful and functional. The process was
            smooth, and the outcome exceeded our expectations
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8">
            <img
              src="https://readymadeui.com/profile_4.webp"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 text-left">
              <p className="text-sm font-semibold">
                Ananya Desai, Working Professional
              </p>
              <p className="text-xs text-gray-400">ananyadesai009@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
