/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ourteams } from "./our-team";

const OurTeam = () => {
  const [state, isState] = useState(0);
  const handleNextBtn = () => {
    isState(state + 1);
    if (state === ourteams.length - 1) {
      isState(0);
    }
  };
  const handlePrevBtn = () => {
    isState(state - 1);
    if (state === 0) {
      isState(ourteams.length - 1);
    }
  };
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <article className="our-team">
      <section className="our-team-holder">
        <div className="our-team-header">
          <h2>our team</h2>
          <div className="our-work-underline"></div>
        </div>
        <div className="team-cont">
          <div className="our-team-para">
            <p>
              <big>BIG </big>ideas from a small team working with
              <span className="gold2"> you</span>, for you.
            </p>
          </div>
          <div className="team-list">
            <div className="team">
              <img
                src={ourteams[state].images}
                alt={ourteams[state].name}
                onClick={() => {
                  handleModal();
                }}
              />
              <button
                onClick={() => {
                  handlePrevBtn();
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={() => {
                  handleNextBtn();
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {modal && (
        <div className="our-work-modal">
          <div
            className="close-btn home-page-modal"
            onClick={() => {
              setModal(false);
            }}
          >
            <i className="far fa-window-close"></i>
          </div>
          <img src={ourteams[state].images} alt={ourteams[state].title} />
          <div className="modal-text">
            <h2>{ourteams[state].title}</h2>
            <p>{ourteams[state].desc}</p>
          </div>
        </div>
      )}
    </article>
  );
};
export default OurTeam;
