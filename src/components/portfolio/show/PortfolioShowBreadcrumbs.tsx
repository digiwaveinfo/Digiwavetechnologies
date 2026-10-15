import Link from "next/link";

function Chevron() {
  return (
    <svg width="5" height="7" viewBox="0 0 5 7" fill="none" aria-hidden className="shrink-0">
      <path
        d="M2.68333 3.5L0 0.816667L0.816667 0L4.31667 3.5L0.816667 7L0 6.18333L2.68333 3.5V3.5"
        fill="#94A3B8"
      />
    </svg>
  );
}

interface PortfolioShowBreadcrumbsProps {
  projectName: string;
}

export default function PortfolioShowBreadcrumbs({ projectName }: PortfolioShowBreadcrumbsProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
      <Link href="/portfolio" className="text-[#64748B] text-xs font-semibold tracking-wider hover:text-[#00838F]">
        PORTFOLIO
      </Link>
      <Chevron />
      <span className="text-[#00838F] text-xs font-semibold tracking-wider">{projectName}</span>
    </nav>
  );
}
