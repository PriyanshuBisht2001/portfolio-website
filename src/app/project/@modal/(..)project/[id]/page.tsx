import ProjectModal from "@/components/ui/ProjectModal";
import { fetchProjectByID } from "@/utils/serverAction.ut";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InterceptionPage({ params }: Props) {
  const { id } = await params;
  const project = await fetchProjectByID(id);

  return (
    <div className="flex fixed top-0 left-0 right-0 bottom-0 bg-brand-100 px-20 py-10 bg-opacity-50 z-50 animate-slide-up overflow-auto">
      <ProjectModal {...project} />
    </div>
  );
}
