import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact US | Custom Web & Mobile App Development",
  description: "Contact Digiwave Technologies to discuss your business requirements. We deliver scalable software, automation, and digital solutions that drive growth.",
  keywords: "Contact Digiwave Technologies, software development company contact, custom software development inquiry, web and mobile app development contact, AI ML services contact, data intelligence automation services contact, cloud devops consulting contact",
  openGraph: {
    title: "Contact US | Custom Web & Mobile App Development",
    description: "Contact Digiwave Technologies to discuss your business requirements. We deliver scalable software, automation, and digital solutions that drive growth.",
    type: "website",
    url: "https://digiwavetechnologies.in/contact-us",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#022030] h-[322px] overflow-hidden">
        {/* Decorative blur effects */}
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[223px] -top-14 opacity-100"></div>
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[648px] top-28 opacity-100"></div>
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] -left-[426px] -top-[151px] opacity-100"></div>

        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] relative z-10 flex flex-col items-center justify-center h-full">
          <h3 className="text-[#62F4F3] font-poppins font-medium text-xl mb-4 text-center">Get in Touch</h3>
          <h1 className="text-white font-poppins font-bold text-[40px] leading-tight text-center max-w-[727px]">
            Contact Us
          </h1>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
