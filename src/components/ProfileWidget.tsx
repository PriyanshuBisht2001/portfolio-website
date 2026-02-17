import { profileWidgetDetails } from "@/constants/defaultState";
import Image from "next/image";
import Menu from "@/assets/Menu.svg";
import TypingText from "./ui/TypingText";

const ProfileWidget = () => {
  return (
    <section className="h-[460px] bg-[linear-gradient(135deg,#1b1f2e,#020617,#301541,#101435,#DB2777)] relative lg:sticky top-0 lg:top-10 flex justify-center items-center flex-col lg:px-6 lg:py-10 lg:bg-none lg:bg-brand-200 w-full lg:rounded-[20px] gap-6 border border-brand-500 lg:h-fit">
      <div className="bg-brand-400 rounded-3xl">
        <Image
          src={Menu}
          alt="Menu"
          height={44}
          width={44}
          className="absolute top-8 right-2 lg:hidden"
        />
        <Image
          src="/mobile_profile.png"
          alt="Priyanshu"
          width={500}
          height={500}
          priority
          placeholder="empty"
          className="absolute z-10 top-[120px] right-0 w-[clamp(199px,39vw,480px)] h-[clamp(230px,46vw,470px)] lg:hidden bg-transparent object-contain"
        />
        <Image
          src="/mobile_hero_section_bg.webp"
          alt="hero-section-bg"
          width={1920}
          height={150}
          sizes="100vw"
          priority
          className="absolute top-[150px] left-0 w-full h-[clamp(180px,34vw,350px)] object-cover lg:hidden"
        />
        <Image
          src={"/Profile.webp"}
          alt="Priyanshu"
          height={194}
          width={194}
          priority
          className="hidden lg:block rounded-3xl"
        />
      </div>
      <div className="absolute top-[30px] left-4 lg:static flex flex-col gap-1 lg:items-center">
        <span className="bg-linear-to-r from-[#feab71] via-[#ff81ad] to-[#f848b8] bg-clip-text text-transparent lg:bg-none lg:text-white font-black text-[clamp(34px,9vw,42px)] lg:text-2xl lg:font-extrabold">
          Priyanshu Bisht
        </span>
        <span className="font-medium text-[clamp(20px,5vw,23px)] lg:bg-brand-300 lg:py-2 lg:px-3 lg:rounded-xl lg:text-xl lg:font-medium">
          Full Stack Developer
        </span>
      </div>
      <div className="absolute z-10 top-52 left-2 lg:hidden">
        <span className="font-semibold text-white text-[clamp(12px,3vw,26px)]">Building Scalable Web Experiences</span>
        <p className="font-extrabold text-[clamp(26px,5vw,36px)] mb-2">
         What I Specialize In
        </p>
          <TypingText />
      </div>
      <div className="top-40 relative flex lg:hidden gap-4 md:w-full md:pl-3 z-20">
        <button className="bg-linear-to-r from-[#ed935d] via-[#d72961] to-[#d42780] py-3 px-5 min-w-[clamp(160px,35vw,200px)] rounded-2xl border-2">
          Hire Me
        </button>
        <button className="bg-linear-to-r from-[#574ca8] via-[#4b32b2] to-[#4c38b7] py-3 px-5 min-w-[clamp(160px,35vw,200px)] rounded-2xl border-2">
          Download CV
        </button>
      </div>
      <div className="border border-brand-500 w-full hidden lg:block" />
      <div className="flex-col gap-8 hidden lg:flex">
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
