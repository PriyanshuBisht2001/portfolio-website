import ProjectModal from "@/components/ui/ProjectModal";
import { fetchProjectByID } from "@/utils/serverAction.ut";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function SelectedProjectPage({ params }: Props) {
      const { id } = await params;
      const project = await fetchProjectByID(id);
  return (
    <section className="flex w-full">
      <ProjectModal {...project} />{" "}
    </section>
  );
};
