import React from "react";
import SoftwareItem from "../components/SoftwareItem";
import Profile from "../assets/imageprofile.png";
import { motion } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";
import DataProject from "../assets/Data/projectData";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <>
      <motion.div
        className="max-w-6xl min-h-screen "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <ProfileHeading />
      </motion.div>
      <div className="max-w-6xl">
        <motion.div
          className="pb-12 text-5xl font-bold"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2 className="">Quelques projets</h2>
        </motion.div>
        <ProjectList/>
      </div>
    </>
  );
};

export default Home;
