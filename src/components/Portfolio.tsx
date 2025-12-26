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

  // Cards stick just below navbar: 116px navbar + 20px gap
  return (
    <div
      ref={container}
      className="h-[550px] flex items-start justify-center sticky z-30"
      style={{ top: `calc(136px + ${i * 30}px)` }}
    >
      <motion.div
        style={{ scale }}
        className={`relative flex flex-col w-full max-w-[1600px] h-[500px] rounded-3xl origin-top overflow-hidden shadow-2xl ${getCardBg(card.type)}`}
      >
        {/* Teal overlay for teal cards */}
        {card.type === "teal" && (
          <div className="absolute inset-0 z-0 bg-teal-300/10 pointer-events-none" />
        )}
        
        <div className="flex flex-col lg:flex-row h-full w-full">
          {/* Background Image for blue/dark cards */}
          {card.backgroundImage && (
            <img
              src={card.backgroundImage}
              alt="Card Background"
              className="absolute inset-0 z-0 w-full h-full object-fill pointer-events-none scale-[1.15]"
            />
          )}

          {/* Content Section */}
          <div className="w-full lg:w-[60%] p-8 lg:p-[40px] xl:p-[60px] flex flex-col justify-center items-start gap-7 order-2 lg:order-1 relative z-10">
            <div className="flex flex-col justify-start items-start gap-7">
              <div className="px-8 py-1.5 bg-sky-700/90 backdrop-blur-sm rounded-full inline-flex justify-center items-center gap-2.5 overflow-hidden">
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
            <div className="mt-4 px-6 py-3 bg-[#00BFD2] text-white rounded-full flex flex-col justify-start items-start gap-2.5 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-lg">
              <Link href={`/portfolio/${card.id}`} className="inline-flex justify-start items-center gap-2.5">
                <div className="text-center justify-center text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                  View details
                </div>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[40%] h-48 lg:h-auto relative overflow-hidden order-1 lg:order-2 bg-stone-100 dark:bg-stone-800">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
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


