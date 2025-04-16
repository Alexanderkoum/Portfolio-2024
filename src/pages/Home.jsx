import React from "react";
import SoftwareItem from "../components/SoftwareItem";
import Profile from "../assets/imageprofile.png";
import { motion, progress } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";
import DataProject from "../assets/Data/projectData";
import ProjectList from "../components/ProjectList";
import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Skills from "../components/Skills";
import Spline from "@splinetool/react-spline";
import BlobBackground from "../components/BlobBackground";
import Experience from "../components/Experience";
import experienceData from "../assets/Data/experienceData";
import EducationData from "../assets/Data/educationData";

const Home = () => {
  const targetRef = (useRef < HTMLDivElement) | (null > null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.15, 1], ["37%", "-75%"]);
  /*const {scrollYProgress} = useScroll();

  const translateY = useTransform(scrollYProgress, [0,.1,.3,1],["-0vh", "-5vh","-5vh","200vh"])
  const scale = useTransform(scrollYProgress, [.3,1],[.8, 1])
  const opacity = useTransform(scrollYProgress, [.3,.35],[1, 0])
  
  // background backup

  bg-hero-patten bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 from-[10%] via-slate-900 via-[60%] to-slate-900 to-[70%] bg-[length:380%] bg-repeat bg-center bg-opacity-
  */

  return (
    <>
      <BlobBackground />
      <motion.div
        className="z-10 w-full min-h-screen px-5 md:px-0 pt-36 md:pt-0  flex items-center justify-end z-2"
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
      <div className="bg-slate-950 w-full px-5">
        <Skills />
      </div>

      <motion.div
        ref={{ targetRef }}
        className="relative h-[690vh] md:h-[690vh] w-full rounded-b-4xl z-2 "
      >
        <motion.div className=" bg-slate-950 sticky top-0 overflow-hidden w-full min-h-screen flex items-center justify-start md:justify-center flex-col  py-36 md:py-24 rounded-b-[20px]">
          {/*<motion.div

                    className="pb-12  flex flex-col items-center justify-center text-center max-w-6xl"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: .5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <h2 className="bayon-regular text-5xl md:text-8xl tracking-tighter font-bold text-center bg-gradient-to-t from-cyan-50 to-cyan-900 bg-clip-text text-transparent">Projets selectionnees<sup className='bg-gradient-to-t from-white-500 to-slate-900 bg-clip-text text-transparent text-md leading-6 p-2 '>4</sup></h2>
                    
                  </motion.div>*/}

          <motion.div style={{ x }} className="flex gap-2 md:gap-12 ">
            <ProjectList />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="relative h-full md:h-[203vh] w-[100vw]  md:py-32 tracking-tighter inline-block md:flex items-start justify-between gap-12 px-12 md:px-48  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20  to-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ amount: 0.99, once: true }}
          className="md:sticky top-32 h-fit flex items-stretch justify-center gap-24 md:w-1/2"
        >
          <div className="w-full md:w-full">
            <div className="flex gap-5">
              <div className=" border rounded-xl bg-hero-pattern flex items-center justify-center h-[300px] w-[300px]">
                {/*<img src={AnimProfile} alt="3d profile" className="h-[12.3rem]" />*/}
                <Spline scene="https://prod.spline.design/uiXqh4TRhheNpwuM/scene.splinecode" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-4">
              <div className="my-9 p-9 border-none rounded-xl bg-slate-50">
                <p className="text-[4rem] font-bold text-transparent bg-gradient-to-t from-stone-50 to-cyan-900 bg-clip-text">
                  4+
                </p>
                <p className="text-slate-800">Annees d'experience</p>
              </div>
              <div className="md:my-9 p-9 border-none rounded-xl bg-slate-50">
                <p className="text-[4rem] font-bold text-transparent bg-gradient-to-t from-stone-50 to-cyan-900 bg-clip-text">
                  100+
                </p>
                <p className="text-slate-800">Site web realise*</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ amount: 0.25, once: true }}
          className="md:w-1/2 "
        >
          <div className="my-9 p-9 border-none rounded-xl bg-slate-50">
            <h2 className="text-2xl text-slate-950 font-bold underline decoration-sky-500 underline-offset-8 mb-5">
              Experience
            </h2>
            {experienceData.map((data, index) => (
              <Experience
                periode={data.periode}
                role={data.role}
                company={data.company}
                jobtasks={data.jobtasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              />
            ))}
          </div>
          <div className="my-9 p-9 border-none rounded-xl bg-slate-50">
            <h2 className="text-2xl text-slate-950 font-bold underline decoration-sky-500 underline-offset-8 mb-5">
              Education
            </h2>
            {EducationData.map((data, index) => (
              <Experience
                periode={data.periode}
                role={data.degree}
                company={data.school}
                jobtasks={data.location}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
