import Section from "@/components/Section";


const PROCESS_STEPS = [
  {
    number: "1",
    title: "Requirement Analysis",
    description: "We deep-dive into your vision."
  },
  {
    number: "2",
    title: "Strategic Design",
    description: "UI/UX crafted for your specific target audience."
  },
  {
    number: "3",
    title: "Agile Development",
    description: "Sprints with frequent updates and feedback loops."
  },
  {
    number: "4",
    title: "Rigorous QA",
    description: "Automated and manual testing for a bug-free launch."
  },
  {
    number: "5",
    title: "Deployment & Launch",
    description: "Secure go-live with 24/7 monitoring."
  },
  {
    number: "6",
    title: "Continuous Growth",
    description: "Post-launch support and AI-driven optimizations."
  }
];

export default function ProductProcess() {
  return (
    <Section spacing="large" className="relative overflow-hidden">
      <div className="relative w-full max-w-[1800px] mx-auto">
        {/* Decorative curve - hidden on mobile */}
        <div className="hidden lg:block absolute left-[314.45px] top-[169.13px]">
          <svg width="738" height="958" viewBox="0 0 738 958" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M74.5133 119.867C74.5133 119.867 647.395 -125.518 693.013 87.3668C744.013 325.366 -104.614 289.932 20.0133 493.867C144.64 697.802 537.985 274.139 632.013 493.867C727.013 715.866 -138.987 668.866 20.0133 895.367C157.409 1091.09 737.513 758.366 737.513 758.366" stroke="#84CDCC" strokeDasharray="12 12" />
          </svg>
        </div>

        {/* Header and Content */}
        <div className="w-full relative flex flex-col items-center gap-7 px-4 lg:px-0">
          <div className="w-full lg:w-[727px] flex flex-col items-center gap-2.5">
            <div className="text-[#00BFD2] text-xl font-medium font-['Inter'] text-center">
              How does it works
            </div>
            <div className="text-[#00114C] text-2xl lg:text-4xl font-bold font-['Inter'] text-center">
              Our Process
            </div>
          </div>

          {/* Process Cards Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={index}
                className="group w-full min-h-[346px] lg:h-[346px] relative bg-[rgba(200,217,215,0.08)] rounded-[26px] overflow-hidden transition-all duration-300 outline-none border-2 border-transparent hover:bg-[rgba(0,242,217,0.06)] hover:shadow-[1px_0px_5.3px_1px_rgba(0,242,217,0.06)] hover:border-[#00BFD2]"
              >
                {/* Step Number */}
                <div className="absolute left-[22px] top-[-1px] text-[rgba(200,217,215,0.21)] group-hover:text-[rgba(148,227,219,0.21)] text-[133px] font-extrabold font-['Inter'] leading-none select-none transition-colors duration-300">
                  {step.number}
                </div>

                {/* Title Card */}
                <div className="absolute left-[46px] top-[95px] w-[calc(100%-92px)] h-[87px] bg-white rounded-[11px] shadow-[0px_4px_2.8px_rgba(0,191,210,0.12)] overflow-hidden flex items-center px-6">
                  <div className="text-[#0F0F10] text-2xl font-semibold font-['Inter'] leading-9">
                    {step.title}
                  </div>
                </div>

                {/* Description */}
                <div className="absolute left-[46px] top-[202px] w-[calc(100%-92px)] text-[#0F0F10] text-xl font-normal font-['Inter'] leading-[30px]">
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