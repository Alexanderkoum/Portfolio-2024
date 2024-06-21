import React, { useState } from 'react';
import Duplicate from "../assets/duplicate-paste.svg"
import { motion } from "framer-motion";

const CopyToClipboard = () => {
    const [visibility, setVisibility] = useState("invisible")
    const copyEmailToClipboard = () => {
        const emailText = document.getElementById('myEmail').innerText;
        
        const messageText = document.getElementById('message');
        navigator.clipboard.writeText(emailText).then(() => {
            setVisibility("visible");
            setTimeout(() => {
                setVisibility("invisible");
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="flex gap-2 mt-5 items-center justify-center ">
            <p id="myEmail" className='underline underline-offset-8 decoration-sky-900 font-bold'>mbappekoum@gmail.com</p>
            <img className="w-[20px] h-[20px]" src={Duplicate} alt="Duplicate icon" onClick={copyEmailToClipboard} />
            <motion.p initial={{ opacity: 0, y:10 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }} id='message' className={`px-5 py-2 rounded-full bg-sky-900 ${visibility}`}>Copied 🫡'</motion.p>
        </div>
    );
};

export default CopyToClipboard;
