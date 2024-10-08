// TextSplitAnimation.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
gsap.registerPlugin(ScrollTrigger);

const TextSplitAnimation = ({ text }) => {
  const textRef = useRef();

  useEffect(() => {
    const characters = textRef.current.childNodes;

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%', // Trigger when top of the element hits 80% of the viewport height
        toggleActions: 'play none none reverse', // Play animation on enter, reverse on leave
      },
    });

    tl.set(characters, { opacity: 0, y: 20 }); // Set initial state

    characters.forEach((char, index) => {
      tl.to(char, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: index * 0.1, // Stagger effect
        ease: 'back.out(1.7)',
      }, 0);
    });

    return () => {
      // Clean up ScrollTrigger instances
      tl.kill();
    };
  }, [text]);

  return (
    <div ref={textRef} style={{ display: 'flex', overflow: 'hidden' }}>
      {text.split('').map((char, index) => (
        <span key={index} style={{ display: 'inline-block' }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextSplitAnimation;
