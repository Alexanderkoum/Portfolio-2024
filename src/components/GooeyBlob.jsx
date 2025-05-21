import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GooeyBlob() {
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    gsap.to(blob1.current, {
      x: 100,
      y: 50,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(blob2.current, {
      x: -80,
      y: -40,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="gooey-wrapper">
      <svg style={{ display: "none" }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 20 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <div className="gooey-container" style={{ filter: "url(#goo)" }}>
        <div className="blob" ref={blob1}></div>
        <div className="blob2" ref={blob2}></div>
      </div>
    </div>
  );
}
