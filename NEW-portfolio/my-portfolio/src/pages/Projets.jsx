import React from 'react'
import ProjectList from '../components/ProjectList'
import { motion } from "framer-motion";
import ProjectItem from '../components/ProjectItem';

const Projets = () => {
  return (
    <motion.div 
    className="max-w-3xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      <h1 className="text-6xl font-bold underline decoration-sky-500 underline-offset-8 mb-5">Projets</h1>
      <div className='py-5 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </motion.div>
  )
}

export default Projets