import ProjectSkeleton from "@/components/skeleton/SingleProjectSkeleton";
import ProjectModal from "@/components/ui/ProjectModal";
import { fetchProjectByID } from "@/utils/serverAction.ut";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function SelectedProjectPage({ params }: Props) {
  const { id } = await params;
  const isValidId = /^[a-fA-F0-9]{24}$/.test(id);

  if (!isValidId) {
    return notFound();
  }

  const project = await fetchProjectByID(id);

  if (!project) {
    return notFound();
  }

  return (
    <section className="flex w-full absolute top-0 left-0 z-20 lg:static">
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectModal {...project} />{" "}
      </Suspense>
    </section>
  );
}
