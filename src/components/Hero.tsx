export default function Hero() {
  return (
    <section className="relative bg-[#022030] h-[322px] overflow-hidden">
      {/* Decorative blur effects */}
      <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[223px] -top-14 opacity-100"></div>
      <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[648px] top-28 opacity-100"></div>
      <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] -left-[426px] -top-[151px] opacity-100"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h3 className="text-[#62F4F3] font-poppins font-medium text-xl mb-4 text-center">Services</h3>
        <h1 className="text-white font-poppins font-bold text-[40px] leading-tight text-center max-w-[727px]">
          Empowering Growth Through Smart Technology
        </h1>
      </div>
    </section>
  );
}
