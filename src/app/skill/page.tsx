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
    <section className="flex flex-col p-10 w-full">
      <div className="flex flex-col gap-6">
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
