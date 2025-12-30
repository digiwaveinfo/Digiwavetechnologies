import React from "react";
import Image from "next/image";

export default function StatisticsSection() {
  const stats = [
    {
      icon: "/calender.png",
      value: "3+",
      label: "Years of Experience",
    },
    {
      icon: "/client.png",
      value: "10+",
      label: "Active Clients",
    },
    {
      icon: "/done-icon.png",
      value: "10+",
      label: "Successful Project",
    },
    {
      icon: "/active-work.png",
      value: "99.99%",
      label: "Accurate work",
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1800px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex p-[30px] items-center gap-2.5 rounded-[26px] bg-white shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] min-h-[240px] lg:min-h-[273px]"
              >
                <div className="flex flex-col justify-between h-full w-full">
                  <div className="w-20 h-20 relative mb-auto">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] mt-6">
                    <div className="font-['Poppins'] font-bold text-[40px] leading-[60px] text-[#00114C]">
                      {stat.value}
                    </div>
                    <div className="font-['Inter'] font-normal text-base leading-6 text-[#0F0F10]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] h-[400px] lg:h-[550px] relative">
              <Image
                src="/Group.png"
                alt="Modern skyscraper buildings"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
