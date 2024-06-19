import React from "react";
import Button from "./Button";
import SoftwareItem from "./SoftwareItem";
import logo from "../assets/react.svg";
import imageBanner from '../assets/bonvet-project-banner.png'
import { Link } from "react-router-dom";
import AboutIcon from "../assets/circle-user-solid.svg";
import { motion } from "framer-motion";

const ProjectItem = () => {
  return (
    <motion.div
  className="max-w-6xl hover:backdrop-blur-xl pb-12 md:pb-2"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }}
>
    <div className="flex flex-wrap md:flex-nowrap gap-12 py-5 border-solid border-t border-slate-800">
        <div className="w-full md:w-2/12 "><p className="text-5xl md:text-xl font-bold">Andremeda</p> </div>
        <div className="w-full md:w-4/12 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam quas quis tempora at. Tenetur, dignissimos similique autem vitae illum enim necessitatibus laborum accusamus praesentium cumque dolorem quam sint. Fugit.</div>
        <div className="w-full md:w-3/12">
          <div className="flex space-x-2 space-y-2 flex-wrap">
        <SoftwareItem children="sql" />
        <SoftwareItem children="html" />
        <SoftwareItem children="javascript" />
        <SoftwareItem children="scss" />
        <SoftwareItem children="css" />
        <SoftwareItem children="apex" />
        <SoftwareItem children="wordpress" />
        <SoftwareItem children="git" />
        <SoftwareItem children="gitlab" />
        <SoftwareItem children="python" />
      </div>
      </div>
        <div className="w-full md:w-3/12">
          <img src={imageBanner} alt="image project" className=""/>
          <Link to="/About" className="flex items-center gap-2 rounded-full py-2 hover:border px-5 bg-sky-950/0 border-sky-900/0 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out mt-4">
              {" "}
              <span className="hidden sm:inline text-white">About</span>{" "}
              <img src={AboutIcon} alt="" />
            </Link>
        </div>
      
    </div></motion.div>
  );
};

export default ProjectItem;
