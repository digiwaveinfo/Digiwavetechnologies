import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Container from "@/components/Container";

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

// Service data - in a real app this would come from a database or API
const serviceData: Record<string, {
  title: string;
  description: string;
  fullDescription: string;
  features: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  heroImage: string;
  technologies: string[];
  stats: { number: string; label: string }[];
  ctaTitle: string;
  ctaDescription: string;
  whyChooseSlogan: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
    url: string;
  };
}> = {
  "ai-machine-learning": {
    title: "Al & Machine Learning Solutions Provider",
    description: "Intelligent systems that automate, analyze, and optimize business processes.",
    fullDescription: "Transform your business with a leading AI Development Company With advanced AI and machine learning solutions. Our expert team develops intelligent, scalable systems that automate complex processes, analyze large volumes of data, and generate actionable insights to drive your business forward.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/7309ec19426c194dd2e948fe4906e3ab122a4585?width=970",
    features: [
      { title: "Predictive Analytics & Forecasting", description: "Identify trends and make data-driven decisions" },
      { title: "Natural Language Processing (NLP)", description: "Enable systems to understand human language" },
      { title: "Computer Vision & Image Recognition", description: "Meaningful insights from images and visual data" },
      { title: "Automated Decision-Making Systems", description: "Streamline operations with intelligent, real-time automation" },
      { title: "Machine Learning Model Development", description: "Models designed for accuracy, performance, and scalability" },
      { title: "AI-Powered Chatbots & Virtual Assistants", description: "Support and personalized customer experiences" }
    ],
    benefits: [
      { title: "Experienced AI & ML Team", description: "Skilled experts delivering reliable, high-quality solutions" },
      { title: "Custom AI Solutions", description: "Tailored systems built for unique business needs" },
      { title: "End-to-End Development", description: "Complete support from planning to deployment" },
      { title: "Scalable Architecture", description: "Solutions designed to grow with your business" },
      { title: "Data Security & Compliance", description: "Strong protection for sensitive business data" },
      { title: "Ongoing Support & Optimization", description: "Continuous improvement after project deployment" }
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "OpenAI", "Hugging Face"],
    stats: [
      { number: "40%", label: "Efficiency Increase" },
      { number: "24/7", label: "Automated Operations" },
      { number: "99.9%", label: "Accuracy Rate" }
    ],
    ctaTitle: "Ready to Transform Your Business with AI?",
    ctaDescription: "Work with a trusted AI Development Company in India delivering smart and scalable AI and Machine Learning Solutions. As an expert AI Software Development Company, we build result-driven AI Solutions for Business that accelerate growth and innovation. Let's explore how our customized AI Solutions for Business can transform your ideas into powerful digital systems.",
    whyChooseSlogan: "AI Solutions Designed to Drive Business Growth",
    metadata: {
      title: "Best AI Development Company In India | Digiwave Technologies",
      description: "AI development company in India with industry experience, specializing in custom artificial intelligence solutions for startups, enterprises, and businesses.",
      keywords: "AI development company in india, artificial intelligence solutions, machine learning services, custom AI solutions, AI software development, enterprise AI services, AI ML development company",
      url: "https://digiwavetechnologies.in/services/ai-machine-learning"
    }
  },
  "web-application-development": {
    title: "Web Application Development",
    description: "Custom high-performance web solutions tailored for scale and performance.",
    fullDescription: "Build powerful, scalable web applications that drive your business growth. Our development team creates custom web solutions using modern frameworks and technologies, ensuring optimal performance, security, and user experience.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/3f5c6b3d663ecc01e18ae177e232243b61d97576?width=806",
    features: [
      { title: "Custom Web Application Development", description: "Tailored solutions built to your exact specifications" },
      { title: "Responsive & Mobile-First Design", description: "Seamless experience across all devices and screen sizes" },
      { title: "Progressive Web Apps (PWA)", description: "App-like experiences with offline capabilities" },
      { title: "E-commerce Solutions", description: "Secure, scalable online stores with payment integration" },
      { title: "Content Management Systems", description: "Easy-to-use platforms for managing your content" },
      { title: "API Development & Integration", description: "Connect and extend your web applications" }
    ],
    benefits: [
      { title: "Modern Tech Stack", description: "Built with latest frameworks and technologies" },
      { title: "Performance Optimized", description: "Lightning-fast loading and smooth user experience" },
      { title: "SEO & Accessibility", description: "Search engine friendly and accessible to all users" },
      { title: "Responsive Design", description: "Perfect experience on desktop, tablet, and mobile" },
      { title: "Secure & Reliable", description: "Industry-standard security practices and 99% uptime" },
      { title: "Maintenance & Updates", description: "Regular updates and technical support included" }
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    stats: [
      { number: "3x", label: "Faster Loading" },
      { number: "100%", label: "Mobile Responsive" },
      { number: "99%", label: "Uptime Guarantee" }
    ],
    ctaTitle: "Ready to Build Your Next Web Application?",
    ctaDescription: "Partner with a leading Web Application Development Company delivering high-performance, scalable web solutions. Our expert developers create custom web applications using modern technologies like React, Next.js, and Node.js. Let's discuss how our web development expertise can bring your vision to life and drive your business growth.",
    whyChooseSlogan: "Modern Web Solutions Built for Performance and Scale",
    metadata: {
      title: "Website Development Company in India | Digiwave Technologies",
      description: "Digiwave Technologies is a leading website development company in India delivering responsive, SEO-friendly, and scalable web solutions for businesses.",
      keywords: "Website Development Company in India, Web Application Development India, Custom Website Development Company, Web Development Services India, Professional Web Developers India, Business Website Development",
      url: "https://digiwavetechnologies.in/services/web-application-development"
    }
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Android, iOS, and cross-platform apps built for engagement and user experience.",
    fullDescription: "Create engaging mobile experiences that connect with your users. Our mobile development team specializes in building native and cross-platform applications that deliver exceptional performance and user experience.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/917d50598d6a8f171dd1a7d201159fde9ed14c99?width=970",
    features: [
      { title: "Native iOS & Android Development", description: "Platform-specific apps for optimal performance" },
      { title: "Cross-Platform Solutions", description: "Build once, deploy everywhere with React Native & Flutter" },
      { title: "UI/UX Design & Prototyping", description: "Beautiful, intuitive interfaces that users love" },
      { title: "App Store Optimization", description: "Maximize visibility and downloads on app stores" },
      { title: "Push Notifications & Analytics", description: "Engage users and track app performance" },
      { title: "Offline Functionality & Sync", description: "Work seamlessly even without internet connection" }
    ],
    benefits: [
      { title: "Native & Cross-Platform Expertise", description: "Build for iOS, Android, or both platforms efficiently" },
      { title: "User-Centric Design", description: "Intuitive interfaces that drive engagement and retention" },
      { title: "App Store Success", description: "Guidance through submission and optimization process" },
      { title: "Performance & Speed", description: "Smooth, responsive apps that users love" },
      { title: "Analytics & Insights", description: "Track user behavior and app performance metrics" },
      { title: "Post-Launch Support", description: "Updates, bug fixes, and feature enhancements" }
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"],
    stats: [
      { number: "5M+", label: "App Downloads" },
      { number: "4.8★", label: "Average Rating" },
      { number: "50%", label: "User Retention" }
    ],
    ctaTitle: "Ready to Launch Your Mobile App?",
    ctaDescription: "Work with a trusted Mobile App Development Company specializing in iOS, Android, and cross-platform solutions. Our experienced team builds engaging mobile applications using React Native, Flutter, and native technologies. Let's create a mobile experience that delights your users and drives business results.",
    whyChooseSlogan: "Mobile Apps That Users Love and Businesses Trust",
    metadata: {
      title: "Mobile App Development Company in India",
      description: "Leading mobile app development company in India delivering scalable Android and iOS apps tailored to business goals and user-centric experiences globally now.",
      keywords: "mobile app development company in india, top app development companies, mobile app developers, mobile application development, mobile app development companies, AI development company in india, artificial intelligence solutions, machine learning services, custom AI solutions, AI software development, enterprise AI services, AI ML development company",
      url: "https://digiwavetechnologies.in/services/mobile-app-development"
    }
  },
  "cloud-devops-services": {
    title: "Cloud & DevOps Consulting Services",
    description: "Scalable cloud infrastructure and automated deployment solutions.",
    fullDescription: "Accelerate your development and deployment processes with our comprehensive Cloud & DevOps services in India. We help organizations migrate to the cloud, implement CI/CD pipelines, and establish robust infrastructure that scales with your business needs.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/3f5c6b3d663ecc01e18ae177e232243b61d97576?width=806",
    features: [
      { title: "Cloud Migration & Architecture", description: "Secure cloud migration with minimal downtime and scalability" },
      { title: "CI/CD Pipeline Implementation", description: "Automated CI/CD pipelines for faster, reliable deployments" },
      { title: "Infrastructure as Code (IaC)", description: "Infrastructure automation using Terraform for consistent scaling" },
      { title: "Container Orchestration (Docker, Kubernetes)", description: "Scalable container solutions ensuring reliable application deployments" },
      { title: "Monitoring & Logging Solutions", description: "Proactive monitoring and logging ensuring high availability" },
      { title: "Security & Compliance Management", description: "Secure cloud infrastructure with access controls and compliance" }
    ],
    benefits: [
      { title: "Reduced Deployment Time by Up to 80%", description: "Streamlined CI/CD workflows for frequent and reliable releases" },
      { title: "Improved System Reliability", description: "High-availability cloud architectures with proactive monitoring" },
      { title: "Cost-Effective Infrastructure Scaling", description: "Scalable cloud environments balancing cost and performance" },
      { title: "Enhanced Security & Compliance", description: "Security-first DevOps ensuring compliance and data protection" },
      { title: "Faster Time to Market", description: "Automation-driven cloud operations for faster product launches" },
    ],
    technologies: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    stats: [
      { number: "80%", label: "Faster Deployment" },
      { number: "99.99%", label: "System Uptime" },
      { number: "60%", label: "Cost Reduction" }
    ],
    ctaTitle: "Ready to Transform Your Business with Best DevOps Consulting Services?",
    ctaDescription: "Partner with Digiwave Technologies, a trusted Cloud & DevOps services provider, delivering secure, scalable, and efficient cloud solutions. We focus on simplifying infrastructure, automating deployments, and improving system reliability to support long-term business growth. Let's discuss how our Cloud & DevOps services can help you build a stable, high-performing cloud environment with confidence.",
    whyChooseSlogan: "Cloud and DevOps solutions supporting long-term growth",
    metadata: {
      title: "Cloud & DevOps Consulting Services in India",
      description: "Digiwave Technologies provides Cloud DevOps consulting services India, helping businesses improve scalability, automation, security, and deployment efficiency.",
      keywords: "cloud devops consulting services in india, Devops Development Company in India, Devops Solution Providers in India",
      url: "https://digiwavetechnologies.in/services/cloud-devops-services"
    }
  },
  "automation-data-intelligence": {
    title: "Data Intelligence & Automation Services",
    description: "Unlock the power of your data and automate your business processes with our comprehensive automation and data intelligence solutions in India. We help organizations streamline operations, gain valuable insights from their data, and make informed decisions.",
    fullDescription: "Unlock the power of your data and automate your business processes with our comprehensive automation and data intelligence solutions. We help organizations streamline operations, gain valuable insights from their data, and make informed decisions.",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/7309ec19426c194dd2e948fe4906e3ab122a4585?width=970",
    features: [
      { title: "Business Process Automation", description: "Automating manual processes to improve efficiency and accuracy" },
      { title: "Data Analytics & Visualization", description: "Data insights delivered through analytics and dashboards" },
      { title: "Robotic Process Automation (RPA)", description: "RPA automation improving accuracy, speed, and consistency" },
      { title: "ETL & Data Pipeline Development", description: "Scalable ETL pipelines for secure, real-time data flow" },
      { title: "Business Intelligence Dashboards", description: "Custom BI dashboards delivering real-time business insights" },
      { title: "Workflow Optimization", description: "End-to-end workflow optimization for better efficiency" }
    ],
    benefits: [
      { title: "Reduced Manual Effort by 70%", description: "Automating workflows to improve speed, consistency, and productivity" },
      { title: "Improved Data Accuracy", description: "Error-free data through automated processing and validation" },
      { title: "Real-Time Insights", description: "Real-time analytics providing instant business visibility" },
      { title: "Cost Savings Through Automation", description: "Automation solutions lowering operational costs efficiently" },
      { title: "Better Decision Making", description: "Intelligent reporting for confident, data-backed decisions" }
    ],
    technologies: ["Power BI", "Tableau", "Apache Spark", "Apache Airflow", "UiPath", "Snowflake"],
    stats: [
      { number: "70%", label: "Manual Work Reduced" },
      { number: "10x", label: "Faster Processing" },
      { number: "95%", label: "Data Accuracy" }
    ],
    ctaTitle: "Ready to Transform Your Business with Data Intelligence & Automation Services?",
    ctaDescription: "Digiwave Technologies delivers advanced Data Intelligence & Automation Services that turn data into clarity and processes into performance. From workflow automation to actionable insights, we help businesses operate faster, smarter, and with greater confidence. Let's explore how data-driven automation can accelerate your growth and strengthen operational excellence.",
    whyChooseSlogan: "Scalable data intelligence and automation solutions",
    metadata: {
      title: "Data Intelligence & Automation Services in India",
      description: "Technologies offers Data Intelligence & Automation Services in India to streamline operations, reduce manual work, and enable smarter, data-driven business decisions.",
      keywords: "Data Intelligence & Automation Services, data intelligence services india, automation services india, data automation solutions, intelligent automation services, business automation services india",
      url: "https://digiwavetechnologies.in/services/automation-data-intelligence"
    }
  },
  "iot-solutions": {
    title: "IoT Solution Providers",
    description: "Connected device ecosystems enabling smart monitoring, control, and data collection.",
    fullDescription: "As a Trusted IoT Solution Company, Build connected ecosystems with our comprehensive IoT solutions. We design and develop smart device networks that enable real-time monitoring, automated control, and intelligent data collection for industrial and consumer applications. .",
    heroImage: "https://api.builder.io/api/v1/image/assets/TEMP/917d50598d6a8f171dd1a7d201159fde9ed14c99?width=970",
    features: [
      { title: "Smart Device Integration", description: "Connect and manage IoT devices seamlessly" },
      { title: "Real-time Monitoring Systems", description: "Track operations and metrics as they happen" },
      { title: "Industrial IoT (IIoT) Solutions", description: "Optimize manufacturing and industrial processes" },
      { title: "Sensor Networks & Data Collection", description: "Gather and analyze data from multiple sources" },
      { title: "Edge Computing Implementation", description: "Process data closer to the source for faster response" },
      { title: "IoT Security & Management", description: "Secure your connected devices and networks" }
    ],
    benefits: [
      { title: "IoT Architecture Experts", description: "End-to-end IoT solutions from sensors to cloud" },
      { title: "Real-Time Monitoring", description: "24/7 visibility into your connected devices" },
      { title: "Predictive Maintenance", description: "Reduce downtime with proactive monitoring" },
      { title: "Cost Reduction", description: "Save up to 50% on operational costs" },
      { title: "Secure & Reliable", description: "Enterprise-grade security for IoT networks" },
      { title: "Scalable Solutions", description: "Grow from hundreds to millions of devices" }
    ],
    technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "Azure IoT Hub", "MQTT", "LoRaWAN"],
    stats: [
      { number: "50%", label: "Cost Reduction" },
      { number: "Real-time", label: "Monitoring" },
      { number: "99%", label: "Device Uptime" }
    ],
    ctaTitle: "Ready to Connect Your Devices?",
    ctaDescription: "Build smart, connected ecosystems with a trusted IoT Solution Company. We design and develop Industrial IoT (IIoT) solutions, sensor networks, and real-time monitoring systems using AWS IoT, Azure IoT Hub, and edge computing. Let's discuss how our IoT expertise can reduce your operational costs by 50% and enable predictive maintenance.",
    whyChooseSlogan: "Connected IoT Solutions for Smart Operations",
    metadata: {
      title: "IoT Solution Providers | Custom IoT Services",
      description: "As leading IoT solution providers, Digiwave Technologies offers smart device ecosystems, industrial monitoring, and automated data collection for global growth.",
      keywords: "IoT Solution Company, IoT Solution Providers, Custom IoT Solutions, Custom IoT Development Services, Industrial IoT Solutions, Enterprise IoT Development, IoT Connectivity Services, IoT Smart Device Development, IoT Cloud Integration, IoT Data Analytics, IoT Security Solutions, IoT Platform Development, IIoT Solutions, Smart Monitoring Systems, IoT Software Development",
      url: "https://digiwavetechnologies.in/services/iot-solutions"
    }
  }
};

// Generate metadata for each service page
export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const service = serviceData[id];

  if (!service || !service.metadata) {
    return {
      title: "Service | Digiwave Technologies",
      description: "Explore our comprehensive technology services and solutions.",
    };
  }

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    keywords: service.metadata.keywords,
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      type: "website",
      url: service.metadata.url,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const service = serviceData[id];

  // If service not found, show default content
  if (!service) {
    return (
      <div className="min-h-screen w-full">
        <Header />
        <section className="py-20 w-full bg-white">
          <Container>
            <h1 className="text-4xl font-bold text-[#022030] mb-4">Service Not Found</h1>
            <p className="text-gray-600">The requested service could not be found.</p>
          </Container>
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
          <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          </Container>
        </div>
      </section >

      {/* Technologies Section */}
      < section className="py-16 sm:py-20 w-full bg-white" >
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-sky-950 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 text-lg">Crafting scalable AI solutions with advanced AI Technologies</p>
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
        </Container>
      </section >

      {/* Features Section with Cards */}
      < section className="py-16 sm:py-20 w-full bg-gray-50" >
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-sky-950 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 text-lg">AI Solutions Designed to Drive Business Growth</p>
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
                      <h3 className="text-[#022030] font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section >

      {/* Benefits Section with Modern Cards */}
      < section className="py-16 sm:py-20 w-full bg-white" >
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-sky-950 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight mb-4">
              Why Choose Our Solution
            </h2>
            <p className="text-gray-600 text-lg">{service.whyChooseSlogan}</p>
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
                {
                  gradient: 'from-[#43e97b] to-[#38f9d7]',
                  icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                },
              ];
              const config = iconConfigs[index % iconConfigs.length];

              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${config.gradient} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {config.icon}
                  </div>
                  <div>
                    <h3 className="text-[#022030] font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section >

      {/* Modern CTA Section - Same style as Hero */}
      < section className="relative bg-[#022030] py-20 w-full overflow-hidden" >
        {/* Animated Background Elements - Same as Hero */}
        < div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 -left-52 -top-36 animate-pulse" />
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[436px] -top-14 animate-pulse delay-1000" />
        <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 right-0 top-28 animate-pulse delay-2000" />

        <Container className="relative z-10 text-center">
          <h2 className="text-white text-4xl sm:text-5xl font-bold font-['Inter'] leading-tight mb-6">
            {service.ctaTitle}
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            {service.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/book-demo" className="bg-white text-[#022030] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              BOOK DEMO
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#022030] transition-all duration-300 hover:scale-105">
              VIEW PORTFOLIO
            </Link>
          </div>
        </Container>
      </section >

      <Contact />
      <Footer />
    </div >
  );
}