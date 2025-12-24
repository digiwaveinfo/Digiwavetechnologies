import React from "react";
import { Phone, Mail, Send } from "lucide-react";

export default function LetsStart() {
    return (
        <section className="w-full bg-neutral-100 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1800px]">
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">

                    {/* Left Card */}
                    <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-between">
                        <div>
                            <h2 className="text-sky-950 text-4xl lg:text-5xl font-bold font-['Inter'] mb-4">
                                Let's Start
                            </h2>
                            <p className="text-stone-950 text-lg font-medium font-['Inter'] mb-8">
                                Initiating Your Journey to Success <br /> and Growth.
                            </p>

                            <div className="flex flex-col gap-6 mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white">
                                        <Phone size={20} />
                                    </div>
                                    <span className="text-stone-950 text-base font-medium font-['Inter']">
                                        +880-1680-6361-89
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-stone-950 text-base font-medium font-['Inter']">
                                        contact@digiwave.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 relative pl-6 border-l border-sky-700">
                            {/* Steps */}
                            {[
                                { num: "01", text: "Share your requirements" },
                                { num: "02", text: "Discuss them with our experts" },
                                { num: "03", text: "Get a free quote" },
                                { num: "04", text: "Start the project" }
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full border border-sky-700 bg-white flex items-center justify-center text-sky-700 text-sm font-medium shrink-0 absolute -left-4">
                                        {step.num}
                                    </div>
                                    <span className="text-stone-950 text-base font-normal font-['Inter'] ml-2">
                                        {step.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Card - Form */}
                    <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                        <div className="mb-8">
                            <h3 className="text-cyan-500 text-xl font-medium font-['Poppins'] mb-2">Contact Us</h3>
                            <h4 className="text-slate-900 text-2xl font-semibold font-['Inter']">
                                Send us a message, and we'll <br /> promptly discuss your project with you.
                            </h4>
                        </div>

                        <form className="flex flex-col gap-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-sky-700/10 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-sky-700/10 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Your Phone No."
                                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-sky-700/10 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    placeholder="How can we help you?"
                                    className="w-full h-44 pl-12 pr-4 pt-4 rounded-xl border border-sky-700/10 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button className="self-end px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center gap-3 transition-colors text-white font-bold uppercase tracking-wide">
                                Send Inquiry
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
