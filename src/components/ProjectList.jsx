import React from "react";
import SoftwareItem from "../components/SoftwareItem";
import Profile from "../assets/imageprofile.png";
import { motion } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";
import DataProject from "../assets/Data/projectData";
import { Link } from "react-router-dom";

const ProjectList = () => {

  return (
    <>
          {DataProject.map((result, index) => (<>
            <ProjectItem
              key={index}
              title={result.titleProject}
              image={result.banner}
              description={result.descProject}
              lienProject={result.lienProject}
              id={result.titleProject}
              stack={result.stack.map((tech, techIndex) => (
                <><SoftwareItem key={techIndex} children={tech} /></>
            ))}
            />
            </>
          ))}
        </>
  );
};

export default ProjectList;
