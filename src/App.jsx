import React from 'react'
import { MainPage } from './Components/MainPage'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FullPageScroll from './Pages/LandingPage'
import TextReveal from './UltimatePortfolio/newComponent/TextReveal'
import OverlappingSections from './UltimatePortfolio/newComponent/style/OverlappingSections';
import TextSplitAnimation from './UltimatePortfolio/newComponent/components/textSplit';
import Slider from './UltimatePortfolio/newComponent/sections/slider';

const App = () => {
  return (
   

    // <div style={{ padding: '50px', fontSize: '2rem' }}>
    //   <TextSplitAnimation text="Scroll to See Animation!" />
    //   <div style={{ height: '100vh' }} /> {/* Placeholder to allow scrolling */}
    //   <TextSplitAnimation text="Another Animated Text!" />
    //   <div style={{ height: '100vh' }} /> {/* Placeholder to allow scrolling */}
    // </div>

    //  <MainPage/>
    // {/* <TextSplitAnimation/> */}
    <TextReveal/> 
    // <Slider/>
    // {/* <OverlappingSections/> */}
    
    // <FullPageScroll/>
  )
}

export default App