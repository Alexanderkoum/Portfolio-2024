import React from "react";
import { useState } from "react";
import Button from "./Button";
import ProjectIcon from "../assets/folder-open-regular.svg";
import DownloadIcon from "../assets/circle-down-regular.svg";
import ContactIcon from "../assets/paper-plane-regular.svg";
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
              <span>
                AK.
              </span>
            </Link>
          </p>
        </div>
        <div className="flex space-x-2">
          <div className="flex space-x-2 rounded-full py-2 border px-2 bg-slate-900 border-slate-900">
            <Link to="/projets" className="flex items-center gap-2 rounded-full py-2 hover:border px-5 bg-sky-950/0 border-sky-900/0 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out">
              {" "}
              <span className="hidden sm:inline text-white">Projets</span>{" "}
              <img src={ProjectIcon} alt="" />
            </Link>
            <Link to="/About" className="flex items-center gap-2 rounded-full py-2 hover:border px-5 bg-sky-950/0 border-sky-900/0 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out">
              {" "}
              <span className="hidden sm:inline text-white">About</span>{" "}
              <img src={AboutIcon} alt="" />
            </Link>
            <Link to="/Contact" className="flex items-center gap-2 rounded-full py-2 hover:border px-5 bg-sky-950/0 border-sky-900/0 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out">
              {" "}
              <span className="hidden sm:inline text-white">Contact</span>{" "}
              <img src={ContactIcon} alt="" />
            </Link>
            
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default header;
