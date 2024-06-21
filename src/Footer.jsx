import React from "react";
import Button from "./components/Button";
import DownloadIcon from "./assets/circle-down-regular.svg";

const Footer = () => {
  return (
    <>
      <div className="w-screen fixed bottom-0 py-2 md:py-6  px-4 md:px-8 w-full flex justify-between items-end backdrop-blur-md sm:backdrop-blur-none">
        <div className="w-full flex flex-row justify-between items-center space-y-2 backdrop-blur-md font-thin">
         
          <p>45.5019°N</p>
          <p>73.5674°W</p>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
