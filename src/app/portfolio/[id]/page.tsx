import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PortfolioDetailHero from "@/components/portfolio/PortfolioDetailHero";
import PortfolioImageSection from "@/components/portfolio/PortfolioImageSection";
import TechIntegration from "@/components/portfolio/TechIntegration";
import PortfolioFeatures from "@/components/portfolio/PortfolioFeatures";
import ProblemSolution from "@/components/portfolio/ProblemSolution";
import DesignSection from "@/components/portfolio/DesignSection";

interface PortfolioDetailPageProps {
  params: Promise<{ id: string }>;
}

// Portfolio data - in a real app this would come from a database or API
const portfolioData: Record<string, { title: string; description: string }> = {
  "estate-facility": {
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri"
  },
  "estate-facility-2": {
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri"
  },
  "estate-facility-3": {
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri"
  },
  "estate-facility-4": {
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri"
  },
  "estate-facility-5": {
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri"
  },
  "estate-facility-6": {
    title: "Estate Facility",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri"
  }
};

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { id } = await params;
  const portfolio = portfolioData[id];
  
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
        description={portfolio.description}
      />
      
      <PortfolioImageSection />
      
      <TechIntegration />
      
      <PortfolioFeatures />
      
      <ProblemSolution />
      
      <DesignSection />
      
      <Contact />
      <Footer />
    </div>
  );
}
