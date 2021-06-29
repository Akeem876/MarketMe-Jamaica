/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

const MainFirst = () => {
  const [visibility, setVisibility] = useState(false);
  const shows = 500;
  const handleScroll = () => {
    if (window.pageYOffset > shows) {
      if (!visibility) setVisibility(true);
    } else {
      if (visibility) setVisibility(false);
    }
  };
  useEffect(() => {
    if (shows) {
      window.addEventListener("scroll", handleScroll);
      // return () => {
      //   window.removeEventListener("scroll", handleScroll);
      // };
    }
  }, [handleScroll]);
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
      {visibility && (
        <div className="top-top">
          <a href="#home">
            <button className="to-top-button">
              <i className="fas fa-arrow-circle-up"></i>
            </button>
          </a>
        </div>
      )}
    </section>
  );
};

export default MainFirst;
