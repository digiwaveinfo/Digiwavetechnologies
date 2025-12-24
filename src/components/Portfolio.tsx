"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Card data for easier mapping
const portfolioCards = [
  {
    id: 1,
    type: "white",
    title: "Carawan Chain Logistics",
    description: "SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.",
    tag: "Website",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920",
  },
  {
    id: 2,
    type: "blue",
    backgroundImage: "/portfolio-card-2.png",
    title: "Carawan Chain Logistics",
    description: "SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.",
    tag: "Website",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920",
  },
  {
    id: 3,
    type: "dark",
    backgroundImage: "/prtfolio-card-3.png",
    title: "Carawan Chain Logistics",
    description: "SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.",
    tag: "Website",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920",
  },
  {
    id: 4,
    type: "teal",
    title: "Carawan Chain Logistics",
    description: "SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.",
    tag: "Website",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/78ae07a0b6281ff620c3f309aa9274c820a2e2dc?width=988",
  },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getTextColor = (type: string) => {
    return type === "white" || type === "teal" ? "text-slate-900" : "text-white";
  };

  const getDescColor = (type: string) => {
    return type === "white" || type === "teal" ? "text-zinc-600" : "text-white";
  };

  const getCardBg = (type: string) => {
    switch (type) {
      case "white": return "bg-white";
      case "teal": return "bg-teal-300/10";
      default: return "";
    }
  };

  // Calculate card position and z-index based on its position relative to active
  const getCardStyle = (index: number) => {
    const totalCards = portfolioCards.length;
    const position = (index - activeIndex + totalCards) % totalCards;

    // Only show the active card and one behind it
    if (position > 1) {
      return {
        transform: `translateY(50px) scale(0.92)`,
        opacity: 0,
        zIndex: 0,
        visibility: 'hidden' as const,
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }

    // Position 0 = front (active), 1 = 1st behind
    const translateY = position * 25;
    const scale = 1 - position * 0.03;
    const opacity = position === 0 ? 1 : 0; // Only show active card
    const zIndex = totalCards - position;

    return {
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      visibility: 'visible' as const,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white flex flex-col justify-start items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col items-center gap-12 w-full max-w-[1800px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-[#00BFD2] text-xl font-medium font-['Poppins']">
            Work We're Proud Of
          </div>
          <div className="text-[#082f49] text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] leading-tight">
            Transforming Ideas Into <br /> Digital Success
          </div>
        </div>

        {/* Stacked Cards Container */}
        <div className="w-full relative" style={{ minHeight: '500px', marginBottom: '200px' }}>
          {portfolioCards.map((card, index) => (
            <div
              key={card.id}
              style={getCardStyle(index)}
              className={`w-full absolute top-0 left-0 ${getCardBg(card.type)} rounded-2xl shadow-[0px_4px_23px_0px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col lg:flex-row cursor-pointer`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Background Image for blue/dark cards */}
              {card.backgroundImage && (
                <img
                  src={card.backgroundImage}
                  alt="Card Background"
                  className="absolute inset-0 z-0 w-full h-full object-fill pointer-events-none scale-[1.15]"
                />
              )}

              {/* Content Section */}
              <div className="w-full lg:w-[60%] p-8 lg:p-[60px] flex flex-col justify-center items-start gap-7 order-2 lg:order-1 relative z-10">
                <div className="flex flex-col justify-start items-start gap-7">
                  <div className="px-12 py-1.5 bg-sky-700 rounded-[39px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                    <div className="text-white text-base font-medium font-['Inter'] leading-6">
                      {card.tag}
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-3.5">
                    <div className={`${getTextColor(card.type)} text-3xl md:text-4xl lg:text-5xl font-semibold font-['Inter'] leading-tight`}>
                      {card.title}
                    </div>
                    <div className={`${getDescColor(card.type)} text-base font-normal font-['Inter'] leading-6 max-w-[600px]`}>
                      {card.description}
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-[#00BFD2] text-white rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                  <Link href="/portfolio" className="inline-flex justify-start items-center gap-2.5">
                    <div className="text-center justify-center text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                      View details
                    </div>
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-[40%] h-64 lg:h-auto relative overflow-hidden order-1 lg:order-2 bg-stone-300">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
