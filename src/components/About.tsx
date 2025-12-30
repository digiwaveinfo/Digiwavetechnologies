import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-neutral-100 overflow-hidden py-16 xl:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative max-w-[1800px]">
        <div className="flex flex-col xl:flex-row items-center xl:items-start xl:h-[750px]">

          {/* Images Section */}
          <div className="relative w-full xl:w-[800px] h-[350px] sm:h-[400px] md:h-[420px] xl:h-full mb-8 md:mb-12 xl:mb-0">
            {/* Main large image */}
            <div className="absolute left-0 sm:left-[50px] md:left-[100px] lg:left-[150px] xl:left-[125px] top-0 xl:top-[100px] w-[85%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[496px] max-w-[496px] h-[250px] sm:h-[300px] md:h-[320px] xl:h-[505px] bg-neutral-200 rounded-3xl overflow-hidden z-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0d055e637fa1859b9df6024ee3e324c96d4be4b3?width=1512"
                alt="Low angle view skyscrapers"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping smaller image */}
            <div className="absolute left-[55%] sm:left-[50%] md:left-[45%] lg:left-[42%] xl:left-[319px] top-[120px] sm:top-[150px] md:top-[140px] xl:top-[183px] transform -translate-x-1/2 xl:translate-x-0 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[320px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[320px] bg-[#00BFD2] rounded-3xl outline outline-[8px] sm:outline-[10px] md:outline-[12px] xl:outline-[15px] outline-white overflow-hidden z-10 shadow-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9187a0bf41ca57190f4989c00a12f025167ca388?width=952"
                alt="About as service contact information concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full xl:w-[600px] xl:mt-[100px] flex flex-col justify-start items-center xl:items-start gap-6 z-20 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-0">

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
                    100% quality focus & reliable support
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
