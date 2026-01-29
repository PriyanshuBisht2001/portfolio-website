import AddProjectPageComponent from "@/components/AddProjectComponent";
import { fetchProjectByID } from "@/utils/serverAction.ut";

export const revalidate = 0;

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await fetchProjectByID(id);

  return <AddProjectPageComponent existingProject={project} />;
}
