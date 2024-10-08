import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../style/slider.css'; // Make sure to include your CSS here

const Slider = () => {
  const [count, setCount] = useState(0);
  const targetsRef = useRef([]);
  const targetCount = 4; // Number of slides

  useEffect(() => {
    gsap.set(targetsRef.current, { xPercent: 100 });
    gsap.set(targetsRef.current[0], { xPercent: 0 });
  }, []);

  const slideOneNext = () => {
    const currentSlide = targetsRef.current[count];
    gsap.fromTo(currentSlide, { xPercent: 0, zIndex: 0 }, {
      delay: 0.2,
      duration: 1.2,
      xPercent: 0,
      zIndex: -10,
    });

    setCount((prevCount) => (prevCount < targetCount - 1 ? prevCount + 1 : 0));

    const nextSlide = targetsRef.current[(count + 1) % targetCount];
    gsap.fromTo(nextSlide, { xPercent: 100, zIndex: 10 }, {
      duration: 1.2,
      xPercent: 0,
      zIndex: 0,
    });
  };

  const slideOnePrev = () => {
    const currentSlide = targetsRef.current[count];
    gsap.fromTo(currentSlide, { xPercent: 0, zIndex: 10 }, {
      xPercent: 0,
      zIndex: 0,
    });

    gsap.fromTo(currentSlide, { xPercent: 0, zIndex: 0 }, {
      delay: 0,
      duration: 1.2,
      xPercent: 100,
      zIndex: -10,
    });

    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : targetCount - 1));
  };

  return (
    <div>
      <div className="box-container">
        {Array.from({ length: targetCount }).map((_, index) => (
          <div
            key={index}
            className={`box box0${index + 1}`}
            ref={(el) => (targetsRef.current[index] = el)}
          >
            SLIDE-0{index + 1}
          </div>
        ))}
      </div>

      <div className="controls">
        <button id="prevButton" onClick={slideOnePrev}>Prev</button>
        <button id="nextButton" onClick={slideOneNext}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
