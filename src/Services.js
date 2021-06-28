import React from "react";
import logo from "./MarketMe/images//market-me-logo.png";
import { Link } from "react-router-dom";
import OurServices from "./OurServices";
import Footer from "./Footer";

const Services = () => {
  return (
    <main>
      <nav className="services-nav">
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
          <div className="hamburger-cont">
            <div className="burger1"></div>
            <div className="burger2"></div>
            <div className="burger3"></div>
          </div>
        </div>
      </nav>
      <OurServices />
      <Footer />
    </main>
  );
};

export default Services;
