import Image from "next/image";
import FilledStar from "@/assets/filledStar.svg";
import WhiteStar from "@/assets/whiteStar.svg";


type SkillCardProps = {
  name: string;
  rating: number;
  desc?: string;
};

const SkillCard = ({ name, rating, desc = "" }: SkillCardProps) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl bg-brand-700 gap-3 w-full">
      <div className="flex flex-col gap-2 lg:flex-row w-full lg:justify-between lg:items-center">
        <h4 className="text-xl lg:text-2xl font-bold">{name}</h4>
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => {
            const filled = i < rating;
            return filled ? (
              <Image
                key={i}
                src={FilledStar}
                height={12}
                width={12}
                alt="Filled Star"
              />
            ) : (
              <Image
                key={i}
                src={WhiteStar}
                height={12}
                width={12}
                alt="White Star"
              />
            );
          })}
        </div>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default SkillCard;
