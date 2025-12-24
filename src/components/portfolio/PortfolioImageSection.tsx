export default function PortfolioImageSection() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Image Container with rounded corners and responsive design */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-lg">
          <img
            src="/portfolio-view-image.png"
            alt="Portfolio App Screenshots"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}