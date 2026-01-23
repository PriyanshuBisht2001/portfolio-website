import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AddProjectPageComponent from "@/components/AddProjectComponent";

const AddProjectPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  return (
    <section className="flex w-full">
      <AddProjectPageComponent />
    </section>
  );
};

export default AddProjectPage;
