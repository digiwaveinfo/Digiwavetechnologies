import React from "react";

export default function Newsletter() {
    return (
        <section className="w-full bg-white pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1800px]">
                <div className="relative w-full bg-sky-950 rounded-3xl overflow-hidden p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Background Vectors */}
                    <div className="absolute inset-0 pointer-events-none opacity-10">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
                            {/* Simplified vector representation */}
                        </svg>
                    </div>

                    <div className="relative z-10 text-left">
                        <h3 className="text-cyan-500 text-base font-bold font-['Inter'] uppercase tracking-wide mb-2">
                            Stay Connected with Us
                        </h3>
                        <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Inter'] leading-tight max-w-lg">
                            Insights, tech tips, and digital inspiration
                        </h2>
                    </div>

                    <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full sm:w-80 h-14 pl-6 rounded-l-full sm:rounded-r-none rounded-r-full border-none focus:outline-none text-stone-950 placeholder-stone-400 bg-white mb-4 sm:mb-0"
                        />
                        <button className="h-14 px-8 bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-bold uppercase rounded-r-full rounded-l-full sm:rounded-l-none">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
