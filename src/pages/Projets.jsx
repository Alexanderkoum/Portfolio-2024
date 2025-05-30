import React from "react";
import ProjectList from "../components/ProjectList";
import { motion } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";
import DataProject from "../assets/Data/projectData";
import BlobBackground from "../components/BlobBackground";

export default function Projets() {
  return (
    <div className="bg-slate-950 w-full min-h-screen flex items-center justify-start flex-col">
      <BlobBackground />
      <motion.div
        className="max-w-6xl pt-36 px-4 md:px-0 z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="text-6xl font-bold  decoration-sky-500 underline-offset-8 mb-16">
          Projets récents
        </h1>
        <ProjectList />
      </motion.div>
    </div>
  );
};

