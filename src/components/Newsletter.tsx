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
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      console.log("Newsletter subscription:", email);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }, 800);
  };

  return (
    <div className="w-full h-auto min-h-72 bg-sky-950 border border-cyan-400/5 flex items-center justify-center px-4 sm:px-6 lg:px-8 2xl:px-12 py-10">
      <div className="w-full max-w-[1800px] flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-[536px] space-y-5">
          <div className="text-cyan-500 text-base font-bold uppercase tracking-wide">
            {title}
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[67.50px]">
            {subtitle}
          </h2>
        </div>
        <div className="flex items-center gap-5 w-full lg:w-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
            <input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubscribed || isLoading}
              className="w-full sm:w-[464px] px-5 py-4 bg-white rounded-tl-[57px] rounded-tr-[52px] rounded-bl-[57px] rounded-br-[52px] text-indigo-950 text-lg font-semibold outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />
            <button
              type="submit"
              disabled={isSubscribed || isLoading}
              className={`w-full sm:w-52 px-5 py-4 rounded-tl-[52px] rounded-tr-[57px] rounded-bl-[52px] rounded-br-[57px] flex justify-center items-center gap-2 transition-all duration-300 ${
                isSubscribed 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-cyan-500 hover:bg-cyan-600'
              } disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-white text-lg font-bold capitalize">Loading...</span>
                </>
              ) : isSubscribed ? (
                <>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-white text-lg font-bold capitalize">Subscribed!</span>
                </>
              ) : (
                <span className="text-white text-lg font-bold capitalize">{buttonText}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}