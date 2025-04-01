import React from "react";
import SoftwareItem from "../components/SoftwareItem";
import Profile from "../assets/imageprofile.png";
import { motion, progress } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";
import DataProject from "../assets/Data/projectData";
import ProjectList from "../components/ProjectList";
import { useTransform,useScroll } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const targetRef  = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target:targetRef,
  });

  const x = useTransform(scrollYProgress, [.15,1],["37%","-55%"])
  /*const {scrollYProgress} = useScroll();

  const translateY = useTransform(scrollYProgress, [0,.1,.3,1],["-0vh", "-5vh","-5vh","200vh"])
  const scale = useTransform(scrollYProgress, [.3,1],[.8, 1])
  const opacity = useTransform(scrollYProgress, [.3,.35],[1, 0])*/
  
  
  return (
    <>
      <motion.div
        
        className="w-full min-h-screen pt-36 md:pt-0 bg-hero-pattern bg-contain bg-repeat bg-center bg-opacity-5 flex items-center justify-center "
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
      <motion.div 
      ref={{targetRef}}
      
      className='relative h-[690vh] bg-red-900 w-full'>
              <motion.div 
        
                initial ={{backgroundColor: "oklch(0.962 0.018 272.314 / 0)" }}
                whileInView = {{backgroundColor: "oklch(0.962 0.018 272.314 )" }}
                transition={{
                  duration:.3,
                  delay:2.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="sticky top-0 overflow-hidden w-full min-h-screen flex items-center justify-center flex-col py-24">
                <motion.div

                  className="pb-12  flex flex-col items-center justify-center text-center max-w-6xl"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <h2 className="bayon-regular text-5xl md:text-8xl tracking-tighter font-bold text-center bg-gradient-to-t from-cyan-50 to-cyan-900 bg-clip-text text-transparent">Portfolio<sup className='bg-gradient-to-t from-white-500 to-slate-900 bg-clip-text text-transparent text-md leading-6 p-2 '>4</sup></h2>
                  
                </motion.div>

                <motion.div 
                style={{x}}
                className="flex gap-2 md:gap-4 ">
                  <ProjectList/>
                </motion.div>
              </motion.div>
      </motion.div>
      
      
      
    </>
  );
};

export default Home;
