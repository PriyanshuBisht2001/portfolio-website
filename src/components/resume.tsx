import Header from "./ui/Header";
import TimelineComponent from "./ui/TimelineComponent";
import {
  educationTimeline,
  experienceTimeline,
} from "@/constants/defaultState";

import ExperienceIcon from "@/assets/Experience.svg";
import EducationIcon from "@/assets/Education.svg";
import TextCard from "./ui/TextCard";

const ResumeComponent = () => {
  return (
    <div className="flex flex-col p-10">
      <Header text="Resume" />

      <div className="flex flex-col gap-11">
        <TimelineComponent
          heading="Experience"
          items={experienceTimeline}
          icon={ExperienceIcon}
        />
      </div>
      <div className="flex flex-col gap-11">
        <TimelineComponent
          heading="Education"
          items={educationTimeline}
          icon={EducationIcon}
        />
      </div>
    </div>
  );
};

export default ResumeComponent;
