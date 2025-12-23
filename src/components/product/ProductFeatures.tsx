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
      <div className="w-[1280px] mx-auto flex flex-col items-center gap-7">
        <div className="w-[727px] flex flex-col items-center gap-2.5">
          <div className="text-[#00BFD2] text-xl font-medium font-['Inter'] text-center">
            Features
          </div>
          <div className="text-[#00114C] text-4xl font-bold font-['Inter'] text-center">
            Key Features & Capabilities
          </div>
        </div>
        <div className="w-full flex justify-start items-start gap-5 flex-wrap">
          {FEATURES.map((feature, index) => (
            <div key={index} className="w-[603px] h-24 relative bg-white rounded-2xl border border-black/20 overflow-hidden">
              <div className="w-[470px] h-9 left-[30px] top-[31px] absolute text-stone-950 text-2xl font-medium font-['Inter'] leading-9">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}