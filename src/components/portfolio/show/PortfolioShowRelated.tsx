import Link from "next/link";
import type { PortfolioItem } from "@/lib/api";
import PortfolioShowTitleBlock from "@/components/portfolio/show/PortfolioShowTitleBlock";
import { PORTFOLIO_IMAGE_FALLBACK } from "@/lib/portfolio/show-helpers";

interface PortfolioShowRelatedProps {
  items: PortfolioItem[];
}

export default function PortfolioShowRelated({ items }: PortfolioShowRelatedProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] max-w-[1440px] flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <PortfolioShowTitleBlock title="Explore More Projects" />
          <Link
            href="/portfolio"
            className="text-[#00838F] text-sm font-bold flex items-center gap-1.5 hover:underline shrink-0"
          >
            View all work
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((project) => {
            const image = project.card_image_url || PORTFOLIO_IMAGE_FALLBACK;
            return (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative bg-[#0F172A] h-[200px] sm:h-[242px] overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover opacity-90"
                  />
                  {project.tag && (
                    <span className="absolute left-3 top-3 py-1 px-3 rounded-full border border-[#CFFAFE] bg-white/90 text-[#00838F] text-[11px] font-bold tracking-wide">
                      {project.tag}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h3 className="text-[#0F172A] text-lg font-bold">{project.title}</h3>
                  <p className="text-[#475569] text-sm leading-5 line-clamp-3">{project.short_description}</p>
                </div>
                <div className="px-6 pb-6">
                  <span className="text-[#00838F] text-xs font-bold inline-flex items-center gap-1">
                    View Project →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
