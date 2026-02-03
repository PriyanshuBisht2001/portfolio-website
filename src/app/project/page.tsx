export const revalidate = 604800;

import Projects from "@/components/Projects";
import { fetchAllProjects } from "@/utils/serverAction.ut";
const ProjectsPage = async () => {
  const projects = await fetchAllProjects();
  return (
    <section className="flex w-full">
        <Projects projectList={projects} />
    </section>
  );
};

export default ProjectsPage;
