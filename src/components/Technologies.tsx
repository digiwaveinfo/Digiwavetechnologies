"use client";

import { useState } from "react";

// Technology icons URLs
const techIcons: Record<string, string> = {
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Swift": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "Typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Go": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Ruby": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "React Js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Ionic": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
  "Xamarin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  "Spring": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
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
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "PostgreSQL" },
      { name: "Swift" },
      { name: "Typescript" },
      { name: "Python" },
      { name: "Go" },
      { name: "Java" },
      { name: "Ruby" },
      { name: "C++" },
      { name: "React Js" },
      { name: "Laravel" },
    ],
    Databases: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "SQLite" },
      { name: "Firebase" },
    ],
    "Cloud & DevOps": [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
      { name: "GitHub Actions" },
    ],
    "Mobile Apps": [
      { name: "Swift" },
      { name: "Kotlin" },
      { name: "React Native" },
      { name: "Flutter" },
      { name: "Ionic" },
      { name: "Xamarin" },
    ],
    "Other Frameworks": [
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Angular" },
      { name: "Django" },
      { name: "Spring" },
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
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
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
    </section>
  );
}
