import React from "react";
import Button from "./components/Button";
import DownloadIcon from "./assets/circle-down-regular.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 w-screen  bottom-0  backdrop-blur-md sm:backdrop-blur-none text-slate-950">
      <div className="wrapper mx-auto py-24">
          <p className="text-left bayon-regular tracking-tighter text-[3rem] md:leading-[3.7rem] font-bold">
            Une idée ? un projet ?
          </p>
          </div>
        <div className="wrapper mx-auto flex flex-row py-2 md:py-6  px-4 md:px-0 justify-between items-center space-y-2 backdrop-blur-md font-thin">
         
          <span>copyright © 2025 - All rights reserved</span>
          <span>Made in Québec</span>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
