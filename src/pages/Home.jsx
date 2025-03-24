import React from "react";
import SoftwareItem from "../components/SoftwareItem";
import Profile from "../assets/imageprofile.png";
import { motion, progress } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";
import DataProject from "../assets/Data/projectData";
import ProjectList from "../components/ProjectList";
import { useTransform,useScroll } from "framer-motion";

const Home = () => {

  const {scrollYProgress} = useScroll();

  const translateY = useTransform(scrollYProgress, [0,.1,.3,1],["-0vh", "-10vh","-10vh","200vh"])
  const scale = useTransform(scrollYProgress, [.3,1],[1, 2])
  const opacity = useTransform(scrollYProgress, [.3,.35],[1, 0])
  const visibility = useTransform(scrollYProgress, [.3,.35],["visible", "hidden"])
  
  return (
    <motion.div>
      <motion.div
        
        className="max-w-6xl min-h-screen bg-hero-pattern bg-contain bg-repeat bg-center bg-opacity-5 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <ProfileHeading />
      </motion.div>
      <div className="max-w-6xl">
        <motion.div
        style= {{translateY,scale,opacity,visibility}}
          className="pb-12  flex flex-col items-center justify-center text-center max-w-6xl"
          /*initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}*/
        >
          <h2 className="bayon-regular text-4xl md:text-7xl tracking-tighter font-bold uppercase text-center bg-clip-text text-white">Projets<sup className='text-cyan-400 text-md leading-6 p-5 '>4</sup></h2>
          <p className='text-md font-thin md:w-6/12 text-center md:text-center leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur odio quod id autem fugiat ab, officiis aspernatur animi facere dolore incidunt odit provident dignissimos iure neque enim hic ad.</p>
        </motion.div>
        <ProjectList/>
      </div>
    </motion.div>
  );
};

export default Home;
