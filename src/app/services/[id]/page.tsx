import Link from "next/link";
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
    heroImage: "/Home-technologies/Ai-Ml.webp",
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
    heroImage: "/Home-technologies/webdevelopment.webp",
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
    heroImage: "/Home-technologies/App-development.webp",
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
    heroImage: "/Home-technologies/cloud.webp",
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
    heroImage: "/Home-technologies/data-inteligence.webp",
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
  },
  "iot-solutions": {
    title: "IoT Solutions",
    description: "Connected device ecosystems enabling smart monitoring, control, and data collection.",
    fullDescription: "Build connected ecosystems with our comprehensive IoT solutions. We design and develop smart device networks that enable real-time monitoring, automated control, and intelligent data collection for industrial and consumer applications.",
    heroImage: "/Home-technologies/Iot.webp",
    features: [
      "Smart Device Integration",
      "Real-time Monitoring Systems",
      "Industrial IoT (IIoT) Solutions",
      "Sensor Networks & Data Collection",
      "Edge Computing Implementation",
      "IoT Security & Management"
    ],
    benefits: [
      "Real-time visibility into operations",
      "Predictive maintenance capabilities",
      "Reduced operational costs",
      "Enhanced automation",
      "Data-driven optimization"
    ],
    technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "Azure IoT Hub", "MQTT", "LoRaWAN"],
    stats: [
      { number: "50%", label: "Cost Reduction" },
      { number: "Real-time", label: "Monitoring" },
      { number: "99%", label: "Device Uptime" }
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
        <section className="py-20 w-full bg-white">
          <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
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
      <section className="relative bg-[#022030] min-h-[600px] sm:min-h-[700px] h-auto overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 -left-52 -top-36 animate-pulse" />
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[436px] -top-14 animate-pulse delay-1000" />
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[861px] top-28 animate-pulse delay-2000" />

        <div className="relative z-10 w-full py-28 lg:py-32">
          <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
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

              <Link href="/book-demo" className="inline-block bg-[#00BFD2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00BFD2]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK DEMO
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="w-full h-[250px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-fill"
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
      <section className="py-16 sm:py-20 w-full bg-white">
        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
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
      <section className="py-16 sm:py-20 w-full bg-gray-50">
        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
          <div className="text-center mb-12">
            <h2 className="text-sky-950 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => {
              // Multicolored gradients and unique icons for each feature card
              const iconConfigs = [
                {
                  gradient: 'from-[#FF6B6B] to-[#FFE66D]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                },
                {
                  gradient: 'from-[#4ECDC4] to-[#44A08D]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                },
                {
                  gradient: 'from-[#667eea] to-[#764ba2]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                },
                {
                  gradient: 'from-[#f093fb] to-[#f5576c]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                },
                {
                  gradient: 'from-[#4facfe] to-[#00f2fe]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                },
                {
                  gradient: 'from-[#43e97b] to-[#38f9d7]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                },
              ];
              const config = iconConfigs[index % iconConfigs.length];

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${config.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {config.icon}
                    </div>
                    <div>
                      <h3 className="text-[#022030] font-bold text-lg mb-2">{feature}</h3>
                      <p className="text-gray-600 text-sm">Advanced implementation with modern best practices</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section with Modern Cards */}
      <section className="py-16 sm:py-20 w-full bg-white">
        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
          <div className="text-center mb-12">
            <h2 className="text-sky-950 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight mb-4">
              Why Choose Our Solution
            </h2>
            <p className="text-gray-600 text-lg">Measurable benefits that drive your business forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => {
              // Multicolored gradients and unique icons for each benefit
              const iconConfigs = [
                {
                  gradient: 'from-[#FF6B6B] to-[#FFE66D]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                },
                {
                  gradient: 'from-[#667eea] to-[#764ba2]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                },
                {
                  gradient: 'from-[#4ECDC4] to-[#44A08D]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  gradient: 'from-[#f093fb] to-[#f5576c]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  gradient: 'from-[#4facfe] to-[#00f2fe]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                },
              ];
              const config = iconConfigs[index % iconConfigs.length];

              return (
                <div
                  key={index}
                  className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${config.gradient} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {config.icon}
                  </div>
                  <div>
                    <h3 className="text-[#022030] font-bold text-lg mb-2">{benefit}</h3>
                    <p className="text-gray-600">Proven results that make a real difference to your business operations</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern CTA Section - Same style as Hero */}
      <section className="relative bg-[#022030] py-20 w-full overflow-hidden">
        {/* Animated Background Elements - Same as Hero */}
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 -left-52 -top-36 animate-pulse" />
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[436px] -top-14 animate-pulse delay-1000" />
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 right-0 top-28 animate-pulse delay-2000" />

        <div className="relative z-10 mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] text-center">
          <h2 className="text-white text-4xl sm:text-5xl font-bold font-['Inter'] leading-tight mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} can revolutionize your operations and accelerate your growth journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/book-demo" className="bg-white text-[#022030] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              BOOK DEMO
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#022030] transition-all duration-300 hover:scale-105">
              VIEW PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}