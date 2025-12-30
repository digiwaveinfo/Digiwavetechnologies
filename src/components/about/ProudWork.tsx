import React from "react";
import Image from "next/image";

export default function ProudWork() {
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

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 flex flex-col items-center max-w-[1800px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className="text-cyan-500 text-xl font-medium font-['Inter'] mb-2">
                        Work We’re Proud Of
                    </h3>
                    <h2 className="text-sky-950 text-4xl font-bold font-['Inter']">
                        Transforming Ideas Into <br className="hidden md:block" /> Digital Success
                    </h2>
                </div>

                {/* Logos Grid */}
                <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
                    <div className="w-32 h-28 relative grayscale hover:grayscale-0 transition-all">
                        <Image src="/1Figure.png" alt="Figure 1" fill className="object-contain" />
                    </div>
                    <div className="w-28 h-28 relative grayscale hover:grayscale-0 transition-all">
                        <Image src="/2Figure.png" alt="Figure 2" fill className="object-contain" />
                    </div>
                    <div className="w-28 h-28 relative grayscale hover:grayscale-0 transition-all">
                        <Image src="/3 Figure.png" alt="Figure 3" fill className="object-contain" />
                    </div>
                    <div className="w-32 h-28 relative grayscale hover:grayscale-0 transition-all">
                        <Image src="/4Figure.png" alt="Figure 4" fill className="object-contain" />
                    </div>
                    <div className="w-24 h-28 relative grayscale hover:grayscale-0 transition-all">
                        <Image src="/5Figure.png" alt="Figure 5" fill className="object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}
