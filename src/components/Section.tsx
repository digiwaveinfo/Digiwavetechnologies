interface SectionProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'gray';
  spacing?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Section({
  children,
  bgColor = 'white',
  spacing = 'medium',
  className = ''
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  const spacingClasses = {
    small: 'py-8 md:py-12',
    medium: 'py-12 md:py-16',
    large: 'py-16 md:py-24'
  };

  return (
    <section className={`w-full ${bgClasses[bgColor]} ${spacingClasses[spacing]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1800px]">
        {children}
      </div>
    </section>
  );
}