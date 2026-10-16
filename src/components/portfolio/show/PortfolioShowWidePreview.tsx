"use client";

import { useEffect, useRef, useState } from "react";
import type { PortfolioItem } from "@/lib/api";
import { portfolioShowcaseSlides } from "@/lib/portfolio/show-helpers";

interface PortfolioShowWidePreviewProps {
  portfolio: PortfolioItem;
}

const AUTO_SCROLL_MS = 1500;

export default function PortfolioShowWidePreview({ portfolio }: PortfolioShowWidePreviewProps) {
  const slides = portfolioShowcaseSlides(portfolio);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setCurrent(0);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, AUTO_SCROLL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, paused]);

  return (
    <section className="py-16 sm:py-24 px-0 border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] max-w-[1152px]">
        <div
          className="rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative bg-[#020617] min-h-[320px] sm:min-h-[480px] lg:min-h-[560px]">
            {slides.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === current ? 1 : 0 }}
                aria-hidden={i !== current}
              >
                <img
                  src={src}
                  alt={`${portfolio.title} showcase ${i + 1}`}
                  className="w-full h-full min-h-[320px] sm:min-h-[480px] lg:min-h-[560px] object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/30 via-transparent to-transparent pointer-events-none" />

            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20 pointer-events-auto"
              role="tablist"
              aria-label="Showcase slides"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Show image ${i + 1} of ${slides.length}`}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "h-2.5 w-8 bg-brand-cyan shadow-[0_0_8px_rgba(0,191,210,0.6)]"
                      : "h-2.5 w-2.5 bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
