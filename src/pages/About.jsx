import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/imageprofile.png";
import ProfileHeading from "../components/ProfileHeading";
import SoftwareItem from "../components/SoftwareItem";
import AnimProfile from "../assets/room-coding.png";
import Experience from "../components/Experience";
import experienceData from "../assets/Data/experienceData";

const About = () => {
  return (
    <motion.div
      className="max-w-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className="text-6xl font-bold  decoration-sky-500 underline-offset-8 mb-16">Plus sur moi...</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="my-9 p-9 border-none rounded-xl bg-slate-900">
            <h2 className="text-2xl font-bold underline decoration-sky-500 underline-offset-8 mb-5">
              Resume
            </h2>
            <p>
              Je suis un Developpeur web avec une specialisation en front end qui possede 5 ans d'experience . mon experience en agence web au travers de different postes m'a permis d'obtenir une experience assez diversifie sur les differents metiers du web . 
            </p>
          </div>
        </div>
        <div>
          <div className="my-9 p-9 border-none rounded-xl bg-slate-900 flex items-center justify-center">
          <img src={AnimProfile} alt="3d profile" className="h-[12.3rem]" />
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
      <div className="my-9 p-9 border-none rounded-xl bg-slate-900">
        <h2 className="text-2xl font-bold underline decoration-sky-500 underline-offset-8 mb-5">
          Education
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          explicabo provident aperiam voluptatibus quisquam est rerum, inventore
          saepe deleniti deserunt ea, nesciunt atque odio illum, odit veniam
          consequatur quo amet! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aspernatur repellendus, quod iusto porro a nemo
          asperiores? Libero laudantium, vel natus unde impedit illo accusamus
          nihil aspernatur accusantium nemo molestiae voluptate!
        </p>
      </div>
      <div className="my-9 p-9 border-none rounded-xl bg-slate-900">
        <h2 className="text-2xl font-bold underline decoration-pink-500 underline-offset-8 mb-5">
          Hobbies
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          explicabo provident aperiam voluptatibus quisquam est rerum, inventore
          saepe deleniti deserunt ea, nesciunt atque odio illum, odit veniam
          consequatur quo amet! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aspernatur repellendus, quod iusto porro a nemo
          asperiores? Libero laudantium, vel natus unde impedit illo accusamus
          nihil aspernatur accusantium nemo molestiae voluptate!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
