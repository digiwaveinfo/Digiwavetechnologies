export default function Industries() {
  const industries = [
    { 
      name: "Logistic", 
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/e42a294a78c59eb6184b086742f6edfdecfc135d?width=48" 
    },
    { 
      name: "Healthcare", 
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d56933f47aa9a525bb50096ad75795eb77057689?width=48" 
    },
    { 
      name: "Bank & Insurabnce", 
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2ef9d526b251d1c94b5cf022738a5fc94e2fb93e?width=48" 
    },
    { 
      name: "E-Commerce", 
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/580a40ccb0eba40dae4e653e604a6993a82f8db8?width=48" 
    },
    { 
      name: "Consulting Providers", 
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a15cd06fc09b1c15e7fd8228fb8a6d89bdaa63a6?width=48" 
    },
    { 
      name: "Many Others", 
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a834d82c3722a88ee532d9ea42677ada78e02b2c?width=48" 
    }
  ];

  return (
    <section className="relative bg-brand-dark-blue py-20 shadow-[0_4px_23px_rgba(0,0,0,0.16)] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-20 flex items-start gap-16">
        <div className="flex-[0_0_551px]">
          <h3 className="text-brand-cyan font-poppins font-medium text-xl mb-4">Services</h3>
          <h2 className="text-brand-white font-poppins font-bold text-[40px] leading-tight">
            Solving IT challenges in every industry, every day.
          </h2>
        </div>
        <div className="flex gap-7 flex-1">
          <div className="flex flex-col gap-6 flex-1">
            {industries.slice(0, 3).map((industry, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3.5 flex items-center gap-5 hover:shadow-lg transition-shadow"
              >
                <div className="w-[38px] h-[38px] bg-[rgba(0,191,210,0.09)] rounded flex items-center justify-center flex-shrink-0">
                  <img 
                    src={industry.icon} 
                    alt={industry.name} 
                    className="w-6 h-6" 
                  />
                </div>
                <span className="text-black font-inter font-medium text-base whitespace-nowrap">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 flex-1">
            {industries.slice(3).map((industry, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3.5 flex items-center gap-5 hover:shadow-lg transition-shadow"
              >
                <div className="w-[38px] h-[38px] bg-[rgba(0,191,210,0.09)] rounded flex items-center justify-center flex-shrink-0">
                  <img 
                    src={industry.icon} 
                    alt={industry.name} 
                    className="w-6 h-6" 
                  />
                </div>
                <span className="text-black font-inter font-medium text-base whitespace-nowrap">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}