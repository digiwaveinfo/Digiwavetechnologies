import React from "react";
import Image from "next/image";

export default function FounderQuote() {
    return (
        <section className="w-full bg-white pb-20 pt-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col items-center gap-11 max-w-[1800px]">
                <div className="text-center">
                    <h3 className="text-cyan-500 text-xl font-medium font-['Poppins'] mb-2">Work We're Proud Of</h3>
                    <h2 className="text-sky-950 text-4xl font-bold font-['Poppins']">Hear it from the Founder</h2>
                </div>

                <div className="relative w-full rounded-2xl shadow-[0px_4px_23px_0px_rgba(0,0,0,0.16)] overflow-hidden flex items-center justify-center py-12 px-6 lg:py-16 lg:px-20">

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/founder.png"
                            alt="Background"
                            fill
                            className="object-cover"
                        />
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 max-w-4xl text-center">
                        <p className="text-white text-lg lg:text-xl font-normal font-['Inter'] leading-8 lg:leading-9">
                            "At Digiwave, we believe technology should be an accelerator, not a hurdle. Our mission is to bridge the gap between human creativity and artificial intelligence, ensuring that every business—from startups to enterprises—has the tools to lead their industry."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
