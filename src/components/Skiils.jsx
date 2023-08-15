import React from "react";
// import Tilt from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

import SectionWrapper from "../hoc/SectionWrapper";

const SkillsCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-4 px-12 h-[110px] w-[100%] flex justify-evenly items-center flex-row gap-2"
        >
          <img src={icon} alt={name} className="w-[95%] h-[100%] object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>What I Can Do.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17.5px] max-w-3xl leading-[30px]"
      >
        I excel in a variety of programming languages, frameworks, and tools
        essential for Web and App Development. My proficiency spans diverse
        technologies, allowing me to craft dynamic digital experiences with
        seamless functionality and engaging user interfaces.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {skills.map((skills, index) => (
          <SkillsCard key={skills.name} index={index} {...skills} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
