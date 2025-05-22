import React from "react";
import { Link } from "react-router-dom";
import { Layers2,GraduationCap,User,MailPlus } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
    const nav = useRef(null);
  const limit = useRef(null);
  const elt = useRef(null);

  

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "0 top",
        toggleActions: "play none none none",
      },
    });
  
    tl.fromTo(nav.current, 
      { y: 110,scale:0.4  },
      { y: 0,scale:1, ease: "power1.out", duration: 0.4 }
    );
    tl.fromTo(nav.current, 
        { width: "80px", background:"oklch(13% 0.028 261.692)",filter: "backdrop-blur(0px)" },
        { width:"100%",background:"oklch(96.8% 0.007 247.896)",filter: "backdrop-blur(40px)", ease: "power1.out", duration: 0.3 }
      );
    tl.fromTo("menu-list", 
        { display: "none" },
        { display: "flex", ease: "power1.out", duration: 0.3 }
      );
  
    tl.fromTo(".menu-elt",
      { y: 5, opacity: 0 },
      { y: 0, opacity: 1, ease: "power1.out", duration: 0.1, stagger: 0.1 }
    );
    // Scroll event
    const handleScroll = () => {
        const scrollY = window.scrollY;
        console.log(scrollY);
        if (scrollY > 20 && scrollY < 3600) {
          tl.play();
        } else  {
          tl.reverse();
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 w-screen flex items-center justify-center">
        <svg style={{ display: "none" }}>
        <filter id="goo">
  <feGaussianBlur in="SourceGraphic" stdDeviation="11" result="blur" />
  <feColorMatrix in="blur" mode="matrix"
    values="1 0 0 0 0  
            0 1 0 0 0  
            0 0 1 0 0  
            0 0 0 40 -20" result="goo" />
  <feBlend in="SourceGraphic" in2="goo" />
</filter>
      </svg>
      <div style={{ filter: "url(#goo)" }} className="gooey-container">
      <ul className=" rounded-full py-1 px-5 mx-auto bg-gray-100 backdrop-blur-xl flex gap-5 items-center justify-center min-w-[50px] min-h-[50px] overflow-hidden menu-list text-white" ref={nav} >
      <li>
          <Link className="text-gray-600 hover:text-gray-900 duration-300 rounded-full py-3 px-6 flex flex-col gap-1 items-center justify-center menu-elt">
            <Layers2 className=" h-[25px]" />
            <span className="text-sm">projets</span>
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-900 hover:gap-2 duration-300 rounded-full py-3 px-6 flex flex-col gap-1 items-center justify-center menu-elt">
            <User className=" h-[25px]" />
            <span className="text-sm">about</span>
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-900 duration-300 rounded-full py-3 px-6 flex flex-col gap-1 items-center justify-center menu-elt ">
            <GraduationCap className=" h-[25px]" />
            <span className="text-sm">education</span>
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-900 duration-300 rounded-full py-3 px-6 flex flex-col gap-1 items-center justify-center menu-elt">
            <MailPlus className=" h-[25px]" />
            <span className="text-sm">contact</span>
          </Link>
        </li>
      </ul>
      <div className="limit" ref={limit}>
        limit
      </div>
      </div>
      
     
     
      
    </div>
  );
};

export default Navigation;
