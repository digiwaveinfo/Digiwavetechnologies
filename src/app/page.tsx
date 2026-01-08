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
  title: "Digiwave Technologies - Custom Software Development Company | Web & Mobile App Development",
  description: "Leading software development company specializing in custom web applications, mobile app development (Android & iOS), and AI/ML solutions. Transform your ideas into scalable digital products.",
  keywords: [
    "software development company",
    "custom software development",
    "web development services",
    "mobile app development company",
    "AI solutions company",
    "machine learning solutions",
    "digital transformation",
    "IT services company",
    "Android app development",
    "iOS app development",
    "enterprise software",
    "scalable web applications"
  ],
  openGraph: {
    title: "Digiwave Technologies - Transform Ideas into Scalable Digital Solutions",
    description: "Partner with a leading software development company for custom web apps, mobile development, and AI-powered solutions that drive business growth.",
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
