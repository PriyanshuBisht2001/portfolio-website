import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AddProjectPageComponent from "@/components/AddProjectComponent";

export default async function AddInterceptingProjectPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  return (
    <div className="flex fixed top-0 left-0 right-0 bottom-0 bg-brand-100 px-20 py-10 bg-opacity-50 z-50 animate-slide-up overflow-auto">
      <AddProjectPageComponent />
    </div>
  );
};
