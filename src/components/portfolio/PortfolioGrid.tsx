import PortfolioCard from "@/components/PortfolioCard";
import { getPortfolios } from "@/lib/api";

// Fallback data when API is unavailable
const fallbackPortfolios = [
  {
    id: "1",
    slug: "estate-facility",
    title: "Estate Facility",
    subtitle: "All Services One Solution",
    short_description: "A comprehensive property management solution with real-time tracking and analytics.",
    tag: "",
    technologies: [{ id: 1, name: "React Native" }, { id: 2, name: "Node.js" }, { id: 3, name: "MongoDB" }],
  },
];

export default async function PortfolioGrid() {
  let portfolioItems = await getPortfolios();

  // Use fallback if no items from API
  if (portfolioItems.length === 0) {
    portfolioItems = fallbackPortfolios as any;
  }

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              id={item.slug}
              title={item.title}
              description={item.short_description}
              imageUrl={item.card_image_url || "/portfolio-card-image.webp"}
              technologies={item.technologies || []}
              tag={item.tag}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}