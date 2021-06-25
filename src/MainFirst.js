import React from "react";
import Nav from "./Nav";

const MainFirst = () => {
  return (
    <section className="main-first">
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
    </section>
  );
};

export default MainFirst;
