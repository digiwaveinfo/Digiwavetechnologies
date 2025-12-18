"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const steps = [
    "Share your requirements",
    "Discuss them with our experts",
    "Get a free quote",
    "Start the project",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-neutral-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-7">
          {/* Left Card - Info */}
          <div className="w-full lg:w-96 p-8 md:p-[50px] bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)] flex flex-col">
            <div>
              <h2 className="text-sky-950 text-4xl md:text-5xl font-bold font-['Inter'] leading-[60px]">
                Let's Start
              </h2>
              <p className="text-stone-950 text-lg font-medium font-['Inter'] leading-8 mt-4">
                Initiating Your Journey to Success and Growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00BFD2] rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.75 0C10.1042 0.020833 11.3229 0.354167 12.4062 1C13.4896 1.64583 14.3542 2.51042 15 3.59375C15.6458 4.67708 15.9792 5.89583 16 7.25C15.9583 7.70833 15.7083 7.95833 15.25 8C14.7917 7.95833 14.5417 7.70833 14.5 7.25C14.4583 5.625 13.8958 4.27083 12.8125 3.1875C11.7292 2.10417 10.375 1.54167 8.75 1.5C8.29167 1.45833 8.04167 1.20833 8 0.75C8.04167 0.291667 8.29167 0.041667 8.75 0ZM9 6C9.29167 6 9.53125 6.09375 9.71875 6.28125C9.90625 6.46875 10 6.70833 10 7C10 7.29167 9.90625 7.53125 9.71875 7.71875C9.53125 7.90625 9.29167 8 9 8C8.70833 8 8.46875 7.90625 8.28125 7.71875C8.09375 7.53125 8 7.29167 8 7C8 6.70833 8.09375 6.46875 8.28125 6.28125C8.46875 6.09375 8.70833 6 9 6ZM8 3.75C8.04167 3.29167 8.29167 3.04167 8.75 3C9.95833 3.02083 10.9583 3.4375 11.75 4.25C12.5625 5.04167 12.9792 6.04167 13 7.25C12.9583 7.70833 12.7083 7.95833 12.25 8C11.7917 7.95833 11.5417 7.70833 11.5 7.25C11.4792 6.47917 11.2083 5.83333 10.6875 5.3125C10.1667 4.79167 9.52083 4.52083 8.75 4.5C8.29167 4.45833 8.04167 4.20833 8 3.75ZM3.6875 0.03125C3.97917 -0.03125 4.27083 0 4.5625 0.125C4.83333 0.25 5.03125 0.46875 5.15625 0.78125L6.40625 3.78125C6.59375 4.34375 6.46875 4.82292 6.03125 5.21875L4.5 6.46875C5.02083 7.57292 5.70833 8.5625 6.5625 9.4375C7.4375 10.2917 8.42708 10.9792 9.53125 11.5L10.7812 9.96875C11.1771 9.53125 11.6562 9.40625 12.2188 9.59375L15.2188 10.8438C15.5104 10.9688 15.7292 11.1667 15.875 11.4375C16 11.7292 16.0312 12.0312 15.9688 12.3438L15.2188 15.0938C15.0104 15.6562 14.6042 15.9583 14 16C11.3958 15.9792 9.04167 15.3438 6.9375 14.0938C4.83333 12.8438 3.15625 11.1667 1.90625 9.0625C0.65625 6.95833 0.0208333 4.60417 0 2C0.0416667 1.39583 0.354167 0.989583 0.9375 0.78125L3.6875 0.03125Z" fill="white" />
                  </svg>
                </div>
                <span className="text-stone-950 text-base font-medium font-['Inter']">
                  +880-1680-6361-89
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00BFD2] rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1.5 2C1.08333 2.02083 0.729167 2.16667 0.4375 2.4375C0.166667 2.72917 0.0208333 3.08333 0 3.5C0.0208333 4 0.21875 4.39583 0.59375 4.6875L7.40625 9.8125C7.80208 10.0625 8.19792 10.0625 8.59375 9.8125L15.4062 4.6875C15.7812 4.39583 15.9792 4 16 3.5C15.9792 3.08333 15.8333 2.72917 15.5625 2.4375C15.2708 2.16667 14.9167 2.02083 14.5 2H1.5ZM0 5.5V12C0.0208333 12.5625 0.21875 13.0312 0.59375 13.4062C0.96875 13.7812 1.4375 13.9792 2 14H14C14.5625 13.9792 15.0312 13.7812 15.4062 13.4062C15.7812 13.0312 15.9792 12.5625 16 12V5.5L9.1875 10.5938C8.83333 10.8646 8.4375 11 8 11C7.5625 11 7.16667 10.8646 6.8125 10.5938L0 5.5Z" fill="white" />
                  </svg>
                </div>
                <span className="text-stone-950 text-base font-medium font-['Inter']">
                  contact@digiwave.com
                </span>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-2 mt-12 relative">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-sky-700" />
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full border border-sky-700 flex items-center justify-center z-10">
                    <span className="text-sky-700 text-base font-medium font-['Inter']">
                      0{index + 1}
                    </span>
                  </div>
                  <span className="text-stone-950 text-base font-normal font-['Inter']">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Form */}
          <div className="flex-1 p-8 md:p-[50px] bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)]">
            <div className="text-[#00BFD2] text-xl font-medium font-['Poppins'] mb-4">
              Contact Us
            </div>
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold font-['Inter'] leading-9 mb-8">
              Send us a message, and we'll promptly discuss your<br className="hidden md:block" />project with you.
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white rounded-[10px] border border-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:border-[#00BFD2] focus:outline-none transition-colors"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M9.5 4C9.47917 3.0625 9.0625 2.34375 8.25 1.84375C7.41667 1.38542 6.58333 1.38542 5.75 1.84375C4.9375 2.34375 4.52083 3.0625 4.5 4C4.52083 4.9375 4.9375 5.65625 5.75 6.15625C6.58333 6.61458 7.41667 6.61458 8.25 6.15625C9.0625 5.65625 9.47917 4.9375 9.5 4ZM3 4C3 3.27083 3.17708 2.60417 3.53125 2C3.88542 1.39583 4.375 0.90625 5 0.53125C5.625 0.177083 6.29167 0 7 0C7.70833 0 8.375 0.177083 9 0.53125C9.625 0.90625 10.1146 1.39583 10.4688 2C10.8229 2.60417 11 3.27083 11 4C11 4.72917 10.8229 5.39583 10.4688 6C10.1146 6.60417 9.625 7.09375 9 7.46875C8.375 7.82292 7.70833 8 7 8C6.29167 8 5.625 7.82292 5 7.46875C4.375 7.09375 3.88542 6.60417 3.53125 6C3.17708 5.39583 3 4.72917 3 4ZM1.53125 14.5H12.4688C12.3021 13.4792 11.8542 12.6458 11.125 12C10.375 11.3542 9.47917 11.0208 8.4375 11H5.5625C4.52083 11.0208 3.63542 11.3542 2.90625 12C2.15625 12.6458 1.69792 13.4792 1.53125 14.5ZM0 15.0625C0.0416667 13.5 0.583333 12.1875 1.625 11.125C2.6875 10.0833 4 9.54167 5.5625 9.5H8.4375C10 9.54167 11.3125 10.0833 12.375 11.125C13.4167 12.1875 13.9583 13.5 14 15.0625C14 15.3333 13.9062 15.5521 13.7188 15.7188C13.5521 15.9062 13.3333 16 13.0625 16H0.9375C0.666667 16 0.447917 15.9062 0.28125 15.7188C0.09375 15.5521 0 15.3333 0 15.0625Z" fill="#676767" />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white rounded-[10px] border border-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:border-[#00BFD2] focus:outline-none transition-colors"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 3.5C1.6875 3.52083 1.52083 3.6875 1.5 4V4.6875L6.90625 9.125C7.23958 9.375 7.60417 9.5 8 9.5C8.41667 9.5 8.79167 9.375 9.125 9.125L14.5 4.6875V4C14.4792 3.6875 14.3125 3.52083 14 3.5H2ZM1.5 6.625V12C1.52083 12.3125 1.6875 12.4792 2 12.5H14C14.3125 12.4792 14.4792 12.3125 14.5 12V6.625L10.0625 10.2812C9.4375 10.7604 8.75 11 8 11C7.25 11 6.5625 10.7604 5.9375 10.2812L1.5 6.625ZM0 4C0.0208333 3.4375 0.21875 2.96875 0.59375 2.59375C0.96875 2.21875 1.4375 2.02083 2 2H14C14.5625 2.02083 15.0312 2.21875 15.4062 2.59375C15.7812 2.96875 15.9792 3.4375 16 4V12C15.9792 12.5625 15.7812 13.0312 15.4062 13.4062C15.0312 13.7812 14.5625 13.9792 14 14H2C1.4375 13.9792 0.96875 13.7812 0.59375 13.4062C0.21875 13.0312 0.0208333 12.5625 0 12V4Z" fill="#676767" />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Your Phone No."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white rounded-[10px] border border-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:border-[#00BFD2] focus:outline-none transition-colors"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.75 0C10.1042 0.020833 11.3229 0.354167 12.4062 1C13.4896 1.64583 14.3542 2.51042 15 3.59375C15.6458 4.67708 15.9792 5.89583 16 7.25C15.9583 7.70833 15.7083 7.95833 15.25 8C14.7917 7.95833 14.5417 7.70833 14.5 7.25C14.4583 5.625 13.8958 4.27083 12.8125 3.1875C11.7292 2.10417 10.375 1.54167 8.75 1.5C8.29167 1.45833 8.04167 1.20833 8 0.75C8.04167 0.291667 8.29167 0.041667 8.75 0Z" fill="#676767" />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white rounded-[10px] border border-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:border-[#00BFD2] focus:outline-none transition-colors"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 14.5C8.125 14.5208 8.32292 14.4271 8.59375 14.2188C8.86458 14.0312 9.16667 13.625 9.5 13C9.77083 12.4375 10 11.7708 10.1875 11H5.8125C6 11.7708 6.22917 12.4375 6.5 13C6.83333 13.625 7.13542 14.0312 7.40625 14.2188C7.67708 14.4271 7.875 14.5208 8 14.5Z" fill="#676767" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:border-[#00BFD2] focus:outline-none transition-colors resize-none"
                />
                <svg className="absolute left-4 top-4" width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M2.75368 9.65625C3.06618 9.03125 2.99326 8.44792 2.53493 7.90625C1.84743 7.19792 1.50368 6.39583 1.50368 5.5C1.52451 4.45833 1.98284 3.54167 2.87868 2.75C3.77451 1.95833 4.98284 1.54167 6.50368 1.5C8.02451 1.54167 9.23284 1.95833 10.1287 2.75C11.0245 3.54167 11.4828 4.45833 11.5037 5.5C11.4828 6.54167 11.0245 7.45833 10.1287 8.25C9.23284 9.04167 8.02451 9.45833 6.50368 9.5C6.08701 9.5 5.69118 9.45833 5.31618 9.375C4.98284 9.3125 4.67034 9.36458 4.37868 9.53125C4.23284 9.59375 4.09743 9.65625 3.97243 9.71875C3.47243 9.94792 2.95159 10.1354 2.40993 10.2812C2.49326 10.1354 2.57659 9.98958 2.65993 9.84375C2.70159 9.78125 2.73284 9.71875 2.75368 9.65625Z" fill="#676767" />
                </svg>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-4 bg-[#00BFD2] rounded-full inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span className="text-white text-lg font-bold font-['Inter'] uppercase tracking-wide">
                    Send Inquiry
                  </span>
                  <svg width="22" height="27" viewBox="0 0 22 27" fill="none">
                    <path d="M19.4062 6.75C19.4062 6.25781 19.248 5.85352 18.9316 5.53711C18.6152 5.2207 18.2109 5.0625 17.7188 5.0625H5.90625C5.41406 5.0625 5.00977 5.2207 4.69336 5.53711C4.37695 5.85352 4.21875 6.25781 4.21875 6.75C4.21875 7.24219 4.37695 7.64648 4.69336 7.96289C5.00977 8.2793 5.41406 8.4375 5.90625 8.4375H13.6582L3.00586 19.0371C2.68945 19.3887 2.53125 19.793 2.53125 20.25C2.53125 20.707 2.68945 21.1113 3.00586 21.4629C3.35742 21.7793 3.76172 21.9375 4.21875 21.9375C4.67578 21.9375 5.08008 21.7793 5.43164 21.4629L16.0312 10.8105V18.5625C16.0312 19.0547 16.1895 19.459 16.5059 19.7754C16.8223 20.0918 17.2266 20.25 17.7188 20.25C18.2109 20.25 18.6152 20.0918 18.9316 19.7754C19.248 19.459 19.4062 19.0547 19.4062 18.5625V6.75Z" fill="white" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
