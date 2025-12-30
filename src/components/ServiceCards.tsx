"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Link from "next/link";

// Colorful SVG Icons for each service
const AIIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="34" height="34" rx="4" fill="#E8F4FC"/>
    <circle cx="25" cy="20" r="6" fill="#4A90D9"/>
    <path d="M15 35C15 29.4772 19.4772 25 25 25C30.5228 25 35 29.4772 35 35" stroke="#4A90D9" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="37" cy="13" r="4" fill="#FFD93D"/>
    <path d="M37 8V10M37 16V18M32 13H34M40 13H42" stroke="#FFD93D" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="13" cy="37" r="3" fill="#FF6B6B"/>
    <circle cx="37" cy="37" r="3" fill="#4ECDC4"/>
  </svg>
);

const WebIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="8" width="40" height="30" rx="3" fill="#4A90D9"/>
    <rect x="5" y="8" width="40" height="8" fill="#2E5C8A"/>
    <circle cx="11" cy="12" r="2" fill="#FF6B6B"/>
    <circle cx="17" cy="12" r="2" fill="#FFD93D"/>
    <circle cx="23" cy="12" r="2" fill="#4ECDC4"/>
    <rect x="9" y="20" width="14" height="3" rx="1" fill="#E8F4FC"/>
    <rect x="9" y="26" width="20" height="2" rx="1" fill="#E8F4FC" fillOpacity="0.6"/>
    <rect x="9" y="31" width="16" height="2" rx="1" fill="#E8F4FC" fillOpacity="0.6"/>
    <rect x="32" y="20" width="9" height="13" rx="2" fill="#FFD93D"/>
    <rect x="8" y="38" width="34" height="6" rx="2" fill="#E0E0E0"/>
    <rect x="20" y="41" width="10" height="2" rx="1" fill="#BDBDBD"/>
  </svg>
);

const MobileIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="4" width="22" height="42" rx="4" fill="#2E5C8A"/>
    <rect x="16" y="10" width="18" height="28" rx="2" fill="#E8F4FC"/>
    <rect x="20" y="6" width="10" height="2" rx="1" fill="#4A90D9"/>
    <circle cx="25" cy="43" r="2" fill="#4A90D9"/>
    <rect x="19" y="14" width="12" height="8" rx="2" fill="#FF6B6B"/>
    <rect x="19" y="25" width="8" height="3" rx="1" fill="#4ECDC4"/>
    <rect x="19" y="30" width="12" height="2" rx="1" fill="#BDBDBD"/>
    <rect x="19" y="34" width="10" height="2" rx="1" fill="#BDBDBD"/>
  </svg>
);

const CloudIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="25" cy="28" rx="16" ry="10" fill="#4A90D9"/>
    <circle cx="18" cy="24" r="8" fill="#4A90D9"/>
    <circle cx="32" cy="24" r="6" fill="#4A90D9"/>
    <circle cx="25" cy="20" r="9" fill="#6BA5E7"/>
    <path d="M20 35L20 44" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
    <path d="M25 35L25 46" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round"/>
    <path d="M30 35L30 42" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="20" cy="46" r="2" fill="#4ECDC4"/>
    <circle cx="25" cy="48" r="2" fill="#FFD93D"/>
    <circle cx="30" cy="44" r="2" fill="#FF6B6B"/>
  </svg>
);

const DataIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="38" width="8" height="8" rx="2" fill="#FF6B6B"/>
    <rect x="16" y="28" width="8" height="18" rx="2" fill="#FFD93D"/>
    <rect x="27" y="18" width="8" height="28" rx="2" fill="#4ECDC4"/>
    <rect x="38" y="8" width="8" height="38" rx="2" fill="#4A90D9"/>
    <path d="M8 32L20 22L31 26L42 10" stroke="#2E5C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="32" r="3" fill="#2E5C8A"/>
    <circle cx="20" cy="22" r="3" fill="#2E5C8A"/>
    <circle cx="31" cy="26" r="3" fill="#2E5C8A"/>
    <circle cx="42" cy="10" r="3" fill="#2E5C8A"/>
  </svg>
);

const IoTIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="8" fill="#4A90D9"/>
    <circle cx="25" cy="25" r="4" fill="#E8F4FC"/>
    <circle cx="10" cy="10" r="5" fill="#FF6B6B"/>
    <circle cx="40" cy="10" r="5" fill="#FFD93D"/>
    <circle cx="10" cy="40" r="5" fill="#4ECDC4"/>
    <circle cx="40" cy="40" r="5" fill="#9B59B6"/>
    <path d="M14 14L21 21" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M36 14L29 21" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M14 36L21 29" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M36 36L29 29" stroke="#9B59B6" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
    <circle cx="25" cy="6" r="3" fill="#E74C3C"/>
    <circle cx="25" cy="44" r="3" fill="#27AE60"/>
    <path d="M25 9V17" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M25 33V41" stroke="#27AE60" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
);

export default function ServiceCards() {
  const services = [
    {
      id: "ai-machine-learning",
      title: "AI & ML Solutions",
      description: "Intelligent systems that automate, analyze, and optimize business processes.",
      icon: <AIIcon />,
      bgColor: "rgba(74, 144, 217, 0.1)"
    },
    {
      id: "web-application-development",
      title: "Web App Development",
      description: "Custom high-performance web solutions tailored for scale and performance.",
      icon: <WebIcon />,
      bgColor: "rgba(255, 107, 107, 0.1)"
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Android, iOS, and cross-platform apps built for engagement and user experience.",
      icon: <MobileIcon />,
      bgColor: "rgba(78, 205, 196, 0.1)"
    },
    {
      id: "cloud-devops-services",
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions.",
      icon: <CloudIcon />,
      bgColor: "rgba(74, 144, 217, 0.1)"
    },
    {
      id: "automation-data-intelligence",
      title: "Data Intelligence",
      description: "Smart automation and data-driven insights for business optimization.",
      icon: <DataIcon />,
      bgColor: "rgba(255, 217, 61, 0.1)"
    },
    {
      id: "iot-solutions",
      title: "IoT Solutions",
      description: "Connected device ecosystems enabling smart monitoring, control, and data collection for industrial and consumer applications.",
      icon: <IoTIcon />,
      bgColor: "rgba(155, 89, 182, 0.1)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(4);

  // Handle responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - visibleCards);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Reset index when visible cards change
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 2xl:px-12">
      <div className="max-w-[1800px] mx-auto">
        {/* Carousel Container */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/90 transition-all border border-white/50 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#00BFD2]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/90 transition-all border border-white/50 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#00BFD2]" />
          </button>

          {/* Cards Container */}
          <div className="mx-6 py-6">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-3 py-2"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <Link
                      href={`/services/${service.id}`}
                      className="block bg-white rounded-[26px] p-8 shadow-[0_1px_17px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-shadow h-full cursor-pointer group"
                    >
                      <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                          <div
                            className="w-[89px] h-[89px] rounded-full flex items-center justify-center"
                            style={{ backgroundColor: service.bgColor }}
                          >
                            {service.icon}
                          </div>
                          <h3 className="text-[#00114C] font-inter font-bold text-[26px] leading-[39px]">
                            {service.title}
                          </h3>
                          <p className="text-[#0c0c0c] font-inter text-base leading-6">
                            {service.description}
                          </p>
                        </div>
                        <span className="flex items-center gap-2.5 text-[#0c0c0c] font-inter font-medium text-lg group-hover:text-[#00BFD2] transition-colors cursor-pointer">
                          Read More
                          <svg
                            className="w-6 h-6 transition-transform group-hover:translate-x-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 16L19 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 8L19 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-[#00BFD2]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}