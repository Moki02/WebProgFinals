import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, Routes
import Navigation from './Navigation.js';
import Slider from './Slider';
import Featured from './Featured';
import AboutUs from './AboutUs';
import Gallery from './Gallery.js';
import Menu from './Menu.js';
import Testimonial from './Testimonial.js';
import Footer from './Footer.js';
import Order from './Order.js';
import Gallery2 from './Gallery2.js';
import LoginSignup from './LoginSignup'; // Import the LoginSignup component

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<><Slider /><Featured /><AboutUs /><Gallery /><Menu /><Testimonial /><Order /><Gallery2/><Footer /></>} />
          <Route path="/login" element={<LoginSignup />} /> {/* Add the route for LoginSignup */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
