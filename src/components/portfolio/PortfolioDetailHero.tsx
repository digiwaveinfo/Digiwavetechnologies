interface PortfolioDetailHeroProps {
  title: string;
  description: string;
}

export default function PortfolioDetailHero({ title, description }: PortfolioDetailHeroProps) {
  return (
    <section className="py-8 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-sky-950 text-2xl sm:text-3xl lg:text-4xl font-bold font-['Inter'] leading-tight lg:leading-[60px]">
            {title}
          </h1>
          <p className="text-stone-950 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed lg:leading-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}