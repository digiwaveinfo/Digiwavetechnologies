import React from "react";
import Image from "next/image";
import Container from "../Container";

export default function HistoryVision() {
    return (
        <section className="w-full bg-white pb-10 md:py-10 lg:py-20">
            <Container className="max-w-[1800px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
                    {/* Card 1: Our History */}
                    <div className="p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-start items-start gap-5 w-full hover:translate-y-[-5px] transition-transform duration-300">
                        {/* <div className="w-24 h-24 relative bg-amber-200/20 rounded-[61.78px] flex items-center justify-center"> */}
                        <Image src="/ourhistoryicon.svg" alt="History" width={89} height={89} />
                        {/* </div> */}
                        <div className="flex flex-col gap-2">
                            <div className="text-sky-950 text-3xl font-bold font-['Inter'] leading-9">
                                Our History
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Evolved from a dedicated development team into a trusted technology partner delivering scalable web, mobile, and AI-driven solutions for diverse industries.
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Our Vision */}
                    <div className="p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-start items-start gap-5 w-full hover:translate-y-[-5px] transition-transform duration-300">
                        {/* <div className="w-24 h-24 relative bg-red-500/10 rounded-[61.78px] flex items-center justify-center"> */}
                        <Image src="/visionicon.svg" alt="Vision" width={89} height={89} />
                        {/* </div> */}
                        <div className="flex flex-col gap-2">
                            <div className="text-sky-950 text-3xl font-bold font-['Inter'] leading-9">
                                Our Vision
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                To be recognized as a reliable partner for digital transformation, known for innovation, quality, and performance as a leading AI Development Company in India.
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Our Mission */}
                    <div className="p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-start items-start gap-5 w-full hover:translate-y-[-5px] transition-transform duration-300">
                        {/* <div className="w-24 h-24 relative bg-blue-500/10 rounded-[61.78px] flex items-center justify-center"> */}
                        <Image src="/missionicon.svg" alt="Mission" width={89} height={89} />
                        {/* </div> */}
                        <div className="flex flex-col gap-2">
                            <div className="text-sky-950 text-3xl font-bold font-['Inter'] leading-9">
                                Our Mission
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Enable business growth through secure, user-centric digital products, supported by robust Web Development Services in India and advanced mobile and IoT solutions.
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
