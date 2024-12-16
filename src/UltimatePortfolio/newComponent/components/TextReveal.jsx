import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "../sections/Testing";
import "../style/textReveal.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ReusableComponents } from "./ReusableComponents";
gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(
      "#center",
      {
        height: "100vh",
      },
      "a"
    )
      .to(
        "#top",
        {
          top: "-50%",
        },
        "a"
      )
      .to(
        "#bottom",
        {
          bottom: "-50%",
        },
        "a"
      )
      .to(
        "#top-h1",
        {
          top: "80%",
        },
        "a"
      )
      .to(
        "#bottom-h1",
        {
          bottom: "-25%",
        },
        "a"
      )
      .to(".content", {
        delay: -0.2,
        marginTop: "0%",
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* <p className="color-black h-c">
          helo
        </p> */}
      <div className="main-p">
        <div id="main">
          <div id="top">
            <h1 id="top-h1">ABOUT</h1>
          </div>
          <div id="center">
            <div className="content">
              <About />
            </div>
          </div>
          <div id="bottom">
            <h1 id="bottom-h1">ABOUT</h1>
            <ReusableComponents additionalStyle="text-reveal-scroll-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextReveal;
