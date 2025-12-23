import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <PortfolioHero />
      <PortfolioGrid />
      <Contact />
      <Footer />
    </div>
  );
}