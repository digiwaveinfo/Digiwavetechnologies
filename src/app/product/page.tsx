import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import ProductHero from "@/components/product/ProductHero";
import ProductWhoWeAre from "@/components/product/ProductWhoWeAre";
import ProductWhatWeOffer from "@/components/product/ProductWhatWeOffer";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductTechnologies from "@/components/product/ProductTechnologies";
import ProductProcess from "@/components/product/ProductProcess";
import ProductClientLogos from "@/components/product/ProductClientLogos";

export default function ProductPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <ProductHero />
      <ProductWhoWeAre />
      <ProductWhatWeOffer />
      <ProductFeatures />
      <ProductTechnologies />
      <ProductProcess />
      <ProductClientLogos />
      <Contact />
      <Footer />
    </div>
  );
}