"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactLenis } from "lenis/react";

// Card data
const portfolioCards = [
  {
    id: "estate-facility",
    type: "blue",
    backgroundImage: "/portfolio-card-2.png",
    title: "Carawan Chain Logistics",
    description: "SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.",
    tag: "Website",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920",
  },
  {
    id: "estate-facility-2",
    type: "dark",
    backgroundImage: "/prtfolio-card-3.png",
    title: "Carawan Chain Logistics",
    description: "SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.",
    tag: "Website",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920",
  },
  {
    id: "estate-facility-3",
    type: "teal",
    title: "Carawan Chain Logistics",
    description: "SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.",
    tag: "Website",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/78ae07a0b6281ff620c3f309aa9274c820a2e2dc?width=988",
  },
  {
    id: "estate-facility-4",
    type: "white",
    title: "Carawan Chain Logistics",
    description: "SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.",
    tag: "Website",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920",
  },
];

const getTextColor = (type: string) => {
  return type === "white" || type === "teal" ? "text-slate-900" : "text-white";
};

const getDescColor = (type: string) => {
  return type === "white" || type === "teal" ? "text-zinc-600" : "text-white";
};

const getCardBg = (type: string) => {
  switch (type) {
    case "white": return "bg-white";
    case "teal": return "bg-white";
    default: return "";
  }
};

interface StickyCardProps {
  i: number;
  card: typeof portfolioCards[0];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StickyCard = ({ i, card, progress, range, targetScale }: StickyCardProps) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  // Get background color based on card type
  const getCardBgColor = (type: string) => {
    switch (type) {
      case "blue": return "#0064AC";
      case "dark": return "#0e2a47";
      case "teal": return "#ffffff";
      case "white": return "#ffffff";
      default: return "#0064AC";
    }
  };

  // Cards stick just below navbar
  return (
    <div
      ref={container}
      className="min-h-[520px] md:min-h-[470px] flex items-start justify-center sticky z-30"
      style={{ top: `calc(80px + ${i * 20}px)` }}
    >
      {/* Mobile Card Layout */}
      <motion.div
        style={{ scale, background: getCardBgColor(card.type) }}
        className="md:hidden relative w-full rounded-2xl overflow-hidden shadow-[0px_4px_23px_rgba(0,0,0,0.16)]"
      >
        {/* Mobile Image - at top */}
        <div className="w-full h-48 bg-stone-100 overflow-hidden relative z-[2]">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Mobile Content */}
        <div className="p-6 flex flex-col gap-5 relative">
          {/* Teal overlay for teal cards - only on content area */}
          {card.type === "teal" && (
            <div className="absolute inset-0 z-0 bg-[#00BFD2]/10 pointer-events-none" />
          )}
          
          {/* Tag */}
          <div className="px-6 py-1.5 bg-sky-700/90 rounded-full inline-flex self-start relative z-[1]">
            <span className="text-white text-sm font-medium font-['Inter']">
              {card.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className={`${getTextColor(card.type)} text-2xl font-semibold font-['Inter'] leading-tight relative z-[1]`}>
            {card.title}
          </h3>

          {/* Description */}
          <p className={`${getDescColor(card.type)} text-sm font-normal font-['Inter'] leading-6 relative z-[1]`}>
            {card.description}
          </p>

          {/* Button */}
          <Link 
            href={`/portfolio/${card.id}`}
            className="px-5 py-3 bg-[#00BFD2] rounded-full inline-flex self-start hover:opacity-90 transition-opacity relative z-[1]"
          >
            <span className="text-white text-base font-bold font-['Inter'] uppercase tracking-wide">
              View details
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Desktop/Tablet Card Layout */}
      <motion.div
        style={{ scale }}
        className={`hidden md:block relative w-full max-w-[1600px] h-[450px] rounded-2xl origin-top overflow-hidden shadow-[0px_4px_23px_rgba(0,0,0,0.16)] ${getCardBg(card.type)}`}
      >
        {/* Teal overlay for teal cards - only on left content area */}
        {card.type === "teal" && (
          <div className="absolute left-0 top-0 w-[64%] h-full z-[1] bg-[#00BFD2]/10 pointer-events-none" />
        )}

        {/* Background Image for blue/dark cards */}
        {card.backgroundImage && (
          <img
            src={card.backgroundImage}
            alt="Card Background"
            className="absolute inset-0 z-0 w-full h-full object-fill pointer-events-none scale-[1.15]"
          />
        )}

        {/* Background color for cards without background image */}
        {!card.backgroundImage && (
          <div 
            className="absolute inset-0 z-0" 
            style={{ background: getCardBgColor(card.type) }}
          />
        )}

        {/* Content Section */}
        <div className="absolute left-0 top-0 w-[64%] h-full p-8 lg:p-[40px] xl:p-[60px] flex flex-col justify-center items-start gap-6 lg:gap-7 z-10">
          {/* Tag */}
          <div className="px-8 py-1.5 bg-sky-700/90 backdrop-blur-sm rounded-full inline-flex">
            <span className="text-white text-base font-medium font-['Inter']">
              {card.tag}
            </span>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-4">
            <h3 className={`${getTextColor(card.type)} text-3xl lg:text-4xl xl:text-[46px] font-semibold font-['Inter'] leading-tight`}>
              {card.title}
            </h3>
            <p className={`${getDescColor(card.type)} text-base font-normal font-['Inter'] leading-6 max-w-[600px]`}>
              {card.description}
            </p>
          </div>

          {/* Button */}
          <Link 
            href={`/portfolio/${card.id}`}
            className="px-6 py-4 bg-[#00BFD2] rounded-full inline-flex hover:opacity-90 transition-opacity"
          >
            <span className="text-white text-lg font-bold font-['Inter'] uppercase tracking-wide">
              View details
            </span>
          </Link>
        </div>

        {/* Image Section - positioned absolutely on right */}
        <div className="absolute right-0 top-0 w-[36%] h-full bg-stone-100 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function Portfolio() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <section className="w-full bg-white relative">
        {/* Header - scrolls normally with the page */}
        <div className="pt-12 pb-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
            <div className="text-[#00BFD2] text-xl font-medium font-['Poppins']">
              Work We're Proud Of
            </div>
            <div className="text-[#082f49] text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] leading-tight">
              Transforming Ideas Into <br /> Digital Success
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <main ref={container} className="relative px-4 sm:px-6 lg:px-8 pb-40">
          {portfolioCards.map((card, i) => {
            const targetScale = 1 - (portfolioCards.length - i) * 0.05;
            return (
              <StickyCard
                key={card.id}
                i={i}
                card={card}
                progress={scrollYProgress}
                range={[i * 0.2, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </main>
      </section>
    </ReactLenis>
  );
}


