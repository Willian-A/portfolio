"use client";

import {
  Section,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components";
import { motion } from "motion/react";
import { useState } from "react";

const PROJECT_LIST = [
  {
    id: 1,
    name: "Project 1",
    descriptions: [
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Etiam consequat imperdiet enim ut varius. Sed nunc dolor, scelerisque quis dignissim vel, hendrerit facilisis augue.  Nunc massa arcu, varius sed quam non, commodo elementum odio. Nullam  vehicula justo et maximus commodo. Ut sed malesuada turpis.",
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut.",
    ],
    techs: ["react", "next.js", "tailwind css", "typescript", "zod", "axios"],
    images: [
      {
        url: "https://placehold.co/275x230",
      },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    descriptions: [
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Etiam consequat imperdiet enim ut varius. Sed nunc dolor, scelerisque quis dignissim vel, hendrerit facilisis augue.  Nunc massa arcu, varius sed quam non, commodo elementum odio. Nullam  vehicula justo et maximus commodo. Ut sed malesuada turpis.",
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut.",
    ],
    techs: ["react", "next.js", "tailwind css", "typescript", "zod", "axios"],
    images: [
      {
        url: "https://placehold.co/275x230",
      },
    ],
  },
  {
    id: 3,
    name: "Project 3",
    descriptions: [
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Etiam consequat imperdiet enim ut varius. Sed nunc dolor, scelerisque quis dignissim vel, hendrerit facilisis augue.  Nunc massa arcu, varius sed quam non, commodo elementum odio. Nullam  vehicula justo et maximus commodo. Ut sed malesuada turpis.",
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut.",
    ],
    techs: ["react", "next.js", "tailwind css", "typescript", "zod", "axios"],
    images: [
      {
        url: "https://placehold.co/275x230",
      },
    ],
  },
  {
    id: 4,
    name: "Project 4",
    descriptions: [
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Etiam consequat imperdiet enim ut varius. Sed nunc dolor, scelerisque quis dignissim vel, hendrerit facilisis augue.  Nunc massa arcu, varius sed quam non, commodo elementum odio. Nullam  vehicula justo et maximus commodo. Ut sed malesuada turpis.",
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut.",
    ],
    techs: ["react", "next.js", "tailwind css", "typescript", "zod", "axios"],
    images: [
      {
        url: "https://placehold.co/275x230",
      },
    ],
  },
];

export const ProjectsSection = () => {
  const [currentTab, setCurrentTab] = useState("Project 1");

  return (
    <Section
      title="projetos"
      description="projetos que já trabalhei ou fiz parte"
      id="projetos"
      className="section relative"
    >
      <Tabs
        defaultValue="Project 1"
        className="mt-4"
        onValueChange={setCurrentTab}
      >
        <TabsList className="w-full gap-1 md:gap-2">
          {PROJECT_LIST.map((project) => (
            <TabsTrigger
              key={project.id}
              value={project.name}
              className="relative mb-2 transition-opacity"
            >
              <motion.img
                className="rounded"
                src={project.images[0].url}
                alt={`Cover image from ${project.name}`}
                whileHover={{ scale: 1.02, opacity: 1, filter: "none" }}
                whileTap={{ scale: 1, opacity: 1, filter: "none" }}
                animate={{
                  opacity: currentTab === project.name ? 1 : 0.75,
                  scale: currentTab === project.name ? 1.02 : 1,
                  filter: currentTab === project.name ? "none" : "blur(1px)",
                }}
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {PROJECT_LIST.map((project) => (
          <TabsContent value={project.name} key={project.id}>
            <div className="px-1">
              <h3 className="mb-2">{project.name}</h3>
              <p className="text-text-secondary mb-3">
                {project.descriptions[0]}
              </p>
              <p className="text-text-secondary mb-4">
                {project.descriptions[1]}
              </p>
              <h4 className="mb-1">tecnologias usadas</h4>
              <p className="font-light">{project.techs.join(" - ")}</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
};
