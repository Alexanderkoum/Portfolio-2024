import React from 'react'
import { motion } from 'framer-motion'
export default function BlobBackground() {
    return(
        <div className='z-0 h-screen w-screen overflow-hidden bg-gradient-to-b from-[#041C4C] to-[#000D20] absolute'>
            <div className='w-[120vw] h-[120vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/0  to-[#FC7A00] backdrop-blur-[300px] absolute top-[45%] left-[-10%] rounded-[50%]'></div>
            <motion.div 
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{
                duration: 6,
                ease: "linear",
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay:1
            }}
            className='w-[120vw] h-[120vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/0  to-[#0004FC] backdrop-blur-3xl absolute top-[50%] left-[30%] rounded-[50%]'></motion.div>
            <motion.div 
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{
                duration: 6,
                ease: "linear",
                repeatType: "reverse",
                repeat: Infinity,
            }}
            className='w-[120vw] h-[120vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/0  to-[#0004FC] backdrop-blur-3xl absolute top-[40%] left-[-46%] rounded-[50%]'></motion.div>
            <div className='w-[300vw] h-[250vw] bg-slate-950 backdrop-blur-3xl absolute top-[60%] left-[-104%] rounded-[50%]'></div>
            <div className='w-screen h-screen bg-white/0 absolute backdrop-blur-3xl'></div>
        </div>
    )
}