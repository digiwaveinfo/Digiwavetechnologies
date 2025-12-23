interface HeroSectionProps {
  label?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: "small" | "medium" | "large";
}

const heightClasses = {
  small: "py-12 md:py-16",
  medium: "py-16 md:py-20",
  large: "py-20 md:py-32"
};

export default function HeroSection({
  label,
  title,
  subtitle,
  backgroundImage,
  height = "medium"
}: HeroSectionProps) {
  return (
    <section
      className={`relative bg-[#022030] px-5 md:px-20 ${heightClasses[height]} overflow-hidden`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : {}
      }
    >
      {/* Background blur effects */}
      <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 -left-52 -top-36" />
      <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[436px] -top-14" />
      <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[861px] top-28" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {label && (
          <p className="text-[#00BFD2] font-poppins font-medium text-xl mb-6">
            {label}
          </p>
        )}
        <h1 className="text-white font-poppins font-bold text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white mt-4 text-lg md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}