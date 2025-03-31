import React from 'react'
import { motion, progress } from "framer-motion";
import { scroll } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";
import Cta from "../components/Cta";
import bgGradient from "../assets/blue-pink-gradient.jpg"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Spline from "@splinetool/react-spline";



const cta = () => {

    const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(scrollYProgress,[0, 0.5, 1],["#f00", "#0f0", "#00f"])
  const scale = useTransform(scrollYProgress, [.9, 1], [.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [.9, 1], ["50px", "0px"]);

  return (
    <motion.div 
    style ={{scale, borderRadius}} 
    className={`relative bayon-regular flex items-center justify-center h-[100vh] overflow-hidden bg-black`}
    initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        <div 
        style ={{borderRadius}}
        className="bg-cyan-900 dotted backdrop-blur-lg p-16 flex flex-col justify-end items-start gap-5  text-white h-full">
        <p className="flex m-2 gap-2 pr-16 items-center justify-center rounded-full font-regular  text-white bg-cyan-900/20 ring ring-cyan-400 text-sm ">
            <DotLottieReact
      src="https://lottie.host/02c3b659-311a-493a-aadd-570b9189649a/qjhRnYpiBb.lottie"
      loop
      autoplay
      className='h-[40px]'
    /><span>Disponible pour des projets</span> </p>
        <motion.h2 
        className='text-[15vw] leading-none font-bold tracking-tighter z-5 uppercase gradientPink text-transparent bg-clip-text'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.8,
            delay: 2,
            ease: [0, 0.71, 0.2, 1.01],
        }}>
        Prêt à discuter ?
        </motion.h2>
        <div className='absolute right-0 md:right-0 top-0 '>
        <Spline
        scene="https://prod.spline.design/wwJXM-JAKLBuRSGj/scene.splinecode" className='w-[560px] h-[539px]'
      />
        </div>
        </div>
        
    </motion.div>
  )
}

export default cta

