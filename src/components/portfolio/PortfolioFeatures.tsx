export default function PortfolioFeatures() {
  return (
    <section className="py-10 sm:py-16 px-5 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="w-full inline-flex flex-col justify-start items-start gap-2.5">
          {/* Title */}
          <div className="self-stretch h-14 justify-start text-sky-950 text-4xl font-bold font-['Inter'] leading-[60px]">
            Features
          </div>
          
          {/* Content Container */}
          <div className="self-stretch inline-flex justify-start items-center gap-16 flex-col lg:flex-row">
            {/* Left Column */}
            <div className="w-full lg:w-[604px] h-52 justify-start text-stone-950 text-base font-normal font-['Inter'] leading-8">
              Lorem ipsum dolor sit amet consectetur. <br/>
              Nullam sit aliquet facilisis in mauris. <br/>
              Viverra at commodo sed nec feugiat adipiscing. <br/>
              Risus pharetra amet velit urna amet etiam fermentum proin sed. <br/>
              In elementum orci tristique mauris massa in suspendisse vulputate ultricies.<br/>
              Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. <br/>
              Viverra at commodo sed nec feugiat adipiscing.
            </div>
            
            {/* Right Column */}
            <div className="w-full lg:w-[604px] h-52 justify-start text-stone-950 text-base font-normal font-['Inter'] leading-8">
              Lorem ipsum dolor sit amet consectetur. <br/>
              Nullam sit aliquet facilisis in mauris. <br/>
              Viverra at commodo sed nec feugiat adipiscing. <br/>
              Risus pharetra amet velit urna amet etiam fermentum proin sed. <br/>
              In elementum orci tristique mauris massa in suspendisse vulputate ultricies.<br/>
              Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. <br/>
              Viverra at commodo sed nec feugiat adipiscing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}