interface SectionHeaderProps {
  label?: string;
  title: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ 
  label, 
  title, 
  centered = false,
  className = '' 
}: SectionHeaderProps) {
  const alignmentClass = centered ? 'text-center' : 'text-left';

  return (
    <div className={`${alignmentClass} ${className}`}>
      {label && (
        <p className="text-[#00BFD2] font-poppins font-medium text-xl mb-4">
          {label}
        </p>
      )}
      <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#00114C] leading-tight">
        {title}
      </h2>
    </div>
  );
}