import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-neutral-100 overflow-hidden py-16 lg:py-0">
      <div className="container mx-auto px-6 lg:px-20 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:h-[705px]">

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
          <div className="w-full lg:w-[542px] lg:mt-[138px] flex flex-col justify-start items-start gap-7 z-20">

            <div className="w-full flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                <div className="text-[#00BFD2] text-xl font-medium font-['Inter']">
                  About Us
                </div>
                <div className="text-[#0e2a47] text-4xl font-bold font-['Inter']">
                  Who We Are
                </div>
              </div>
              <div className="text-[#0c0c0c] text-base font-normal font-['Inter'] leading-6 mt-2">
                Digiwave Technologies is a forward-thinking IT solutions company
                focused on building scalable, secure, and future-ready digital
                products.
                <br />
                <br />
                We help businesses transform their ideas into powerful software
                using modern technology, strategic planning, and user-first
                design.
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center gap-8 lg:gap-16">
              {/* Feature 01 */}
              <div className="flex justify-start items-center gap-3">
                <div className="relative w-[41px] h-[37px]">
                  <svg
                    width="41"
                    height="37"
                    viewBox="0 0 41 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="41" height="37" rx="5" fill="#62F4F3" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-base font-extrabold font-['Poppins']">
                    01
                  </div>
                </div>
                <div className="text-[#0c0c0c] text-base font-normal font-['Inter'] leading-6 max-w-[180px]">
                  Agile Development Approach
                </div>
              </div>

              {/* Feature 02 */}
              <div className="flex justify-start items-center gap-3">
                <div className="relative w-[41px] h-[37px]">
                  <svg
                    width="41"
                    height="37"
                    viewBox="0 0 41 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="41" height="37" rx="5" fill="#0064AC" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-base font-extrabold font-['Poppins']">
                    02
                  </div>
                </div>
                <div className="text-[#0c0c0c] text-base font-normal font-['Inter'] leading-6 max-w-[180px]">
                  Reliable Support & Maintenance
                </div>
              </div>
            </div>

            <Link href="/about" className="px-5 py-4 bg-[#00BFD2] rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden hover:opacity-90 transition-opacity mt-2">
              <div className="self-stretch flex justify-start items-center gap-2.5">
                <div className="text-center justify-center text-white text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                  View more about us
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
