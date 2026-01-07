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

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] flex flex-col gap-3">
        {/* Title */}
        <h2 className="text-[#00114C] text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[60px]">
          {title}
        </h2>

        {/* Tech Icons Row - Horizontal scroll on mobile, wrap on larger screens */}
        <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-[70px]">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center"
              style={{ width: '150px' }}
            >
              {/* Circular Background with Icon */}
              <div className="relative w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#a8b5e0] via-[#8F9ED1] to-[#7889c4] flex items-center justify-center">
                {tech.icon_url ? (
                  <img
                    src={tech.icon_url}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-white text-2xl font-bold">
                    {tech.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Tech Name */}
              <div
                className="mt-4 text-[#0F0F10] text-lg sm:text-xl font-normal leading-5 text-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

