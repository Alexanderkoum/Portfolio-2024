import React from "react";
import experienceData from "../assets/Data/experienceData";
import { motion } from "framer-motion";

const Experience = ({ periode, role, company, jobtasks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-10 gap-0">
      <motion.div
        className="py-5 text-slate-950 col-span-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p>{periode}</p>
      </motion.div>
      <motion.div
        className="py-5 col-span-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p className="font-bold pb-5 text-xl text-slate-950">{role}</p>
        <p className="pb-5 text-sky-400 italic font-bold">{company}</p>
        {/*<ul className='text-sm list-disc list-inside text-slate-950'>
            {jobtasks}
          </ul>*/}
      </motion.div>
    </div>
  );
};

export default Experience;
