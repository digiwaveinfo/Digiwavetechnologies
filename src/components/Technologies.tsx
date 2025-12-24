"use client";

import { useState } from "react";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Web Platform",
    "Databases",
    "Cloud & DevOps",
    "Mobile Apps",
    "Other Frameworks",
  ];

  const techData: Record<string, { name: string; icon: string }[]> = {
    "Web Platform": [
      { name: "PHP", icon: "🐘" },
      { name: "JavaScript", icon: "JS" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Swift", icon: "🔶" },
      { name: "Typescript", icon: "TS" },
      { name: "Python", icon: "🐍" },
      { name: "G318", icon: "⚙️" },
      { name: "Java", icon: "☕" },
      { name: "Ruby", icon: "💎" },
      { name: "C++", icon: "C++" },
      { name: "React Js", icon: "⚛️" },
      { name: "Laravel", icon: "L" },
    ],
    Databases: [
      { name: "MySQL", icon: "🗄️" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "SQLite", icon: "📄" },
      { name: "Firebase", icon: "🔥" },
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "⛅" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Jenkins", icon: "🔧" },
      { name: "GitHub Actions", icon: "⚡" },
    ],
    "Mobile Apps": [
      { name: "Swift", icon: "🔶" },
      { name: "Kotlin", icon: "K" },
      { name: "React Native", icon: "⚛️" },
      { name: "Flutter", icon: "💙" },
      { name: "Ionic", icon: "📱" },
      { name: "Xamarin", icon: "X" },
    ],
    "Other Frameworks": [
      { name: "Next.js", icon: "▲" },
      { name: "Vue.js", icon: "💚" },
      { name: "Angular", icon: "🅰️" },
      { name: "Django", icon: "🎸" },
      { name: "Spring", icon: "🌱" },
      { name: "Express", icon: "E" },
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
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <div className="text-3xl md:text-4xl">{tech.icon}</div>
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
