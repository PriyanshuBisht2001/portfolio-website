import Header from "./ui/Header";
import TextCard from "./ui/TextCard";
import { experience, whatIamDoing } from "@/constants/defaultState";
import RightArrow from "@/assets/RightArrow.svg";

const About = () => {
  return (
    <section className="hidden lg:flex flex-col p-10 gap-11">
      <div>
        <Header text="About Me" />
        <p className="pb-1">
          As a dedicated and innovative Software Developer, I bring over 1.9
          years of experience in designing, developing, and optimizing web and
          mobile applications. I specialize in modern JavaScript frameworks like
          React, Next.js, and Node.js to build user-friendly and
          performance-driven solutions.
        </p>
        <p>
          I am passionate about creating meaningful solutions that address
          real-world problems and always strive to learn and implement
          cutting-edge technologies. I am actively seeking opportunities where I
          can contribute my technical skills and problem-solving abilities to
          drive innovation and deliver exceptional value.
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
