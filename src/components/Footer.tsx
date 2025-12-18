"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Insights Section - Top */}
      <div
        className="w-full py-12 md:py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/footer-top.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 lg:px-20 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Title */}
            <div className="flex flex-col gap-5 max-w-[536px]">
              <div className="text-[#00BFD2] text-base font-bold font-['Inter'] uppercase tracking-wide">
                Stay Connected with Us
              </div>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
                Insights, tech tips, and digital inspiration
              </h2>
            </div>

            {/* Subscribe Form */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:w-[350px] md:w-[464px] px-6 py-4 bg-white rounded-full text-indigo-950 text-lg font-semibold font-['Inter'] placeholder:text-indigo-950/50 focus:outline-none focus:ring-2 focus:ring-[#00BFD2]"
              />
              <button className="px-8 py-4 bg-[#00BFD2] rounded-full text-white text-lg font-bold font-['Inter'] uppercase hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Bottom */}
      <div
        className="w-full py-12 md:py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/Footer-bottom.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#fff",
        }}
      >
        <div className="container mx-auto px-6 lg:px-20 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3.5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/53464a68dade6f8a9a2888ca2325aca87ab049c8?width=191"
                  alt="Digiwave Logo"
                  className="w-20 h-12 object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c4036386951a1d6ca44a4c518adf6a756d6a4c54?width=437"
                  alt="Digiwave Technologies"
                  className="w-48 h-10 object-contain hidden sm:block"
                />
              </div>
              <p className="text-stone-950 text-base font-normal font-['Inter'] leading-6 max-w-[320px]">
                Digiwave Technologies develops scalable digital solutions including web apps, mobile apps, AI-driven platforms, and cloud systems.
                <br />
                We help businesses innovate, automate, and grow.
              </p>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-7">
              <h3 className="text-[#00BFD2] text-2xl font-bold font-['Inter']">Company</h3>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="text-sky-950 text-base font-normal font-['Inter'] leading-6 hover:text-[#00BFD2] transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="text-sky-950 text-base font-normal font-['Inter'] leading-6 hover:text-[#00BFD2] transition-colors">
                  Services
                </Link>
                <Link href="/product" className="text-sky-950 text-base font-normal font-['Inter'] leading-6 hover:text-[#00BFD2] transition-colors">
                  Product
                </Link>
                <Link href="/portfolio" className="text-sky-950 text-base font-normal font-['Inter'] leading-6 hover:text-[#00BFD2] transition-colors">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-sky-950 text-base font-normal font-['Inter'] leading-6 hover:text-[#00BFD2] transition-colors">
                  Contact us
                </Link>
              </div>
            </div>

            {/* Help Links */}
            <div className="flex flex-col gap-7">
              <h3 className="text-[#00BFD2] text-2xl font-bold font-['Inter']">Help</h3>
              <div className="flex flex-col gap-3">
                <Link href="/terms" className="text-sky-950 text-base font-normal font-['Inter'] leading-6 hover:text-[#00BFD2] transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-sky-950 text-base font-normal font-['Inter'] leading-6 hover:text-[#00BFD2] transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-7">
              <h3 className="text-[#00BFD2] text-2xl font-bold font-['Inter']">Contact details</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M19.25 9.167C19.25 15.584 11 21.084 11 21.084S2.75 15.584 2.75 9.167c0-2.188.869-4.287 2.416-5.834A8.25 8.25 0 0111 .917a8.25 8.25 0 015.834 2.416A8.25 8.25 0 0119.25 9.167z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 11.917a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sky-950 text-base font-normal font-['Inter'] leading-6">Ahmedabad</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3.667 3.667h14.666c1.009 0 1.834.825 1.834 1.833v11c0 1.008-.825 1.833-1.834 1.833H3.667c-1.008 0-1.834-.825-1.834-1.833v-11c0-1.008.826-1.833 1.834-1.833z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.167 5.5L11 11.917 1.833 5.5" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sky-950 text-base font-normal font-['Inter'] leading-6">contact@digiwave.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M20.167 15.51v2.75a1.833 1.833 0 01-2 1.833 18.15 18.15 0 01-7.91-2.814 17.883 17.883 0 01-5.5-5.5 18.15 18.15 0 01-2.814-7.947 1.833 1.833 0 011.824-2H6.517c.445-.004.88.153 1.23.445.35.29.57.697.623 1.138a11.77 11.77 0 00.642 2.577c.123.328.15.685.077 1.027a1.833 1.833 0 01-.492.88l-1.164 1.165a14.667 14.667 0 005.5 5.5l1.165-1.165c.233-.234.527-.399.849-.476.322-.077.66-.05.968.077.853.31 1.738.525 2.636.642a1.834 1.834 0 011.616 1.87z" stroke="#00114C" strokeWidth="1.833" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sky-950 text-base font-normal font-['Inter'] leading-6">+91 99856 89222</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 mt-4">
                <a href="#" className="text-[#00BFD2] hover:opacity-70 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" fill="#00BFD2" />
                  </svg>
                </a>
                <a href="#" className="text-[#00BFD2] hover:opacity-70 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 11.37a4 4 0 11-4.63-4.63 4 4 0 014.63 4.63z" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 6.5h.01" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#" className="text-[#00BFD2] hover:opacity-70 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full py-6 bg-[#00114C]">
        <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] text-center">
          <p className="text-white text-sm font-semibold font-['Inter']">
            Copyright © 2025 Digiwave technology
          </p>
        </div>
      </div>
    </footer>
  );
}
