import type { PortfolioItem } from "@/lib/api";

export const PORTFOLIO_IMAGE_FALLBACK = "/technologies/Background.svg";

export const MAX_SHOWCASE_IMAGES = 5;

export function portfolioHeroImage(portfolio: PortfolioItem): string {
  return portfolio.hero_image_url || portfolio.card_image_url || PORTFOLIO_IMAGE_FALLBACK;
}

export function portfolioShowcaseSlides(portfolio: PortfolioItem): string[] {
  const fromApi = (portfolio.showcase_image_urls ?? []).filter(Boolean);
  if (fromApi.length > 0) {
    return fromApi.slice(0, MAX_SHOWCASE_IMAGES);
  }
  if (portfolio.showcase_image_url) {
    return [portfolio.showcase_image_url];
  }
  const fallback = portfolio.hero_image_url || portfolio.card_image_url;
  return fallback ? [fallback] : [PORTFOLIO_IMAGE_FALLBACK];
}

export function relatedPortfolios(all: PortfolioItem[], currentSlug: string, limit = 3): PortfolioItem[] {
  return all.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
