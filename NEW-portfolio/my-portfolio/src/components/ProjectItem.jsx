import React from "react";
import Button from "./Button";
import SoftwareItem from "./SoftwareItem";
import logo from "../assets/react.svg";
import imageBanner from '../assets/bonvet-project-banner.png'

const ProjectItem = () => {
  return (
    <div className="p-12 bg-black rounded-2xl transition ease-in-out duration-300 group">
      <div className='flex justify-between items-center '>
        <h2>Project Title </h2>
        <div className="py-4 flex ">
          <img
            className="p-1 ring ring-slate-950 rounded-full ring-1 bg-neutral-900 w-8 h-8 "
            src={logo}
            alt="image software"

          />
          <img
            className="p-1 ring ring-slate-950 rounded-full ring-1 bg-neutral-900 w-8 h-8 -translate-x-2 group-hover:-translate-x-0 ease-in-out duration-300"
            src={logo}
            alt="image software"
          />
          <img
            className="p-1 ring ring-slate-950 rounded-full ring-1 bg-neutral-900 w-8 h-8 -translate-x-4 group-hover:-translate-x-0 ease-in-out duration-300"
            src={logo}
            alt="image software"
          />
          <img
            className="p-1 ring ring-slate-950 rounded-full ring-1 bg-neutral-900 w-8 h-8 -translate-x-6 group-hover:-translate-x-0 ease-in-out duration-300"
            src={logo}
            alt="image software"
          />
          <img
            className="p-1 ring ring-slate-950 rounded-full ring-1 bg-neutral-900 w-8 h-8 -translate-x-8 group-hover:-translate-x-0 ease-in-out duration-300"
            src={logo}
            alt="image software"
          />
        </div>
      </div>
        <img src={imageBanner} alt="image banner" className='rounded-2xl pb-4 h-48 w-full'/>
      <p className="pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        tempora tenetur error aliquid atque corporis perferendis quaerat nobis
        blanditiis? Eum ipsum necessitatibus voluptatum doloribus quia obcaecati
        eos perspiciatis officiis earum.
      </p>
      <Button text="voir le site" />
    </div>
  );
};

export default ProjectItem;
