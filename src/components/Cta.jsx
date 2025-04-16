import React from 'react'
import { motion, progress } from "framer-motion";
import { scroll } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";
import Cta from "../components/Cta";
import bgGradient from "../assets/blue-pink-gradient.jpg"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Spline from "@splinetool/react-spline";
import { CircleArrowOutUpRight } from 'lucide-react';
import Profile from "../assets/imageprofile.png";



const cta = () => {

    const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(scrollYProgress,[0, 0.5, 1],["#f00", "#0f0", "#00f"])
  const scale = useTransform(scrollYProgress, [.9, 1], [1, .9]);
  const borderRadius = useTransform(scrollYProgress, [.9, 1], ["0px", "50px"]);

  return (
    <motion.div 
    style ={{scale, borderRadius}} 
    className={`relative bayon-regular flex items-center justify-center md:h-[100vh] overflow-hidden `}
    initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        <div 
        style ={{borderRadius}}
        className="bg-cyan-900 dotted backdrop-blur-lg p-16 flex flex-col md:justify-end items-start gap-5  text-white h-full bg-hero-pattern">
        <p className="flex m-2 gap-2 pr-16 items-center justify-center rounded-full font-regular  text-white bg-cyan-900/20 ring ring-cyan-400 text-sm ">
            
          <img className="h-24 w-24 md:h-10 md:w-10 rounded-full ring " src={Profile} alt="" />
          <span>Disponible pour des projets</span> </p>
        <motion.h2 
        className='text-[15vw] leading-none font-bold tracking-tighter z-5 uppercase gradientPink text-transparent bg-clip-text'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.8,
            delay: 2,
            ease: [0, 0.71, 0.2, 1.01],
        }}>
        <span> Prêt à discuter ? <CircleArrowOutUpRight /> </span>
        </motion.h2>
        <div className='absolute right-0 md:right-0 top-0 hidden md:inline-block'>
        <Spline
        scene="https://prod.spline.design/wwJXM-JAKLBuRSGj/scene.splinecode" className='w-[560px] h-[539px]'
      />
        </div>

        <div className='md:flex items-center justify-between w-full border-t pt-2'>
          <div>
            mbappekoum@gmail.com
          </div>
          <div>
            instagram
          </div>
          <div>
            linkedin
          </div>
        </div>
        </div>
        
    </motion.div>
  )
}

export default cta

