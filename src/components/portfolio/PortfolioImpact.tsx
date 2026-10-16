import PortfolioSectionHeading from "@/components/portfolio/PortfolioSectionHeading";

interface PortfolioImpactProps {
  title?: string;
  impact?: string;
}

export default function PortfolioImpact({
  title = "The Impact",
  impact,
}: PortfolioImpactProps) {
  if (!impact) {
    return null;
  }

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00114C] via-[#022030] to-[#0a2540]" />
      <div className="absolute w-96 h-96 -right-32 top-0 bg-[#00BFD2]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute w-64 h-64 -left-20 bottom-0 bg-[#62F4F3]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <PortfolioSectionHeading
          eyebrow="Results"
          title={title}
          light
          align="center"
        />

        <div className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10">
          <div
            className="text-white/90 text-base sm:text-lg leading-relaxed text-center rich-text-content [&_ul]:text-left [&_ol]:text-left [&_a]:text-[#62F4F3]"
            dangerouslySetInnerHTML={{ __html: impact }}
          />
        </div>
      </div>
    </section>
  );
}
