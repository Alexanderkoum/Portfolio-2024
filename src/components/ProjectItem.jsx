import React from "react";
import Button from "./Button";
import SoftwareItem from "./SoftwareItem";
import logo from "../assets/react.svg";
import imageBanner from '../assets/bonvet-project-banner.png'
import { Link } from "react-router-dom";
import AboutIcon from "../assets/arrow-up-right.svg";
import { motion } from "framer-motion";

const ProjectItem = ({ title, image,description,stack }) => {
  return (
    <motion.div
  className="max-w-6xl pb-12 md:pb-2"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }}
>
    <div className="flex flex-wrap md:flex-nowrap gap-12 py-5 border-solid border-t border-slate-800">
        <div className="w-full md:w-2/12 "><p className="text-5xl md:text-xl font-bold">{title}</p> </div>
        <div className="w-full md:w-4/12 font-thin">{description}</div>
        <div className="w-full md:w-3/12">
          <div className="flex flex-wrap">
        {stack}
        
      </div>
      </div>
        <div className="w-full md:w-3/12">
          <img src={image} alt="image project" className="rounded-lg"/>
          <Link to="/About" className="flex items-center gap-2 rounded-full py-2 hover:border px-5 border border-slate-900 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out mt-4 inline">
              {" "}
              <span className="text-white">Voir live</span>{" "}
              <img src={AboutIcon} alt="arrow up right" className="w-[20px] h-[20px]" />
            </Link>
        </div>
      
    </div></motion.div>
  );
};

export default ProjectItem;
