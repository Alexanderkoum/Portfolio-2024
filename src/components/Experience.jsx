import React from 'react'
import experienceData from '../assets/Data/experienceData'
import { motion } from "framer-motion";

const Experience = ({periode, role, company, jobtasks}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          className="py-5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        ><p>{periode}</p></motion.div>
          <motion.div
          className="py-5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
            <p className='font-bold pb-5 text-xl'>{role}</p>
            <p className='pb-5 text-sky-400 italic font-bold'>{company}</p>
          <ul className='text-sm list-disc list-inside '>
            {jobtasks}
          </ul>
          </motion.div>
          
        </div>
  )
}

export default Experience