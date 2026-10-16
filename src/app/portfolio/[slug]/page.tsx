import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PortfolioShowView from "@/components/portfolio/PortfolioShowView";
import { getPortfolioBySlug, getPortfolios } from "@/lib/api";
import { relatedPortfolios } from "@/lib/portfolio/show-helpers";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PortfolioShowPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PortfolioShowPageProps): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) {
    return { title: "Portfolio | Digiwave Technologies" };
  }

  return {
    title: `${portfolio.title} | Portfolio | Digiwave Technologies`,
    description: portfolio.short_description,
    openGraph: {
      title: portfolio.title,
      description: portfolio.short_description,
      type: "website",
      images: portfolio.hero_image_url ? [{ url: portfolio.hero_image_url }] : undefined,
    },
  };
}

export default async function PortfolioShowPage({ params }: PortfolioShowPageProps) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) {
    notFound();
  }

  const allPortfolios = await getPortfolios();
  const related = relatedPortfolios(allPortfolios, slug);

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <PortfolioShowView portfolio={portfolio} relatedPortfolios={related} />
      <Contact />
      <Footer />
    </div>
  );
}
