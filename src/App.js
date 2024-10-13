import React from 'react';
import './App.css';
import Navigation from './Navigation.js';
import Slider from './Slider';
import Featured from './Featured';
import AboutUs from './AboutUs';
import Gallery from './Gallery.js';
import Menu from "./Menu.js";
import Testimonial from './Testimonial.js';
import Footer from './Footer.js';
import Order from './Order.js';
import Gallery2 from './Gallery2.js';

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
      <Order />
      <Gallery2/>
      <Footer />
    </div>
  );
}

export default App;
