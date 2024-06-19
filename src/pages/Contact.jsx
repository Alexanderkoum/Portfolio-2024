import React from "react";
import Button from "../components/Button";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const variants = {
  open: { opacity:1, x: 0 },
  closed: { opacity:1, x: "0%" },
};

const Contact = () => {
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
    <div
    className=" max-w-36xl ">
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" p-5 rounded-xl flex flex-col space-y-4 w-[800px]"
        action=""
        method="post"
      >
        <h2 className="text-4xl mb-3 font-bold">Parlons-en !!!</h2>
        <input
          className="rounded-xl p-4 bg-neutral-400/30"
          type="text"
          placeholder="Votre prenom"
          name="user_firstname"
        />
        <input
          className="rounded-xl p-4 bg-neutral-400/30"
          type="text"
          placeholder="Votre nom"
          name="user_name"
        />
        <input
          className="rounded-xl p-4 bg-neutral-400/30"
          type="email"
          placeholder="Votre email"
          name="user_email"
        />
        <textarea
          className="rounded-xl p-4 bg-neutral-400/30"
          rows="5"
          placeholder="Votre message"
          name="message"
        />
        <input
          className="rounded-xl p-4 bg-neutral-50 text-black"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};
export default Contact;

