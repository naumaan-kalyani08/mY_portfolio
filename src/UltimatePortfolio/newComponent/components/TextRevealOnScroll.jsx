// TextReveal.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".reveal-word");

    // Apply scroll-based animation to each word
    words.forEach((word, i) => {
      gsap.fromTo(
        word,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const revealIndex = i / words.length;
              word.style.opacity = progress > revealIndex ? 1 : 0;
              word.style.transform =
                progress > revealIndex ? "translateY(0)" : "translateY(20px)";
            },
          },
        }
      );
    });
  }, []);

  // Your sentence to animate
  const sentence =
    "This is a smooth word-by-word scroll fade-in effect built with React and GSAP.";

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <h1
        ref={textRef}
        className="text-4xl font-semibold leading-relaxed max-w-4xl text-center flex flex-wrap justify-center"
      >
        {sentence.split(" ").map((word, index) => (
          <span
            key={index}
            className="reveal-word mx-1 opacity-0"
            style={{
              display: "inline-block",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextReveal;
