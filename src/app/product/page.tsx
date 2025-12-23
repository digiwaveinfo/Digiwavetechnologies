import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import HeroSection from "@/components/HeroSection";
import TechBadge from "@/components/TechBadge";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";

const TECHNOLOGIES = [
  { name: "PHP", color: "#8F9ED1" },
  { name: "JavaScript", color: "#FFC107" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Swift", color: "#FF5722" },
  { name: "Typescript", color: "#0078CF" },
  { name: "Python", color: "#FFD43B" },
  { name: "G318", color: "#050C12" },
  { name: "Java", color: "#DB380E" },
  { name: "Ruby", color: "#9B0A0E" },
  { name: "C++", color: "#00599C" },
  { name: "React Js", color: "#00D8FF" },
  { name: "Laravel", color: "#FF2D20" }
];

const CLIENT_LOGOS = [
  "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=426",
  "https://api.builder.io/api/v1/image/assets/TEMP/8f1f434e05f9848e760116cfec522940267931df?width=404",
  "https://api.builder.io/api/v1/image/assets/TEMP/cd75b54496eaad840fb0738209a24be55029eddd?width=426",
  "https://api.builder.io/api/v1/image/assets/TEMP/751de64d246aef9c464eb2d8a33a78f1540d0772?width=430",
  "https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=422"
];

export default function ProductPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        label="Product"
        title="Website Development"
        backgroundImage="/service-hero-background.png"
        height="medium"
      />

      {/* Who We Are Section */}
      <Section spacing="large">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#00114C] leading-tight mb-4">
              Who We Are Who We Are Who We Are
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-brand-black leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies. Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri
            </p>
          </div>
        </div>
      </Section>

      {/* What We Offer Section */}
      <Section spacing="large">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-11">
          <div className="w-full lg:w-[693px] h-96 relative rounded-3xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b136b83f82601fc5126fbdf7556921a346fcf0cf?width=1760"
              alt="Modern skyscraper architecture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-[542px] flex flex-col gap-7">
            <div className="w-full lg:w-[533px] flex flex-col gap-2.5">
              <div className="flex flex-col gap-3.5">
                <div className="text-[#00BFD2] text-xl font-medium font-['Inter']">
                  About service
                </div>
                <div className="text-[#00114C] text-4xl font-bold font-['Inter']">
                  What We Offer
                </div>
              </div>
              <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6 mb-4">
                Our web application development service focuses on building robust, responsive, and scalable applications using modern frameworks and industry best practices. Whether you need a SaaS platform, enterprise system, or custom business tool, we deliver solutions that grow with your business.
              </div>
              <div className="text-stone-950 text-base font-normal font-['Inter'] leading-6">
                Our web application development service focuses on building robust, responsive, and scalable applications using modern frameworks and industry best practices. Whether you need a SaaS platform, enterprise system, or custom business tool, we deliver solutions that grow with your business.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Features Section */}
      <Section bgColor="gray" spacing="large">
        <div className="w-[1280px] mx-auto flex flex-col items-center gap-7">
          <div className="w-[727px] flex flex-col items-center gap-2.5">
            <div className="text-[#00BFD2] text-xl font-medium font-['Inter'] text-center">
              Features
            </div>
            <div className="text-[#00114C] text-4xl font-bold font-['Inter'] text-center">
              Key Features & Capabilities
            </div>
          </div>
          <div className="w-full flex justify-start items-start gap-5 flex-wrap">
            <div className="w-[603px] h-24 relative bg-white rounded-2xl border border-black/20 overflow-hidden">
              <div className="w-[470px] h-9 left-[30px] top-[31px] absolute text-stone-950 text-2xl font-medium font-['Inter'] leading-9">
                Custom Web Application Development
              </div>
            </div>
            <div className="w-[603px] h-24 relative bg-white rounded-2xl border border-black/20 overflow-hidden">
              <div className="w-[470px] h-9 left-[30px] top-[31px] absolute text-stone-950 text-2xl font-medium font-['Inter'] leading-9">
                Responsive & Mobile-Friendly Design
              </div>
            </div>
            <div className="w-[603px] h-24 relative bg-white rounded-2xl border border-black/20 overflow-hidden">
              <div className="w-[470px] h-9 left-[30px] top-[31px] absolute text-stone-950 text-2xl font-medium font-['Inter'] leading-9">
                Secure Backend & API Development
              </div>
            </div>
            <div className="w-[603px] h-24 relative bg-white rounded-2xl border border-black/20 overflow-hidden">
              <div className="w-[470px] h-9 left-[30px] top-[31px] absolute text-stone-950 text-2xl font-medium font-['Inter'] leading-9">
                Third-Party Integrations
              </div>
            </div>
            <div className="w-[603px] h-24 relative bg-white rounded-2xl border border-black/20 overflow-hidden">
              <div className="w-[470px] h-9 left-[30px] top-[31px] absolute text-stone-950 text-2xl font-medium font-['Inter'] leading-9">
                Scalable Architecture
              </div>
            </div>
            <div className="w-[603px] h-24 relative bg-white rounded-2xl border border-black/20 overflow-hidden">
              <div className="w-[470px] h-9 left-[30px] top-[31px] absolute text-stone-950 text-2xl font-medium font-['Inter'] leading-9">
                Performance Optimization
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technologies Section */}
      <Section spacing="large">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Technologies we used"
            title="Built Using Future-Ready Technologies"
            centered
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TECHNOLOGIES.map((tech, index) => (
              <TechBadge key={index} name={tech.name} color={tech.color} />
            ))}
          </div>
        </div>
      </Section>

      {/* Our Process Section */}
      <Section spacing="large" className="relative overflow-hidden">
        <div className="w-[1280px] h-[1232px] mx-auto relative">
          {/* Decorative curve */}
          <div className="absolute left-[314.45px] top-[169.13px]">
            <svg width="738" height="958" viewBox="0 0 738 958" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M74.5133 119.867C74.5133 119.867 647.395 -125.518 693.013 87.3668C744.013 325.366 -104.614 289.932 20.0133 493.867C144.64 697.802 537.985 274.139 632.013 493.867C727.013 715.866 -138.987 668.866 20.0133 895.367C157.409 1091.09 737.513 758.366 737.513 758.366" stroke="#84CDCC" strokeDasharray="12 12"/>
            </svg>
          </div>
          
          {/* Header and Content */}
          <div className="w-[1280px] absolute left-0 top-0 flex flex-col items-center gap-7">
            <div className="w-[727px] flex flex-col items-center gap-2.5">
              <div className="text-[#00BFD2] text-xl font-medium font-['Inter'] text-center">
                How does it works
              </div>
              <div className="text-[#00114C] text-4xl font-bold font-['Inter'] text-center">
                Our Process
              </div>
            </div>
            
            {/* Process Cards Grid */}
            <div className="w-full flex justify-start items-start gap-8 flex-wrap">
              {/* Card 1 */}
              <div className="w-[624px] h-80 relative bg-gray-300/10 rounded-3xl shadow-[1px_0px_5.300000190734863px_1px_rgba(64,64,64,0.27)] border border-gray-300/20 overflow-hidden hover:bg-cyan-400/5 hover:shadow-[1px_0px_5.300000190734863px_1px_rgba(0,242,217,0.06)] hover:border-2 hover:border-cyan-500 transition-all duration-300">
                <div className="left-[22px] top-[-1px] absolute text-gray-300/20 text-9xl font-extrabold font-['Inter'] hover:text-teal-200/20 transition-colors duration-300">1</div>
                <div className="w-[532px] h-20 left-[46px] top-[95px] absolute bg-white rounded-xl shadow-[0px_4px_2.799999952316284px_0px_rgba(0,191,210,0.12)] overflow-hidden">
                  <div className="w-[507px] h-9 left-[25px] top-[26px] absolute text-stone-950 text-2xl font-semibold font-['Inter'] leading-9">
                    Requirement Analysis
                  </div>
                </div>
                <div className="w-[532px] h-28 left-[46px] top-[202px] absolute text-stone-950 text-xl font-normal font-['Inter'] leading-8">
                  We begin by deeply understanding your business objectives, target audience, and technical requirements. This phase helps us align the solution with your long-term vision and avoid costly rework later.
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-[624px] h-80 relative bg-gray-300/10 rounded-3xl shadow-[1px_0px_5.300000190734863px_1px_rgba(64,64,64,0.27)] border border-gray-300/20 overflow-hidden hover:bg-cyan-400/5 hover:shadow-[1px_0px_5.300000190734863px_1px_rgba(0,242,217,0.06)] hover:border-2 hover:border-cyan-500 transition-all duration-300">
                <div className="left-[22px] top-[-1px] absolute text-gray-300/20 text-9xl font-extrabold font-['Inter'] hover:text-teal-200/20 transition-colors duration-300">2</div>
                <div className="w-[532px] h-20 left-[46px] top-[95px] absolute bg-white rounded-xl shadow-[0px_4px_2.799999952316284px_0px_rgba(0,191,210,0.12)] overflow-hidden">
                  <div className="w-[507px] h-9 left-[25px] top-[26px] absolute text-stone-950 text-2xl font-semibold font-['Inter'] leading-9">
                    UI/UX Design
                  </div>
                </div>
                <div className="w-[532px] h-28 left-[46px] top-[202px] absolute text-stone-950 text-xl font-normal font-['Inter'] leading-8">
                  Our design team focuses on creating intuitive, visually engaging, and user-centered interfaces. Every screen is crafted to ensure ease of use and seamless navigation.
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-[624px] h-80 relative bg-gray-300/10 rounded-3xl shadow-[1px_0px_5.300000190734863px_1px_rgba(64,64,64,0.27)] border border-gray-300/20 overflow-hidden hover:bg-cyan-400/5 hover:shadow-[1px_0px_5.300000190734863px_1px_rgba(0,242,217,0.06)] hover:border-2 hover:border-cyan-500 transition-all duration-300">
                <div className="left-[22px] top-[-1px] absolute text-gray-300/20 text-9xl font-extrabold font-['Inter'] hover:text-teal-200/20 transition-colors duration-300">3</div>
                <div className="w-[532px] h-20 left-[46px] top-[95px] absolute bg-white rounded-xl shadow-[0px_4px_2.799999952316284px_0px_rgba(0,191,210,0.12)] overflow-hidden">
                  <div className="w-[507px] h-9 left-[25px] top-[26px] absolute text-stone-950 text-2xl font-semibold font-['Inter'] leading-9">
                    Building Scalable & Secure Solutions
                  </div>
                </div>
                <div className="w-[532px] h-28 left-[46px] top-[202px] absolute text-stone-950 text-xl font-normal font-['Inter'] leading-8">
                  Using modern frameworks and clean coding practices, we transform designs into functional, high-performance applications.
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-[624px] h-80 relative bg-gray-300/10 rounded-3xl shadow-[1px_0px_5.300000190734863px_1px_rgba(64,64,64,0.27)] border border-gray-300/20 overflow-hidden hover:bg-cyan-400/5 hover:shadow-[1px_0px_5.300000190734863px_1px_rgba(0,242,217,0.06)] hover:border-2 hover:border-cyan-500 transition-all duration-300">
                <div className="left-[22px] top-[-1px] absolute text-gray-300/20 text-9xl font-extrabold font-['Inter'] hover:text-teal-200/20 transition-colors duration-300">4</div>
                <div className="w-[532px] h-20 left-[46px] top-[95px] absolute bg-white rounded-xl shadow-[0px_4px_2.799999952316284px_0px_rgba(0,191,210,0.12)] overflow-hidden">
                  <div className="w-[507px] h-9 left-[25px] top-[26px] absolute text-stone-950 text-2xl font-semibold font-['Inter'] leading-9">
                    Testing & Quality Assurance
                  </div>
                </div>
                <div className="w-[532px] h-28 left-[46px] top-[202px] absolute text-stone-950 text-xl font-normal font-['Inter'] leading-8">
                  We rigorously test the application to identify bugs, improve performance, and ensure a seamless user experience across devices.
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-[624px] h-80 relative bg-gray-300/10 rounded-3xl shadow-[1px_0px_5.300000190734863px_1px_rgba(64,64,64,0.27)] border border-gray-300/20 overflow-hidden hover:bg-cyan-400/5 hover:shadow-[1px_0px_5.300000190734863px_1px_rgba(0,242,217,0.06)] hover:border-2 hover:border-cyan-500 transition-all duration-300">
                <div className="left-[22px] top-[-1px] absolute text-gray-300/20 text-9xl font-extrabold font-['Inter'] hover:text-teal-200/20 transition-colors duration-300">5</div>
                <div className="w-[532px] h-20 left-[46px] top-[95px] absolute bg-white rounded-xl shadow-[0px_4px_2.799999952316284px_0px_rgba(0,191,210,0.12)] overflow-hidden">
                  <div className="w-[507px] h-9 left-[25px] top-[26px] absolute text-stone-950 text-2xl font-semibold font-['Inter'] leading-9">
                    Launching with Confidence
                  </div>
                </div>
                <div className="w-[532px] h-28 left-[46px] top-[202px] absolute text-stone-950 text-xl font-normal font-['Inter'] leading-8">
                  Once the application passes all quality checks, we ensure a smooth and secure deployment with minimal downtime.
                </div>
              </div>

              {/* Card 6 */}
              <div className="w-[624px] h-80 relative bg-gray-300/10 rounded-3xl shadow-[1px_0px_5.300000190734863px_1px_rgba(64,64,64,0.27)] border border-gray-300/20 overflow-hidden hover:bg-cyan-400/5 hover:shadow-[1px_0px_5.300000190734863px_1px_rgba(0,242,217,0.06)] hover:border-2 hover:border-cyan-500 transition-all duration-300">
                <div className="left-[22px] top-[-1px] absolute text-gray-300/20 text-9xl font-extrabold font-['Inter'] hover:text-teal-200/20 transition-colors duration-300">6</div>
                <div className="w-[532px] h-20 left-[46px] top-[95px] absolute bg-white rounded-xl shadow-[0px_4px_2.799999952316284px_0px_rgba(0,191,210,0.12)] overflow-hidden">
                  <div className="w-[507px] h-9 left-[25px] top-[26px] absolute text-stone-950 text-2xl font-semibold font-['Inter'] leading-9">
                    Continuous Improvement & Growth
                  </div>
                </div>
                <div className="w-[532px] h-28 left-[46px] top-[202px] absolute text-stone-950 text-xl font-normal font-['Inter'] leading-8">
                  Our relationship doesn't end at launch. We provide ongoing support to keep your product secure, updated, and competitive.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Client Logos Section */}
      <section className="px-5 md:px-20 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            {CLIENT_LOGOS.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </div>
  );
}