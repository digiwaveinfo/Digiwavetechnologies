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
    tag: "Mobile App",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
];

export default async function PortfolioGrid() {
  let portfolioItems = await getPortfolios();
  
  // Use fallback if no items from API
  if (portfolioItems.length === 0) {
    portfolioItems = fallbackPortfolios as any;
  }

  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              id={item.slug}
              title={item.title}
              description={item.short_description}
              imageUrl={item.card_image_url || "/portfolio-card-image.png"}
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