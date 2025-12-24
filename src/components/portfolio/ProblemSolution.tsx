export default function ProblemSolution() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="w-full flex flex-col gap-8">
          {/* Problem Statements Card */}
          <div className="w-full bg-blue-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-sky-700 p-6 lg:p-9">
            <div className="flex flex-col gap-4">
              <h3 className="text-sky-950 text-2xl lg:text-3xl font-bold font-['Inter'] leading-tight lg:leading-10">
                Problem Statements
              </h3>
              <p className="text-stone-950 text-base font-normal font-['Inter'] leading-8">
                Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="w-full bg-blue-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-sky-700 p-6 lg:p-9">
            <div className="flex flex-col gap-4">
              <h3 className="text-sky-950 text-2xl lg:text-3xl font-bold font-['Inter'] leading-tight lg:leading-10">
                Solution
              </h3>
              <p className="text-stone-950 text-base font-normal font-['Inter'] leading-8">
                Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}