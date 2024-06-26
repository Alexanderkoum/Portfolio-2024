import React from "react";

const Button = ({ text, icon,alt }) => {
  return (
    <button className="flex gap-2 items-center justify-center text-white mt-5">
      {text}
      <img className='text-white' src={icon} alt={alt} />
    </button>
  );
};

export default Button;
