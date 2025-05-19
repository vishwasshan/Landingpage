import React from "react";

const Content1 = () => {
  return (
    <div className="bg-white sm:px-6 p-4 font-[sans-serif]">
      <div className="max-w-2xl mx-auto">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Explore Innovative Interior Solutions
          </h2>
          <p className="text-gray-500 text-sm mt-4">
            At Homaloid, we are constantly exploring the latest advancements in
            interior design and technology to bring our clients innovative
            solutions that enhance their spaces. From smart home automation and
            sustainable materials to AI-driven design and ergonomic workspaces,
            our team of experts is dedicated to staying ahead of the curve and
            delivering the creativity and expertise your space needs to stand
            out. Discover how [Your Company Name] can help you transform
            interiors and create functional, aesthetic environments that elevate
            your lifestyle or business.
          </p>
        </div>
        <hr className="my-10" />
        <div className="grid gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Smart Home Automation
            </h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Integrate cutting-edge technology into your space with automated
                lighting, climate control, and security solutions, creating a
                seamless and efficient living or working environment.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Sustainable Design
            </h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Embrace eco-friendly materials and energy-efficient solutions to
                create interiors that are not only beautiful but also
                environmentally responsible.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Ergonomic & Adaptive Workspaces
            </h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Optimize productivity and well-being with intelligently designed
                office spaces that promote comfort, flexibility, and efficiency.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Bespoke Luxury Interiors
            </h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Experience the art of personalized luxury with custom furniture,
                premium finishes, and meticulous attention to detail that
                reflect your unique taste and lifestyle. Ready to redefine your
                space? Let [Your Company Name] help you unlock new design
                possibilities and bring your vision to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
