import React, { useEffect } from 'react';
import '../style/timeline.css'
import { SectionButton } from '../components/ReusableComponents';

const Timeline = () => {
  useEffect(() => {
    const timeline = document.querySelector('.timeline');
    const timelineContainers = document.querySelectorAll('.timeline-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          timeline.classList.add('show-line');
          timeline.classList.remove('hide-line');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.8,
    });

    timelineContainers.forEach((container) => {
      observer.observe(container);
    });

    const handleScroll = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const top = timelineRect.top;
      const bottom = timelineRect.bottom;

      if (top > window.innerHeight / 2 || bottom < window.innerHeight / 2) {
        timeline.classList.remove('show-line');
        timeline.classList.add('hide-line');
      } else {
        timeline.classList.add('show-line');
        timeline.classList.remove('hide-line');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
<SectionButton btnText="Personal Info" />
    <div className="timeline hide-line">
      <div className="timeline-container left">
        <a href="#" className="content-link">
          <div className="content">
            <span className="icon"><i className="fas fa-map-marked-alt"></i></span> Full Name :Kalyani Naumaan Khan Amin 
          </div>
        </a>
      </div>
      <div className="timeline-container right">
        <a href="#" className="content-link">
          <div className="content">
            <span className="icon"><i className="fas fa-filter"></i></span>Date Of Birth :8th March 2002 
          </div>
        </a>
      </div>
      <div className="timeline-container left">
        <a href="#" className="content-link">
          <div className="content">
            <span className="icon"><i className="fas fa-user"></i></span> Age:22 
          </div>
        </a>
      </div>
      <div className="timeline-container right">
        <a href="#" className="content-link">
          <div className="content">
            <span className="icon"><i className="fas fa-phone-alt"></i></span> Religion:<span> Muslim (Sunni) </span>
          </div>
        </a>
      </div>
      <div className="timeline-container left">
        <a href="#" className="content-link">
          <div className="content">
            <span className="icon"><i className="fas fa-heart"></i></span> Profession:<span> As you can see A Web Developer &#128516; </span>
          </div>
        </a>
      </div>
    </div>
    </section>
  );
};

export default Timeline;
