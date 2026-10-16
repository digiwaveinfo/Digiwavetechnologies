import type { PortfolioItem } from "@/lib/api";
import PortfolioShowTitleBlock from "@/components/portfolio/show/PortfolioShowTitleBlock";

interface PortfolioShowFeaturesProps {
  portfolio: PortfolioItem;
}

export default function PortfolioShowFeatures({ portfolio }: PortfolioShowFeaturesProps) {
  const features = portfolio.features ?? [];
  if (features.length === 0) {
    return null;
  }

  return (
    <section id="project-features" className="py-16 sm:py-24 border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] max-w-[1440px] flex flex-col gap-12">
        <div className="max-w-2xl mx-auto">
          <PortfolioShowTitleBlock
            title="Powerful Features"
            subtitle="Key capabilities delivered in this project."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-2 p-7 rounded-2xl border border-[#E2E8F0] bg-white hover:shadow-lg hover:border-[#A5F3FC]/60 transition"
            >
              <h3 className="text-[#0F172A] text-lg font-bold leading-7">{feature.title}</h3>
              <p className="text-[#475569] text-sm leading-[22px] line-clamp-5">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
