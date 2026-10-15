interface PortfolioSectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function PortfolioSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: PortfolioSectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-10 sm:mb-12 ${alignClass}`}>
      <span
        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? "bg-white/10 text-[#62F4F3]" : "bg-[#00BFD2]/10 text-[#00BFD2]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold leading-tight ${
          light ? "text-white" : "text-[#00114C]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg max-w-2xl ${light ? "text-white/75" : "text-gray-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
