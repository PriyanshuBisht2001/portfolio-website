import Image from "next/image";
import DummyImage from "@/assets/dummyImage.png";

type ProjectFieldTypes = {
  name: string;
  heroImage?: string;
  isHome: boolean;
};

const ProjectCard = ({ name, heroImage, isHome }: ProjectFieldTypes) => {
  return (
    <div className="shrink-0 hover:scale-105 text-center lg:text-left pb-5 rounded-lg bg-[#1d2647] lg:bg-inherit flex flex-col gap-4 lg:gap-3 hover:cursor-pointer">
      <Image
        src={heroImage || DummyImage}
        alt={name}
        width={400}
        height={192}
        className={`rounded-t-lg lg:rounded-2xl h-34 lg:h-48 ${!isHome && "w-full"} w-[200px] md:w-full object-cover`}
        loading="eager"
      />
      <h4 className="text-lg font-semibold lg:text-xl lg:font-bold">{name}</h4>
    </div>
  );
};

export default ProjectCard;
