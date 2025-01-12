import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "../style/photogrid.css";
import { SectionButton } from "../components/ReusableComponents";
const PhotoGrid = () => {
  return (
    <section>
      <div className="container">
        <SectionButton btnText="Best Moments" />
        <p className="text-center text-white"> press on any image to have a better view </p>
        <div className="masonry-grid">
        <Gallery>
          <Item
            original="http://localhost:3000/images/heroSlider/hero-1.jpg"
            thumbnail="http://localhost:3000/images/heroSlider/hero-1.jpg"
            width="400"
            height="600"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                width={300}
                onClick={open}
                src="http://localhost:3000/images/heroSlider/hero-1.jpg"
              />
            )}
          </Item>
          <Item
            original="http://localhost:3000/images/heroSlider/hero-02.jpg"
            thumbnail="http://localhost:3000/images/heroSlider/hero-02.jpg"
            width="400"
            height="600"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                width={300}
                onClick={open}
                src="http://localhost:3000/images/heroSlider/hero-02.jpg"
              />
            )}
          </Item>

          <Item
            original="http://localhost:3000/images/heroSlider/hero-1.jpg"
            thumbnail="http://localhost:3000/images/heroSlider/hero-1.jpg"
            width="400"
            height="600"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                width={300}
                onClick={open}
                src="http://localhost:3000/images/heroSlider/hero-1.jpg"
              />
            )}
          </Item>

          <Item
            original="http://localhost:3000/images/heroSlider/hero-02.jpg"
            thumbnail="http://localhost:3000/images/heroSlider/hero-02.jpg"
            width="400"
            height="600"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                width={300}
                onClick={open}
                src="http://localhost:3000/images/heroSlider/hero-02.jpg"
              />
            )}
          </Item>

          <Item
            original="http://localhost:3000/images/heroSlider/hero-1.jpg"
            thumbnail="http://localhost:3000/images/heroSlider/hero-1.jpg"
            width="400"
            height="600"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                width={300}
                onClick={open}
                src="http://localhost:3000/images/heroSlider/hero-1.jpg"
              />
            )}
          </Item>
          <Item
            original="http://localhost:3000/images/heroSlider/hero-02.jpg"
            thumbnail="http://localhost:3000/images/heroSlider/hero-02.jpg"
            width="400"
            height="600"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                width={300}
                onClick={open}
                src="http://localhost:3000/images/heroSlider/hero-02.jpg"
              />
            )}
          </Item>

          <Item
            original="http://localhost:3000/images/heroSlider/hero-1.jpg"
            thumbnail="http://localhost:3000/images/heroSlider/hero-1.jpg"
            width="400"
            height="600"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                width={300}
                onClick={open}
                src="http://localhost:3000/images/heroSlider/hero-1.jpg"
              />
            )}
          </Item>

          <Item
            original="http://localhost:3000/images/heroSlider/hero-02.jpg"
            thumbnail="http://localhost:3000/images/heroSlider/hero-02.jpg"
            width="400"
            height="600"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                width={300}
                onClick={open}
                src="http://localhost:3000/images/heroSlider/hero-02.jpg"
              />
            )}
          </Item>
        </Gallery>
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
