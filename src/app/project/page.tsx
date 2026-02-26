export const revalidate = 604800;
import AddProjectSkeleton from "@/components/skeleton/AllProjectsSkeleton";

import Projects from "@/components/Projects";
import { fetchAllProjects } from "@/utils/serverAction.ut";
import { Suspense } from "react";
const ProjectsPage = async () => {
  const projects = await fetchAllProjects();
  return (
    <section className="h-full lg:flex w-full bg-[linear-gradient(235deg,#1b1f2e,#2c133d,#301541,#101435)] z-20 absolute lg:static top-0">
      <Suspense fallback={<AddProjectSkeleton />}>
        <Projects projectList={projects} isHome={false} />
      </Suspense>
    </section>
  );
};

export default ProjectsPage;
