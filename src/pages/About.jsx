import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/imageprofile.png";
import ProfileHeading from "../components/ProfileHeading";
import SoftwareItem from "../components/SoftwareItem";
import AnimProfile from "../assets/room-coding.png";
import Experience from "../components/Experience";
import experienceData from "../assets/Data/experienceData";
import EducationData from "../assets/Data/educationData";
import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <motion.div
      className="max-w-4xl pt-36 px-4 md:px-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className="text-6xl font-bold  decoration-sky-500 underline-offset-8 mb-16">Plus sur moi...</h1>
      <div className="md:flex items-start gap-4">
        <div className="w-full md:w-1/2 ">
          <div className="my-9 p-9 border-none rounded-xl bg-slate-900 h-[300px]">
            <h2 className="text-2xl font-bold underline decoration-sky-500 underline-offset-8 mb-5">
              Resume
            </h2>
            <p>
              Je suis un Developpeur web avec une specialisation en front end qui possede 5 ans d'experience . mon experience en agence web au travers de different postes m'a permis d'obtenir une experience assez diversifie sur les differents metiers du web . 
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="my-9 border-none rounded-xl bg-slate-900 flex items-center justify-center h-[300px]">
          {/*<img src={AnimProfile} alt="3d profile" className="h-[12.3rem]" />*/}
          <Spline
        scene="https://prod.spline.design/uiXqh4TRhheNpwuM/scene.splinecode" 
      />
          </div>
          
        </div>
      </div>
      <div className="my-9 p-9 border-none rounded-xl bg-slate-900">
        <h2 className="text-2xl font-bold underline decoration-sky-500 underline-offset-8 mb-5">
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
      <div className="my-9 p-9 border-none rounded-xl bg-slate-950 ring ring-fuchsia-500">
        <h2 className="text-2xl font-bold underline decoration-indigo-500 underline-offset-8 mb-5">
          Stacks i Know
        </h2>
        <div className="flex space-x-2 space-y-2 flex-wrap">
          <SoftwareItem children="SOQL" />
          <SoftwareItem children="HMTL" />
          <SoftwareItem children="JS" />
          <SoftwareItem children="SASS" />
          <SoftwareItem children="CSS" />
          <SoftwareItem children="APEX" />
          <SoftwareItem children="WORDPRESS" />
          <SoftwareItem children="GIT" />
          <SoftwareItem children="GITLAB" />
          <SoftwareItem children="PYTHON" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="my-9 p-9 border-none rounded-xl bg-slate-900">
          <p className="text-[8rem] font-bold text-violet-500">4+</p>
          <p>Annees d'experience</p>
        </div>
        <div className="my-9 p-9 border-none rounded-xl bg-slate-900">
          <p className="text-[8rem] font-bold text-fuchsia-500">100+</p>
          <p>Site web realise*</p>
        </div>
      </div>
      <p className="text-[9px] text-right">
        *certains realise sous couvert de l'agence{" "}
        <span className="text-pink-500">Shortkut</span>, ces projets ne figure
        pas dans ce portfolio.
      </p>
      
      <div className="my-9 p-9 border-none rounded-xl bg-slate-900">
        <h2 className="text-2xl font-bold underline decoration-sky-500 underline-offset-8 mb-5">
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
  );
};

export default About;
