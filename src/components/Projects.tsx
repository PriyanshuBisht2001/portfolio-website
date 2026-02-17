"use client";

import Header from "./ui/Header";
import ProjectCard from "./ui/ProjectCard";
import { Project } from "@/constants/defaultState";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import MobileHeader from "./ui/MobileHeader";

interface Project {
  id: string;
  name: string;
  heroImage: string;
  overview: string;
  challenge: string;
  photos: string[];
  details: string[];
  url: string;
}
interface ProjectsProps {
  projectList: Project[];
}

const Projects = ({ projectList }: ProjectsProps) => {
  const { isAdmin } = useAuth();

  return (
    <section className="flex flex-col p-5 lg:p-10 w-full">
      <div className="flex py-10 lg:pt-0 items-center content-center justify-center w-full gap-4 lg:hidden">
        <div className="h-0.5 w-1/4 sm:w-1/3 bg-linear-to-r from-transparent to-[#a3a7af]" />
        <h2 className="text-white whitespace-nowrap text-2xl md:text-3xl font-semibold">
          Top Projects
        </h2>
        <div className="h-0.5 w-1/4 sm:w-1/3 bg-linear-to-r to-transparent from-[#a3a7af]" />
      </div>

      <Header text={"Projects"} />
      {isAdmin && (
        <div
          onClick={() => {
            window.location.href = "project/add";
          }}
          className="flex mb-4 px-6 py-1 justify-center rounded-xl bg-secondary-100 hover:cursor-pointer hover:bg-secondary-100/80"
        >
          Add Project
        </div>
      )}
      <div className="w-full">
        <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto pb-4">
          {projectList.map((project, i) => (
            <Link key={i} href={`/project/${project.id}`} className="shrink-0">
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
