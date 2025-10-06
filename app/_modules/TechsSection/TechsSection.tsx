import { TECH_ICONS } from "@/app/_constants/techIcons";
import { Section } from "@/components/Section/Section";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip/Tooltip";

export function TechsSection() {
  const formatedTechIcons = TECH_ICONS.map((tech, index) => (
    <Tooltip key={`${tech.name}-tooltip-${index}`}>
      <TooltipTrigger>
        <img alt={tech.name} src={tech.src} />
      </TooltipTrigger>
      <TooltipContent>
        <p>{tech.name}</p>
      </TooltipContent>
    </Tooltip>
  ));

  return (
    <Section
      className="section"
      title="tecnologias"
      description="tecnologias, programas e ferramentas que já  utilizei"
      id="tecnologias"
    >
      <div className="grid grid-cols-5 gap-3 saturate-150 brightness-125">
        {formatedTechIcons}
      </div>
    </Section>
  );
}
