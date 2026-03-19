import Image from "next/image";
import DummyImage from "@/assets/dummyImage.png";

type ProjectFieldTypes = {
  name: string;
  heroImage?: string;
  isHome: boolean;
};

const ProjectCard = ({ name, heroImage, isHome }: ProjectFieldTypes) => {
  return (
    <div className="project-card group transition-all duration-300 hover:-translate-y-2 lg:hover:translate-y-0 hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.4)] lg:hover:shadow-none shrink-0 text-center lg:text-left pb-5 rounded-lg bg-[#1d2647] lg:bg-inherit flex flex-col gap-4 lg:gap-3 hover:cursor-pointer">
      <Image
        src={heroImage || DummyImage}
        alt={name}
        width={400}
        height={192}
        className={`transition-transform duration-500 group-hover:scale-110 rounded-t-lg lg:rounded-2xl h-34 lg:h-48 ${!isHome && "w-full"} w-[200px] md:w-full object-cover`}
        loading="eager"
      />
      <h4 className="text-lg font-semibold lg:text-xl lg:font-bold">{name}</h4>
    </div>
  );
};

export default ProjectCard;
