import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const BeePathAnimation = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const worldRef = useRef(null);
  const boxRefs = useRef([]);

  const initAnimation = () => {
    const path = pathRef.current;
    const world = worldRef.current;
    const boxes = boxRefs.current;

    // Clear existing animations
    ScrollTrigger.getAll().forEach((st) => st.kill());
    gsap.killTweensOf("*");

    boxes.forEach((box, i) => {
      const xPercent = i * 0.2;

      gsap.set(box, {
        xPercent: -50,
        yPercent: -50,
      });

      gsap.to(box, {
        motionPath: {
          path: path,
          align: path,
          type: "cubic",
          start: xPercent,
        },
        ease: "none",
        scrollTrigger: {
          trigger: world, // scroll starts when BeePathAnimation section is in view
          start: "top bottom", // animation starts when 'world' reaches the bottom of the viewport
          end: "bottom center", // animation ends when 'world' reaches the center of the viewport
          scrub: true,
          markers: true, // turn off after debugging
        },
      });
    });
  };

  useLayoutEffect(() => {
    initAnimation();
    window.addEventListener("resize", initAnimation);

    return () => {
      window.removeEventListener("resize", initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section>
      <div className="custom-wrapper position-relative">
        <div className="scrollpath-wrapper">
          <div className="spacer" />
          <section className="" ref={worldRef} id="world">
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 703 2467"
              fill="none"
              preserveAspectRatio="xMidYMin meet"
              className="svg-path"
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

            <div className="gap-5">
              {[...Array(5)].map((_, index) => (
                // <div className="col-md-6 offset-md-2" key={index}>
                <div className="" key={index}>
                  <div
                    className="box"
                    ref={(el) => (boxRefs.current[index] = el)}
                  />
                </div>
              ))}
            </div>

            <div className="text-wrap">
              <div className="content-right text-1">
                <p>text 1</p>
              </div>
              <div className="conten-left text-2">
                <p>text 2</p>
              </div>
              <div className="content-right text-3">
                <p>text 3</p>
              </div>
              <div className="conten-left text-4">
                <p>text 4</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default BeePathAnimation;
