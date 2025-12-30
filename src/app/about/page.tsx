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
            </main>
            <Footer />
        </div>
    );
}
