
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Clock, CheckCircle2, Video, Users, Zap, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const services = [
  { id: "ai-machine-learning", label: "AI & ML Solutions" },
  { id: "web-application-development", label: "Web App Development" },
  { id: "mobile-app-development", label: "Mobile App Development" },
  { id: "cloud-devops-services", label: "Cloud & DevOps" },
  { id: "automation-data-intelligence", label: "Data Intelligence" },
  { id: "iot-solutions", label: "IoT Solutions" },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  selectedService: string;
  preferredDate: Date | undefined;
  preferredTime: string;
  requirements: string;
}

export default function BookDemoPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    selectedService: "",
    preferredDate: undefined,
    preferredTime: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, preferredDate: date }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Demo request submitted! Check your email for confirmation.");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        selectedService: "",
        preferredDate: undefined,
        preferredTime: "",
        requirements: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <section className="py-12 lg:py-20">
          <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

              {/* Left Column: Value Proposition */}
              <div className="lg:col-span-2 space-y-8 pt-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#00BFD2] text-sm font-semibold mb-4">
                    <Video size={16} />
                    <span>Live Product Tour</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#00114C] leading-tight mb-4">
                    See Digiwave in Action
                  </h1>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Book a personalized demo to explore how our technology can solve your specific business challenges.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-[#00114C]">What to expect:</h3>
                  <ul className="space-y-4">
                    {[
                      "Deep dive into features relevant to your needs",
                      "Live Q&A with a senior product specialist",
                      "Pricing and implementation discussion",
                      "No commitment, 30-minute session"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#00BFD2] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Trusted by leading companies</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "The demo was an eye-opener. We saw exactly how we could cut our operational costs by 40% in just minimal time."
                  </p>
                </div>
              </div>

              {/* Right Column: Booking Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative z-10">
                  <div className="bg-[#00114C] px-8 py-4 flex items-center justify-between">
                    <h2 className="text-white font-bold text-lg">Schedule Your Session</h2>
                    <Zap className="text-[#00BFD2] w-5 h-5" />
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Personal Details Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Work Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Company & Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="+91 9428418099"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                          placeholder="Company Ltd"
                        />
                      </div>
                    </div>

                    <div className="h-px bg-gray-100 my-4" />

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">What would you like to see?</label>
                      <select
                        name="selectedService"
                        value={formData.selectedService}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a topic for the demo...</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Booking Details Row */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-4">Preferred Availability</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Custom Date Picker */}
                        <div className="relative">
                          <label className="text-xs text-gray-500 mb-1 block">Date</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                className={cn(
                                  "w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-left focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all flex items-center",
                                  !formData.preferredDate && "text-gray-500"
                                )}
                              >
                                <CalendarIcon className="w-4 h-4 text-gray-400 absolute left-3" />
                                {formData.preferredDate ? (
                                  format(formData.preferredDate, "dd/MM/yyyy")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={formData.preferredDate}
                                onSelect={handleDateSelect}
                                disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="relative">
                          <label className="text-xs text-gray-500 mb-1 block">Time Slot</label>
                          <div className="relative">
                            <select
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all appearance-none"
                              required
                            >
                              <option value="">Select time...</option>
                              <option value="09:00">09:00 AM - 10:00 AM</option>
                              <option value="10:00">10:00 AM - 11:00 AM</option>
                              <option value="11:00">11:00 AM - 12:00 PM</option>
                              <option value="14:00">02:00 PM - 03:00 PM</option>
                              <option value="15:00">03:00 PM - 04:00 PM</option>
                              <option value="16:00">04:00 PM - 05:00 PM</option>
                            </select>
                            <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Specific Requirements (Optional)</label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Any specific features or questions you have in mind?"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-[#00BFD2] text-white font-bold text-lg rounded-xl hover:bg-[#00a8b8] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Confirming..." : "Confirm Booking"}
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-4">
                        By clicking confirm, you agree to our privacy policy.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
