"use client";

import { useState } from "react";

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const industries = [
    {
      name: "Logistics",
      description: "AI-driven route optimization and real-time fleet tracking.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/e42a294a78c59eb6184b086742f6edfdecfc135d?width=48"
    },
    {
      name: "Healthcare (MedTech)",
      description: "Secure, HIPAA-compliant patient portals and diagnostic AI.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d56933f47aa9a525bb50096ad75795eb77057689?width=48"
    },
    {
      name: "Finance (FinTech)",
      description: "Secure payment gateways and fraud detection systems.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2ef9d526b251d1c94b5cf022738a5fc94e2fb93e?width=48"
    },
    {
      name: "E-Commerce",
      description: "Personalized recommendation engines and inventory automation.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/580a40ccb0eba40dae4e653e604a6993a82f8db8?width=48"
    },
    {
      name: "Consulting Providers",
      description: "Data-driven dashboards to visualize client ROI.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a15cd06fc09b1c15e7fd8228fb8a6d89bdaa63a6?width=48"
    }
  ];

  return (
    <section className="relative bg-[#00114C] py-12 lg:py-20 shadow-[0_4px_23px_rgba(0,0,0,0.16)] overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        <div className="w-full lg:flex-[0_0_551px] text-center lg:text-left">
          <h3 className="text-[#00BFD2] font-poppins font-medium text-xl mb-4">Services</h3>
          <h2 className="text-white font-poppins font-bold text-3xl lg:text-[40px] leading-tight">
            Solving IT challenges in every industry, every day.
          </h2>
        </div>
        {/* Stacked on mobile, 2 columns on desktop */}
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-7 w-full lg:flex-1">
          <div className="flex flex-col gap-3 lg:gap-6 lg:flex-1">
            {industries.slice(0, 3).map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3.5 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-[38px] h-[38px] bg-[rgba(0,191,210,0.09)] rounded flex items-center justify-center flex-shrink-0">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-black font-inter font-medium text-sm transition-all duration-300">
                  {hoveredIndex === index ? `${industry.name}: ${industry.description}` : industry.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 lg:gap-6 lg:flex-1">
            {industries.slice(3).map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3.5 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index + 3)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-[38px] h-[38px] bg-[rgba(0,191,210,0.09)] rounded flex items-center justify-center flex-shrink-0">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-black font-inter font-medium text-sm transition-all duration-300">
                  {hoveredIndex === index + 3 ? `${industry.name}: ${industry.description}` : industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}