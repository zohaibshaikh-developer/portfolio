import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";

import { motion } from "framer-motion";
import { github, ps_icon } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
  website_icon,
  playstore_icon,
  playstore_link,
}) => {
  const customScrollbarStyles = {
    maxHeight: "6rem", // Adjust this height as needed
    overflowY: "auto",
    WebkitScrollbar: {
      width: 0, // Hide the scrollbar
    },
    WebkitScrollbarThumb: {
      backgroundColor: "transparent", // Make the thumb transparent
    },
  };
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
     <div className="relative w-full h-[230px]">
  <img
    src={image}
    alt={name}
    className="w-full h-full object-cover rounded-2xl"
  />

  <div className="absolute inset-0 flex justify-end m-3">
    {website_link && (
      <div
        onClick={() => window.open(website_link, "_blank")}
        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer " // Added mr-2 for spacing
      >
        <img
          src={website_icon}
          alt="website"
          className="w-1/2 h-1/2 object-contain"
        />
      </div>
    )}

    {playstore_link && (
      <div
        onClick={() => window.open(playstore_link, "_blank")}
        className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ${website_link ? "ml-2" : ""}`}
      >
        <img
          src={playstore_icon}
          alt="playstore"
          className="w-1/2 h-1/2 object-contain"
        />
      </div>
    )}
  </div>
</div>


        <div className="mt-5">
          <h3 className="text-white font-bold text-[25px]">{name}</h3>
          <p
            className="mt-2 text-secondary text-[15.5px] overflow-y-auto max-h-24"
            style={customScrollbarStyles}
          >
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17.5px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each projects is briefly described
          with link to it. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
