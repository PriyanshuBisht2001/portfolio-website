import { fetchAllProjects } from "@/utils/serverAction.ut";
import MobileSkillComponent from "./MobileSkillComponent";
import Projects from "./Projects";
import GetInTouch from "./GetInTouch";
import TimelineComponent from "./ui/TimelineComponent";
import {
  educationTimeline,
  experienceTimeline,
} from "@/constants/defaultState";

export default async function MobileAbout() {
  const projects = await fetchAllProjects();

  return (
    <div className="w-full lg:hidden">
      <MobileSkillComponent />
      <Projects projectList={projects} />
      <div className="px-5 pt-10">
        <TimelineComponent heading="Experience" items={experienceTimeline} />
      </div>
      <div className="px-5 pt-10">
        <TimelineComponent heading="Education" items={educationTimeline} />
      </div>

      <div className="px-5 py-10 md:bg-[url('/bgwebapps.webp')] md:bg-cover md:bg-center">
        <h3 className="text-[22px] font-semibold text-white mb-4">
          Let’s build something meaningful
        </h3>
        <p className="text-md leading-6 text-gray-400 max-w-xl md:w-2/3">
          I’m Priyanshu, a Full Stack Developer specializing in building fast,
          scalable, and user-focused web applications using Next.js, React,
          Node.js and Graphql. Currently open to full-time opportunities and
          impactful projects.
        </p>
      </div>
      <GetInTouch />
      <footer className="border-t my-8 border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Priyanshu Bisht. All rights reserved.
      </footer>
    </div>
  );
}
