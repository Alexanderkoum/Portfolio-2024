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

    const animateOnAppear = {
        initial:{ opacity: 0, y: 100 },
        animate:()=>({
            opacity: 1, y: 0 , 
            transition:{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }
        }),
  
    }

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className='max-w-3/12 w-full px-4 md:max-w-6xl pt-36'>
        <motion.div 
        className='flex gap-2 flex-wrap justify-between'
        variants = {animateOnAppear}
        initial = "initial"
        whileInView = 'animate'
        viewport={{once : true}}
        >
        
        <h1 className='text-3xl md:text-9xl font-bold bg-gradient-to-t from-stone-50 to-cyan-900 bg-clip-text text-transparent'>{project.titleProject}</h1><Link to={project.lienProject} target="_blank"><img src={AboutIcon} alt="" /></Link>
        </motion.div>
        
        <motion.div 
        className=' my-9 py-9 grid grid-cols-1 sm:grid-cols-4 gap-4'
        variants = {animateOnAppear}
        initial = "initial"
        whileInView = 'animate'
        viewport={{once : true}}>
            <div className='w-full md:col-span-3'>
            <p className='text-md md:text-3xl '>{project.descProject}</p>
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
        variants = {animateOnAppear}
        initial = "initial"
        whileInView = 'animate'
        viewport={{once : true}}/>
        
        <motion.div
          className="py-5 md:flex flex-wrap border-b"
          variants = {animateOnAppear}
        initial = "initial"
        whileInView = 'animate'
        viewport={{once : true}}
        >
            
            <p className='pb-5 text-sky-400 uppercase font-bold w-8/12'>Le probleme</p>
            <p className='pb-5 text-white md:w-4/12'>
            {project.probleme}
            </p>
          </motion.div>
          <motion.div
          className="py-5 md:flex flex-wrap border-b"
          variants = {animateOnAppear}
        initial = "initial"
        whileInView = 'animate'
        viewport={{once : true}}
        >
            
            <p className='pb-5 text-sky-400 uppercase font-bold w-8/12 '>La Solution</p>
            <p className='pb-5 text-white md:w-4/12'>
            {project.Solution}
            </p>
          </motion.div>
          <motion.div
          className="py-5 "
          variants = {animateOnAppear}
        initial = "initial"
        whileInView = 'animate'
        viewport={{once : true}}
        >
            
            <p className='pb-5 text-sky-400 uppercase font-bold w-8/12'>Résultats</p>
            <motion.div
        
        className="max-w-6xl min-h-full bg-hero-pattern bg-contain bg-repeat bg-center bg-opacity-5 "
        variants = {animateOnAppear}
        initial = "initial"
        whileInView = 'animate'
        viewport={{once : true}}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-4">
            <div className="md:my-9 p-9 border-none rounded-lg bg-slate-900">
                <p className="text-[5rem] font-bold text-violet-500">{project.Resultats[0]}</p>
                <p>Performance</p>
            </div>
            <div className="md:my-9 p-9 border-none rounded-lg bg-slate-900">
                <p className="text-[5rem] font-bold text-fuchsia-500">{project.Resultats[1]}</p>
                <p>Accessibilite</p>
            </div>
            <div className="md:my-9 p-9 border-none rounded-lg bg-slate-900">
                <p className="text-[5rem] font-bold text-fuchsia-500">{project.Resultats[2]}</p>
                <p>Bonnes pratiques</p>
            </div>
            <div className="md:my-9 p-9 border-none rounded-lg bg-slate-900">
                <p className="text-[5rem] font-bold text-fuchsia-500">{project.Resultats[3]}</p>
                <p>SEO</p>
            </div>
        </div>
      </motion.div>
          </motion.div>
        
        
        
      
    </div>
  );
}

export default ProjectDetails;
