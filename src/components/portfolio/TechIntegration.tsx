interface Technology {
  id: number;
  name: string;
  description?: string;
  category?: string;
  icon_url?: string;
  is_active?: boolean;
}

interface TechIntegrationProps {
  title?: string;
  technologies?: Technology[];
}

export default function TechIntegration({
  title = "Tech Integration",
  technologies = [],
}: TechIntegrationProps) {
  // Don't render if no technologies
  if (!technologies || technologies.length === 0) {
    return null;
  }

  // Filter to only show technologies that have uploaded icons
  const technologiesWithIcons = technologies.filter(tech => tech.icon_url);

  // Don't render if no technologies have icons
  if (technologiesWithIcons.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-4 sm:gap-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[60px] text-[#0A2540]">
          {title}
        </h2>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-[70px]">
          {technologiesWithIcons.map((tech) => (
            <div
              key={tech.id}
              className="tech-card flex flex-col items-center gap-3 sm:gap-4"
            >
              {/* Circular Background with Icon */}
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                {/* Background Circle */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a8b5e0] via-[#8F9ED1] to-[#7889c4]"
                />
                {/* Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img 
                    src={tech.icon_url} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Tech Name */}
              <div className="text-base sm:text-xl font-normal leading-5 text-center text-[#1a1a1a] whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-2">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
