import { TECH_NAMES } from "@/app/_constants/tech";
import { Section } from "@/components/Section/Section";

export function TechsSection() {
  const formatedTechIcons = TECH_NAMES.map((tech, index) => (
    <h4
      key={`${tech}-${index}`}
      className="text-center transition-all duration-200 hover:scale-110"
    >
      {tech}
    </h4>
  ));

  return (
    <Section
      className="section"
      title="tecnologias"
      description="tecnologias e ferramentas que já trabalhei"
      id="tecnologias"
    >
      <div className="flex flex-wrap gap-3">{formatedTechIcons}</div>
    </Section>
  );
}
