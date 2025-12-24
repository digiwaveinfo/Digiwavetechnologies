import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BetterTogether() {
    return (
        <section className="w-full bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 overflow-hidden max-w-[1800px]">
                <div className="flex flex-col items-start gap-9">
                    {/* Header Section */}
                    <div className="self-stretch flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div className="max-w-[963px] flex flex-col justify-start items-start gap-3.5">
                            <h2 className="text-sky-950 text-4xl font-bold font-['Inter'] leading-[60px]">
                                Better Together
                            </h2>
                            <p className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link
                                href="/contact"
                                className="px-5 py-4 bg-cyan-500 rounded-[247px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden hover:bg-cyan-600 transition-colors"
                            >
                                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                                    <span className="text-center justify-center text-white text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                                        Contact us
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full h-[465px] relative bg-neutral-200 rounded-3xl overflow-hidden shadow-sm">
                        {/* Placeholder for potential background layer if needed */}
                        <div className="absolute w-[880px] h-[588px] left-[-62px] top-0 pointer-events-none" />

                        <Image
                            src="/about/bettertogether.png"
                            alt="Group of people working out business plan in office"
                            fill
                            className="object-fill object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
