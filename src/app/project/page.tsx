export const revalidate = 604800;
import AddProjectSkeleton from "@/components/skeleton/AllProjectsSkeleton";

import Projects from "@/components/Projects";
import { fetchAllProjects } from "@/utils/serverAction.ut";
import { Suspense } from "react";
const ProjectsPage = async () => {
  const projects = await fetchAllProjects();
  return (
    <section className="flex w-full">
      <Suspense fallback={<AddProjectSkeleton />}>
        <Projects projectList={projects} />
      </Suspense>
    </section>
  );
};

export default ProjectsPage;
