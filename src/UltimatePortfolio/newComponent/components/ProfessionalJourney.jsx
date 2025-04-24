import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const BeePathAnimation = () => {
  const worldRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    const world = worldRef.current;
    const path = pathRef.current;
    const parentTop = world.getBoundingClientRect().top;

    const totalLength = path.getTotalLength();
    console.log("Total path length:", totalLength);

    let i = 0;
    boxRefs.current.forEach((element) => {
      const offset = element.getBoundingClientRect().top - parentTop;
      const xPercent = i++ * 0.2;

      gsap.set(element, {
        xPercent: -50,
        yPercent: -50,
        x: offset,
        y: 0, // can be dynamic or use motionPath's values
      });

      gsap.to(element, {
        motionPath: {
          path: path,
          align: path,
          type: "cubic",
          start: xPercent,
        },
        ease: "linear",
        scrollTrigger: {
          trigger: element,
          start: "center 40%",
          endTrigger: svgRef.current,
          markers: true,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <div className="spacer" style={{ height: "100vh" }}></div>

      <section
        className="container my-5 position-relative d-flex justify-content-between flex-column"
        id="world"
        ref={worldRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 703 2467"
          fill="none"
          preserveAspectRatio="none"
          className="w-100 h-100 position-absolute"
          ref={svgRef}
        >
          <path
            ref={pathRef}
            id="path1"
            d="M2 2C2 196.5 484 160.5 596.5 438C709 715.5 33 1062 105.5 1301C204.5 1568 835 1736.5 675 2037C607.333 2164.09 393 2269 393 2465"
            stroke="#231F20"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <div className="row mb-5 row-gap-5">
          <div className="offset-md-2 col-md-4">
            <div className="box a" ref={(el) => boxRefs.current.push(el)}></div>
          </div>

          <div className="col-md-6 pb-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className="col-md-4 pb-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>

          <div className="col-md-6 offset-md-2">
            <div className="box" ref={(el) => boxRefs.current.push(el)}></div>
          </div>

          <div className="offset-md-2 col-md-4">
            <div className="box" ref={(el) => boxRefs.current.push(el)}></div>
          </div>

          <div className="col-md-6 pb-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>

        <div className="col-md-4 pb-5">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <div className="col-md-6 offset-md-2">
          <div className="box" ref={(el) => boxRefs.current.push(el)}></div>
        </div>
      </section>

      <div className="spacer" style={{ height: "100vh" }}></div>
    </>
  );
};

export default BeePathAnimation;
