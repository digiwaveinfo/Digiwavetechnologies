import Link from "next/link";
import Container from "./Container";

export default function About() {
  return (
    <section className="w-full bg-neutral-100 overflow-hidden py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Images Section - Mobile Layout (hidden on lg and above) */}
          <div className="lg:hidden relative w-full row-start-1">
            {/* Main large image - full width on mobile */}
            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] bg-neutral-200 rounded-[26px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0d055e637fa1859b9df6024ee3e324c96d4be4b3?width=1512"
                alt="Low angle view skyscrapers"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping smaller image - centered at bottom */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] sm:bottom-[50px] w-[60%] sm:w-[55%] md:w-[50%] aspect-[4/3] bg-[#00BFD2] rounded-[26px] outline outline-[10px] sm:outline-[12px] outline-white overflow-hidden z-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9187a0bf41ca57190f4989c00a12f025167ca388?width=952"
                alt="About us service"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Spacer for the overlapping image */}
            <div className="h-[120px] sm:h-[140px] md:h-[160px]"></div>
          </div>

          {/* Images Section - Desktop Layout (hidden below lg) */}
          <div className="hidden lg:block relative w-full h-[450px] lg:h-[505px] row-start-1">
            {/* Main large image - left positioned */}
            <div className="absolute left-0 top-0 w-[91%] h-full bg-neutral-200 rounded-[26px] overflow-hidden z-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0d055e637fa1859b9df6024ee3e324c96d4be4b3?width=1512"
                alt="Low angle view skyscrapers"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping smaller image - positioned right with offset */}
            <div className="absolute left-[36%] top-[16%] w-[64%] h-[67%] bg-[#00BFD2] rounded-[26px] outline outline-[15px] outline-white overflow-hidden z-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9187a0bf41ca57190f4989c00a12f025167ca388?width=952"
                alt="About us service contact information concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section - Original content preserved */}
          <div className="w-full flex flex-col justify-start items-center lg:items-start gap-8 z-20 row-start-2 lg:row-start-1 mt-4 sm:mt-6 lg:mt-0">

            {/* Who We Are */}
            <div className="w-full flex flex-col justify-start items-center lg:items-start gap-2.5">
              <div className="self-stretch flex flex-col justify-start items-center lg:items-start gap-3">
                <div className="text-[#00BFD2] text-lg sm:text-xl font-medium font-['Inter']">
                  About Us
                </div>
                <div className="text-[#0e2a47] text-2xl sm:text-3xl lg:text-4xl font-bold font-['Inter']">
                  Who We Are
                </div>
              </div>
              <div className="text-[#0c0c0c] text-sm sm:text-base font-normal font-['Inter'] leading-7 mt-1 text-center lg:text-left">
                Digiwave Technologies is a global IT services and AI Development Company in India delivering cutting-edge AI/ML, cloud, mobile, and web solutions that empower businesses to innovate and scale.
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="w-full flex flex-col justify-start items-center lg:items-start gap-3">
              <div className="text-[#0e2a47] text-lg sm:text-xl lg:text-2xl font-bold font-['Inter']">
                Why Choose Us
              </div>
              <ul className="w-full flex flex-col gap-2.5 max-w-md lg:max-w-none">
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

            <Link href="/about" className="px-4 py-3 bg-[#00BFD2] rounded-full flex justify-center lg:justify-start items-center gap-2.5 overflow-hidden hover:opacity-90 transition-opacity mt-2">
              <span className="text-center text-white text-sm sm:text-base font-bold font-['Inter'] uppercase leading-6 tracking-wide">
                View more about us
              </span>
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}
