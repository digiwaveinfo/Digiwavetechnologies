import PortfolioCard from "@/components/PortfolioCard";

const portfolioItems = [
  {
    id: "estate-facility",
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing.",
    imageUrl: "/portfolio-card-image.png",
    technologies: ["PHP", "Swift", "Python"]
  },
  {
    id: "estate-facility-2",
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing.",
    imageUrl: "/portfolio-card-image.png",
    technologies: ["PHP", "Swift", "Python"]
  },
  {
    id: "estate-facility-3",
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing.",
    imageUrl: "/portfolio-card-image.png",
    technologies: ["PHP", "Swift", "Python"]
  },
  {
    id: "estate-facility-4",
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing.",
    imageUrl: "/portfolio-card-image.png",
    technologies: ["PHP", "Swift", "Python"]
  },
  {
    id: "estate-facility-5",
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing.",
    imageUrl: "/portfolio-card-image.png",
    technologies: ["PHP", "Swift", "Python"]
  },
  {
    id: "estate-facility-6",
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing.",
    imageUrl: "/portfolio-card-image.png",
    technologies: ["PHP", "Swift", "Python"]
  }
];

export default function PortfolioGrid() {
  return (
    <section className="py-10 sm:py-20 px-4 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}