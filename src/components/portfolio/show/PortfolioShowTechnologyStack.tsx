"use client";

import type { Technology } from "@/lib/api";
import PortfolioShowTitleBlock from "@/components/portfolio/show/PortfolioShowTitleBlock";

function TechnologyCard({ iconUrl, name }: { iconUrl?: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="w-[100px] h-[100px] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        {iconUrl ? (
          <img src={iconUrl} alt={name} width={100} height={100} className="object-contain max-h-[100px]" />
        ) : (
          <div className="w-20 h-20 rounded-2xl bg-[#F2FBFA] border border-[#00BFD2]/20 flex items-center justify-center text-[#00BFD2] text-2xl font-bold">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <h3 className="font-['Inter'] text-base font-normal leading-5 text-[#0F0F10] text-center group-hover:text-[#00BFD2] transition-colors">
        {name}
      </h3>
    </div>
  );
}

interface PortfolioShowTechnologyStackProps {
  technologies: Technology[];
}

export default function PortfolioShowTechnologyStack({ technologies }: PortfolioShowTechnologyStackProps) {
  if (!technologies.length) {
    return null;
  }

  return (
    <div className="pt-10 border-t border-[#E2E8F0] flex flex-col gap-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="font-['Poppins'] text-xl font-medium text-[#00BFD2]">Technologies we used</p>
        <PortfolioShowTitleBlock title="Technology stack" align="center" />
      </div>
      <div className="mx-auto flex w-full max-w-[840px] flex-wrap justify-center gap-x-10 gap-y-10">
        {technologies.map((tech) => (
          <div key={tech.id} className="w-[120px] sm:w-[140px] shrink-0">
            <TechnologyCard iconUrl={tech.icon_url} name={tech.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
