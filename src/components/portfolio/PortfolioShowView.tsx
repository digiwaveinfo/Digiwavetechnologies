import type { PortfolioItem } from "@/lib/api";
import PortfolioShowHero from "@/components/portfolio/show/PortfolioShowHero";
import PortfolioShowWidePreview from "@/components/portfolio/show/PortfolioShowWidePreview";
import PortfolioShowOverview from "@/components/portfolio/show/PortfolioShowOverview";
import PortfolioShowFeatures from "@/components/portfolio/show/PortfolioShowFeatures";
import PortfolioShowRelated from "@/components/portfolio/show/PortfolioShowRelated";

interface PortfolioShowViewProps {
  portfolio: PortfolioItem;
  relatedPortfolios: PortfolioItem[];
}

export default function PortfolioShowView({ portfolio, relatedPortfolios }: PortfolioShowViewProps) {
  return (
    <main className="bg-white min-h-screen">
      <PortfolioShowHero portfolio={portfolio} />
      <PortfolioShowWidePreview portfolio={portfolio} />
      <PortfolioShowOverview portfolio={portfolio} />
      <PortfolioShowFeatures portfolio={portfolio} />
      <PortfolioShowRelated items={relatedPortfolios} />
    </main>
  );
}
