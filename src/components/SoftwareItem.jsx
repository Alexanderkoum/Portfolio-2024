import React from "react";
import Logo from '../assets/react.svg'

const SoftwareItem = ({children}) => {
  return (
    <div className="flex m-2 gap-4 py-1 px-4 items-center justify-center rounded-full font-regular  text-cyan-400 bg-cyan-900/20 text-sm">
      <span>{children}</span>
    </div>
  );
};

export default SoftwareItem;
