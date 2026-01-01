"use client";

import { useState } from "react";

interface ContactInfo {
  phone: string;
  email: string;
}

interface ProcessStep {
  number: string;
  description: string;
}

interface ServiceContactProps {
  contactInfo?: ContactInfo;
  processSteps?: ProcessStep[];
}

const defaultContactInfo: ContactInfo = {
  phone: "+91 9428418099",
  email: "info@digiwavetechnologies.in"
};

const defaultProcessSteps: ProcessStep[] = [
  { number: "01", description: "Share your requirements" },
  { number: "02", description: "Discuss them with our experts" },
  { number: "03", description: "Get a free quote" },
  { number: "04", description: "Start the project" }
];

export default function ServiceContact({
  contactInfo = defaultContactInfo,
  processSteps = defaultProcessSteps
}: ServiceContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-neutral-100 py-20 px-20">
      <div className="flex gap-7 justify-center">
        {/* Let's Start Card */}
        <div className="w-96 bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)] p-12">
          <h2 className="text-sky-950 text-5xl font-bold leading-[60px] mb-6">Let's Start</h2>
          <p className="text-stone-950 text-lg font-medium leading-8 mb-8">
            Initiating Your Journey to Success and Growth.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white">📞</span>
              </div>
              <span className="text-stone-950 text-base font-medium">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white">✉️</span>
              </div>
              <span className="text-stone-950 text-base font-medium">{contactInfo.email}</span>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-12 relative">
            <div className="absolute left-5 top-0 w-px h-48 bg-sky-700"></div>

            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-12 relative">
                <div className="w-10 h-10 bg-white rounded-full border border-sky-700 flex items-center justify-center z-10">
                  <span className="text-sky-700 text-base font-medium">{step.number}</span>
                </div>
                <span className="text-stone-950 text-base font-normal">{step.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="w-[843px] bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)] p-12">
          <h3 className="text-cyan-500 text-xl font-medium mb-4">Contact Us</h3>
          <h2 className="text-slate-900 text-2xl font-semibold leading-9 mb-8">
            Send us a message, and we'll promptly discuss your project with you.
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-14 px-4 bg-white rounded-[10px] border border-sky-700/10 text-stone-500 text-base"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-14 px-4 bg-white rounded-[10px] border border-sky-700/10 text-stone-500 text-base"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone No."
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-14 px-4 bg-white rounded-[10px] border border-sky-700/10 text-stone-500 text-base"
              />
              <input
                type="text"
                name="company"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full h-14 px-4 bg-white rounded-[10px] border border-sky-700/10 text-stone-500 text-base"
              />
            </div>

            <textarea
              name="message"
              placeholder="How can we help you?"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-white rounded-xl border border-sky-700/10 text-stone-500 text-base resize-none"
              required
            ></textarea>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-cyan-500 rounded-[247px] flex items-center gap-2.5 hover:bg-cyan-600 transition-colors"
              >
                <span className="text-white text-lg font-bold uppercase tracking-wide">Send Inquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}