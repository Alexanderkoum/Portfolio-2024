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
import Logo from "../assets/logo.svg";
import { Layers2, User, Inbox } from "lucide-react";

const variants = {
  open: { opacity: 1, y: "90vh", x: "-20px" },
  closed: { opacity: 0, y: "130vh", x: "-20px" },
};

const header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 py-6  px-4 md:px-8 w-screen flex justify-between items-center backdrop-blur-xl sm:backdrop-blur-0 z-[99999] mix-blend-exclusion ">
        <div className="flex flex-col space-y-2  ">
          <Link to="/" className="">
            <span>
              <img
                src={Logo}
                alt="Logo Alexander"
                className="w-[30px] grayscale"
              />
            </span>
          </Link>
        </div>
        <div className="flex space-x-2">
          <div className="flex space-x-2 rounded-full py-2 border px-2 bg-gradient-to-t from-slate-50/20 to-slate-950/20 border-slate-50/20 backdrop-blur-xl grayscale">
            <Link
              to="/projets"
              className="flex items-center gap-2 rounded-full py-2 border px-5 bg-sky-950/0 border-sky-900/0 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out"
            >
              {" "}
              <span className="hidden sm:inline text-white">Projets</span>{" "}
              <Layers2 className="text-white w-[15px]" />
            </Link>
            {/*<Link
              to="/About"
              className="flex items-center gap-2 rounded-full py-2 border px-5 bg-sky-950/0 border-sky-900/0 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out"
            >
              {" "}
              <span className="hidden sm:inline text-white">About</span>{" "}
              <User className="text-white w-[15px]" />
            </Link>*/}
            <Link
              to="/Contact"
              className="flex items-center gap-2 rounded-full py-2 border px-5 bg-sky-950/0 border-sky-900/0 hover:bg-sky-950 hover:border-sky-900 duration-300 ease-in-out"
            >
              {" "}
              <span className="hidden sm:inline text-white">Contact</span>{" "}
              <Inbox className="text-white w-[15px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
