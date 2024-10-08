import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OverlappingSections = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            markers: true, // Remove this line in production
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container">
      <div className="section" style={{ backgroundColor: '#ff4d4d', height: '100vh' }}>
        <h1>Section 1</h1>
      </div>
      <div className="section" style={{ backgroundColor: '#4dff4d', height: '100vh' }}>
        <h1>Section 2</h1>
      </div>
      <div className="section" style={{ backgroundColor: '#4d4dff', height: '100vh' }}>
        <h1>Section 3</h1>
      </div>
      <div className="section" style={{ backgroundColor: '#ffff4d', height: '100vh' }}>
        <h1>Section 4</h1>
      </div>
    </div>
  );
};

export default OverlappingSections;
