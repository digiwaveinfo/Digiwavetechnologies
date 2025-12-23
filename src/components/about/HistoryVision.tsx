import React from "react";
import { History, Eye, Target } from "lucide-react";

export default function HistoryVision() {
    return (
        <section className="w-full bg-white py-20">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-wrap justify-center gap-14">
                    {/* Card 1: Our History */}
                    <div className="p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-start items-start gap-5 max-w-sm hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="w-24 h-24 relative bg-amber-200/20 rounded-[61.78px] flex items-center justify-center">
                            <History className="w-10 h-10 text-amber-500" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sky-950 text-3xl font-bold font-['Inter'] leading-9">
                                Our History
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Vision */}
                    <div className="p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-start items-start gap-5 max-w-sm hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="w-24 h-24 relative bg-red-500/10 rounded-[61.78px] flex items-center justify-center">
                            <Eye className="w-10 h-10 text-red-500" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sky-950 text-3xl font-bold font-['Inter'] leading-9">
                                Vision
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Mission (Implied typical triplet) */}
                    <div className="p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-start items-start gap-5 max-w-sm hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="w-24 h-24 relative bg-blue-500/10 rounded-[61.78px] flex items-center justify-center">
                            <Target className="w-10 h-10 text-blue-500" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sky-950 text-3xl font-bold font-['Inter'] leading-9">
                                Mission
                            </div>
                            <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                                Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
