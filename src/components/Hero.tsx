import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[752px] md:h-[810px] overflow-hidden bg-teal-50">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-fill"
      >
        <source src="/Hero-background.mp4" type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="relative container mx-auto px-6 lg:px-20 h-full flex flex-col justify-center">
        <div className="w-full max-w-[619px] flex flex-col justify-start items-start gap-7">

          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            {/* Free Consultation Badge */}
            <div className="w-40 h-9 relative bg-white/25 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-indigo-50 overflow-hidden flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
              <div className="text-neutral-50 text-base font-medium font-['Inter'] leading-6">
                Free Consultation
              </div>
            </div>

            {/* Heading */}
            <div className="self-stretch">
              <span className="text-white text-4xl md:text-6xl font-bold font-['Inter'] leading-tight md:leading-[68px]">
                Transforming Ideas into{" "}
              </span>
              <span className="text-[#62F4F3] text-4xl md:text-6xl font-bold font-['Inter'] leading-tight md:leading-[68px]">
                Scalable Digital Solutions.
              </span>
            </div>

            {/* Subtext */}
            <div className="self-stretch text-white text-lg font-normal font-['Inter'] leading-6">
              At Digiwave Technologies, we design, develop, and deploy intelligent
              digital solutions — from web applications to AI-powered systems.
            </div>
          </div>

          {/* Buttons */}
          <div className="inline-flex justify-start items-center gap-3">
            {/* Contact Us Button */}
            <Link href="/contact" className="px-5 py-4 bg-[#00BFD2] rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden hover:opacity-90 transition-opacity">
              <div className="self-stretch flex justify-start items-center gap-2.5">
                <div className="w-36 h-9 text-center flex items-center justify-center text-white text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                  Contact Us
                </div>
              </div>
            </Link>

            {/* Icon Button */}
            <button className="w-16 h-16 px-5 py-4 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-[247px] flex flex-col justify-center items-center gap-2.5 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/20 transition-all cursor-pointer">
              <div className="relative">
                <svg
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 8C23 7.41667 22.8125 6.9375 22.4375 6.5625C22.0625 6.1875 21.5833 6 21 6H7C6.41667 6 5.9375 6.1875 5.5625 6.5625C5.1875 6.9375 5 7.41667 5 8C5 8.58333 5.1875 9.0625 5.5625 9.4375C5.9375 9.8125 6.41667 10 7 10H16.1875L3.5625 22.5625C3.1875 22.9792 3 23.4583 3 24C3 24.5417 3.1875 25.0208 3.5625 25.4375C3.97917 25.8125 4.45833 26 5 26C5.54167 26 6.02083 25.8125 6.4375 25.4375L19 12.8125V22C19 22.5833 19.1875 23.0625 19.5625 23.4375C19.9375 23.8125 20.4167 24 21 24C21.5833 24 22.0625 23.8125 22.4375 23.4375C22.8125 23.0625 23 22.5833 23 22V8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
