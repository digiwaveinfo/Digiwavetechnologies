import type { PortfolioItem } from "@/lib/api";
import { portfolioHeroImage } from "@/lib/portfolio/show-helpers";
import PortfolioShowBreadcrumbs from "@/components/portfolio/show/PortfolioShowBreadcrumbs";
import PortfolioShowBrowserMock from "@/components/portfolio/show/PortfolioShowBrowserMock";

interface PortfolioShowHeroProps {
  portfolio: PortfolioItem;
}

const titleSize =
  "text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.12] tracking-tight";
const subtitleSize =
  "text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.12] tracking-tight";

export default function PortfolioShowHero({ portfolio }: PortfolioShowHeroProps) {
  const heroImage = portfolioHeroImage(portfolio);
  const techPills = portfolio.technologies?.map((t) => t.name) ?? [];
  const subtitle = portfolio.subtitle?.trim();
  const showSubtitle =
    subtitle && subtitle.toLowerCase() !== portfolio.title.trim().toLowerCase();

  return (
    <section className="border-b border-[#E2E8F0] bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFC]/50 to-white pt-16 sm:pt-20 pb-14 sm:pb-16 overflow-hidden">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] max-w-[1440px] flex flex-col gap-5 sm:gap-6">
        <PortfolioShowBreadcrumbs projectName={portfolio.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1
                className={`${titleSize} bg-gradient-to-r from-[#00A2B3] via-[#00BFD2] to-[#00114C] bg-clip-text text-transparent`}
              >
                {portfolio.title}
              </h1>
              {showSubtitle && (
                <p className={`${subtitleSize} text-[#0F172A]`}>{subtitle}</p>
              )}
            </div>

            <p className="text-[#475569] text-base sm:text-lg leading-7 max-w-xl">
              {portfolio.short_description}
            </p>

            {techPills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {techPills.map((pill) => (
                  <span
                    key={pill}
                    className="py-1 px-3 rounded-full border border-[#E2E8F0] bg-white text-[#334155] text-xs font-semibold shadow-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            )}

            {portfolio.live_url && (
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href={portfolio.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-brand-cyan text-white text-sm font-bold shadow-[0_4px_16px_rgba(0,191,210,0.4)] hover:brightness-105 transition"
                >
                  View Live Project
                  <ExternalIcon />
                </a>
              </div>
            )}
          </div>

          <PortfolioShowBrowserMock imageUrl={heroImage} imageAlt={`${portfolio.title} hero`} />
        </div>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M1.5 13.5C1.0875 13.5 0.734375 13.3531 0.440625 13.0594C0.146875 12.7656 0 12.4125 0 12V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H6.75V1.5H1.5V12H12V6.75H13.5V12C13.5 12.4125 13.3531 12.7656 13.0594 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5H1.5ZM5.025 9.525L3.975 8.475L10.95 1.5H8.25V0H13.5V5.25H12V2.55L5.025 9.525Z"
        fill="white"
      />
    </svg>
  );
}
