"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { getHomeFeaturedPortfolios, PortfolioItem } from "@/lib/api";

const cardTypes = ["blue", "dark", "teal", "white"];

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

const getCardBgColor = (type: string) => {
  switch (type) {
    case "blue": return "#0064AC";
    case "dark": return "#0e2a47";
    case "teal": return "#ffffff";
    case "white": return "#ffffff";
    default: return "#0064AC";
  }
};

const getBackgroundImage = (type: string) => {
  switch (type) {
    case "blue": return "/portfolio-card-2.png";
    case "dark": return "/prtfolio-card-3.png";
    default: return null;
  }
};

interface StickyCardProps {
  i: number;
  card: PortfolioItem;
  cardType: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StickyCard = ({ i, card, cardType, progress, range, targetScale }: StickyCardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const backgroundImage = getBackgroundImage(cardType);
  const cardImage = card.home_featured_image_url || card.card_image_url;

  return (
    <div
      className="min-h-[520px] md:min-h-[470px] flex items-start justify-center sticky z-30"
      style={{ top: `calc(80px + ${i * 20}px)` }}
    >
      {/* Mobile Card Layout */}
      <motion.div
        style={{ scale, background: getCardBgColor(cardType) }}
        className="md:hidden relative w-full rounded-2xl overflow-hidden shadow-[0px_4px_23px_rgba(0,0,0,0.16)]"
      >
        <div className="w-full h-48 bg-stone-100 overflow-hidden relative z-[2]">
          {cardImage && (
            <img src={cardImage} alt={card.title} className="w-full h-full object-cover object-top" />
          )}
        </div>
        <div className="p-6 flex flex-col gap-5 relative">
          {cardType === "teal" && (
            <div className="absolute inset-0 z-0 bg-[#00BFD2]/10 pointer-events-none" />
          )}
          <div className="px-6 py-1.5 bg-sky-700/90 rounded-full inline-flex self-start relative z-[1]">
            <span className="text-white text-sm font-medium font-['Inter']">{card.tag}</span>
          </div>
          <h3 className={`${getTextColor(cardType)} text-2xl font-semibold font-['Inter'] leading-tight relative z-[1]`}>
            {card.title}
          </h3>
          <p className={`${getDescColor(cardType)} text-sm font-normal font-['Inter'] leading-6 relative z-[1]`}>
            {card.short_description}
          </p>
          <Link href={`/portfolio/${card.slug}`} className="px-5 py-3 bg-[#00BFD2] rounded-full inline-flex self-start hover:opacity-90 transition-opacity relative z-[1]">
            <span className="text-white text-base font-bold font-['Inter'] uppercase tracking-wide">View details</span>
          </Link>
        </div>
      </motion.div>

      {/* Desktop Card Layout */}
      <motion.div
        style={{ scale }}
        className={`hidden md:block relative w-full max-w-[1600px] h-[450px] rounded-2xl origin-top overflow-hidden shadow-[0px_4px_23px_rgba(0,0,0,0.16)] ${getCardBg(cardType)}`}
      >
        {cardType === "teal" && (
          <div className="absolute left-0 top-0 w-[64%] h-full z-[1] bg-[#00BFD2]/10 pointer-events-none" />
        )}
        {backgroundImage && (
          <img src={backgroundImage} alt="Card Background" className="absolute inset-0 z-0 w-full h-full object-fill pointer-events-none scale-[1.15]" />
        )}
        {!backgroundImage && (
          <div className="absolute inset-0 z-0" style={{ background: getCardBgColor(cardType) }} />
        )}
        <div className="absolute left-0 top-0 w-[64%] h-full p-8 lg:p-[40px] xl:p-[60px] flex flex-col justify-center items-start gap-6 lg:gap-7 z-10">
          <div className="px-8 py-1.5 bg-sky-700/90 backdrop-blur-sm rounded-full inline-flex">
            <span className="text-white text-base font-medium font-['Inter']">{card.tag}</span>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className={`${getTextColor(cardType)} text-3xl lg:text-4xl xl:text-[46px] font-semibold font-['Inter'] leading-tight`}>
              {card.title}
            </h3>
            <p className={`${getDescColor(cardType)} text-base font-normal font-['Inter'] leading-6 max-w-[600px]`}>
              {card.short_description}
            </p>
          </div>
          <Link href={`/portfolio/${card.slug}`} className="px-6 py-4 bg-[#00BFD2] rounded-full inline-flex hover:opacity-90 transition-opacity">
            <span className="text-white text-lg font-bold font-['Inter'] uppercase tracking-wide">View details</span>
          </Link>
        </div>
        <div className="absolute right-0 top-0 w-[36%] h-full bg-stone-100 overflow-hidden">
          {cardImage && <img src={cardImage} alt={card.title} className="w-full h-full object-cover" />}
        </div>
      </motion.div>
    </div>
  );
};

const PortfolioMain = ({ portfolios }: { portfolios: PortfolioItem[] }) => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative px-4 sm:px-6 lg:px-8 pb-40">
      {portfolios.map((card, i) => {
        const targetScale = 1 - (portfolios.length - i) * 0.05;
        const cardType = cardTypes[i % cardTypes.length];
        return (
          <StickyCard
            key={card.id}
            i={i}
            card={card}
            cardType={cardType}
            progress={scrollYProgress}
            range={[i * 0.2, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default function PortfolioContent() {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolios() {
      try {
        const data = await getHomeFeaturedPortfolios();
        setPortfolios(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPortfolios();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">Loading portfolios...</div>
        </div>
      </section>
    );
  }

  if (portfolios.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white relative">
      <div className="pt-12 pb-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
          <div className="text-[#00BFD2] text-xl font-medium font-['Poppins']">Work We're Proud Of</div>
          <div className="text-[#082f49] text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] leading-tight">
            Transforming Ideas Into <br /> Digital Success
          </div>
        </div>
      </div>
      <PortfolioMain portfolios={portfolios} />
    </section>
  );
}
