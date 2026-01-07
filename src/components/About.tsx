import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-neutral-100 overflow-hidden">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Images Section */}
          <div className="relative w-full aspect-square xl:aspect-auto xl:h-[600px] row-start-1">
            {/* Main large image */}
            <div className="absolute left-1/2 -translate-x-1/2 xl:left-auto xl:translate-x-0 xl:right-[15%] top-0 xl:top-[50px] w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[70%] h-[80%] xl:h-[85%] bg-neutral-200 rounded-3xl overflow-hidden z-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0d055e637fa1859b9df6024ee3e324c96d4be4b3?width=1512"
                alt="Low angle view skyscrapers"
                className="w-full h-full object-fill"
              />
            </div>
            {/* Overlapping smaller image */}
            <div className="absolute left-1/2 -translate-x-1/2 xl:left-auto xl:translate-x-0 xl:-right-4 bottom-4 sm:bottom-[10%] xl:bottom-[80px] w-[45%] sm:w-[40%] xl:w-[45%] aspect-square bg-[#00BFD2] rounded-3xl outline outline-[8px] sm:outline-[10px] md:outline-[12px] xl:outline-[15px] outline-white overflow-hidden z-10 shadow-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9187a0bf41ca57190f4989c00a12f025167ca388?width=952"
                alt="About as service contact information concept"
                className="w-full h-full object-fill"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col justify-start items-center xl:items-start gap-8 z-20 row-start-2 xl:row-start-1">

            {/* Who We Are */}
            <div className="w-full flex flex-col justify-start items-center xl:items-start gap-2.5">
              <div className="self-stretch flex flex-col justify-start items-center xl:items-start gap-3">
                <div className="text-[#00BFD2] text-lg sm:text-xl font-medium font-['Inter']">
                  About Us
                </div>
                <div className="text-[#0e2a47] text-2xl sm:text-3xl xl:text-4xl font-bold font-['Inter']">
                  Who We Are
                </div>
              </div>
              <div className="text-[#0c0c0c] text-sm sm:text-base font-normal font-['Inter'] leading-7 mt-1 text-center xl:text-left">
                Digiwave Technologies is a global IT services company delivering cutting-edge AI/ML, Cloud, Mobile & Web solutions that empower businesses to innovate and scale.
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="w-full flex flex-col justify-start items-center xl:items-start gap-3">
              <div className="text-[#0e2a47] text-lg sm:text-xl xl:text-2xl font-bold font-['Inter']">
                Why Choose Us
              </div>
              <ul className="w-full flex flex-col gap-2.5 max-w-md xl:max-w-none">
                <li className="flex items-center gap-2">
                  <span className="text-[#00BFD2] text-sm flex-shrink-0">✔</span>
                  <span className="text-[#0c0c0c] text-sm sm:text-base font-normal font-['Inter'] leading-6">
                    Dedicated team of expert engineers
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00BFD2] text-sm flex-shrink-0">✔</span>
                  <span className="text-[#0c0c0c] text-sm sm:text-base font-normal font-['Inter'] leading-6">
                    Tailored solutions, transparent communication
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00BFD2] text-sm flex-shrink-0">✔</span>
                  <span className="text-[#0c0c0c] text-sm sm:text-base font-normal font-['Inter'] leading-6">
                    99.99% quality focus & reliable support
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BFD2] text-sm flex-shrink-0 mt-1">✔</span>
                  <span className="text-[#0c0c0c] text-sm sm:text-base font-normal font-['Inter'] leading-6">
                    Proven success across Finance, Healthcare, Inventory, Marketing, and Management sectors
                  </span>
                </li>
              </ul>
            </div>

            <Link href="/about" className="px-4 py-3 bg-[#00BFD2] rounded-full flex justify-center xl:justify-start items-center gap-2.5 overflow-hidden hover:opacity-90 transition-opacity mt-2">
              <span className="text-center text-white text-sm sm:text-base font-bold font-['Inter'] uppercase leading-6 tracking-wide">
                View more about us
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
