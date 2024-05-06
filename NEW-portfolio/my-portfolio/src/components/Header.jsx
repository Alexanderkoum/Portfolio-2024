import React from "react";
import { useState } from "react";
import Button from "./Button";
import ProjectIcon from "../assets/folder-open-regular.svg";
import DownloadIcon from "../assets/circle-down-regular.svg";
import ContactIcon from "../assets/paper-plane-regular.svg";
import MenuToggle from "./MenuToggle";
import { Link } from "react-router-dom";
import Form from "./Form";
import AboutIcon from "../assets/circle-user-solid.svg";
import { useRef } from "react";
import { motion } from "framer-motion";
import FormulaireContact from "./FormulaireContact";

const variants = {
  open: { opacity: 1, y: '90vh',x:'-20px' },
  closed: { opacity: 0, y: "130vh",x:'-20px' },
};

const header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 py-6  px-4 md:px-8 w-full flex justify-between items-center backdrop-blur-xl sm:backdrop-blur-0">
        <div className="flex flex-col space-y-2">
          <p className="text-xl  text-white hover:text-orange-400 ">
            <Link to="/" className="text-white hover:text-white">
              <span className="py-3 px-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl font-bold">
                A.
              </span>
            </Link>
          </p>
        </div>
        <div className="flex space-x-2">
          <div className="block sm:hidden">
            <MenuToggle />
          </div>

          <div className="flex space-x-2">
            <Link to="/projets" className="nav-link flex items-center gap-2">
              {" "}
              <span className="hidden sm:inline">Projets</span>{" "}
              <img src={ProjectIcon} alt="" />
            </Link>
            <Link to="/About" className="nav-link flex items-center gap-2">
              {" "}
              <span className="hidden sm:inline">About</span>{" "}
              <img src={AboutIcon} alt="" />
            </Link>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} ><FormulaireContact/></motion.div>
            <button
              text="Télécharger CV"
              icon={DownloadIcon}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className='flex gap-2 items-center bg-gradient-to-r from-violet-500 to-fuchsia-500'
            >
              <span className="hidden sm:inline">contact</span>
              <img src={ContactIcon} alt="icon contact" />
            </button>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default header;
