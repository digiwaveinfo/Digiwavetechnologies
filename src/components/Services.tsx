"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "ai-machine-learning",
      title: "AI & Machine Learning Solutions",
      description: "Intelligent systems that automate, analyze, and optimize business processes.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7309ec19426c194dd2e948fe4906e3ab122a4585?width=970",
      titleColor: "text-[#0064AC]",
    },
    {
      id: "web-application-development",
      title: "Web Application Development",
      description: "Custom high-performance web solutions tailored for scale and performance.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3f5c6b3d663ecc01e18ae177e232243b61d97576?width=806",
      titleColor: "text-[#0064AC]",
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Android, iOS, and cross-platform apps built for engagement and user experience.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/917d50598d6a8f171dd1a7d201159fde9ed14c99?width=970",
      titleColor: "text-[#0064AC]",
    },
    {
      id: "cloud-devops-services",
      title: "Cloud & DevOps Services",
      description: "Scalable cloud infrastructure and automated deployment solutions.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3f5c6b3d663ecc01e18ae177e232243b61d97576?width=806",
      titleColor: "text-[#0064AC]",
    },
    {
      id: "automation-data-intelligence",
      title: "Automation & Data Intelligence",
      description: "Smart automation and data-driven insights for business optimization.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7309ec19426c194dd2e948fe4906e3ab122a4585?width=970",
      titleColor: "text-[#0064AC]",
    },
    {
      id: "iot-solutions",
      title: "IoT Solutions",
      description: "Connected device ecosystems enabling smart monitoring, control, and data collection for industrial and consumer applications.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/917d50598d6a8f171dd1a7d201159fde9ed14c99?width=970",
      titleColor: "text-[#0064AC]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const visibleCards = 4;
  const maxIndex = services.length - visibleCards;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="w-full py-16 md:py-24 flex flex-col justify-start items-center bg-white relative overflow-hidden">
      {/* Left side background */}
      <div className="absolute left-0 top-0 w-[1164px] h-[919px] opacity-10 pointer-events-none z-0">
        <svg width="788" height="921" viewBox="0 0 788 921" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[251.78px] top-0">
          <path d="M744.674 920.25C744.674 920.25 807.771 728.427 778.592 610.148C695.44 273.093 20.5165 965.871 -109.721 644.066C-217.442 377.898 247.219 1.25026 247.219 1.25026" stroke="#00BFD2" strokeWidth="3.23023" />
        </svg>
        <svg width="537" height="921" viewBox="0 0 537 921" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
          <path d="M492.891 920.25C492.891 920.25 555.988 728.427 526.809 610.148C443.657 273.093 -231.266 965.871 -361.504 644.066C-469.225 377.898 -4.56385 1.25026 -4.56385 1.25026" stroke="#00BFD2" strokeWidth="3.23023" />
        </svg>
        <svg width="625" height="921" viewBox="0 0 625 921" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[88.12px] top-0">
          <path d="M581.014 920.25C581.014 920.25 644.111 728.427 614.931 610.148C531.78 273.093 -143.144 965.871 -273.382 644.066C-381.103 377.898 83.5587 1.25026 83.5587 1.25026" stroke="#00BFD2" strokeWidth="3.23023" />
        </svg>
        <svg width="722" height="921" viewBox="0 0 722 921" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[185.69px] top-0">
          <path d="M678.581 920.25C678.581 920.25 741.677 728.427 712.498 610.148C629.346 273.093 -45.577 965.871 -175.815 644.066C-283.536 377.898 181.125 1.25026 181.125 1.25026" stroke="#00BFD2" strokeWidth="3.23023" />
        </svg>
      </div>

      {/* Right side background */}
      <div className="absolute right-[-500px] top-0 w-[1106px] h-[873px] opacity-10 pointer-events-none z-0">
        <svg width="363" height="875" viewBox="0 0 363 875" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[239.27px] top-0">
          <path d="M828.881 0.477173C828.881 0.477173 888.843 182.771 861.114 295.173C782.093 615.483 140.701 -42.8769 16.933 262.941C-85.4363 515.885 356.14 873.821 356.14 873.821" stroke="#00BFD2" strokeWidth="3.06975" />
        </svg>
        <svg width="602" height="875" viewBox="0 0 602 875" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
          <path d="M828.881 0.477173C828.881 0.477173 888.843 182.771 861.114 295.173C782.093 615.483 140.701 -42.8769 16.933 262.941C-85.4363 515.885 356.14 873.821 356.14 873.821" stroke="#00BFD2" strokeWidth="3.06975" />
        </svg>
        <svg width="518" height="875" viewBox="0 0 518 875" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[83.74px] top-0">
          <path d="M828.881 0.477173C828.881 0.477173 888.843 182.771 861.114 295.173C782.093 615.483 140.701 -42.8769 16.933 262.941C-85.4363 515.885 356.14 873.821 356.14 873.821" stroke="#00BFD2" strokeWidth="3.06975" />
        </svg>
        <svg width="426" height="875" viewBox="0 0 426 875" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[176.46px] top-0">
          <path d="M828.881 0.477173C828.881 0.477173 888.843 182.771 861.114 295.173C782.093 615.483 140.701 -42.8769 16.933 262.941C-85.4363 515.885 356.14 873.821 356.14 873.821" stroke="#00BFD2" strokeWidth="3.06975" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col items-center max-w-[1800px] relative z-10">
        {/* Section Header */}
        <div className="w-full flex flex-col items-center gap-4 mb-12">
          <div className="text-center text-[#00BFD2] text-xl font-medium font-['Poppins']">
            Services
          </div>
          <div className="text-center text-[#00114C] text-3xl md:text-4xl font-bold font-['Poppins'] leading-tight">
            Built Using Future-Ready Technologies
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#00BFD2] hover:text-white transition-colors group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#00BFD2] group-hover:text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#00BFD2] hover:text-white transition-colors group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#00BFD2] group-hover:text-white" />
          </button>

          {/* Cards Wrapper */}
          <div className="overflow-hidden mx-8 lg:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <Link 
                    href={`/services/${service.id}`}
                    className="flex flex-col items-center relative h-[400px] w-full group cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="w-full h-64 absolute top-0 left-0 bg-neutral-200 rounded-3xl overflow-hidden shadow-sm z-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Hover Overlay - Black smokey gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Eye icon in top-right corner */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-[#00BFD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        {/* View Details text at bottom */}
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                          <span className="text-white font-semibold text-sm uppercase tracking-wide">View Details</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Card - Overlapping */}
                    <div className="w-[85%] h-48 absolute top-[202px] bg-white rounded-3xl shadow-[0px_6px_20px_0px_rgba(0,0,0,0.04)] overflow-hidden z-10 flex flex-col items-center justify-center px-4 transition-all hover:shadow-lg group-hover:shadow-xl">
                      <div className="flex flex-col justify-center items-center gap-3">
                        <div className={`text-center ${service.titleColor} text-base lg:text-lg font-bold font-['Inter'] leading-6`}>
                          {service.title}
                        </div>
                        <div className="text-center text-black text-sm font-normal font-['Rubik'] leading-5 line-clamp-3">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-[#00BFD2]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All services Button */}
        <Link href="/services" className="px-5 py-4 bg-[#00BFD2] rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden hover:opacity-90 transition-opacity">
          <div className="self-stretch flex justify-start items-center gap-2.5">
            <div className="text-center text-white text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
              View All services
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
