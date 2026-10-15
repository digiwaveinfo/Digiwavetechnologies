import Link from "next/link";

export default function PortfolioShowCta() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-white to-[#e0f7fa]" />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00BFD2 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <div className="rounded-3xl border border-[#E8E8EA] bg-white/80 backdrop-blur-md shadow-[0_20px_60px_rgba(0,17,76,0.08)] px-6 py-12 sm:px-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00114C] mb-4">
            Interested in a Similar Project?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help bring your ideas to life with our expertise in technology and design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00BFD2] to-[#0891b2] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#00BFD2]/20 hover:shadow-xl hover:scale-[1.02] transition-all w-full sm:w-auto justify-center"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-white text-[#00114C] px-8 py-4 rounded-full font-semibold border-2 border-[#00114C]/10 hover:border-[#00BFD2] hover:text-[#00BFD2] transition-all w-full sm:w-auto justify-center"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
