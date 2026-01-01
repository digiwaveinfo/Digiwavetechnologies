"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What services does Digiwave Technologies offer?",
      answer:
        "Digiwave Technologies offers a comprehensive range of IT services including AI & Machine Learning solutions, Web Application Development, Mobile App Development (Android, iOS, and cross-platform), Cloud & DevOps services, Data Intelligence & Automation, and IoT Solutions. We deliver scalable, high-performance solutions tailored to your business needs.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with a wide range of modern technologies including React, Next.js, Vue.js, Angular for frontend; Python, PHP, Java, Go, Node.js for backend; React Native, Flutter, Swift, Kotlin for mobile; PostgreSQL, MongoDB, MySQL, Redis for databases; and AWS, Azure, Docker, Kubernetes for cloud and DevOps. We choose the best technology stack based on your project requirements.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Getting started is simple! First, share your requirements with us through our contact form or schedule a free consultation. Then, discuss your project with our AI & Tech experts. We'll provide you with a customized, transparent quote. Once approved, we kick off your project with a dedicated team assigned to deliver results.",
    },
    {
      question: "Which industries does Digiwave serve?",
      answer:
        "We have proven success across multiple industries including Finance, Healthcare, Inventory Management, Marketing, and Business Management sectors. Our solutions are designed to address industry-specific challenges while leveraging cutting-edge technology to drive innovation and growth.",
    },
    {
      question: "What makes Digiwave different from other IT companies?",
      answer:
        "Digiwave stands out with our dedicated team of expert engineers, tailored solutions with transparent communication, 100% quality focus, and reliable ongoing support. We combine deep technical expertise with a client-first approach, ensuring every project is delivered on time and exceeds expectations.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full bg-[#0A1A53] overflow-hidden rounded-3xl py-12 md:py-16 lg:py-20">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/faqbackground.png"
          alt=""
          fill
          className="object-fill"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1800px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Title */}
          <div className="flex flex-col gap-5 lg:gap-5 justify-start lg:pt-8">
            <h2 className="font-['Inter'] font-bold text-4xl md:text-5xl lg:text-[48px] leading-[120%]">
              <span className="text-white">Frequently Asked </span>
              <span className="text-[#00BFD2]">Questions</span>
            </h2>
            <p className="font-['Inter'] font-normal text-lg md:text-xl leading-[160%] text-[#CDCDCD] max-w-[544px]">
              Find answers to frequently asked questions about Digiwave and its
              features.
            </p>
          </div>

          {/* Right side - FAQ Items */}
          <div className="flex flex-col gap-[15px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-[27.35px] cursor-pointer transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1 font-['Inter'] font-medium text-lg md:text-xl leading-[156%] text-[#0C0C0C]">
                    {faq.question}
                  </div>
                  <div className="flex items-center justify-center w-9 h-9 bg-[#00BFD2] rounded-full flex-shrink-0">
                    {openIndex === index ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.728 12.728L21.2133 21.2133"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.7281 21.2133L21.2134 12.728"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 18V6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {openIndex === index && faq.answer && (
                  <div className="font-['Inter'] font-normal text-base md:text-lg leading-[27px] text-black whitespace-pre-line mt-4 pt-4 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
