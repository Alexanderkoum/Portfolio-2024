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
import Cta from "./components/Cta";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";


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
    <motion.div 
    /* */
    
    className={`bg-white dotted scroll-smooth`}>
      
<svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light w-screen h-screen">
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.80' 
      numOctaves='4' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>
      <ScrollToTop />
      <Header />
      <div 
      
      className="bg-white min-h-screen dotted flex flex-col items-center justify-start pb-0 md:pb-0 md:px-0 md:py-0 ">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/:projectTitle" element={<ProjectDetails />} />
          <Route path="/projets/:projectTitle" element={<ProjectDetails />} />
        </Routes>
      </div>
      <Footer />
      
      <Navigation />
    </motion.div>
  );
}

export default App;

