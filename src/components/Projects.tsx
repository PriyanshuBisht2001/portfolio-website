"use client";

import Header from "./ui/Header";
import ProjectCard from "./ui/ProjectCard";
import { Project } from "@/constants/defaultState";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cross from "@/assets/CrossIcon.svg";

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
  isHome: boolean;
}

const Projects = ({ projectList, isHome }: ProjectsProps) => {
  const { isAdmin } = useAuth();
  const router = useRouter();

  return (
    <section
      className={`flex flex-col lg:p-10 w-full ${isHome ? "p-5" : "p-10"}`}
    >
      <div className="lg:pt-0 w-full">
        {isHome ? (
          <div className="flex py-10 items-center content-center justify-center gap-4 lg:hidden">
            <div className="h-0.5 w-1/4 sm:w-1/3 bg-linear-to-r from-transparent to-[#a3a7af]" />
            <h2 className="text-white whitespace-nowrap text-2xl md:text-3xl font-semibold">
              Top Projects
            </h2>
            <div className="h-0.5 w-1/4 sm:w-1/3 bg-linear-to-r to-transparent from-[#a3a7af]" />
          </div>
        ) : (
          <div className="flex justify-between mb-10">
            <h1 className="text-[28px] md:text-[32px] font-extrabold">
              Featured Projects
            </h1>
            <Link href="/" className="lg:hidden">
              <Image src={Cross} alt="cross" width={40} height={40} />
            </Link>
          </div>
        )}
      </div>
      <Header text={"Projects"} />
      {isAdmin && (
        <div
          onClick={() => {
            router.push("/project/create");
          }}
          className="flex mb-4 px-6 py-1 justify-center rounded-xl bg-secondary-100 hover:cursor-pointer hover:bg-secondary-100/80"
        >
          Add Project
        </div>
      )}
      <div className="w-full">
        <div
          className={`flex ${isHome ? "flex-row gap-4" : "flex-col gap-6"} md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto pb-4`}
        >
          {projectList.map((project, i) => (
            <Link key={i} href={`/project/${project.id}`} className="shrink-0">
              <ProjectCard {...project} isHome={isHome} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
