import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { MoveRight, CornerRightDown, Fullscreen, Download } from "lucide-react";
import GooeyBlob from "../components/GooeyBlob";
import img3d from "../assets/room-coding.png";
import Stickers from "../components/Stickers";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(".split", {
        type: "lines",
        linesClass: "line",
        
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "center 60%",
          end: "bottom center",
          scrub: 1,
          markers: true,}
        });

      tl.from(split.lines, {
        color: "text-gray-400",
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power2.out"
      });

      // Optional: clean up when unmounting
      return () => split.revert();
    }
  }, []); // [] = only run once

  return (
    <div className="pt text-black text-center">
      <div className="wrapper h-screen flex flex-col items-center justify-center gap-12">
        <h1 className="bayon-regular tracking-tighter text-5xl md:text-[6rem] md:leading-[4.7rem] mb-3 font-bold text-center w-[80%]">
          Designer web centré{" "}
          <span className="hover:text-[6rem] duration-300" aria-hidden>
            🤙
          </span>{" "}
          humain basé à Montréal
        </h1>
        <p>
          Je suis un développeur front-end avec 5 ans d'expérience dans la
          conception d'interfaces web modernes et intuitives pour une expérience
          utilisateur optimale à l'aide de HTML, CSS, JavaScript, React,
          WordPress et plus.
        </p>
        <div className="flex gap-4">
          <Link className="bg-sky-800 rounded-full py-3 px-6 flex gap-2 items-center justify-center hover:ring-1 ring-sky-950/10 durantion-300">
            <span className="text-sky-300 font-bold">Explorer projets</span>
            <MoveRight className="text-sky-300 h-[15px]" />
          </Link>
          <Link className="text-sky-800 rounded-full py-3 px-6 flex gap-2 items-center justify-center hover:ring-1 ring-sky-950/10 durantion-300">
            <span className=" font-bold">scroller</span>
            <CornerRightDown className=" h-[15px]" />
          </Link>
        </div>
      </div>
      <Stickers />
      <section>
        <div className="wrapper pb-48  gap-5 overflow-visible ">
          <div className="sticky top-[15vw] h-fit">
            <h2 className=" bayon-regular tracking-tighter text-5xl md:text-[4rem] md:leading-[3.7rem] mb-3 font-bold text-left">
              Projets sélectionnés.
            </h2>
          </div>
          <div className="">
            <div className="sticky top-[7vw] text-left bg-gray-300/10 backdrop-blur-lg p-5 rounded-xl ">
              <div className="relative">
                <img
                  src="./src/assets/ownerFinancing.png"
                  alt="ownerfinacing image"
                  className="project-img project-img-1 rounded-xl"
                />
                <Link className=" absolute top-2 right-2 p-2 rounded-full text-md text-white/50 bg-white/10 hover:bg-white/100 hover:text-black backdrop-blur-lg flex items-center justify-center duration-300">
                  <Fullscreen className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="sticky top-[7vw] text-left bg-gray-300/10 backdrop-blur-lg p-5 rounded-xl ">
              <div className="relative">
                <img
                  src="./src/assets/ownerFinancing.png"
                  alt="ownerfinacing image"
                  className="project-img project-img-1 rounded-xl"
                />
                <Link className=" absolute top-2 right-2 p-2 rounded-full text-md text-white/50 bg-white/10 hover:bg-white/100 hover:text-black backdrop-blur-lg flex items-center justify-center duration-300">
                  <Fullscreen className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="sticky top-[7vw] text-left bg-gray-300/10 backdrop-blur-lg p-5 rounded-xl ">
              <div className="relative">
                <img
                  src="./src/assets/ownerFinancing.png"
                  alt="ownerfinacing image"
                  className="project-img project-img-1 rounded-xl"
                />
                <Link className=" absolute top-2 right-2 p-2 rounded-full text-md text-white/50 bg-white/10 hover:bg-white/100 hover:text-black backdrop-blur-lg flex items-center justify-center duration-300">
                  <Fullscreen className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="sticky top-[7vw] text-left bg-gray-300/10 backdrop-blur-lg p-5 rounded-xl ">
              <div className="relative">
                <img
                  src="./src/assets/ownerFinancing.png"
                  alt="ownerfinacing image"
                  className="project-img project-img-1 rounded-xl"
                />
                <Link className=" absolute top-2 right-2 p-2 rounded-full text-md text-white/50 bg-white/10 hover:bg-white/100 hover:text-black backdrop-blur-lg flex items-center justify-center duration-300">
                  <Fullscreen className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper h-[120vw]">
          <p className="text-left bayon-regular tracking-tighter text-[3rem] md:leading-[3.7rem] font-bold split" ref={textRef}>
            Je suis un développeur front-end 👨🏾‍💻 avec 5 ans d'expérience dans la
            conception d'interfaces web modernes et intuitives pour une
            expérience utilisateur optimale 😤 à l'aide de HTML, CSS,
            JavaScript, React, WordPress et plus.
          </p>
          <div className="sticky top-[-4vw] grid grid-cols-3 gap-5 py-48">
            <div className="bg-slate-50 py-8 px-7 rounded-xl ">
              <h2 className=" bayon-regular tracking-tighter text-5xl md:text-[2rem] md:leading-[3.7rem] mb-3 font-bold text-left">
                Éducation
              </h2>
              <div className="text-left bg-white p-5 rounded-xl mb-3">
                <p className="font-bold">
                  Certificat en informatique appliquée
                </p>
                <div className="flex items-center justify-between">
                  <span>Universite de Montreal</span>
                  <span>2024</span>
                </div>
              </div>
              <div className="text-left bg-white p-5 rounded-xl mb-3">
                <p className="font-bold">
                  Certificat en informatique appliquée
                </p>
                <div className="flex items-center justify-between">
                  <span>Universite de Montreal</span>
                  <span>2024</span>
                </div>
              </div>
              <div className="text-left bg-white p-5 rounded-xl mb-3">
                <p className="font-bold">
                  Certificat en informatique appliquée
                </p>
                <div className="flex items-center justify-between">
                  <span>Universite de Montreal</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 py-8 px-7 rounded-xl ">
              <h2 className=" bayon-regular tracking-tighter text-5xl md:text-[2rem] md:leading-[3.7rem] mb-3 font-bold text-left">
                Éducation
              </h2>
              <div className="text-left bg-white p-5 rounded-xl mb-3">
                <p className="font-bold">
                  Certificat en informatique appliquée
                </p>
                <div className="flex items-center justify-between">
                  <span>Universite de Montreal</span>
                  <span>2024</span>
                </div>
              </div>
              <div className="text-left bg-white p-5 rounded-xl mb-3">
                <p className="font-bold">
                  Certificat en informatique appliquée
                </p>
                <div className="flex items-center justify-between">
                  <span>Universite de Montreal</span>
                  <span>2024</span>
                </div>
              </div>
              <div className="text-left bg-white p-5 rounded-xl mb-3">
                <p className="font-bold">
                  Certificat en informatique appliquée
                </p>
                <div className="flex items-center justify-between">
                  <span>Universite de Montreal</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="group h-full relative bg-slate-100 rounded-xl p-5 overflow-y-clip">
              <div className="group-hover:scale-[2] relative origin-top duration-300 h-full bg-[url({img3d})] mb-5 rounded-xl">
                <img src={img3d} alt="" />
              </div>
              <Link className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] flex items-center justify-between p-5 bg-slate-50/50 backdrop-blur-md rounded-xl text-sky-600">
                <span> Télécharger cv</span>
                <Download />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
