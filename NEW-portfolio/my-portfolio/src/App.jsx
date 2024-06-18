import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Footer from "./Footer";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact'
import About from "./pages/About";
import FormulaireContact from "./components/FormulaireContact";
import { motion } from "framer-motion";

function App() {

  const [mousepPosition, setMousePosition] = useState(
    {
      x:0,
      y:0
    }
  );

  useEffect(()=>{
    window.addEventListener("mousemove",function(e){
      console.log(e.clientX,e.clientY);
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    })
  },[]);

  const variant = ({
    default : {
      x: mousepPosition.x - 20,
      y: mousepPosition.y - 20
    }
  })
  return (
    <div className="bg-gradient-to-r from-slate-950 to-sky-950 dotted">
      <motion.div className="cursor ring " variants={variant} animate="default"/>
      <Header />
      <div className="bg-slate-950/65 min-h-screen dotted flex flex-col items-center justify-start py-36 md:py-48 px-3 md:py-0 ">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>

      <Footer />
      
    </div>
  );
}

export default App;

