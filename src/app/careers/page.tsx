import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Link from "next/link";
import {
    Lightbulb,
    TrendingUp,
    Users,
    Rocket,
    MapPin,
    Briefcase,
    Clock,
    Send,
    ArrowRight,
    ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Careers | Digiwave Technologies",
    description:
        "Join Digiwave Technologies — explore exciting career opportunities in AI, web development, mobile apps, cloud, and more. Grow with us!",
    openGraph: {
        title: "Careers | Digiwave Technologies",
        description:
            "Join Digiwave Technologies — explore exciting career opportunities in AI, web development, mobile apps, cloud, and more.",
    },
};

const benefits = [
    {
        icon: <Lightbulb className="w-7 h-7" />,
        title: "Innovation First",
        description:
            "Work on cutting-edge projects with AI, cloud, and emerging tech that push boundaries.",
        color: "#FF6B6B",
        bg: "rgba(255, 107, 107, 0.1)",
    },
    {
        icon: <TrendingUp className="w-7 h-7" />,
        title: "Career Growth",
        description:
            "Clear growth paths, mentorship, and continuous learning opportunities to level up your skills.",
        color: "#4ECDC4",
        bg: "rgba(78, 205, 196, 0.1)",
    },
    {
        icon: <Users className="w-7 h-7" />,
        title: "Great Culture",
        description:
            "A collaborative and supportive environment where every voice matters and ideas thrive.",
        color: "#4A90D9",
        bg: "rgba(74, 144, 217, 0.1)",
    },
    {
        icon: <Rocket className="w-7 h-7" />,
        title: "Real Impact",
        description:
            "Build products used by real businesses — your work directly drives client success and growth.",
        color: "#FFD93D",
        bg: "rgba(255, 217, 61, 0.15)",
    },
];

const positions = [
    {
        title: "Full Stack Developer",
        type: "Full-time",
        location: "Ahmedabad, India",
        description:
            "Build and maintain scalable web applications using React, Next.js, Node.js, and cloud services. Work across the entire stack to deliver high-quality digital solutions.",
        tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
        title: "React Native Developer",
        type: "Full-time",
        location: "Ahmedabad, India",
        description:
            "Develop cross-platform mobile applications for Android and iOS using React Native. Ensure smooth performance, pixel-perfect UI, and seamless user experiences.",
        tags: ["React Native", "TypeScript", "iOS", "Android"],
    },
    {
        title: "AI/ML Engineer",
        type: "Full-time",
        location: "Ahmedabad, India",
        description:
            "Design and implement machine learning models, NLP pipelines, and intelligent automation solutions for diverse business applications.",
        tags: ["Python", "TensorFlow", "NLP", "Data Science"],
    },
    {
        title: "DevOps Engineer",
        type: "Full-time",
        location: "Ahmedabad, India",
        description:
            "Manage cloud infrastructure, CI/CD pipelines, and deployment automation. Ensure system reliability, security, and scalability across AWS/Azure.",
        tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
        title: "UI/UX Designer",
        type: "Full-time",
        location: "Ahmedabad, India",
        description:
            "Create intuitive, visually stunning user interfaces and experiences. Conduct user research, wireframing, prototyping, and collaborate with developers.",
        tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    },
    {
        title: "Business Development Executive",
        type: "Full-time",
        location: "Ahmedabad, India",
        description:
            "Drive new business opportunities, build client relationships, and help expand Digiwave's market presence across India and globally.",
        tags: ["Sales", "Client Relations", "Strategy", "B2B"],
    },
];

const hiringSteps = [
    {
        step: "01",
        title: "Apply",
        description: "Submit your resume and portfolio via email to our HR team.",
    },
    {
        step: "02",
        title: "Screening",
        description:
            "Our team reviews your profile and contacts you for an initial discussion.",
    },
    {
        step: "03",
        title: "Interview",
        description:
            "Technical and cultural fit interviews with our engineering and leadership team.",
    },
    {
        step: "04",
        title: "Offer",
        description:
            "Receive your offer, complete onboarding, and start building the future with us!",
    },
];

