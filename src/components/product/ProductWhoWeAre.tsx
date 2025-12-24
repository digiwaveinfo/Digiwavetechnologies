import Section from "@/components/Section";

export default function ProductWhoWeAre() {
  return (
    <Section spacing="large">
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#00114C] leading-tight mb-4">
            Who We Are Who We Are Who We Are
          </h2>
        </div>
        <div className="flex-1">
          <p className="text-brand-black leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies. Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri
          </p>
        </div>
      </div>
    </Section>
  );
}