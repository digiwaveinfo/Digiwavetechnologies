"use client";

import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// Colorful SVG Icons for each integration
const AadhaarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#FF6B35" />
    <circle cx="24" cy="24" r="16" fill="#FFFFFF" />
    <circle cx="24" cy="24" r="10" fill="#2E7D32" />
    <circle cx="24" cy="24" r="4" fill="#FF6B35" />
  </svg>
);

const PANIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="40" height="28" rx="4" fill="#1565C0" />
    <rect x="8" y="14" width="16" height="12" rx="2" fill="#FFFFFF" />
    <circle cx="16" cy="20" r="4" fill="#1565C0" />
    <rect x="28" y="16" width="12" height="2" rx="1" fill="#64B5F6" />
    <rect x="28" y="22" width="12" height="2" rx="1" fill="#64B5F6" />
    <rect x="8" y="30" width="32" height="4" rx="1" fill="#FFD54F" />
  </svg>
);

const DigiLockerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="32" height="24" rx="4" fill="#7B1FA2" />
    <rect x="16" y="8" width="16" height="12" rx="2" fill="#9C27B0" />
    <circle cx="24" cy="28" r="6" fill="#FFFFFF" />
    <rect x="22" y="28" width="4" height="8" fill="#FFFFFF" />
    <circle cx="24" cy="28" r="2" fill="#7B1FA2" />
  </svg>
);

const GSTIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#0288D1" />
    <text x="24" y="30" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="Arial">GST</text>
  </svg>
);

const BankIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L4 16H44L24 4Z" fill="#43A047" />
    <rect x="8" y="16" width="32" height="4" fill="#66BB6A" />
    <rect x="10" y="20" width="4" height="16" fill="#81C784" />
    <rect x="18" y="20" width="4" height="16" fill="#81C784" />
    <rect x="26" y="20" width="4" height="16" fill="#81C784" />
    <rect x="34" y="20" width="4" height="16" fill="#81C784" />
    <rect x="6" y="36" width="36" height="6" rx="1" fill="#43A047" />
  </svg>
);

const MobileIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="24" height="40" rx="4" fill="#424242" />
    <rect x="14" y="8" width="20" height="28" rx="2" fill="#E3F2FD" />
    <circle cx="24" cy="40" r="2" fill="#757575" />
    <rect x="18" y="12" width="12" height="2" rx="1" fill="#1976D2" />
    <rect x="16" y="18" width="16" height="8" rx="1" fill="#4CAF50" />
    <text x="24" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">OTP</text>
  </svg>
);

const EmailIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="40" height="28" rx="4" fill="#EA4335" />
    <path d="M4 14L24 26L44 14" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    <path d="M4 34L16 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <path d="M44 34L32 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AddressIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C16.268 4 10 10.268 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.268 31.732 4 24 4Z" fill="#F44336" />
    <circle cx="24" cy="18" r="6" fill="#FFFFFF" />
  </svg>
);

const DrivingLicenseIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="40" height="28" rx="4" fill="#FF9800" />
    <rect x="8" y="14" width="14" height="14" rx="2" fill="#FFFFFF" />
    <circle cx="15" cy="19" r="3" fill="#FF9800" />
    <rect x="11" y="23" width="8" height="3" rx="1" fill="#FF9800" />
    <rect x="26" y="16" width="14" height="2" rx="1" fill="#FFFFFF" />
    <rect x="26" y="22" width="14" height="2" rx="1" fill="#FFFFFF" />
    <rect x="26" y="28" width="10" height="2" rx="1" fill="#FFFFFF" />
    <circle cx="38" cy="32" r="4" fill="#4CAF50" />
    <path d="M36 32L37.5 33.5L40 31" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PassportIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="4" fill="#1565C0" />
    <circle cx="24" cy="20" r="8" fill="#FFD54F" />
    <rect x="14" y="32" width="20" height="2" rx="1" fill="#FFFFFF" />
    <rect x="16" y="36" width="16" height="2" rx="1" fill="#FFFFFF" />
    <path d="M24 12L26 16H22L24 12Z" fill="#1565C0" />
    <circle cx="24" cy="20" r="4" fill="#1565C0" />
  </svg>
);

const VoterIDIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="4" fill="#9C27B0" />
    <rect x="8" y="12" width="12" height="14" rx="2" fill="#FFFFFF" />
    <circle cx="14" cy="17" r="3" fill="#9C27B0" />
    <rect x="10" y="21" width="8" height="3" rx="1" fill="#9C27B0" />
    <rect x="24" y="14" width="16" height="2" rx="1" fill="#E1BEE7" />
    <rect x="24" y="20" width="16" height="2" rx="1" fill="#E1BEE7" />
    <rect x="24" y="26" width="12" height="2" rx="1" fill="#E1BEE7" />
    <path d="M8 34L14 28L20 34L26 26L32 32L40 24" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ESignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="2" fill="#ECEFF1" />
    <rect x="12" y="10" width="24" height="2" rx="1" fill="#90A4AE" />
    <rect x="12" y="16" width="20" height="2" rx="1" fill="#90A4AE" />
    <rect x="12" y="22" width="24" height="2" rx="1" fill="#90A4AE" />
    <path d="M14 36C14 36 18 30 22 32C26 34 28 28 32 30C36 32 38 36 38 36" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" />
    <circle cx="36" cy="36" r="8" fill="#4CAF50" />
    <path d="M32 36L35 39L40 34" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface Integration {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const integrations: Integration[] = [
  {
    id: "aadhaar",
    title: "Aadhaar Verification",
    description: "Instant Aadhaar-based identity verification with OTP authentication for secure user onboarding.",
    icon: <AadhaarIcon />,
    category: "Identity"
  },
  {
    id: "pan",
    title: "PAN Card Verification",
    description: "Real-time PAN card validation and name matching for KYC compliance and financial services.",
    icon: <PANIcon />,
    category: "Identity"
  },
  {
    id: "digilocker",
    title: "DigiLocker Integration",
    description: "Access government-issued documents directly from DigiLocker for paperless verification.",
    icon: <DigiLockerIcon />,
    category: "Documents"
  },
  {
    id: "gst",
    title: "GST Verification",
    description: "Validate GST numbers and fetch business details for B2B compliance and invoicing.",
    icon: <GSTIcon />,
    category: "Business"
  },
  {
    id: "bank",
    title: "Bank Account Verification",
    description: "Instant bank account validation with penny drop verification for secure transactions.",
    icon: <BankIcon />,
    category: "Financial"
  },
  {
    id: "mobile",
    title: "Mobile Number Verification",
    description: "OTP-based mobile verification with carrier lookup and fraud detection capabilities.",
    icon: <MobileIcon />,
    category: "Communication"
  },
  {
    id: "email",
    title: "Email Verification",
    description: "Real-time email validation with deliverability check and domain verification.",
    icon: <EmailIcon />,
    category: "Communication"
  },
  {
    id: "address",
    title: "Address Verification",
    description: "Geocoding and address standardization with postal code validation services.",
    icon: <AddressIcon />,
    category: "Location"
  },
  {
    id: "driving",
    title: "Driving License Verification",
    description: "Validate driving licenses with RTO database integration for identity verification.",
    icon: <DrivingLicenseIcon />,
    category: "Identity"
  },
  {
    id: "passport",
    title: "Passport Verification",
    description: "International passport validation for global KYC and travel-related applications.",
    icon: <PassportIcon />,
    category: "Identity"
  },
  {
    id: "voter",
    title: "Voter ID Verification",
    description: "Electoral roll verification for identity confirmation and address validation.",
    icon: <VoterIDIcon />,
    category: "Identity"
  },
  {
    id: "esign",
    title: "E-Sign Integration",
    description: "Aadhaar-based electronic signature for legally binding digital document signing.",
    icon: <ESignIcon />,
    category: "Documents"
  }
];

export default function ThirdPartyIntegrations() {
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  // Auto-scroll effect
  useEffect(() => {
    if (!api || !isAutoPlaying) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isAutoPlaying]);

  return (
    <section className="py-16 sm:py-20 px-5 sm:px-10 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#00BFD2]/10 rounded-full border border-[#00BFD2]/20 mb-4">
            <span className="text-[#00BFD2] text-sm font-medium">API Integrations</span>
          </div>
          <h2 className="text-sky-950 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight mb-4">
            Third-Party Service Integrations
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Seamlessly integrate government and private APIs for identity verification, KYC compliance,
            and secure document management in your applications.
          </p>
        </div>

        {/* Integration Cards Carousel */}
        <div
          className="px-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {integrations.map((integration) => (
                <CarouselItem key={integration.id} className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#00BFD2]/30 h-full min-h-[280px]">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="text-xs font-medium text-[#00BFD2] bg-[#00BFD2]/10 px-3 py-1 rounded-full">
                        {integration.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {integration.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[#022030] font-bold text-lg mb-2 group-hover:text-[#00BFD2] transition-colors">
                      {integration.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {integration.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation Arrows */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/90 transition-all border border-white/50 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-[#00BFD2]" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/90 transition-all border border-white/50 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-[#00BFD2]" />
            </button>
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#022030] to-[#034175] rounded-3xl p-8 sm:p-12">
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">
              Need Custom API Integration?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We can integrate any third-party service or government API into your application.
              Contact us to discuss your specific requirements.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#00BFD2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00BFD2]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
