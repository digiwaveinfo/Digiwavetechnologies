import Container from "./Container";

export default function WhoWeAre() {
  return (
    <section className="pt-12 lg:pt-16 w-full">
      <Container>
        {/* Who We Are Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div className="w-full lg:w-auto">
            <h2 className="text-sky-950 font-inter font-bold text-3xl lg:text-[40px] leading-tight lg:leading-[60px] mb-4 text-center lg:text-left">
              Who We Are
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-stone-950 font-inter text-base lg:text-lg leading-7 text-center lg:text-left">
              Digiwave Technologies is recognized as a AI and Machine Learning Solutions, providing global enterprises with cutting-edge AI/ML, Cloud, and Mobile solutions. We don't just write code, we build the digital backbone that empowers businesses to innovate at speed and scale in an AI-driven world.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}