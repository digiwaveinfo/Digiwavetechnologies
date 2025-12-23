import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import TechBadge from "@/components/TechBadge";

const TECHNOLOGIES = [
  { name: "PHP", color: "#8F9ED1" },
  { name: "JavaScript", color: "#FFC107" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Swift", color: "#FF5722" },
  { name: "Typescript", color: "#0078CF" },
  { name: "Python", color: "#FFD43B" },
  { name: "G318", color: "#050C12" },
  { name: "Java", color: "#DB380E" },
  { name: "Ruby", color: "#9B0A0E" },
  { name: "C++", color: "#00599C" },
  { name: "React Js", color: "#00D8FF" },
  { name: "Laravel", color: "#FF2D20" }
];

export default function ProductTechnologies() {
  return (
    <Section spacing="large">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Technologies we used"
          title="Built Using Future-Ready Technologies"
          centered
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TECHNOLOGIES.map((tech, index) => (
            <TechBadge key={index} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>
    </Section>
  );
}