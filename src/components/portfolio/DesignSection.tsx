export default function DesignSection() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Title - aligned with other sections */}
        <h2 className="text-sky-950 font-bold text-3xl md:text-4xl leading-tight mb-8">
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
      
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* The Impact Section - matching exact structure */}
        <div className="w-full inline-flex flex-col justify-start items-start gap-2.5 mt-10 sm:mt-16">
          <div className="self-stretch h-14 justify-start text-sky-950 text-4xl font-bold font-['Inter'] leading-[60px]">
            The Impact
          </div>
          <div className="self-stretch h-20 justify-start text-stone-950 text-base font-normal font-['Inter'] leading-6">
            Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri<br/>
          </div>
          <div className="self-stretch h-20 justify-start text-stone-950 text-base font-normal font-['Inter'] leading-6">
            Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri<br/>
          </div>
        </div>
      </div>
    </section>
  );
}