import Image from "next/image";
import DummyImage from "@/assets/dummyImage.png";

type ProjectFieldTypes = {
  name: string;
  heroImage?: string;
};

const ProjectCard = ({ name, heroImage }: ProjectFieldTypes) => {
  return (
    <div className="flex flex-col gap-3 hover:cursor-pointer">
      <Image
        src={heroImage || DummyImage}
        alt={name}
        width={400}
        height={192}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="rounded-2xl h-48 object-cover"
        loading="eager"
      />
      <h4 className="text-xl font-bold">{name}</h4>
    </div>
  );
};

export default ProjectCard;