export default function CareersPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-[#022030] h-[322px] overflow-hidden">
                    {/* Decorative blur effects - same as Services page */}
                    <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[223px] -top-14 opacity-100"></div>
                    <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[648px] top-28 opacity-100"></div>
                    <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] -left-[426px] -top-[151px] opacity-100"></div>

                    <Container className="relative z-10 flex flex-col items-center justify-center h-full">
                        <h3 className="text-[#62F4F3] font-poppins font-medium text-xl mb-4 text-center">Careers</h3>
                        <h1 className="text-white font-poppins font-bold text-[40px] leading-tight text-center max-w-[727px]">
                            Build the Future With Us
                        </h1>
                    </Container>
                </section>

                {/* Why Join Us */}
                <section className="py-16 md:py-24 bg-white">
                    <Container className="max-w-[1800px]">
                        <div className="text-center mb-14">
                            <p className="text-[#00BFD2] text-base font-bold font-['Poppins'] uppercase tracking-wider mb-3">
                                Why Digiwave?
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold font-['Inter'] text-[#00114C] leading-tight">
                                Why You&apos;ll Love Working Here
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="p-7 bg-white rounded-3xl shadow-[2px_3px_6.3px_1px_rgba(64,64,64,0.27)] flex flex-col justify-start items-start gap-5 w-full hover:translate-y-[-5px] transition-transform duration-300"
                                >
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                                        style={{
                                            backgroundColor: benefit.bg,
                                            color: benefit.color,
                                        }}
                                    >
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-sky-950 text-xl font-bold font-['Inter'] leading-7">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-stone-950 text-sm font-normal font-['Inter'] leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Open Positions */}
                <section id="positions" className="py-16 md:py-24 bg-gray-50">
                    <Container>
                        <div className="text-center mb-14">
                            <p className="text-[#00BFD2] text-base font-bold font-['Poppins'] uppercase tracking-wider mb-3">
                                Open Roles
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold font-['Inter'] text-[#00114C] leading-tight">
                                Current Openings
                            </h2>
                            <p className="text-gray-600 text-lg font-['Inter'] mt-4 max-w-2xl mx-auto">
                                Explore our open positions and find the role that matches your
                                skills and ambitions.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {positions.map((position, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-7 shadow-[0px_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold font-['Inter'] text-[#00114C] group-hover:text-[#00BFD2] transition-colors">
                                            {position.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[#00BFD2] bg-[#00BFD2]/10 px-2.5 py-1 rounded-full">
                                            <Briefcase size={12} />
                                            {position.type}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                                            <MapPin size={12} />
                                            {position.location}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm font-['Inter'] leading-relaxed mb-5 flex-grow">
                                        {position.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {position.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium text-[#00114C]/70 bg-[#00114C]/5 px-2.5 py-1 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={`mailto:hr@digiwavetechnologies.in?subject=Application for ${position.title}&body=Hi,%0D%0A%0D%0AI am interested in the ${position.title} position at Digiwave Technologies.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards`}
                                        className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#00114C] text-white font-semibold text-sm rounded-xl hover:bg-[#00BFD2] transition-all duration-300"
                                    >
                                        Apply Now
                                        <Send size={14} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Hiring Process */}
                <section className="py-16 md:py-24 bg-white">
                    <Container>
                        <div className="text-center mb-14">
                            <p className="text-[#00BFD2] text-base font-bold font-['Poppins'] uppercase tracking-wider mb-3">
                                How It Works
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold font-['Inter'] text-[#00114C] leading-tight">
                                Our Hiring Process
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {hiringSteps.map((step, index) => (
                                <div key={index} className="relative group">
                                    <div className="p-7 bg-gray-50 rounded-2xl hover:bg-[#00114C] transition-all duration-300 h-full flex flex-col">
                                        <div className="text-5xl font-bold font-['Poppins'] text-[#00BFD2]/20 group-hover:text-[#00BFD2]/40 mb-4 transition-colors">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-bold font-['Inter'] text-[#00114C] group-hover:text-white mb-3 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-gray-300 text-sm font-['Inter'] leading-relaxed transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                    {index < hiringSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                            <ChevronRight className="w-6 h-6 text-[#00BFD2]/40" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA Banner - Same background as Service page Book Demo section */}
                <section className="relative bg-[#022030] py-20 overflow-hidden">
                    {/* Animated Background Elements - Same as Service detail CTA */}
                    <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 -left-52 -top-36 animate-pulse" />
                    <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 left-[436px] -top-14 animate-pulse delay-1000" />
                    <div className="absolute w-6 h-[925px] rotate-[43deg] bg-[#62F4F3] blur-[68px] opacity-80 right-0 top-28 animate-pulse delay-2000" />

                    <Container className="relative z-10 text-center">
                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight mb-6">
                            Don&apos;t See Your Role?
                        </h2>
                        <p className="text-white/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            We&apos;re always looking for talented people. Send us your
                            resume and we&apos;ll keep you in mind for future opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href="mailto:hr@digiwavetechnologies.in?subject=General Application — Career Inquiry&body=Hi,%0D%0A%0D%0AI'd like to explore career opportunities at Digiwave Technologies.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards"
                                className="bg-white text-[#022030] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-2"
                            >
                                <Send size={18} />
                                Send Your Resume
                            </a>
                            <Link
                                href="/about"
                                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#022030] transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                            >
                                Learn About Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
