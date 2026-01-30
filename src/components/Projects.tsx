"use client";

import { ProjectFieldTypes } from "@/constants/enums";
import { useEffect, useState } from "react";
import Header from "./ui/Header";
import ProjectCard from "./ui/ProjectCard";
import ProjectModal from "./ui/ProjectModal";
import CrossIcon from "@/assets/CrossIcon.svg";
import Image from "next/image";
import SingleProjectSkeleton from "./skeleton/SingleProjectSkeleton";
import { Project } from "@/constants/defaultState";
import { useAuth } from "@/contexts/AuthContext";
import { fetchProjectByID } from "@/utils/serverAction.ut";
import Link from "next/link";

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
    <section className="flex flex-col p-10 w-full">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projectList.map((project, i) => (
          <Link key={i} href={`/project/${project.id}`}>
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
