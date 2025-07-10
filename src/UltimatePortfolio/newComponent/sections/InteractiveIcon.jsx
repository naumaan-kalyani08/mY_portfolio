import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DiReact } from "react-icons/di";

gsap.registerPlugin(ScrollTrigger);

const InteractiveIcon = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const maxX = window.innerWidth - box.offsetWidth;
    const maxY = window.innerHeight - box.offsetHeight;

    gsap.to(box, {
      x: maxX,
      y: maxY,
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top left",
        end: "bottom right",
        scrub: 1,
        markers: true,
      },
    });
  }, []);

  return (
    <div style={{ height: "200vh", background: "#f0f0f0" }}>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          // background: "tomato",
          position: "fixed",
          top: "5%",
          left: 0,
        }}
      >
        <DiReact size={100} />
      </div>
    </div>
  );
};

export default InteractiveIcon;
