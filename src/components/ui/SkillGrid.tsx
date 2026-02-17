import Image from "next/image";

interface Skill {
  id: string;
  name: string;
  icon: string;
  bgColor: string;
}

export default function SkillGrid({
  skills,
  limit = 9,
}: {
  skills: Skill[];
  limit?: number;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:hidden">
      {skills.slice(0, limit).map((skill) => (
        <div
          key={skill.id}
          className={`p-1 rounded-xl bg-linear-to-r ${skill.bgColor}
          text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300`}
        >
          <div className="bg-slate-900 whitespace-nowrap rounded-xl p-5 flex flex-col justify-center items-center">
            <Image
              src={skill.icon}
              alt={`${skill.name} logo`}
              height={40}
              width={40}
              className="mb-3 bg-white p-1 rounded-xl"
            />
            <p className="font-semibold">{skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
