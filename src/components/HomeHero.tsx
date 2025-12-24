"use client";

export default function HomeHero() {
  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[752px] bg-teal-50 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center lg:justify-start px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full max-w-[619px] inline-flex flex-col justify-start items-center lg:items-start gap-5 sm:gap-7 text-center lg:text-left">
          {/* Main Content */}
          <div className="self-stretch flex flex-col justify-start items-center lg:items-start gap-4 sm:gap-5">
            {/* Free Consultation Badge */}
            <div className="w-40 h-9 relative bg-white/25 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-indigo-50 overflow-hidden flex items-center justify-center">
              <div className="text-neutral-50 text-base font-medium font-['Inter'] leading-6">
                Free Consultation
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="self-stretch justify-center">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-['Inter'] leading-tight lg:leading-[68px]">
                Transforming Ideas into{" "}
              </span>
              <span className="text-cyan-300 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-['Inter'] leading-tight lg:leading-[68px]">
                Scalable Digital Solutions.
              </span>
            </div>
            
            {/* Description */}
            <div className="self-stretch justify-center text-white text-sm sm:text-base lg:text-lg font-normal font-['Inter'] leading-6 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              At Digiwave Technologies, we design, develop, and deploy intelligent digital solutions — from web applications to AI-powered systems.
            </div>
          </div>
          
          {/* Buttons */}
          <div className="inline-flex justify-center lg:justify-start items-center gap-3 mt-2 sm:mt-0">
            {/* Contact Us Button */}
            <div className="h-12 sm:h-16 px-4 sm:px-5 py-3 sm:py-4 bg-cyan-500 rounded-[247px] inline-flex justify-center items-center gap-2.5 overflow-hidden hover:bg-cyan-600 transition-colors cursor-pointer">
              <div className="text-white text-base sm:text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                Contact Us
              </div>
            </div>
            
            {/* Arrow Button */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 px-3 sm:px-5 py-3 sm:py-4 bg-white/20 rounded-[247px] inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden hover:bg-white/30 transition-colors cursor-pointer">
              <div className="relative">
                <svg width="20" height="24" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[26px] sm:h-[32px]">
                  <path d="M23 8C23 7.41667 22.8125 6.9375 22.4375 6.5625C22.0625 6.1875 21.5833 6 21 6H7C6.41667 6 5.9375 6.1875 5.5625 6.5625C5.1875 6.9375 5 7.41667 5 8C5 8.58333 5.1875 9.0625 5.5625 9.4375C5.9375 9.8125 6.41667 10 7 10H16.1875L3.5625 22.5625C3.1875 22.9792 3 23.4583 3 24C3 24.5417 3.1875 25.0208 3.5625 25.4375C3.97917 25.8125 4.45833 26 5 26C5.54167 26 6.02083 25.8125 6.4375 25.4375L19 12.8125V22C19 22.5833 19.1875 23.0625 19.5625 23.4375C19.9375 23.8125 20.4167 24 21 24C21.5833 24 22.0625 23.8125 22.4375 23.4375C22.8125 23.0625 23 22.5833 23 22V8Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}