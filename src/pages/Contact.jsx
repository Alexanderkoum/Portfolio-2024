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
    <motion.div
    className=" max-w-36xl relative"
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="rounded-xl flex flex-col space-y-4 w-[400px] md:w-[800px] shadow-2xl shadow-sky-900 border-2 border-sky-900 p-5"
        action=""
        method="post"
      >
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
    </motion.div>
  );
};
export default Contact;

