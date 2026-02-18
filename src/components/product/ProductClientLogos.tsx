"use client";

import { useEffect, useRef } from "react";

export default function ProductClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Pixels per frame
    const scrollInterval = 30; // Milliseconds between frames

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset scroll when reaching the end (seamless loop)
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);

  const logos = [
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=426", alt: "HDD" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/8f1f434e05f9848e760116cfec522940267931df?width=404", alt: "Indian Oil LNG" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/cd75b54496eaad840fb0738209a24be55029eddd?width=426", alt: "elisar vision technology" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/751de64d246aef9c464eb2d8a33a78f1540d0772?width=430", alt: "Dr. Agarwals Eye Hospital" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/35b728b35d0a7c45ef8f4fefe86baab071fa2772?width=420", alt: "WESCOM Credit Union" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=422", alt: "ABS" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/77dfd89958921dc294668db73155f54622c0771e?width=424", alt: "omega" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/0506fab76106833c29987ff5b53fe7dae2b21174?width=425", alt: "StarZero" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/975533bf02066fc724a51718363279b0e34fcaa3?width=402", alt: "zebec" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/6fd2d9ecbb3e23e9f4d1df4b7f44cd7c40f27aff?width=425", alt: "zanec" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/cde7ac39117645f2df52a0fb90fac4fcbc40d4d4?width=394", alt: "Indian Oil" },
  ];

  return (
    <section className="w-full py-10 lg:py-16 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-gray-50 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 lg:gap-12 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center w-[150px] sm:w-[180px] lg:w-[200px] h-20"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}