"use client";

import { useState } from "react";

const StarIcon = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66799 0.492286C8.50393 0.182389 8.23961 0.0183268 7.87502 9.82285e-05C7.52867 0.0183268 7.26435 0.182389 7.08206 0.492286L5.33206 4.10166L1.39456 4.70322C1.0482 4.75791 0.820337 4.94932 0.710962 5.27744C0.601587 5.6238 0.674504 5.92458 0.929712 6.17979L3.77346 8.99619L3.08987 12.9884C3.05341 13.3347 3.1719 13.6173 3.44534 13.836C3.737 14.0366 4.0469 14.0548 4.37502 13.8907L7.87502 12.0313L11.4024 13.8907C11.7123 14.0548 12.013 14.0366 12.3047 13.836C12.5964 13.6173 12.7149 13.3347 12.6602 12.9884L12.0039 8.99619L14.8477 6.17979C15.0847 5.92458 15.1576 5.6238 15.0664 5.27744C14.9388 4.94932 14.7018 4.75791 14.3555 4.70322L10.418 4.10166L8.66799 0.492286Z" fill="#FCC640" />
  </svg>
);

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      quote: "Amazing software services",
      text: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
      name: "Maverick Phoenix",
      role: "Board Member, UNIQA",
      location: "Seattle, Ukraine",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d329f453cbc789c77dfa605dd5515388838e71a0?width=200",
    },
    {
      quote: "Exceptional development team",
      text: "Working with this team has been a game-changer for our startup. They understood our vision from day one and delivered beyond expectations. Their technical expertise and communication skills are top-notch.",
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      location: "New York, USA",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/78ae07a0b6281ff620c3f309aa9274c820a2e2dc?width=200",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1800px]">
        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-5">
          {/* Stats Card */}
          <div className="w-full lg:w-96 p-6 sm:p-8 md:p-[50px] bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)] flex flex-col justify-between">
            <div>
              <div className="text-[#00BFD2] text-3xl sm:text-4xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[66px]">3,900+</div>
              <div className="text-sky-950 text-2xl sm:text-3xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[54px] mt-2">
                customers<br />win deals<br />with Techco
              </div>
            </div>

            {/* Review Logos */}
            <div className="flex flex-row gap-6 sm:gap-8 mt-6 sm:mt-8">
              {/* Clutch */}
              <div className="flex flex-col gap-2">
                <div className="text-xl sm:text-2xl font-bold">C</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="text-zinc-600">From </span>
                  <span className="text-slate-900 font-bold">200+</span>
                  <span className="text-zinc-600"> reviews</span>
                </div>
              </div>
              {/* G2 */}
              <div className="flex flex-col gap-2">
                <div className="text-xl sm:text-2xl font-bold text-red-500">G2</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="text-zinc-600">From </span>
                  <span className="text-slate-900 font-bold">300+</span>
                  <span className="text-zinc-600"> reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="flex-1 p-6 sm:p-8 md:p-[50px] bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)] flex flex-col justify-between">
            <div>
              <h3 className="text-sky-700 text-xl sm:text-2xl md:text-3xl font-bold font-['Inter'] leading-tight sm:leading-9 mb-4 sm:mb-6">
                "{reviews[currentSlide].quote}"
              </h3>
              <p className="text-sky-950 text-sm sm:text-base md:text-xl font-normal font-['Inter'] leading-6 sm:leading-8">
                {reviews[currentSlide].text}
              </p>
            </div>

            {/* Author & Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-32 bg-sky-100 rounded-[10px] overflow-hidden flex-shrink-0">
                  <img
                    src={reviews[currentSlide].image}
                    alt={reviews[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-slate-900 text-base sm:text-lg md:text-xl font-semibold font-['Inter']">
                    {reviews[currentSlide].name}
                  </div>
                  <div className="text-zinc-600 text-xs sm:text-sm font-medium font-['Inter']">
                    {reviews[currentSlide].role}
                  </div>
                  <div className="text-slate-900 text-xs font-medium font-['Inter'] mt-1 sm:mt-2">
                    📍 {reviews[currentSlide].location}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-300 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M0.28125 7.28125C0.09375 7.48958 0 7.72917 0 8C0 8.27083 0.09375 8.51042 0.28125 8.71875L5.28125 13.7188C5.48958 13.9062 5.72917 14 6 14C6.27083 14 6.51042 13.9062 6.71875 13.7188C6.90625 13.5104 7 13.2708 7 13C7 12.7292 6.90625 12.4896 6.71875 12.2812L3.40625 9H13C13.2917 9 13.5312 8.90625 13.7188 8.71875C13.9062 8.53125 14 8.29167 14 8C14 7.70833 13.9062 7.46875 13.7188 7.28125C13.5312 7.09375 13.2917 7 13 7H3.40625L6.71875 3.71875C6.90625 3.51042 7 3.27083 7 3C7 2.72917 6.90625 2.48958 6.71875 2.28125C6.51042 2.09375 6.27083 2 6 2C5.72917 2 5.48958 2.09375 5.28125 2.28125L0.28125 7.28125Z" fill="#00114C" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-300 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M13.7188 8.71875C13.9062 8.51042 14 8.27083 14 8C14 7.72917 13.9062 7.48958 13.7188 7.28125L8.71875 2.28125C8.51042 2.09375 8.27083 2 8 2C7.72917 2 7.48958 2.09375 7.28125 2.28125C7.09375 2.48958 7 2.72917 7 3C7 3.27083 7.09375 3.51042 7.28125 3.71875L10.5938 7H1C0.708333 7 0.46875 7.09375 0.28125 7.28125C0.09375 7.46875 0 7.70833 0 8C0 8.29167 0.09375 8.53125 0.28125 8.71875C0.46875 8.90625 0.708333 9 1 9H10.5938L7.28125 12.2812C7.09375 12.4896 7 12.7292 7 13C7 13.2708 7.09375 13.5104 7.28125 13.7188C7.48958 13.9062 7.72917 14 8 14C8.27083 14 8.51042 13.9062 8.71875 13.7188L13.7188 8.71875Z" fill="#00114C" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
