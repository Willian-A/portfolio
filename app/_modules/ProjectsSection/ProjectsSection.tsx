"use client";

import { motion } from "motion/react";
import { useState } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/Tabs/Tab";
import { PROJECT_LIST } from "@/constants/projectsList";
import { Section } from "@/components/Section/Section";

export const ProjectsSection = () => {
  const [currentTab, setCurrentTab] = useState("Boilerplate");

  return (
    <Section
      title="projetos"
      description="projetos que já trabalhei ou fiz parte"
      id="projetos"
      className="section relative"
    >
      <Tabs
        defaultValue="Boilerplate"
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
                whileHover={{
                  scale: currentTab === project.name ? 1.1 : 1.025,
                  opacity: 1,
                  filter: "none",
                }}
                animate={{
                  opacity: currentTab === project.name ? 1 : 0.75,
                  scale: currentTab === project.name ? 1.1 : 1,
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
