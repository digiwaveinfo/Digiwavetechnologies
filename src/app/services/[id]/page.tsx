import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

// Service data - in a real app this would come from a database or API
const serviceData: Record<string, { 
  title: string; 
  description: string; 
  fullDescription: string; 
  features: string[]; 
  benefits: string[];
  heroImage: string;
  technologies: string[];
  stats: { number: string; label: string }[];
}> = {
  "ai-machine-learning": {
    title: "AI & Machine Learning Solutions",
    description: "Intelligent systems that automate, analyze, and optimize business processes.",
    fullDescription: "Transform your business with cutting-edge AI and Machine Learning solutions. Our expert team develops intelligent systems that can automate complex processes, analyze vast amounts of data, and provide actionable insights to drive your business forward.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/7309ec19426c194dd2e948fe4906e3ab122a4585?width=970",
    features: [
      "Predictive Analytics & Forecasting",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Automated Decision Making Systems",
      "Machine Learning Model Development",
      "AI-Powered Chatbots & Virtual Assistants"
    ],
    benefits: [
      "Increased operational efficiency by 40%",
      "Data-driven decision making",
      "Automated routine tasks",
      "Enhanced customer experience",
      "Competitive advantage through innovation"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "OpenAI", "Hugging Face"],
    stats: [
      { number: "40%", label: "Efficiency Increase" },
      { number: "24/7", label: "Automated Operations" },
      { number: "99.9%", label: "Accuracy Rate" }
    ]
  },
  "web-application-development": {
    title: "Web Application Development",
    description: "Custom high-performance web solutions tailored for scale and performance.",
    fullDescription: "Build powerful, scalable web applications that drive your business growth. Our development team creates custom web solutions using modern frameworks and technologies, ensuring optimal performance, security, and user experience.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/3f5c6b3d663ecc01e18ae177e232243b61d97576?width=806",
    features: [
      "Custom Web Application Development",
      "Responsive & Mobile-First Design",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development & Integration"
    ],
    benefits: [
      "Scalable and maintainable code",
      "Enhanced user experience",
      "Cross-platform compatibility",
      "SEO-optimized solutions",
      "Fast loading and performance"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    stats: [
      { number: "3x", label: "Faster Loading" },
      { number: "100%", label: "Mobile Responsive" },
      { number: "99%", label: "Uptime Guarantee" }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Android, iOS, and cross-platform apps built for engagement and user experience.",
    fullDescription: "Create engaging mobile experiences that connect with your users. Our mobile development team specializes in building native and cross-platform applications that deliver exceptional performance and user experience.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/917d50598d6a8f171dd1a7d201159fde9ed14c99?width=970",
    features: [
      "Native iOS & Android Development",
      "Cross-Platform Solutions (React Native, Flutter)",
      "UI/UX Design & Prototyping",
      "App Store Optimization",
      "Push Notifications & Analytics",
      "Offline Functionality & Sync"
    ],
    benefits: [
      "Reach wider audience across platforms",
      "Enhanced user engagement",
      "Seamless performance",
      "Regular updates and maintenance",
      "App store compliance"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"],
    stats: [
      { number: "5M+", label: "App Downloads" },
      { number: "4.8★", label: "Average Rating" },
      { number: "50%", label: "User Retention" }
    ]
  },
  "cloud-devops-services": {
    title: "Cloud & DevOps Services",
    description: "Scalable cloud infrastructure and automated deployment solutions.",
    fullDescription: "Accelerate your development and deployment processes with our comprehensive Cloud & DevOps services. We help organizations migrate to the cloud, implement CI/CD pipelines, and establish robust infrastructure that scales with your business needs.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/3f5c6b3d663ecc01e18ae177e232243b61d97576?width=806",
    features: [
      "Cloud Migration & Architecture",
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code (IaC)",
      "Container Orchestration (Docker, Kubernetes)",
      "Monitoring & Logging Solutions",
      "Security & Compliance Management"
    ],
    benefits: [
      "Reduced deployment time by 80%",
      "Improved system reliability",
      "Cost-effective scaling",
      "Enhanced security posture",
      "Faster time to market"
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    stats: [
      { number: "80%", label: "Faster Deployment" },
      { number: "99.99%", label: "System Uptime" },
      { number: "60%", label: "Cost Reduction" }
    ]
  },
  "automation-data-intelligence": {
    title: "Automation & Data Intelligence",
    description: "Smart automation and data-driven insights for business optimization.",
    fullDescription: "Unlock the power of your data and automate your business processes with our comprehensive automation and data intelligence solutions. We help organizations streamline operations, gain valuable insights from their data, and make informed decisions.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/7309ec19426c194dd2e948fe4906e3ab122a4585?width=970",
    features: [
      "Business Process Automation",
      "Data Analytics & Visualization",
      "Robotic Process Automation (RPA)",
      "ETL & Data Pipeline Development",
      "Business Intelligence Dashboards",
      "Workflow Optimization"
    ],
    benefits: [
      "Reduced manual effort by 70%",
      "Improved data accuracy",
      "Real-time insights",
      "Cost savings through automation",
      "Better decision making"
    ],
    technologies: ["Power BI", "Tableau", "Apache Spark", "Airflow", "UiPath", "Snowflake"],
    stats: [
      { number: "70%", label: "Manual Work Reduced" },
      { number: "10x", label: "Faster Processing" },
      { number: "95%", label: "Data Accuracy" }
    ]
  }
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const service = serviceData[id];
  
  // If service not found, show default content
  if (!service) {
    return (
      <div className="min-h-screen w-full">
        <Header />
        <section className="py-20 px-5 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-[#022030] mb-4">Service Not Found</h1>
            <p className="text-gray-600">The requested service could not be found.</p>
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen w-full">
      <Header />
      
      {/* Modern Hero Section with Background Effects */}
      <section className="relative bg-[#022030] h-[600px] sm:h-[700px] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 -left-52 -top-36 animate-pulse" />
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[436px] -top-14 animate-pulse delay-1000" />
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[861px] top-28 animate-pulse delay-2000" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-[#00BFD2]/20 rounded-full border border-[#00BFD2]/30">
                  <span className="text-[#62F4F3] text-sm font-medium">Premium Service</span>
                </div>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight">
                  {service.title}
                </h1>
                <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {service.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-[#62F4F3] text-2xl sm:text-3xl font-bold">{stat.number}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button className="bg-[#00BFD2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00BFD2]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK DEMO
              </button>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={service.heroImage} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#62F4F3]/20 rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#00BFD2]/20 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 px-5 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sky-950 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 text-lg">Cutting-edge tools and frameworks for optimal results</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-[#00BFD2]/20 hover:border-[#00BFD2]/40 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <span className="text-[#022030] font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-16 sm:py-20 px-5 sm:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sky-950 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions tailored to your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BFD2] to-[#62F4F3] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-[#022030] font-bold text-lg mb-2">{feature}</h3>
                    <p className="text-gray-600 text-sm">Advanced implementation with modern best practices</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Modern Cards */}
      <section className="py-16 sm:py-20 px-5 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sky-950 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight mb-4">
              Why Choose Our Solution
            </h2>
            <p className="text-gray-600 text-lg">Measurable benefits that drive your business forward</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00BFD2] to-[#62F4F3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#022030] font-bold text-lg mb-2">{benefit}</h3>
                  <p className="text-gray-600">Proven results that make a real difference to your business operations</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative py-20 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-[#022030] via-[#034175] to-[#00BFD2] overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/5 rounded-full -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/5 rounded-full -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <h2 className="text-white text-4xl sm:text-5xl font-bold font-['Inter'] leading-tight mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} can revolutionize your operations and accelerate your growth journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-[#022030] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              BOOK DEMO
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#022030] transition-all duration-300 hover:scale-105">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
}