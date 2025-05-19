import React from "react";
import SoftwareItem from "../components/SoftwareItem";
import Profile from "../assets/imageprofile.png";
import { motion } from "framer-motion";
import ProfileHeading from "../components/ProfileHeading";
import ProjectItem from "../components/ProjectItem";
import DataProject from "../assets/Data/projectData";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";
import { useEffect, useState } from "react";




const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    }
  
    fetchProjects();
  }, []);

  return (
    <>
          {projects.map((result, index) => (<>
            <ProjectItem
              key={index}
              title={result.title}
              image={result.banner}
              description={result.desc}
              lienProject={result.liveurl}
              id={result.title}
              stack={result.stack.map((tech, techIndex) => (
                <><SoftwareItem key={techIndex} children={tech} /></>
            ))}
            />
            </>
          ))}
        </>
  );
};

export default ProjectList;
