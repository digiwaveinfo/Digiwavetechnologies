import PortfolioSectionHeading from "@/components/portfolio/PortfolioSectionHeading";

interface DesignSectionProps {
  galleryImages?: string[];
  showcaseImageUrl?: string;
}

export default function DesignSection({ galleryImages, showcaseImageUrl }: DesignSectionProps) {
  const hasGallery = (galleryImages?.length ?? 0) > 0;
  if (!showcaseImageUrl && !hasGallery) {
    return null;
  }

  const mainImage = showcaseImageUrl || galleryImages?.[0];
  const extraImages = showcaseImageUrl
    ? (galleryImages ?? [])
    : (galleryImages?.slice(1) ?? []);

  return (
    <section className="py-16 sm:py-20 bg-[#fafbfc]">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <PortfolioSectionHeading
          eyebrow="Visual showcase"
          title="Design Gallery"
          description="Screens, flows, and interface highlights from the product."
        />

        {mainImage && (
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#E8E8EA] mb-8 group">
            <img
              src={mainImage}
              alt="Design showcase"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00114C]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        )}

        {extraImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {extraImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8E8EA] shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
