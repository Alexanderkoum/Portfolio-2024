import React from "react";
import Button from "./Button";
import SoftwareItem from "./SoftwareItem";
import logo from "../assets/react.svg";
import imageBanner from '../assets/bonvet-project-banner.png'
import { Link } from "react-router-dom";
import AboutIcon from "../assets/arrow-up-right.svg";
import { motion } from "framer-motion";
import { CircleEllipsis, SquareArrowOutUpRight } from 'lucide-react';

const ProjectItem = ({ title, image,description,stack,lienProject,id }) => {
  return (
    <motion.div
      className="md:w-[40vw]  md:py-5 z-5 p-5 m-4 mb-12 rounded-lg bg-white border-4 border-slate-100/20"
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
      <div className="flex  items-start justify-between  flex-wrap md:flex-nowrap py-5 px-0 md:px-0 rounded-lg  ">
        <div className='flex flex-col flex-wrap md:flex-nowrap gap-5 items-stretch justify-stretch '>
          <div className="w-full md:w-8/12 "><p className="text-3xl text-zinc-950 md:text-5xl tracking-tight ">{title}</p> </div>
          {/*
          <div className='flex flex-wrap items-start justify-start '>
            {stack}
          </div>
          */}
        </div>
        
        <div className="w-full md:w-full">
          
          <div className='flex md:justify-end gap-5'>
            <Link to={lienProject} target='_blank' className="flex items-center gap-2 rounded-full py-2 bg-gradient-to-t from-cyan-50 to-cyan-100 border-cyan-200 hover:border px-5 border border-slate-900 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out mt-4 inline">
                <span className="text-slate-900">Site</span>
                <SquareArrowOutUpRight className='text-zinc-900 h-[15px]' />
                
              </Link>
            <Link to={id} className="flex items-center gap-2 rounded-full py-2 bg-gradient-to-t from-cyan-50 to-cyan-100 border-cyan-200 hover:border px-5 border border-slate-900 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out mt-4 inline">
              <span className="text-zinc-900">Détails</span>
              <CircleEllipsis className='text-zinc-900 h-[15px]' />
            </Link>
        </div>
          
        </div>
      </div>

    </motion.div>
  );
};

export default ProjectItem;
