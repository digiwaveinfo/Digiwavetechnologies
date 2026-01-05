"use client";

import { useState } from "react";

// Technology icons URLs
const techIcons: Record<string, string> = {
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Ruby": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  "React Js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
};

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Web Platform",
    "Databases",
    "Cloud & DevOps",
    "Mobile Apps",
    "Other Frameworks",
  ];

  const techData: Record<string, { name: string }[]> = {
    "Web Platform": [
      { name: "JavaScript" },
      { name: "Typescript" },
      { name: "Python" },
      { name: "Ruby" },
      { name: "React Js" },
      { name: "Node.js" },
    ],
    Databases: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Firebase" },
    ],
    "Cloud & DevOps": [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Docker" },
      { name: "Kubernetes" },
    ],
    "Mobile Apps": [
      { name: "React Native" },
      { name: "Flutter" },
    ],
    "Other Frameworks": [
      { name: "Next.js" },
      { name: "Django" },
      { name: "Express" },
    ],
  };

  const currentTech = techData[tabs[activeTab]] || techData["Web Platform"];

  return (
    <section className="w-full py-16 md:py-24 bg-white flex flex-col justify-start items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col items-center gap-12 w-full max-w-[1800px]">
        {/* Header */}
        <div className="text-center text-[#00BFD2] text-xl font-medium font-['Poppins']">
          Technologies we used
        </div>
        <div className="text-center text-sky-950 text-3xl md:text-4xl font-bold font-['Poppins']">
          Built Using Future-Ready Technologies
        </div>

        {/* Tabs & Content */}
        <div className="w-full flex flex-col justify-start items-center gap-11">
          {/* Tablist */}
          <div className="w-full max-w-[1075px] h-auto md:h-14 relative bg-[#00BFD2] rounded-[10px] flex flex-wrap md:flex-nowrap justify-center items-center p-2 gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 md:px-6 py-2.5 rounded-[5px] text-center text-sky-950 text-sm md:text-lg font-medium font-['Inter'] leading-4 transition-all whitespace-nowrap ${activeTab === index
                  ? "bg-white shadow-[0px_4px_4px_0px_rgba(174,191,210,0.30)]"
                  : "hover:bg-white/30"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tabpanel */}
          <div className="w-full flex justify-center">
            <div className={`grid gap-6 md:gap-8 ${
              currentTech.length <= 2 
                ? 'grid-cols-2 max-w-md' 
                : currentTech.length <= 3 
                ? 'grid-cols-2 sm:grid-cols-3 max-w-2xl' 
                : currentTech.length <= 4 
                ? 'grid-cols-2 sm:grid-cols-4 max-w-3xl'
                : currentTech.length <= 5
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5 max-w-4xl'
                : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
            }`}>
              {currentTech.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 group cursor-pointer"
                >
                  {/* Icon - no background */}
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <img 
                      src={techIcons[tech.name]} 
                      alt={tech.name}
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                  {/* Tech Name */}
                  <p className="text-stone-950 text-xl font-normal font-['Inter'] leading-5 text-center group-hover:text-[#00BFD2] transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
