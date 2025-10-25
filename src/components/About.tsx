import Header from "./ui/Header";
import TextCard from "./ui/TextCard";
import { experience, whatIamDoing } from "@/constants/defaultState";
import RightArrow from "@/assets/RightArrow.svg";

const About = () => {
  return (
    <section className="flex flex-col p-10 gap-11">
      <div>
        <Header text="About Me" />
        <p className="pb-1">
          I am a tech enthusiast. I am passionate about design and frontend,
          goal driven, quick to learn and a highly productive individual. I have
          various industry ready design skills, I am experienced in various
          softwares design tools, with 2+ Years of industrial experience in a
          product based company.{" "}
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </div>

      <div>
        <Header text="What I am doing" />
        <div className="w-full grid grid-cols-2 gap-3">
          {whatIamDoing.map((item) => {
            return (
              <div key={item.id} className="flex-1 min-w-1/2">
                <TextCard title={item.title} description={item.description} />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Header text="Experience" />
        <div className="w-full grid grid-cols-2 gap-3">
          {experience.map((item) => {
            return (
              <div key={item.id} className="flex-1 min-w-1/2">
                <TextCard
                  title={item.title}
                  subTitle={item.subTitle}
                  description={item.description}
                  textContainerStyle="gap-2 w-11/12"
                  icon={RightArrow}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
