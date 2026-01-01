interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  features?: Feature[];
}

export default function Features({
  title = "Features",
  features,
}: FeaturesProps) {
  // Don't render if no features
  if (!features || features.length === 0) {
    return null;
  }

  // Split features into two columns
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-10 sm:py-12 lg:py-16">
      <div className="max-w-[1800px] mx-auto flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[60px] text-[#0A2540]">
          {title}
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="text-sm sm:text-base font-normal leading-relaxed lg:leading-[30px] text-[#1a1a1a]">
                <span className="font-semibold">{feature.title}:</span> {feature.description}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-4">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="text-sm sm:text-base font-normal leading-relaxed lg:leading-[30px] text-[#1a1a1a]">
                <span className="font-semibold">{feature.title}:</span> {feature.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
