import React from 'react'
import { motion } from "framer-motion";
import Profile from "../assets/imageprofile.png";

const ProfileHeading = () => {
  return (
    <motion.div className="flex gap-6 items-center">
        <img className="h-32 w-32 rounded-full" src={Profile} alt="" />

        <div>
          <p className="text-4xl mb-3 font-bold">Alexander w. koum</p>
          <h1 className="heading-4">
            Architecte Web Innovant 🖥️ | Spécialiste Salesforce Admin 🛠️
          </h1>
        </div>
      </motion.div>
  )
}

export default ProfileHeading