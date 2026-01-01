interface ProblemSolutionProps {
  problem?: string;
  solution?: string;
}

export default function ProblemSolution({ problem, solution }: ProblemSolutionProps) {
  // Don't render if both are empty
  if (!problem && !solution) {
    return null;
  }

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="w-full flex flex-col gap-8">
          {/* Problem Statements Card */}
          {problem && (
            <div className="w-full bg-blue-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-sky-700 p-6 lg:p-9">
              <div className="flex flex-col gap-4">
                <h3 className="text-sky-950 text-2xl lg:text-3xl font-bold font-['Inter'] leading-tight lg:leading-10">
                  Problem Statement
                </h3>
                <div 
                  className="text-stone-950 text-base font-normal font-['Inter'] leading-8 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: problem }}
                />
              </div>
            </div>
          )}

          {/* Solution Card */}
          {solution && (
            <div className="w-full bg-blue-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-sky-700 p-6 lg:p-9">
              <div className="flex flex-col gap-4">
                <h3 className="text-sky-950 text-2xl lg:text-3xl font-bold font-['Inter'] leading-tight lg:leading-10">
                  Solution
                </h3>
                <div 
                  className="text-stone-950 text-base font-normal font-['Inter'] leading-8 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: solution }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}