import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import SupportBanner from "@/components/SupportBanner";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomeHero />
        <Services />
        <About />
        <Portfolio />
        <SupportBanner />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
