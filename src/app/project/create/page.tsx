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
    <section className="flex w-full absolute top-0 left-0 z-20 lg:static">
      <AddProjectPageComponent />
    </section>
  );
};

export default AddProjectPage;
