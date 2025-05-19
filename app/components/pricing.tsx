import React from "react";

// Reusable check icon component
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    className="mr-4 fill-green-500"
    viewBox="0 0 24 24"
  >
    <path
      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
      data-original="#000000"
    />
  </svg>
);

const plans = [
  {
    name: "Kitchen",
    price: "Free",
    subtitle: "Basic Features",
    scale: "lg:scale-95",
    includes: [
      "Design concepts featuring modern and traditional kitchen layouts",
      "Selection of cabinets, countertops, and fixtures",
      "Lighting plans tailored for kitchen functionality",
      "Optimized storage solutions and appliance placement",
      "Color schemes and material recommendations",
    ],
  },
  {
    name: "Room",
    price: "Free",
    subtitle: "Standard Features",
    scale: "lg:scale-95",
    includes: [
      "Furniture arrangement for comfort and space efficiency",
      "Wall treatments including paint, wallpaper, and textures",
      "Lighting designs to enhance mood and utility",
      "Flooring options suitable for different room types",
      "Decor and accessory suggestions for personalization",
    ],
  },
  {
    name: "Living Area",
    price: "Free",
    subtitle: "Advanced Features",
    scale: "lg:scale-95",
    includes: [
      "Seating layouts promoting social interaction and comfort",
      "Lighting design for ambiance and functionality",
      "Incorporation of multimedia and entertainment setups",
      "Use of textiles and rugs for warmth and style",
      "Decorative elements and artwork placement advice",
    ],
  },
];


const Pricing = () => {
  return (
    <section className="font-sans text-[#333] relative bg-gradient-to-l from-transparent to-black">
      <div className="max-w-6xl mx-auto py-10 px-4 relative z-20">
        <header className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Interior Design Section
          </h2>
        </header>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
          {plans.map(({ name, price, subtitle, scale, includes }) => (
            <article
              key={name}
              className={`bg-white rounded shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] p-6 ${scale}`}
            >
              <div className="flex items-start">
                <h3 className="text-lg font-extrabold border-b-2 border-orange-500 pb-1">
                  {name}
                </h3>
    
              </div>

              <div className="mt-10">
                <h4 className="text-base font-bold mb-4">Includes</h4>
                <ul className="space-y-4">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center text-sm">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
