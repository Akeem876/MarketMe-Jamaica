import React from "react";
import { ourteams } from "./our-team";

const OurTeam = () => {
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
            <img style={{ height: "250px" }} src={ourteams.images[0]} alt="" />
            <button>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
export default OurTeam;
