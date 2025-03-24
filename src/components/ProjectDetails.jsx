import React from "react";
import { useParams } from "react-router-dom";
import DataProject from "../assets/Data/projectData";
import { motion } from "framer-motion";
import SoftwareItem from "../components/SoftwareItem";
import { Link } from "react-router-dom";
import AboutIcon from "../assets/arrow-up-right.svg";

function ProjectDetails() {
    const { projectTitle } = useParams(); // Get project title from URL
    const decodedTitle = decodeURIComponent(projectTitle); // Decode title for matching
  
    // Find the correct project
    const project = DataProject.find((p) => p.titleProject === decodedTitle);

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className='max-w-3/12 w-full px-4 md:max-w-6xl'>
        <motion.div 
        className='flex gap-2 flex-wrap justify-between'
        initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }}>
        <h1 className='text-3xl md:text-9xl font-bold'>{project.titleProject}</h1><Link to={project.lienProject} target="_blank"><img src={AboutIcon} alt="" /></Link>
        </motion.div>
        
        <motion.div 
        className=' my-9 py-9 grid grid-cols-1 sm:grid-cols-4 gap-4'
        initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }}>
            <div className='w-full md:col-span-3'>
            <p className='text-md md:text-3xl uppercase'>{project.descProject}</p>
            </div>
            <div className='col-span-1 flex items-end h-fit justify-start md:justify-end flex-wrap'>
            {project.stack.map((tech, techIndex) => (
                <><SoftwareItem key={techIndex} children={tech} /></>
            ))}
            </div>
        </motion.div>
        <motion.img 
        src={project.banner} 
        alt="image project" 
        className="rounded-lg max-w-6xl my-9 w-full"
        initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }}/>
        <motion.div
        
        className="max-w-6xl min-h-full bg-hero-pattern bg-contain bg-repeat bg-center bg-opacity-5 "
        initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-4">
            <div className="md:my-9 p-9 border-none rounded-lg bg-slate-900">
                <p className="text-[5rem] font-bold text-violet-500">94</p>
                <p>Performance</p>
            </div>
            <div className="md:my-9 p-9 border-none rounded-lg bg-slate-900">
                <p className="text-[5rem] font-bold text-fuchsia-500">93</p>
                <p>Accessibilite</p>
            </div>
            <div className="md:my-9 p-9 border-none rounded-lg bg-slate-900">
                <p className="text-[5rem] font-bold text-fuchsia-500">96</p>
                <p>Bonnes pratiques</p>
            </div>
            <div className="md:my-9 p-9 border-none rounded-lg bg-slate-900">
                <p className="text-[5rem] font-bold text-fuchsia-500">85</p>
                <p>SEO</p>
            </div>
        </div>
      </motion.div>
      
    </div>
  );
}

export default ProjectDetails;
