import Link from "next/link";

interface PortfolioCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  tag?: string;
  subtitle?: string;
}

export default function PortfolioCard({ id, title, description, imageUrl, technologies, tag = "Mobile App", subtitle = "All Services One Solution" }: PortfolioCardProps) {
  // Split title into two parts for the styled display on the right
  const titleParts = title.split(' ');
  const firstWord = titleParts[0] || '';
  const restWords = titleParts.slice(1).join(' ') || '';

  return (
    <div className="w-full">
      <div className="relative w-full h-[520px] rounded-[20px] bg-white shadow-[2px_6px_8.4px_-3px_rgba(64,64,64,0.27)] overflow-hidden flex flex-col">
        {/* Top Section - Simple Image */}
        <div className="relative w-full h-[220px] flex-shrink-0 overflow-hidden">
          <img
            src={imageUrl || "/portfolio-card-image.png"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="relative px-5 pt-4 pb-5 flex flex-col flex-1">
          {/* Top Row - Tag and Styled Title */}
          <div className="flex items-start justify-between mb-4">
            {/* Tag Label */}
            <div className="flex items-center gap-2">
              <MobileIcon />
              <span className="text-[#00BFD2] font-medium text-sm">{tag}</span>
            </div>

            {/* Project Name - Styled on Right */}
            <div className="text-right hidden md:block flex-shrink-0">
              <h3 className="text-[#37B7FE] font-['Alumni_Sans'] text-[24px] font-extrabold leading-[26px] tracking-[0.3px] whitespace-nowrap">{firstWord}</h3>
              {restWords && (
                <h3 className="text-[#034175] font-['Alumni_Sans'] text-[24px] font-extrabold leading-[24px] tracking-[0.3px] whitespace-nowrap">{restWords}</h3>
              )}
              <p className="text-[#37B7FE] text-[7px] font-semibold leading-[9px] tracking-[0.1px] mt-0.5 whitespace-nowrap">{subtitle}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-black font-bold text-lg leading-tight mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{title}</h1>
            <p className="text-black text-sm leading-relaxed line-clamp-4">{description}</p>
          </div>

          {/* Bottom Section - Tech Icons and Arrow */}
          <div className="flex items-center justify-between mt-auto pt-3">
            {/* Tech Icons */}
            <div className="flex items-center gap-2">
              {technologies.slice(0, 3).map((tech, index) => (
                <TechIcon key={index} name={tech} />
              ))}
            </div>

            {/* Arrow Button */}
            <Link
              href={`/portfolio/${id}`}
              className="flex items-center justify-center w-[80px] h-[48px] rounded-[5px] bg-[rgba(129,188,255,0.14)] hover:bg-[rgba(129,188,255,0.24)] transition-colors"
              aria-label="Learn more"
            >
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tech Icon Wrapper with dynamic icon based on tech name
function TechIcon({ name }: { name: string }) {
  const getIcon = () => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('php')) return <PHPIconSmall />;
    if (lowerName.includes('swift')) return <SwiftIconSmall />;
    if (lowerName.includes('python')) return <PythonIcon />;
    if (lowerName.includes('react')) return <ReactIcon />;
    if (lowerName.includes('node')) return <NodeIcon />;
    if (lowerName.includes('java')) return <JavaIcon />;
    // Default icon with first letter
    return <span className="text-white font-bold text-sm">{name.charAt(0).toUpperCase()}</span>;
  };

  return (
    <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#a8b5e0] via-[#8F9ED1] to-[#7889c4] flex items-center justify-center shadow-sm" title={name}>
      {getIcon()}
    </div>
  );
}

// SVG Icons
function MobileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_92_2300)">
        <path d="M7.25 6.04167C7.25 5.40073 7.50461 4.78604 7.95783 4.33283C8.41104 3.87961 9.02573 3.625 9.66667 3.625H19.3333C19.9743 3.625 20.589 3.87961 21.0422 4.33283C21.4954 4.78604 21.75 5.40073 21.75 6.04167V22.9583C21.75 23.5993 21.4954 24.214 21.0422 24.6672C20.589 25.1204 19.9743 25.375 19.3333 25.375H9.66667C9.02573 25.375 8.41104 25.1204 7.95783 24.6672C7.50461 24.214 7.25 23.5993 7.25 22.9583V6.04167Z" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.2915 4.83325H15.7082" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 20.5417V20.5533" stroke="#00BFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_92_2300">
          <rect width="29" height="29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_92_1959)">
        <path d="M6.125 24.5H42.875" stroke="#034175" strokeWidth="4.08333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36.75 30.625L42.875 24.5L36.75 18.375" stroke="#034175" strokeWidth="4.08333" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_92_1959">
          <rect width="49" height="49" fill="white" transform="matrix(0 -1 1 0 0 49)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PHPIconSmall() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_92_2318)">
        <mask id="mask0_92_2318" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="-6" y="-6" width="36" height="36">
          <path d="M29.4029 -5.15308H-5.15332V29.4032H29.4029V-5.15308Z" fill="white" />
        </mask>
        <g mask="url(#mask0_92_2318)">
          <path d="M29.4029 12.125C29.4029 13.1702 29.3099 14.1935 29.1322 15.1871C27.6871 23.2691 20.6221 29.4032 12.1248 29.4032C5.72274 29.4032 0.133786 25.9214 -2.85074 20.7479C-3.57926 19.4863 -4.15186 18.1245 -4.544 16.6879C-4.94173 15.2344 -5.15332 13.704 -5.15332 12.125C-5.15332 2.58261 2.58237 -5.15308 12.1248 -5.15308C20.0008 -5.15308 26.6455 0.116413 28.7266 7.3224C29.1667 8.84712 29.4029 10.4586 29.4029 12.125Z" fill="#8F9ED1" />
          <path d="M3.63296 6.87671H-2.73034L-4.54346 16.6878C-4.15133 18.1244 -3.57872 19.4862 -2.8502 20.7479H-2.25991L-1.55752 16.9481H1.93898C6.19643 16.9481 7.34103 13.1258 7.61542 11.2484C7.89048 9.37179 6.51738 6.87671 3.63296 6.87671ZM4.5561 11.565C4.40029 12.6292 3.61393 14.7963 1.20063 14.7963H-1.15978L-0.104737 9.08613H2.298C4.64007 9.08613 4.71197 10.5009 4.5561 11.565Z" fill="#F2F2F2" />
          <path d="M28.7271 7.32218C28.1862 7.04288 27.5416 6.87646 26.7969 6.87646H20.4336L17.8701 20.7477H20.904L21.6064 16.9479H25.1029C26.9965 16.9479 28.2743 16.1919 29.1326 15.1869C29.3104 14.1932 29.4035 13.1699 29.4035 12.1248C29.4035 10.4584 29.1673 8.8469 28.7271 7.32218ZM27.7201 11.5648C27.5642 12.629 26.7779 14.7962 24.3639 14.7962H22.0042L23.0593 9.08594H25.462C27.8041 9.08594 27.8759 10.5007 27.7201 11.5648Z" fill="#F2F2F2" />
          <path d="M15.7183 6.92243C14.4835 6.92243 12.8361 6.92243 12.0334 6.92243L12.7251 3.17993H9.70367L7.14014 17.0507H10.1615L11.6357 9.07402C12.1804 9.07402 12.9039 9.07402 13.5667 9.07402C14.8485 9.07402 15.7183 9.34877 15.5351 10.539C15.352 11.7292 14.2992 16.9937 14.2992 16.9937H17.3662C17.3662 16.9937 18.5565 11.1341 18.7396 9.48602C18.9228 7.83799 17.4121 6.92243 15.7183 6.92243Z" fill="#F2F2F2" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_92_2318">
          <rect width="34.5563" height="34.5563" fill="white" transform="translate(-5.15332 -5.15308)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SwiftIconSmall() {
  return (
    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_92_2330)">
        <path d="M15.6522 -2.59448C28.9781 6.29826 24.6568 16.0701 24.6568 16.0701C24.6568 16.0701 28.442 20.2588 26.9207 23.9284C26.9207 23.9284 25.3502 21.3652 22.7433 21.3652C20.2237 21.3652 18.7327 23.9284 13.646 23.9284C2.33206 23.9284 -3.03125 14.6568 -3.03125 14.6568C7.1649 21.2496 14.131 16.5778 14.131 16.5778C9.52734 13.9672 -0.236874 1.46542 -0.236874 1.46542C8.27507 8.57169 11.9485 10.4377 11.9485 10.4377C9.73953 8.66451 3.58433 -0.0255504 3.58433 -0.0255504C8.50999 4.86035 18.3007 11.673 18.3007 11.673C21.1084 4.14425 15.6522 -2.59448 15.6522 -2.59448Z" fill="#FF5722" />
      </g>
      <defs>
        <clipPath id="clip0_92_2330">
          <rect width="30.3125" height="26.675" fill="white" transform="translate(-3.03125 -2.67041)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_92_2335)">
        <mask id="mask0_92_2335" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
          <path d="M19.4 0H0V19.4H19.4V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_92_2335)">
          <path d="M9.58623 0.000158579C8.79501 0.00383397 8.03944 0.0713174 7.37463 0.188968C5.41608 0.534985 5.06048 1.25919 5.06048 2.59479V4.35872H9.68868V4.94667H5.06048H3.32354C1.97845 4.94667 0.800626 5.75514 0.432253 7.29313C0.00730952 9.05604 -0.0115221 10.1561 0.432253 11.997C0.761257 13.3671 1.54692 14.3434 2.892 14.3434H4.48329V12.2289C4.48329 10.7012 5.80503 9.35371 7.37463 9.35371H11.9975C13.2843 9.35371 14.3116 8.29417 14.3116 7.00182V2.59479C14.3116 1.34054 13.2534 0.398314 11.9975 0.188968C11.2024 0.0566156 10.3774 -0.00351681 9.58623 0.000158579ZM7.08332 1.41886C7.56135 1.41886 7.95178 1.81565 7.95178 2.30349C7.95178 2.78963 7.56135 3.18275 7.08332 3.18275C6.60354 3.18275 6.21487 2.78963 6.21487 2.30349C6.21487 1.81561 6.60354 1.41886 7.08332 1.41886Z" fill="url(#paint0_linear_92_2335)" />
          <path d="M14.8888 4.94661V7.00181C14.8888 8.59515 13.5379 9.93624 11.9976 9.93624H7.37465C6.10844 9.93624 5.06055 11.02 5.06055 12.2881V16.6952C5.06055 17.9494 6.15124 18.6872 7.37465 19.047C8.83972 19.4778 10.2446 19.5557 11.9976 19.047C13.1627 18.7097 14.3116 18.0308 14.3116 16.6952V14.9313H9.68877V14.3433H14.3116H16.6258C17.9708 14.3433 18.4721 13.4051 18.9399 11.9968C19.4231 10.547 19.4025 9.15284 18.9399 7.29305C18.6075 5.95397 17.9726 4.94653 16.6258 4.94653L14.8888 4.94661ZM12.2889 16.1072C12.7686 16.1072 13.1573 16.5003 13.1573 16.9865C13.1573 17.4743 12.7686 17.8711 12.2889 17.8711C11.8108 17.8711 11.4204 17.4743 11.4204 16.9865C11.4203 16.5003 11.8107 16.1072 12.2889 16.1072Z" fill="url(#paint1_linear_92_2335)" />
        </g>
      </g>
      <defs>
        <linearGradient id="paint0_linear_92_2335" x1="-0.34716" y1="0.55171" x2="10.3274" y2="9.65489" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A9FD4" />
          <stop offset="1" stopColor="#306998" />
        </linearGradient>
        <linearGradient id="paint1_linear_92_2335" x1="14.3439" y1="15.3135" x2="10.5158" y2="9.94521" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD43B" />
          <stop offset="1" stopColor="#FFE873" />
        </linearGradient>
        <clipPath id="clip0_92_2335">
          <rect width="19.4" height="19.4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}


function ReactIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#339933"/>
      <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="#fff"/>
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.762.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218" fill="#5382A1"/>
      <path d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573" fill="#E76F00"/>
    </svg>
  );
}
