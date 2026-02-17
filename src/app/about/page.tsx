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
    title: "Best Software Development Company in India",
    description: "Digiwave Technologies is the best software development company in India delivering AI solutions, web and mobile app development, cloud services, and solutions.",
    keywords: "Digital Transformation Company, Ai Solutions, Machine Learning Services, Web Development Company, Mobile App Development, Cloud Services, Devops, Custom Software Development, Technology Partner, Digital Innovation, It Services, Enterprise Software, Startup Technology Solutions, Ai Development Company in India, Website Development Company in India, Web Development Services India, Mobile App Development Company in India, App Development Company in India, Iot Solution Providers",
    openGraph: {
        title: "Best Software Development Company in India",
        description: "Digiwave Technologies is the best software development company in India delivering AI solutions, web and mobile app development, cloud services, and solutions.",
        type: "website",
        url: "/aboutus",
    },
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main>
                <AboutHero />
                <WhoWeAre image="/about/about-hero.png" />
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
