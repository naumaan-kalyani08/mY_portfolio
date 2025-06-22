import React, { useEffect, useState } from "react";
// import "../style/theme.css";
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
    <section id="about">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center about-btn-wrapper py-3">
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

        <div className="row introduction justify-content-center">
          <div
            className="col-xl-4 hero-bg"
            data-aos="flip-right"
            data-aos-offset="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="3000"
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

          <div className="col-xl-8">
            <div className="d-flex mobile-design"></div>
            <div className="">
              <div className="d-flex row align-items-center name-wrapper">
                <div className="col-lg-6 col-8">
                  <p className="intro-name highlight">
                    Naumaan <br /> Kalyani
                  </p>
                </div>
                <div className="col-lg-3 col-4">
                  <div className="mobile-flex">
                    <img
                      src="./logo192.png"
                      className="App-logo"
                      alt="react-logo"
                    />
                  </div>
                </div>
              </div>
              {/* <p>
                I'm a Web Developer
              </p> */}
              <p id="companionMethods"></p>
              <p
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="1000"
                data-aos-offset="0"
                className="about-intro"
              >
                A passionate Frontend Web Developer from Ahmedabad, India and
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
  );
};

export default About;
