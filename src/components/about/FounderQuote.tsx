import React from "react";
import Image from "next/image";

export default function FounderQuote() {
    return (
        <section className="w-full bg-white pb-20 pt-10">
            <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center gap-11">
                <div className="text-center">
                    <h3 className="text-cyan-500 text-xl font-medium font-['Poppins'] mb-2">Work We’re Proud Of</h3>
                    <h2 className="text-sky-950 text-4xl font-bold font-['Poppins']">Hear it from the Founder</h2>
                </div>

                <div className="relative w-full rounded-2xl shadow-[0px_4px_23px_0px_rgba(0,0,0,0.16)] overflow-hidden min-h-[620px] flex flex-col lg:block items-start p-8 lg:p-0">

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/about/Founder-background.png"
                            alt="Background"
                            fill
                            className="object-fill scale-110"
                        />
                    </div>

                    {/* Image Container - Matches Frame 1618875492 */}
                    <div className="relative lg:absolute lg:left-[139px] lg:top-[151px] w-80 h-80 bg-neutral-200 rounded-[10px] overflow-hidden mb-8 lg:mb-0 shrink-0 z-10">
                        <Image
                            src="/about/co_founder 1.png"
                            alt="Co-Founder"
                            width={320}
                            height={320}
                            className="w-80 h-80 rounded-2xl object-fill absolute lg:left-[0px] lg:top-[0px]"
                        />
                    </div>

                    {/* Text Content - Matches provided text block */}
                    <div className="relative z-10 w-full lg:w-[712px] lg:absolute lg:left-[489px] lg:top-[196px] text-white text-base font-normal font-['Inter'] leading-6 text-left">
                        Lorem ipsum dolor sit amet consectetur. Malesuada pharetra tempus augue suspendisse ultrices cursus sed. Rhoncus arcu sollicitudin in pharetra bibendum felis sollicitudin. Risus suspendisse maecenas sapien amet elementum pellentesque sagittis. Eu in elementum eu ac porttitor enim quam. Sit porta et bibendum ac odio tristique neque vulputate. Metus nunc id libero interdum. Ornare libero nam et diam et. Donec pulvinar sit purus odio.
                        <br /><br />
                        Nisl lobortis quis orci nullam enim egestas. Bibendum neque arcu mi nisl elementum. Odio tincidunt risus fermentum urna risus massa feugiat duis. Urna phasellus in facilisis proin. Semper in et enim risus ultricies. Duis morbi aenean fermentum adipiscing senectus turpis. Ut.
                    </div>
                </div>
            </div>
        </section>
    );
}
