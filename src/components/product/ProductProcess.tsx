import Section from "@/components/Section";

const PROCESS_STEPS = [
  {
    number: "1",
    title: "Requirement Analysis",
    description: "We begin by deeply understanding your business objectives, target audience, and technical requirements. This phase helps us align the solution with your long-term vision and avoid costly rework later."
  },
  {
    number: "2",
    title: "UI/UX Design",
    description: "Our design team focuses on creating intuitive, visually engaging, and user-centered interfaces. Every screen is crafted to ensure ease of use and seamless navigation."
  },
  {
    number: "3",
    title: "Building Scalable & Secure Solutions",
    description: "Using modern frameworks and clean coding practices, we transform designs into functional, high-performance applications."
  },
  {
    number: "4",
    title: "Testing & Quality Assurance",
    description: "We rigorously test the application to identify bugs, improve performance, and ensure a seamless user experience across devices."
  },
  {
    number: "5",
    title: "Launching with Confidence",
    description: "Once the application passes all quality checks, we ensure a smooth and secure deployment with minimal downtime."
  },
  {
    number: "6",
    title: "Continuous Improvement & Growth",
    description: "Our relationship doesn't end at launch. We provide ongoing support to keep your product secure, updated, and competitive."
  }
];

export default function ProductProcess() {
  return (
    <Section spacing="large" className="relative overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto relative">
        {/* Decorative curve - hidden on mobile */}
        <div className="hidden lg:block absolute left-[314.45px] top-[169.13px]">
          <svg width="738" height="958" viewBox="0 0 738 958" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M74.5133 119.867C74.5133 119.867 647.395 -125.518 693.013 87.3668C744.013 325.366 -104.614 289.932 20.0133 493.867C144.64 697.802 537.985 274.139 632.013 493.867C727.013 715.866 -138.987 668.866 20.0133 895.367C157.409 1091.09 737.513 758.366 737.513 758.366" stroke="#84CDCC" strokeDasharray="12 12" />
          </svg>
        </div>

        {/* Header and Content */}
        <div className="w-full max-w-[1800px] relative flex flex-col items-center gap-7 px-4 lg:px-0">
          <div className="w-full lg:w-[727px] flex flex-col items-center gap-2.5">
            <div className="text-[#00BFD2] text-xl font-medium font-['Inter'] text-center">
              How does it works
            </div>
            <div className="text-[#00114C] text-2xl lg:text-4xl font-bold font-['Inter'] text-center">
              Our Process
            </div>
          </div>

          {/* Process Cards Grid */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8 flex-wrap">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={index}
                className="w-full lg:w-[calc(50%-1rem)] min-h-[280px] lg:h-80 relative bg-gray-300/10 rounded-3xl shadow-[1px_0px_5.300000190734863px_1px_rgba(64,64,64,0.27)] border border-gray-300/20 overflow-hidden transition-all duration-300 active:bg-cyan-400/5 active:border-cyan-500 lg:hover:bg-cyan-400/5 lg:hover:shadow-[1px_0px_5.300000190734863px_1px_rgba(0,242,217,0.06)] lg:hover:border-2 lg:hover:border-cyan-500"
              >
                {/* Step Number */}
                <div className="absolute left-4 lg:left-[22px] top-0 text-gray-300/20 text-7xl lg:text-9xl font-extrabold font-['Inter'] transition-colors duration-300">
                  {step.number}
                </div>

                {/* Title Card */}
                <div className="mx-4 lg:mx-[46px] mt-20 lg:mt-[95px] bg-white rounded-xl shadow-[0px_4px_2.799999952316284px_0px_rgba(0,191,210,0.12)] overflow-hidden p-4 lg:p-6">
                  <div className="text-stone-950 text-xl lg:text-2xl font-semibold font-['Inter'] leading-tight lg:leading-9">
                    {step.title}
                  </div>
                </div>

                {/* Description */}
                <div className="mx-4 lg:mx-[46px] mt-4 lg:mt-6 text-stone-950 text-base lg:text-xl font-normal font-['Inter'] leading-relaxed lg:leading-7 pr-4 pb-4">
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}