import React from "react";
import Button from "./Button";
import SoftwareItem from "./SoftwareItem";
import logo from "../assets/react.svg";
import imageBanner from '../assets/bonvet-project-banner.png'
import { Link } from "react-router-dom";
import AboutIcon from "../assets/arrow-up-right.svg";
import { motion } from "framer-motion";

const ProjectItem = ({ title, image,description,stack,lienProject,id }) => {
  return (
    <motion.div
      className="md:w-[50vw]  md:py-5 z-5 p-5 m-4 mb-12 rounded-lg bg-white "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.6 , once : true}}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img src={image} alt="image project" className="rounded-lg w-full hover:-translate-y-2 transition delay-150 duration-300 ease-in-out"/>
      <div className="flex  items-start justify-between  flex-wrap md:flex-nowrap py-5 px-4 md:px-9   rounded-lg  ">
        <div className='flex flex-col flex-wrap md:flex-nowrap gap-5 items-stretch justify-stretch '>
          <div className="w-full md:w-8/12 "><p className="text-3xl text-black md:text-5xl font-bold">{title}</p> </div>
          {/*
          <div className='flex flex-wrap items-start justify-start '>
            {stack}
          </div>
          */}
        </div>
        
        <div className="w-full md:w-full">
          
          <div className='flex justify-end gap-5'>
            <Link to={lienProject} className="flex items-center gap-2 rounded-full py-2 hover:border px-5 border border-slate-900 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out mt-4 inline">
                <span className="text-black">voir</span>
                <img src={AboutIcon} alt="arrow up right" className="w-[20px] h-[20px]" />
              </Link>
            <Link to={id} className="flex items-center gap-2 rounded-full py-2 hover:border px-5 border border-slate-900 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out mt-4 inline">
              <span className="text-black">Détails</span>
              <img src={AboutIcon} alt="arrow up right" className="w-[20px] h-[20px]" />
            </Link>
        </div>
          
        </div>
      </div>

    </motion.div>
  );
};

export default ProjectItem;
