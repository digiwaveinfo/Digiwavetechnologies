interface DesignSectionProps {
  galleryImages?: string[];
  showcaseImageUrl?: string;
}

export default function DesignSection({ galleryImages, showcaseImageUrl }: DesignSectionProps) {
  // Use showcase image first, then first gallery image, then default
  const mainImage = showcaseImageUrl || galleryImages?.[0] || "/design-portfolio-image.png";
  
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Title - aligned with other sections */}
        <h2 className="text-sky-950 font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 sm:mb-8">
          Design
        </h2>
      </div>

      {/* Full Width Design Image - No padding, no rounded corners */}
      <div className="w-full">
        <img
          src={mainImage}
          alt="Design Mockups - Mobile App Interface Screens"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Additional Gallery Images */}
      {galleryImages && galleryImages.length > 1 && (
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.slice(1).map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={image}
                  alt={`Design Screenshot ${index + 2}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}