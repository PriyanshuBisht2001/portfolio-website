import ProjectSkeleton from "@/components/skeleton/SingleProjectSkeleton";
import ProjectModal from "@/components/ui/ProjectModal";
import { fetchProjectByID } from "@/utils/serverAction.ut";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InterceptionPage({ params }: Props) {
  const { id } = await params;
  const project = await fetchProjectByID(id);

  return (
    <div className="no-scrollbar flex fixed top-0 left-0 right-0 bottom-0 bg-[linear-gradient(235deg,#1b1f2e,#2c133d,#301541,#101435)] lg:bg-none lg:bg-brand-100 lg:px-20 lg:py-10 bg-opacity-50 z-50 animate-slide-up overflow-auto">
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectModal {...project} />
      </Suspense>
    </div>
  );
}
