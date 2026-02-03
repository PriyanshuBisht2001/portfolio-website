import Skills from "@/data/skills.json";
import SkillCard from "@/components/ui/SkillCard";

interface Skill {
  id: string;
  name: string;
  rating: number;
  desc: string;
}

type SkillsType = Record<string, Skill[]>;

export default function Skill() {
  const typedSkills = Skills as SkillsType;

  return (
    <section className="flex flex-col w-full">
      <div className="flex pt-10 lg:pt-0 items-center content-center justify-center w-full gap-4 lg:hidden">
        <div className="h-0.5 w-1/3 bg-linear-to-r from-transparent to-[#a3a7af]" />
        <h2 className="text-white text-xl font-semibold">My Skills</h2>
        <div className="h-0.5 w-1/3 bg-linear-to-r to-transparent from-[#a3a7af]" />
      </div>

      <div className="flex flex-col p-10 gap-6">
        {Object.entries(typedSkills).map(([category, skillList]) => (
          <section key={category} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-secondary-100">
              {category}
            </h2>

            <div className="grid gap-3 lg:grid-cols-2">
              {skillList.map((skill) => (
                <SkillCard key={skill.id} {...skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
