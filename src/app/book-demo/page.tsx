"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const services = [
  { id: "ai-machine-learning", label: "AI & ML Solutions" },
  { id: "web-application-development", label: "Web App Development" },
  { id: "mobile-app-development", label: "Mobile App Development" },
  { id: "cloud-devops-services", label: "Cloud & DevOps" },
  { id: "automation-data-intelligence", label: "Data Intelligence" },
  { id: "iot-solutions", label: "IoT Solutions" },
];

const technologies = [
  { id: "react-nextjs", label: "React / Next.js" },
  { id: "nodejs", label: "Node.js" },
  { id: "python", label: "Python" },
  { id: "flutter", label: "Flutter" },
  { id: "react-native", label: "React Native" },
  { id: "aws", label: "AWS" },
  { id: "azure", label: "Azure" },
  { id: "docker-kubernetes", label: "Docker / Kubernetes" },
  { id: "tensorflow-pytorch", label: "TensorFlow / PyTorch" },
  { id: "mongodb", label: "MongoDB" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "other", label: "Other" },
];

const projectBudgets = [
  { id: "less-10k", label: "Less than $10,000" },
  { id: "10k-25k", label: "$10,000 - $25,000" },
  { id: "25k-50k", label: "$25,000 - $50,000" },
  { id: "50k-100k", label: "$50,000 - $100,000" },
  { id: "more-100k", label: "More than $100,000" },
  { id: "not-sure", label: "Not sure yet" },
];

const timelines = [
  { id: "asap", label: "ASAP" },
  { id: "1-month", label: "Within 1 month" },
  { id: "1-3-months", label: "1-3 months" },
  { id: "3-6-months", label: "3-6 months" },
  { id: "flexible", label: "Flexible" },
];

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    selectedServices: [] as string[],
    selectedTechnologies: [] as string[],
    projectBudget: "",
    timeline: "",
    projectDescription: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    field: "selectedServices" | "selectedTechnologies",
    value: string
  ) => {
    setFormData((prev) => {
      const currentValues = prev[field];
      if (currentValues.includes(value)) {
        return { ...prev, [field]: currentValues.filter((v) => v !== value) };
      } else {
        return { ...prev, [field]: [...currentValues, value] };
      }
    });
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.fullName || !formData.email || !formData.phone) {
          toast.error("Please fill in all required fields");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          toast.error("Please enter a valid email address");
          return false;
        }
        return true;
      case 2:
        if (formData.selectedServices.length === 0) {
          toast.error("Please select at least one service");
          return false;
        }
        return true;
      case 3:
        if (!formData.projectDescription) {
          toast.error("Please describe your project requirements");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/book-demo', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Demo request submitted successfully! We'll contact you soon.");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        selectedServices: [],
        selectedTechnologies: [],
        projectBudget: "",
        timeline: "",
        projectDescription: "",
        preferredDate: "",
        preferredTime: "",
      });
      setCurrentStep(1);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe]">
        {/* Hero Section */}
        <section className="bg-[#00114C] py-16 md:py-24">
          <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Book a <span className="text-[#00BFD2]">Free Demo</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Schedule a personalized demo with our experts and discover how our solutions can transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] max-w-[900px]">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                      currentStep >= step
                        ? "bg-[#00BFD2] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`w-16 md:w-24 h-1 transition-all ${
                        currentStep > step ? "bg-[#00BFD2]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="flex justify-between mb-8 text-xs md:text-sm text-gray-600">
              <span className={currentStep >= 1 ? "text-[#00BFD2] font-medium" : ""}>
                Contact Info
              </span>
              <span className={currentStep >= 2 ? "text-[#00BFD2] font-medium" : ""}>
                Services
              </span>
              <span className={currentStep >= 3 ? "text-[#00BFD2] font-medium" : ""}>
                Project Details
              </span>
              <span className={currentStep >= 4 ? "text-[#00BFD2] font-medium" : ""}>
                Schedule
              </span>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#00114C] mb-6">
                      Contact Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="john@company.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="+1 (555) 000-0000"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="CEO, CTO, Project Manager, etc."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Services & Technologies */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-[#00114C] mb-6">
                      What Services Are You Interested In?
                    </h2>

                    {/* Services Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Select Services <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {services.map((service) => (
                          <label
                            key={service.id}
                            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.selectedServices.includes(service.id)
                                ? "border-[#00BFD2] bg-[#00BFD2]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.selectedServices.includes(service.id)}
                              onChange={() =>
                                handleCheckboxChange("selectedServices", service.id)
                              }
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                                formData.selectedServices.includes(service.id)
                                  ? "bg-[#00BFD2] border-[#00BFD2]"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.selectedServices.includes(service.id) && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {service.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Preferred Technologies (Optional)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {technologies.map((tech) => (
                          <label
                            key={tech.id}
                            className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all text-sm ${
                              formData.selectedTechnologies.includes(tech.id)
                                ? "border-[#00BFD2] bg-[#00BFD2]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.selectedTechnologies.includes(tech.id)}
                              onChange={() =>
                                handleCheckboxChange("selectedTechnologies", tech.id)
                              }
                              className="sr-only"
                            />
                            <div
                              className={`w-4 h-4 rounded border-2 mr-2 flex items-center justify-center ${
                                formData.selectedTechnologies.includes(tech.id)
                                  ? "bg-[#00BFD2] border-[#00BFD2]"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.selectedTechnologies.includes(tech.id) && (
                                <svg
                                  className="w-2.5 h-2.5 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-gray-700">{tech.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Project Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#00114C] mb-6">
                      Tell Us About Your Project
                    </h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Describe your project requirements, goals, and any specific features you need..."
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Budget
                        </label>
                        <select
                          name="projectBudget"
                          value={formData.projectBudget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">Select budget range</option>
                          {projectBudgets.map((budget) => (
                            <option key={budget.id} value={budget.id}>
                              {budget.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline.id} value={timeline.id}>
                              {timeline.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Schedule Demo */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#00114C] mb-6">
                      Schedule Your Demo
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">Select time slot</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                      <h3 className="text-lg font-semibold text-[#00114C] mb-4">
                        Booking Summary
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium">{formData.fullName || "-"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Email:</span>
                          <span className="font-medium">{formData.email || "-"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Services:</span>
                          <span className="font-medium text-right max-w-[200px]">
                            {formData.selectedServices.length > 0
                              ? services
                                  .filter((s) => formData.selectedServices.includes(s.id))
                                  .map((s) => s.label)
                                  .join(", ")
                              : "-"}
                          </span>
                        </div>
                        {formData.preferredDate && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Demo Date:</span>
                            <span className="font-medium">
                              {new Date(formData.preferredDate).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        )}
                        {formData.preferredTime && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">{formData.preferredTime}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 text-gray-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
                    >
                      Previous
                    </button>
                  ) : (
                    <Link
                      href="/"
                      className="px-6 py-3 text-gray-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </Link>
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-[#00BFD2] text-white font-semibold rounded-lg hover:bg-[#00a8b8] transition-all"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-[#00BFD2] text-white font-semibold rounded-lg hover:bg-[#00a8b8] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Book Demo"
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center text-gray-600">
              <p className="text-sm">
                Have questions?{" "}
                <Link href="/#contact" className="text-[#00BFD2] hover:underline">
                  Contact us directly
                </Link>{" "}
                or call{" "}
                <a href="tel:+1234567890" className="text-[#00BFD2] hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
