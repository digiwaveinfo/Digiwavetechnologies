import PortfolioSectionHeading from "@/components/portfolio/PortfolioSectionHeading";

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  features?: Feature[];
}

export default function PortfolioFeatures({
  title = "Features",
  features,
}: FeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f9ff]/80 via-white to-white pointer-events-none" />
      <div className="relative mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <PortfolioSectionHeading
          eyebrow="What we built"
          title={title}
          description="Core capabilities and highlights from the delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <article
              key={`${feature.title}-${index}`}
              className="relative p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E8EA] shadow-sm hover:shadow-xl hover:border-[#00BFD2]/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00BFD2]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00BFD2] to-[#0891b2] text-white text-sm font-bold shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#00114C] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
