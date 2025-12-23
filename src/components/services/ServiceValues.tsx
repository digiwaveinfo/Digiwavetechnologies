interface ServiceValue {
  icon: string;
  title: string;
  description: string;
  width?: string;
}

interface ServiceValuesProps {
  values?: ServiceValue[];
}

const defaultValues: ServiceValue[] = [
  {
    icon: "🔥",
    title: "Passionate",
    description: "We are intensely enthusiastic about providing a superior experience.",
    width: "w-64"
  },
  {
    icon: "🤝",
    title: "Respectful", 
    description: "We are polite and kind to one another, even when it gets tough.",
    width: "w-72"
  },
  {
    icon: "🏆",
    title: "Ownership",
    description: "We are empowered to do our jobs and work towards a common goal.",
    width: "w-72"
  },
  {
    icon: "🤝",
    title: "Unified",
    description: "We work as a team and trust each other to create a seamless experience.",
    width: "w-72"
  }
];

export default function ServiceValues({ values = defaultValues }: ServiceValuesProps) {
  return (
    <div className="flex justify-center items-center gap-11 py-20 px-20">
      {values.map((value, index) => (
        <div 
          key={index}
          className={`${value.width || 'w-72'} p-4 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col gap-5`}
        >
          <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
            <div className="text-white text-2xl">{value.icon}</div>
          </div>
          <h3 className="text-sky-700 text-3xl font-semibold">{value.title}</h3>
          <p className="text-black text-base font-normal leading-6">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
}