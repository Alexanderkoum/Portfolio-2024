import React from "react";
import Button from "./components/Button";
import DownloadIcon from "./assets/circle-down-regular.svg";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { SendHorizonal } from "lucide-react";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3zn30x7",
        "template_pk8kws8",
        form.current,
        "SQc_lAnMDNwMs_oEB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="bg-gray-100 w-screen  bottom-0  backdrop-blur-md sm:backdrop-blur-none text-slate-950">
        <div className="wrapper mx-auto py-24">
          <p className="text-left bayon-regular tracking-tighter text-[3rem] md:leading-[3.7rem] font-bold">
            Une idée ? un projet ?
          </p>
          <div>
          <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full rounded-xl flex gap-4 w-[400px] md:w-[800px] bg-gradient-to-b from-white/10 to-slate-100/10 border border-slate-100/20 p-5"
          action=""
          method="post"
        >
          <input
            className=" p-4 bg-white rounded-full"
            type="text"
            placeholder="Votre prenom"
            name="user_firstname"
          />
          <input
            className=" p-4 bg-white rounded-full"
            type="text"
            placeholder="Votre nom"
            name="user_name"
          />
          <input
            className=" p-4 bg-white rounded-full"
            type="email"
            placeholder="Votre email"
            name="user_email"
          />
          <Link className="bg-sky-800 rounded-full py-3 px-6 flex gap-2 hover:gap-4 duration-300 items-center justify-center hover:ring-1 ring-sky-950/10 durantion-300" type="submit">
            <span className="text-sky-300 font-bold">Envoyer</span>
            <SendHorizonal className="text-sky-300 h-[15px]" />
          </Link>
          
        </form>
          </div>
        </div>
        <div className="wrapper mx-auto flex flex-row py-2 md:py-6  px-4 md:px-0 justify-between items-center space-y-2 backdrop-blur-md font-thin border-t text-gray-950">
          <Link className="text-gray-500 hover:text-gray-950">projets</Link>
          <Link className="text-gray-500 hover:text-gray-950">A propos</Link>
          <Link className="text-gray-500 hover:text-gray-950">Education</Link>
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
