import About from "@/components/About";
import MobileAbout from "@/components/MobileAbout";

export default function Home() {
  return (
    <main className="w-full">
      <MobileAbout />
      <About />
    </main>
  );
}
