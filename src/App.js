import React from 'react';
import './App.css';
import Navigation from './Navigation.js';
import Slider from './Slider';
import Featured from './Featured';
import AboutUs from './AboutUs';
import Gallery from './Gallery.js';
import Menu from "./Menu.js";
import Testimonial from './Testimonial.js';


function App() {
  return (
    <div>
      <Navigation />
      <Slider />
      <Featured />
      <AboutUs />
      <Gallery />
      <Menu />
      <Testimonial />

    </div>
  );
}

export default App;