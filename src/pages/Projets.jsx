import React from 'react'
import ProjectList from '../components/ProjectList'
import { motion } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";
import DataProject from "../assets/Data/projectData";

const Projets = () => {
  return (
    <motion.div 
    className="max-w-6xl md:pt-36"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      <h1 className="text-6xl font-bold  decoration-sky-500 underline-offset-8 mb-16">Projets récents</h1>
      <ProjectList/>

      
    </motion.div>
  )
}

export default Projets