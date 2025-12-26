import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-neutral-100 overflow-hidden py-16 lg:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative max-w-[1800px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:h-[750px]">

          {/* Images Section */}
          <div className="relative w-full lg:w-[800px] h-[500px] lg:h-full mb-12 lg:mb-0">
            {/* Main large image */}
            <div className="absolute left-0 lg:left-[125px] top-0 lg:top-[100px] w-full max-w-[496px] h-[300px] lg:h-[505px] bg-neutral-200 rounded-3xl overflow-hidden z-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0d055e637fa1859b9df6024ee3e324c96d4be4b3?width=1512"
                alt="Low angle view skyscrapers"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping smaller image */}
            <div className="absolute left-[50%] lg:left-[319px] top-[200px] lg:top-[183px] transform -translate-x-1/2 lg:translate-x-0 w-[280px] lg:w-[320px] h-[280px] lg:h-[320px] bg-[#00BFD2] rounded-3xl outline outline-[15px] outline-white overflow-hidden z-10 shadow-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9187a0bf41ca57190f4989c00a12f025167ca388?width=952"
                alt="About as service contact information concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[600px] lg:mt-[100px] flex flex-col justify-start items-center lg:items-start gap-6 z-20">

            {/* Who We Are */}
            <div className="w-full flex flex-col justify-start items-center lg:items-start gap-2.5">
              <div className="self-stretch flex flex-col justify-start items-center lg:items-start gap-3">
                <div className="text-[#00BFD2] text-xl font-medium font-['Inter']">
                  About Us
                </div>
                <div className="text-[#0e2a47] text-3xl lg:text-4xl font-bold font-['Inter']">
                  Who We Are
                </div>
              </div>
              <div className="text-[#0c0c0c] text-base font-normal font-['Inter'] leading-7 mt-1 text-center lg:text-left">
                Digiwave Technologies is a global IT services company delivering cutting-edge AI/ML, Cloud, Mobile & Web solutions that empower businesses to innovate and scale.
              </div>
            </div>

            {/* Our Mission */}
            <div className="w-full flex flex-col justify-start items-center lg:items-start gap-2">
              <div className="text-[#0e2a47] text-xl lg:text-2xl font-bold font-['Inter']">
                Our Mission
              </div>
              <div className="text-[#0c0c0c] text-base font-normal font-['Inter'] leading-7 text-center lg:text-left">
                To help forward-looking businesses harness the power of technology — from automation with AI to responsive, user-centric applications.
              </div>
            </div>

            {/* Our Vision */}
            <div className="w-full flex flex-col justify-start items-center lg:items-start gap-2">
              <div className="text-[#0e2a47] text-xl lg:text-2xl font-bold font-['Inter']">
                Our Vision
              </div>
              <div className="text-[#0c0c0c] text-base font-normal font-['Inter'] leading-7 text-center lg:text-left">
                Become the most trusted partner for digital transformation — speed, quality, security, and innovation at our core.
              </div>
            </div>

            <Link href="/about" className="px-4 py-3 bg-[#00BFD2] rounded-full flex justify-center lg:justify-start items-center gap-2.5 overflow-hidden hover:opacity-90 transition-opacity mt-2">
              <span className="text-center text-white text-base font-bold font-['Inter'] uppercase leading-6 tracking-wide">
                View more about us
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
