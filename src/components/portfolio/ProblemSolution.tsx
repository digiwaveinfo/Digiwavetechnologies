import PortfolioSectionHeading from "@/components/portfolio/PortfolioSectionHeading";

interface ProblemSolutionProps {
  problem?: string;
  solution?: string;
}

export default function ProblemSolution({ problem, solution }: ProblemSolutionProps) {
  if (!problem && !solution) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <PortfolioSectionHeading
          eyebrow="Our approach"
          title="Challenge & Solution"
          description="How we understood the problem and engineered the outcome."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {problem && (
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E8EA] bg-white shadow-[0_4px_24px_rgba(0,17,76,0.06)]">
              <div className="h-1.5 w-full bg-gradient-to-r from-rose-400 via-rose-500 to-orange-400" />
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  <h3 className="text-[#00114C] text-xl sm:text-2xl font-bold">The Challenge</h3>
                </div>
                <div
                  className="text-gray-600 leading-relaxed rich-text-content"
                  dangerouslySetInnerHTML={{ __html: problem }}
                />
              </div>
            </div>
          )}

          {solution && (
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E8EA] bg-white shadow-[0_4px_24px_rgba(0,17,76,0.06)]">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#00BFD2] to-[#0891b2]" />
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00BFD2]/10 text-[#00BFD2]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <h3 className="text-[#00114C] text-xl sm:text-2xl font-bold">Our Solution</h3>
                </div>
                <div
                  className="text-gray-600 leading-relaxed rich-text-content"
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
