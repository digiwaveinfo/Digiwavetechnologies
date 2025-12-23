"use client";

import { ArrowRight } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconBgColor: string;
  iconSrc?: string;
  onReadMore?: () => void;
}

interface ServiceCardsProps {
  services?: ServiceCard[];
}

const defaultServices: ServiceCard[] = [
  {
    id: "design",
    title: "Design",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo.",
    iconBgColor: "bg-amber-200/20",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo.",
    iconBgColor: "bg-blue-400/10",
  },
  {
    id: "website",
    title: "Website Development", 
    description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo.",
    iconBgColor: "bg-orange-500/10",
  }
];

export default function ServiceCards({ services = defaultServices }: ServiceCardsProps) {
  const handleReadMore = (service: ServiceCard) => {
    if (service.onReadMore) {
      service.onReadMore();
    } else {
      console.log(`Read more clicked for: ${service.title}`);
    }
  };

  return (
    <div className="flex justify-start items-center gap-14 py-20 px-20">
      {services.map((service) => (
        <div 
          key={service.id}
          className="w-96 h-96 relative shadow-[0px_1px_17.100000381469727px_0px_rgba(0,0,0,0.12)]"
        >
          <div className="p-7 left-0 top-0 absolute bg-white rounded-3xl shadow-[1px_0px_5.300000190734863px_1px_rgba(64,64,64,0.27)] outline outline-1 outline-offset-[-1px] flex justify-start items-start gap-2.5 overflow-hidden">
            <div className="w-80 flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                {/* Icon */}
                <div className={`w-24 h-24 relative ${service.iconBgColor} rounded-[61.78px] overflow-hidden flex items-center justify-center`}>
                  {service.iconSrc ? (
                    <img 
                      src={service.iconSrc} 
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 text-xs">Icon</span>
                    </div>
                  )}
                </div>
                
                {/* Title */}
                <h3 className="self-stretch h-10 text-sky-950 text-2xl font-bold font-['Inter'] leading-10">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="w-80 text-stone-950 text-base font-normal font-['Inter'] leading-6">
                  {service.description}
                </p>
              </div>
              
              {/* Read More Link */}
              <div className="self-stretch flex justify-start items-start gap-2.5">
                <button
                  onClick={() => handleReadMore(service)}
                  className="flex items-center gap-2.5 text-stone-950 text-lg font-medium font-['Inter'] leading-6 hover:text-cyan-500 transition-colors group"
                >
                  <span>Read More</span>
                  <ArrowRight 
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}