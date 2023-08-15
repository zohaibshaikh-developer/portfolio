import React from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10 mb-[5%]">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
      <div className="relative flex items-center justify-center">
  <a
    href="#skills"
    className={`text-center text-white ${styles.sectionSubText} border-b border-white pb-2`}
  >
    Explore My Full Skill Set
  </a>
</div>

    </>
  );
};

export default SectionWrapper(Tech, "");
