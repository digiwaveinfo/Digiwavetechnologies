import type { PortfolioItem } from "@/lib/api";
import PortfolioShowTitleBlock from "@/components/portfolio/show/PortfolioShowTitleBlock";
import PortfolioShowTechnologyStack from "@/components/portfolio/show/PortfolioShowTechnologyStack";
import { overviewMetaFromPortfolio } from "@/lib/portfolio/presenters";

interface PortfolioShowOverviewProps {
  portfolio: PortfolioItem;
}

export default function PortfolioShowOverview({ portfolio }: PortfolioShowOverviewProps) {
  const meta = overviewMetaFromPortfolio(portfolio);

  return (
    <section className="py-16 sm:py-24 border-b border-[#E2E8F0] bg-white">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] max-w-[1440px] flex flex-col gap-12">
        <PortfolioShowTitleBlock title="Project Overview" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 flex flex-col gap-4 prose prose-lg max-w-none text-[#334155] prose-headings:text-[#0F172A]">
            <div dangerouslySetInnerHTML={{ __html: portfolio.full_description }} />
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {meta.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-sm"
              >
                <p className="text-[#94A3B8] text-[11px] font-bold tracking-wider mb-1">{item.label}</p>
                <p className="text-[#0F172A] text-sm font-semibold leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <PortfolioShowTechnologyStack technologies={portfolio.technologies ?? []} />
      </div>
    </section>
  );
}
