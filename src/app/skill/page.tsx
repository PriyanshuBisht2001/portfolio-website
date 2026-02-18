import Skills from "@/data/skills.json";
import SkillCard from "@/components/ui/SkillCard";
import SkillGrid from "@/components/ui/SkillGrid";
import Cross from "@/assets/CrossIcon.svg";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "@/components/ui/MobileHeader";

interface Skill {
  id: string;
  name: string;
  rating: number;
  desc: string;
  icon: string;
  bgColor: string;
}

type SkillsType = Record<string, Skill[]>;

export default function Skill() {
  const typedSkills = Skills as SkillsType;
  return (
    <section className="flex flex-col w-full absolute lg:static top-0 z-20 bg-[linear-gradient(235deg,#1b1f2e,#2c133d,#301541,#101435)] lg:bg-none">
      <div className="flex flex-col p-10 gap-10 lg:gap-6">
        <div className="flex justify-between">
          <h1 className="text-[28px] md:text-[32px] font-extrabold">
            Technical Proficiencies
          </h1>
          <Link href="/" className="lg:hidden">
            <Image src={Cross} alt="cross" width={40} height={40}/>
          </Link>
        </div>
        {Object.entries(typedSkills).map(([category, skillList]) => (
          <section key={category} className="flex flex-col gap-8 lg:gap-4">
            <h2 className="hidden lg:block text-2xl font-semibold lg:text-secondary-100">
              {category}
            </h2>
            <MobileHeader title={category} />
            {/* mobile view */}
            <SkillGrid skills={skillList} />
            {/* desktop view */}
            <div className="gap-3 lg:grid-cols-2 hidden lg:grid">
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
