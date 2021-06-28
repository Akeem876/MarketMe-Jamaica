import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

const MainFirst = () => {
  return (
    <section className="main-first" id="home">
      <div className="overlay">
        <Nav />
        <div className="top-frame">
          <div className="top-text">
            <h2>Telling Stories</h2>
          </div>
          <div className="separator"></div>
          <div className="bottom-text">
            <h2>Building Brands</h2>
          </div>
        </div>
      </div>
      <div className="to-top">
        <a href="#home">
          <button className="to-top-button">
            <i className="fas fa-arrow-circle-up"></i>
          </button>
        </a>
      </div>
    </section>
  );
};

export default MainFirst;
