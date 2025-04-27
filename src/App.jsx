import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import TextReveal from './UltimatePortfolio/newComponent/components/TextReveal';
import HorizontalScroll from "./UltimatePortfolio/newComponent/components/HorizontalScroll";
import PageLoader from "./UltimatePortfolio/newComponent/components/PageLoader";
import "./UltimatePortfolio/newComponent/style/theme.css";
import "../src/UltimatePortfolio/newComponent/style/Responsive.css";
// import "./UltimatePortfolio/newComponent/style/ScrollPathAnimation.css";
import About from "./UltimatePortfolio/newComponent/sections/Testing";
import "../src/UltimatePortfolio/newComponent/style/override.css";
import TechStack from "./UltimatePortfolio/newComponent/sections/TechStack";
import ContactUs from "./UltimatePortfolio/newComponent/sections/ContactUs";
// import BeePathAnimation from "./UltimatePortfolio/newComponent/components/ProfessionalJourney";
// import Timeline from './UltimatePortfolio/newComponent/sections/TimelineSection';
// import PhotoGrid from './UltimatePortfolio/newComponent/sections/PhotoGrid';
const App = () => {
  return (
    <>
      <PageLoader />
      <HorizontalScroll />
      <About />
      {/* <Timeline/> */}
      {/* <TextReveal/>      */}
      {/* <PhotoGrid/> */}
      {/* <BeePathAnimation /> */}
      <TechStack />
      <ContactUs />
    </>
  );
};

export default App;
