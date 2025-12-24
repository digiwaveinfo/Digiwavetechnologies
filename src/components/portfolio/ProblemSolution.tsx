export default function ProblemSolution() {
  return (
    <section className="py-10 sm:py-16 px-5 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="w-full inline-flex flex-col justify-start items-start gap-8">
          {/* Problem Statements Card */}
          <div className="self-stretch h-72 relative bg-blue-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-sky-700 overflow-hidden">
            <div className="w-[1210px] h-52 left-[35px] top-[35px] absolute inline-flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch h-11 justify-start text-sky-950 text-3xl font-bold font-['Inter'] leading-10">
                Problem Statements
              </div>
              <div className="self-stretch h-36 justify-start text-stone-950 text-base font-normal font-['Inter'] leading-8">
                Lorem ipsum dolor sit amet consectetur. <br/>
                Nullam sit aliquet facilisis in mauris. <br/>
                Viverra at commodo sed nec feugiat adipiscing. <br/>
                Risus pharetra amet velit urna amet etiam fermentum proin sed. <br/>
                In elementum orci tristique mauris massa in suspendisse vulputate ultricies.
              </div>
            </div>
          </div>
          
          {/* Solution Card */}
          <div className="self-stretch h-72 relative bg-blue-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-sky-700 overflow-hidden">
            <div className="w-[1210px] h-52 left-[35px] top-[35px] absolute inline-flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch h-11 justify-start text-sky-950 text-3xl font-bold font-['Inter'] leading-10">
                Solution
              </div>
              <div className="self-stretch h-36 justify-start text-stone-950 text-base font-normal font-['Inter'] leading-8">
                Lorem ipsum dolor sit amet consectetur. <br/>
                Nullam sit aliquet facilisis in mauris. <br/>
                Viverra at commodo sed nec feugiat adipiscing. <br/>
                Risus pharetra amet velit urna amet etiam fermentum proin sed. <br/>
                In elementum orci tristique mauris massa in suspendisse vulputate ultricies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}