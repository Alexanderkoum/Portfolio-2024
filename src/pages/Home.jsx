import React from "react";
import SoftwareItem from "../components/SoftwareItem";
import Profile from "../assets/imageprofile.png";
import { motion } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";

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
      <ProfileHeading/>
    </motion.div>
    <div
      className="max-w-6xl"
    >
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>

    </div>
    </>
  );
};

export default Home;