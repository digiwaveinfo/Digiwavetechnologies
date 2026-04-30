import { Metadata } from "next";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import SupportBanner from "@/components/SupportBanner";
import TechnologySection from "@/components/TechnologySection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";

export const metadata: Metadata = {
  title: "IT Solutions Company in Ahmedabad | Digiwave Technologies",
  description: "Digiwave Technologies is a top IT solutions company in Ahmedabad. We deliver AI, web, mobile app, cloud & IoT development services. Get a free consultation.",
  keywords: [
    "AI Development Company In India",
    "Website Development Company in India",
    "Web Development Services India",
    "Mobile App Development Company in India",
    "App Development Company in India",
    "Iot Solution Providers",
    "AI Development Company India",
    "Custom Website Development Company in India",
    "AI/ML Development Company in India",
    "Ai Software Development Company",
    "Devops Solution Providers in India",
    "Data Intelligence Solutions",
    "Intelligent Automation Consulting",
    "IT Solutions Company Ahmedabad"
  ],
  openGraph: {
    title: "IT Solutions Company in Ahmedabad | Digiwave Technologies",
    description: "Digiwave Technologies is a top IT solutions company in Ahmedabad. We deliver AI, web, mobile app, cloud & IoT development services. Get a free consultation.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomeHero />
        <Services />
        <About />
        <Portfolio />
        <SupportBanner />
        <TechnologySection />
        <Testimonials />
        <Contact />
        {/* SEO-optimized content (hidden visually, visible to search engines) */}
        <SEOContent />
      </main>
      <Footer />
    </div>
  );
}
