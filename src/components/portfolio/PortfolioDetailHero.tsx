interface PortfolioDetailHeroProps {
  title: string;
  description: string;
}

export default function PortfolioDetailHero({ title, description }: PortfolioDetailHeroProps) {
  return (
    <section className="py-10 sm:py-20 px-5 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="w-full inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch h-14 justify-start text-sky-950 text-4xl font-bold font-['Inter'] leading-[60px]">
            {title}
          </div>
          <div className="self-stretch h-20 justify-start text-stone-950 text-base font-normal font-['Inter'] leading-6">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}