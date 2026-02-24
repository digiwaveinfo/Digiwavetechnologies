import Image from "next/image";
import Container from "../Container";

export default function StatisticsSection() {
  const stats = [
    {
      icon: "/about/icon-1.svg",
      value: "3+",
      label: "Years of Experience",
    },
    {
      icon: "/about/icon2.svg",
      value: "10+",
      label: "Active Clients",
    },
    {
      icon: "/about/icon-3.svg",
      value: "10+",
      label: "Successful Project",
    },
    {
      icon: "/about/icon-4.svg",
      value: "99.99%",
      label: "Accurate work",
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-16 overflow-hidden">
      <Container className="max-w-[1440px] flex items-center">
        <div className="relative w-full min-h-[600px] lg:h-[573px]">
          {/* Stats Cards - Positioned absolutely on desktop, 2x2 grid on mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-0 lg:block">
            {/* Card 1 - Top Left */}
            <div className="lg:absolute lg:left-0 lg:top-0 w-full sm:w-auto lg:w-[341px] h-auto min-h-[200px] sm:h-[273px] p-4 sm:p-[30px] bg-white shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] rounded-[26px] flex">
              <div className="flex flex-col justify-between items-start w-full">
                <div className="w-[70px] h-[70px] sm:w-[81px] sm:h-[81px] relative">
                  <Image
                    src={stats[0].icon}
                    alt={stats[0].label}
                    width={81}
                    height={81}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-0 sm:gap-[5px]">
                  <div className="text-[#00114C] text-[34px] sm:text-[40px] font-bold font-['Poppins'] leading-[46px] sm:leading-[60px]">
                    {stats[0].value}
                  </div>
                  <div className="text-[#0F0F10] text-sm sm:text-base font-normal font-['Inter'] leading-5 sm:leading-6">
                    {stats[0].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Top Right */}
            <div className="lg:absolute lg:left-[392px] lg:top-0 w-full sm:w-auto lg:w-[341px] h-auto min-h-[200px] sm:h-[273px] p-4 sm:p-[30px] bg-white shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] rounded-[26px] flex">
              <div className="flex flex-col justify-between items-start w-full">
                <div className="w-[70px] h-[70px] sm:w-[81px] sm:h-[81px] relative">
                  <Image
                    src={stats[1].icon}
                    alt={stats[1].label}
                    width={81}
                    height={81}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-0 sm:gap-[5px]">
                  <div className="text-[#00114C] text-[34px] sm:text-[40px] font-bold font-['Poppins'] leading-[46px] sm:leading-[60px]">
                    {stats[1].value}
                  </div>
                  <div className="text-[#0F0F10] text-sm sm:text-base font-normal font-['Inter'] leading-5 sm:leading-6">
                    {stats[1].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Bottom Left */}
            <div className="lg:absolute lg:left-0 lg:top-[300px] w-full sm:w-auto lg:w-[341px] h-auto min-h-[200px] sm:h-[273px] p-4 sm:p-[30px] bg-white shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] rounded-[26px] flex">
              <div className="flex flex-col justify-between items-start w-full">
                <div className="w-[70px] h-[70px] sm:w-[81px] sm:h-[81px] relative">
                  <Image
                    src={stats[2].icon}
                    alt={stats[2].label}
                    width={81}
                    height={81}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-0 sm:gap-[5px]">
                  <div className="text-[#00114C] text-[34px] sm:text-[40px] font-bold font-['Poppins'] leading-[46px] sm:leading-[60px]">
                    {stats[2].value}
                  </div>
                  <div className="text-[#0F0F10] text-sm sm:text-base font-normal font-['Inter'] leading-5 sm:leading-6">
                    {stats[2].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Bottom Right */}
            <div className="lg:absolute lg:left-[392px] lg:top-[300px] w-full sm:w-auto lg:w-[341px] h-auto min-h-[200px] sm:h-[273px] p-4 sm:p-[30px] bg-white shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] rounded-[26px] flex">
              <div className="flex flex-col justify-between items-start w-full">
                <div className="w-[70px] h-[70px] sm:w-[81px] sm:h-[81px] relative">
                  <Image
                    src={stats[3].icon}
                    alt={stats[3].label}
                    width={81}
                    height={81}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-0 sm:gap-[5px]">
                  <div className="text-[#00114C] text-[34px] sm:text-[40px] font-bold font-['Poppins'] leading-[46px] sm:leading-[60px]">
                    {stats[3].value}
                  </div>
                  <div className="text-[#0F0F10] text-sm sm:text-base font-normal font-['Inter'] leading-5 sm:leading-6">
                    {stats[3].label}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image (Mobile only: below cards) */}
          <div className="mt-6 lg:hidden w-full h-[250px] sm:h-[350px] bg-[#E2E2E2] rounded-[26px] overflow-hidden">
            <Image
              src="/about/statics-right-image.png"
              alt="Modern skyscraper buildings"
              width={908}
              height={606}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right side - Image (Desktop: absolutely positioned — ORIGINAL) */}
          <div className="hidden lg:block absolute right-0 top-0 w-[497px] h-[573px] bg-[#E2E2E2] rounded-[26px] overflow-hidden">
            <Image
              src="/about/statics-right-image.png"
              alt="Modern skyscraper buildings"
              width={908}
              height={606}
              className="object-fill "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
