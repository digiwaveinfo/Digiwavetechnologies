"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Container from "../Container";

const LOGO_DATA = [
    { src: "/1Figure.webp", alt: "Figure 1", width: "w-32", height: "h-28" },
    { src: "/2Figure.webp", alt: "Figure 2", width: "w-28", height: "h-28" },
    { src: "/3 Figure.webp", alt: "Figure 3", width: "w-28", height: "h-28" },
    { src: "/4Figure.webp", alt: "Figure 4", width: "w-32", height: "h-28" },
    { src: "/5Figure.webp", alt: "Figure 5", width: "w-24", height: "h-28" },
];

export default function ProudWork() {
    // Duplicate logos for infinite feel
    const logos = [...LOGO_DATA, ...LOGO_DATA, ...LOGO_DATA];

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
    });

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = () => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        };

        const interval = setInterval(autoplay, 3000);

        return () => clearInterval(interval);
    }, [emblaApi]);

    return (
        <section className="relative w-full bg-white py-20 overflow-hidden">
            {/* Background Vectors Matches Provided Design - Positioned Right */}
            <div className="absolute right-0 top-0 w-[1127.24px] h-[900.18px] opacity-10 pointer-events-none">
                <div className="absolute left-[239.20px] top-[-0px]">
                    <svg width="751" height="887" viewBox="0 0 751 887" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M820.276 0.512908C820.276 0.512908 884.685 181.283 859.718 294.331C788.567 616.48 131.24 -25.97 15.0006 282.788C-81.1417 538.164 369.07 885.175 369.07 885.175" stroke="#00BFD2" strokeWidth="3.06975" />
                    </svg>
                </div>
                <div className="absolute left-[-0px] top-[5.86px]">
                    <svg width="867" height="887" viewBox="0 0 867 887" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M820.276 0.512908C820.276 0.512908 884.685 181.283 859.718 294.331C788.567 616.48 131.24 -25.97 15.0006 282.788C-81.1417 538.164 369.07 885.175 369.07 885.175" stroke="#00BFD2" strokeWidth="3.06975" />
                    </svg>
                </div>
                <div className="absolute left-[83.72px] top-[3.81px]">
                    <svg width="867" height="887" viewBox="0 0 867 887" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M820.276 0.512908C820.276 0.512908 884.685 181.283 859.718 294.331C788.567 616.48 131.24 -25.97 15.0006 282.788C-81.1417 538.164 369.07 885.175 369.07 885.175" stroke="#00BFD2" strokeWidth="3.06975" />
                    </svg>
                </div>
                <div className="absolute left-[176.41px] top-[1.54px]">
                    <svg width="814" height="887" viewBox="0 0 814 887" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M820.276 0.512908C820.276 0.512908 884.685 181.283 859.718 294.331C788.567 616.48 131.24 -25.97 15.0006 282.788C-81.1417 538.164 369.07 885.175 369.07 885.175" stroke="#00BFD2" strokeWidth="3.06975" />
                    </svg>
                </div>
            </div>

            <Container className="relative z-10 flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className="text-cyan-500 text-xl font-medium font-['Inter'] mb-2">
                        Work We’re Proud Of
                    </h3>
                    <h2 className="text-sky-950 text-4xl font-bold font-['Inter']">
                        Transforming Ideas Into <br className="hidden md:block" /> Digital Success
                    </h2>
                </div>

                {/* Carousel */}
                <div className="w-full max-w-[1240px] px-4 md:px-10 overflow-hidden" ref={emblaRef}>
                    <div className="flex items-center">
                        {logos.map((logo, index) => (
                            <div key={index} className="flex-[0_0_12rem] sm:flex-[0_0_16rem] min-w-0 flex justify-center items-center mx-4">
                                <div className="w-32 h-28 relative transition-all hover:scale-110 grayscale hover:grayscale-0">
                                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
