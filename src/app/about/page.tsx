import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import HistoryVision from "@/components/about/HistoryVision";
import BetterTogether from "@/components/about/BetterTogether";
import ProudWork from "@/components/about/ProudWork";
import StatisticsSection from "@/components/about/StatisticsSection";
import FounderQuote from "@/components/about/FounderQuote";
import TeamCollage from "@/components/about/TeamCollage";
import CoreValues from "@/components/about/CoreValues";
import WhyUsBetter from "@/components/about/WhyUsBetter";
import FAQ from "@/components/about/FAQ";
import Contact from "@/components/Contact";
import ProductProcess from "@/components/product/ProductProcess";
import AboutSEOContent from "@/components/about/AboutSEOContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Digiwave Technologies | Digital Transformation & AI Solutions Company",
    description: "Digiwave Technologies is a leading digital transformation company specializing in AI solutions, web development, mobile app development, cloud services, and custom software development. Partner with us to build scalable, future-ready digital products.",
    keywords: "digital transformation company, AI solutions, machine learning services, web development company, mobile app development, cloud services, DevOps, custom software development, technology partner, digital innovation, IT services, enterprise software, startup technology solutions",
    openGraph: {
        title: "About Digiwave Technologies | Digital Transformation & AI Solutions",
        description: "Empowering businesses with AI-driven solutions, web and mobile applications, and digital transformation services. Build scalable, secure, and future-ready products with Digiwave Technologies.",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main>
                <AboutHero />
                <WhoWeAre />
                <HistoryVision />
                <ProudWork />
                <StatisticsSection />
                <FounderQuote />
                <BetterTogether />
                <TeamCollage />
                <WhyUsBetter />
                <CoreValues />
                <ProductProcess />
                <FAQ />
                <Contact />
                <AboutSEOContent />
            </main>
            <Footer />
        </div>
    );
}
