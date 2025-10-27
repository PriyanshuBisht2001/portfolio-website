"use client";

import {
  ProjectFieldTypes,
  ProjectType,
} from "@/constants/enums";
import { useEffect, useState } from "react";
import Header from "./ui/Header";
import ProjectCard from "./ui/ProjectCard";
import ProjectModal from "./ui/ProjectModal";
import CrossIcon from "@/assets/CrossIcon.svg";
import Image from "next/image";
import AllProjectsSkeleton from "./skeleton/AllProjectsSkeleton";
import SingleProjectSkeleton from "./skeleton/SingleProjectSkeleton";
import { ProjectList } from "@/constants/defaultState";
import { Project } from "@/constants/defaultState"
const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectFieldTypes | null>(null);

  const [loading, setLoading] = useState(false);
  const [projectLoading, setProjectLoading] = useState(false);

  const handleProjectClick = async (id: string) => {
    setProjectLoading(true);
    setSelectedProject(null); // Open the modal immediately
    setSelectedProject(Project);
    setProjectLoading(false);
  };

  useEffect(() => {
    if (selectedProject || projectLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject, projectLoading]);

  return (
    <section className="flex flex-col p-10 w-full">
      <Header text={"Projects"} />
      {loading ? (
        <AllProjectsSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {ProjectList.map((project, i) => (
            <div
              onClick={() => handleProjectClick(project.id)}
              className="hover:cursor-pointer flex w-full"
              key={i}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      )}

      {(selectedProject || projectLoading) && (
        <div className="flex fixed top-0 left-0 right-0 bottom-0 bg-brand-100 px-20 py-10 bg-opacity-50 z-50 animate-slide-up overflow-auto">
          <Image
            onClick={() => setSelectedProject(null)}
            src={CrossIcon}
            alt="Close"
            className="absolute top-18 right-28 hover:cursor-pointer z-60"
          />
          {projectLoading ? (
            <SingleProjectSkeleton />
          ) : (
            selectedProject && <ProjectModal {...selectedProject} />
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
