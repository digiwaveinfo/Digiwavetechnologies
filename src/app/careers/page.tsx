"use client";

import { useState, useEffect } from "react";
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
    Send,
    ArrowRight,
    ChevronRight,
    X,
    Upload,
    Loader2,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";
import { getJobOpenings, submitCareerApplication, type JobOpening } from "@/lib/api";

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

const hiringSteps = [
    {
        step: "01",
        title: "Apply",
        description: "Submit your resume and details through our application form.",
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
    const [positions, setPositions] = useState<JobOpening[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        cover_letter: "",
    });
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    useEffect(() => {
        async function fetchOpenings() {
            setIsLoading(true);
            const openings = await getJobOpenings();
            setPositions(openings);
            setIsLoading(false);
        }
        fetchOpenings();
    }, []);

    const openApplyModal = (job: JobOpening | null) => {
        setSelectedJob(job);
        setShowModal(true);
        setSubmitStatus({ type: null, message: "" });
        setFormData({ full_name: "", email: "", phone: "", cover_letter: "" });
        setResumeFile(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        const data = new FormData();
        data.append("full_name", formData.full_name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        if (formData.cover_letter) data.append("cover_letter", formData.cover_letter);
        if (selectedJob) data.append("job_opening", String(selectedJob.id));
        if (resumeFile) data.append("resume", resumeFile);

        const result = await submitCareerApplication(data);
        setIsSubmitting(false);

        if (result.success) {
            setSubmitStatus({ type: "success", message: result.message || "Application submitted!" });
            setFormData({ full_name: "", email: "", phone: "", cover_letter: "" });
            setResumeFile(null);
        } else {
            let errorMsg = result.message || "Something went wrong.";
            if (result.errors) {
                const firstError = Object.values(result.errors)[0];
                if (firstError && firstError[0]) errorMsg = firstError[0];
            }
            setSubmitStatus({ type: "error", message: errorMsg });
        }
    };

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-[#022030] h-[322px] overflow-hidden">
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

                        {isLoading ? (
                            <div className="flex justify-center items-center py-20">
                                <Loader2 className="w-8 h-8 text-[#00BFD2] animate-spin" />
                                <span className="ml-3 text-gray-500 text-lg">Loading openings...</span>
                            </div>
                        ) : positions.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg mb-4">No open positions at the moment.</p>
                                <p className="text-gray-400">But we&apos;re always looking for talented people! Send us a general application below.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {positions.map((position) => (
                                    <div
                                        key={position.id}
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
                                                {position.job_type_display}
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
                                        <button
                                            onClick={() => openApplyModal(position)}
                                            className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#00114C] text-white font-semibold text-sm rounded-xl hover:bg-[#00BFD2] transition-all duration-300 cursor-pointer"
                                        >
                                            Apply Now
                                            <Send size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
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

                {/* CTA Banner */}
                <section className="relative bg-[#022030] py-20 overflow-hidden">
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
                            <button
                                onClick={() => openApplyModal(null)}
                                className="bg-white text-[#022030] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-2 cursor-pointer"
                            >
                                <Send size={18} />
                                Send Your Resume
                            </button>
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

            {/* Application Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => !isSubmitting && setShowModal(false)}
                    />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
                            <div>
                                <h3 className="text-xl font-bold text-[#00114C] font-['Inter']">
                                    {selectedJob ? `Apply for ${selectedJob.title}` : "General Application"}
                                </h3>
                                {selectedJob && (
                                    <p className="text-sm text-gray-500 mt-0.5">
                                        {selectedJob.job_type_display} · {selectedJob.location}
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={() => !isSubmitting && setShowModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="px-6 py-5">
                            {/* Status Messages */}
                            {submitStatus.type && (
                                <div
                                    className={`mb-5 p-4 rounded-xl flex items-start gap-3 ${submitStatus.type === "success"
                                            ? "bg-green-50 text-green-800 border border-green-200"
                                            : "bg-red-50 text-red-800 border border-red-200"
                                        }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                                    )}
                                    <span className="text-sm">{submitStatus.message}</span>
                                </div>
                            )}

                            {submitStatus.type !== "success" && (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.full_name}
                                            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                            className="w-full h-12 px-4 bg-white rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 font-['Inter'] focus:border-[#00BFD2] focus:ring-2 focus:ring-[#00BFD2]/20 outline-none transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full h-12 px-4 bg-white rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 font-['Inter'] focus:border-[#00BFD2] focus:ring-2 focus:ring-[#00BFD2]/20 outline-none transition-all"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full h-12 px-4 bg-white rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 font-['Inter'] focus:border-[#00BFD2] focus:ring-2 focus:ring-[#00BFD2]/20 outline-none transition-all"
                                            placeholder="+91 XXXXXXXXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Resume <span className="text-red-500">*</span>
                                            <span className="font-normal text-gray-400 ml-1">(PDF, DOC, DOCX — max 10MB)</span>
                                        </label>
                                        <label className="flex items-center gap-3 w-full h-12 px-4 bg-white rounded-xl border border-dashed border-gray-300 hover:border-[#00BFD2] transition-colors cursor-pointer">
                                            <Upload size={18} className="text-gray-400" />
                                            <span className={`text-sm ${resumeFile ? "text-gray-900" : "text-gray-400"}`}>
                                                {resumeFile ? resumeFile.name : "Choose file..."}
                                            </span>
                                            <input
                                                type="file"
                                                required
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                                onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                                            />
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            Cover Letter <span className="font-normal text-gray-400">(Optional)</span>
                                        </label>
                                        <textarea
                                            value={formData.cover_letter}
                                            onChange={(e) => setFormData({ ...formData, cover_letter: e.target.value })}
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 font-['Inter'] focus:border-[#00BFD2] focus:ring-2 focus:ring-[#00BFD2]/20 outline-none transition-all resize-none"
                                            placeholder="Tell us why you'd be a great fit..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 bg-[#00114C] text-white font-semibold text-sm rounded-xl hover:bg-[#00BFD2] transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={16} className="animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={14} />
                                                Submit Application
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}

                            {submitStatus.type === "success" && (
                                <div className="text-center py-4">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-8 py-3 bg-[#00BFD2] text-white font-semibold rounded-xl hover:bg-[#00114C] transition-all cursor-pointer"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
