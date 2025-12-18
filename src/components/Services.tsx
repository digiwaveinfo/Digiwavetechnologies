import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Application Development",
      description: "Custom high-performance web solutions tailored for scale.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3f5c6b3d663ecc01e18ae177e232243b61d97576?width=806",
      titleColor: "text-[#0064AC]",
    },
    {
      title: "Mobile App Development",
      description: "Android, iOS, and cross-platform apps built for engagement.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/917d50598d6a8f171dd1a7d201159fde9ed14c99?width=970",
      titleColor: "text-[#0064AC]",
    },
    {
      title: (
        <>
          AI–ML <br /> Solutions
        </>
      ),
      description: "Intelligent systems that automate, analyze, and optimize.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7309ec19426c194dd2e948fe4906e3ab122a4585?width=970",
      titleColor: "text-[#0064AC]",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 flex flex-col justify-start items-center bg-white relative overflow-hidden">
      {/* Left side background */}
      <div className="absolute left-0 top-0 w-[1164px] h-[919px] opacity-10 pointer-events-none z-0">
        <svg width="788" height="921" viewBox="0 0 788 921" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[251.78px] top-0">
          <path d="M744.674 920.25C744.674 920.25 807.771 728.427 778.592 610.148C695.44 273.093 20.5165 965.871 -109.721 644.066C-217.442 377.898 247.219 1.25026 247.219 1.25026" stroke="#00BFD2" strokeWidth="3.23023" />
        </svg>
        <svg width="537" height="921" viewBox="0 0 537 921" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
          <path d="M492.891 920.25C492.891 920.25 555.988 728.427 526.809 610.148C443.657 273.093 -231.266 965.871 -361.504 644.066C-469.225 377.898 -4.56385 1.25026 -4.56385 1.25026" stroke="#00BFD2" strokeWidth="3.23023" />
        </svg>
        <svg width="625" height="921" viewBox="0 0 625 921" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[88.12px] top-0">
          <path d="M581.014 920.25C581.014 920.25 644.111 728.427 614.931 610.148C531.78 273.093 -143.144 965.871 -273.382 644.066C-381.103 377.898 83.5587 1.25026 83.5587 1.25026" stroke="#00BFD2" strokeWidth="3.23023" />
        </svg>
        <svg width="722" height="921" viewBox="0 0 722 921" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[185.69px] top-0">
          <path d="M678.581 920.25C678.581 920.25 741.677 728.427 712.498 610.148C629.346 273.093 -45.577 965.871 -175.815 644.066C-283.536 377.898 181.125 1.25026 181.125 1.25026" stroke="#00BFD2" strokeWidth="3.23023" />
        </svg>
      </div>

      {/* Right side background */}
      <div className="absolute right-[-500px] top-0 w-[1106px] h-[873px] opacity-10 pointer-events-none z-0">
        <svg width="363" height="875" viewBox="0 0 363 875" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[239.27px] top-0">
          <path d="M828.881 0.477173C828.881 0.477173 888.843 182.771 861.114 295.173C782.093 615.483 140.701 -42.8769 16.933 262.941C-85.4363 515.885 356.14 873.821 356.14 873.821" stroke="#00BFD2" strokeWidth="3.06975" />
        </svg>
        <svg width="602" height="875" viewBox="0 0 602 875" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
          <path d="M828.881 0.477173C828.881 0.477173 888.843 182.771 861.114 295.173C782.093 615.483 140.701 -42.8769 16.933 262.941C-85.4363 515.885 356.14 873.821 356.14 873.821" stroke="#00BFD2" strokeWidth="3.06975" />
        </svg>
        <svg width="518" height="875" viewBox="0 0 518 875" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[83.74px] top-0">
          <path d="M828.881 0.477173C828.881 0.477173 888.843 182.771 861.114 295.173C782.093 615.483 140.701 -42.8769 16.933 262.941C-85.4363 515.885 356.14 873.821 356.14 873.821" stroke="#00BFD2" strokeWidth="3.06975" />
        </svg>
        <svg width="426" height="875" viewBox="0 0 426 875" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[176.46px] top-0">
          <path d="M828.881 0.477173C828.881 0.477173 888.843 182.771 861.114 295.173C782.093 615.483 140.701 -42.8769 16.933 262.941C-85.4363 515.885 356.14 873.821 356.14 873.821" stroke="#00BFD2" strokeWidth="3.06975" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full flex flex-col items-center gap-4 mb-12">
          <div className="text-center text-[#00BFD2] text-xl font-medium font-['Poppins']">
            Services
          </div>
          <div className="text-center text-[#00114C] text-3xl md:text-4xl font-bold font-['Poppins'] leading-tight">
            Built Using Future-Ready Technologies
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 mb-16 w-full">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center relative h-[400px] w-full max-w-[384px] mx-auto group">
              {/* Image Container */}
              <div className="w-full h-64 absolute top-0 left-0 bg-neutral-200 rounded-3xl overflow-hidden shadow-sm z-0">
                <img
                  src={typeof service.image === "string" ? service.image : ""}
                  alt="Service Image"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Card - Overlapping */}
              <div className="w-[85%] h-48 absolute top-[202px] bg-white rounded-3xl shadow-[0px_6px_20px_0px_rgba(0,0,0,0.04)] overflow-hidden z-10 flex flex-col items-center justify-center px-6 transition-all hover:shadow-lg">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className={`text-center ${service.titleColor} text-xl font-bold font-['Inter'] leading-8`}>
                    {service.title}
                  </div>
                  <div className="text-center text-black text-base font-normal font-['Rubik'] leading-6">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All services Button */}
        <Link href="/services" className="px-5 py-4 bg-[#00BFD2] rounded-[247px] flex flex-col justify-start items-start gap-2.5 overflow-hidden hover:opacity-90 transition-opacity">
          <div className="self-stretch flex justify-start items-center gap-2.5">
            <div className="text-center text-white text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
              View All services
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
