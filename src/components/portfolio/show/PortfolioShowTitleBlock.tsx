interface PortfolioShowTitleBlockProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function PortfolioShowTitleBlock({
  title,
  subtitle,
  align = "left",
}: PortfolioShowTitleBlockProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      <h2 className="text-[#0F172A] text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
        {title}
      </h2>
      <span className="inline-block w-16 h-1 rounded-full bg-[#00C4D6] mt-1" aria-hidden />
      {subtitle && (
        <p className="text-[#475569] text-base leading-6 max-w-2xl mt-2">{subtitle}</p>
      )}
    </div>
  );
}
