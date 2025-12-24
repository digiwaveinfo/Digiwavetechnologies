import Section from "@/components/Section";

const FEATURES = [
  "Custom Web Application Development",
  "Responsive & Mobile-Friendly Design",
  "Secure Backend & API Development",
  "Third-Party Integrations",
  "Scalable Architecture",
  "Performance Optimization"
];

export default function ProductFeatures() {
  return (
    <Section bgColor="gray" spacing="large">
      <div className="w-full max-w-[1800px] mx-auto flex flex-col items-center gap-7">
        <div className="w-[727px] flex flex-col items-center gap-2.5">
          <div className="text-[#00BFD2] text-xl font-medium font-['Inter'] text-center">
            Features
          </div>
          <div className="text-[#00114C] text-4xl font-bold font-['Inter'] text-center">
            Key Features & Capabilities
          </div>
        </div>
        <div className="w-full flex justify-center items-start gap-5 flex-wrap">
          {FEATURES.map((feature, index) => (
            <div key={index} className="w-full lg:w-[calc(50%-0.625rem)] h-24 relative bg-white rounded-2xl border border-black/20 overflow-hidden flex items-center px-8">
              <div className="text-stone-950 text-2xl font-medium font-['Inter'] leading-9">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}