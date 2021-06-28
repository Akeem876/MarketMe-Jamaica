import React, { useState } from "react";
import logo from "./MarketMe/images//market-me-logo.png";
import { Link } from "react-router-dom";
import OurServices from "./OurServices";
import Footer from "./Footer";

const Services = () => {
  const [nav, isNav] = useState(false);

  return (
    <main>
      <nav className="services-nav" id="home">
        <div className="nav">
          <Link to="/">
            <div className="logo">
              <img
                style={{ height: "50px" }}
                src={logo}
                alt=" Market Me logo"
              />
            </div>
          </Link>
          <div className="navigation">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
            </ul>
            <ul>
              <Link to="/our-services">
                <li>Services</li>
              </Link>
              <div className="underline"></div>
            </ul>
            <ul>
              <Link to="/#work">
                <li>Work</li>
              </Link>
            </ul>
            <ul>
              <Link to="/#contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div
            className="hamburger-cont"
            onClick={() => {
              isNav(!nav);
            }}
          >
            <div className="burger1"></div>
            <div className="burger2"></div>
            <div className="burger3"></div>
          </div>
        </div>
        {nav && (
          <div className="modal-nav">
            <div
              className="close-btn"
              onClick={() => {
                isNav(false);
              }}
            >
              <i className="far fa-window-close"></i>
            </div>
            <div className="nav-area">
              <div className="navi">
                <ul>
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                </ul>
                <ul>
                  <Link to="/our-services">
                    <li>Services</li>
                  </Link>
                </ul>
                <ul>
                  <a href="#work">
                    <li>Work</li>
                  </a>
                </ul>
                <ul>
                  <a href="#contact">
                    <li>Contact</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
      <OurServices />
      <Footer />
      <div className="to-top">
        <a href="#home">
          <button className="to-top-button">
            <i className="fas fa-arrow-circle-up"></i>
          </button>
        </a>
      </div>
    </main>
  );
};

export default Services;
