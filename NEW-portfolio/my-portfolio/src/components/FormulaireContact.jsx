import React from "react";
import Button from "./Button";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const variants = {
  open: { opacity:1, y: 0 },
  closed: { opacity:0, y: "100%" },
};

const FormulaireContact = () => {
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
    className="absolute bottom-6 right-[-100px] max-w-3xl w-[300px] sm:w-[500px] z-10">
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className=" p-5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col space-y-4"
        action=""
        method="post"
      >
        <h2 className="text-4xl mb-3 font-bold">Parlons-en !!</h2>
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
      </motion.form>
    </motion.div>
  );
};

export default FormulaireContact;
