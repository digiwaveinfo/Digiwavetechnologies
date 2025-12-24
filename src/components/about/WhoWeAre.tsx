import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="w-full relative z-20 pb-16 lg:pb-20">
            {/* White Background starting mid-way */}
            <div className="absolute top-[150px] lg:top-[100px] left-0 w-full h-[calc(100%-150px)] lg:h-[calc(100%-100px)] bg-white -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1800px]">
                {/* Images Row - Negative margin to overlap Hero */}
                <div className="flex flex-col lg:flex-row gap-6 mb-16 -mt-[150px] lg:-mt-[180px]">
                    {/* Large Image */}
                    <div className="relative w-full lg:w-[60%] h-[300px] lg:h-[573px] bg-neutral-200 rounded-3xl overflow-hidden">
                        <Image
                            src="/about/hero-over-image1.png"
                            alt="Low angle view skyscrapers"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Small Image with Play Button */}
                    <div className="relative w-full lg:w-[40%] h-[300px] lg:h-[573px] bg-neutral-200 rounded-3xl overflow-hidden">
                        <Image
                            src="/about/hero-over0image2.png"
                            alt="Skyscrapers"
                            fill
                            className="object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.04565 4.59937V22.9897L22.9878 13.7945L8.04565 4.59937Z" stroke="#00BFD2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-2.5 w-full mt-10 lg:mt-0">
                    <div className="w-full lg:w-[501px] flex flex-col justify-start items-center lg:items-start gap-3.5">
                        <div className="self-stretch text-sky-950 text-4xl font-bold font-['Inter'] leading-[60px] text-center lg:text-left">
                            Who We Are
                        </div>
                    </div>
                    <div className="flex-1 text-stone-950 text-base font-normal font-['Inter'] leading-6 text-center lg:text-left">
                        Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri
                    </div>
                </div>
            </div>
        </section>
    );
}
