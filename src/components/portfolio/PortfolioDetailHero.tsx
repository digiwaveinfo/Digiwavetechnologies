interface PortfolioDetailHeroProps {
  title: string;
  description: string;
}

export default function PortfolioDetailHero({ title, description }: PortfolioDetailHeroProps) {
  return (
    <section className="pt-8 sm:pt-16 lg:pt-20 bg-white">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-sky-950 text-2xl sm:text-3xl lg:text-4xl font-bold font-['Inter'] leading-tight lg:leading-[60px]">
            {title}
          </h1>
          <div
            className="text-stone-950 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed lg:leading-6 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
}