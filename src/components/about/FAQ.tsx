"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Eu leo enim.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Accumsan commodo fringilla nec ligula sollicitudin amet. Sagittis nunc mattis arcu sit quis gravida. Diam ultrices id est urna eu. Aliquam ut odio in facilisi interdum non in. Ut faucibus at gravida viverra malesuada ac a pretium. Sed tellus ac ligula malesuada tincidunt in augue. Euismod sed erat quam nulla at odio sit erat et. Amet facilisis a augue iaculis imperdiet tellus mi vulputate ac.\nSit ac dui volutpat semper faucibus. Nibh tempus platea id.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Porttitor arcu sed et hac proin id dolor phasellus luctus. Consectetur.",
      answer: "",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Maecenas eu purus placerat suscipit vel blandit ut pellentesque.",
      answer: "",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Enim ultricies.",
      answer: "",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Id mattis.",
      answer: "",
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
