interface TechIntegrationProps {
  title?: string;
  technologies?: string[];
}

export default function TechIntegration({
  title = "Tech Integration",
  technologies = [],
}: TechIntegrationProps) {
  // Don't render if no technologies
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-4 sm:gap-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[60px] text-[#0A2540]">
          {title}
        </h2>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-[70px]">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card flex flex-col items-center gap-3 sm:gap-4"
            >
              {/* Circular Background with Icon */}
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                {/* Background Circle */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a8b5e0] via-[#8F9ED1] to-[#7889c4]"
                />
                {/* Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <TechIcon name={tech} />
                </div>
              </div>

              {/* Tech Name */}
              <div className="text-base sm:text-xl font-normal leading-5 text-center text-[#1a1a1a]">
                {tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tech Icon component with dynamic icon based on tech name
function TechIcon({ name }: { name: string }) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('php')) return <PHPIcon />;
  if (lowerName.includes('javascript') || lowerName.includes('js')) return <JavaScriptIcon />;
  if (lowerName.includes('typescript') || lowerName.includes('ts')) return <TypeScriptIcon />;
  if (lowerName.includes('python')) return <PythonIcon />;
  if (lowerName.includes('react')) return <ReactIcon />;
  if (lowerName.includes('node')) return <NodeIcon />;
  if (lowerName.includes('swift')) return <SwiftIcon />;
  if (lowerName.includes('java') && !lowerName.includes('javascript')) return <JavaIcon />;
  if (lowerName.includes('postgres') || lowerName.includes('sql')) return <PostgreSQLIcon />;
  if (lowerName.includes('mongo')) return <MongoDBIcon />;
  if (lowerName.includes('next')) return <NextJSIcon />;
  if (lowerName.includes('vue')) return <VueIcon />;
  if (lowerName.includes('angular')) return <AngularIcon />;
  if (lowerName.includes('django')) return <DjangoIcon />;
  if (lowerName.includes('flutter')) return <FlutterIcon />;
  if (lowerName.includes('kotlin')) return <KotlinIcon />;
  
  // Default: show first letter
  return (
    <span className="text-white font-bold text-2xl sm:text-3xl">
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

// SVG Icons
function PHPIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">PHP</text>
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#F7DF1E" fontSize="14" fontWeight="bold">JS</text>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#3178C6" fontSize="14" fontWeight="bold">TS</text>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 6 4.02 6 5.5V8h6v1H5.5C3.02 9 1 10.52 1 14c0 3.48 2.02 5 4.5 5H8v-3.5c0-1.93 1.57-3.5 3.5-3.5h5c1.38 0 2.5-1.12 2.5-2.5v-4C19 3.02 17.48 2 12 2zm-2.5 2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" fill="#3776AB"/>
      <path d="M12 22c5.52 0 6-2.02 6-3.5V16h-6v-1h6.5c2.48 0 4.5-1.52 4.5-5 0-3.48-2.02-5-4.5-5H16v3.5c0 1.93-1.57 3.5-3.5 3.5h-5c-1.38 0-2.5 1.12-2.5 2.5v4C5 20.98 6.52 22 12 22zm2.5-2.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#FFD43B"/>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#339933"/>
      <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="#fff"/>
    </svg>
  );
}

function SwiftIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 20.5c1.5 1 4 1.5 7 0 4-2 6-6 6-6s-3 2-6 1c0 0 5-4 7-10-2 2-8 6-8 6s-4-4-6-8c0 0 4 6 4 6s-6-4-8-4c2 2 6 8 6 8s-4-2-6-2c2 2 4 9 4 9z" fill="#FF5722"/>
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#E76F00" fontSize="10" fontWeight="bold">Java</text>
    </svg>
  );
}

function PostgreSQLIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#336791" fontSize="8" fontWeight="bold">PG</text>
    </svg>
  );
}

function MongoDBIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 11 8 11 12C11 16 12 22 12 22C12 22 13 16 13 12C13 8 12 2 12 2Z" fill="#4DB33D"/>
    </svg>
  );
}

function NextJSIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Next</text>
    </svg>
  );
}

function VueIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3L12 21L22 3H17L12 12L7 3H2Z" fill="#42B883"/>
    </svg>
  );
}

function AngularIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 6L4 18L12 22L20 18L22 6L12 2Z" fill="#DD0031"/>
    </svg>
  );
}

function DjangoIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#092E20" fontSize="8" fontWeight="bold">Dj</text>
    </svg>
  );
}

function FlutterIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L4 12L8 16L22 2H14Z" fill="#42A5F5"/>
      <path d="M14 12L8 18L12 22L22 12H14Z" fill="#42A5F5"/>
    </svg>
  );
}

function KotlinIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#7F52FF" fontSize="8" fontWeight="bold">Kt</text>
    </svg>
  );
}
