import React, { useEffect } from "react";
import "../style/timeline.css";
import { SectionButton } from "../components/ReusableComponents";

const Timeline = () => {
  useEffect(() => {
    const timeline = document.querySelector(".timeline");
    const timelineContainers = document.querySelectorAll(".timeline-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            timeline.classList.add("show-line");
            timeline.classList.remove("hide-line");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    timelineContainers.forEach((container) => {
      observer.observe(container);
    });

    const handleScroll = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const top = timelineRect.top;
      const bottom = timelineRect.bottom;

      if (top > window.innerHeight / 2 || bottom < window.innerHeight / 2) {
        timeline.classList.remove("show-line");
        timeline.classList.add("hide-line");
      } else {
        timeline.classList.add("show-line");
        timeline.classList.remove("hide-line");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <SectionButton btnText="Personal Info" />
      <div className="timeline hide-line">
        <div className="timeline-container left">
          <p className="content-link">
            <div className="content">
              <p>Full Name :</p>
              <p>Kalyani Naumaan Khan Amin</p>
            </div>
          </p>
        </div>
        <div className="timeline-container right">
          <p className="content-link">
            <div className="content">
              <p>Date Of Birth :</p>
              <p>8th March 2002</p>
            </div>
          </p>
        </div>
        <div className="timeline-container left">
          <p className="content-link">
            <div className="content">
              <p>Age:</p>
              <p>22</p>
            </div>
          </p>
        </div>
        <div className="timeline-container right">
          <p className="content-link">
            <div className="content">
              <p>Religion:</p>
              <p>
                <span> Muslim (Sunni) </span>
              </p>
            </div>
          </p>
        </div>
        <div className="timeline-container left">
          <p className="content-link">
            <div className="content">
              Profession:<span> As you can see A Web Developer &#128516; </span>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
