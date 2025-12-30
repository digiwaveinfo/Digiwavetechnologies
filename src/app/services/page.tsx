"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import ServiceCards from '@/components/ServiceCards';
import WhyChooseUs from '@/components/WhyChooseUs';
import Industries from '@/components/Industries';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhoWeAre />
      <ServiceCards />
      <WhyChooseUs />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}