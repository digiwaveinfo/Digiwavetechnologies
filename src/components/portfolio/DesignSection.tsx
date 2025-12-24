export default function DesignSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Title - aligned with other sections */}
        <h2 className="text-sky-950 font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 sm:mb-8">
          Design
        </h2>
      </div>

      {/* Full Width Design Image - No padding, no rounded corners */}
      <div className="w-full">
        <img
          src="/design-portfolio-image.png"
          alt="Design Mockups - Mobile App Interface Screens"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* The Impact Section */}
        <div className="w-full flex flex-col gap-4 mt-8 sm:mt-12 lg:mt-16">
          <h3 className="text-sky-950 text-2xl sm:text-3xl lg:text-4xl font-bold font-['Inter'] leading-tight lg:leading-[60px]">
            The Impact
          </h3>
          <p className="text-stone-950 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed lg:leading-6">
            Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies. Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri
          </p>
          <p className="text-stone-950 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed lg:leading-6">
            Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies. Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri
          </p>
        </div>
      </div>
    </section>
  );
}