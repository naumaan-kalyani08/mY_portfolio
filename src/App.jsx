import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import TextReveal from './UltimatePortfolio/newComponent/components/TextReveal';
import HorizontalScroll from './UltimatePortfolio/newComponent/components/HorizontalScroll';
import PageLoader from './UltimatePortfolio/newComponent/components/PageLoader';
import'./UltimatePortfolio/newComponent/style/Responsive.css'
import About from './UltimatePortfolio/newComponent/sections/Testing';
import PersonalDetails from './UltimatePortfolio/newComponent/sections/PersonalDetails';
const App = () => {
  return (
    <>
     <PageLoader/>
    <HorizontalScroll/>
    <About/>
    <PersonalDetails/>
     {/* <TextReveal/>      */}
    </>
  )
}

export default App