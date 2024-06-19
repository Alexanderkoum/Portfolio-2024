import React from 'react'
import { motion } from "framer-motion";
import Profile from "../assets/imageprofile.png";

const ProfileHeading = () => {
  return (
    <motion.div className="flex flex-wrap-reverse md:flex-nowrap gap-7 items-center justify-center">
        

        <div className="flex flex-col gap-9 items-center md:items-start">
          <p className="text-lg mb-3 font-bold py-2 mb-4 px-5 rounded-full py-2 border px-5 bg-sky-950 border-sky-900 w-auto md:w-[27%] text-center md:text-left">Alexander w. koum 🤙</p>
          <p className="text-6xl md:text-9xl mb-3 font-bold text-center md:text-left">Developpeur Front-end.</p>
          <h1 className="text-md font-thin w-full md:w-6/12 text-center md:text-left">
          je suis un developper front-end avec 5 ans d'experience dans la conception d'interfaces web modernes et intuitives pour une expérience utilisateur optimale à l'aide de html, css , javascript , react , wordpress et plus.
          </h1>
        </div>
        <img className="h-48 w-48 md:h-64 md:w-64 rounded-full ring" src={Profile} alt="" />
      </motion.div>
  )
}

export default ProfileHeading