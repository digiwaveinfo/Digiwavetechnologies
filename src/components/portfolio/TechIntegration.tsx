import PortfolioSectionHeading from "@/components/portfolio/PortfolioSectionHeading";

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
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#E8E8EA]/80">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <PortfolioSectionHeading
          eyebrow="Built with"
          title={title}
          description="The stack and tools we used to deliver this solution."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="group relative flex flex-col items-center p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white to-[#f8fafc] border border-[#E8E8EA] hover:border-[#00BFD2]/40 hover:shadow-lg hover:shadow-[#00BFD2]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-gradient-to-br from-[#00114C] via-[#0a2540] to-[#00BFD2]/80 p-[2px] group-hover:from-[#00BFD2] group-hover:to-[#0891b2] transition-all">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                  {tech.icon_url ? (
                    <img src={tech.icon_url} alt="" className="w-9 h-9 object-contain" />
                  ) : (
                    <span className="text-[#00114C] text-xl font-bold">
                      {tech.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-4 text-[#00114C] text-sm sm:text-base font-semibold text-center leading-snug">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
