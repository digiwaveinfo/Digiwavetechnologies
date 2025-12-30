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
                                className="px-5 py-4 bg-[#00BFD2] rounded-[247px] inline-flex justify-center items-center gap-2.5 hover:opacity-90 transition-opacity"
                            >
                                <span className="text-white text-sm font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                                    Contact Us
                                </span>
                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 4C11.5 3.70833 11.4062 3.46875 11.2188 3.28125C11.0312 3.09375 10.7917 3 10.5 3H3.5C3.20833 3 2.96875 3.09375 2.78125 3.28125C2.59375 3.46875 2.5 3.70833 2.5 4C2.5 4.29167 2.59375 4.53125 2.78125 4.71875C2.96875 4.90625 3.20833 5 3.5 5H8.09375L1.78125 11.2812C1.59375 11.4896 1.5 11.7292 1.5 12C1.5 12.2708 1.59375 12.5104 1.78125 12.7188C1.98958 12.9062 2.22917 13 2.5 13C2.77083 13 3.01042 12.9062 3.21875 12.7188L9.5 6.40625V11C9.5 11.2917 9.59375 11.5312 9.78125 11.7188C9.96875 11.9062 10.2083 12 10.5 12C10.7917 12 11.0312 11.9062 11.2188 11.7188C11.4062 11.5312 11.5 11.2917 11.5 11V4Z" fill="white" />
                                </svg>
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
