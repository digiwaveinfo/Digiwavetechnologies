"use client";

import Link from "next/link";
import Container from "./Container";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }, 900);
  };

  return (
    <footer className="w-full flex flex-col">
      {/* Insights Section - Top */}
      <div
        className="w-full py-12 md:py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/footer-top.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Title */}
            <div className="flex flex-col gap-5 max-w-[536px] text-center lg:text-left">
              <div className="text-[#00BFD2] text-base font-bold font-['Inter'] uppercase tracking-wide">
                Stay Connected with Us
              </div>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
                Insights, tech tips, and digital inspiration
              </h2>
            </div>

            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <input
                type="email"
                placeholder={subscribed ? "Thank you for subscribing!" : "Email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || subscribed}
                required
                className="w-full sm:w-[350px] md:w-[464px] px-6 py-4 bg-white rounded-full text-indigo-950 text-lg font-semibold font-['Inter'] placeholder:text-indigo-950/50 focus:outline-none focus:ring-2 focus:ring-[#00BFD2] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              />
              <button
                type="submit"
                disabled={loading || subscribed}
                className={`px-8 py-4 rounded-full text-white text-lg font-bold font-['Inter'] uppercase whitespace-nowrap transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px] ${subscribed ? 'bg-green-500' : 'bg-[#00BFD2] hover:opacity-90'
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : subscribed ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* Main Footer - Bottom */}
      <div
        className="w-full py-14 relative overflow-hidden"
        style={{
          backgroundImage: "url('/Footer-bottom.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container className="max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
            {/* Logo and Description - 42% width */}
            <div className="flex flex-col gap-[30px] lg:w-[42%] lg:pr-8">
              <div className="flex items-center gap-[15px]">
                <img
                  src="/Logo-transparent.png"
                  alt="Digiwave Technologies"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-[#0F0F10] text-base font-normal font-['Inter'] leading-[26px] max-w-[332px]">
                Digiwave Technologies develops scalable digital solutions including web apps, mobile apps, AI-driven platforms, and cloud systems.
                <br />
                We help businesses innovate, automate, and grow.
              </p>
            </div>

            {/* Company Links - 20% width */}
            <div className="flex flex-col gap-[30px] lg:w-[20%]">
              <h3 className="text-[#00BFD2] text-2xl font-bold font-['Inter']">Company</h3>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors">
                  Portfolio
                </Link>
                <Link href="/blog" className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors">
                  Blog
                </Link>
                <Link href="/careers" className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors">
                  Careers
                </Link>
                <Link href="/contact" className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors">
                  Contact us
                </Link>
              </div>
            </div>

            {/* Help Links - 18% width */}
            <div className="flex flex-col gap-[30px] lg:w-[18%]">
              <h3 className="text-[#00BFD2] text-2xl font-bold font-['Inter']">Help</h3>
              <div className="flex flex-col gap-3">
                <Link href="/terms" className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Contact Details - 20% width */}
            <div className="flex flex-col gap-[30px] lg:w-[20%]">
              <h3 className="text-[#00BFD2] text-2xl font-bold font-['Inter']">Contact details</h3>
              <div className="flex flex-col gap-[13px] whitespace-nowrap">
                <div className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M19.25 9.167C19.25 15.584 11 21.084 11 21.084S2.75 15.584 2.75 9.167c0-2.188.869-4.287 2.416-5.834A8.25 8.25 0 0111 .917a8.25 8.25 0 015.834 2.416A8.25 8.25 0 0119.25 9.167z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 11.917a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a
                    href="https://maps.google.com/?q=Harekrishna+Complex,+B/h.+City+Gold+Cinema,+009,+Ashram+Rd,+Ahmedabad,+Gujarat+380009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00114C] text-sm font-normal font-['Inter'] leading-5 hover:text-[#00BFD2] transition-colors whitespace-normal"
                  >
                    Harekrishna Complex, B/h. City Gold Cinema, 009, Ashram Rd, Ahmedabad, Gujarat 380009
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
                    <path d="M3.667 3.667h14.666c1.009 0 1.834.825 1.834 1.833v11c0 1.008-.825 1.833-1.834 1.833H3.667c-1.008 0-1.834-.825-1.834-1.833v-11c0-1.008.826-1.833 1.834-1.833z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.167 5.5L11 11.917 1.833 5.5" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a
                    href="mailto:info@digiwavetechnologies.in"
                    className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors"
                  >
                    info@digiwavetechnologies.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
                    <path d="M3.667 3.667h14.666c1.009 0 1.834.825 1.834 1.833v11c0 1.008-.825 1.833-1.834 1.833H3.667c-1.008 0-1.834-.825-1.834-1.833v-11c0-1.008.826-1.833 1.834-1.833z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.167 5.5L11 11.917 1.833 5.5" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a
                    href="mailto:hr@digiwavetechnologies.in"
                    className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors"
                  >
                    hr@digiwavetechnologies.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
                    <path d="M20.167 15.51v2.75a1.833 1.833 0 01-2 1.833 18.15 18.15 0 01-7.91-2.814 17.883 17.883 0 01-5.5-5.5 18.15 18.15 0 01-2.814-7.947 1.833 1.833 0 011.824-2H6.517c.445-.004.88.153 1.23.445.35.29.57.697.623 1.138a11.77 11.77 0 00.642 2.577c.123.328.15.685.077 1.027a1.833 1.833 0 01-.492.88l-1.164 1.165a14.667 14.667 0 005.5 5.5l1.165-1.165c.233-.234.527-.399.849-.476.322-.077.66-.05.968.077.853.31 1.738.525 2.636.642a1.834 1.834 0 011.616 1.87z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a
                    href="tel:+919428418099"
                    className="text-[#00114C] text-base font-normal font-['Inter'] leading-[26px] hover:text-[#00BFD2] transition-colors"
                  >
                    +91 9428418099
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-[34px]">
                <a href="https://www.linkedin.com/company/digiwave-technologies" target="_blank" rel="noopener noreferrer" className="text-[#00BFD2] hover:opacity-70 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 9h4v12H2V9z" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6a2 2 0 100-4 2 2 0 000 4z" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/digiwave_technologies?igsh=bjlvcjB4YW5oczc4" target="_blank" rel="noopener noreferrer" className="text-[#00BFD2] hover:opacity-70 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 11.37a4 4 0 11-4.63-4.63 4 4 0 014.63 4.63z" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 6.5h.01" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/1JJfr1MZXC/" target="_blank" rel="noopener noreferrer" className="text-[#00BFD2] hover:opacity-70 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" fill="#00BFD2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright Bar */}
      <div className="w-full py-6 bg-[#00114C]">
        <Container className="text-center">
          <p className="text-white text-sm font-semibold font-['Inter'] leading-4">
            Copyright © 2025 Digiwave technology
          </p>
        </Container>
      </div>
    </footer >
  );
}
