import React from 'react'
import { motion } from "framer-motion";
import Profile from "../assets/imageprofile.png";


const text = `Je suis un développeur front-end avec 5 ans d'expérience 
dans la conception d'interfaces web modernes et intuitives 
pour une expérience utilisateur optimale à l'aide de HTML,
CSS, JavaScript, React, WordPress et plus.`;

const title = `DEVELOPPEUR 
FRONT-END`

// Animation Variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.4 }, // Controls the stagger timing
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut" } },
};


const ProfileHeading = () => {

  return (
    <motion.div className="flex flex-wrap-reverse md:flex-nowrap gap-7 items-center justify-center">
        

        <div className="flex flex-col gap-9 items-center md:items-start">
          <p className="text-lg mb-3 font-bold py-2 mb-4 px-5 rounded-full py-2 border px-5 bg-sky-950 border-sky-900 w-auto md:max-w-[40%] text-center md:text-left">Salut! je m'appelle Alexander 🤙</p>
          <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bayon-regular tracking-tighter text-4xl md:text-9xl mb-3 font-bold text-center md:text-left">{title.split("\n").map((lines, index) => (
            <motion.span key={index} variants={lineVariants} className="mb-5">
              {lines}
            </motion.span>
          ))}</motion.h1>
          <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-md font-thin w-full md:w-6/12 text-center md:text-left leading-6"
        >
          {text.split("\n").map((line, index) => (
            <motion.p key={index} variants={lineVariants} className="mb-2">
              {line}
            </motion.p>
          ))}
        </motion.div>
        </div>
        <img className="h-48 w-48 md:h-64 md:w-64 rounded-full ring " src={Profile} alt="" />
        
        
      </motion.div>
  )
}

export default ProfileHeading