"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const result = await submitContactForm({
      ...formData,
      source_page: 'home_contact_section',
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({ type: 'success', message: result.message || 'Thank you for contacting us!' });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } else {
      setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
    }
  };

  const steps = [
    "Share your requirements",
    "Discuss with our AI & Tech experts",
    "Get a customized, transparent quote",
    "Kick off your project",
  ];

  return (
    <section id="contact" className="w-full py-12 md:py-16 bg-neutral-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1800px]">
        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-7">
          {/* Left Card - Info */}
          <div className="w-full lg:w-96 p-6 md:p-8 bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)] flex flex-col">
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
                  +91 9428418099
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00BFD2] rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1.5 2C1.08333 2.02083 0.729167 2.16667 0.4375 2.4375C0.166667 2.72917 0.0208333 3.08333 0 3.5C0.0208333 4 0.21875 4.39583 0.59375 4.6875L7.40625 9.8125C7.80208 10.0625 8.19792 10.0625 8.59375 9.8125L15.4062 4.6875C15.7812 4.39583 15.9792 4 16 3.5C15.9792 3.08333 15.8333 2.72917 15.5625 2.4375C15.2708 2.16667 14.9167 2.02083 14.5 2H1.5ZM0 5.5V12C0.0208333 12.5625 0.21875 13.0312 0.59375 13.4062C0.96875 13.7812 1.4375 13.9792 2 14H14C14.5625 13.9792 15.0312 13.7812 15.4062 13.4062C15.7812 13.0312 15.9792 12.5625 16 12V5.5L9.1875 10.5938C8.83333 10.8646 8.4375 11 8 11C7.5625 11 7.16667 10.8646 6.8125 10.5938L0 5.5Z" fill="white" />
                  </svg>
                </div>
                <span className="text-stone-950 text-base font-medium font-['Inter']">
                  info@digiwavetechnologies.in
                </span>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-2 mt-8 relative">
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
          <div className="flex-1 p-6 md:p-8 bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)]">
            <div className="text-[#00BFD2] text-xl font-medium font-['Poppins'] mb-4">
              Contact Us
            </div>
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold font-['Inter'] leading-9 mb-6">
              Send us a message, and we'll promptly discuss your<br className="hidden md:block" />project with you.
            </h3>

            {/* Status Messages */}
            {submitStatus.type && (
              <div className={`mb-4 p-4 rounded-lg ${submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white rounded-[10px] outline outline-1 outline-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:outline-[#00BFD2] focus:outline-2 transition-colors"
                  />
                  <div className="absolute left-[21px] top-[19px]">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.5 4C9.47917 3.0625 9.0625 2.34375 8.25 1.84375C7.41667 1.38542 6.58333 1.38542 5.75 1.84375C4.9375 2.34375 4.52083 3.0625 4.5 4C4.52083 4.9375 4.9375 5.65625 5.75 6.15625C6.58333 6.61458 7.41667 6.61458 8.25 6.15625C9.0625 5.65625 9.47917 4.9375 9.5 4ZM3 4C3 3.27083 3.17708 2.60417 3.53125 2C3.88542 1.39583 4.375 0.90625 5 0.53125C5.625 0.177083 6.29167 0 7 0C7.70833 0 8.375 0.177083 9 0.53125C9.625 0.90625 10.1146 1.39583 10.4688 2C10.8229 2.60417 11 3.27083 11 4C11 4.72917 10.8229 5.39583 10.4688 6C10.1146 6.60417 9.625 7.09375 9 7.46875C8.375 7.82292 7.70833 8 7 8C6.29167 8 5.625 7.82292 5 7.46875C4.375 7.09375 3.88542 6.60417 3.53125 6C3.17708 5.39583 3 4.72917 3 4ZM1.53125 14.5H12.4688C12.3021 13.4792 11.8542 12.6458 11.125 12C10.375 11.3542 9.47917 11.0208 8.4375 11H5.5625C4.52083 11.0208 3.63542 11.3542 2.90625 12C2.15625 12.6458 1.69792 13.4792 1.53125 14.5ZM0 15.0625C0.0416667 13.5 0.583333 12.1875 1.625 11.125C2.6875 10.0833 4 9.54167 5.5625 9.5H8.4375C10 9.54167 11.3125 10.0833 12.375 11.125C13.4167 12.1875 13.9583 13.5 14 15.0625C14 15.3333 13.9062 15.5521 13.7188 15.7188C13.5521 15.9062 13.3333 16 13.0625 16H0.9375C0.666667 16 0.447917 15.9062 0.28125 15.7188C0.09375 15.5521 0 15.3333 0 15.0625Z" fill="#676767" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white rounded-[10px] outline outline-1 outline-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:outline-[#00BFD2] focus:outline-2 transition-colors"
                  />
                  <div className="absolute left-[21px] top-[19px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3.5C1.6875 3.52083 1.52083 3.6875 1.5 4V4.6875L6.90625 9.125C7.23958 9.375 7.60417 9.5 8 9.5C8.41667 9.5 8.79167 9.375 9.125 9.125L14.5 4.6875V4C14.4792 3.6875 14.3125 3.52083 14 3.5H2ZM1.5 6.625V12C1.52083 12.3125 1.6875 12.4792 2 12.5H14C14.3125 12.4792 14.4792 12.3125 14.5 12V6.625L10.0625 10.2812C9.4375 10.7604 8.75 11 8 11C7.25 11 6.5625 10.7604 5.9375 10.2812L1.5 6.625ZM0 4C0.0208333 3.4375 0.21875 2.96875 0.59375 2.59375C0.96875 2.21875 1.4375 2.02083 2 2H14C14.5625 2.02083 15.0312 2.21875 15.4062 2.59375C15.7812 2.96875 15.9792 3.4375 16 4V12C15.9792 12.5625 15.7812 13.0312 15.4062 13.4062C15.0312 13.7812 14.5625 13.9792 14 14H2C1.4375 13.9792 0.96875 13.7812 0.59375 13.4062C0.21875 13.0312 0.0208333 12.5625 0 12V4Z" fill="#676767" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Your Phone No."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white rounded-[10px] outline outline-1 outline-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:outline-[#00BFD2] focus:outline-2 transition-colors"
                  />
                  <div className="absolute left-[21px] top-[19px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.75 0C10.1042 0.020833 11.3229 0.354167 12.4062 1C13.4896 1.64583 14.3542 2.51042 15 3.59375C15.6458 4.67708 15.9792 5.89583 16 7.25C15.9583 7.70833 15.7083 7.95833 15.25 8C14.7917 7.95833 14.5417 7.70833 14.5 7.25C14.4583 5.625 13.8958 4.27083 12.8125 3.1875C11.7292 2.10417 10.375 1.54167 8.75 1.5C8.29167 1.45833 8.04167 1.20833 8 0.75C8.04167 0.291667 8.29167 0.041667 8.75 0ZM9 6C9.29167 6 9.53125 6.09375 9.71875 6.28125C9.90625 6.46875 10 6.70833 10 7C10 7.29167 9.90625 7.53125 9.71875 7.71875C9.53125 7.90625 9.29167 8 9 8C8.70833 8 8.46875 7.90625 8.28125 7.71875C8.09375 7.53125 8 7.29167 8 7C8 6.70833 8.09375 6.46875 8.28125 6.28125C8.46875 6.09375 8.70833 6 9 6ZM8 3.75C8.04167 3.29167 8.29167 3.04167 8.75 3C9.95833 3.02083 10.9583 3.4375 11.75 4.25C12.5625 5.04167 12.9792 6.04167 13 7.25C12.9583 7.70833 12.7083 7.95833 12.25 8C11.7917 7.95833 11.5417 7.70833 11.5 7.25C11.4792 6.47917 11.2083 5.83333 10.6875 5.3125C10.1667 4.79167 9.52083 4.52083 8.75 4.5C8.29167 4.45833 8.04167 4.20833 8 3.75ZM10.2812 8.96875C10.6979 8.51042 11.1875 8.38542 11.75 8.59375L15.25 10.0938C15.5208 10.2188 15.7292 10.4167 15.875 10.6875C16 10.9375 16.0312 11.2083 15.9688 11.5L15.2188 15C15.0521 15.625 14.6458 15.9583 14 16C13.8125 16 13.625 16 13.4375 16C13.125 15.9792 12.8125 15.9479 12.5 15.9062C10.125 15.6354 8 14.8646 6.125 13.5938C4.25 12.3021 2.77083 10.6562 1.6875 8.65625C0.583333 6.65625 0.0208333 4.4375 0 2C0.0416667 1.35417 0.375 0.947917 1 0.78125L4.5 0.03125C4.79167 -0.03125 5.0625 0 5.3125 0.125C5.58333 0.270833 5.78125 0.479167 5.90625 0.75L7.40625 4.25C7.61458 4.8125 7.48958 5.30208 7.03125 5.71875L5.78125 6.75C6.63542 8.20833 7.79167 9.36458 9.25 10.2188L10.2812 8.96875ZM14.4688 11.4062L11.3125 10.0625L10.4062 11.1875C10.1562 11.4583 9.85417 11.625 9.5 11.6875C9.16667 11.75 8.83333 11.6979 8.5 11.5312C6.8125 10.5312 5.46875 9.1875 4.46875 7.5C4.28125 7.16667 4.21875 6.82292 4.28125 6.46875C4.36458 6.13542 4.54167 5.84375 4.8125 5.59375L5.9375 4.6875L4.59375 1.53125L1.5 2.21875C1.5625 4.48958 2.14583 6.54167 3.25 8.375C4.33333 10.2083 5.79167 11.6667 7.625 12.75C9.45833 13.8542 11.5208 14.4375 13.8125 14.5L14.4688 11.4062Z" fill="#676767" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white rounded-[10px] outline outline-1 outline-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:outline-[#00BFD2] focus:outline-2 transition-colors"
                  />
                  <div className="absolute left-[21px] top-[19px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 14.5C8.125 14.5208 8.32292 14.4271 8.59375 14.2188C8.86458 14.0312 9.16667 13.625 9.5 13C9.77083 12.4375 10 11.7708 10.1875 11H5.8125C6 11.7708 6.22917 12.4375 6.5 13C6.83333 13.625 7.13542 14.0312 7.40625 14.2188C7.67708 14.4271 7.875 14.5208 8 14.5ZM5.59375 9.5H10.4375C10.4792 9.02083 10.5 8.52083 10.5 8C10.5 7.47917 10.4792 6.97917 10.4375 6.5H5.59375C5.53125 6.97917 5.5 7.47917 5.5 8C5.5 8.52083 5.53125 9.02083 5.59375 9.5ZM5.8125 5H10.1875C10 4.22917 9.77083 3.5625 9.5 3C9.16667 2.375 8.86458 1.96875 8.59375 1.78125C8.32292 1.57292 8.125 1.47917 8 1.5C7.875 1.47917 7.67708 1.57292 7.40625 1.78125C7.13542 1.96875 6.83333 2.375 6.5 3C6.22917 3.5625 6 4.22917 5.8125 5ZM11.9375 6.5C11.9792 6.97917 12 7.47917 12 8C12 8.52083 11.9792 9.02083 11.9375 9.5H14.3125C14.4375 9.02083 14.5 8.52083 14.5 8C14.5 7.47917 14.4375 6.97917 14.3125 6.5H11.9375ZM13.7812 5C13.0729 3.6875 12.0417 2.71875 10.6875 2.09375C11.125 2.90625 11.4688 3.875 11.7188 5H13.7812ZM4.28125 5C4.51042 3.875 4.85417 2.90625 5.3125 2.09375C3.95833 2.71875 2.92708 3.6875 2.21875 5H4.28125ZM1.6875 6.5C1.5625 6.97917 1.5 7.47917 1.5 8C1.5 8.52083 1.5625 9.02083 1.6875 9.5H4.0625C4.02083 9.02083 4 8.52083 4 8C4 7.47917 4.02083 6.97917 4.0625 6.5H1.6875ZM10.6875 13.9062C12.0417 13.2812 13.0729 12.3125 13.7812 11H11.7188C11.4896 12.125 11.1458 13.0938 10.6875 13.9062ZM5.3125 13.9062C4.875 13.0938 4.53125 12.125 4.28125 11H2.21875C2.92708 12.3125 3.95833 13.2812 5.3125 13.9062ZM8 16C6.54167 15.9792 5.20833 15.625 4 14.9375C2.79167 14.2292 1.8125 13.25 1.0625 12C0.354167 10.7292 0 9.39583 0 8C0 6.60417 0.354167 5.27083 1.0625 4C1.8125 2.75 2.79167 1.77083 4 1.0625C5.20833 0.375 6.54167 0.020833 8 0C9.45833 0.020833 10.7917 0.375 12 1.0625C13.2083 1.77083 14.1875 2.75 14.9375 4C15.6458 5.27083 16 6.60417 16 8C16 9.39583 15.6458 10.7292 14.9375 12C14.1875 13.25 13.2083 14.2292 12 14.9375C10.7917 15.625 9.45833 15.9792 8 16Z" fill="#676767" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-xl outline outline-1 outline-sky-700/10 text-stone-950 placeholder:text-stone-500 font-['Inter'] focus:outline-[#00BFD2] focus:outline-2 transition-colors resize-none"
                />
                <div className="absolute left-[21px] top-[21px]">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75368 9.65625C3.06618 9.03125 2.99326 8.44792 2.53493 7.90625C1.84743 7.19792 1.50368 6.39583 1.50368 5.5C1.52451 4.45833 1.98284 3.54167 2.87868 2.75C3.77451 1.95833 4.98284 1.54167 6.50368 1.5C8.02451 1.54167 9.23284 1.95833 10.1287 2.75C11.0245 3.54167 11.4828 4.45833 11.5037 5.5C11.4828 6.54167 11.0245 7.45833 10.1287 8.25C9.23284 9.04167 8.02451 9.45833 6.50368 9.5C6.08701 9.5 5.69118 9.45833 5.31618 9.375C4.98284 9.3125 4.67034 9.36458 4.37868 9.53125C4.23284 9.59375 4.09743 9.65625 3.97243 9.71875C3.47243 9.94792 2.95159 10.1354 2.40993 10.2812C2.49326 10.1354 2.57659 9.98958 2.65993 9.84375C2.70159 9.78125 2.73284 9.71875 2.75368 9.65625ZM0.00367647 5.5C0.0245098 6.83333 0.503676 7.97917 1.44118 8.9375C1.39951 9 1.36826 9.05208 1.34743 9.09375C1.03493 9.69792 0.659926 10.25 0.222426 10.75C-0.0067402 10.9792 -0.0588235 11.2396 0.0661765 11.5312C0.21201 11.8229 0.441176 11.9792 0.753676 12C2.12868 11.9375 3.40993 11.625 4.59743 11.0625C4.74326 11 4.88909 10.9375 5.03493 10.875C5.51409 10.9583 6.00368 11 6.50368 11C8.33701 10.9583 9.86826 10.4167 11.0974 9.375C12.3266 8.35417 12.962 7.0625 13.0037 5.5C12.962 3.9375 12.3266 2.64583 11.0974 1.625C9.86826 0.583333 8.33701 0.041667 6.50368 0C4.67034 0.041667 3.13909 0.583333 1.90993 1.625C0.68076 2.64583 0.0453431 3.9375 0.00367647 5.5ZM13.5037 15C14.0037 15 14.4933 14.9583 14.9724 14.875C15.1183 14.9375 15.2641 15 15.4099 15.0625C16.5974 15.625 17.8787 15.9375 19.2537 16C19.5662 15.9792 19.7953 15.8333 19.9412 15.5625C20.0453 15.25 19.9933 14.9792 19.7849 14.75C19.3474 14.25 18.9724 13.7083 18.6599 13.125C18.6391 13.0833 18.6183 13.0521 18.5974 13.0312C18.5974 13.0104 18.587 12.9792 18.5662 12.9375C19.5037 11.9792 19.9828 10.8333 20.0037 9.5C19.962 7.97917 19.3578 6.70833 18.1912 5.6875C17.0453 4.66667 15.587 4.10417 13.8162 4C13.9412 4.47917 14.0037 4.97917 14.0037 5.5V5.53125C15.3787 5.65625 16.4724 6.10417 17.2849 6.875C18.0766 7.64583 18.4828 8.52083 18.5037 9.5C18.5037 10.3958 18.1599 11.1979 17.4724 11.9062C17.0141 12.4479 16.9412 13.0312 17.2537 13.6562C17.2745 13.7188 17.3058 13.7812 17.3474 13.8438C17.4099 13.9479 17.4724 14.0521 17.5349 14.1562C17.5558 14.1979 17.5766 14.2396 17.5974 14.2812C17.0558 14.1354 16.5349 13.9479 16.0349 13.7188C15.9099 13.6562 15.7745 13.5938 15.6287 13.5312C15.337 13.3646 15.0245 13.3125 14.6912 13.375C14.3162 13.4583 13.9203 13.5 13.5037 13.5C12.5245 13.4792 11.6703 13.2917 10.9412 12.9375C10.212 12.5833 9.63909 12.125 9.22243 11.5625C8.72243 11.7292 8.20159 11.8438 7.65993 11.9062C8.20159 12.8438 8.99326 13.5938 10.0349 14.1562C11.0558 14.6979 12.212 14.9792 13.5037 15Z" fill="#676767" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-4 bg-[#00BFD2] rounded-[247px] inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-white text-lg font-bold font-['Inter'] uppercase leading-7 tracking-wide">
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </span>
                  {!isSubmitting && (
                    <div className="relative">
                      <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.4062 6.75C19.4062 6.25781 19.248 5.85352 18.9316 5.53711C18.6152 5.2207 18.2109 5.0625 17.7188 5.0625H5.90625C5.41406 5.0625 5.00977 5.2207 4.69336 5.53711C4.37695 5.85352 4.21875 6.25781 4.21875 6.75C4.21875 7.24219 4.37695 7.64648 4.69336 7.96289C5.00977 8.2793 5.41406 8.4375 5.90625 8.4375H13.6582L3.00586 19.0371C2.68945 19.3887 2.53125 19.793 2.53125 20.25C2.53125 20.707 2.68945 21.1113 3.00586 21.4629C3.35742 21.7793 3.76172 21.9375 4.21875 21.9375C4.67578 21.9375 5.08008 21.7793 5.43164 21.4629L16.0312 10.8105V18.5625C16.0312 19.0547 16.1895 19.459 16.5059 19.7754C16.8223 20.0918 17.2266 20.25 17.7188 20.25C18.2109 20.25 18.6152 20.0918 18.9316 19.7754C19.248 19.459 19.4062 19.0547 19.4062 18.5625V6.75Z" fill="white" />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
