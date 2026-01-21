import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priyanshu 's Portfolio",
  description: "A fullStack Developer",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      {children}
    </div>
  );
}
