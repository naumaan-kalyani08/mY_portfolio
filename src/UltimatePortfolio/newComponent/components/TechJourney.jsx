import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./TechJourney.css"; // Your custom styles for .box, .svg-container etc.

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const TechJourney = () => {
  const svgContainerRef = useRef(null);
  const boxesRef = useRef([]);
  const pathRef = useRef(null);

  const anchorsToProgress = (rawPath, resolution = 12) => {
    if (!Array.isArray(rawPath)) {
      rawPath = MotionPathPlugin.getRawPath(rawPath);
    }
    MotionPathPlugin.cacheRawPathMeasurements(rawPath, resolution);

    let progress = [0];
    for (let s = 0; s < rawPath.length; s++) {
      const segment = rawPath[s];
      const samples = segment.samples;
      const e = segment.length - 6;

      for (let i = 0; i < e; i += 6) {
        const length = samples[(i / 6 + 1) * resolution - 1];
        progress.push(length / rawPath.totalLength);
      }
    }
    return progress;
  };

  useEffect(() => {
    let tl;
    const setupAnimations = () => {
      const boxes = boxesRef.current;
      const progressArray = anchorsToProgress(pathRef.current);
      progressArray.pop();

      if (tl) tl.progress(0).kill();

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgContainerRef.current,
          start: "top 60%",
          end: "bottom 50%",
          scrub: true,
          markers: true,
        },
      });

      boxes.forEach((box, i) => {
        tl.to(
          box,
          {
            duration: 1 - progressArray[i],
            ease: "none",
            motionPath: {
              path: pathRef.current,
              align: pathRef.current,
              alignOrigin: [0.5, 0.5],
              start: progressArray[i],
            },
          },
          progressArray[i]
        );
      });

      tl.progress(1).progress(0);
    };

    setupAnimations();
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
      setupAnimations();
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="spacer" />
      <section
        className="container my-5 position-relative d-flex justify-content-between flex-column svg-container"
        ref={svgContainerRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 703 2467"
          fill="none"
          preserveAspectRatio="none"
          className="w-100 h-100 position-absolute"
        >
          <path
            ref={pathRef}
            id="path1"
            d="M2 2C2 196.5 694 152 596 437 C 536 705 33 1062 105.5 1301 C 204.5 1568 835 1736.5 675 2037 C 607.333 2164.09 393 2269 393 2465"
            stroke="#231F20"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <div className="row mb-5 row-gap-5">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="col-md-4 pb-5"
              ref={(el) => (boxesRef.current[index] = el)}
            >
              <div className="box blue-box" />
            </div>
          ))}
        </div>
      </section>
      <div className="spacer" />
    </>
  );
};

export default TechJourney;
