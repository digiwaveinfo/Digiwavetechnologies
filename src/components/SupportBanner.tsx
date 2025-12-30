export default function SupportBanner() {
  return (
    <section className="w-full relative h-[350px] md:h-[35/*  */0px] bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-fill"
      >
        <source src="/home-support-system.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute left-0 top-0 w-full h-full mix-blend-hue bg-cyan-300" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-start items-center gap-2.5">
        <div className="px-4 py-1.5 bg-white/25 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-indigo-50 inline-flex justify-center items-center gap-2.5 overflow-hidden backdrop-blur-sm">
          <div className="text-neutral-50 text-base font-medium font-['Inter'] leading-6">
            Support System
          </div>
        </div>

        <div className="text-center">
          <span className="text-cyan-300 text-4xl md:text-6xl font-semibold font-['Inter'] leading-tight md:leading-[68px]">
            We Don’t{" "}
          </span>
          <span className="text-white text-4xl md:text-6xl font-semibold font-['Inter'] leading-tight md:leading-[68px]">
            Deliver and Disappear
          </span>
        </div>

        <div className="w-full max-w-[590px] text-center text-white text-base md:text-lg font-normal font-['Inter'] leading-6">
          From deployment to updates — we provide full lifecycle support and maintenance.
        </div>
      </div>
    </section>
  );
}
