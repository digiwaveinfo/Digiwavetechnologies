import Link from "next/link";
import { normalizeTags } from "@/lib/portfolio/presenters";
import type { PortfolioItem } from "@/lib/api";

interface PortfolioShowHeaderProps {
  portfolio: PortfolioItem;
}

export default function PortfolioShowHeader({ portfolio }: PortfolioShowHeaderProps) {
  const tagList = normalizeTags(portfolio);

  return (
    <>
      {/* Hero band — matches site portfolio / services hero */}
      <section className="relative bg-[#022030] pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute w-6 h-[600px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-60 -left-40 -top-20 pointer-events-none" />
        <div className="absolute w-6 h-[500px] rotate-[43deg] bg-[#00BFD2] blur-[80px] opacity-40 right-0 top-10 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #62F4F3 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#62F4F3] text-sm font-medium mb-8 transition-colors group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 group-hover:border-[#00BFD2]/50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </span>
            Back to Portfolio
          </Link>

          {tagList.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tagList.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-[#62F4F3] border border-white/10 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              {portfolio.title}
            </h1>
            {portfolio.subtitle && (
              <p className="mt-4 text-[#62F4F3] text-lg sm:text-xl font-medium">{portfolio.subtitle}</p>
            )}
          </div>

          {portfolio.live_url && (
            <div className="flex justify-center mt-10">
              <a
                href={portfolio.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00BFD2] to-[#0891b2] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-[#00BFD2]/25 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                View Live Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Overview + hero visual */}
      <section className="relative -mt-12 sm:-mt-16 pb-16 sm:pb-20">
        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {portfolio.hero_image_url && (
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00BFD2] via-[#62F4F3] to-[#0891b2] rounded-2xl sm:rounded-3xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#00114C]/5">
                    <img
                      src={portfolio.hero_image_url}
                      alt={portfolio.title}
                      className="w-full h-auto min-h-[240px] sm:min-h-[320px] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className={`order-2 lg:order-1 ${portfolio.hero_image_url ? "lg:col-span-5" : "lg:col-span-12"}`}>
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E8E8EA] shadow-[0_8px_40px_rgba(0,17,76,0.08)] p-6 sm:p-8 lg:p-10 h-full">
                <span className="text-[#00BFD2] text-xs font-semibold uppercase tracking-[0.2em]">Overview</span>
                <h2 className="text-[#00114C] text-xl sm:text-2xl font-bold mt-2 mb-4">About this project</h2>
                <div
                  className="text-gray-600 text-base sm:text-lg leading-relaxed rich-text-content prose prose-slate max-w-none prose-headings:text-[#00114C]"
                  dangerouslySetInnerHTML={{ __html: portfolio.full_description }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
