import React from "react";
import next from "./MarketMe/icons/chevron-right-solid.svg";
import prev from "./MarketMe/icons/chevron-left-solid.svg";
import { ourWork } from "./our-work";

const MainThird = () => {
  return (
    <section className="main-third">
      <article className="our-work">
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
                <img
                  style={{ height: "250px" }}
                  src={ourWork.image[6]}
                  alt=""
                />
              </div>
            </div>
            <button>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button>
              <i className="fas fa-chevron-right"></i>
            </button>
          </article>
        </div>
      </article>
    </section>
  );
};
export default MainThird;
