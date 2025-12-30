export default function WhoWeAre() {
  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Who We Are Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:flex-[0_0_400px]">
            <h2 className="text-sky-950 font-inter font-bold text-3xl lg:text-[40px] leading-tight lg:leading-[60px] mb-4 text-center lg:text-left">
              Who We Are
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-stone-950 font-inter text-base lg:text-lg leading-7 text-center lg:text-left">
              Digiwave Technologies is a global IT services company delivering cutting-edge AI/ML, Cloud, Mobile, and Web solutions. We don't just write code; we build the digital backbone that empowers businesses to innovate at speed and scale in an AI-driven world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}