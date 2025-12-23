interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundClass?: string;
  backgroundImage?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundClass = "bg-teal-950",
  backgroundImage
}: PageHeroProps) {
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div 
      className={`w-full h-80 relative ${backgroundClass} overflow-hidden flex flex-col items-center justify-center`}
      style={backgroundStyle}
    >
      {/* Background decorative elements */}
      <div className="w-6 h-[924.82px] left-[1067.53px] top-[-54.97px] absolute origin-top-left rotate-[43.03deg] bg-cyan-300 blur-3xl" />
      <div className="w-6 h-[924.82px] left-[1492.10px] top-[111px] absolute origin-top-left rotate-[43.03deg] bg-cyan-300 blur-3xl" />
      <div className="w-6 h-[924.82px] left-[418.10px] top-[-151px] absolute origin-top-left rotate-[43.03deg] bg-cyan-300 blur-3xl" />
      
      {/* Content */}
      <div className="text-center text-cyan-500 text-xl font-medium font-['Poppins'] mb-4">
        {title}
      </div>
      <h1 className="text-center text-white text-4xl font-bold font-['Poppins'] max-w-[727px] px-4">
        {subtitle}
      </h1>
    </div>
  );
}