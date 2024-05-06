import { useState } from "react";
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
  return (
    <>
      <Header />
      <div className="bg-zinc-950/95 dot-pattern min-h-screen flex flex-col items-center justify-start py-36 md:py-48 px-3 md:py-0">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
