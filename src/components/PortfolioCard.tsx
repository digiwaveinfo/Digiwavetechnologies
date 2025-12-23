import { ArrowRight, Smartphone } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export default function PortfolioCard({ title, description, imageUrl, technologies }: PortfolioCardProps) {
  return (
    <div className="w-full rounded-[26px] bg-white shadow-[2px_6px_8.4px_-3px_rgba(64,64,64,0.27)] overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-[200px] sm:h-[285px] bg-primary-cyan flex items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#34B0F5] via-[#034175] to-[#034175]">
          {/* Circular decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] sm:w-[696px] h-[400px] sm:h-[696px] rounded-full bg-[rgba(225,208,255,0.04)] flex items-center justify-center">
              <div className="w-[300px] sm:w-[546px] h-[300px] sm:h-[546px] rounded-full bg-[rgba(225,208,255,0.02)] flex items-center justify-center">
                <div className="w-[200px] sm:w-[346px] h-[200px] sm:h-[346px] rounded-full bg-[rgba(225,208,255,0.02)] flex items-center justify-center">
                  <div className="w-[100px] sm:w-[189px] h-[100px] sm:h-[189px] rounded-full bg-[rgba(225,208,255,0.02)]"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile screenshots - responsive */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-8 px-4">
            <div className="w-[90px] sm:w-[157px] h-[180px] sm:h-[318px] rounded-[8px] sm:rounded-[13px] overflow-hidden border-2 sm:border-4 border-white/10 shadow-lg">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block w-[157px] h-[318px] rounded-[13px] overflow-hidden border-4 border-white/10 shadow-lg">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="w-[90px] sm:w-[157px] h-[180px] sm:h-[318px] rounded-[8px] sm:rounded-[13px] overflow-hidden border-2 sm:border-4 border-white/10 shadow-lg">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 space-y-4 sm:space-y-6">
        {/* Mobile App Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Smartphone className="w-5 h-5 sm:w-7 sm:h-7 text-[#00BFD2]" />
          <span className="text-[#00BFD2] font-medium text-xs sm:text-sm font-poppins">Mobile App</span>
        </div>

        {/* Logo/Brand */}
        <div className="space-y-0">
          <div className="font-alumni text-[28px] sm:text-[38px] font-extrabold leading-tight text-[#37B7FE] tracking-wide">Estate</div>
          <div className="font-alumni text-[28px] sm:text-[38px] font-extrabold leading-tight text-[#034175] tracking-wide text-center -mt-3 sm:-mt-4">Facility</div>
          <p className="text-[#37B7FE] text-center text-[7px] sm:text-[8px] font-semibold tracking-wider font-inter mt-1">All Services One Solution</p>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-[#0F0F10] font-bold text-2xl sm:text-[40px] sm:leading-[60px] font-inter">{title}</h3>
          <p className="text-[#0F0F10] text-sm sm:text-base leading-relaxed font-inter">{description}</p>
        </div>

        {/* Technologies & Arrow */}
        <div className="flex items-center justify-between">
          {/* Technology Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {technologies.map((tech, index) => (
              <div key={index} className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 shadow-sm">
                <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#00BFD2]"></div>
              </div>
            ))}
          </div>

          {/* Arrow Button */}
          <button className="w-[85px] h-[45px] sm:w-[115px] sm:h-[60px] rounded-md bg-[rgba(129,188,255,0.14)] flex items-center justify-center hover:bg-[rgba(129,188,255,0.24)] transition-colors">
            <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-[#034175]" />
          </button>
        </div>
      </div>
    </div>
  );
}