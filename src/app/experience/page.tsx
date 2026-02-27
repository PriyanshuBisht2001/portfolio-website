import Image from "next/image";
import Link from "next/link";
import Cross from "@/assets/CrossIcon.svg";
import { experienceTimeline } from "@/constants/defaultState";

export default function ExperiencePage() {
  return (
    <div className="flex absolute top-0 left-0 lg:static z-20 flex-col px-10 pt-10 pb-10 lg:pt-20 xl:pt-10 gap-10 lg:gap-6 bg-[linear-gradient(235deg,#1b1f2e,#2c133d,#301541,#101435)] lg:bg-none">
      <div className="flex justify-between">
        <h1 className="text-[28px] md:text-[32px] font-extrabold">
          Experience
        </h1>
        <Link href="/" className="lg:hidden">
          <Image src={Cross} alt="cross" width={40} height={40} />
        </Link>
      </div>
      {experienceTimeline.map((item, i) => (
        <div
          key={i}
          className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10"
        >
          <div className="relative bg-linear-to-br from-purple-900/60 to-indigo-900/40 backdrop-blur-xl overflow-hidden rounded-lg border border-purple-400/20 z-30 shadow-soft-inset transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-card-hover">
            <span className="bg-purple-500/20 text-purple-200 border border-purple-400/30 backdrop-blur-md py-2 px-3 flex items-center justify-center w-fit rounded-br-lg text-xs md:text-sm">
              {item.workType}
            </span>
            <div className="relative p-4 pt-2 flex flex-col gap-3">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold text-white">
                  {item.title}
                </h1>
                <p className="text-sm md:text-base text-purple-300">
                  {item.subtitle}
                </p>
              </div>
              <div className="flex text-purple-200 border items-center gap-2 text-sm  bg-purple-500/10 px-3 py-2 rounded-md border-l-2 border-purple-500 mb-2">
                <span className="flex items-center gap-1">Noida, India</span>
                <span>*</span>
                <span>
                  {item.startDate} - {item.endDate}
                </span>
              </div>
              {item.workOn && (
                <div className="text-gray-300 flex flex-col gap-1">
                  Notable Work:{" "}
                  <div className="flex gap-2 overflow-x-auto no-scrollbar">
                    {item.workOn?.map((title) => (
                      <span className="shrink-0 px-2 py-1 text-sm bg-linear-to-r from-purple-500/20 via-transparent to-purple-500/20 border border-purple-500 text-white rounded-full">
                        {title}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <p className=" text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
                {item.techStack && (
                  <p className="mt-2 text-gray-300 flex flex-col text-sm md:text-base">
                    Tech Stack: <span>{item.techStack?.join(", ")}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
