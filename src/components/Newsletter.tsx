"use client";

import { useState } from "react";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
}

export default function Newsletter({
  title = "Stay Connected with Us",
  subtitle = "Insights, tech tips, and digital inspiration",
  placeholder = "Email address",
  buttonText = "SUBSCRIBE"
}: NewsletterProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="w-full h-72 bg-sky-950 border border-cyan-400/5 flex items-center justify-center px-20">
      <div className="w-[1272px] flex justify-between items-center">
        <div className="w-[536px] space-y-5">
          <div className="text-cyan-500 text-base font-bold uppercase tracking-wide">
            {title}
          </div>
          <h2 className="text-white text-5xl font-bold leading-[67.50px]">
            {subtitle}
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <form onSubmit={handleSubmit} className="flex items-center gap-5">
            <input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[464px] px-5 py-4 bg-white rounded-tl-[57px] rounded-tr-[52px] rounded-bl-[57px] rounded-br-[52px] text-indigo-950 text-lg font-semibold outline-none"
              required
            />
            <button 
              type="submit"
              className="w-52 px-5 py-4 bg-cyan-500 rounded-tl-[52px] rounded-tr-[57px] rounded-bl-[52px] rounded-br-[57px] flex justify-center items-center hover:bg-cyan-600 transition-colors"
            >
              <span className="text-white text-lg font-bold capitalize">{buttonText}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}