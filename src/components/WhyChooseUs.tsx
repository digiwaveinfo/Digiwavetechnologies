export default function WhyChooseUs() {
  const advantages = [
    {
      title: "AI-First Mentality",
      description: "We implement automation in every layer of development."
    },
    {
      title: "Industry-Specific Logic",
      description: "We understand the nuances of Healthcare, Fintech, and Logistics."
    },
    {
      title: "Scalable Architecture",
      description: "Built for 1,000 users today and 1,000,000 tomorrow."
    },
    {
      title: "100% Transparency",
      description: "Real-time updates and dedicated engineer access."
    }
  ];

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-10">
          <h3 className="text-[#00BFD2] font-poppins font-medium text-xl mb-3">
            Why Choose Us
          </h3>
        </div>

        {/* Left-Right Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Side - Title */}
          <div className="w-full lg:flex-[0_0_400px]">
            <h2 className="text-[#00114C] font-poppins font-bold text-3xl lg:text-[40px] leading-tight lg:leading-[50px] text-center lg:text-left">
              Why Our Services Are Better
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1">
            <p className="text-[#0c0c0c] font-inter text-base lg:text-lg leading-7 mb-6 text-center lg:text-left">
              Most companies offer generic development. At Digiwave, we offer <span className="font-semibold text-[#00BFD2]">AI-Infused Engineering</span>. Whether it's a mobile app or a cloud migration, we look for ways to automate, optimize, and add intelligence to your product.
            </p>

            {/* The Digiwave Edge - Bullet Points */}
            <div>
              <h4 className="text-[#00114C] font-poppins font-bold text-lg lg:text-xl mb-4 text-center lg:text-left">
                The Digiwave Edge:
              </h4>
              
              <ul className="flex flex-col gap-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#00BFD2] mt-1 flex-shrink-0">✔</span>
                    <span className="text-[#0c0c0c] font-inter text-base leading-7">
                      <span className="font-semibold text-[#00114C]">{advantage.title}:</span> {advantage.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
