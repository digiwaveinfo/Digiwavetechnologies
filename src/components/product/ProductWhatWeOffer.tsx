import Section from "@/components/Section";

export default function ProductWhatWeOffer() {
  return (
    <Section spacing="large">
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-11">
        <div className="w-full lg:w-1/2 h-96 relative rounded-3xl overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b136b83f82601fc5126fbdf7556921a346fcf0cf?width=1760"
            alt="Modern skyscraper architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-7">
          <div className="w-full lg:w-[533px] flex flex-col gap-2.5">
            <div className="flex flex-col gap-3.5">
              <div className="text-[#00BFD2] text-xl font-medium font-['Inter']">
                About service
              </div>
              <div className="text-[#00114C] text-4xl font-bold font-['Inter']">
                What We Offer
              </div>
            </div>
            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6 mb-4">
              Our web application development service focuses on building robust, responsive, and scalable applications using modern frameworks and industry best practices. Whether you need a SaaS platform, enterprise system, or custom business tool, we deliver solutions that grow with your business.
            </div>
            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
              Our web application development service focuses on building robust, responsive, and scalable applications using modern frameworks and industry best practices. Whether you need a SaaS platform, enterprise system, or custom business tool, we deliver solutions that grow with your business.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}