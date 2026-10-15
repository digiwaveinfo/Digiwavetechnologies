import type { PortfolioItem } from "@/lib/api";

export type CardImageSlide = { id: string; image_url: string };

/** Tags for badges: prefers `tags`, else splits comma-separated `tag`. */
export function normalizeTags(
  portfolio: Pick<PortfolioItem, "tag" | "tags">
): string[] {
  const fromArray = (portfolio.tags ?? []).filter(Boolean);
  if (fromArray.length > 0) {
    return fromArray;
  }
  return (portfolio.tag ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

/** Card carousel images from API list payload (card_images or card_image_url). */
export function cardImagesFromListItem(
  item: Pick<PortfolioItem, "card_images" | "card_image_url" | "slug" | "id">
): CardImageSlide[] {
  const fromGallery = (item.card_images ?? []).map((img) => ({
    id: img.id,
    image_url: img.image_url,
  }));
  if (fromGallery.length > 0) {
    return fromGallery;
  }
  if (item.card_image_url) {
    return [{ id: item.slug || item.id, image_url: item.card_image_url }];
  }
  return [];
}

export type OverviewMetaItem = { label: string; value: string };

const OVERVIEW_EMPTY = "—";

function displayValue(value?: string | null): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : OVERVIEW_EMPTY;
}

/** Fixed overview sidebar cards for the project detail page. */
export function overviewMetaFromPortfolio(
  portfolio: Pick<PortfolioItem, "target_audience" | "industry" | "delivery_timeline" | "tag">
): OverviewMetaItem[] {
  return [
    { label: "TARGET AUDIENCE", value: displayValue(portfolio.target_audience) },
    { label: "PLATFORM", value: displayValue(portfolio.tag) },
    { label: "INDUSTRY", value: displayValue(portfolio.industry) },
    { label: "DELIVERY TIMELINE", value: displayValue(portfolio.delivery_timeline) },
  ];
}
