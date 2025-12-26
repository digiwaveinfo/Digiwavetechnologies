export default function WhoWeAre() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Who We Are Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16">
          <div className="w-full lg:flex-[0_0_400px]">
            <h2 className="text-sky-950 font-inter font-bold text-3xl lg:text-[40px] leading-tight lg:leading-[60px] mb-4 text-center lg:text-left">
              Who We Are
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-stone-950 font-inter text-base lg:text-lg leading-7 text-center lg:text-left">
              Digiwave Technologies is a global IT services company delivering cutting-edge AI/ML, Cloud, Mobile & Web solutions that empower businesses to innovate and scale.
            </p>
          </div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Our Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00BFD2] to-[#62F4F3] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-sky-950 font-inter font-bold text-2xl lg:text-3xl">
                Our Mission
              </h3>
            </div>
            <p className="text-stone-950 font-inter text-base lg:text-lg leading-7 pl-16">
              To help forward-looking businesses harness the power of technology — from automation with AI to responsive, user-centric applications.
            </p>
          </div>

          {/* Our Vision */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00BFD2] to-[#62F4F3] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-sky-950 font-inter font-bold text-2xl lg:text-3xl">
                Our Vision
              </h3>
            </div>
            <p className="text-stone-950 font-inter text-base lg:text-lg leading-7 pl-16">
              Become the most trusted partner for digital transformation — speed, quality, security, and innovation at our core.
            </p>
          </div>
        </div>

        {/* Core Values Highlight */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-[#00BFD2]/20">
          <div className="text-center">
            <h4 className="text-sky-950 font-inter font-bold text-xl lg:text-2xl mb-4">
              Our Core Values
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00BFD2] rounded-full"></div>
                <span className="text-stone-950 font-medium">Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00BFD2] rounded-full"></div>
                <span className="text-stone-950 font-medium">Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00BFD2] rounded-full"></div>
                <span className="text-stone-950 font-medium">Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00BFD2] rounded-full"></div>
                <span className="text-stone-950 font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}