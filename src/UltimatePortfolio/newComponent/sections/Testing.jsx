import React, { useEffect, useState } from "react";
import "../style/theme.css";
import AOS from "aos";
// import "aos/dist/aos.css";
import { heroSliderData } from "../components/data";
const About = () => {
  const [heroSlider, setHeroSlider] = useState(heroSliderData);
  console.log(setHeroSlider);  
  useEffect(() => {
    const button = document.querySelector(".button");
    if (button) {
      button.classList.add("new-class"); // Example action
    }
  }, []);

  return (
    <>
    <section id="intro">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center about-btn-wrapper">
          <div className="button-wrapper">
            <button
              className="button"
              type="button"
              data-aos="fade-right "
              data-aos-duration="3000"
            >
              about
            </button>
            <div className="button-bg"></div>
          </div>
        </div>

        <div className="row introduction">
          <div
            className="col-xl-5 hero-bg"
            data-aos="flip-right"
            data-aos-offset="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="1500"
            >
              <div className="carousel-indicators">
                {heroSlider.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
              <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
                {heroSlider.map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={item.img}
                      className="d-block w-100"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="d-flex mobile-design"></div>
            <div className="">
              <p id="companionMethods"></p>
              <p
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="1000"
                data-aos-offset="0"
              >
                I am <strong className="highlight">Naumaan Kalyani </strong> , a
                passionate Frontend Web Developer from Ahmedabad, India and
                Tries to give my potential to its fullest, bringing you web
                development and design from the future. My expertise is
                developing next-level websites and web applications including
                full frontend design.
              </p>
            </div>
            <div
              className="flexbox"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="2000"
              data-aos-offset="0"
            >
              <div className="mouse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default About;
