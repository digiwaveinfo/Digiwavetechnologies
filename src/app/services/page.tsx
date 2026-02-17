import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import ServiceCards from '@/components/ServiceCards';
import WhyChooseUs from '@/components/WhyChooseUs';
import Industries from '@/components/Industries';
import ThirdPartyIntegrations from '@/components/services/ThirdPartyIntegrations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Top IT Company in India | Digiwave Technologies",
  description: "Digiwave Technologies is a Top IT Company in India offering expert AI/ML, Web & Mobile App development, and Cloud solutions to help your business grow globally.",
  keywords: "Top IT Company in India, Best IT services India, Digiwave Technologies, Web development company India, Mobile app development India, AI and ML solutions India, Cloud consulting services, Digital transformation agency, Custom software development, UI/UX design services, Professional digital marketing, Enterprise IT solutions, AI-driven software development, Scalable cloud systems, IT outsourcing India",
  openGraph: {
    title: "Top IT Company in India | Digiwave Technologies",
    description: "Digiwave Technologies is a Top IT Company in India offering expert AI/ML, Web & Mobile App development, and Cloud solutions to help your business grow globally.",
    type: "website",
    url: "https://digiwavetechnologies.in/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhoWeAre />
      <ServiceCards />
      <ThirdPartyIntegrations />
      <WhyChooseUs />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}