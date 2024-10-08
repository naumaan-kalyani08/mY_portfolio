import React from "react";
import { ISlideConfig, PageSlides, SlideParallaxType } from "react-page-slides";

export const MainPage = () => {
  const slides: ISlideConfig[] = [
    {
      content: (
        <div className="slide slide-1">
          <p className="text">first page content</p>
        </div>
      ),
    },
    {
      content:
      <div className="slide slide-2">
      <p className="text">first page content</p>
    </div>,
    },
    {
      content:
      <div className="slide slide-2">
      <p className="text">first page content</p>
    </div>,
    },
  ];
  return (
    <PageSlides
      enableAutoScroll={true}
      transitionSpeed={1000}
      slides={slides}
      parallax={{
        offset: 1,
        type: SlideParallaxType.cover,
      }}
    />
  );
};
