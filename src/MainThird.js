/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import next from "./MarketMe/icons/chevron-right-solid.svg";
import prev from "./MarketMe/icons/chevron-left-solid.svg";
import { ourWork } from "./our-work";

const MainThird = () => {
  const [state, isState] = useState(0);
  const handleNextBtn = () => {
    isState(state + 1);
    if (state === ourWork.length - 1) {
      isState(0);
    }
  };
  const handlePrevBtn = () => {
    isState(state - 1);
    if (state === 0) {
      isState(ourWork.length - 1);
    }
  };
  console.log(state);
  return (
    <section className="main-third">
      <article className="our-work" id="work">
        <div className="our-work-header">
          <h2>our work</h2>
          <div className="our-work-underline"></div>
        </div>
        <div className="our-work-body">
          <div className="our-work-para">
            <p>
              This is just a look at some of the fun projects that we have been
              working on recently. Whether our clients require a full service or
              supplementary campaign, we work to develop and execute plans with{" "}
              <span className="gold">results.</span>
            </p>
          </div>
          <article className="our-work-peices">
            <div className="work-peice">
              <div className="peices">
                <img src={ourWork[state].image} alt={ourWork[state].title} />
              </div>
              <button
                onClick={() => {
                  handlePrevBtn();
                }}
              >
                <i className="fas third-prev fa-chevron-left"></i>
              </button>
              <button
                onClick={() => {
                  handleNextBtn();
                }}
              >
                <i className="fas third-next fa-chevron-right"></i>
              </button>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};
export default MainThird;
