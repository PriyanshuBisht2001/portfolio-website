"use client";

import { useEffect, useMemo, useState } from "react";
import Skills from "@/data/skills.json";
import SkillGrid from "./ui/SkillGrid";
import Image from "next/image";
import NavigationRight from "@/assets/NavigationRight.svg";
import { useRouter } from "next/navigation";

export default function MobileSkillComponent() {
  const [limit, setLimit] = useState(9);
  const router = useRouter();

  const skills = useMemo(() => {
    return Object.values(Skills).flat();
  }, [Skills]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setLimit(10);
      } else if (width < 1024) {
        setLimit(9);
      } else {
        setLimit(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [limit]);

  return (
    <>
      <div className="flex py-10 lg:pt-0 items-center content-center justify-center w-full gap-4 lg:hidden">
        <div className="h-0.5 w-1/4 sm:w-1/3 bg-linear-to-r from-transparent to-[#a3a7af]" />
        <h2 className="text-white text-2xl md:text-3xl font-semibold">
          My Skills
        </h2>
        <div className="h-0.5 w-1/4 sm:w-1/3 bg-linear-to-r to-transparent from-[#a3a7af]" />
      </div>
      <div className="px-5">
        <SkillGrid skills={skills} limit={limit} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => router.push("/skill")}
          className="mt-10 p-4 md-p-5 items-center text-lg md:text-xl font-semibold lg:hidden border-2 border-white rounded-2xl bg-[linear-gradient(360deg,#254597,#282a61,#442965,#5f2d77,#a75170)] min-w-[clamp(160px,45vw,400px)]"
        >
          View All Skills
          <Image
            src={NavigationRight}
            alt="View All Skills"
            width={20}
            height={20}
            className="inline-block ml-2"
          />
        </button>
      </div>
    </>
  );
}
