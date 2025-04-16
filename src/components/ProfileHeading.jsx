import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/imageprofile.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const text = `Je suis un développeur front-end avec 5 ans d'expérience dans la conception 
d'interfaces web modernes et intuitives pour une expérience utilisateur optimale à l'aide de HTML,
CSS, JavaScript, React, WordPress et plus.`;

const title = `Créateur d’expériences web 
performantes.`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.4 }, // Controls the stagger timing
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProfileHeading = () => {
  return (
    <motion.div className="max-w-8xl flex flex-wrap-reverse md:flex-nowrap gap-7 items-center justify-end ">
      <p className="hidden md:inline-block  -rotate-90">45.5019°N</p>
      <div className="flex flex-col gap-9 items-center md:items-start justify-end ">
        {/*<img className="h-24 w-24 md:h-20 md:w-20 rounded-full ring " src={Profile} alt="" />*/}
        <p className="text-[12px] md:text-sm mb-3 font-bold py-2  rounded-full py-2 border pr-5 bg-sky-950 border-sky-900 w-8/12 md:w-[260px] md:max-w-[80%] text-left md:text-left flex items-center justify-center text-sky-400 ">
          <DotLottieReact
            src="https://lottie.host/02c3b659-311a-493a-aadd-570b9189649a/qjhRnYpiBb.lottie"
            loop
            autoplay
            className="h-[10px] w-[20px] md:h-[20px] md:w-[40px]"
          />{" "}
          <span className="w-10/12"> Disponible pour des projets</span>
        </p>
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bayon-regular tracking-tighter text-5xl md:text-[10vw] md:leading-[16vh] mb-3 font-bold text-center md:text-left bg-gradient-to-t from-stone-50 to-cyan-900 bg-clip-text text-transparent"
        >
          {title.split("\n").map((lines, index) => (
            <motion.span key={index} variants={lineVariants} className="mb-5">
              {lines}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-md font-thin w-full md:w-8/12 text-center md:text-left leading-6"
        >
          {text.split("\n").map((line, index) => (
            <motion.p key={index} variants={lineVariants} className="mb-2">
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>

      <p className="hidden md:inline-block rotate-90">73.5674°W</p>
    </motion.div>
  );
};

export default ProfileHeading;
