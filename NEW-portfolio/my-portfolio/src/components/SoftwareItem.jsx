import React from "react";
import Logo from '../assets/react.svg'

const SoftwareItem = ({children}) => {
  return (
    <div className="bg-neutral-900 flex gap-4 py-3 px-4 items-center justify-center rounded-full font-bold">
      <span>{children}</span>
      <img
        className="h-8 w-8 rounded-full bg-neutral-900 p-1"
        src={Logo}
        alt=""
      />
    </div>
  );
};

export default SoftwareItem;
