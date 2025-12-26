import Section from "@/components/Section";

export default function ProductWhatWeOffer() {
  const offerings = [
    {
      title: "Custom AI Model Development",
      description: "Tailored AI solutions designed specifically for your business needs and industry requirements."
    },
    {
      title: "NLP & Large Language Integration",
      description: "Advanced natural language processing and seamless integration with large language models."
    },
    {
      title: "Computer Vision & Predictive Analytics",
      description: "Intelligent visual recognition systems and data-driven predictive modeling solutions."
    },
    {
      title: "Data Pipelines & Visualization",
      description: "Robust data processing workflows and intuitive visualization dashboards for actionable insights."
    }
  ];

  return (
    <Section spacing="large">
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-11">
        <div className="w-full lg:w-1/2 h-96 relative rounded-3xl overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b136b83f82601fc5126fbdf7556921a346fcf0cf?width=1760"
            alt="AI and Machine Learning Technology"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-7 items-center lg:items-start">
          <div className="w-full flex flex-col gap-6 text-center lg:text-left">
            <div className="flex flex-col gap-3.5 items-center lg:items-start">
              <div className="text-[#00BFD2] text-xl font-medium font-['Inter']">
                AI Solutions
              </div>
              <div className="text-[#00114C] text-4xl font-bold font-['Inter']">
                What We Offer
              </div>
            </div>
            
            {/* AI Offerings List */}
            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00BFD2] to-[#62F4F3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#00114C] text-lg font-bold font-['Inter'] mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                      {offering.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}