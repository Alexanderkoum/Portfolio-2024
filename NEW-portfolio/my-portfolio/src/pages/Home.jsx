import React from "react";
import SoftwareItem from "../components/SoftwareItem";
import Profile from "../assets/imageprofile.png";
import { motion } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";

const Home = () => {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <ProfileHeading/>
      <div className="my-9 p-9 border-none rounded-xl bg-neutral-900">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          explicabo provident aperiam voluptatibus quisquam est rerum, inventore
          saepe deleniti deserunt ea, nesciunt atque odio illum, odit veniam
          consequatur quo amet! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aspernatur repellendus, quod iusto porro a nemo
          asperiores? Libero laudantium, vel natus unde impedit illo accusamus
          nihil aspernatur accusantium nemo molestiae voluptate!
        </p>
      </div>
      <div className="flex space-x-2 space-y-2 flex-wrap">
        <SoftwareItem children="SOQL" />
        <SoftwareItem children="HMTL" />
        <SoftwareItem children="JS" />
        <SoftwareItem children="SASS" />
        <SoftwareItem children="CSS" />
        <SoftwareItem children="APEX" />
        <SoftwareItem children="WORDPRESS" />
        <SoftwareItem children="GIT" />
        <SoftwareItem children="GITLAB" />
        <SoftwareItem children="PYTHON" />
      </div>
    </motion.div>
  );
};

export default Home;
