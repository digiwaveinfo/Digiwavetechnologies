import React from "react";
import Image from "next/image";

// SVG Icons as components for cleanliness
const QualityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_61_32)">
            <path d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.8021 12L3.4021 17.89L7.0001 17.657L8.5981 20.889L11.9981 15" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_61_32">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const DeliveryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_61_38)">
            <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12L20 7.5" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12V21" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12L4 7.5" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_61_38">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const DevelopersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_61_45)">
            <path d="M3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V16C21 16.2652 20.8946 16.5196 20.7071 16.7071C20.5196 16.8946 20.2652 17 20 17H4C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16V4Z" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 13H21" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 21H16" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 17L9.5 21" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 17L14.5 21" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_61_45">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const CooperationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_61_53)">
            <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7V12L15 15" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_61_53">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const CostsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_61_58)">
            <path d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L16 19L14 21L12 19L10 21L8 19L5 21Z" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 8H11.5C11.1022 8 10.7206 8.15804 10.4393 8.43934C10.158 8.72064 10 9.10218 10 9.5C10 9.89782 10.158 10.2794 10.4393 10.5607C10.7206 10.842 11.1022 11 11.5 11H12.5C12.8978 11 13.2794 11.158 13.5607 11.4393C13.842 11.7206 14 12.1022 14 12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14H10M12 14V15.5M12 6.5V8" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_61_58">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const ScaleUpIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_61_63)">
            <path d="M18 21V7" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 15L12 12L15 15" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 10L18 7L21 10" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 21H21" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 21V12" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6L6 3L9 6" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 21V3" stroke="#00BFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_61_63">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default function WhyUsBetter() {
    const leftColumnBenefits = [
        { title: "Quality Comes First", icon: <QualityIcon /> },
        { title: "On-Time Delivery", icon: <DeliveryIcon /> },
        { title: "Qualified Developers", icon: <DevelopersIcon /> },
    ];

    const rightColumnBenefits = [
        { title: "Flexible Cooperation", icon: <CooperationIcon /> },
        { title: "Transparent costs", icon: <CostsIcon /> },
        { title: "Quick Scale Up", icon: <ScaleUpIcon /> },
    ];

    return (
        <section className="relative w-full bg-black py-20 overflow-hidden min-h-[642px]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image src="/about/Whay-us-background.png" alt="Background Office" fill className="object-fill" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 h-full flex items-center max-w-[1800px]">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16">

                    {/* Left Image (Business Man) */}
                    <div className="hidden lg:block w-[520px] h-[502px] relative bg-stone-300 rounded-[19px] overflow-hidden shrink-0">
                        <Image
                            src="/about/business-man-holding-paper-with-why-choose-us-question .png"
                            alt="Why Choose Us"
                            fill
                            className="object-cover object-center"
                            style={{ objectPosition: 'center left' }}
                        />
                    </div>

                    {/* Right Content */}
                    <div className="text-white">
                        <div className="mb-8">
                            <h3 className="text-cyan-500 text-xl font-medium font-['Poppins'] mb-2">Why Us Better</h3>
                            <h2 className="text-white text-4xl font-bold font-['Poppins'] leading-tight w-full max-w-[727px]">
                                Why our services are better than others
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                            {/* Column 1 */}
                            <div className="flex flex-col gap-6 w-full sm:w-72">
                                {leftColumnBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-5 p-4 bg-white rounded-2xl shadow-lg w-full">
                                        <div className="w-9 h-9 bg-cyan-500/10 rounded-sm flex items-center justify-center shrink-0 overflow-hidden relative">
                                            <div className="absolute left-[7px] top-[7px]">
                                                {benefit.icon}
                                            </div>
                                        </div>
                                        <span className="text-black text-xl font-medium font-['Inter'] leading-6">
                                            {benefit.title}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Column 2 */}
                            <div className="flex flex-col gap-6 w-full sm:w-72">
                                {rightColumnBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-5 p-4 bg-white rounded-2xl shadow-lg w-full">
                                        <div className="w-9 h-9 bg-cyan-500/10 rounded-sm flex items-center justify-center shrink-0 overflow-hidden relative">
                                            <div className="absolute left-[7px] top-[7px]">
                                                {benefit.icon}
                                            </div>
                                        </div>
                                        <span className="text-black text-xl font-medium font-['Inter'] leading-6">
                                            {benefit.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
