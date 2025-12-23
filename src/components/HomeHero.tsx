"use client";

export default function HomeHero() {
  return (
    <section className="relative h-[752px] bg-teal-50 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Content Container */}
      <div className="w-full max-w-[619px] absolute left-4 md:left-20 top-[159px] flex flex-col gap-7 px-4 md:px-0">
        {/* Main Content */}
        <div className="flex flex-col gap-5">
          {/* Free Consultation Badge */}
          <div className="w-40 h-9 relative bg-white/25 rounded-[10px] border border-indigo-50 overflow-hidden">
            <div className="absolute left-[17px] top-[7px] text-neutral-50 text-base font-medium font-['Inter'] leading-6">
              Free Consultation
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="text-left">
            <span className="text-white text-4xl md:text-6xl font-bold font-['Inter'] leading-tight md:leading-[68px]">
              Transforming Ideas into{" "}
            </span>
            <span className="text-cyan-300 text-4xl md:text-6xl font-bold font-['Inter'] leading-tight md:leading-[68px]">
              Scalable Digital Solutions.
            </span>
          </div>
          
          {/* Description */}
          <div className="text-white text-base md:text-lg font-normal font-['Inter'] leading-6 max-w-full">
            At Digiwave Technologies, we design, develop, and deploy intelligent digital solutions — from web applications to AI-powered systems.
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-3">
          {/* Contact Us Button */}
          <button className="px-5 py-4 bg-cyan-500 rounded-[247px] flex items-center gap-2.5 overflow-hidden hover:bg-cyan-600 transition-colors">
            <div className="text-white text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
              Contact Us
            </div>
          </button>
          
          {/* Arrow Button */}
          <button className="w-16 h-16 px-5 py-4 bg-white/20 rounded-[247px] flex items-center justify-center gap-2.5 overflow-hidden hover:bg-white/30 transition-colors">
            <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 8C23 7.41667 22.8125 6.9375 22.4375 6.5625C22.0625 6.1875 21.5833 6 21 6H7C6.41667 6 5.9375 6.1875 5.5625 6.5625C5.1875 6.9375 5 7.41667 5 8C5 8.58333 5.1875 9.0625 5.5625 9.4375C5.9375 9.8125 6.41667 10 7 10H16.1875L3.5625 22.5625C3.1875 22.9792 3 23.4583 3 24C3 24.5417 3.1875 25.0208 3.5625 25.4375C3.97917 25.8125 4.45833 26 5 26C5.54167 26 6.02083 25.8125 6.4375 25.4375L19 12.8125V22C19 22.5833 19.1875 23.0625 19.5625 23.4375C19.9375 23.8125 20.4167 24 21 24C21.5833 24 22.0625 23.8125 22.4375 23.4375C22.8125 23.0625 23 22.5833 23 22V8Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}