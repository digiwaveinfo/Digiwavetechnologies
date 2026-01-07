import React from "react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative w-full h-[522px] bg-teal-950 overflow-hidden flex flex-col justify-start items-center pt-20 lg:pt-28">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/about/hero-background.webp"
                    alt="About Hero Background"
                    fill
                    className="object-fill"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
                <h2 className="text-cyan-500 text-xl font-medium font-['Poppins'] mb-4">
                    About Us
                </h2>
                <h1 className="text-white text-4xl lg:text-5xl font-bold font-['Poppins'] max-w-[800px] leading-tight mx-auto">
                    Built Using Future-Ready Technologies
                </h1>
            </div>

        </section>
    );
}
