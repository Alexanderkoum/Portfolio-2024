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
import Logo from "../assets/imageprofile.png";
import { Cog } from "lucide-react";

const variants = {
  open: { opacity: 1, y: "90vh", x: "-20px" },
  closed: { opacity: 0, y: "130vh", x: "-20px" },
};

const header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white/70 backdrop-blur-md w-screen fixed top-0 left-0 z-50">
      <div className="text-stone-900 wrapper  mx-auto py-6  px-4 md:px-0 w-screen flex justify-between items-center  ">
        <div className="flex flex-col space-y-2  ">
          <Link to="/" className="">
            <span>
              <img
                src={Logo}
                alt="Logo Alexander"
                className="w-[50px] rounded-full ring ring-slate-50"
              />
            </span>
          </Link>
        </div>
        <div>
        <Link className="border border-sky-300 rounded-full py-2 px-2 flex gap-2 items-center justify-center hover:ring-1 ring-sky-950/10 durantion-300 text-sm">
            <span className="text-sky-800 font-bold">FR</span>
            <span className="text-sky-800 font-bold bg-sky-300 py-1 px-2 rounded-full">EN</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default header;
