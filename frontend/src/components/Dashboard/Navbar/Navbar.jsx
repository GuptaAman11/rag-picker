import React from 'react'
import "./../Navbar/Navbar.css"
import { useState } from "react";
import Slider from './Slider';
import { Link } from 'react-router-dom';
const Navbar = ( ) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <div className="n-mian">
        <nav className="navbar">
          <div className="logo">
            <button
              id="toggleButton"
              onClick={(toggleContent )}
            >
              <i className="fas fa-solid fa-sliders"></i>
            </button>
            <div id="toggleContent" className={isVisible ? "" : "hidden"}>
              <Slider />
            </div>
          </div>
          <div className="search-bar">
            <h1 className="d-dash">Dashboard</h1>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Link to='#'>
                <i className="fas fa-bell"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar