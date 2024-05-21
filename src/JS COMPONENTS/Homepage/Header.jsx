import React, { useState, useEffect } from 'react';
import { FaPhoneAlt,FaPeriscope   } from "react-icons/fa";
import '../CSS style/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '/src/assets/civil_enginear_man_logo-removebg-preview.png'

function Header() {



const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks); 
  };

  return (
  
<header className="header" aria-labelledby="Website Banner">
  <section>
    <div className="top_bar">
      <p className="para_header">{`WE HAVE OVER 23 YEARS OF EXPERIENCE`}</p>
      <ul className='header_ul'>
        <li className="header_li1"><i><FaPhoneAlt className="icon_telephone" /></i> 9932737156 / 8535912770</li>
        <li className="header_li1"><i><FaPeriscope className="icon_telephone" /></i> Mirzabazar, Medinipur - 721101</li>
      </ul>
    </div>
  </section>
  <div className="container">
    <div className="main_header">
      <div className="logo-heading-nav-div">
        <div className="logo-heading-div">
          <img className="header_image" src={logo} alt="website-logo" />
          <h1 className="main_heading">Rajendra Engineering Consultancy</h1>
        </div>
        <nav className="navbar navbar-expand-sm navbar-light" aria-label="Main Navigation">
          <div className={`collapse navbar-collapse ${showLinks ? 'show-links' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/WorkSample">WorkSample</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactUs">Contact</NavLink>
              </li>
            </ul>
            <div className='span-div' data-aos='fade'>
              <Link to="/contactUs"><button className='span'>Get a Sketch</button></Link>
            </div>
          </div>
        </nav>
        <button className="toggle-menu" onClick={toggleLinks} aria-label="Toggle Menu">&#9776;</button>
      </div>
    </div>
  </div>
</header>


  )
}

export default Header;