import { profileWidgetDetails } from "@/constants/defaultState";
import Image from "next/image";

const ProfileWidget = () => {
  return (
    <section className="flex justify-center items-center flex-col px-6 py-10 bg-brand-200 w-full rounded-[20px] gap-6  border border-brand-500 h-fit sticky top-10">
      <div className="bg-brand-400 rounded-3xl">
        <Image src={"/Profile.webp"} alt="Priyanshu" height={194} width={194} className="rounded-3xl"/>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-2xl font-extrabold">Priyanshu Bisht</span>
        <span className="bg-brand-300 py-2 px-3 rounded-xl text-xl font-medium">
          Full Stack Developer
        </span>
      </div>
      <div className="border border-brand-500 w-full" />
      <div className="flex flex-col gap-8">
        {profileWidgetDetails.map((item) => {
          return (
            <div key={item.id} className="flex gap-2">
              <Image src={item.icon} alt="Email Logo" height={44} width={44} />
              <div className="flex flex-col gap-1">
                <span className="text-light-300 text-xs font-medium">
                  {item.label}
                </span>
                <span>{item.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileWidget;
