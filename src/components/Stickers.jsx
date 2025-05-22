import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { useRef } from 'react'


const Stickers = () => {
    const stickers = useRef(null)

    const tls = gsap.timeline({
        scrollTrigger: {
            trigger: stickers.current,
            start: "20 top",
            end: "500 top",
            scrub: 1,
            markers: false,
        }
    });
    useEffect(() => {

        tls.to(".sticker-item",{
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            duration:.2,
            ease: "power1.out",
            scale: 1,
        });
        tls.to(".sticker-item",{
            opacity:0,
            duration:.2,
            ease: "power1.out",
        });


        const handleScroll = () => {
            const scrollY = window.scrollY;
            console.log(scrollY);
            if (scrollY > 20) {
              tl.play();
            } else  {
              tl.reverse();
            }
          };

        window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    
  
  return (
    <section className=''>
        <div className="wrapper flex h-96 relative ">
        <img src="./src/assets/git-sticker.png" className="sticker-item h-48 absolute bottom-full left-[-20%] scale-[1.5] -rotate-12" aria-hidden/>
        <img src="./src/assets/figma-sticker.png" className="sticker-item h-48 absolute bottom-[90%] left-[15%] scale-[1.5] -rotate-45" aria-hidden/>
        <img src="./src/assets/vscode-sticker.png" className="sticker-item h-48 absolute bottom-[80%] left-1/2 scale-[1.2] rotate-30"aria-hidden/>
        <img src="./src/assets/firebase-sticker.png" className="sticker-item h-48 absolute bottom-full left-3/4 scale-[2] rotate-20"aria-hidden/>
        <img src="./src/assets/react-sticker.png" className="sticker-item h-48 absolute bottom-full left-[98%] scale-[1.3] rotate-12" aria-hidden />
      </div>
    </section>
  )
}

export default Stickers