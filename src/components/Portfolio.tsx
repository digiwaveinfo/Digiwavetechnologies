"use client";

import dynamic from "next/dynamic";

const PortfolioContent = dynamic(() => import("./PortfolioContent"), {
  ssr: false,
  loading: () => (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-pulse">Loading portfolios...</div>
      </div>
    </section>
  ),
});

export default function Portfolio() {
  return <PortfolioContent />;
}
