import React from "react";
import logo from "./MarketMe/images/market-me-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <Link to="/">
          <div className="logo">
            <img style={{ height: "50px" }} src={logo} alt=" Market Me logo" />
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
    </nav>
  );
};
export default Nav;
