import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PortfolioDetailHero from "@/components/portfolio/PortfolioDetailHero";
import PortfolioImageSection from "@/components/portfolio/PortfolioImageSection";
import TechIntegration from "@/components/portfolio/TechIntegration";
import PortfolioFeatures from "@/components/portfolio/PortfolioFeatures";
import ProblemSolution from "@/components/portfolio/ProblemSolution";
import DesignSection from "@/components/portfolio/DesignSection";
import { getPortfolioBySlug } from "@/lib/api";

interface PortfolioDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { id } = await params;
  const portfolio = await getPortfolioBySlug(id);
  
  // If portfolio not found, show default content
  if (!portfolio) {
    return (
      <div className="min-h-screen w-full">
        <Header />
        <section className="py-20 px-5 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-[#022030] mb-4">Portfolio Not Found</h1>
            <p className="text-gray-600">The requested portfolio item could not be found.</p>
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen w-full">
      <Header />
      
      <PortfolioDetailHero 
        title={portfolio.title}
        description={portfolio.full_description}
      />
      
      <PortfolioImageSection 
        heroImage={portfolio.hero_image_url} 
        title={portfolio.title}
      />
      
      <TechIntegration technologies={portfolio.technologies} />
      
      <PortfolioFeatures features={portfolio.features} />
      
      <ProblemSolution 
        problem={portfolio.problem_statement}
        solution={portfolio.solution_description}
      />
      
      <DesignSection galleryImages={portfolio.gallery_images} />
      
      <Contact />
      <Footer />
    </div>
  );
}
