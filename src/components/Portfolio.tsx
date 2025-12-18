"use client";

import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="w-full py-16 md:py-24 bg-white flex flex-col justify-start items-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center gap-12 w-full max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-[#00BFD2] text-xl font-medium font-['Poppins']">
            Work We’re Proud Of
          </div>
          <div className="text-[#082f49] text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] leading-tight">
            Transforming Ideas Into <br /> Digital Success
          </div>
        </div>

        {/* Project Stack */}
        <div className="w-full flex flex-col justify-start items-start gap-12">

          {/* Card 1 - White Background */}
          <div className="w-full relative bg-white rounded-2xl shadow-[0px_4px_23px_0px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col lg:flex-row">
            {/* Content Section */}
            <div className="w-full lg:w-[60%] p-8 lg:p-[60px] flex flex-col justify-center items-start gap-7 order-2 lg:order-1 relative z-10">
              <div className="flex flex-col justify-start items-start gap-7">
                <div className="px-12 py-1.5 bg-sky-700 rounded-[39px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="text-white text-base font-medium font-['Inter'] leading-6">
                    Website
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3.5">
                  <div className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-semibold font-['Inter'] leading-tight">
                    Carawan Chain Logistics
                  </div>
                  <div className="text-zinc-600 text-base font-normal font-['Inter'] leading-6 max-w-[600px]">
                    SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 bg-[#00BFD2] text-white rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <Link href="/portfolio" className="inline-flex justify-start items-center gap-2.5">
                  <div className="text-center justify-center text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                    View details
                  </div>
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-[40%] h-64 lg:h-auto relative overflow-hidden order-1 lg:order-2 bg-stone-300">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920"
                alt="Carawan Chain Logistics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 - Blue Background Image */}
          <div className="w-full relative rounded-2xl shadow-[0px_4px_23px_0px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col lg:flex-row">
            {/* Background Image Absolute Layer */}
            <img
              src="/portfolio-card-2.png"
              alt="Card Background"
              className="absolute inset-0 z-0 w-full h-full object-fill pointer-events-none scale-[1.15]"
            />

            {/* Content Section */}
            <div className="w-full lg:w-[60%] p-8 lg:p-[60px] flex flex-col justify-center items-start gap-7 order-2 lg:order-1 relative z-10">
              <div className="flex flex-col justify-start items-start gap-7">
                <div className="px-12 py-1.5 bg-sky-700 rounded-[67px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="text-white text-base font-medium font-['Inter'] leading-6">
                    Website
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3.5">
                  <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Inter'] leading-tight">
                    Carawan Chain Logistics
                  </div>
                  <div className="text-white text-base font-normal font-['Inter'] leading-6 max-w-[600px]">
                    SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 bg-[#00BFD2] text-white rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <Link href="/portfolio" className="inline-flex justify-start items-center gap-2.5">
                  <div className="text-center justify-center text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                    View details
                  </div>
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-[40%] h-64 lg:h-auto relative overflow-hidden order-1 lg:order-2 bg-stone-300">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920"
                alt="Carawan Chain Logistics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3 - Dark Blue Background Image */}
          <div className="w-full relative rounded-2xl shadow-[0px_4px_23px_0px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col lg:flex-row">
            {/* Background Image Absolute Layer */}
            <img
              src="/prtfolio-card-3.png"
              alt="Card Background"
              className="absolute inset-0 z-0 w-full h-full object-fill pointer-events-none scale-[1.15]"
            />

            {/* Content Section */}
            <div className="w-full lg:w-[60%] p-8 lg:p-[60px] flex flex-col justify-center items-start gap-7 order-2 lg:order-1 relative z-10">
              <div className="flex flex-col justify-start items-start gap-7">
                <div className="px-12 py-1.5 bg-sky-700 rounded-[67px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="text-white text-base font-medium font-['Inter'] leading-6">
                    Website
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3.5">
                  <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Inter'] leading-tight">
                    Carawan Chain Logistics
                  </div>
                  <div className="text-white text-base font-normal font-['Inter'] leading-6 max-w-[600px]">
                    SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 bg-[#00BFD2] text-white rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <Link href="/portfolio" className="inline-flex justify-start items-center gap-2.5">
                  <div className="text-center justify-center text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                    View details
                  </div>
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-[40%] h-64 lg:h-auto relative overflow-hidden order-1 lg:order-2 bg-stone-300">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=920"
                alt="Carawan Chain Logistics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 4 - Teal Transparent Background */}
          <div className="w-full relative bg-teal-300/10 rounded-2xl shadow-[0px_4px_23px_0px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col lg:flex-row">
            {/* Content Section */}
            <div className="w-full lg:w-[60%] p-8 lg:p-[60px] flex flex-col justify-center items-start gap-7 order-2 lg:order-1 relative z-10">
              <div className="flex flex-col justify-start items-start gap-7">
                <div className="px-12 py-1.5 bg-sky-700 rounded-[67px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="text-white text-base font-medium font-['Inter'] leading-6">
                    Website
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3.5">
                  <div className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-semibold font-['Inter'] leading-tight">
                    Carawan Chain Logistics
                  </div>
                  <div className="text-zinc-600 text-base font-normal font-['Inter'] leading-6 max-w-[600px]">
                    SkyFleet needed a smart logistics platform to manage shipments, tracking, and client communication. We designed a clean and intuitive interface and developed a scalable web system for real-time tracking and analytics.
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 bg-[#00BFD2] text-white rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <Link href="/portfolio" className="inline-flex justify-start items-center gap-2.5">
                  <div className="text-center justify-center text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                    View details
                  </div>
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-[40%] h-64 lg:h-auto relative overflow-hidden order-1 lg:order-2 bg-stone-300">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/78ae07a0b6281ff620c3f309aa9274c820a2e2dc?width=988"
                alt="Carawan Chain Logistics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
