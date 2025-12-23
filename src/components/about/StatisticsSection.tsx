import React from "react";
import Image from "next/image";

export default function StatisticsSection() {
    return (
        <section className="w-full bg-neutral-100 py-20 overflow-hidden relative">
            {/* Container for the content */}
            <div className="container mx-auto px-6 lg:px-20 relative">
                <div className="lg:h-[737px] relative flex flex-col items-center gap-8 lg:block">

                    {/* Background Skyscraper Image (Desktop Only) */}
                    <div className="hidden lg:block absolute left-[863px] top-[82px] w-[497px] h-[573px] bg-neutral-200 rounded-3xl overflow-hidden shadow-lg z-0">
                        <Image
                            src="https://placehold.co/908x606"
                            alt="Low angle view skyscrapers"
                            fill
                            className="object-cover object-left"
                        />
                    </div>

                    {/* Card 1: Years of Experience */}
                    <div className="relative lg:absolute lg:left-[80px] lg:top-[82px] w-80 h-72 p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-between items-start z-10">
                        <Image
                            src="https://placehold.co/81x81"
                            alt="Experience Icon"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-sky-950 text-4xl font-bold font-['Poppins'] leading-[60px]">
                                3+
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Years of Experience
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Active Clients */}
                    <div className="relative lg:absolute lg:left-[472px] lg:top-[82px] w-80 h-72 p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-between items-start z-10">
                        <Image
                            src="https://placehold.co/81x81"
                            alt="Clients Icon"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-sky-950 text-4xl font-bold font-['Poppins'] leading-[60px]">
                                10+
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Active Clients
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Successful Project */}
                    <div className="relative lg:absolute lg:left-[80px] lg:top-[382px] w-80 h-72 p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-between items-start z-10">
                        <Image
                            src="https://placehold.co/81x81"
                            alt="Projects Icon"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-sky-950 text-4xl font-bold font-['Poppins'] leading-[60px]">
                                10+
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Successful Project
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Accurate work */}
                    <div className="relative lg:absolute lg:left-[472px] lg:top-[382px] w-80 h-72 p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-between items-start z-10">
                        <Image
                            src="https://placehold.co/81x81"
                            alt="Accuracy Icon"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-sky-950 text-4xl font-bold font-['Poppins'] leading-[60px]">
                                99.99%
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Accurate work
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
